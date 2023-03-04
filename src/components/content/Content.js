import './Content.css'
import { Card } from 'react-bootstrap';
import BandSelector from '../BandSelector/BandSelector';
import Resistor from '../Resistor/Resistor';

export default function Content({height}){
    return(
<div className='container-fluid content p-3' style={{ top: height }}>
        <div className='d-flex flex-column flex-md-row'>
          <div className='d-flex flex-column col-12 col-md-6 align-items-md-start'>
            <Card className="panel">
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <BandSelector />
            </Card.Body>
            </Card>
          </div>
          <div className='d-flex flex-column col-12 col-md-6 mt-md-0 mt-3 align-items-md-end'>
            <Card className="panel" >
                <Resistor />
            </Card>
          </div>
        </div>
      </div>
    )
}