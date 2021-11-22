import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/*window.CalcWidget = {
  mount: (props, container) => {
    ReactDOM.render(<App {...props} />, container,
      document.getElementById('root'));

  },
  unmount: (container) => {
    ReactDOM.unmountComponentAtNode(container);
  }
}

window.CalcWidget.mount()*/


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
