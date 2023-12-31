import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Table = styled.table`
  border-collapse: collapse;
  border-radius: 4px;
  width: 100%;
  box-shadow: 0px 0px 3px 0px rgba(4, 54, 74, 0.74);
  overflow: hidden;
`;

export const Body = styled.tbody`
  font-size: 15px;
  text-align: center;
  text-transform: capitalize;
  letter-spacing: 0.03em;
`;

export const Head = styled.thead`
  background-color: ${p => p.theme.colors.tealSea};
`;

export const Header = styled.th`
  width: calc(100% / 3);
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.03em;
  padding: 15px 0;
  font-variant: all-small-caps;
  color: ${p => p.theme.colors.navyBlue};
  border-right: 1px solid #dafffb;
  &:last-child {
    border-right: none;
  }
`;

export const Row = styled.tr`
  color: ${p => p.theme.colors.navyBlue};
  &:nth-child(2n) {
    color: ${p => p.theme.colors.tealSea};
    background-color: ${p => p.theme.colors.coldMint};
  }
`;

export const Data = styled.td`
  padding: 15px 0;
  border-right: 1px solid #64ccc5;
  &:last-child {
    border-right: none;
  }
`;
