import styled from 'styled-components';
//import { useParams } from 'react-router-dom';
// let { params } = useParams();
// params =

export default function Topbar(props) {
  const { data } = props;
  return (
    <Body>
      <Publishinfor>
        <Profilebutton1>
          <ProfileImg src={data.profileurl} />
        </Profilebutton1>
        <Writeinfor>
          <Profilebutton2>{data.nickname}</Profilebutton2>
          <div>
            <Viewimg src="https://cdn-icons-png.flaticon.com/512/2214/2214024.png" />
            <Small>{data.recommend}</Small>
            <Small>·</Small>
            <Small>약 16시간 전</Small>
            <Small>·</Small>
            <Viewimg src="https://cdn-icons-png.flaticon.com/512/2874/2874780.png" />
            <Small>{data.view}</Small>
          </div>
        </Writeinfor>
      </Publishinfor>
      <div>
        <Iconbutton>
          <Iconimg src="https://cdn-icons-png.flaticon.com/512/3097/3097412.png" />
        </Iconbutton>
        <Iconbutton>
          <Iconimg src="https://cdn-icons-png.flaticon.com/512/3031/3031121.png" />
        </Iconbutton>
      </div>
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Bttonstyle = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Publishinfor = styled.div`
  display: flex;
`;
const Viewimg = styled.img`
  width: 12px;
  height: 12px;
`;

const Iconimg = styled.img`
  width: 18px;
  height: 18px;
  opacity: 55%;
`;

const Small = styled.span`
  font-size: 12px;
  color: gray;
  margin: 0 2px;
`;

const Profilebutton1 = styled(Bttonstyle)`
  width: 50px;
  margin-right: 5px;
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
`;

const Profilebutton2 = styled(Bttonstyle)`
  text-align: left;
`;

const Writeinfor = styled.div`
  display: flex;
  flex-direction: column;
`;

const Iconbutton = styled(Bttonstyle)`
  width: 30px;
  height: 100%;
  margin: 0 5px;
`;
