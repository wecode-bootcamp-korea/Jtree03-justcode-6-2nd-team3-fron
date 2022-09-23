import styled from 'styled-components';
import Nbutton from './component/Nbutton';
import React, { useState } from 'react';
import CommentInComment from './component/CommentInComment';
import WriteCommentSpace from './component/WriteCommentSpace';
//import Modal from 'react-modal';
// import axios from 'axios';

export default function CommentList(props) {
  const { comment } = props;
  const [openComment, setOpenComment] = useState(false);
  const [iWantWrite, setIWantWrite] = useState(false);

  return (
    <Comment>
      <Betweendiv>
        <Rowdiv>
          <Profilebutton1>
            <Profileimg src={comment.profileurl} />
          </Profilebutton1>
          <Writeinfor>
            <Profilebutton2>{comment.nickname}</Profilebutton2>
            <div>
              <Viewimg src="https://cdn-icons-png.flaticon.com/512/2214/2214024.png" />
              <Small>114</Small>
              <Small>·</Small>
              <Small>약 16시간 전</Small>
            </div>
          </Writeinfor>
        </Rowdiv>
        <Rowdiv>
          <SelectionButton>
            <CheckCircle src="https://cdn-icons-png.flaticon.com/512/1756/1756625.png" />
          </SelectionButton>
          <Nbutton />
        </Rowdiv>
      </Betweendiv>
      <CommentContent>{comment.comment}</CommentContent>
      <Rowdiv>
        {openComment ? (
          <OpenComment onClick={() => setOpenComment(f => !f)}>
            <Viewimg src="https://i.esdrop.com/d/f/NlKPuBbCgn/Gduesjldbw.png" />
            <UnderLine>댓글 모두 숨기기</UnderLine>
          </OpenComment>
        ) : (
          <OpenComment onClick={() => setOpenComment(f => !f)}>
            <Viewimg src="https://i.esdrop.com/d/f/NlKPuBbCgn/VAShgqqw5f.png" />
            <UnderLine>댓글보기</UnderLine>
          </OpenComment>
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
            <div>
              <WriteCommentSpace />
            </div>
          </CommentinCommentwrapper>
        )}
        {openComment && (
          <CommentinCommentwrapper>
            <BlankLine />
            <CommentInComment />
          </CommentinCommentwrapper>
        )}
      </div>
    </Comment>
  );
}

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

const Bttonstyle = styled.button`
  background-color: transparent;
  border: none;
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
  line-height: 1.3;
  margin: 15px 0;
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
