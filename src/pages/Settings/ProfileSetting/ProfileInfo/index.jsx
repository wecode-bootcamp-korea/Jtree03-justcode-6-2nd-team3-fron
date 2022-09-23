import axios from 'axios';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import ProfileImg from './ProfileImg';
import Tags from './Tags';

function ProfileInfo(props) {
  const { profile, setProfile } = props;
  const { user_name, nickname, profile_image, tags } = profile;

  const input = useRef([]);
  const [saveBtn, setSaveBtn] = useState(true);

  const value = [
    {
      title: '이름',
      input: user_name,
    },
    {
      title: '닉네임',
      input: nickname,
    },
  ];

  let inputValue = input.current;
  const changeValue = () => {
    if (inputValue[0].value !== user_name || inputValue[1].value !== nickname) {
      setSaveBtn(false);
    }
  };

  const postApi = () => {
    axios
      .patch(
        'http://localhost:8000/profile',
        {
          user_name: inputValue[0].value,
          nickname: inputValue[1].value,
          tags: [],
        },
        {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY2MzgzMjgwOSwiZXhwIjoxNjYzODQzNjA5fQ.Pun_4BHb45wixa6uhUiE8X_gOfuJVRk16zbX7k8RxPM',
          },
        }
      )
      .then(res => console.log(res));
  };

  return (
    <Profile>
      <Info>회원정보</Info>
      <Detail>
        {value.map((value, i) => {
          return (
            <Name key={value.title}>
              {value.title}
              <NameInput
                ref={e => (input.current[i] = e)}
                defaultValue={value.input}
                onChange={changeValue}
              />
            </Name>
          );
        })}
        {/* <Tags tags={tags} /> */}
        <ProfileImg profile_image={profile_image} />
        {/* <ProfileImg profile_img={profile_image} />
        <input ref={img} type={'file'} accept={'image/*'} onChange={()=>console.log(img.current.value)} /> */}
        <SaveBtn disabled={saveBtn} onClick={postApi}>
          저장
        </SaveBtn>
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

const SaveBtn = styled.button`
  width: 88px;
  height: 40px;
  margin: 20px 0 0 425px;
  border: none;
  border-radius: 5px;
  background: rgba(0, 144, 249, 1);
  color: #ffffff;
  cursor: pointer;

  &:disabled {
    background: rgba(0, 144, 249, 0.7);
    cursor: default;
  }

  &:hover {
    background: #2b75aa;
    transition: all ease 0.5s;
  }
`;

export default ProfileInfo;
