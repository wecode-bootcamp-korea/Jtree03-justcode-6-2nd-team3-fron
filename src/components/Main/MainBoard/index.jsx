import MainBoardList from './MainBoardList';
import styled from 'styled-components';

import { useEffect, useState } from 'react';
import axios from 'axios';

function MainBoard({ boardData, title }) {
  return (
    <>
      <BoardList>
        <Title>
          <h3>{title}</h3>
        </Title>

        {boardData.map((data, idx) => {
          return (
            <Border key={idx}>
              <MainBoardList boardData={data} />
            </Border>
          );
        })}
      </BoardList>
    </>
  );
}
const Title = styled.div`
  padding: 20px 30px;
  border-radius: 10px;
  background: #e8eff5;
`;
const BoardList = styled.div`
  flex: 1 1 40%;
  margin-bottom: 50px;
  &:nth-of-type(even) {
    margin-left: 40px;
  }
`;
const Border = styled.div`
  border-bottom: 1px solid #ddd;
  &:nth-last-of-type(1) {
    border: none;
  }
`;
export default MainBoard;
