import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import DarkMode from './components/DarkMode';
import { render, fireEvent } from '@testing-library/react';

//SYNTAX EXAMPLE
// test("renders greeting on Greeting component", async () => {
//   Arrange
//   Act
//   Assert
// });



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("toggle is clicked", () => {
  const { getByTestId } = render(<DarkMode />);
  const toggleBtn = getByTestId("toggle-btn");
  fireEvent.click(toggleBtn);
});
