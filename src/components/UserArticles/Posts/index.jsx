import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Posts() {
  return (
    <List>
      <Top>
        <div>
          <LinkTag to={''}>리뷰</LinkTag>
          에 게시물을 작성하였습니다.
        </div>
        <div>2222-22-22</div>
      </Top>
      <Bottom>
        <Title to={''}>제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목</Title>
      </Bottom>
    </List>
  )
}

const List = styled.div`
  height: 102px;
  padding: 20px 0;
  border-top: 1px solid #e5e7eb;

  &:nth-child(1) {
    border: none;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
font-size: 14px;
color: #6b7280;
`

const LinkTag = styled(Link)`
  padding: 6px 12px;
  text-decoration: none;
  border: 1px solid #bababa96;
  border-radius: 40%;
  color: #0090f9;
  font-size: 12px;
  margin-right: 5px;
`

const Bottom = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  margin-top: 8px;
  `

const Title = styled(Link)`
color: #111827;
font-size: 16px;
  text-decoration: none;
`