import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import user from '../../../../image/settings/user.png';

export default function Secession() {
  const [check, setCheck] = useState(false);
  const changeCheck = () => setCheck(!check);
  const navigate = useNavigate();
  return (
    <PassWord>
      <div>계정삭제</div>
      <p>
        나보기가 역겨워 가실때에는 말없이 고이 보내 드리오리다. 영변에 약산
        진달래꽃 아름 따다 가실길에 뿌리오리다.
      </p>
      <Div>
        <Span onClick={changeCheck}>
          <input
            type={'checkbox'}
            name={'asdf'}
            value={'adsf'}
            onChange={changeCheck}
            checked={check}
          />
          진짜 탈퇴 할거면 눌러..
        </Span>
        <button
          disabled={!check}
          onClick={() => {
            navigate('/user/withdrawConfirm');
          }}
        >
          <span />
          회원탈퇴
        </button>
      </Div>
    </PassWord>
  );
}

const PassWord = styled.div`
  width: 100%;
  padding: 40px 0 40px 80px;
  font-size: 20px;
  color: #111827af;

  p {
    margin: 25px 0 15px 10px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    padding: 20px;
    font-size: 14px;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 60px;

  button {
    position: relative;
    width: 192px;
    height: 38px;
    border: none;
    opacity: 1;
    background: #dc2626;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;

    &:disabled {
      background: #dc2626;
      opacity: 0.5;
      cursor: default;

      &:hover {
        background: #dc2626;
      }
    }

    &:hover {
      background: #b91c1c;
    }

    span {
      position: absolute;
      top: 23%;
      left: 15px;
      width: 20px;
      height: 20px;
      background: url(${user}) center center no-repeat;
      background-size: cover;
    }
  }
`;

const Span = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 160px;
  margin: 0 0 10px 10px;
  font-size: 14px;
  color: #111827e2;
  font-weight: 100;
`;
