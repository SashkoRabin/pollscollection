import SiteRouter from './utils/SiteRouter/SiteRouter';
import React, { useState } from 'react';
import { AuthContext } from './utils/context/AuthContext';

const App = () => {
  const [loginSign, setLoginSign] = useState('Не авторизировано');

  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          loginSign,
          setLoginSign,
        }}
      >
        <SiteRouter />
      </AuthContext.Provider>
    </div>
  );
};

export default App;
