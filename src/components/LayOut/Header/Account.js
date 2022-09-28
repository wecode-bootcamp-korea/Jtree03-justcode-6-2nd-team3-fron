import React from 'react';
import styled from 'styled-components';
import AccountDropdown from './AccountDropdown';

export default function Account() {
  return (
    <AccountIcons>
      <Icon src="https://cdn-icons-png.flaticon.com/512/2099/2099170.png" />
      <Icon src="https://cdn-icons-png.flaticon.com/512/2097/2097743.png" />
      <AccountDropdown />
    </AccountIcons>
  );
}

const AccountIcons = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Icon = styled.img`
  width: 20px;
  height: 20px;
  :hover {
    cursor: pointer;
  }
`;
