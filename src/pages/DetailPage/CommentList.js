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
        <Nbutton />
      </Betweendiv>
      <CommentContent>{comment.comment}</CommentContent>
      <Rowdiv>
        <OpenComment onClick={() => setOpenComment(f => !f)}>
          <Viewimg src="https://w7.pngwing.com/pngs/523/1012/png-transparent-arrow-computer-icons-encapsulated-postscript-drop-down-list-arrow-blue-angle-text.png" />
          댓글보기
        </OpenComment>
        <WriteComment onClick={() => setIWantWrite(f => !f)}>
          댓글쓰기
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
`;

const Profileimg = styled.img`
  height: 25px;
  width: 25px;
`;

const Profilebutton2 = styled(Bttonstyle)`
  text-align: left;
`;

const Viewimg = styled.img`
  width: 12px;
  height: 12px;
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
`;

const BlankLine = styled.div`
  margin-left: 10px;
  padding-left: 16px;
  border-left: 2px solid lightgray;
  height: 100px;
  width: 0;
`;
