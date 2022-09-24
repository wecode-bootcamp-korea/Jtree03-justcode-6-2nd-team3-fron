import React from 'react';
import styled from 'styled-components';

export default function FormTop() {
  return (
    <Wrapper>
      <Logo>OKIDOKI</Logo>
      <Welcome>오키도키에 오신 것을 환영합니다.</Welcome>
      <WebsiteDesc>
        OKIDOKI는 소프트웨어 개발자를 위한 지식공유 플랫폼입니다.
      </WebsiteDesc>
      <SocialMediaTitle>SNS 회원가입</SocialMediaTitle>
      <BtnWrapper>
        <SocialMediaBtn>
          <Icon img src="image/github.png" alt="깃헙" />
        </SocialMediaBtn>
        <SocialMediaBtn>
          <Icon img src="image/facebook.png" alt="페이스북" />
        </SocialMediaBtn>
        <SocialMediaBtn>
          <Icon img src="image/google.png" alt="구글" />
        </SocialMediaBtn>
      </BtnWrapper>
      <SecondBtnWrapper>
        <SocialMediaBtn>
          <Icon img src="image/N.png" alt="네이버" />
        </SocialMediaBtn>
        <SocialMediaBtn>
          <Icon imr src="image/kakao-talk.png" alt="카카오톡" />
        </SocialMediaBtn>
      </SecondBtnWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.div`
  font-size: 30px;
`;
const Welcome = styled.span`
  font-size: 25px;
  font-weight: bold;
  margin-top: 24px;
`;
const WebsiteDesc = styled.span`
  font-size: 13px;
  font-weight: lighter;
  color: #4b5563;
  margin-top: 15px;
`;
const SocialMediaTitle = styled.span`
  margin-top: 30px;
  margin-right: 350px;
  font-weight: lighter;
  color: #4b5563;
`;
const BtnWrapper = styled.div`
  width: 448px;
  height: 40px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;
const SecondBtnWrapper = styled.div`
  width: 448px;
  height: 40px;
  margin-top: 10px;
  display: flex;
`;

const SocialMediaBtn = styled.button`
  width: 142px;
  height: 38px;
  padding: 8px 16px;
  background-color: white;
  border-radius: 7px;
  margin-right: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid gray;
  cursor: pointer;
`;
const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
