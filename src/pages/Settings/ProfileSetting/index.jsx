import styled from 'styled-components';

import ProfileInfo from './ProfileInfo';
import ChangePassWord from './ChangePassWord';
import Secession from './Secession';

export default function ProfileSetting(props) {
  const { profile, setProfile, readProfile } = props;

  return (
    <Container>
      <ProfileInfo profile={profile} setProfile={setProfile} readProfile={readProfile} />
      <ChangePassWord />
      <Secession />
    </Container>
  );
}

const Container = styled.div`
  width: 959px;
`;
