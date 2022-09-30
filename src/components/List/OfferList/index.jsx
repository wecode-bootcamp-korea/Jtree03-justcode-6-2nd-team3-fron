import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import bluecheckbox from '../../../image/list/bluecheckbox.png';
import view from '../../../image/list/view.png';
import comment from '../../../image/list/comment.png';
import arrow from '../../../image/list/arrow.png';

export default function OfferList(props) {
  const { list } = props;

  const {
    unique_id,
    user_id,
    profile_image,
    nickname,
    title,
    views,
    comment_cnt,
    recommend_cnt,
  } = list;

  const info = [
    { url: view, num: views },
    { url: comment, num: comment_cnt },
    { url: arrow, num: recommend_cnt },
  ];

  return (
    <Box>
      <Top>
        <TopLeft>
          <Img to={`/users/${user_id}`} profile_image={profile_image} />
          <UserId to={`/users/${user_id}`}>{nickname}</UserId>
        </TopLeft>
      </Top>
      <Middle>
        <Content to={`/articles/${unique_id}`}>{title}</Content>
      </Middle>
      <Bottom>
        <span>
        </span>
        <Info>
          {info.map(info => {
            return (
              <Div key={info.url}>
                <InfoImg infoUrl={info.url} />
                {info.num}
              </Div>
            );
          })}
        </Info>
      </Bottom>
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  height: 112px;
  border-bottom: 1px solid #e5e7eb;
  padding: 16px 10px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  height: 20px;
`;

const TopLeft = styled.span`
  display: flex;
  justify-content: flex-start;
`;

const Img = styled(Link)`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: url(${props => props.profile_image}) center center no-repeat;
  background-size: cover;
`;

const UserId = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 14px;
  padding-left: 4px;
  color: #111827;
  text-decoration: none;

  &:hover {
    color: #374151;
  }
`;

const Middle = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  margin: 8px 0;
`;

const Content = styled(Link)`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  text-decoration: none;

  &:hover {
    color: #374151;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  height: 20px;

  span {
    display: flex;
    justify-content: space-between;
  }
`;

const Info = styled.span`
  display: flex;
  height: 100%;
  font-size: 14px;
  font-weight: 500;
  color: #6b7280;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const InfoImg = styled.span`
  display: inline-block;
  width: 18px;
  height: 18px;
  margin: 0 5px 0 8px;
  background: url(${props => props.infoUrl}) center center no-repeat;
  background-size: cover;
`;
