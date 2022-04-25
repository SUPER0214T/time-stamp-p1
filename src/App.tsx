import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Button from './Components/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonGroup = styled.div``;

const TimeStampList = styled.div``;

const TimeStampItem = styled.div<{ index: number }>`
  background-color: ${(props) => {
    return props.index % 2 === 0
      ? 'rgba(255, 0, 0, 0.6)'
      : 'rgba(0, 0, 255, 0.6)';
  }};
  padding: 10px;
  display: block;
  margin: 5px;
  border-radius: 8px;
  color: white;
`;

function App() {
  const [timeList, setTimeList] = useState<string[]>([]);
  const [isStart, setIsStart] = useState(true);

  const onClick = () => {
    setIsStart((prev) => !prev);
    const currentTime = new Date().toTimeString().substring(0, 8);
    setTimeList((prev) => [...prev, currentTime]);
  };

  return (
    <Container>
      <ButtonGroup>
        {isStart ? (
          <Button onClick={onClick} backgrouncColor="#db1010" text="시작" />
        ) : (
          <Button onClick={onClick} backgrouncColor="#1143e9" text="끝" />
        )}
      </ButtonGroup>
      <TimeStampList>
        {timeList.map((el, index) => (
          <TimeStampItem index={index}>{el}</TimeStampItem>
        ))}
      </TimeStampList>
    </Container>
  );
}

export default App;
