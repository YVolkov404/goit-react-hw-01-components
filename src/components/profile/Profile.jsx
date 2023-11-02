import {
  Content,
  Descr,
  Img,
  Name,
  Tag,
  Icon,
  Location,
  List,
  Item,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Content>
      <Descr>
        <Img src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>
          <Icon />
          {tag}
        </Tag>
        <Location>{location}</Location>
      </Descr>
      <List>
        <Item>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Item>
      </List>
    </Content>
  );
};
