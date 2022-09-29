import axios from 'axios';
import { useReducer } from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Posts from './Posts';

import Profile from './Profile';
import Scraps from './Scraps';

export default function UserActivities() {
  const [profile, setProfile] = useState('');
  const [scraps, setScraps] = useState('');
  const location = useLocation();

  useEffect(()=>{
    axios.all([
      axios.get(`http://localhost:8000/profile/${location.pathname.split('/')[2]}`),
      axios.get(`http://localhost:8000/scraps/${location.pathname.split('/')[2]}`)
    ])
    .then(axios.spread((res1, res2) => {
      setProfile(res1.data.posts.posts);
      setScraps(res2.data.scraps);
    }))
  }, [])
  
  const [btn, setBtn] = useState([
    {
      name: '게시물',
      view: true,
    },
    {
      name: '스크랩',
      view: false,
    },
  ]);

  return profile && (
    <Div>
      <Profile profile={profile} btn={btn} setBtn={setBtn} />
      <Bottom>
        {btn[0].view ? profile.map(profile=>
            <Posts key={profile.unique_id} profile={profile} btn={btn} />
        ) : 
        scraps.map(scraps=>
          <Scraps key={scraps.unique_id} scraps={scraps}/>
          )
      }
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
