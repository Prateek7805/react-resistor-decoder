import {useState} from 'react';
import Navbaar from './components/Navbar/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css';
function App() {

    const [navHeight, setNavHeight] = useState(20);
  return (
    <div className="App">
      <Navbaar dimension={[navHeight, setNavHeight]}/>
      <div className='container-fluid content' style={{top: navHeight}}>
        <p>helloasjgbaisdkjasbdjh</p>
      </div>
    </div>
  );
}

export default App;
