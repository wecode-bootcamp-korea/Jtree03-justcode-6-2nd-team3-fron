import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Category(props) {
  const { pageInfo, categoryValue, setSubMenuId, setKeyword, setSortId, setSearch, setPage, setSortName } =
    props;

  const onClick = () => {
    if(categoryValue.sub_category_name === '전체'){
      setSearch(pageInfo.name)
    } else {
      setSearch(categoryValue.sub_category_name);
    }
    setKeyword('');
    setSortId('');
    setSortName('최신순');
    setPage(1);
    setSubMenuId(categoryValue.unique_id);
  };

  return (
    <Button
      to={categoryValue.path}
      end
      onClick={onClick}
      className={({ isActive }) => isActive && 'active'}
    >
      {categoryValue.sub_category_name}
    </Button>
  );
}

const Button = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 32px;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: #838383;
  text-decoration: none;
  background: transparent;

  &:nth-child(1) {
    margin: 0;
  }

  &:hover {
    color: black;
  }
  &.active {
    background: #f3f4f6;
    color: #000000;
  }
`;
