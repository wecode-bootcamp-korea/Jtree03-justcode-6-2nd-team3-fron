import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import HeaderBtns from './HeaderBtns';
import Account from './Account';
import axios from 'axios';

export default function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const [profileImg, setProfileImg] = useState('');

  useEffect(() => {
    localStorage.getItem('login-token') ? setIsLogin(true) : setIsLogin(false);

    axios.get('http://localhost:8000/profile', {
      headers: {
        authorization: localStorage.getItem('login-token'),
      }
    })
    .then(res => setProfileImg(res.data.user.profile_image));
  }, [isLogin, profileImg]);



  return (
    <Container>
      <Wrapper>
        <HeaderLogo />
        <HeaderNav />
        {isLogin ? <Account profileImg={profileImg} /> : <HeaderBtns />}
      </Wrapper>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  border-bottom: 0.5px solid #ddd;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 1280px;
  padding: 15px 0;
`;
