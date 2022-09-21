import styled from 'styled-components';
//to Tobbar.js
export default function LandingtoSns() {
  return (
    <>
      <UlStyle>
        <LiStyle>
          <BttonStyle>
            <ImgStyle />
            Facebook
          </BttonStyle>
        </LiStyle>
        <LiStyle>
          <BttonStyle>
            <ImgStyle />
            Twitter
          </BttonStyle>
        </LiStyle>
      </UlStyle>
    </>
  );
}
const UlStyle = styled.ul`
  width: 100px;
  height: 70px;
`;

const LiStyle = styled.li`
  width: 100px;
  height: 70px;
`;

const BttonStyle = styled.button`
  width: 100px;
  height: 70px;
`;

const ImgStyle = styled.img`
  width: 100px;
  height: 70px;
`;
