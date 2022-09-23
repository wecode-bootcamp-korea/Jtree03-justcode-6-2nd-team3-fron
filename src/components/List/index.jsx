import styled from 'styled-components';

import NavBar from './NavBar';
import ListHeader from './ListHeader';
import SearchBar from './SearchBar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PostList from './PostList';
import ListLoading from './ListLoading';

function List(props) {
  const { pageInfo } = props;

  const [list, setList] = useState('');
  const [subMenu, setSubMenu] = useState('');
  const [subMenuId, setSubMenuId] = useState('');
  const [sortId, setSortId] = useState('');

  function loading() {
    axios
      .all([
        axios.get(
          `http://localhost:8000/posts?main_category_id=${pageInfo.id}&sub_category_id=${subMenuId}&search_keyword=&filter=${sortId}`
          // 'http://localhost:8000/posts?main_category_id=1&sub_category_id=3&search_keyword=&filter=1'
        ),
        axios.get(`http://localhost:8000/menus/${pageInfo.id}`),
      ])
      .then(
        axios.spread((res1, res2) => {
          setList(res1.data.posts);
          let arr = [...res2.data.sub_category];
          arr.push({
            sub_category_name: '전체',
            unique_id: '',
            view: true,
          })
          setSubMenu(arr);
        })
      )
      .catch(error => console.log(error));

    // axios.get('http://localhost:8000/posts?main_category_id=1&sub_category_id=3&search_keyword=&filter=1')
    // .then(res => console.log(res.data))
    // .catch(err => console.log(err))
  }


  useEffect(loading, [subMenuId, sortId]);

  return (
    <ListContainer>
      <ListHeader title={pageInfo.name} />
      <NavBar subMenu={subMenu} setSortId={setSortId} setSubMenuId={setSubMenuId} />
      <SearchBar title={pageInfo.name} loading={loading} />
      {list ? (
        list.map(list => {
          return <PostList key={list.unique_id} list={list} />;
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
