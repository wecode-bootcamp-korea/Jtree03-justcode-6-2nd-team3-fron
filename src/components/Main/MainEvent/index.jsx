import styled from 'styled-components';

function MainEvent() {
  return (
    <EventContainer>
      <EventImage src="https://dummyimage.com/300x200/dddddd/ffffff&text=sample" />
      <Detail>
        <p>Okidoki</p>
        <span>언제 </span>
      </Detail>
      <Title>이벤트 타이틀이 정말 정말 길어지면 처리를 해야합니다.</Title>
    </EventContainer>
  );
}
const EventContainer = styled.div`
  width: 265px;
  margin-right: 20px;
  &:nth-last-child(1) {
    margin-right: 0px;
  }
`;
const EventImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;
const Detail = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-size: 14px;
  p {
    margin-right: 10px;
  }
`;
const Title = styled.p`
  width: 265px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export default MainEvent;
