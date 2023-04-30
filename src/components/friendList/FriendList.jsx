import PropTypes from 'prop-types';
import css from './FriendList.module.css'

export default function FriendList({friends}) {
    return (<ul className={css.friendList}>
       
       {friends.map(({ avatar, name, isOnline, id }) => (
          <li className={css.item} key={id}> 
           <span className={css.status} style={{ backgroundColor: isOnline ? 'green' : 'red' }} />
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
</li> 
))}
      
</ul>)   
}

FriendList.propTypes = {
   friends: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
   })), 
}