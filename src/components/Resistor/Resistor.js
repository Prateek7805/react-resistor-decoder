import { Card } from 'react-bootstrap';
import './Resistor.css';
export default function Resistor(){
    return (
        <Card.Body className='d-flex flex-row justify-content-center align-items-center resistor-wrapper'>
            <div className='resistor-w-l'></div>
            <div className='resistor-p-l'></div>
            <div className='resistor-p-c'></div>
            <div className='resistor-p-r'></div>
            <div className='resistor-w-r'></div>
        </Card.Body>
    )
}