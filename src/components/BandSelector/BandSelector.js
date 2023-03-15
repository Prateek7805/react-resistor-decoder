import './BandSelector.css';
import { useContext, useEffect } from 'react';
import { BandsData, BandsNumNav } from '../Context/MainContext';
export default function BandSelector() {
    
    const {bands, setBands} = useContext(BandsData);
    const {numBands, setNumBands} = useContext(BandsNumNav);

    const band1 = [
        {
            color: 'black',
            value: "0"
        },
        {
            color: 'brown',
            value: "1"
        },
        {
            color: 'red',
            value: "2"
        },
        {
            color: 'orange',
            value: "3"
        },
        {
            color: 'yellow',
            value: "4"
        },
        {
            color: 'green',
            value: "5"
        },
        {
            color: 'blue',
            value: "6"
        },
        {
            color: 'violet',
            value: "7"
        },
        {
            color: 'grey',
            value: "8"
        },
        {
            color: 'white',
            value: "9"
        }
    ];
    const band2 = [
        {
            color: 'black',
            value: "0"
        },
        {
            color: 'brown',
            value: "1"
        },
        {
            color: 'red',
            value: "2"
        },
        {
            color: 'orange',
            value: "3"
        },
        {
            color: 'yellow',
            value: "4"
        },
        {
            color: 'green',
            value: "5"
        },
        {
            color: 'blue',
            value: "6"
        },
        {
            color: 'violet',
            value: "7"
        },
        {
            color: 'grey',
            value: "8"
        },
        {
            color: 'white',
            value: "9"
        }
    ];
    const band3 = [
        {
            color: 'black',
            value: "x1 Ω"
        },
        {
            color: 'brown',
            value: "x10 Ω"
        },
        {
            color: 'red',
            value: "x100 Ω"
        },
        {
            color: 'orange',
            value: "x1 KΩ"
        },
        {
            color: 'yellow',
            value: "x10 KΩ"
        },
        {
            color: 'green',
            value: "x100 KΩ"
        },
        {
            color: 'blue',
            value: "x1 MΩ"
        },
        {
            color: 'violet',
            value: "x10 MΩ"
        },
        {
            color: 'grey',
            value: "x100 MΩ"
        },
        {
            color: 'white',
            value: "x1 GΩ"
        },
        {
            color: 'gold',
            value: "x0.1 Ω"
        },
        {
            color: 'silver',
            value: "x0.01 Ω"
        }
    ];
    const band4 = [
        {
            color: 'brown',
            value: "± 1%"
        },
        {
            color: 'red',
            value: "± 2%"
        },
        {
            color: 'green',
            value: "± 0.5%"
        },
        {
            color: 'blue',
            value: "± 0.25%"
        },
        {
            color: 'violet',
            value: "± 0.1%"
        },
        {
            color: 'grey',
            value: "± 0.05%"
        },
        {
            color: 'gold',
            value: "± 5%"
        },
        {
            color: 'silver',
            value: "± 10%"
        }
    ];
    const band5 = [
        {
            color: 'black',
            value: "0"
        },
        {
            color: 'brown',
            value: "1"
        },
        {
            color: 'red',
            value: "2"
        },
        {
            color: 'orange',
            value: "3"
        },
        {
            color: 'yellow',
            value: "4"
        },
        {
            color: 'green',
            value: "5"
        },
        {
            color: 'blue',
            value: "6"
        },
        {
            color: 'violet',
            value: "7"
        },
        {
            color: 'grey',
            value: "8"
        },
        {
            color: 'white',
            value: "9"
        }
    ];
    const band6 = [
        {
            color: 'brown',
            value: "100 ppm"
        },
        {
            color: 'red',
            value: "50 ppm"
        },
        {
            color: 'orange',
            value: "15 ppm"
        },
        {
            color: 'yellow',
            value: "25 ppm"
        },
        {
            color: 'blue',
            value: "10 ppm"
        },
        {
            color: 'violet',
            value: "5 ppm"
        }
    ];

    const band5Render = ()=>{
        if(numBands === 5 || numBands === 6){
            return (
            <div className="dropdown d-flex justify-content-center m-3">
                <span className="c-btn c-band5 dropdown-toggle" role="button" id="id-band6" data-bs-toggle="dropdown" aria-expanded="false">
                    Band 3
                </span>
                <ul className="dropdown-menu p-2" aria-labelledby="id-band6">
                    {band5.map((item, key) => {
                        return (
                            <li key={key}>
                                <span 
                                    className={`dropdown-item 
                                                c-${item.color} 
                                                d-flex justify-content-between`
                                                }
                                    onClick={()=>{setBandColor('band5', item)}}>
                                    <span>
                                        {item.color}
                                    </span>
                                    <span>
                                        {item.value}
                                    </span>
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </div>
            )
        }
        return (
            <></>
        )
    }

    const band6Render = ()=>{
        if(numBands === 6){
            return (
            <div className="dropdown d-flex justify-content-center m-3">
                <span className="c-btn c-band6 dropdown-toggle" role="button" id="id-band6" data-bs-toggle="dropdown" aria-expanded="false">
                    PPM
                </span>
                <ul className="dropdown-menu p-2" aria-labelledby="id-band6">
                    {band6.map((item, key) => {
                        return (
                            <li key={key}>
                                <span 
                                    className={`dropdown-item 
                                                c-${item.color} 
                                                d-flex justify-content-between`
                                                }
                                    onClick={()=>{setBandColor('band6', item)}}>
                                    <span>
                                        {item.color}
                                    </span>
                                    <span>
                                        {item.value}
                                    </span>
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </div>
            )
        }
        return (
            <></>
        )
    }

    const setBandColor = (band, item)=>{
        var root = document.querySelector(':root');
        var rs = getComputedStyle(root);

        const color = rs.getPropertyValue(`--clr-${item.color}`);
        const hoverColor = rs.getPropertyValue(`--clr-hover-${item.color}`);
        const textColor = rs.getPropertyValue(`--clr-text-${item.color}`);

        root.style.setProperty(`--clr-${band}`, color);
        root.style.setProperty(`--clr-hover-${band}`, hoverColor);
        root.style.setProperty(`--clr-text-${band}`, textColor);
        console.log(color);
        console.table(item);

        setBands(prev=>{
            return {
                ...prev,
                [band] : item
            }
        });
    }

    return (
        <>
            <div className="dropdown d-flex justify-content-center m-3">
                <span className="c-btn c-band1 dropdown-toggle" role="button" id="id-band1" data-bs-toggle="dropdown" aria-expanded="false">
                    Band 1
                </span>
                <ul className="dropdown-menu p-2" aria-labelledby="id-band1">
                    {band1.map((item, key) => {
                        return (
                            <li key={key}><span className={`dropdown-item c-${item.color} d-flex justify-content-between`}
                                    onClick={()=>{setBandColor('band1',item)}}><span>{item.color}</span><span>{item.value}</span></span></li>
                        )
                    })}
                </ul>
            </div>
            <div className="dropdown d-flex justify-content-center m-3">
                <span className="c-btn c-band2 dropdown-toggle" role="button" id="id-band1" data-bs-toggle="dropdown" aria-expanded="false">
                    Band 2
                </span>
                <ul className="dropdown-menu p-2" aria-labelledby="id-band1">
                    {band2.map((item, key) => {
                        return (
                            <li key={key}><span className={`dropdown-item c-${item.color} d-flex justify-content-between`}
                                onClick={()=>{setBandColor('band2', item)}}><span>{item.color}</span><span>{item.value}</span></span></li>
                        )
                    })}
                </ul>
            </div>
            {
                band5Render()
            }
            <div className="dropdown d-flex justify-content-center m-3">
                <span className="c-btn c-band3 dropdown-toggle" role="button" id="id-band1" data-bs-toggle="dropdown" aria-expanded="false">
                    Multiplier
                </span>
                <ul className="dropdown-menu p-2" aria-labelledby="id-band1">
                    {band3.map((item, key) => {
                        return (
                            <li key={key}><span className={`dropdown-item c-${item.color} d-flex justify-content-between`}
                                onClick={()=>{setBandColor('band3', item)}}><span>{item.color}</span><span>{item.value}</span></span></li>
                        )
                    })}

                </ul>
            </div>
            <div className="dropdown d-flex justify-content-center m-3">
                <span className="c-btn c-band4 dropdown-toggle" role="button" id="id-band1" data-bs-toggle="dropdown" aria-expanded="false">
                    Band 4 : Tolarance
                </span>
                <ul className="dropdown-menu p-2" aria-labelledby="id-band1">
                    {band4.map((item, key) => {
                        return (
                            <li key={key}>
                                <span className={`dropdown-item c-${item.color} d-flex justify-content-between`}
                                    onClick={()=>{setBandColor('band4', item)}}>
                                    <span>{item.color}</span>
                                    <span>{item.value}</span>
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </div>
            {
                band6Render()
            }
        </>
    )
}