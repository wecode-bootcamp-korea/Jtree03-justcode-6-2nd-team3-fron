import Texteditor from './Texteditor';
import styled from 'styled-components';
import { useState } from 'react';

export default function WriteCommentSpace() {
  const [login, setLogin] = useState(false);
  return (
    <>
      <Inputspace>
        <Profile>
          <ProfileImg src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
        </Profile>
        {login ? (
          <TextEditorWrapper className="ql-snow">
            <Texteditor />
          </TextEditorWrapper>
        ) : (
          <Writeinput>
            댓글을 쓰려면
            <Loginbtton onClick={() => setLogin(true)}>로그인</Loginbtton>이
            필요합니다.
          </Writeinput>
        )}
      </Inputspace>
      <Buttonspace>
        <CommentButton>댓글쓰기</CommentButton>
      </Buttonspace>
    </>
  );
}

const TextEditorWrapper = styled.div`
  margin-left: 0px;
  width: 100%;
`;

const Writeinput = styled.div`
  margin-left: 0px;
  padding: 7px;
  font-size: 12px;
  width: 100%;
  height: 55px;
  border-radius: 5px;
  border: 1.5px solid lightgray;
`;

const Loginbtton = styled.button`
  color: blue;
  font-size: 12px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding-right: 0;
  text-decoration: underline;
`;

const Inputspace = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Profile = styled.span`
  padding-right: 8px;
  margin-right: 10px;
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
`;

const Buttonspace = styled.div`
  margin: 10px 0 0 560px;
  display: flex;
  align-items: flex-end;
  width: 100%;
`;

const CommentButton = styled.button`
  background-color: #0090f9;
  opacity: 0.5;
  padding: 8px 30px;
  border-radius: 5px;
  font-size: 8px;
  border: none;
  color: white;
  cursor: pointer;
`;
