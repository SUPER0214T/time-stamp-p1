import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App /> 컴포넌트에는', () => {
  it('시작 버튼과 끝 버튼이 있다.', () => {
    render(<App />);
    const startButton = screen.getByText('시작');
    expect(startButton).toBeInTheDocument();
  });
});
