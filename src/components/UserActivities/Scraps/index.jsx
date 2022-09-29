import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Scraps(props) {
  const { create_at, title, sub_category_name, unique_id } = props.scraps;
  return (
    <List>
      <Top>
        <div>
          <LinkTag to={''}>{sub_category_name}</LinkTag>의 질문을
          스크랩하였습니다.
        </div>
        <div>{create_at}</div>
      </Top>
      <Bottom>
        <Title to={''}>{title}</Title>
      </Bottom>
    </List>
  );
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
`;

const LinkTag = styled(Link)`
  padding: 6px 12px;
  text-decoration: none;
  border: 1px solid #bababa96;
  border-radius: 30px;
  color: #0090f9;
  font-size: 12px;
  margin-right: 5px;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  margin-top: 8px;
`;

const Title = styled(Link)`
  color: #111827;
  font-size: 16px;
  text-decoration: none;
`;
