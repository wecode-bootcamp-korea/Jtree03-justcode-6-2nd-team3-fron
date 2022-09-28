import React from 'react';
import styled from 'styled-components';
import FooterLeft from './FooterLeft';
import FooterCenter from './FooterCenter';
import FooterRight from './FooterRight';

export default function Footer() {
  return (
    <Container>
      <Wrapper>
        <FooterLeft />
        <FooterCenter />
        <FooterRight />
      </Wrapper>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 15px 0;
  border-top: 0.5px solid #ddd;
`;

const Wrapper = styled.div`
  padding: 28px 0px;
  display: flex;
  justify-content: space-between;
  width: 1280px;
`;
