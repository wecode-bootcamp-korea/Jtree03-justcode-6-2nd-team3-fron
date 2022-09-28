import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import medal from '../../../image/list/medal.png';

function TopWriter() {
  // const writer = ['1', '2', '3', '4', '5'];
  const [writer, setWriter] = useState([]);
  useEffect(() => {
    axios({
      url: 'http://localhost:8000/ranking/topWriters',
      method: 'get',
    }).then(res => {
      setWriter(res.data.topWriters);
    });
  }, []);

  return (
    <TopWriterContainer>
      <Title>Top Writers</Title>
      <WriterList>
        {writer.map(data => {
          return (
            <Writer key={data.user_id} url={data.profile_image}>
              <div>
                <span></span>
                <p className="long">{data.nickname}</p>
              </div>
              <Icon>{data.cnt}</Icon>
            </Writer>
          );
        })}
      </WriterList>
    </TopWriterContainer>
  );
}
const TopWriterContainer = styled.div`
  width: 180px;
  margin-left: 40px;
`;
const Title = styled.p`
  padding: 15px 0;

  font-size: 14px;
`;
const WriterList = styled.div`
  padding-top: 10px;
  border-top: 1px solid #ddd;
`;
const Writer = styled.div`
  display: flex;
  justify-content: space-between;
  .long {
    padding: 3px 0;
    max-width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  align-items: center;
  padding: 10px 0;
  font-size: 14px;
  div {
    display: flex;
    align-items: center;
    span {
      display: block;
      width: 25px;
      height: 25px;
      margin-right: 5px;
      border-radius: 50%;
      background: url(${props => props.url}) center center no-repeat;
      background-size: cover;
    }
  }
`;
const Icon = styled.div`
  ::before {
    content: '';
    display: block;
    width: 18px;
    height: 18px;
    margin-right: 5px;
    background: url(${medal}) center center no-repeat;
    background-size: cover;
  }
`;
export default TopWriter;
