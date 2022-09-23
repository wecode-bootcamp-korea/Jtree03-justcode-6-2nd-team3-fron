import { useEffect, useState } from 'react';
import styled from 'styled-components';

import deleteTag from '../../../../../image/settings/x.png';

function Tags(props) {
  const { tags } = props;

  const [newA, setNewA] = useState([]);
  useEffect(()=>{
    for(let i in tags){
      setNewA([])
      let arr = [...newA]
      arr.push(tags[i].tag_name)
      setNewA(arr);
    };
  }, [])
  
  const [btn, setBtn] = useState(false);


  return (
    <Tag>
      <h3>관심있는 기술 태그 입력</h3>
      <Span>사용 중인 기술이나 관심있는 기술 태그를 선택해주세요.</Span>
      <TagListTitle>
        <ListName>선택한 기술 목록: </ListName>
        <TagList>
          {newA.map(el => (
            <SkillTag>{el}</SkillTag>
          ))}
        </TagList>
        {newA.length ? <DeleteTag onClick={() => setNewA([])} /> : null}
      </TagListTitle>

      <Box>
        <TagInput
          placeholder="스킬 태그를 선택해주세요."
          onClick={() => setBtn(true)}
        />
        <TagBtn onClick={() => setBtn(!btn)}>
          <TabBtnImg />
        </TagBtn>
        {/* {btn ? (
          tags.length ? (
            <SkillList>
              <ul>
                {tags.map(el => (
                  <li
                    onClick={() => {
                      let arr = [...newA];
                      arr.push(el);
                      setNewA(arr);
                      setBtn(false);
                    }}
                    key={el}
                  >
                    {el}
                  </li>
                ))}
              </ul>
            </SkillList>
          ) : (
            <Skill>검색 된 태그가 없습니다.</Skill>
          )
        ) : (
          <></>
        )} */}
      </Box>
    </Tag>
  );
}

const Tag = styled.div`
  width: 511px;
  font-size: 14px;
  color: #374151;

  h3 {
    font-size: 14px;
    padding-bottom: 10px;
  }
`;

const Span = styled.span`
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 3px;
`;

const TagListTitle = styled.div`
  display: flex;
  width: 100%;
  margin-top: 25px;
  height: 30px;
`;

const ListName = styled.div`
  width: 105px;
`;

const TagList = styled.div`
  width: calc(100% - 105px);
`;

const SkillTag = styled.span`
  color: rgba(0, 144, 249, 1);
  margin-right: 8px;
`;

const DeleteTag = styled.span`
  width: 13px;
  height: 13px;
  background: url(${deleteTag}) center center no-repeat;
  background-size: cover;
`;

const Box = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 42px;
  border-radius: 5px;
  margin-top: 10px;
  border: 1px solid #d9d9d9;
`;

const TagInput = styled.input`
  display: block;
  width: calc(100% - 42px);
  height: 24px;
  padding-left: 10px;
  border: none;

  &:focus {
    outline: none;
  }
`;

const TagBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 25px;
  border: none;
  padding: 0;
  border-left: 1px solid #d9d9d9;
  background-color: #ffffff;
  cursor: pointer;
`;

const TabBtnImg = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url('https://cdn-icons-png.flaticon.com/512/2985/2985150.png')
    center center no-repeat;
  background-size: cover;
`;

const Skill = styled.div`
  z-index: 100;
  position: absolute;
  top: 50px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 60px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  box-shadow: 0px 3px 5px #dcdcdc;
  color: #374151;
  font-size: 13px;
  text-align: center;
  background: #ffffff;
`;

const SkillList = styled(Skill)`

  ul {
    overflow: hidden;
    overflow-y: auto;
    width: 100%;
    max-height: 168px;
    margin: 5px 0;

    li {
      display: block;
      display: flex;
      align-items: center;
      padding-left: 15px;
      height: 42px;
      font-size: 15px;
      color: #355555;

      &:hover {
        background: rgba(0, 144, 249, 0.2);
      }
    }
  }
`;

export default Tags;
