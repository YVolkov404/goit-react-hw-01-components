const FriendListItem = ({ friends: { avatar, name, isOnline } }) => {
  return (
    <li className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        return <FriendListItem key={friend.id} friends={friend} />;
      })}
    </ul>
  );
};
