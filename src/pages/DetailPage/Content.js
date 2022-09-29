import styled from 'styled-components';
import Nbutton from './component/Nbutton';

export default function Content(props) {
  const { postData } = props;

  function toHtml() {
    return { __html: postData.content };
  }

  const tags = postData.tags;

  return (
    <Body>
      <h2>{postData.title}</h2>
      {postData.sub_category_name === '구인' && (
        <div>
          <Importantinforwrapper>
            <Importantinfor>
              <Titlediv>급여</Titlediv>
              <Contentdiv>
                <Iconimg
                  src={
                    'https://cdn-icons-png.flaticon.com/512/3037/3037156.png'
                  }
                />
                <Textspan>{postData.pay}</Textspan>
              </Contentdiv>
            </Importantinfor>
            <Importantinfor>
              <Titlediv>근무지역</Titlediv>
              <Contentdiv>
                <Iconimg
                  src={
                    'https://cdn-icons-png.flaticon.com/512/2838/2838912.png'
                  }
                />
                <Textspan>{postData.region}</Textspan>
              </Contentdiv>
            </Importantinfor>
            <Importantinfor>
              <Titlediv>필요경력</Titlediv>
              <Contentdiv>
                <Iconimg
                  src={
                    'https://cdn-icons-png.flaticon.com/512/4582/4582074.png'
                  }
                />
                <Textspan>{postData.career}</Textspan>
              </Contentdiv>
            </Importantinfor>
          </Importantinforwrapper>
          <Importantinforwrapper>
            <Secondinfor>
              <Catego>포지션</Catego>
              <Valuediv>{postData.position}</Valuediv>
            </Secondinfor>
            <Secondinfor2>
              <Catego>계약형태</Catego>
              <Valuediv>{postData.contract_type}</Valuediv>
            </Secondinfor2>
          </Importantinforwrapper>
          <div>프로젝트 소개</div>
        </div>
      )}
      <Contentbody>
        <div dangerouslySetInnerHTML={toHtml()} />
      </Contentbody>
      <Footer>
        <InlineDiv>
          {tags &&
            tags.map((f, i) => {
              if (f.tag_id !== null) {
                return <Tag key={i}>#{[f.tag_name]}</Tag>;
              }
            })}
        </InlineDiv>
        <Nbutton name={'게시글'} />
      </Footer>
      <BlankSpace />
      <Line />
      {postData.sub_category_name === '구인' && (
        <Contentdiv>
          <Boldtext2>당담자</Boldtext2>
          <Employer>
            <Employerspan>
              <Iconimg2
                src={'https://cdn-icons-png.flaticon.com/512/3114/3114957.png'}
              />
              <Boldtext>{postData.manager_name}</Boldtext>
            </Employerspan>
            <Employerspan>
              {' '}
              <Iconimg2
                src={'https://cdn-icons-png.flaticon.com/512/159/159832.png'}
              />
              <Boldtext>{postData.manager_tel}</Boldtext>
            </Employerspan>
            <Employerspan>
              {' '}
              <Iconimg2
                src={'https://cdn-icons-png.flaticon.com/512/2089/2089181.png'}
              />
              <Boldtext>{postData.manager_email}</Boldtext>
            </Employerspan>
          </Employer>
        </Contentdiv>
      )}
    </Body>
  );
}
const Employer = styled.div`
  width: 100%;
  height: 50px;
  background-color: #f9fafb;
  margin-bottom: 40px;
  padding-top: 15px;
`;

const Employerspan = styled.span`
  margin: 20px;
`;

const Iconimg2 = styled.img`
  width: 16px;
  height: 15px;
  margin-right: 15px;
  opacity: 50%;
`;

const Boldtext = styled.span`
  font-size: 15px;
`;

const Boldtext2 = styled.div`
  padding-top: 15px;
  font-size: 15px;
  font-weight: 800;
  width: 12%;
`;

const Importantinforwrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
`;

const Importantinfor = styled.div`
  background-color: #f9fafb;
  height: 100px;
  width: 30%;
  margin-right: 3%;
  padding: 25px;
  display: flex;
  flex-direction: column;
`;

const Titlediv = styled.div`
  font-weight: bold;
  font-size: 15px;
`;

const Contentdiv = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
`;

const Textspan = styled.span`
  font-size: 13px;
`;

const Iconimg = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 10px;
  opacity: 60%;
`;

const Secondinfor = styled.div`
  width: 42%;
  border-bottom: 1px solid lightgray;
  padding-bottom: 10px;
  margin-right: 8%;
`;

const Secondinfor2 = styled.div`
  width: 46%;
  border-bottom: 1px solid lightgray;
  padding-bottom: 10px;
`;

const Catego = styled.span`
  font-size: 15px;
  margin-right: 30px;
`;

const Valuediv = styled.span`
  font-size: 15px;
  color: gray;
`;

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
  height: 85%;
  font-size: 12px;
  color: #374151;
  background-color: #f1f1f1;
`;

const BlankSpace = styled.div`
  height: 60px;
`;

const Line = styled.div`
  border-bottom: 0.5px solid rgb(229 231 235);
  width: 100%;
  height: 0px;
  margin-bottom: 20px;
`;
