import React, {Provider} from 'react';
import './App.css';
import LoginPage from "./pages/LoginPage/LogInPage";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      {/*<LoginPage />*/}
      <MainPage />
    </div>
  );
}

export default App;
