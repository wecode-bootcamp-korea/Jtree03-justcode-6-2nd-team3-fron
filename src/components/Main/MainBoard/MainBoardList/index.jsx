import styled from 'styled-components';

function MainBoardList() {
  return (
    <div>
      <Boardcontent>
        <ListTitle>
          <DFlex>
            <p>닉네임</p>
            <span> 번개</span>
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
`;
const ListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  font-size: 14px;
`;
export default MainBoardList;
