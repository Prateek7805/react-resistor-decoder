import './Content.css'
import { Card } from 'react-bootstrap';
import BandSelector from '../BandSelector/BandSelector';
import Resistor from '../Resistor/Resistor';
import { useContext, useEffect, useState } from 'react';
import { BandsNumNav } from '../Context/MainContext';

export default function Content({ height }) {
  const [cardHeight, setCardHeight] = useState(20);
  const {numBands, setNumBands} = useContext(BandsNumNav);
  
  useEffect(() => {
    const getCardHeight = () => {
      const height = document.getElementById('ID_BAND_SELECTOR').offsetHeight;
      setCardHeight(height);
    }
    getCardHeight();
    window.addEventListener('resize', getCardHeight);
    return () => { window.removeEventListener('resize', getCardHeight) };
  }, [numBands]);

  return (
    <div className='container-fluid content p-3' style={{ top: height }}>
      <div className='d-flex flex-column flex-md-row'>
        <div className='d-flex flex-column col-12 col-md-6 align-items-md-start'>
          <Card className="panel" id="ID_BAND_SELECTOR">
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <BandSelector/>
            </Card.Body>
          </Card>
        </div>
        <div className='d-flex flex-column col-12 col-md-6 mt-md-0 mt-3 align-items-md-end'>
          <Card className="panel" style={{ height: cardHeight }}>
            <Resistor />
          </Card>
        </div>
      </div>
    </div>
  )
}