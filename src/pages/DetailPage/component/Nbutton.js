import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Nbutton(props) {
  // const [like, setLike] = useState(score); // 서버에서 받아오는 데이터 반영
  const [leftClick, setLeftClick] = useState(false); //해당하는 boolean data도 서버에서 관리한다? 유저 => 해당댓글
  const [rightClick, setRightClick] = useState(false); //마찬가지?
  const [recommendData, setRecommendData] = useState([]);
  const [commentScore, setCommentScore] = useState([]);
  const [commentincommentScore, setcommentincommentScore] = useState([]);
  const { name, commentId, commentincommentid } = props;
  const params = useParams();
  const pageId = params.id;

  const server = 'localhost:8000/recommend';
  const comment = 'table_type=comment';
  const post = 'table_type=post';

  const token = localStorage.getItem('login-token');

  useEffect(() => {
    axios.get(`http://${server}/${pageId}?${post}`).then(function (res) {
      setRecommendData(res.data[0].recommend_count);
    });
  }, []); //게시글의 점수

  useEffect(() => {
    axios.get(`http://${server}/${commentId}?${comment}`).then(function (res) {
      setCommentScore(res.data[0].recommend_count);
    });
  }, []); //댓글의 점수

  useEffect(() => {
    axios
      .get(`http://${server}/${commentincommentid}?${comment}`)
      .then(function (res) {
        setcommentincommentScore(res.data[0].recommend_count);
      });
  }, []); //대댓글의 점수

  let score;
  let type;
  let uniqueId;

  if (name === '게시글') {
    score = recommendData;
    type = post;
    uniqueId = pageId;
  } else if (name === '댓글') {
    score = commentScore && commentScore;
    type = comment;
    uniqueId = commentId;
  } else if (name === '대댓글') {
    score = commentincommentScore;
    type = comment;
    uniqueId = commentincommentid;
  }

  function clickDown() {
    leftClick
      ? axios
          .delete(`http://${server}/${uniqueId}?${comment}&recommend_type=2`, {
            headers: { authorization: token },
          })
          .then(function (res) {
            if (name === '댓글') {
              setCommentScore(res.data.recommendCount[0].recommend_count);
            } else if (name === '대댓글') {
              setcommentincommentScore(
                res.data.recommendCount[0].recommend_count
              );
            } else if (name === '게시글') {
              setRecommendData(res.data.recommendCount[0].recommend_count);
            }
          })
      : axios
          .post(
            `http://${server}/${uniqueId}?${comment}&recommend_type=2`,
            {},
            { headers: { authorization: token } }
          )
          .then(function (res) {
            if (name === '댓글') {
              setCommentScore(res.data.recommendCount[0].recommend_count);
            } else if (name === '대댓글') {
              setcommentincommentScore(
                res.data.recommendCount[0].recommend_count
              );
            } else if (name === '게시글') {
              setRecommendData(res.data.recommendCount[0].recommend_count);
            }
          });
    setLeftClick(f => !f);
  }

  function clickUp() {
    rightClick
      ? axios
          .delete(`http://${server}/${uniqueId}?${type}&recommend_type=1`, {
            headers: { authorization: token },
          })
          .then(function (res) {
            if (name === '게시글') {
              setRecommendData(res.data.recommendCount[0].recommend_count);
            } else if (name === '댓글') {
              setCommentScore(res.data.recommendCount[0].recommend_count);
            } else if (name === '대댓글') {
              setcommentincommentScore(
                res.data.recommendCount[0].recommend_count
              );
            }
          })
      : axios
          .post(
            `http://${server}/${uniqueId}?${type}&recommend_type=1`,
            {},
            {
              headers: { authorization: token },
            }
          )
          .then(function (res) {
            if (name === '게시글') {
              setRecommendData(res.data.recommendCount[0].recommend_count);
            } else if (name === '댓글') {
              setCommentScore(res.data.recommendCount[0].recommend_count);
            } else if (name === '대댓글') {
              setcommentincommentScore(
                res.data.recommendCount[0].recommend_count
              );
            }
          });
    setRightClick(f => !f);
  }

  return (
    <Reaction>
      <NbttonLeft onClick={clickDown} disabled={rightClick && true}>
        {leftClick ? (
          <Likeimg src="https://i.esdrop.com/d/f/NlKPuBbCgn/ylxHgr9SRT.png" />
        ) : (
          <Likeimg src="https://i.esdrop.com/d/f/NlKPuBbCgn/E76ZUUcq0j.png" />
        )}
      </NbttonLeft>
      <View>{score}</View>
      <NbttonRight onClick={clickUp} disabled={leftClick && true}>
        {rightClick ? (
          <Likeimg src="https://i.esdrop.com/d/f/NlKPuBbCgn/Gduesjldbw.png" />
        ) : (
          <Likeimg src="https://i.esdrop.com/d/f/NlKPuBbCgn/W1nNMDCmwA.png" />
        )}
      </NbttonRight>
    </Reaction>
  );
}

const Reaction = styled.div`
  margin-top: 10px;
  height: 30px;
  display: flex;
  flex-direction: row;
`;

const Bttonstyle = styled.button`
  background-color: transparent;
  border: none;
`;

const NbttonLeft = styled(Bttonstyle)`
  height: 100%;
  width: 24px;
  border: 1px solid lightgray;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  cursor: pointer;
  &:hover {
    border: 1px solid black;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;

const NbttonRight = styled(Bttonstyle)`
  height: 100%;
  width: 24px;
  border: 1px solid lightgray;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
  &:hover {
    border: 1px solid black;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const View = styled.span`
  font-size: 12px;
  padding: 7px 15px 3px 15px;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
`;

const Likeimg = styled.img`
  width: 9px;
  height: 9px;
  opacity: 50%;
`;
