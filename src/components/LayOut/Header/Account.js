import React from 'react';
import styled from 'styled-components';
import AccountDropdown from './AccountDropdown';

export default function Account(props) {

  const { profileImg } = props;

  return (
    <AccountIcons>
      <AccountDropdown profileImg={profileImg} />
    </AccountIcons>
  );
}

const AccountIcons = styled.div`
  width: 260px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;