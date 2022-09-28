import styled from 'styled-components';
import Nbutton from './Nbutton';
import { useState } from 'react';
import EditSection from './EditSection';
//to Tobbar.js
export default function CommentInComment({ comment, setShowEditor }) {
  //const [showEditor, setShowEditor] = useState(false);

  const [iwantEdit, setiWantEdit] = useState(false);
  function toHtml() {
    return { __html: comment.content };
  }

  return (
    <Comment>
      <Betweendiv>
        <Rowdiv>
          <Profilebutton1>
            <Profileimg src="https://cdn-icons-png.flaticon.com/512/3001/3001758.png" />
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
          <Nbutton />
          <Bttonstyle onClick={() => setiWantEdit(f => !f)}>
            <CommentEdit src="https://cdn-icons-png.flaticon.com/512/2311/2311523.png" />
          </Bttonstyle>
        </Rowdiv>
      </Betweendiv>
      <CommentContent>
        <div dangerouslySetInnerHTML={toHtml()} />
        <EditSectionWrapper>
          {iwantEdit && <EditSection setShowEditor={setShowEditor} />}
        </EditSectionWrapper>
      </CommentContent>
    </Comment>
  );
}

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
  position: relative;
  line-height: 1.3;
  margin: 15px 0;
`;
