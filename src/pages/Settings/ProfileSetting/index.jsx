import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import ProfileInfo from './ProfileInfo';
import ChangePassWord from './ChangePassWord';
import Exit from './Exit';

function ProfileSetting() {
  const [profile, setProfile] = useState();

  useEffect(() => {
    axios
      .get('/data/List/Profile.json')
      .then(res => setProfile(res.data.profile));
  }, []);

  return (
    profile && (
      <Container>
        <ProfileInfo profile={profile} />
        <ChangePassWord />
        <Exit />
      </Container>
    )
  );
}

const Container = styled.div`
  width: 959px;
  height: 1000px;
`;

export default ProfileSetting;
