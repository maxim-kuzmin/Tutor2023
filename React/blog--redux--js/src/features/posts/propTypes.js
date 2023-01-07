import PropTypes from 'prop-types';

const propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    user: PropTypes.string,
    date: PropTypes.string,
    content: PropTypes.string,
  }),
};

export default propTypes;
