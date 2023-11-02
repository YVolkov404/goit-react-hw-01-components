import { FriendListItem } from './FriendListItem';
import { Container, List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Container>
      <List>
        {friends.map(({ id, avatar, name, isOnline }) => {
          return (
            <FriendListItem
              key={id}
              avatar={avatar}
              name={name}
              isOnline={isOnline}
            />
          );
        })}
      </List>
    </Container>
  );
};
