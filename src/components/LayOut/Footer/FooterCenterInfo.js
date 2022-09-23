import React from 'react'
import styled from 'styled-components'

export default function FooterCenterInfo() {
  return (
    <Style>
        <Description>상호명: (주)오키도키 | 대표명: 옥희독| 사업자등록번호: 123-45-67890| 문의: info@okidoki.kr</Description>
        <br />
        <Description>통신판매업신고번호: 제 2022-서울-03021호| 주소: 서울 오키구 도키로 101 OKI도키빌딩 501호 (01023)</Description>
        <br />
        <Description>2022 (주)오키도키,Inc. All rights reserved.</Description>
    </Style>
  )
}

const Style = styled.div `
    margin-top: 30px;
`

const Description = styled.span `
    font-size: 11px;
`