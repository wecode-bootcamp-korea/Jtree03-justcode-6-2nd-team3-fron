import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Topbar from './Topbar';
import Content from './Content';
import Commentspace from './Commentspace';

export default function Detail() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    axios
      .get('https://ee1ed259-28b1-44d0-a5b1-0b164fdc0033.mock.pstmn.io/list')
      .then(function (Response) {
        setPostData(Response.data);
      });
  }, []);

  return (
    <Center>
      <Body>
        <Topbar data={postData} />
        <Content data={postData} />
        <Commentspace data={postData} />
      </Body>
    </Center>
  );
}

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const Body = styled.div`
  width: 700px;
`;
