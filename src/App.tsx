import React from 'react';
import HeaderApp from './components/header';

const App: React.FC = () => {
  return (
    <div className="App">
      <HeaderApp username={'Natalia Test'} isVisible={true} />
      hi
    </div>
  );
}

export default App;
