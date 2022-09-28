import axios from 'axios';
import { useEffect, useState } from 'react';

import styled from 'styled-components';
import { MainEvent, PopularTag, TopWriter } from '../../components/Main';
import BottomBoard from '../../components/Main/BottomBoard';
import TopBoard from '../../components/Main/TopBoard';

function Main() {
  // const [boardLists, setBoard] = useState([]);
  const [eventList, setEvent] = useState([]);

  //이벤트리스트
  useEffect(() => {
    axios({
      url: 'http://localhost:8000/main',
      method: 'get',
    }).then(res => {
      setEvent(res.data.events);
    });
  }, []);

  const topBoardList = [
    { category: 'editorChoice', id: 1, title: `EDITOR'S CHOICE` },
    { category: 'weeklyBest', id: 2, title: 'WEEKLY BEST' },
  ];
  const bottomBoardList = [
    { mainId: 1, id: 1, title: 'Q&A' },
    { mainId: 2, id: 2, title: 'KNOWLEDGE' },
  ];

  return (
    <MainContainer>
      <PopularTag />
      <MainCenter>
        <BoardContainer>
          {topBoardList.map(data => {
            return (
              <TopBoard
                key={data.id}
                category={data.category}
                title={data.title}
              />
            );
          })}

          {bottomBoardList.map(data => {
            return (
              <BottomBoard
                key={data.id}
                mainId={data.mainId}
                title={data.title}
              />
            );
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

  padding: 60px 0 120px;

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
