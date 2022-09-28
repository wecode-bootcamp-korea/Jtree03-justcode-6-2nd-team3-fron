import styled from 'styled-components';
import Nbutton from './component/Nbutton';
import React, { useState } from 'react';
import CommentInComment from './component/CommentInComment';
import EditSection from './component/EditSection';
import WriteCommentSpace from './component/WriteCommentSpace';

//import Modal from 'react-modal';
// import axios from 'axios';

export default function CommentList(props) {
  const { comment, setLogin, login, myInfor, updateData } = props;
  const [openComment, setOpenComment] = useState(false);
  const [iWantWrite, setIWantWrite] = useState(false);
  const [wantEdit, setWantEdit] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [showEditor2, setShowEditor2] = useState(false);

  const incomment = comment.comment_in_comment;

  function toHtml() {
    return { __html: comment.content };
  }
  console.log('test', comment);
  return (
    <Comment>
      {showEditor ? (
        <WriteCommentSpace
          setLogin={setLogin}
          login={login}
          comment={comment}
          name={'편집'}
          updateData={updateData}
          setShowEditor={setShowEditor}
        />
      ) : (
        <div>
          <Betweendiv>
            <Rowdiv>
              <Profilebutton1>
                <Profileimg src={comment.profile_image} />
              </Profilebutton1>
              <Writeinfor>
                <Profilebutton2>{comment.nickname}</Profilebutton2>
                <div>
                  <Viewimg src="https://cdn-icons-png.flaticon.com/512/2214/2214024.png" />
                  <Small>{comment.score}</Small>
                  <Small>·</Small>
                  <Small>{comment.comment_create_at}</Small>
                  {comment.content !== comment.content && (
                    <div>
                      <Small>·</Small>
                      <Small>수정됨</Small>
                    </div>
                  )}
                </div>
              </Writeinfor>
            </Rowdiv>
            <Rowdiv>
              <SelectionButton>
                <CheckCircle src="https://cdn-icons-png.flaticon.com/512/1756/1756625.png" />
              </SelectionButton>
              <Nbutton score={comment.score} name={'댓글점수'} />
              <Bttonstyle onClick={() => setWantEdit(f => !f)}>
                <CommentEdit src="https://cdn-icons-png.flaticon.com/512/2311/2311523.png" />
              </Bttonstyle>
            </Rowdiv>
          </Betweendiv>
          <CommentContent>
            <div dangerouslySetInnerHTML={toHtml()} />
            {wantEdit && (
              <EditSection
                setShowEditor={setShowEditor}
                updateData={updateData}
                comment={comment}
              />
            )}
          </CommentContent>

          <Rowdiv>
            {incomment.length !== 0 && (
              <div>
                {openComment ? (
                  <OpenComment onClick={() => setOpenComment(f => !f)}>
                    <Viewimg src="https://i.esdrop.com/d/f/NlKPuBbCgn/Gduesjldbw.png" />
                    <UnderLine>댓글 모두 숨기기</UnderLine>
                  </OpenComment>
                ) : (
                  incomment[0].content !== null && (
                    <OpenComment onClick={() => setOpenComment(f => !f)}>
                      <Viewimg src="https://i.esdrop.com/d/f/NlKPuBbCgn/VAShgqqw5f.png" />
                      <UnderLine>댓글 {incomment.length}개 보기</UnderLine>
                    </OpenComment>
                  )
                )}
              </div>
            )}

            <WriteComment onClick={() => setIWantWrite(f => !f)}>
              {iWantWrite ? (
                <UnderLine>댓글취소</UnderLine>
              ) : (
                <UnderLine>댓글쓰기</UnderLine>
              )}
            </WriteComment>
          </Rowdiv>
          <div>
            {iWantWrite && (
              <CommentinCommentwrapper>
                <BlankLine />
                <WriteCommentSpaceWrapper>
                  <WriteCommentSpace
                    updateData={updateData}
                    setIWantWrite={setIWantWrite}
                    setOpenComment={setOpenComment}
                    showEditor={showEditor}
                    name={'대댓글작성'}
                    setLogin={setLogin}
                    login={login}
                    comment={comment}
                  />
                </WriteCommentSpaceWrapper>
              </CommentinCommentwrapper>
            )}
            {openComment &&
              incomment[0].content !== null &&
              incomment.map(f => {
                console.log('test', f);
                return (
                  <CommentinCommentwrapper key={f.comment_id}>
                    <BlankLine />
                    <CommentInComment
                      updateData={updateData}
                      comment={f}
                      login={login}
                      setLogin={setLogin}
                    />
                  </CommentinCommentwrapper>
                );
              })}
          </div>
        </div>
      )}
    </Comment>
  );
}

const WriteCommentSpaceWrapper = styled.div`
  width: 100%;
`;

const Bttonstyle = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

//const CommentEditButton = styled.(Bttonstyle)

const CommentEdit = styled.img`
  margin-left: 20px;
  margin-top: 3px;
  width: 18px;
  height: 18px;
`;
//const CommentEditButton = styled.(Bttonstyle)
//const CommentEditButton = styled.(Bttonstyle)

const SelectionButton = styled.button`
  //QnA카테고리만 해당
  display: flex;
  flex-direction: row;
  margin-top: 13px;
  margin-right: 23px;
  background-color: transparent;
  border: none;
`;

const CheckCircle = styled.img`
  width: 20px;
  height: 20px;
  opacity: 40%;
`;

const UnderLine = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;

const Comment = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpenComment = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: #0090f9;
  font-size: 12px;
  margin: 0 5px;
`;

const WriteComment = styled(OpenComment)`
  color: gray;
  font-size: 12px;
`;

const Betweendiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Rowdiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const Profilebutton1 = styled(Bttonstyle)`
  width: 50px;
  margin-right: 4px;
`;

const Profileimg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

const Profilebutton2 = styled(Bttonstyle)`
  text-align: left;
`;

const Viewimg = styled.img`
  width: 10px;
  height: 10px;
  margin-right: 3px;
`;

const Small = styled.span`
  margin: 0 2px;
  font-size: 12px;
  color: gray;
`;

const Writeinfor = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  position: relative;
  display: flex;
  flex-direction: row;
  position: relative;
  display: flex;
  flex-direction: row;
  line-height: 1.3;
  margin: 15px 0;
  font-size: 15px;
  font-size: 15px;
  font-size: 15px;
  color: gray;
`;

const CommentinCommentwrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const BlankLine = styled.div`
  margin-left: 10px;
  padding-left: 16px;
  border-left: 2px solid lightgray;
  height: 90px;
  width: 0;
`;
