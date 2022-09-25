import MainBoardList from './MainBoardList';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';

function MainBoard({ mainId }) {
  console.log('m', mainId);
  const [data, setData] = useState([]);
  const boardList = ['1', '2', '3', '4', '5'];
  useEffect(() => {
    axios({
      url: `http://localhost:8000/posts?main_category_id=${mainId}&start=1&limit=5`,
      method: 'get',
    }).then(res => {
      setData(res.data);
    });
  }, []);
  console.log(data);
  return (
    <>
      <BoardList>
        <Title>
          <h3>{data.name}</h3>
        </Title>

        {boardList.map(data => {
          return (
            <Border>
              <MainBoardList mainId={mainId} />
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
