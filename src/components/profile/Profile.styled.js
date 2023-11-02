import styled from 'styled-components';
import { MdOutlineAlternateEmail } from 'react-icons/md';

export const Content = styled.div`
  width: 300px;
  border-radius: 7px;
  box-shadow: 0px 0px 3px 0px rgba(4, 54, 74, 0.74);
  overflow: hidden;
`;

export const Descr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 40px 0;
  border-bottom: 2px solid #176b87;
`;

export const Img = styled.img`
  width: 120px;
  margin: 0 auto 10px auto;
  padding: 10px;
  border: 2px solid #176b87;
  border-radius: 50%;
  background-color: ${p => p.theme.colors.coldMint};
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  color: ${p => p.theme.colors.darkNavy};
`;

export const Tag = styled.p`
  letter-spacing: 0.03em;
  line-height: 1.2;
  text-decoration: underline;
  text-align: center;
  color: ${p => p.theme.colors.tealSea};
`;

export const Icon = styled(MdOutlineAlternateEmail)`
  fill: ${p => p.theme.colors.navyBlue};
  vertical-align: bottom;
`;

export const Location = styled.p`
  font-size: 18px;
  text-align: center;
  color: ${p => p.theme.colors.tealSea};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  color: ${p => p.theme.colors.coldMint};
  background-color: ${p => p.theme.colors.tealSea};
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: calc((100% - 2px) / 3);
  padding: 20px 0;
  border-right: 1px solid #dafffb;
  &:nth-child(3) {
    border-right: none;
  }
`;

export const Label = styled.span`
  font-variant: all-small-caps;
  letter-spacing: 0.03em;
  text-align: center;
  color: ${p => p.theme.colors.navyBlue};
`;

export const Quantity = styled.span`
  font-size: 13px;
  font-weight: 700;
  text-align: center;
`;
