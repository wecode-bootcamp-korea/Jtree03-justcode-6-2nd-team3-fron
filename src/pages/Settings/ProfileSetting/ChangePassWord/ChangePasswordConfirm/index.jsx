import axios from 'axios';
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function ChangePasswordConfirm() {
  const value = ['현재 비밀번호', '신규 비밀번호', '신규 비밀번호 확인'];
  const inputRef = useRef([]);
  const navigate = useNavigate();
  const [fail, setFail] = useState(false);

  const changePW = () => {
    axios
      .patch(
        'http://localhost:8000/users',
        {
          password: inputRef.current[0].value,
          newPassword: inputRef.current[2].value,
        },
        {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2MzczNDA2MywiZXhwIjoxNjYzNzQ0ODYzfQ.bGsr1XD5Gq0y1D12g2M7-TvH8ffDY4EFZGtqiDBMu2Q',
          },
        }
      )
      .then(() => {
        alert('비밀번호가 변경 되었습니다.');
        navigate('/');
      })
      .catch(err => {
        console.log(err);
        if (err.response.data.message === 'PASSWORD_MISSMATCH') {
          setFail(true);
        }
        else if (err.response.data.message === 'TOKEN_EXPIRED') {
          alert('로그인 정보가 만료 되었습니다.');
          // navigate('/login');
        }
      });
  };

  return (
    <Container>
      <Logo to={'/'} />
      <H2>변경하실 비밀번호를 입력해주세요.</H2>
      {value.map((value, i) => {
        return (
          <Name key={value}>
            {value}
            <NameInput type={'password'} ref={e => inputRef.current[i] = e} />
          </Name>
        );
      })}
      <SaveBtn onClick={changePW}>비밀번호 변경</SaveBtn>
      {fail && <Fail>
        <span />
        <Title>비밀번호 변경 실패</Title>
        <Text>현재 비밀번호가 일치하지 않습니다.</Text>
      </Fail>}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 448px;
  min-height: 448px;
  margin: calc(100vh - 896px) auto;
`;

const Logo = styled(Link)`
  display: inline-block;
  width: 66.2px;
  height: 48px;
  background: url('https://okky.kr/okky.svg');
`;

const H2 = styled.h2`
  width: 100%;
  height: 36px;
  margin: 24px 0 40px 0;
  font-size: 30px;
  font-weight: 700;
  color: #111827;
`;

const Name = styled.div`
  width: 100%;
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
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px;
  background: rgba(0, 144, 249, 1);
  color: #FFFFFF;
  cursor: pointer;

    &:hover {
      background: #2b75aa;
    }
`;

const Fail = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  background: #FFF1F2;
  padding: 16px 16px 16px 36px;
  margin-top: 30px;
  border-radius: 5px;

    span {
      position: absolute;
      top: 13px;
      left: 16px;
      width: 23px;
      height: 23px;
      background: url('https://cdn-icons-png.flaticon.com/512/4201/4201973.png') center center no-repeat;
      background-size: cover;
    }
`
const Title = styled.div`
  font-size: 14px;
  color: #991B1B;
  margin-left: 12px;
`

const Text = styled.div`
  margin: 15px 0 0 12px;
  font-size: 14px;
  color: #B91C1C;

`

export default ChangePasswordConfirm;
