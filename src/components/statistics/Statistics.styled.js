import styled from 'styled-components';
import { MdOutlinePercent } from 'react-icons/md';

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

export const StatisticsWrapper = styled.div`
  width: 300px;
  margin-bottom: 30px;
  border-radius: 0 0 5px 5px;
  box-shadow: 0px 0px 3px 0px rgba(4, 54, 74, 0.74);
  overflow: hidden;
`;

export const StatisticsSection = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ListTitle = styled.h2`
  padding: 20px 0;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  color: #04364a;
  border-bottom: 2px solid #176b87;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
`;

export const ListEl = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: calc((100% - 4px) / 4);
  text-align: center;
  padding: 10px 0;
  background-color: ${getRandomHexColor};
  border-right: 1px solid #dafffb;
  &:nth-child(5) {
    border-right: none;
  }
`;

export const ElLabel = styled.span`
  font-size: 14px;
  letter-spacing: 0.03em;
  color: #dafffb;
`;

export const ElPercentage = styled.span`
  font-size: 15px;
  color: #dafffb;
`;

export const PercentageIcon = styled(MdOutlinePercent)`
  fill: #dafffb;
  vertical-align: bottom;
`;
