import styled from 'styled-components';

import NavBar from './NavBar';
import ListHeader from './ListHeader';
import SearchBar from './SearchBar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PostList from './PostList';
import ListLoading from './ListLoading';

function List() {
  const title = 'Q&A';

  const [list, setList] = useState('');


  function loading() {
    axios
      .get(`http://localhost:8000/posts?main_category_id=1&sub_category_id=3&search_keyword=&filter=`)
      .then(res => {
        setList('');
        setTimeout(() => console.log(res.data.data), 100);
      })
      .catch(error => console.log(error));
  }

  useEffect(loading, []);

  return (
    <ListContainer>
      <ListHeader title={title} />
      <NavBar />
      <SearchBar title={title} loading={loading} />
      {list ? (
        list.map(list => {
          return <PostList key={list.user_id} list={list} />;
        })
      ) : (
        <ListLoading />
      )}
    </ListContainer>
  );
}

const ListContainer = styled.div`
  margin: 0 auto;
  width: 840px;
`;

export default List;
