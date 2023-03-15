import { Card } from 'react-bootstrap';
import './Resistor.css';
import { BandsData, BandsNumNav } from '../Context/MainContext';
import { useContext, useEffect, useState } from 'react';

export default function Resistor() {
    const { numBands, setNumBands } = useContext(BandsNumNav);
    const [output, setOutput] = useState("");
    const { bands, setBands } = useContext(BandsData);
    useEffect(() => {
        const calcResistance = () => {
            if (bands.band1.value === null ||
                bands.band2.value === null ||
                bands.band3.value === null) return;
            const [multiplier, unit] = bands.band3.value.split(' ');
            const mult = parseFloat(multiplier.substring(1));
            const band1 = (bands.band1.value);
            const band2 = (bands.band2.value);
            const band3 = bands.band5.value;
            const tolerance = bands.band4.value ? bands.band4.value : "± 20%";
            const band6 = bands.band6.value;
            let text = `${parseInt(band1 + band2) * mult} ${unit} ${tolerance}`
            if (numBands === 5 &&
                band3 !== null) {

                text = `${parseInt(band1 + band2 + band3) * mult} ${unit} ${tolerance}`;
            } else if (numBands === 6 &&
                       band3 !== null &&
                       band6 !== null) {

                text = `${parseInt(band1 + band2 + band3) * mult} ${unit} ${tolerance} ${band6}`;
            }
            return text;
        }
        setOutput(calcResistance());
    }, [bands, numBands]);
    return (
        <>
            <Card.Body className='d-flex flex-column justify-content-evenly align-items-center resistor-wrapper'>
                <div className='d-flex flex-row justify-content-center align-items-center w-100'>
                    <div className='resistor-w-l'></div>
                    <div className='d-flex flex-row justify-content-center resistor-p-l'>
                        <div className='band band-r-1'></div>
                    </div>
                    <div className='position-relative d-flex flex-row justify-content-between resistor-p-c'>
                        <div className='position-absolute band band-r-2' style={{ top: 0, left: '10%' }}></div>
                        {
                            (numBands === 5 || numBands === 6) ? (
                                <div className='position-absolute band band-r-5' style={{ top: 0, left: '25%' }}></div>
                            ) :
                                ""
                        }
                        <div className='position-absolute band band-r-3' style={{ top: 0, left: '50%' }}></div>
                        {
                            (numBands === 6) ? (
                                <div className='position-absolute band band-r-6' style={{ top: 0, left: '80%' }}></div>
                            ) :
                                ""
                        }

                    </div>
                    <div className='d-flex flex-row justify-content-center resistor-p-r'>
                        <div className='band band-r-4'></div>
                    </div>
                    <div className='resistor-w-r'></div>

                </div>
                <p>{output}</p>
            </Card.Body>

        </>
    )
}