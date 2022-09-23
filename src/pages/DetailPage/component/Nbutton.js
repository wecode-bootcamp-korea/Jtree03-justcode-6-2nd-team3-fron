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
      <NbttonLeft onClick={clickDown} disabled={rightClick && true}>
        {leftClick ? (
          <Likeimg src="https://i.esdrop.com/d/f/NlKPuBbCgn/ylxHgr9SRT.png" />
        ) : (
          <Likeimg src="https://i.esdrop.com/d/f/NlKPuBbCgn/E76ZUUcq0j.png" />
        )}
      </NbttonLeft>
      <View>{like}</View>
      <NbttonRight onClick={clickUp} disabled={leftClick && true}>
        {rightClick ? (
          <Likeimg src="https://i.esdrop.com/d/f/NlKPuBbCgn/Gduesjldbw.png" />
        ) : (
          <Likeimg src="https://i.esdrop.com/d/f/NlKPuBbCgn/W1nNMDCmwA.png" />
        )}
      </NbttonRight>
    </Reaction>
  );
}

const Reaction = styled.div`
  margin-top: 10px;
  height: 30px;
  display: flex;
  flex-direction: row;
`;

const Bttonstyle = styled.button`
  background-color: transparent;
  border: none;
`;

const NbttonLeft = styled(Bttonstyle)`
  height: 100%;
  width: 24px;
  border: 1px solid lightgray;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  cursor: pointer;
  &:hover {
    border: 1px solid black;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;

const NbttonRight = styled(Bttonstyle)`
  height: 100%;
  width: 24px;
  border: 1px solid lightgray;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
  &:hover {
    border: 1px solid black;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const View = styled.span`
  font-size: 12px;
  padding: 7px 15px 3px 15px;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
`;

const Likeimg = styled.img`
  width: 9px;
  height: 9px;
  opacity: 50%;
`;
