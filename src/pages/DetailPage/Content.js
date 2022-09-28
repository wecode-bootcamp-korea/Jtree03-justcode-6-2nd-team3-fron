import styled from 'styled-components';
import Nbutton from './component/Nbutton';

export default function Content(props) {
  //postData && console.log(postData);
  const { postData } = props;

  return (
    <Body>
      <h2>{postData.title}</h2>
      {postData.sub_category_name === '구인' && (
        <div>
          <div>
            <span>근무시작일 없음</span>
            <span>급여{postData.pay}</span>
            <span>근무지역{postData.region}</span>
          </div>
          <div>
            <span>포지션{postData.position}</span>
            <span>계약형태{postData.contract_type}</span>
            <span>필요경력{postData.career}</span>
            <span>학력사항 없음</span>
            <span>근무방식 없음</span>
            <span>급여지급일 없음</span>
            <span>필수스킬 없음</span>
          </div>
          <div>
            <span>{postData.manager_name}</span>
            <span>{postData.manager_tel}</span>
            <span>{postData.manager_email}</span>
          </div>
          <div>프로젝트 소개</div>
        </div>
      )}
      <Contentbody>{postData.content}</Contentbody>
      <Footer>
        <InlineDiv>
          {postData.tag &&
            postData.tag.map(f => {
              return <Tag>#{[f]}</Tag>;
            })}
        </InlineDiv>
        <Nbutton />
      </Footer>
      <BlankSpace />
      <Line />
    </Body>
  );
}

const Body = styled.div`
  padding-top: 30px;
`;

const Contentbody = styled.div`
  color: gray;
  margin-top: 30px;
  line-height: 1.5;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
  height: 28px;
`;

const InlineDiv = styled.div`
  display: flex;
`;

const Tag = styled.div`
  margin: 0 4px;
  padding: 5px 10px;
  border-radius: 10px;
  height: 75%;
  font-size: 6px;
  color: #374151;
  background-color: #f1f1f1;
`;

const BlankSpace = styled.div`
  height: 120px;
`;

const Line = styled.div`
  border-bottom: 0.5px solid rgb(229 231 235);
  width: 100%;
  height: 0px;
  margin-bottom: 20px;
`;
