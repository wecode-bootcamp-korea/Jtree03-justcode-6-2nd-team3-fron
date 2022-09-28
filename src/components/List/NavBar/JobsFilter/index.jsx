import { useRef } from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import close from '../../../../image/list/close.png';

export default function JobsFilter(props) {
  const { view, setView, setSearchFilter, setSortId } = props;
  const [filter, setFilter] = useState([
    {
      name: '계약형태',
      en: 'contract_type',
      view: false,
    },
    {
      name: '포지션',
      en: 'position',
      view: false,
    },
    {
      name: '경력',
      en: 'career',
      view: false,
    },
    {
      name: '지역',
      en: 'region',
      view: false,
    },
  ]);

  const [secondFilter, setSecondFilter] = useState([]);
  const [thirdFilter, setThirdFilter] = useState([]);

  useEffect(() => {
    if (filter[0].view) {
      let arr = [
        {
          name: '정규직',
          view: false,
        },
        {
          name: '계약직',
          view: false,
        },
      ];
      setSecondFilter(arr);
    } else if (filter[1].view) {
      let arr = [
        {
          name: '개발',
          view: false,
        },
        {
          name: '기획',
          view: false,
        },
        {
          name: '기타',
          view: false,
        },
      ];
      setSecondFilter(arr);
    } else if (filter[2].view) {
      let arr = [
        {
          name: '신입',
          view: false,
        },
        {
          name: '1년 이상',
          view: false,
        },
        {
          name: '5년 이상',
          view: false,
        },
      ];
      setSecondFilter(arr);
    } else if (filter[3].view) {
      let arr = [
        {
          name: '서울',
          view: false,
        },
        {
          name: '경기',
          view: false,
        },
        {
          name: '기타',
          view: false,
        },
      ];
      setSecondFilter(arr);
    }
  }, [filter]);

  useEffect(() => {
    if (filter[1].view) {
      if (secondFilter[0].view) {
        let arr = [
          {
            name: '프론트엔드 개발',
            view: false,
          },
          {
            name: '백엔드 개발',
            view: false,
          },
          {
            name: '풀스택 개발',
            view: false,
          },
        ];
        setThirdFilter(arr);
      } else if (secondFilter[1].view) {
        let arr = [
          {
            name: '전략기획',
            view: false,
          },
          {
            name: '서비스기획',
            view: false,
          },
        ];
        setThirdFilter(arr);
      } else if (secondFilter[2].view) {
        let arr = [
          {
            name: 'MD',
            view: false,
          },
          {
            name: '기타',
            view: false,
          },
        ];
        setThirdFilter(arr);
      }
    }
  }, [secondFilter]);

  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const ref = useRef();

  useEffect(() => {
    const clickOutside = (e) => {
      // 모달이 열려 있고 모달의 바깥쪽을 눌렀을 때 창 닫기
      if (view && ref.current && !ref.current.contains(e.target)) {
        setView(false);
      }
    };

    document.addEventListener("mousedown", clickOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [view]);

  return (
    <Div ref={ref}>
      <Left>
        <div>
          검색조건
          {filter.map(filterName => {
            return (
              <Button
                key={filterName.name}
                onClick={() => {
                  for (let i in filter) {
                    let arr = [...filter];
                    arr[i].view = false;
                    setFilter(arr);
                  }
                  filterName.view = true;
                  setFirst(filterName.en);
                }}
                filterName={filterName}
              >
                {filterName.name}
              </Button>
            );
          })}
        </div>
      </Left>
      <Right>
        <RightTitle>
          검색필터 설정
          <RightFilter>
            <span>
              {secondFilter.map(el => {
                return (
                  <button
                    key={el.name}
                    onClick={() => {
                      for (let i in secondFilter) {
                        let arr = [...secondFilter];
                        arr[i].view = false;
                        setSecondFilter(arr);
                      }
                      el.view = true;
                      setSecond(el.name);
                    }}
                    style={{
                      background: el.view ? 'rgba(0,144,249,.5)' : '#fff',
                    }}
                  >
                    {el.name}
                  </button>
                );
              })}
            </span>
            <span>
              {filter[1].view &&
                thirdFilter.map(el => {
                  return (
                    <button
                      key={el.name}
                      onClick={() => {
                        for (let i in thirdFilter) {
                          let arr = [...thirdFilter];
                          arr[i].view = false;
                          setThirdFilter(arr);
                        }
                        el.view = true;
                        setSecond(el.name);
                      }}
                      style={{
                        background: el.view ? 'rgba(0,144,249,.5)' : '#fff',
                      }}
                    >
                      {el.name}
                    </button>
                  );
                })}
            </span>
            <Reset onClick={()=>{
              
            }}>선택 초기화</Reset>
            <Search onClick={()=>{
              setSortId(first);
              setSearchFilter(second);
              setView(false)
            }}>검색</Search>
          </RightFilter>
        </RightTitle>
        <Exit close={close} onClick={() => setView(false)} />
      </Right>
    </Div>
  );
}

const Div = styled.div`
  z-index: 100;
  position: absolute;
  top: 50px;
  right: 0;
  display: flex;
  justify-content: space-between;
  width: 840px;
  height: 332px;
  border: 1px solid #e5e7eb;
  border-radius: 5px;
  box-shadow: 0px 3px 10px #d9d9d9;
  background: #ffffff;
  cursor: default;
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;

  div {
    width: 155px;
    height: 252px;
    font-size: 14px;
    color: #6b7280;
  }
`;

const Button = styled.button`
  display: block;
  width: 100%;
  height: 32px;
  margin-top: 25px;
  padding: 6px 8px;
  border: none;
  border-radius: 5px;
  color: #374151;
  cursor: pointer;
  background-color: ${props => (props.filterName.view ? '#F3F4F6' : '#FFFFFF')};

  &:hover {
    background: #f3f4f6;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background: #f3f4f6;
`;

const RightTitle = styled.div`
  position: relative;
  width: 400px;
  height: 252px;
  font-size: 14px;
  color: #6b7280;
`;

const RightFilter = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 180px;
  margin-top: 15px;

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 180px;
    height: 100%;
    border: 1px solid #949494;
    border-radius: 10px;
    padding: 6px 12px;
    background: #ffffff;

    &:focus {
      border: 1px solid #374151;
      background: red;
    }

    button {
      display: block;
      /* width: 80px; */
      margin: 5px 0;
      background: #fff;
      /* border: 1px solid #949494; */
      border: none;
      color: #6b7280;
      cursor: pointer;
    }
  }
`;

const Exit = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  display: inline-block;
  width: 16px;
  height: 16px;
  background: url(${props => props.close}) center center no-repeat;
  background-size: cover;
  cursor: pointer;
  border: none;
`;

const Reset = styled.button`
  position: absolute;
  bottom: -60px;
  right: 150px;
  height: 38px;
  border: none;
  font-size: 14px;
  color: #9ca3af;
  background: none;
  cursor: pointer;
`;

const Search = styled.button`
  position: absolute;
  bottom: -60px;
  right: 0;
  width: 122px;
  height: 38px;
  border: none;
  border-radius: 10px;
  color: #fff;
  background: #0190f9;
  cursor: pointer;

  &:hover {
    background: #0070c0;
  }
`;
