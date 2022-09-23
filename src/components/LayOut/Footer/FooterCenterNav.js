import React from 'react'
import styled from 'styled-components'

export default function FooterCenterNav
() {
  return (
    <Categories>
        <Category>회사소개</Category>
        <Category>공지사항</Category>
        <Category>연락처</Category>        
        <Category>광고문의</Category>        
        <li>|</li>        
        <Category>개인정보 처리방침</Category>        
        <Category>서비스 이용약관</Category>
    </Categories>
  )
}

const Categories = styled.ul `
  width:400px;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Category = styled.li `
    cursor: pointer;
`