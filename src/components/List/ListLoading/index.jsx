import styled from 'styled-components';

function ListLoading() {
  const arr = [1,2,3,4,5,6,7,8,9,10];

  return (
    <>
      {arr.map((el) => {
        return (
          <Box key={el}>
            <Left />
            <div>
              <First />
              <Second />
              <Third />
            </div>
          </Box>
        );
      })}
    </>
  );
}

const Box = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 112px;
  border-bottom: 1px solid #e5e7eb;
  padding: 16px 10px;
`;

const Left = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 30px;
  background: lightgray;
`;

const First = styled.div`
  width: 730px;
  height: 25px;
  border-radius: 7px;
  margin-bottom: 15px;
  background: lightgray;
`;

const Second = styled.div`
  width: 730px;
  height: 12px;
  border-radius: 7px;
  margin-bottom: 15px;
  background: lightgray;
`;

const Third = styled.div`
  width: 500px;
  height: 12px;
  border-radius: 7px;
  background: lightgray;
`;

export default ListLoading;
