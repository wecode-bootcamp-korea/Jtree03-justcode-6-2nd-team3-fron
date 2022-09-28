import styled from 'styled-components';

export default function ListLoading() {
  const arr = [1143,1234123421,24353,45674,1546755,66879,7698,34568,989,136750];

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