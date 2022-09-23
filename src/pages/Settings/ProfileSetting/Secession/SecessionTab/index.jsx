import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function SecessionTab() {
  const navigate = useNavigate();

  const secession = () => {
    axios
      .delete('http://localhost:8000/users', {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2MzgyMjY1MywiZXhwIjoxNjYzODMzNDUzfQ.dnHDDIH_zz6ThWkVspKpO4y4ZV84onm1DtBJbQfARsE',
        },
      })
      .then(res => {if(res.data.message === 'success_userDoNotUse'){
        alert('회원 탈퇴가 완료되었습니다.');
        navigate('/');
      }})
  };

  return (
    <Container>
      <Logo to={'/'} />
      <H2>우리.. 좋았잖아.. 행복했잖아..</H2>
      <Img />
      <Div>
        <SaveBtn onClick={() => navigate('.settings')}>
          한번만 더 잘 해보자
        </SaveBtn>
        <SaveBtn onClick={secession}>안녕.. 잘가..</SaveBtn>
      </Div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 448px;
  margin: calc(100vh - 896px) auto;
`;

const Logo = styled(Link)`
  display: inline-block;
  width: 66.2px;
  height: 48px;
  background: url('https://okky.kr/okky.svg');
`;

const H2 = styled.h2`
  width: 100%;
  height: 36px;
  margin: 24px 0 40px 0;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  color: #111827;
`;

const Img = styled.span`
  width: 100%;
  height: 300px;
  margin-bottom: 40px;
  background: url('https://img.etoday.co.kr/pto_db/2017/12/20171228164101_1169384_599_442.PNG')
    center center no-repeat;
  background-size: cover;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
`;

const SaveBtn = styled.button`
  &:nth-child(1) {
    border: 1px solid #d9d9d9;
    color: #111827;
    background: #ffffff;

    &:hover {
      border: 1px solid #111827;
    }
  }

  &:nth-child(2) {
    background: #dc2626;
    border: none;
    color: #ffffff;
    &:hover {
      background: #b91b1b;
    }
  }

  width: 48%;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
`;

export default SecessionTab;
