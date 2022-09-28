import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import profile from '../../image/settings/profile.png';

import ProfileSetting from './ProfileSetting';

export default function Settings() {
  const [profile, setProfile] = useState('');

  const readProfile = () => {
     axios
      .get('http://localhost:8000/profile', {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJpYXQiOjE2NjQzNjYxMTksImV4cCI6MTY2NDM3NjkxOX0.Sbs903MBWGA652C0EV6SrFEsCAZyBPBnIY6EUOUE0tw',
        },
      })
      .then(res => setProfile(res.data.user));
  }

  useEffect(readProfile, []);

  console.log(profile);

  return (
    profile && (
      <Container>
        <Left>
          <P>내 계정</P>
          <A>
            <Img />
            회원정보
          </A>
        </Left>
        <ProfileSetting profile={profile} setProfile={setProfile} readProfile={readProfile} />
      </Container>
    )
  );
}

const Container = styled.div`
  display: flex;
  width: 1280px;
  margin: 40px auto 0 auto;
`;

const Left = styled.div`
  width: 320px;
  padding-right: 64px;
  border-right: 1px solid #d9d9d9;
`;

const P = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #111827;
`;

const A = styled.a`
  display: flex;
  align-items: center;
  height: 40px;
  margin-top: 40px;
  padding: 8px 12px;
  border-radius: 8px;
  background: #f3f4f6;
  font-size: 16px;
  color: #111827;
`;

const Img = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background: url(${profile}) center center no-repeat;
  background-size: cover;
`;
