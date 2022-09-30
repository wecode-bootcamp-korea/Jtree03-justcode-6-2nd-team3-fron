import { useRef } from 'react';
import styled from 'styled-components';

export default function SearchBar(props) {
  const { loading, search, setKeyword, setList } = props;
  const ref = useRef();

  const searchPost = () => {
    setKeyword(ref.current.value);
    ref.current.value = '';
  };

  const onKeyDown = e => {
    if (e.key === 'Enter') {
      searchPost();
    }
  };

  return (
    <Bar>
      <Refresh onClick={()=>{
        setList('');
        setTimeout(loading, 1);
      }} />
      <Search>
        <Icon />
        <Input
          placeholder={`${search} 내에서 검색`}
          ref={ref}
          onKeyDown={onKeyDown}
        />
      </Search>
    </Bar>
  );
}

const Bar = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 66px;
  padding: 16px 0;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
`;

const Refresh = styled.svg`
  position: absolute;
  top: 35%;
  left: 0;
  width: 20px;
  height: 20px;
  background: url('https://cdn-icons-png.flaticon.com/512/545/545661.png')
    center center no-repeat;
  background-size: cover;
  opacity: 0.3;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 32px;
  border: 2px solid #e5e7eb;
  border-radius: 30px;
  transition: all ease-in-out 0.1s;

  &:focus-within {
    border: 2px solid #0091f9ec;
  }
`;

const Icon = styled.svg`
  width: 14px;
  height: 14px;
  margin: 0 6px 0 10px;
  background: url('https://cdn-icons-png.flaticon.com/512/482/482631.png')
    center center no-repeat;
  background-size: cover;
`;

const Input = styled.input`
  width: calc(100% - 40px);
  border: none;

  &:focus {
    outline: none;
  }
`;
