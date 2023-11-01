import {
  TransactionHistoryContainer,
  TableWrap,
  TableBodyWrap,
  TableHeadWrap,
  TableHeader,
  TableRow,
  TableData,
} from './TransactionHistory.styled';

const TableHead = () => {
  return (
    <TableHeadWrap>
      <TableRow>
        <TableHeader>Type</TableHeader>
        <TableHeader>Amount</TableHeader>
        <TableHeader>Currency</TableHeader>
      </TableRow>
    </TableHeadWrap>
  );
};

const TableRowItem = ({ items: { type, amount, currency } }) => {
  return (
    <TableRow>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </TableRow>
  );
};

const TableBody = ({ items }) => {
  return (
    <TableBodyWrap>
      {items.map(transaction => {
        return <TableRowItem key={transaction.id} items={transaction} />;
      })}
    </TableBodyWrap>
  );
};

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryContainer>
      <TableWrap>
        <TableHead />
        <TableBody items={items} />
      </TableWrap>
    </TransactionHistoryContainer>
  );
};
