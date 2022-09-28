import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import lock from '../../../../image/settings/lock.png';

export default function ChangePassWord() {
  const navigate = useNavigate();
  return (
    <PassWord>
      <div>비밀번호</div>
      <button onClick={() => navigate('/settings/password-changes')}>
        <span />
        비밀번호 변경
      </button>
    </PassWord>
  );
}

const PassWord = styled.div`
  width: 100%;
  padding: 40px 0 40px 80px;
  border-bottom: 1px solid #d9d9d9;
  font-size: 20px;
  color: #111827;

  button {
    position: relative;
    width: 192px;
    height: 38px;
    margin: 20px 0 0 calc(100% - 192px);
    border: none;
    border-radius: 5px;
    background: #dc2626;
    color: #fff;
    cursor: pointer;

    span {
      position: absolute;
      top: 23%;
      left: 15px;
      width: 20px;
      height: 20px;
      background: url(${lock}) center center no-repeat;
      background-size: cover;
    }

    &:hover {
      background: #b91c1c;
    }
  }
`;