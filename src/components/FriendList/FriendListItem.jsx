import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export default function FriendListItem({ isOnline, imageUrl, name }) {
  return (
    <>
      <span
        className={css.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      />
      <img className={css.avatar} src={imageUrl} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
