import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  MainBoard,
  MainEvent,
  PopularTag,
  TopWriter,
} from '../../components/Main';

function Main() {
  const [eventList, setEvent] = useState([]);
  useEffect(() => {
    axios({
      url: 'http://localhost:8000/posts?main_category_id=3&start=1&limit=3',
      method: 'get',
    }).then(res => {
      setEvent(res.data.posts);
    });
  }, []);
  console.log('event', eventList);
  // const eventList = ['1', '2', '3'];
  const boardList = [
    { mainId: 1 },
    { mainId: 3 },
    { mainId: 1 },
    { mainId: 2 },
  ];
  return (
    <MainContainer>
      <PopularTag />
      <MainCenter>
        <BoardContainer>
          {boardList.map(data => {
            return <MainBoard mainId={data} />;
          })}
        </BoardContainer>
        <div>
          <EventTitle>EVENTS</EventTitle>
          <DFlex>
            {eventList.map((data, idx) => {
              return <MainEvent key={idx} data={data} />;
            })}
          </DFlex>
        </div>
      </MainCenter>

      <TopWriter />
    </MainContainer>
  );
}
const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  padding: 20px 0 120px;
  margin: 0 auto;
`;
const MainCenter = styled.div`
  flex-grow: 1;
`;
const BoardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 840px;
`;
const DFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;
const EventTitle = styled.h3`
  margin-bottom: 20px;
`;
export default Main;
