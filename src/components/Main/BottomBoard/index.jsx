import axios from 'axios';
import { useEffect, useState } from 'react';
import MainBoard from '../MainBoard';

function BottomBoard({ mainId, title }) {
  const [boardData, setData] = useState([]);
  useEffect(() => {
    axios({
      url: `http://localhost:8000/posts?main_category_id=${mainId}&start=1&limit=5`,
      method: 'get',
    }).then(res => {
      setData(res.data.posts.posts);
    });
  }, []);
  return (
    <>
      <MainBoard boardData={boardData} title={title} />
    </>
  );
}

export default BottomBoard;
