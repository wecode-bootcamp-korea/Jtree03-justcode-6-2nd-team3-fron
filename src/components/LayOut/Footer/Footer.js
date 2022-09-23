import React from 'react';
import styled from 'styled-components';
import FooterLeft from './FooterLeft';
import FooterCenter from './FooterCenter';
import FooterRight from './FooterRight';

export default function Footer() {
  return (
    <Container>
      {' '}
      <Wrapper>
        <Style>
          <FooterLeft />
          <FooterCenter />
          <FooterRight />
        </Style>
      </Wrapper>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 15px 0;
  border-top: 0.5px solid black;
`;

const Wrapper = styled.div`
  padding: 28px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1280px;
`;

const Style = styled.div`
  width: auto;
  height: 104px;
  display: flex;
`;
