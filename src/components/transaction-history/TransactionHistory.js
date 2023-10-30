const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  );
};

const TableRowItem = ({ items: { type, amount, currency } }) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

const TableBody = ({ items }) => {
  return (
    <tbody>
      {items.map(transaction => {
        return <TableRowItem key={transaction.id} items={transaction} />;
      })}
    </tbody>
  );
};

export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <TableHead />
      <TableBody items={items} />
    </table>
  );
};
