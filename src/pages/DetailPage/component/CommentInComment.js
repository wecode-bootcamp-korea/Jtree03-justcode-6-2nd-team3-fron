import styled from 'styled-components';
import Nbutton from './Nbutton';
import { useState, useRef } from 'react';
import EditSection from './EditSection';
import WriteCommentSpace from './WriteCommentSpace';
//to Tobbar.js
export default function CommentInComment({
  comment,
  login,
  setLogin,
  updateData,
}) {
  const [showEditor2, setShowEditor2] = useState(false);
  const [iwantEdit, setiWantEdit] = useState(false);
  const outSection = useRef();

  function toHtml() {
    return { __html: comment.content };
  }

  return (
    <Comment>
      {showEditor2 ? (
        <WriteCommentSpaceWrapper>
          <WriteCommentSpace
            updateData={updateData}
            setLogin={setLogin}
            login={login}
            comment={comment}
            name={'편집의편집'}
            setShowEditor={setShowEditor2}
          />
        </WriteCommentSpaceWrapper>
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
                  <Small>{comment.user_score}</Small>
                  <Small>·</Small>
                  <Small>{comment.comment_create_at}</Small>
                </div>
              </Writeinfor>
            </Rowdiv>
            <Rowdiv>
              <Nbutton />
              <Bttonstyle onClick={() => setiWantEdit(f => !f)}>
                <CommentEdit src="https://cdn-icons-png.flaticon.com/512/2311/2311523.png" />
              </Bttonstyle>
            </Rowdiv>
          </Betweendiv>
          <CommentContent>
            <div dangerouslySetInnerHTML={toHtml()} />
            {iwantEdit === true ? (
              <EditSectionWrapper
                ref={outSection}
                onclick={e => {
                  if (outSection.current === e.target) {
                    setiWantEdit(false);
                  }
                }}
              >
                {iwantEdit && (
                  <EditSection
                    updateData={updateData}
                    setShowEditor2={setShowEditor2}
                    comment={comment}
                    name={'대댓글수정'}
                  />
                )}
              </EditSectionWrapper>
            ) : null}
          </CommentContent>
        </div>
      )}
    </Comment>
  );
}
const WriteCommentSpaceWrapper = styled.div`
  width: 100%;
`;

const EditSectionWrapper = styled.div`
  position: absolute;
  left: -31px;
  top: 5px;
`;

const Bttonstyle = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const CommentEdit = styled.img`
  margin-left: 20px;
  margin-top: 3px;
  width: 18px;
  height: 18px;
`;

const Comment = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  height: 40px;
  width: 40px;
  border-radius: 50%;
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
  position: relative;
  position: relative;
  line-height: 1.3;
  margin: 15px 0;
`;
