import React, { useState } from 'react';
import styled from 'styled-components';

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const logoutHandler = () => {};
  return (
    <div>
      <AccountIcon role="button" onClick={() => setOpen(!open)}>
        <Image src="https://cdn-icons-png.flaticon.com/512/747/747376.png" />
      </AccountIcon>
      {open && (
        <List>
          <ListItem>
            <ItemBtn type="button">
              <ItemImg src="https://cdn-icons-png.flaticon.com/512/456/456283.png" />
              <ItemTitle>내 프로필</ItemTitle>
            </ItemBtn>
            <ItemBtn type="button">
              <ItemImg src="https://cdn-icons-png.flaticon.com/512/2099/2099058.png" />
              <ItemTitle>내 계정</ItemTitle>
            </ItemBtn>
            <ItemBtn type="button">
              <ItemImg src="https://cdn-icons-png.flaticon.com/512/2961/2961948.png" />
              <ItemTitle>활동내역</ItemTitle>
            </ItemBtn>
            <LogoutBtn type="button" onClick={logoutHandler}>
              <ItemImg src="https://cdn-icons-png.flaticon.com/512/1286/1286853.png" />
              <ItemTitle>로그아웃</ItemTitle>
            </LogoutBtn>
          </ListItem>
        </List>
      )}
    </div>
  );
}

const AccountIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
const Image = styled.img`
  width: 20px;
  height: 20px;
`;
const List = styled.ul`
  position: absolute;
  top: 47px;
  right: 105px;
  border-radius: 5px;
`;
const ListItem = styled.li`
  list-style-type: none;
  border-top: 1px solid #ddd;
  width: 224px;
`;
const ItemBtn = styled.button`
  background-color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: 0;
  width: 100%;
  text-align: left;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  :hover {
    cursor: pointer;
  }
`;
const ItemImg = styled.img`
  width: 12px;
  height: 12px;
  margin-left: 20px;
  opacity: 0.5;
`;
const ItemTitle = styled.span`
  font-size: 13px;
  margin-left: 10px;
  :hover {
    color: #0090f9;
  }
`;
const LogoutBtn = styled.button`
  background-color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: 0;
  width: 100%;
  text-align: left;
  border: 1px solid #ddd;
  :hover {
    cursor: pointer;
  }
`;
