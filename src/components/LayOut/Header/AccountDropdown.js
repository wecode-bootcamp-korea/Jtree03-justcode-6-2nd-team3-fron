import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Dropdown() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const logoutHandler = () => {};
  const logOut = () => {
    localStorage.removeItem('login-token');
    window.location.reload();
  };
  return (
    <div>
      <AccountIcon role="button" onClick={() => setOpen(!open)}>
        <Image src="https://cdn-icons-png.flaticon.com/512/747/747376.png" />
      </AccountIcon>
      {open && (
        <List>
          <ItemBtn>
            <ItemImg src="https://cdn-icons-png.flaticon.com/512/456/456283.png" />
            <ItemTitle>내 프로필</ItemTitle>
          </ItemBtn>
          <ItemBtn>
            <ItemImg src="https://cdn-icons-png.flaticon.com/512/2099/2099058.png" />
            <ItemTitle>내 계정</ItemTitle>
          </ItemBtn>
          <ItemBtn>
            <ItemImg src="https://cdn-icons-png.flaticon.com/512/2961/2961948.png" />
            <ItemTitle>활동내역</ItemTitle>
          </ItemBtn>
          <ItemBtn onClick={logoutHandler}>
            <ItemImg src="https://cdn-icons-png.flaticon.com/512/1286/1286853.png" />
            <ItemTitle onClick={logOut}>로그아웃</ItemTitle>
          </ItemBtn>
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
  top: 55px;
  right: -5px;
  width: 230px;
  border-radius: 5px;
  border: 1px solid #ddd;
  overflow: hidden;
  list-style-type: none;
  background: #fff;
  z-index: 1;
`;

const ItemBtn = styled.li`
  background-color: white;
  font-size: 16px;
  padding: 15px 20px;
  width: 100%;
  text-align: left;
  :hover {
    cursor: pointer;
  }
  :nth-last-child(1) {
    border-top: 1px solid #ddd;
  }
`;
const ItemImg = styled.img`
  width: 12px;
  height: 12px;
  margin-left: 20px;
  opacity: 0.5;
`;
const ItemTitle = styled.span`
  margin-left: 10px;
  :hover {
    color: #0090f9;
  }
`;
const LogoutBtn = styled.button`
  background-color: white;
  font-size: 16px;
  padding: 10px 20px;
  width: 100%;
  text-align: left;
  :hover {
    cursor: pointer;
  }
`;
