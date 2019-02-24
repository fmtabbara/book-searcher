import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';

import './styles/styles.css';

const App = () => (
  <div id="app-wrapper">
    <h1>This is Book Finder</h1>
    <SearchBar />
  </div>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
