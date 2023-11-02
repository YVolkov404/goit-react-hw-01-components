import {
  Container,
  Section,
  Title,
  List,
  Item,
  Label,
  Percentage,
  Icon,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      <Section>
        <Title>{title}</Title>
        <List>
          {stats.map(({ id, label, percentage }) => {
            return (
              <Item key={id}>
                <Label>{label}</Label>
                <Percentage>
                  {percentage}
                  <Icon />
                </Percentage>
              </Item>
            );
          })}
        </List>
      </Section>
    </Container>
  );
};
