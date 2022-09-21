import styled from 'styled-components';
import CommentList from './CommentList'; //댓글리스트

export default function Commentspace(props) {
  const { data } = props;
  return (
    <>
      <Howmany>7개의 댓글</Howmany>
      <Writespace>
        <Inputspace>
          <Profile>
            <ProfileImg src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
          </Profile>
          <Writeinput />
        </Inputspace>
        <Buttonspace>
          <CommentButton>댓글쓰기</CommentButton>
        </Buttonspace>
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
  height: 135px;
  border: 1px solid rgb(229 231 235);
  border-radius: 7px;
  margin-top: 40px;
  padding: 15px;
`;

const Inputspace = styled.div`
  display: flex;
  flex-direction: row; ;
`;

const Profile = styled.span`
  padding-right: 8px;
`;

const ProfileImg = styled.img`
  width: 35px;
  height: 35px;
`;

const Writeinput = styled.input`
  margin-left: 10px;
  width: 100%;
  height: 55px;
  border-radius: 5px;
  border: 1.5px solid lightgray;
`;

const Buttonspace = styled.div`
  margin: 10px 0 0 570px;
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

const CommentWrapper = styled.div`
  padding: 35px 0px;
  border-bottom: 1px solid lightgray;
`;

const CommentLists = styled.div`
  margin-top: 50px;
  width: 100%;
`;
