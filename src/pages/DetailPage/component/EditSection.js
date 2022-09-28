import styled from 'styled-components';
import axios from 'axios';

export default function Editsection(props) {
  const { setShowEditor, comment, name, setShowEditor2, updateData } = props;

  function deleteComment() {
    axios.delete(`http://localhost:8000/comment`, {
      headers: { authorization: localStorage.getItem('token') },
      data: { comment_id: comment.comment_id },
    });
    updateData();
  }

  function editcomment() {
    name === '대댓글수정' ? setShowEditor2(true) : setShowEditor(true);
    //setwritecomment('aa');
  }

  return (
    <Section>
      <Margin>
        <Category onClick={editcomment}>
          <Iconimg src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png" />
          수정하기
        </Category>
        <Category onClick={deleteComment}>
          <Iconimg src="https://cdn-icons-png.flaticon.com/512/484/484662.png" />
          삭제하기
        </Category>
      </Margin>
    </Section>
  );
}
const Section = styled.div`
  background-color: white;
  border: 0.5px solid lightgray;
  border-radius: 6px;
  position: absolute;
  top: -16px;
  left: 580px;
  width: 120px;
  filter: drop-shadow(0 0px 4px rgba(54, 54, 54, 0.2));
`;

const Margin = styled.div`
  margin: 6px 3px;
`;

const Category = styled.button`
  cursor: pointer;
  padding: 0;
  width: 100%;
  font-size: 15px;
  margin: 3px 3px 3px 0px;
  background-color: transparent;
  color: gray;
  border: none;
`;

const Iconimg = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 12px;
  opacity: 60%;
`;
