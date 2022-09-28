import styled from 'styled-components';

export default function ListHeader(props) {
  const { title } = props;

  return (
    <HeaderImg>
      <Title>{title}</Title>
    </HeaderImg>
  );
}

const HeaderImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  border-radius: 18px;
`;

const Title = styled.span`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
`;
