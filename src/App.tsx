import React from 'react';





function App() {
  const openPaint = () => {
    const { exec } = window.require('child_process');
    exec('mspaint');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Electron React Paint</h1>
        <button onClick={openPaint}>Open Paint</button>
      </header>
    </div>
  );
}

export default App;