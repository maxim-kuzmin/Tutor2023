import PropTypes from 'prop-types';

const propTypes = {
  postId: PropTypes.string,
};

propTypes.post = PropTypes.shape({
  id: propTypes.postId,
  title: PropTypes.string,
  user: PropTypes.string,
  date: PropTypes.string,
  content: PropTypes.string,
});

export default propTypes;
