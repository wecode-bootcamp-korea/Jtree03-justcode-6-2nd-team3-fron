import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function HeaderLogo() {
  return (
    <Link to = '/' style={{ textDecoration: 'none' }}>
      <Logo>OKIDOKI</Logo>
    </Link>
  )
}

const Logo = styled.div `
  color: black;
  font-weight: bolder;
  font-size: 25px;
  margin-left: 120px;
`