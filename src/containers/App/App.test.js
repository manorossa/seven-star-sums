import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StatusProvider } from './context/StatusContext';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <StatusProvider>
      <App />
    </StatusProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
