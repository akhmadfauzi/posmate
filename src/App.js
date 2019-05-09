import React from 'react';
import './styles/app.scss';
import Sidebar from './containers/Sidebar';
import Main from './containers/Main';
import Navigation from './containers/Navigation';

function App() {
  return (
    <div className="app">
		<Navigation></Navigation>
		<Sidebar></Sidebar>
		<Main></Main>
    </div>
  );
}

export default App;
