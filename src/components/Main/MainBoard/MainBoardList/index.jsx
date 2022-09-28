import styled from 'styled-components';
import thunder from '../../../../image/list/thunder.png';
import arrow from '../../../../image/list/arrow.png';
import comment from '../../../../image/list/comment.png';
import { useNavigate } from 'react-router-dom';

function MainBoardList({ boardData }) {
  const navigate = useNavigate();

  return (
    <div>
      <Boardcontent>
        <ListTitle>
          <DFlex>
            <User url={boardData.profile_image}>
              <span />
              {boardData.nickname}
            </User>
            <Point>
              &middot;
              <span />
              {boardData.score}
            </Point>
            {/* <Time>&nbsp;&middot; 시간</Time> */}
          </DFlex>
          <DFlex>
            <Common backImage={arrow}>
              <span />
              {boardData.recommend_cnt}
            </Common>
            <Common backImage={comment} mr_5="5px">
              <span />
              {boardData.comment_cnt}
            </Common>
          </DFlex>
        </ListTitle>
        <div
          className="titleWrap"
          onClick={() => navigate(`/articles/${boardData.unique_id}`)}
        >
          {boardData.title}
        </div>
      </Boardcontent>
    </div>
  );
}
const Boardcontent = styled.div`
  padding: 15px 0;
  .titleWrap {
    padding: 3px 0;
    max-width: 380px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    cursor: pointer;
    &:hover {
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;
const DFlex = styled.div`
  display: flex;
  align-items: center;
`;
const User = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
  span {
    display: block;
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 50%;
    background: url(${props => props.url}) center center no-repeat;
    background-size: cover;
  }
`;
const Point = styled.div`
  display: flex;
  align-items: center;

  color: #666;

  span {
    display: inline-block;
    width: 15px;
    height: 15px;
    background: url(${thunder}) center center no-repeat;
    background-size: cover;
  }
`;
const Time = styled.p`
  color: #666;
`;
const Common = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  color: #666;
  span {
    display: inline-block;
    width: 17px;
    height: 17px;
    margin-right: ${props => props.mr_5 || '0'};
    background: url(${props => props.backImage}) center center no-repeat;
    background-size: cover;
    opacity: 0.7;
  }
`;

const ListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;

  font-size: 14px;
`;
export default MainBoardList;
