import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function MainEvent(data) {
  const navigate = useNavigate();
  return (
    <EventContainer>
      <ImgContainer
        onClick={() => navigate(`/articles/${data.data.unique_id}`)}
      >
        <EventImage src={data.data.thumbnail} />
      </ImgContainer>
      <Detail>
        <p>{data.data.nickname}</p>
        {/* <span>&nbsp;&middot; 언제 </span> */}
      </Detail>
      <Title onClick={() => navigate(`/articles/${data.data.unique_id}`)}>
        {data.data.title}
      </Title>
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
const ImgContainer = styled.div`
  width: 265px;
  height: auto;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
`;
const EventImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  cursor: pointer;
`;
const Detail = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-size: 14px;
`;
const Title = styled.p`
  padding: 3px 0;
  width: 265px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    font-weight: bold;
  }
`;
export default MainEvent;
