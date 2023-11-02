import {
  Container,
  Table,
  Body,
  Head,
  Header,
  Row,
  Data,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Container>
      <Table>
        <Head>
          <Row>
            <Header>Type</Header>
            <Header>Amount</Header>
            <Header>Currency</Header>
          </Row>
        </Head>
        <Body>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <Row key={id}>
                <Data>{type}</Data>
                <Data>{amount}</Data>
                <Data>{currency}</Data>
              </Row>
            );
          })}
        </Body>
      </Table>
    </Container>
  );
};
