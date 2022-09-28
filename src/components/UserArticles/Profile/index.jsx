import { useState } from 'react';
import styled from 'styled-components';

import thunder from '../../../image/list/thunder.png';

export default function Profile() {
  const [btn, setBtn] = useState([
    {
      name: '게시물',
      view: true,
    },
    {
      name: '스크랩',
      view: false,
    },
  ]);

  return (
    <Div>
      <Top>
        <Info>
          <Img />
          <div>
            <h1>하이요</h1>
            <p>
              <img src={thunder} />
              활동점수
            </p>
          </div>
        </Info>
      </Top>
      <Bottom>
        {btn.map(el => {
          return (
            <Button
              key={el.name}
              style={{ borderBottom: el.view && '2px solid #0090f9' }}
              onClick={() => {
                for (let i in btn) {
                  let arr = [...btn];
                  arr[i].view = false;
                  setBtn(arr);
                }
                el.view = true;
              }}
              el={el}
            >
              {el.name}
            </Button>
          );
        })}
      </Bottom>
    </Div>
  );
}

const Div = styled.div`
  height: 183px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  border-bottom: 1px solid #e5e7eb;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  width: 790px;
  height: 64px;

  div {
    margin-left: 20px;

    h1 {
      color: #111827;
      font-size: 24px;
    }

    p {
      display: flex;
      align-items: center;
      margin-top: 6px;
      color: #6b7280;
      font-size: 16px;

      img {
        width: 16px;
        height: 16px;
      }
    }
  }
`;

const Img = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 1px solid red;
`;

const Bottom = styled.div`
  height: 30%;
  background: #f9fafb;
  border-radius: 10px;
  padding-left: 20px;
`;

const Button = styled.button`
  height: 100%;
  color: ${props => (!props.el.view ? '#6b7280' : '#0090f9')};
  background: transparent;
  margin: 0 20px;
  border: none;
  cursor: pointer;
`;

