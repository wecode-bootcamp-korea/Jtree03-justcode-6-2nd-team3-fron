import styled from 'styled-components';
import InterestTag from './InterestTag';

function ProfileInfo(props) {
  const { name, nickname, interest, profile_img } = props.profile;

  const value = [
    {
      title: '이름',
      input: name,
    },
    {
      title: '닉네임',
      input: nickname,
    },
  ];

  return (
    <Profile>
      <Info>회원정보</Info>
      <Detail>
        {value.map(value => {
          return (
            <Name key={value.title}>
              {value.title}
              <NameInput defaultValue={value.input} />
            </Name>
          );
        })}
        <InterestTag />
        <ProfileImg profile_img={profile_img} />
        <SaveBtn>저장</SaveBtn>
      </Detail>
    </Profile>
  );
}

const Profile = styled.div`
  padding-left: 80px;
  border-bottom: 1px solid #d9d9d9;
`;

const Info = styled.h2`
  font-size: 20px;
  color: #111827;
`;

const Detail = styled.div`
  position: relative;
  margin: 40px 0;
`;

const Name = styled.div`
  width: 511px;
  height: 66px;
  margin-bottom: 20px;
  font-size: 14px;
  color: #374151;
`;

const NameInput = styled.input`
  display: block;
  width: 100%;
  height: 42px;
  margin-top: 8px;
  padding: 8px 12px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  box-shadow: 0px 0px 3px #dcdcdc;
  font-size: 15px;
  color: #374151;

  &:focus {
    outline: 1px solid #111827;
  }
`;

const ProfileImg = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: 160px;
  height: 160px;
  border: 1.5px solid #d9d9d9;
  border-radius: 50%;
  background: url(${props => props.profile_img}) center center no-repeat;
  background-size: cover;
`;

const SaveBtn = styled.button`
  width: 88px;
  height: 40px;
  margin: 20px 0 0 calc(100% - 88px);
  border: none;
  border-radius: 5px;
  background: rgba(0, 144, 249, 0.7);
  color: #FFFFFF;

    &:hover {
      background: #2b75aa;
      transition: all ease 0.5s;
    }
`;

export default ProfileInfo;
