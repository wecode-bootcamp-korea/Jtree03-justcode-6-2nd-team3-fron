import React from 'react';
import styled from 'styled-components';

export default function Form(props) {
  return (
    <Wrapper>
      <FormLayout>{props.children}</FormLayout>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
`;

const FormLayout = styled.div`
  margin: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
