import { ListItem, Status, Img, Text, Icon } from './FriendListItem.styled.js';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ListItem>
      <Status $isOnline={isOnline}>
        <Icon size="24px" />
      </Status>
      <Img src={avatar} alt="User avatar" width="68" />
      <Text>{name}</Text>
    </ListItem>
  );
};
