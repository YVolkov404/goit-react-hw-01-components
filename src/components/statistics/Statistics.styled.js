import styled from 'styled-components';
import { MdOutlinePercent } from 'react-icons/md';

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

export const Container = styled.div`
  width: 300px;
  border-radius: 0 0 5px 5px;
  box-shadow: 0px 0px 3px 0px rgba(4, 54, 74, 0.74);
  overflow: hidden;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  padding: 20px 0;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  color: ${p => p.theme.colors.darkNavy};
  border-bottom: 2px solid #176b87;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: calc(100% / 5);
  text-align: center;
  padding: 10px 0;
  background-color: ${getRandomHexColor};
  border-right: 1px solid #dafffb;
  &:nth-child(5) {
    border-right: none;
  }
`;

export const Label = styled.span`
  font-size: 14px;
  letter-spacing: 0.03em;
  color: ${p => p.theme.colors.coldMint};
`;

export const Percentage = styled.span`
  font-size: 15px;
  color: ${p => p.theme.colors.coldMint};
`;

export const Icon = styled(MdOutlinePercent)`
  fill: ${p => p.theme.colors.coldMint};
  vertical-align: bottom;
`;
