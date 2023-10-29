import { StatListEl } from './StatListEl';

const StatListTitle = ({ title }) => {
  return <h2 className="title">{title}</h2>;
};

const StatList = ({ stats }) => {
  return (
    <ul>
      {stats.map(data => {
        return (
          <li key={data.id}>
            <StatListEl stats={data} />
          </li>
        );
      })}
    </ul>
  );
};

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <StatListTitle title={title} />
      <StatList stats={stats} />
    </section>
  );
};
