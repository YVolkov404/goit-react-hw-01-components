import {
  ProfileContent,
  ProfileDescr,
  ProfileImg,
  ProfileName,
  ProfileTag,
  TagAtIcon,
  ProfileLocation,
  StatsList,
  ListItem,
  ItemLabel,
  ItemQuantity,
} from './Profile.styled';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <ProfileContent>
      <ProfileDescr>
        <ProfileImg src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>
          <TagAtIcon />
          {tag}
        </ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDescr>
      <StatsList>
        <ListItem>
          <ItemLabel>Followers</ItemLabel>
          <ItemQuantity>{followers}</ItemQuantity>
        </ListItem>
        <ListItem>
          <ItemLabel>Views</ItemLabel>
          <ItemQuantity>{views}</ItemQuantity>
        </ListItem>
        <ListItem>
          <ItemLabel>Likes</ItemLabel>
          <ItemQuantity>{likes}</ItemQuantity>
        </ListItem>
      </StatsList>
    </ProfileContent>
  );
};
