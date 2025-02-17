import './App.css'
import Page from './layouts/page'
import Header from './layouts/Header'
import WeatherPanel from './layouts/WeatherPanel'
import { useEffect, useState } from 'react'
import Login from './layouts/Login'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const googleLogged = localStorage.getItem("googleLogged");
  
  useEffect(() => {
    if (googleLogged) {
      setIsLoggedIn(true);
    }
  }, [googleLogged]);

  return (
    <Page>
      {isLoggedIn ? (
        <>
          <Header />
          <WeatherPanel />
        </>
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </Page>
  )
}

export default App