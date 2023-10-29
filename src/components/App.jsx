import user from './profile/user.json';
import data from './statistics/data.json';
import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
