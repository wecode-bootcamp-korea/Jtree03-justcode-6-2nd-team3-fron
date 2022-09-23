import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Form from '../LayOut/Form'
import FormTop from '../LayOut/FormTop'

export default function LoginForm() {
  return (
    <Form>
    <FormTop />
    <InputWrapper>
      <InputLabel>아이디</InputLabel>
      <Input type="text" />
    </InputWrapper>
    <InputWrapper>
      <InputLabel>비밀번호</InputLabel>
      <Input type="text" />
    </InputWrapper>
    <Button>로그인</Button>
    <QuestionWrapper>
      <Question>아직 회원이 아니신가요?
        <Link to ='/signup'>
          <ToSignup>  회원가입</ToSignup>
        </Link>
      </Question>
    </QuestionWrapper>
  </Form>
  )
}

const InputWrapper = styled.div `
  width: 448px;
  height: 66px;
`
const InputLabel = styled.label `
  width: 448px;
  height: 20px;
  font-weight: lighter;
`
const Input = styled.input `
  width: 448px;
  height: 42px;
  padding: 8px 12px;
  margin-top: 4px;
  border-radius: 5px;
  border: 0.5px solid black;
`
const Button = styled.button `
  width: 448px;
  height: 38px;
  color: #ffffff;
  background-color: #0090f9;
  padding: 8px 16px;
  border-radius: 10px;
  border-style: none;
  margin-top: 10px;;
`
const QuestionWrapper = styled.div `
  margin-top: 10px;
  display: flex;
  justify-content: center;
`

const Question = styled.span `
  font-weight: lighter;
`
const ToSignup = styled.span `
`