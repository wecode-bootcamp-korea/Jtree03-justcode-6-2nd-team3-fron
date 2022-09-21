import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Form from '../../LayOut/Form'
import FormTop from '../../LayOut/FormTop'

export default function SignupForm() {

  return (
  <Form>
    <FormTop />
    <FirstLine>회원가입에 필요한 기본정보를 입력해주세요.</FirstLine>
    <InputWrapper>
      <InputLabel>아이디</InputLabel>
      <Input type="text" placeholder='4-15자 이내로 입력해주세요'/>
    </InputWrapper>
    <InputWrapper>
      <InputLabel>비밀번호</InputLabel>
      <Input type="text" placeholder='영문 소문자, 숫자 조합 6자 이상의 비밀번호'/>
    </InputWrapper>
    <InputWrapper>
      <InputLabel>이메일</InputLabel>
      <Input type="text" placeholder='kimcode@okidoki.kr' />
    </InputWrapper>
    <InputWrapper>
      <InputLabel>실명</InputLabel>
      <Input type="text" placeholder='김코드' />
    </InputWrapper>
    <InputWrapper>
      <InputLabel>닉네임</InputLabel>
      <Input type="text" placeholder='알파벳, 한글, 숫자를 20자 이하로 입력해주세요' />
    </InputWrapper>
    <Button>회원가입</Button>
    <QuestionWrapper>
      <Question>이미 회원이신가요?
        <Link to ='/login'>
          <ToLogin>  로그인</ToLogin>
        </Link>
      </Question>
    </QuestionWrapper>
  </Form>
  )
}

const FirstLine = styled.div `
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
  content: "";
  flex-grow: 1;
  margin-left: 5px;
  background-color: #6b7280;
  height: 1px;
  font-size: 0px;
  line-height: 0px;  
 }
`

const InputWrapper = styled.div `
  margin-top: 30px;
  width: 448px;
  height: 66px;
`
const InputLabel = styled.label `
  width: 448px;
  height: 20px;
  color: #6b7280;
  font-size: 15px;
  font-weight: lighter;
`
const Input = styled.input `
  width: 448px;
  height: 42px;
  font-size: 16px;
  padding: 8px 12px;
  margin-top: 7px;
  border-radius: 5px;
  border: 0.5px solid #6b7280;
`
const Button = styled.button `
  width: 448px;
  height: 38px;
  color: #ffffff;
  background-color: #0090f9;
  padding: 8px 16px;
  border-radius: 10px;
  border-style: none;
  margin-top: 35px;
  font-size: 14px;
  cursor: pointer;
  :hover {
    background-color: skyblue;
  }
`
const QuestionWrapper = styled.div `
  margin-top: 30px;
  display: flex;
  justify-content: center;
`

const Question = styled.span `
  font-weight: lighter;
  font-size: 14px;
  color: #6b7280;
`
const ToLogin = styled.span `
`