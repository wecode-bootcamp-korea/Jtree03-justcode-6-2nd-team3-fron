import React from 'react'
import styled from 'styled-components'
import LoginBtn from './LoginBtn'
import SignupBtn from './SignupBtn'

export default function HeaderBtns() {
  return (
    <Wrapper>
      <LoginBtn />
      <SignupBtn />
    </Wrapper>
  )
}

const Wrapper = styled.div `
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 450px;
  width: 200px;
`
