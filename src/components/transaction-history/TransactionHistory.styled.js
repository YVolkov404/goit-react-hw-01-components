import styled from 'styled-components';

export const TransactionHistoryContainer = styled.div`
  width: 100%;
`;

export const TableWrap = styled.table`
  border-collapse: collapse;
  border-radius: 4px;
  width: 100%;
  box-shadow: 0px 0px 3px 0px rgba(4, 54, 74, 0.74);
  overflow: hidden;
`;

export const TableBodyWrap = styled.tbody`
  font-size: 15px;
  text-align: center;
  text-transform: capitalize;
  letter-spacing: 0.03em;
`;

export const TableHeadWrap = styled.thead`
  background-color: #64ccc5;
`;

export const TableHeader = styled.th`
  width: calc(100% / 3);
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.03em;
  padding: 15px 0;
  font-variant: all-small-caps;
  color: #176b87;
  border-right: 1px solid #dafffb;
  &:last-child {
    border-right: none;
  }
`;

export const TableRow = styled.tr`
  color: #176b87;
  &:nth-child(2n) {
    color: #64ccc5;
    background-color: #dafffb;
  }
`;

export const TableData = styled.td`
  padding: 15px 0;
  border-right: 1px solid #64ccc5;
  &:last-child {
    border-right: none;
  }
`;
