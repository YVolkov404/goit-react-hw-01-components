import user from './profile/user.json';
import data from './statistics/data.json';
import friends from './friend-list/friends.json';
import transactions from './transaction-history/transactions.json';
import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friend-list/FriendList';
import { TransactionHistory } from './transaction-history/TransactionHistory';

import { AppContainer, SubContainer } from './App.styled';

export const App = () => {
  return (
    <AppContainer>
      <SubContainer>
        <Profile user={user} />
        <Statistics title="Upload stats" stats={data} />
      </SubContainer>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </AppContainer>
  );
};
