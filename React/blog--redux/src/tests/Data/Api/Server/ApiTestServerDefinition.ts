import { parseISO } from 'date-fns';
import { faker } from '@faker-js/faker';
import { factory, oneOf, manyOf, primaryKey } from '@mswjs/data';
import { nanoid } from '@reduxjs/toolkit';
import { type Client, Server as MockSocketServer } from 'mock-socket';
import { rest, setupWorker } from 'msw';
import seedrandom from 'seedrandom';
import {
  type PostDomainReactionType,
  type PostDomainEntity,
  type UserDomainEntity,
  createUserDomainEntity,
  createPostDomainEntity,
  createPostDomainReactionsValueObject,
  type UserDomainListGetOperationOutput,
  createUserDomainListGetOperationOutput,
} from '../../../../domains';
import {
  type PostTypeEntity,
  createPostTypeEntity,
  createUserTypeEntity,
  type ApiResponseWithData,
  createApiResponseWithData
} from '../../../../data';
import {
  type ApiTestServerPostTypeEntity,
  type ApiTestServerUserTypeEntity,
  type ApiTestServerNotificationTypeEntity,
  createApiTestServerPostTypeEntity,
  createApiTestServerUserTypeEntity,
  createApiTestServerNotificationTypeEntity,
} from './Types';

const NUM_USERS = 3;
const POSTS_PER_USER = 3;
const RECENT_NOTIFICATIONS_DAYS = 7;

// Add an extra delay to all endpoints, so loading spinners show up.
const ARTIFICIAL_DELAY_MS = 2000;

/* RNG setup */

// Set up a seeded random number generator, so that we get
// a consistent set of users / entries each time the page loads.
// This can be reset by deleting this localStorage value,
// or turned off by setting `useSeededRNG` to false.
const useSeededRNG = true;

let rng = seedrandom();

if (useSeededRNG) {
  let randomSeedString = localStorage.getItem('randomTimestampSeed');

  let seedDate;

  if (randomSeedString) {
    seedDate = new Date(randomSeedString);
  } else {
    seedDate = new Date();

    randomSeedString = seedDate.toISOString();

    localStorage.setItem('randomTimestampSeed', randomSeedString);
  }

  rng = seedrandom(randomSeedString);

  faker.seed(seedDate.getTime());
}

function getRandomInt (min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(rng() * (max - min + 1)) + min;
}

function randomFromArray (array: any[]): any {
  const index = getRandomInt(0, array.length - 1)
  return array[index];
}

/* MSW Data Model Setup */

const db = factory({
  user: {
    id: primaryKey(nanoid),
    firstName: String,
    lastName: String,
    name: String,
    username: String,
    posts: manyOf('post'),
  },
  post: {
    id: primaryKey(nanoid),
    title: String,
    date: String,
    content: String,
    reactions: oneOf('reaction'),
    comments: manyOf('comment'),
    user: oneOf('user'),
  },
  comment: {
    id: primaryKey(String),
    date: String,
    text: String,
    post: oneOf('post'),
  },
  reaction: {
    id: primaryKey(nanoid),
    thumbsUp: Number,
    hooray: Number,
    heart: Number,
    rocket: Number,
    eyes: Number,
    post: oneOf('post'),
  },
});

interface PostDataOptions {
  user: any;
}

function createPostData ({
  user
}: PostDataOptions): ApiTestServerPostTypeEntity {
  return createApiTestServerPostTypeEntity({
    title: faker.lorem.words(),
    date: faker.date.recent({ days: RECENT_NOTIFICATIONS_DAYS }).toISOString(),
    user,
    content: faker.lorem.paragraphs(),
    reactions: db.reaction.create(),
  });
}

function createUserData (): ApiTestServerUserTypeEntity {
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  const name = `${firstName} ${lastName}`;
  const username = faker.internet.userName();

  return createApiTestServerUserTypeEntity({
    firstName,
    lastName,
    name,
    username,
  });
}

// Create an initial set of users and posts
for (let i = 0; i < NUM_USERS; i++) {
  const user = db.user.create(createUserData())

  for (let j = 0; j < POSTS_PER_USER; j++) {
    const newPost = createPostData({ user });

    db.post.create(newPost);
  }
}

function convertToPostDomainEntity (dbEntity: ApiTestServerPostTypeEntity): PostDomainEntity {
  const {
    id,
    title,
    date,
    content,
    reactions: {
      thumbsUp,
      hooray,
      heart,
      rocket,
      eyes,
    }
  } = dbEntity;

  return createPostDomainEntity({
    data: createPostTypeEntity({ id, title, date, content }),
    reactions: createPostDomainReactionsValueObject({
      thumbsUp,
      hooray,
      heart,
      rocket,
      eyes,
    })
  });
}

function convertToUserDomainEntity (dbEntity: ApiTestServerUserTypeEntity): UserDomainEntity {
  const {
    id,
    firstName,
    lastName,
    name,
    username,
  } = dbEntity;

  return createUserDomainEntity({
    data: createUserTypeEntity({ id, firstName, lastName, name, username }),
  });
}

function convertToUserListApiResponse (
  dbEntities: ApiTestServerUserTypeEntity[]
): ApiResponseWithData<UserDomainListGetOperationOutput> {
  const items = dbEntities.map(dbEntity => convertToUserDomainEntity(dbEntity));

  const data = createUserDomainListGetOperationOutput({
    items,
    totalCount: items.length
  });

  return createApiResponseWithData({ data });
}

/* MSW REST API Handlers */

function createUrl (endpoint: string) {
  return `/fakeApi/${endpoint}`
}

const handlers = [
  rest.get(createUrl('posts'), async function (req, res, ctx) {
    const posts = db.post.getAll().map(convertToPostDomainEntity);
    return await res(ctx.delay(ARTIFICIAL_DELAY_MS), ctx.json(posts));
  }),
  rest.post(createUrl('posts'), async function (req, res, ctx) {
    const data: PostTypeEntity = await req.json();

    if (data.content === 'error') {
      return await res(
        ctx.delay(ARTIFICIAL_DELAY_MS),
        ctx.status(500),
        ctx.json('Server error saving this post!')
      );
    }

    data.date = new Date().toISOString()

    const user = db.user.findFirst({ where: { id: { equals: data.userId } } });

    const post = db.post.create(
      createApiTestServerPostTypeEntity({
        ...data,
        reactions: db.reaction.create(),
        user,
      })
    );

    const domainEntity = convertToPostDomainEntity(post);

    return await res(ctx.delay(ARTIFICIAL_DELAY_MS), ctx.json(domainEntity));
  }),
  rest.get(createUrl('posts/:postId'), async function (req, res, ctx) {
    const postId: string = Array.isArray(req.params) ? req.params.postId[0] : String(req.params.postId);

    const post = db.post.findFirst({
      where: { id: { equals: postId } },
    })!;

    return await res(ctx.delay(ARTIFICIAL_DELAY_MS), ctx.json(convertToPostDomainEntity(post)));
  }),
  rest.patch(createUrl('posts/:postId'), async (req, res, ctx) => {
    const postId: string = Array.isArray(req.params) ? req.params.postId[0] : String(req.params.postId);

    const { id, ...data }: PostTypeEntity = await req.json();

    const post = db.post.update({
      where: { id: { equals: postId } },
      data,
    })!;

    return await res(ctx.delay(ARTIFICIAL_DELAY_MS), ctx.json(convertToPostDomainEntity(post)));
  }),
  rest.get(createUrl('posts/:postId/comments'), async (req, res, ctx) => {
    const postId: string = Array.isArray(req.params) ? req.params.postId[0] : String(req.params.postId);

    const post = db.post.findFirst({
      where: { id: { equals: postId } },
    })!;

    return await res(
      ctx.delay(ARTIFICIAL_DELAY_MS),
      ctx.json({ comments: post.comments })
    )
  }),
  rest.post(createUrl('posts/:postId/reactions'), async (req, res, ctx) => {
    const postId: string = Array.isArray(req.params) ? req.params.postId[0] : String(req.params.postId);

    const reaction: PostDomainReactionType = (await req.json()).reaction;

    const post = db.post.findFirst({
      where: { id: { equals: postId } },
    })!;

    const updatedPost = db.post.update({
      where: { id: { equals: postId } },
      data: {
        reactions: {
          ...post.reactions!,
          [reaction]: (post.reactions![reaction] += 1),
        },
      },
    })!;

    return await res(ctx.delay(ARTIFICIAL_DELAY_MS), ctx.json(convertToPostDomainEntity(updatedPost)));
  }),
  rest.get(createUrl('notifications'), async (req, res, ctx) => {
    const numNotifications = getRandomInt(1, 5);

    const notifications = generateRandomNotifications('', numNotifications);

    return await res(ctx.delay(ARTIFICIAL_DELAY_MS), ctx.json(notifications))
  }),
  rest.get(createUrl('users'), async (req, res, ctx) => {
    const users = db.user.getAll();

    return await res(ctx.delay(ARTIFICIAL_DELAY_MS), ctx.json(convertToUserListApiResponse(users)))
  }),
];

export const worker = setupWorker(...handlers);
// worker.printHandlers() // Optional: nice for debugging to see all available route handlers that will be intercepted

/* Mock Websocket Setup */

const socketServer = new MockSocketServer('ws://localhost');

let currentSocket: Client;

const sendMessage = (socket: Client, obj: any) => {
  socket.send(JSON.stringify(obj))
}

// Allow our UI to fake the server pushing out some notifications over the websocket,
// as if other users were interacting with the system.
const sendRandomNotifications = (socket: Client, since: string) => {
  const numNotifications = getRandomInt(1, 5);

  const notifications = generateRandomNotifications(since, numNotifications);

  sendMessage(socket, { type: 'notifications', payload: notifications });
}

export const forceGenerateNotifications = (since: string) => {
  sendRandomNotifications(currentSocket, since);
}

socketServer.on('connection', (socket) => {
  currentSocket = socket;

  socket.on('message', (data) => {
    const message = JSON.parse(String(data));

    switch (message.type) {
      case 'notifications': {
        const since = message.payload;
        sendRandomNotifications(socket, since);
        break;
      }
      default:
        break;
    }
  })
});

/* Random Notifications Generation */

const notificationTemplates = [
  'poked you',
  'says hi!',
  'is glad we\'re friends',
  'sent you a gift',
];

function generateRandomNotifications (
  since: string,
  numNotifications: number
): ApiTestServerNotificationTypeEntity[] {
  const now = new Date();

  let pastDate: Date;

  if (since) {
    pastDate = parseISO(since);
  } else {
    pastDate = new Date(now.valueOf());
    pastDate.setMinutes(pastDate.getMinutes() - 15);
  }

  // Create N random notifications. We won't bother saving these
  // in the DB - just generate a new batch and return them.
  const result = [...Array(numNotifications)].map(() => {
    const user = randomFromArray(db.user.getAll())
    const template = randomFromArray(notificationTemplates)
    return createApiTestServerNotificationTypeEntity({
      id: nanoid(),
      date: faker.date.between({ from: pastDate, to: now }).toISOString(),
      message: template,
      userId: user.id,
    })
  });

  return result;
}
