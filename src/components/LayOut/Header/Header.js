import React, { useState } from 'react';
// import { useEffect } from 'react';
import styled from 'styled-components';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import HeaderBtns from './HeaderBtns';
import Account from './Account';
// import axios from 'axios';

export default function Header() {
  const [isLogin, setIsLogin] = useState(true);

  // useEffect = () => {
  // axios.get('http://localhost:8000/users/profile', {authorization:}).then(res =>{
  //   localStorage.getItem(res.data);
  //   setIsLogin(true);
  // });
  // };
  return (
    <Container>
      <Wrapper>
        <HeaderLogo />
        <HeaderNav />
        {isLogin === false && <HeaderBtns />}
        {isLogin === true && <Account />}
      </Wrapper>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 0.5px solid #ddd;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1280px;
  padding: 15px 0;
`;
