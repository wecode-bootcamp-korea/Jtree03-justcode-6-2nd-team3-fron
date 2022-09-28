import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Topbar from './Topbar';
import Content from './Content';
import Commentspace from './Commentspace';
import { useParams } from 'react-router-dom';

export default function Detail() {
  const [postData, setPostData] = useState([]);
  const [myInfor, setMyInfor] = useState([]);

  const params = useParams();
  const pageId = params.id;

  useEffect(() => {
    axios.get(`http://localhost:8000/posts/${pageId}`).then(function (res) {
      setPostData(res.data.post[0]);
    });
  }, [pageId]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/profile', {
        headers: { authorization: localStorage.getItem('token') },
      })
      .then(function (res) {
        setMyInfor(res.user);
      });
  }, []);
  console.log(myInfor);

  return (
    <Center>
      <Body>
        <Topbar postData={postData} />
        <Content postData={postData} />
        <Commentspace myInfor={myInfor} />
      </Body>
    </Center>
  );
}

const Center = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
`;

const Body = styled.div`
  width: 700px;
`;
