import styled from 'styled-components';
import { useState } from 'react';

export default function Nbutton() {
  const [like, setLike] = useState(0); // 서버에서 받아오는 데이터 반영
  const [leftClick, setLeftClick] = useState(false); //해당하는 boolean data도 서버에서 관리한다? 유저 => 해당댓글
  const [rightClick, setRightClick] = useState(false); //마찬가지?

  function clickDown() {
    leftClick ? setLike(like + 1) : setLike(like - 1);
    setLeftClick(f => !f);
  }

  function clickUp() {
    rightClick ? setLike(like - 1) : setLike(like + 1);
    setRightClick(f => !f);
  }

  return (
    <Reaction>
      <Nbtton onClick={clickDown} disabled={rightClick && true}>
        <Likeimg src="https://cdn-icons-png.flaticon.com/512/271/271210.png" />
      </Nbtton>
      <View>{like}</View>
      <Nbtton onClick={clickUp} disabled={leftClick && true}>
        <Likeimg src="https://cdn-icons-png.flaticon.com/512/271/271239.png" />
      </Nbtton>
    </Reaction>
  );
}

const Reaction = styled.div`
  margin-top: 10px;
  height: 30px;
  display: flex;
  flex-direction: row;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

const Bttonstyle = styled.button`
  background-color: transparent;
  border: none;
`;

const Nbtton = styled(Bttonstyle)`
  height: 100%;
  width: 24px;
  cursor: pointer;
`;

const View = styled.span`
  font-size: 12px;
  padding: 7px 15px 3px 15px;
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;
`;

const Likeimg = styled.img`
  width: 9px;
  height: 9px;
  opacity: 50%;
`;
