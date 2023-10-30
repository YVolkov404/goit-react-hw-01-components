import { MdOutlinePercent } from 'react-icons/md';

const StatListTitle = ({ title }) => {
  return <h2 className="title">{title}</h2>;
};

const StatListEl = ({ stats: { label, percentage } }) => {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">
        {percentage}
        <MdOutlinePercent />
      </span>
    </li>
  );
};

const StatList = ({ stats }) => {
  return (
    <ul className="stat-list">
      {stats.map(data => {
        return <StatListEl key={data.id} stats={data} />;
      })}
    </ul>
  );
};

export const Statistics = ({ title, stats }) => {
  return (
    <div>
      <section className="statistics">
        <StatListTitle title={title} />
        <StatList stats={stats} />
      </section>
    </div>
  );
};
