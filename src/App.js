import {useState} from 'react';
import Navbaar from './components/Navbar/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import {Card} from 'react-bootstrap';
function App() {

    const [navHeight, setNavHeight] = useState(20);
  return (
    <div className="App">
      <Navbaar dimension={[navHeight, setNavHeight]}/>
      <div className='container-fluid content py-2' style={{top: navHeight}}>
        <div className='d-flex flex-column flex-md-row'>
          <div className='d-flex flex-column col-12 col-md-6 align-items-start'>
            <Card style={{width: '98%', height: '100px'}}>

            </Card>
          </div>  
          <div className='d-flex flex-column col-12 col-md-6 align-items-end'>
          <Card style={{width: '98%', height: '100px'}}>

          </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
