import React from 'react';
import styled from 'styled-components';
import FooterCenterNav from './FooterCenterNav';
import FooterCenterInfo from './FooterCenterInfo';

export default function FooterCenter() {
  return (
    <Container>
      <Contents>
        <FooterCenterNav />
        <FooterCenterInfo />
      </Contents>
    </Container>
  );
}
const Container = styled.div`
  width: 840px;
`;
const Contents = styled.div`
  width: auto;
  height: 104px;
  color: gray;
`;
