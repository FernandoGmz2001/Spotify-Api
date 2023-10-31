import './App.css';
import Login from './views/Login/Login';
import Home from './views/Home/Home';
import { useState } from 'react';

function App() {
  const [Token, setToken] = useState('');

  const handleTokenGenerated = (token) => {
    setToken(token);
  };

  return (
    <>
    {
      Token === ''? 
        (
          <Login onTokenGenerated={handleTokenGenerated} />
        ):
        (
          <Home token={Token}/>
        )

    }
      
    
    </>
  );
}

export default App;