import { MdOutlinePercent } from 'react-icons/md';

export const StatListEl = ({ stats: { label, percentage } }) => {
  return (
    <ul className="stat-list">
      <li className="item">
        <span className="label">{label}</span>
        <span className="percentage">
          {percentage}
          <MdOutlinePercent />
        </span>
      </li>
    </ul>
  );
};
