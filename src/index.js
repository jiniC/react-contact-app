import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// #root 돔을 가져와서 App 컴포넌트를 그리겠다.
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
