import styled from 'styled-components';
import thunder from '../../../../image/list/thunder.png';
import arrow from '../../../../image/list/arrow.png';
import comment from '../../../../image/list/comment.png';

function MainBoardList({ mainId }) {
  console.log('id', mainId);
  return (
    <div>
      <Boardcontent>
        <ListTitle>
          <DFlex>
            <User>
              <span />
              닉네임
            </User>
            <Point>
              &middot;
              <span /> 번개
            </Point>
            <Time>&nbsp;&middot; 시간</Time>
          </DFlex>
          <DFlex>
            <Common backImage={arrow}>
              <span />5
            </Common>
            <Common backImage={comment} mr_5="5px">
              <span />
              12
            </Common>
          </DFlex>
        </ListTitle>
        <p>내용이 들어가는 자리</p>
      </Boardcontent>
    </div>
  );
}
const Boardcontent = styled.div`
  padding: 15px 0;
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
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 50%;
    background: #ddd;
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
// const UpDown = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: 10px;
//   color: #666;
//   span {
//     display: inline-block;
//     width: 17px;
//     height: 17px;
//     background: url(${arrow}) center center no-repeat;
//     background-size: cover;
//     opacity: 0.7;
//   }
// `;
// const Comment = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: 5px;
//   color: #666;
//   span {
//     display: inline-block;
//     width: 17px;
//     height: 17px;
//     margin-right: 5px;
//     background: url(${comment}) center center no-repeat;
//     background-size: cover;
//     opacity: 0.7;
//   }
// `;
const ListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  font-size: 14px;
`;
export default MainBoardList;
