import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import ProfileInfo from './ProfileInfo';
import ChangePassWord from './ChangePassWord';
import Secession from './Secession';

function ProfileSetting(props) {
  const { profile, setProfile } = props;

  return (
    <Container>
      <ProfileInfo profile={profile} setProfile={setProfile} />
      <ChangePassWord />
      <Secession />
    </Container>
  );
}

const Container = styled.div`
  width: 959px;
`;

export default ProfileSetting;
