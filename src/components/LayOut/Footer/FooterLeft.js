import React from 'react';
import styled from 'styled-components';

export default function FooterLeft() {
  return (
    <Logos>
      <OkidokiWrapper>
        <Okidoki>OKIDOKI</Okidoki>
        <Description>All that developers</Description>
      </OkidokiWrapper>
      <OtherLogosWrapper>
        <Icons
          src="https://cdn-icons-png.flaticon.com/512/2111/2111425.png"
          alt="깃헙"
        />
        <Icons
          src="https://cdn-icons-png.flaticon.com/512/2175/2175193.png"
          alt="페이스북"
        />
        <Icons
          src="https://cdn-icons-png.flaticon.com/512/717/717426.png"
          alt="유튜브"
        />
        <Icons
          src="https://cdn-icons-png.flaticon.com/512/2099/2099100.png"
          alt="이메일"
        />
      </OtherLogosWrapper>
    </Logos>
  );
}

const Logos = styled.div`
  width: 180px;
  height: 104px;
`;
const OkidokiWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60px;
`;

const Okidoki = styled.div`
  font-size: 25px;
  font-weight: bolder;
`;

const Description = styled.div`
  font-size: 15px;
  color: gray;
`;

const OtherLogosWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;
const Icons = styled.img`
  width: 20px;
  height: 20px;
  opacity: 0.7;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;
