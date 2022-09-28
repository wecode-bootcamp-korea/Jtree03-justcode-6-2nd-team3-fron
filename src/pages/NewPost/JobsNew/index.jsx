import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import PostStyle from '../../../components/NewPost/PostStyle';

function JobsNew() {
  const [styledContent, setContent] = useState('');
  const [positionValue, setPosition] = useState('');
  const [inputValue, setInput] = useState({});
  const getStyledContent = data => {
    setContent(data);
  };
  const getPosition = e => {
    setPosition(e.target.value);
  };
  const getInput = e => {
    setInput({ ...inputValue, [e.target.name]: e.target.value });
  };
  console.log('내용', styledContent);
  const formSubmit = e => {
    e.preventDefault();
    const data = [{ ...inputValue, content: styledContent }];
    axios
      .post('http://localhost:8000/posts', data, {
        headers: {
          authorization: localStorage.getItem('login-token'),
        },
      })
      .then(res => {
        alert('게시글 작성이 완료되었습니다.');
        Navigate(`/articles/${res.data.post_id}`);
      });
  };

  const selectList = [
    {
      title: '경력',
      name: 'career',
      options: [
        { value: '', name: '경력을 선택하세요.' },
        { value: '신입', name: '신입' },
        { value: '1년 이상', name: '1년 이상' },
        { value: '5년 이상', name: '5년 이상' },
      ],
    },
    {
      title: '지역',
      name: 'region',
      options: [
        { value: '', name: '지역을 선택해주세요.' },
        { value: '서울', name: '서울' },
        { value: '경기', name: '경기' },
        { value: '기타', name: '기타' },
      ],
    },
    {
      title: '급여',
      name: 'pay',
      options: [
        { value: '', name: '급여를 선택해주세요.' },
        { value: '200만원이상', name: '200만원이상' },
        { value: '300만원이상', name: '300만원이상' },
        { value: '400만원이상', name: '400만원이상' },
        { value: '500만원이상', name: '500만원이상' },
        { value: '600만원이상', name: '600만원이상' },
        { value: '협의', id: '6', name: '협의' },
      ],
    },
    {
      title: '계약 형태',
      name: 'contract_type',
      options: [
        { value: '', name: '계약형태를 선택해주세요.' },
        { value: '정규직', name: '정규직' },
        { value: '계약직', name: '계약직' },
      ],
    },
  ];
  const position = [
    { value: '', id: '', name: '포지션을 선택하세요.' },
    { value: '개발', id: 'developer', name: '개발' },
    { value: '기획', id: 'planner', name: '기획' },
    { value: '기타', id: 'etc', name: '기타' },
  ];
  const positionDetail = {
    '': [{ value: '', id: '', name: '포지션을 선택하세요.' }],
    developer: [
      { value: '프론트 개발', name: '프론트 개발' },
      { value: '백엔드 개발', name: '백엔드 개발' },
      { value: '풀스택 개발', name: '풀스택 개발' },
    ],
    planner: [
      { value: '전략기획', name: '전략기획' },
      { value: '서비스기획', name: '서비스기획' },
    ],
    etc: [
      { value: 'MD', name: 'MD' },
      { value: '기타', name: '기타' },
    ],
  };
  const inputList = [
    {
      name: 'manager_name',
      title: '이름',
      placeholder: '담당자명을 작성하세요.',
    },
    {
      name: 'manager_email',
      title: '이메일',
      placeholder: '담당자 이메일을 작성하세요.',
    },
    {
      name: 'manager_tel',
      title: '전화번호',
      placeholder: '-를 빼고 작성해주세요.',
    },
  ];
  return (
    <NewContainer>
      <Title>구인등록</Title>
      <SubTitle>OKIDOKI에서 소중한 인재를 채용하세요.</SubTitle>
      <form onSubmit={formSubmit}>
        <MarginT50>담당자 정보</MarginT50>
        <Flex>
          {inputList.map((data, idx) => {
            return (
              <div key={idx} className="width50">
                <Label>{data.title}</Label>
                <Input
                  type="text"
                  placeholder={data.placeholder}
                  onChange={getInput}
                  name={data.name}
                />
              </div>
            );
          })}
        </Flex>
        <MarginT50>구인 정보</MarginT50>
        <Flex>
          {selectList.map((data, idx) => {
            return (
              <div key={idx} className="width50">
                <Label>{data.title}</Label>
                <Select onChange={getInput} name={data.name}>
                  {data.options.map((data, idx) => {
                    return <option key={idx}>{data.name}</option>;
                  })}
                </Select>
              </div>
            );
          })}
        </Flex>
        <Label>포지션</Label>
        <Flex>
          <div className="width50">
            <Select onChange={getPosition}>
              {position.map((data, idx) => {
                return (
                  <option key={idx} value={data.id}>
                    {data.name}
                  </option>
                );
              })}
            </Select>
          </div>
          <div className="width50">
            <Select onChange={getInput} name="position">
              {positionDetail[positionValue].map((data, idx) => {
                return <option key={idx}>{data.name}</option>;
              })}
            </Select>
          </div>
        </Flex>

        <Label>상세정보</Label>
        <PostStyle getStyledContent={getStyledContent} />
        <ButtonArea>
          <Button type="reset">취소</Button>
          <BlueButton type="submit">등록</BlueButton>
        </ButtonArea>
      </form>
    </NewContainer>
  );
}
const MarginT50 = styled.h3`
  margin-top: 50px;
`;
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  .width50 {
    max-width: 50%;
    flex: 1 1 40%;
    :nth-child(even) {
      padding-left: 10px;
    }
    :nth-child(odd) {
      padding-right: 10px;
    }
  }
`;
const NewContainer = styled.div`
  width: 840px;
  padding: 30px 0;
  margin: 0 auto;
`;
const Title = styled.h1`
  margin-bottom: 20px;
`;
const SubTitle = styled.p`
  font-size: 14px;
  color: rgb(107 114 128);
  span {
    font-weight: 900;
  }
`;
const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;
const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;
const Label = styled.label`
  display: block;
  margin: 30px 0 10px;
`;
const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
`;
const Button = styled.button`
  padding: 10px 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background: none;
  &:hover {
    background: rgb(249 250 251);
  }
`;
const BlueButton = styled.button`
  margin-left: 10px;
  padding: 10px 30px;
  color: #fff;
  border: none;
  border-radius: 5px;
  background: rgb(0 144 249);
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;
export default JobsNew;
