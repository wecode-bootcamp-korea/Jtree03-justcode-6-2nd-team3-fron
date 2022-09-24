import React from 'react';
import styled from 'styled-components';
import FooterLeft from './FooterLeft';
import FooterCenter from './FooterCenter';
import FooterRight from './FooterRight';

export default function Footer() {
  return (
    <Wrapper>
      <Style>
        <FooterLeft />
        <FooterCenter />
        <FooterRight />
      </Style>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 28px 0px;
  border-top: 0.5px solid black;
`;
const Style = styled.div`
  width: auto;
  height: 104px;
  display: flex;
`;
