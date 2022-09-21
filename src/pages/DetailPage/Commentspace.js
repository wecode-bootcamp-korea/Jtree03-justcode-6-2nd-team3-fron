import styled from 'styled-components';
import CommentList from './CommentList'; //댓글리스트
import WriteCommentSpace from './component/WriteCommentSpace';

export default function Commentspace(props) {
  const { data } = props;
  return (
    <>
      <Howmany>{data.comment && data.comment.length}개의 댓글</Howmany>
      <Writespace>
        <WriteCommentSpace />
      </Writespace>
      <CommentLists>
        {data.comment &&
          data.comment.map(f => {
            return (
              <CommentWrapper key={f.id}>
                <CommentList comment={f} />
              </CommentWrapper>
            );
          })}
      </CommentLists>
    </>
  );
}

const Howmany = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: flex-start;
`;

const Writespace = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid rgb(229 231 235);
  border-radius: 7px;
  margin-top: 40px;
  padding: 20px;
`;

const CommentWrapper = styled.div`
  padding: 35px 0px;
  border-bottom: 1px solid lightgray;
`;

const CommentLists = styled.div`
  margin-top: 50px;
  width: 100%;
`;
