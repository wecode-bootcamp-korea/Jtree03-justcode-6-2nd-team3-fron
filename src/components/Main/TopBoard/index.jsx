import axios from 'axios';
import { useEffect, useState } from 'react';
import MainBoard from '../MainBoard';

function TopBoard({ category, title }) {
  const [boardData, setData] = useState([]);
  useEffect(() => {
    axios({
      url: `http://localhost:8000/ranking/${category}`,
      method: 'get',
    }).then(res => {
      setData(res.data[category]);
    });
  }, []);

  return (
    <>
      <MainBoard boardData={boardData} title={title} />
    </>
  );
}
export default TopBoard;
