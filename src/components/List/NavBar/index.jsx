import { useState } from 'react';
import styled from 'styled-components';
import Category from './Category';

import img from '../../../image/list/sort.png';
import pencil from '../../../image/list/pencil.png';
import { Link, useLocation } from 'react-router-dom';

function NavBar(props) {
  const { subMenu, setSortId, setSubMenuId } = props;
    
  const [sort, setSort] = useState([
    { sub_category_name: '최신순', id:'', view: true },
    { sub_category_name: '추천순', id:1, view: false },
    { sub_category_name: '댓글순', id:2, view: false },
    { sub_category_name: '스크랩순', id:3, view: false },
    { sub_category_name: '조회순', id:4, view: false },
  ]);

  const [sortName, setSortName] = useState('최신순');
  const [view, SetView] = useState(false);
  const location = useLocation();

  return (
    <CategoryBox>
      <WriteBtn to={`${location.pathname}/new`}>
        <Pencil />
        작성하기
      </WriteBtn>
      <CategoryList>
        {subMenu && subMenu.map(categoryValue => (
          <Category
            key={categoryValue.sub_category_name}
            categoryValue={categoryValue}
            setSubMenuId={setSubMenuId}
          />
        ))}
      </CategoryList>
      <Filter onClick={() => SetView(!view)}>
        <SortIcon />
        {sortName}
        {view && (
          <Ul>
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
                    }
                    sortValue.view = true;
                    setSortName(sortValue.sub_category_name);
                    setSortId(sortValue.id);
                  }}
                >
                  {sortValue.sub_category_name}
                </Li>
              );
            })}
          </Ul>
        )}
      </Filter>
    </CategoryBox>
  );
}

const CategoryBox = styled.div`
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
  color: ${props => (props.sortValue.view ? '#0090F9' : '#4B5563')};

  &:hover {
    color: ${props => !props.sortValue.view && 'black'};
  }
`;

export default NavBar;
