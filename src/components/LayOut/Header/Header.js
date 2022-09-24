import React from 'react'
import styled from 'styled-components'
import HeaderLogo from './HeaderLogo'
import HeaderNav from './HeaderNav'
import HeaderBtns from './HeaderBtns'

export default function Header() {

  return (
    <Wrapper>
        <Style>
            <HeaderLogo />
            <HeaderNav />
            <HeaderBtns />
        </Style>
    </Wrapper>
  )
}

const Wrapper = styled.div `
  padding: 20px 0px;
  border-bottom: 0.5px solid black;
`
const Style = styled.div `
  width: auto;
  height: 35px;
  display: flex;
`




