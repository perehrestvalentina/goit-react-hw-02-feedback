import PropTypes from 'prop-types';
import css from '../Notification/Notification.module.css';

const Notification = ({ message }) => {
  return <span className={css.item}>{message}</span>;
};

Notification.protoTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
