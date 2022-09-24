import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Form from '../LayOut/Form';
import FormTop from '../LayOut/FormTop';

export default function LoginForm() {
  return (
    <Form>
      <FormTop />
      <IdInputWrapper>
        <InputLabel>아이디</InputLabel>
        <Input type="text" />
      </IdInputWrapper>
      <PwdInputWrapper>
        <InputLabel>비밀번호</InputLabel>
        <Input type="password" />
      </PwdInputWrapper>
      <Button>로그인</Button>
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
