import PropTypes from 'prop-types';

export default function FriendList({friends}) {
    return (<ul className="friend-list">
       
       {friends.map(({ avatar, name, isOnline, id }) => (
          <li className="item" key = {id}>
               <span className="status">{isOnline ? "online": "offline" }</span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
</li> 
))}
      
</ul>)   
}

FriendList.propTypes = {
   friends: PropTypes.array, 
}