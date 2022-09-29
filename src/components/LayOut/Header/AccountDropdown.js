import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Dropdown(props) {

  const { profileImg } = props;

  const [open, setOpen] = useState(false);
  const logOut = () => {
    setOpen(false);
    localStorage.clear();
    window.location.reload();
  };
  const ref = useRef();

  useEffect(() => {
    const clickOutside = e => {
      // 모달이 열려 있고 모달의 바깥쪽을 눌렀을 때 창 닫기
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', clickOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [open]);

  const drop = [
    {
      img: 'https://cdn-icons-png.flaticon.com/512/456/456283.png',
      title: '내 프로필',
      link: 'settings',
    },
    {
      img: 'https://cdn-icons-png.flaticon.com/512/2961/2961948.png',
      title: '활동내역',
      link: `user/${localStorage.getItem('user_id')}`,
    },
  ];

  return (
    <div>
      <AccountIcon role="button" onClick={() => setOpen(!open)}>
        <Image src={profileImg} />
      </AccountIcon>
      {open && (
        <List ref={ref}>
          {drop.map(el => (
            <ItemBtn key={el.title}>
              <ItemImg src={el.img} />
              <Link to={el.link} onClick={() => setOpen(false)}>
                <ItemTitle>{el.title}</ItemTitle>
              </Link>
            </ItemBtn>
          ))}
          <ItemBtn>
            <ItemImg src="https://cdn-icons-png.flaticon.com/512/1286/1286853.png" />
            <ItemTitle onClick={logOut}>로그아웃</ItemTitle>
          </ItemBtn>
        </List>
      )}
    </div>
  );
}

const AccountIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
const Image = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;
const List = styled.ul`
  position: absolute;
  top: 55px;
  right: 0px;
  width: 230px;
  border-radius: 5px;
  border: 1px solid #ddd;
  overflow: hidden;
  list-style-type: none;
  background: #fff;
  z-index: 1;
`;

const ItemBtn = styled.li`
  font-size: 16px;
  padding: 15px 20px;
  width: 100%;
  text-align: left;
  :hover {
    cursor: pointer;
  }
  :nth-last-child(1) {
    border-top: 1px solid #ddd;
  }
`;
const ItemImg = styled.img`
  width: 12px;
  height: 12px;
  margin-left: 20px;
  opacity: 0.5;
`;
const ItemTitle = styled.span`
  display: inline-block;
  padding: 0 70px 0 0;
  margin-left: 10px;
  color: black;
  :hover {
    color: #0090f9;
  }
`;
