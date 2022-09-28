import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Form from '../LayOut/Form';
import FormTop from '../LayOut/FormTop';

export default function LoginForm() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const regId = /^[A-Za-z]{1}[A-Za-z0-9_-]{3,14}$/;
  const regPwd = /(?=.*\d)(?=.*[a-zA-ZS]).{6,}/;

  const onUserNameHandler = event => {
    setUserName(event.currentTarget.value);
  };

  const onPasswordHandler = event => {
    setPassword(event.currentTarget.value);
  };

  const onLogin = () => {
    if (!regId.test(userName)) {
      alert('아이디를 입력해주세요!');
    } else if (!regPwd.test(password)) {
      alert('비밀번호를 입력해주세요!');
    } else {
      axios
        .post('http://localhost:8000/users/login', {
          id: userName,
          password: password,
        })

        .then(response => {
          console.log('로그인 성공!');
          console.log('token', response.data);
          localStorage.setItem('token', response.data);
          alert('로그인에 성공하였습니다.');
          navigate('/');
        })
        .catch(error => {
          console.log(error);
          alert('일치하는 아이디와 비밀번호가 없습니다.');
        });
    }
  };

  return (
    <Form>
      <FormTop />
      <TopLine>OKIDOKI 아이디로 로그인</TopLine>
      <IdInputWrapper>
        <InputLabel>아이디</InputLabel>
        <Input
          type="text"
          value={userName}
          onChange={onUserNameHandler}
          placeholder="4-15자 이내로 입력해주세요"
        />
      </IdInputWrapper>
      <PwdInputWrapper>
        <InputLabel>비밀번호</InputLabel>
        <Input
          type="password"
          value={password}
          onChange={onPasswordHandler}
          placeholder="영문 소문자, 숫자 조합 6자 이상의 비밀번호"
        />
      </PwdInputWrapper>
      <Button onClick={onLogin}>로그인</Button>
      <QuestionWrapper>
        <Question>
          아직 회원이 아니신가요?
          <Link to="/signup">
            <span> 회원가입</span>
          </Link>
        </Question>
      </QuestionWrapper>
    </Form>
  );
}

const TopLine = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: #6b7280;
  margin-top: 20px;
  font-size: 14px;
  :before {
    content: '';
    flex-grow: 1;
    margin-right: 5px;
    background-color: #6b7280;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
  }
  :after {
    content: '';
    flex-grow: 1;
    margin-left: 5px;
    background-color: #6b7280;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
  }
`;

const IdInputWrapper = styled.div`
  margin-top: 20px;
  width: 448px;
  height: 66px;
`;
const PwdInputWrapper = styled.div`
  margin-top: 10px;
  width: 448px;
  height: 66px;
`;
const InputLabel = styled.label`
  width: 448px;
  height: 20px;
  color: #6b7280;
  font-size: 15px;
  font-weight: lighter;
`;
const Input = styled.input`
  width: 448px;
  height: 42px;
  font-size: 16px;
  padding: 8px 12px;
  margin-top: 7px;
  border-radius: 5px;
  border: 0.5px solid #6b7280;
`;
const Button = styled.button`
  width: 448px;
  height: 38px;
  color: #ffffff;
  background-color: #0090f9;
  padding: 8px 16px;
  border-radius: 10px;
  border-style: none;
  margin-top: 23px;
  font-size: 14px;
  cursor: pointer;
  :hover {
    background-color: #0f7ed3;
  }
`;
const QuestionWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;
const Question = styled.span`
  font-weight: lighter;
  font-size: 14px;
  color: #6b7280;
`;
