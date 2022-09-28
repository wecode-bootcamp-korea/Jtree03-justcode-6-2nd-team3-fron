import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export default function HeaderNav() {
  const location = useLocation();

  const [category, setCategory] = useState([
    {
      name: 'Q&A',
      path: 'questions',
      view: false,
    },
    {
      name: 'KNOWLEDGE',
      path: 'knowledge',
      view: false,
    },
    {
      name: 'EVENTS',
      path: 'events',
      view: false,
    },
    {
      name: 'NOTICE',
      path: 'notice',
      view: false,
    },
    {
      name: 'JOBS',
      path: 'jobs',
      view: false,
    },
  ]);

  return (
    <Container>
      {category.map(el => (
        <>
          <Category
            to={el.path}
            onClick={() => {
              for (let i in category) {
                let arr = [...category];
                arr[i].view = false;
                setCategory(arr);
              }
              el.view = true;
            }}
            el={el}
          >
            {el.name}
          </Category>
            <Div />
        </>
      ))}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 13px;
  width: 840px;
  height: 100%;
`;

const Div = styled.div`
  &:nth-child(6) {
    height: 14px;
    border-right: 1px solid black;
    margin: 0 10px;
  }
  &:nth-child(8) {
    height: 14px;
    border-right: 1px solid black;
    margin: 0 10px;
  }
`;

const Category = styled(NavLink)`
  width: 90px;
  text-align: center;
  text-decoration: none;
  color: ${props => (props.el.view ? '#0090f9' : '#000000')};
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: #0090f9;
  }

  &:nth-child(3) {
    margin-right: 10px;
  }

  &:nth-child(9) {
    width: 80px;
  }
`;
