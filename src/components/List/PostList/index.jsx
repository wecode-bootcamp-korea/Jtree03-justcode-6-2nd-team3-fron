import { Link } from 'react-router-dom';
import styled from 'styled-components';

import thunder from '../../../image/list/thunder.png';
import checkbox from '../../../image/list/checkbox.png';
import bluecheckbox from '../../../image/list/bluecheckbox.png';
import view from '../../../image/list/view.png';
import comment from '../../../image/list/comment.png';
import arrow from '../../../image/list/arrow.png';

function PostList(props) {
  const {
    content_id,
    user_img,
    user_id,
    rate,
    date,
    content,
    check,
    category,
    tag,
    read_count,
    comments,
    like,
  } = props.list;

  const info = [
    { url: view, num: read_count },
    { url: comment, num: comments },
    { url: arrow, num: like },
  ];

  return (
    <Box>
      <Top>
        <TopLeft>
          <Img to={''} user_img={user_img} />
          <UserId to={''}>{user_id}</UserId>
          <Etc>
            <Point>·</Point>
            <Thunder />
            <span>{rate}</span>
            <Point>·</Point>
            {date}
          </Etc>
        </TopLeft>
        {check ? <BlueCheck /> : <Check />}
      </Top>
      <Middle>
        <Content to={''}>{content}</Content>
      </Middle>
      <Bottom>
        <span>
          <Tag>{tag}</Tag>
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
  background: url(${props => props.user_img}) center center no-repeat;
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
`;

const Etc = styled.span`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #686868;
`;

const Check = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url(${checkbox}) center center no-repeat;
  background-size: cover;
`;

const BlueCheck = styled(Check)`
  background: url(${bluecheckbox}) center center no-repeat;
  background-size: cover;
`;

const Point = styled.span`
  margin: 0 2px;
`;

const Thunder = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  background: url(${thunder}) center center no-repeat;
  background-size: cover;
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
  color: #374151;
  text-decoration: none;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  height: 20px;
`;

const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 2px 10px;
  background: #f0f6fa;
  font-size: 12px;
  color: #0090f9;
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
  margin: 0 3px 0 9px;
  background: url(${props => props.infoUrl}) center center no-repeat;
  background-size: cover;

    &:nth-child(2) {
      width: 15px;
      height: 15px;
    }
`;

export default PostList;
