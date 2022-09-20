import React from 'react'
import styled from 'styled-components'
import FooterCenterNav from './FooterCenterNav'
import FooterCenterInfo from './FooterCenterInfo'

export default function FooterCenter() {
  return (
    <Contents>
      <FooterCenterNav />
      <FooterCenterInfo />
    </Contents>
  )
}

const Contents = styled.div `
  width: auto;
  height: 104px;
  margin-left: 100px;
  color: gray;
`