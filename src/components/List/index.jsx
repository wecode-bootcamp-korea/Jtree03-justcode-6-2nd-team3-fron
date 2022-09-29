import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';

import NavBar from './NavBar';
import ListHeader from './ListHeader';
import SearchBar from './SearchBar';
import PostList from './PostList';
import ListLoading from './ListLoading';
import Pagination from './Pagination';
import { useLocation } from 'react-router-dom';

export default function List(props) {
  const { pageInfo } = props;

  const [list, setList] = useState('');
  const [subMenu, setSubMenu] = useState('');
  const [search, setSearch] = useState(pageInfo.name);
  const [subMenuId, setSubMenuId] = useState('');
  const [keyword, setKeyword] = useState('');
  const [sortId, setSortId] = useState('');
  const [page, setPage] = useState(1);
  const [limit] = useState(20);
  const [page_count, setPage_count] = useState(1);
  const [searchFilter, setSearchFilter] = useState('');
  const location = useLocation();
  
  function loading() {
    axios
    .all([
      axios.get(
        `http://localhost:8000/posts?main_category_id=${pageInfo.id}&sub_category_id=${subMenuId}&search_keyword=${keyword}&filter=${sortId}&page=${page}&limit=${limit}&filter_keyword=${searchFilter}`
        ),
        axios.get(`http://localhost:8000/menus/${pageInfo.id}`),
      ])
      .then(
        axios.spread((res1, res2) => {
          setList(res1.data.posts.posts);
          setPage_count(res1.data.posts.page_count[0].post_count);
          if (location.pathname.indexOf('/notice') >= 0) {
            let arr = [];
            arr.push(
              {
                unique_id: 10,
                main_category_id: 4,
                sub_category_name: "공지사항",
                path: ""
            },
            {
                unique_id: 11,
                main_category_id: 4,
                sub_category_name: "아카이브",
                path: "archive"
            }
            );
            setSubMenu(arr);
          } else if (location.pathname.indexOf('/jobs') >= 0) {
            setSubMenu(res2.data.sub_category);
          } else {
            let arr = [...res2.data.sub_category];
            arr.push({
              sub_category_name: '전체',
              path: '',
              unique_id: '',
            });
            setSubMenu(arr);
          }
        })
      )
      .catch((err1, err2) => {
        console.log('err1 =>', err1);
        console.log('err2 =>', err2);
      });
      // axios.get(`http://localhost:8000/menus/${pageInfo.id}`)
      // .then(res => {
        //   let arr = [...res.data.sub_category];
        //   arr.push({
    //     sub_category_name: '전체',
    //     sub_category_name_en: '',
    //     unique_id: '',
    //     view: true,
    //   });
    //   setSubMenu(arr);
    // });
  }
  
  useEffect(loading, [pageInfo, subMenuId, keyword, sortId, page, limit, location.pathname, searchFilter]);

  return (
    <ListContainer>
      <ListHeader title={pageInfo.name} />
      <NavBar
        pageInfo={pageInfo}
        subMenu={subMenu}
        setSubMenu={setSubMenu}
        setSortId={setSortId}
        setSubMenuId={setSubMenuId}
        setKeyword={setKeyword}
        setSearch={setSearch}
        setPage={setPage}
        setSearchFilter={setSearchFilter}
      />
      <SearchBar loading={loading} search={search} setKeyword={setKeyword} />
      {list ? (
        list.map(list => {
          return (
            <>
              <PostList
                key={list.unique_id}
                pageInfo={pageInfo}
                list={list}
                setSubMenuId={setSubMenuId}
              />
            </>
          );
        })
      ) : (
        <ListLoading />
      )}
      {list && (
        <Pagination
          limit={limit}
          listlength={page_count}
          page={page}
          setPage={setPage}
        />
      )}
    </ListContainer>
  );
}

const ListContainer = styled.div`
  margin: 50px auto 120px auto;
  width: 840px;
`;
