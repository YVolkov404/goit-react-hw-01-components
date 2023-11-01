import {
  FriendListWrapper,
  List,
  ListItem,
  ItemStatus,
  ItemImg,
  ItemText,
  CircleIcon,
} from './FriendList.styled';

const FriendListItem = ({ friends: { avatar, name, isOnline } }) => {
  return (
    <ListItem>
      <ItemStatus $isOnline={isOnline}>
        {isOnline} <CircleIcon size="24px" />
      </ItemStatus>
      <ItemImg src={avatar} alt="User avatar" width="68" />
      <ItemText>{name}</ItemText>
    </ListItem>
  );
};

export const FriendList = ({ friends }) => {
  return (
    <FriendListWrapper>
      <List>
        {friends.map(friend => {
          return <FriendListItem key={friend.id} friends={friend} />;
        })}
      </List>
    </FriendListWrapper>
  );
};
