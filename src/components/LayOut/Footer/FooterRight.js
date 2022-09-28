import React from 'react';
import styled from 'styled-components';

export default function FooterRight() {
  return (
    <Info>
      <FirstLine>SPONSORED BY</FirstLine>
      <SecondLine>
        <Logo src="image/idea.png" />
      </SecondLine>
    </Info>
  );
}

const Info = styled.div`
  width: 180px;
`;
const FirstLine = styled.div`
  font-size: 15px;
  display: flex;
  justify-content: flex-end;
  color: gray;
`;
const SecondLine = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;
const Logo = styled.img`
  width: 50px;
  height: 50px;
`;
