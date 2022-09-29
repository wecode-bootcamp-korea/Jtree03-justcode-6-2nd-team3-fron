import Texteditor from './Texteditor';
import styled from 'styled-components';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

export default function WriteCommentSpace(props) {
  const {
    setLogin,
    login,
    name,
    comment,
    setShowEditor,
    setIWantWrite,
    setOpenComment,
    updateData,
  } = props;

  const [writecomment, setwritecomment] = useState();
  const params = useParams();
  const pageId = params.id;
  const navi = useNavigate();

  useEffect(() => {
    (name === '편집' || name === '편집의편집') &&
      setwritecomment(comment.content);
  }, []);

  /////여기서부터
  const perMission = () => {
    navi(`/login`);
    // axios.post(`http://localhost:8000/users/login`, body).then(res => {
    //   localStorage.setItem('token', res.data.token);
    //   setLogin(true); //임시 권한 부여 //TRUE상태 유지를 고민
    // });
  };
  ////여기까진 임시 코드

  useEffect(() => {
    if (localStorage.getItem('login-token'))
      localStorage.getItem('login-token') !== null
        ? setLogin(true)
        : setLogin(false);
  });

  let body;
  if (name === '편집') {
    body = {
      comment_id: comment.comment_id,
      content: writecomment,
    };
  } else if (name === '편집의편집') {
    body = {
      comment_id: comment.comment_id,
      content: writecomment,
    };
  } else if (name === '대댓글작성') {
    body = {
      post_id: pageId,
      parent_id: comment.comment_id,
      content: writecomment,
    };
  } else if (name === '댓글작성') {
    body = {
      post_id: pageId,
      content: writecomment,
    };
  }

  const sendComment = () => {
    if (name === '댓글작성' || name === '대댓글작성') {
      axios
        .post(`http://localhost:8000/comment`, body, {
          headers: { authorization: localStorage.getItem('login-token') },
        })
        .then(updateData());
      if (name === '대댓글작성') {
        setIWantWrite(false);
        setOpenComment(true);
      }
    } else if (
      name === '편집' ||
      name === '편집의편집' ||
      name === '편집의편집'
    ) {
      axios
        .patch(`http://localhost:8000/comment`, body, {
          headers: { authorization: localStorage.getItem('login-token') },
        })
        .then(updateData());
      setShowEditor(false);
    }
  };

  const canCelButton = () => {
    name === '대댓글작성' && setIWantWrite(false);
    (name === '편집' || name === '편집의편집') && setShowEditor(false);
  };

  return (
    <>
      <Inputspace>
        <Profile>
          <ProfileImg src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
        </Profile>
        {login ? (
          <TextEditorWrapper className="ql-snow">
            <Texteditor
              setwritecomment={setwritecomment}
              writecomment={writecomment}
            />
          </TextEditorWrapper>
        ) : (
          <Writeinput>
            댓글을 쓰려면
            <Loginbtton onClick={perMission}>로그인</Loginbtton>이 필요합니다.
          </Writeinput>
        )}
      </Inputspace>
      <Buttonspace>
        {name !== '댓글작성' && (
          <CancelButton onClick={canCelButton}>취소</CancelButton>
        )}
        <CommentButton onClick={sendComment}>댓글쓰기</CommentButton>
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
  opacity: 50%;
`;

const Buttonspace = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: end;
  width: 100%;
`;

const CommentButton = styled.button`
  background-color: #0090f9;
  opacity: 0.5;
  padding: 8px 30px;
  border-radius: 7px;
  border: none;
  color: white;
  cursor: pointer;
`;

const CancelButton = styled.button`
  background-color: white;
  border: 1px solid lightgray;
  padding: 8px 15px;
  border-radius: 7px;
  margin-right: 10px;
`;
