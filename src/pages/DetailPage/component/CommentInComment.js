import styled from 'styled-components';
import Nbutton from './Nbutton';
//to Tobbar.js
export default function CommentInComment(comment) {
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
      <CommentContent>안녕하세요</CommentContent>
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
  line-height: 1.3;
  margin: 15px 0;
`;
