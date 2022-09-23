import styled from 'styled-components';
import Nbutton from './component/Nbutton';

export default function Content(props) {
  const { data } = props;
  return (
    <Body>
      <h2>{data.title}</h2>
      <Contentbody>{data.content}</Contentbody>
      <Footer>
        <InlineDiv>
          {data.tag &&
            data.tag.map(f => {
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
