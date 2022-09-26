import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function LoginBtn() {
  return (
    <Link to="/login" style={{ textDecoration: 'none' }}>
      <Btn>로그인</Btn>
    </Link>
  );
}

const Btn = styled.button`
  font-size: 12px;
  background-color: #ffffff;
  border: 1px solid #0090f9;
  color: #0090f9;
  width: 85px;
  height: 35px;
  padding: 2px 8px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;
