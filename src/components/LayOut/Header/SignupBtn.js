import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function SignupBtn() {
  return (
    <Link to="/signup" style={{ textDecoration: 'none' }}>
      <Btn>회원가입</Btn>
    </Link>
  );
}

const Btn = styled.button`
  font-size: 12px;
  background-color: #0090f9;
  color: #ffffff;
  width: 85px;
  height: 35px;
  padding: 2px 8px;
  border: none;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #0f7ed3;
  }
`;
