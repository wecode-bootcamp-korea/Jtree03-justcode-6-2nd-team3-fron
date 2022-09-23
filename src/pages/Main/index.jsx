import styled from 'styled-components';
import {
  MainBoard,
  MainEvent,
  PopularTag,
  TopWriter,
} from '../../components/Main';

function Main() {
  const eventList = ['1', '2', '3'];
  const boardList = ['1', '2', '3', '4'];
  return (
    <MainContainer>
      <PopularTag />
      <MainCenter>
        <BoardContainer>
          {boardList.map(data => {
            return <MainBoard />;
          })}
        </BoardContainer>
        <div>
          <EventTitle>EVENTS</EventTitle>
          <DFlex>
            {eventList.map((data, idx) => {
              return <MainEvent key={idx} />;
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
  padding: 20px 0;
  margin: 0 auto;
`;
const MainCenter = styled.div`
  flex-grow: 1;
`;
const BoardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const DFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;
const EventTitle = styled.h3`
  margin-bottom: 20px;
`;
export default Main;
