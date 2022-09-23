import React from 'react'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function HeaderNav() {
  return (
    <>
      <Categories>
        <Category>Q&A</Category>
        <Category>KNOWLEDGE</Category>
        <Category>EVENTS</Category>
        <li>|</li>
        <Category>NOTICE</Category>
        <li>|</li>
        <Category>JOBS</Category>
      </Categories>
    </>
  )
}

const Categories = styled.ul `
  margin-left: 120px;
  width:450px;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Category = styled.li `
  cursor: pointer;
  &:hover {
    color: #0090f9;
  }
`
