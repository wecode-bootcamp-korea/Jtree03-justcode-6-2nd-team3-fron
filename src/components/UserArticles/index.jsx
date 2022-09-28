import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Posts from './Posts';

import Profile from './Profile';

export default function UserArticles() {
  // const [profile, setProfile] = useState('');

  // useEffect(()=>{
  //   axios.get(`http://localhost:8000/posts`, {
  //     headers: {
  //       authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJpYXQiOjE2NjQzNDQ0NjMsImV4cCI6MTY2NDM1NTI2M30.Mm3RBgd8BrUmqV6LmLQuk8R5AgxxmYbnTPXKnPBnFhM'
  //     }
  //   })
  //   .then(res => console.log(res.data))
  // })

  return (
    <Div>
      <Profile />
      <Bottom>
        <Posts />
        <Posts />
      </Bottom>
    </Div>
  );
}

const Div = styled.div`
  width: 840px;
  margin: 30px auto;
`;

const Bottom = styled.div`
  margin: 50px 0;
`;
