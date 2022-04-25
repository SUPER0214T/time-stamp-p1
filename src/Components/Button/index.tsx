import React from 'react';
import styled from 'styled-components';

interface ConatinerProps {
  backgrouncColor: string;
}

interface Props {
  backgrouncColor: string;
  text: string;
  onClick: () => void;
}

const Container = styled.button<ConatinerProps>`
  min-width: 100px;
  padding: 10px;
  background-color: ${(props) => props.backgrouncColor};
  outline: none;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

function Button({
  backgrouncColor = '#db1010',
  text = '시작',
  onClick,
}: Props) {
  return (
    <Container onClick={onClick} backgrouncColor={backgrouncColor}>
      {text}
    </Container>
  );
}

export default Button;
