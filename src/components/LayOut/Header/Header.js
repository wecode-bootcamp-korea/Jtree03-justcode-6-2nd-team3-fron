import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import HeaderBtns from './HeaderBtns';
import Account from './Account';
import axios from 'axios';

export default function Header() {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:8000/profile', {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEzLCJpYXQiOjE2NjQzNjA5ODIsImV4cCI6MTY2NDM3MTc4Mn0.9IC-a6k6gL5OyGbptRa6G2kBluU4oKD9NTe_5CDYVgw',
      })
      .then(res => {
        console.log(res.data.user);
        localStorage.getItem(res.data);
      });
  }, []);
  useEffect(() => {
    if (localStorage.getItem === true) {
      return setIsLogin(!isLogin);
    }
  }, [isLogin]);
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
