import { useState } from 'react';
import styled from 'styled-components';
import Category from './Category';

import img from '../../../image/list/sort.png';
import pencil from '../../../image/list/pencil.png';

function NavBar() {
  const [category, setCategory] = useState([
    { name: '기술', view: false },
    { name: '커리어', view: false },
    { name: '일상', view: false },
    { name: '전체', view: true },
  ]);

  const [sort, setSort] = useState([
    { name: '최신순', view: true },
    { name: '추천순', view: false },
    { name: '댓글순', view: false },
    { name: '스크랩순', view: false },
    { name: '조회순', view: false },
  ]);

  const [sortName, setSortName] = useState('최신순');
  const [view, SetView] = useState(false);

  return (
    <CategoryBox>
      <WriteBtn>
        <Pencil />
        작성하기
      </WriteBtn>
      <CategoryList>
        {category.map(categoryValue => (
          <Category
            key={categoryValue.name}
            categoryValue={categoryValue}
            category={category}
            setCategory={setCategory}
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
                  key={sortValue.name}
                  sortValue={sortValue}
                  onClick={() => {
                    for (let i in sort) {
                      let arr = [...sort];
                      arr[i].view = false;
                      setSort(arr);
                    }
                    sortValue.view = true;
                    setSortName(sortValue.name);
                  }}
                >
                  {sortValue.name}
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
const WriteBtn = styled.a`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 8px 16px 8px 12px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 500;
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
