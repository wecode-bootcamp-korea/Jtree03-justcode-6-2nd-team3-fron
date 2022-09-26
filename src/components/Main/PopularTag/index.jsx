import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';

function PopularTag() {
  const [tagsInfo, setTag] = useState([]);
  useEffect(() => {
    axios({
      url: 'http://localhost:8000/ranking/topTags',
      method: 'get',
    }).then(res => {
      setTag(res.data.topTags);
    });
  }, []);
  // const tags = ['1', '2', '3', '4', '5'];
  return (
    <PopularContainer>
      <Title>#인기태그</Title>
      <List>
        {tagsInfo.map(data => {
          return (
            <Tags key={data.id}>
              <p>#{data.tag_name}</p>
              <span>{data.cnt}</span>
            </Tags>
          );
        })}
      </List>
    </PopularContainer>
  );
}
const PopularContainer = styled.div`
  width: 180px;

  margin-right: 40px;
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

  padding: 10px 0;
  font-size: 14px;
  span {
    color: rgb(0 144 249);
  }
`;
export default PopularTag;
