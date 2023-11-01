import styled from 'styled-components';
import { MdCircle } from 'react-icons/md';

export const FriendListWrapper = styled.div`
  height: 545px;
  margin-bottom: 30px;
`;

export const List = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ListItem = styled.li`
  width: 300px;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  padding: 10px 0;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  box-shadow: 0px 0px 3px 0px rgba(4, 54, 74, 0.74);
`;

export const ItemStatus = styled.span`
  margin: 0 15px;
  color: ${isOnline => {
    switch (isOnline.children[0]) {
      case true:
        return '#5d9c59';
      case false:
        return '#df2e38';
      default:
    }
  }};
`;

export const ItemImg = styled.img`
  padding: 5px;
  border: 2px solid #176b87;
  background-color: ${p => p.theme.colors.coldMint};
  border-radius: 5px;
  margin-right: 20px;
`;

export const ItemText = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: ${p => p.theme.colors.darkNavy};
`;

export const CircleIcon = styled(MdCircle)`
  vertical-align: middle;
`;
