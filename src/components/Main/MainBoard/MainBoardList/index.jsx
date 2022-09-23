import styled from 'styled-components';

function MainBoardList() {
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
              <span /> 번개
            </Point>
            <p>시간</p>
          </DFlex>
          <DFlex>
            <p>5</p>
            <p>12</p>
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
  span {
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 5px;
    border-radius: 50%;
    background: #ddd;
  }
`;
const ListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  font-size: 14px;
`;
export default MainBoardList;
