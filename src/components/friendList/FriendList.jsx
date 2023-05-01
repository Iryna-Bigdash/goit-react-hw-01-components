import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
          <FriendListItem
            isOnline={friend.isOnline}
            imageUrl={friend.avatar}
            name={friend.name}
          />
        </li>
      ))}
    </ul>
  );
}
