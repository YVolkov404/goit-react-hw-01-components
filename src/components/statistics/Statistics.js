import {
  StatisticsWrapper,
  StatisticsSection,
  ListTitle,
  List,
  ListEl,
  ElLabel,
  ElPercentage,
  PercentageIcon,
} from './Statistics.styled';

const StatListTitle = ({ title }) => {
  return <ListTitle>{title}</ListTitle>;
};

const StatListEl = ({ stats: { label, percentage } }) => {
  return (
    <ListEl>
      <ElLabel>{label}</ElLabel>
      <ElPercentage>
        {percentage}
        <PercentageIcon />
      </ElPercentage>
    </ListEl>
  );
};

const StatList = ({ stats }) => {
  return (
    <List>
      {stats.map(data => {
        return <StatListEl key={data.id} stats={data} />;
      })}
    </List>
  );
};

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrapper>
      <StatisticsSection>
        <StatListTitle title={title} />
        <StatList stats={stats} />
      </StatisticsSection>
    </StatisticsWrapper>
  );
};
