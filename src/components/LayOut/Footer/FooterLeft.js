import React from 'react'
import styled from 'styled-components'

export default function FooterLeft() {
  return (
    <Logos>
      <OkidokiWrapper>
        <Okidoki>OKIDOKI</Okidoki>
        <Description>All that developers</Description>
      </OkidokiWrapper>
      <OtherLogosWrapper>
        <Icons src='image/github.png' alt='깃헙' />
        <Icons src='image/facebook.png' alt='페이스북' />
        <Icons src='image/youtube.png' alt='유튜브' />
        <Icons src='image/email.png' alt='이메일' />
      </OtherLogosWrapper>
    </Logos>
  )
}

const Logos = styled.div `
  width: 170px;
  height: 104px;
  margin-left: 120px;
`
const OkidokiWrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60px;
`

const Okidoki = styled.div `
  font-size: 25px;
  font-weight: bolder;
`

const Description = styled.div `
  font-size: 15px;
  color: gray;
`

const OtherLogosWrapper = styled.div `
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`
const Icons = styled.img `
  width: 20px;
  height: 20px;
  color: gray;
`