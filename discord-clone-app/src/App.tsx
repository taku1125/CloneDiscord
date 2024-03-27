import React from 'react';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Chat from './components/Chat/Chat'
function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      <div className="body">
        {/* Sidebar */}
        <Sidebar />
        {/* Chat */}
        <Chat />
      </div>
    </div>
  );
}

export default App;
