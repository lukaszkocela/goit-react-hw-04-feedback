import propTypes from 'prop-types';
import css from './Notification.module.css';

export const Notification = ({ message }) => {
  return <p className={css.title}>{message}</p>;
};

Notification.propTypes = {
  message: propTypes.string,
};