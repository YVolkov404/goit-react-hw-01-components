import user from './profile/user.json';
import data from './statistics/data.json';
import friends from './friend-list/friends.json';
import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friend-list/FriendList';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
    </div>
  );
};
