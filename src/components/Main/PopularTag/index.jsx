import styled from 'styled-components';

function PopularTag() {
  const tags = ['1', '2', '3', '4', '5'];
  return (
    <PopularContainer>
      <Title>인기태그</Title>
      <List>
        {tags.map(data => {
          return (
            <Tags>
              <p>#스택</p>
              <span>0</span>
            </Tags>
          );
        })}
      </List>
    </PopularContainer>
  );
}
const PopularContainer = styled.div`
  width: 180px;
  margin-right: 50px;
`;
const Title = styled.p`
  padding: 15px 0;
  font-size: 14px;
`;
const List = styled.div`
  padding-top: 10px;
  border-top: 1px solid #ddd;
`;
const Tags = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  font-size: 14px;
`;
export default PopularTag;
