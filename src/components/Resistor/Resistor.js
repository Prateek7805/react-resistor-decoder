import { Card } from 'react-bootstrap';
import './Resistor.css';
export default function Resistor() {
    return (
        <Card.Body className='d-flex flex-row justify-content-center align-items-center resistor-wrapper'>
            <div className='resistor-w-l'></div>
            <div className='d-flex flex-row justify-content-center resistor-p-l'>
                <div className='band'></div>
            </div>
            <div className='position-relative d-flex flex-row justify-content-between resistor-p-c'>
                <div className='position-absolute band' style={{ top: 0, left: '10%' }}></div>
                <div className='position-absolute band' style={{ top: 0, left: '25%' }}></div>
                <div className='position-absolute band' style={{ top: 0, left: '50%' }}></div>
                <div className='position-absolute band' style={{ top: 0, left: '80%' }}></div>
            </div>
            <div className='d-flex flex-row justify-content-center resistor-p-r'>
                <div className='band'></div>
            </div>
            <div className='resistor-w-r'></div>
        </Card.Body>
    )
}