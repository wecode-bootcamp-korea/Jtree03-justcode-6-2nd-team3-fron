import styled from 'styled-components';

function TopWriter() {
  const writer = ['1', '2', '3', '4', '5'];
  return (
    <TopWriterContainer>
      <Title>Top Writers</Title>
      <WriterList>
        {writer.map(data => {
          return (
            <Writer>
              <p>닉네임</p>
              <span>0</span>
            </Writer>
          );
        })}
      </WriterList>
    </TopWriterContainer>
  );
}
const TopWriterContainer = styled.div`
  width: 180px;
  margin-left: 50px;
`;
const Title = styled.p`
  padding: 10px 0;
  font-size: 14px;
`;
const WriterList = styled.div`
  padding-top: 10px;
  border-top: 1px solid #ddd;
`;
const Writer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  font-size: 14px;
`;
export default TopWriter;
