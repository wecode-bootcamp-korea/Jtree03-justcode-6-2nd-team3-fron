import { useState } from 'react';
import styled from 'styled-components';
import Category from './Category';

import img from '../../../image/list/sort.png';
import pencil from '../../../image/list/pencil.png';
import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { useEffect } from 'react';
import JobsFilter from './JobsFilter';

export default function NavBar(props) {
  const {
    pageInfo,
    subMenu,
    setSortId,
    setSubMenuId,
    setKeyword,
    setSearch,
    setPage,
    setSearchFilter,
    setList,
  } = props;

  const [sort, setSort] = useState([
    { sub_category_name: '최신순', id: '', view: true },
    { sub_category_name: '추천순', id: 1, view: false },
    { sub_category_name: '댓글순', id: 2, view: false },
    { sub_category_name: '스크랩순', id: 3, view: false },
    { sub_category_name: '조회순', id: 4, view: false },
  ]);

  const [sortName, setSortName] = useState('최신순');
  const [view, setView] = useState(false);
  const ref = useRef();
  const location = useLocation();

  useEffect(() => {
    const clickOutside = (e) => {
      // 모달이 열려 있고 모달의 바깥쪽을 눌렀을 때 창 닫기
      if (view && ref.current && !ref.current.contains(e.target)) {
        setView(false);
      }
    };

    document.addEventListener("mousedown", clickOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [view]);

  return (
    <CategoryBox>
      <WriteBtn to={`/${pageInfo.path}/new`}>
        <Pencil />
        작성하기
      </WriteBtn>
      <CategoryList>
        {subMenu &&
          subMenu.map(categoryValue => (
            <Category
              key={categoryValue.sub_category_name}
              pageInfo={pageInfo}
              categoryValue={categoryValue}
              setSubMenuId={setSubMenuId}
              setKeyword={setKeyword}
              setSortId={setSortId}
              setSearch={setSearch}
              setPage={setPage}
              setSortName={setSortName}
              setList={setList}
            />
          ))}
      </CategoryList>
      <Filter onClick={() => setView(!view)}>
        <SortIcon />
        {location.pathname === '/jobs' ? '검색필터' : sortName}
      </Filter>
      {location.pathname === '/jobs' ? (
        <>{view && <JobsFilter view={view} setView={setView} setSearchFilter={setSearchFilter} setSortId={setSortId} />}</>
      ) : (
        <>
          {view && (
            <Ul ref={ref} >
              {sort.map(sortValue => {
                return (
                  <Li
                    key={sortValue.sub_category_name}
                    sortValue={sortValue}
                    onClick={() => {
                      for (let i in sort) {
                        let arr = [...sort];
                        arr[i].view = false;
                        setSort(arr);
                        setList('');
                      }
                      sortValue.view = true;
                      setSortName(sortValue.sub_category_name);
                      setSortId(sortValue.id);
                      setView(false);
                    }}
                  >
                    {sortValue.sub_category_name}
                  </Li>
                );
              })}
            </Ul>
          )}
        </>
      )}
    </CategoryBox>
  );
}

const CategoryBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin: 24px 0;
`;

const WriteBtn = styled(Link)`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 8px 16px 8px 12px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  color: #ffffff;
  background: rgba(0, 144, 249, 0.9);
  cursor: pointer;

  &:hover {
    background: #0f7ed3;
  }
`;

const Pencil = styled.svg`
  width: 12px;
  height: 12px;
  margin-right: 5px;
  background: url(${pencil}) center center no-repeat;
  background-size: cover;
`;

const CategoryList = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
`;

const Filter = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 32px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  padding: 8px 16px 8px 12px;
  color: #374151;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    border: 1px solid black;
  }
`;

const SortIcon = styled.svg`
  width: 20px;
  height: 20px;
  background: url(${img}) center center no-repeat;
  background-size: cover;
`;

const Ul = styled.ul`
  z-index: 100;
  position: absolute;
  top: 40px;
  right: 0;
  width: 152px;
  padding: 4px 0;
  border: 1px solid #e5e7eb;
  border-radius: 5px;
  box-shadow: 0px 3px 10px #d9d9d9;
  background: #ffffff;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  height: 36px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  color: ${props => (props.sortValue.view ? '#0090F9' : '#4B5563')};

  &:hover {
    color: ${props => !props.sortValue.view && 'black'};
  }
`;
