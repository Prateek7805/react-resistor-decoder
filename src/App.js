import { useState } from 'react';
import Navbaar from './components/Navbar/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Content from './components/content/Content';

function App() {

  const [navHeight, setNavHeight] = useState(20);
  return (
    <div className="App">
      <Navbaar dimension={[navHeight, setNavHeight]} />
      <Content height={navHeight}/>
    </div>
  );
}

export default App;
