import './BandSelector.css';

export default function BandSelector() {
    const band1 = [
        'black',
        'brown',
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'violet',
        'grey',
        'white'
    ];
    const band2 = [
        'black',
        'brown',
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'violet',
        'grey',
        'white'
    ];
    const band3 = [
        'black',
        'brown',
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'violet',
        'grey',
        'white',
        'gold',
        'silver'
    ];
    const band4 = [
        'brown',
        'red',
        'green',
        'blue',
        'violet',
        'grey',
        'gold',
        'silver'
    ];
    return (
        <>
            <div class="dropdown d-flex justify-content-center m-3">
                <span class="btn btn-primary dropdown-toggle" role="button" id="id-band1" data-bs-toggle="dropdown" aria-expanded="false">
                    Band 1
                </span>
                <ul class="dropdown-menu p-2" aria-labelledby="id-band1">
                    {band1.map((item) => {
                        return (
                            <li><span className={`dropdown-item c-${item}`}>{item}</span></li>
                        )
                    })}

                </ul>
            </div>
            <div class="dropdown d-flex justify-content-center m-3">
                <span class="btn btn-primary dropdown-toggle" role="button" id="id-band1" data-bs-toggle="dropdown" aria-expanded="false">
                    Band 2
                </span>
                <ul class="dropdown-menu p-2" aria-labelledby="id-band1">
                    {band2.map((item) => {
                        return (
                            <li><span className={`dropdown-item c-${item}`}>{item}</span></li>
                        )
                    })}

                </ul>
            </div>
            <div class="dropdown d-flex justify-content-center m-3">
                <span class="btn btn-primary dropdown-toggle" role="button" id="id-band1" data-bs-toggle="dropdown" aria-expanded="false">
                    Band 3
                </span>
                <ul class="dropdown-menu p-2" aria-labelledby="id-band1">
                    {band3.map((item) => {
                        return (
                            <li><span className={`dropdown-item c-${item}`}>{item}</span></li>
                        )
                    })}

                </ul>
            </div>
            <div class="dropdown d-flex justify-content-center m-3">
                <span class="btn btn-primary dropdown-toggle" role="button" id="id-band1" data-bs-toggle="dropdown" aria-expanded="false">
                    Band 4
                </span>
                <ul class="dropdown-menu p-2" aria-labelledby="id-band1">
                    {band4.map((item) => {
                        return (
                            <li><span className={`dropdown-item c-${item}`}>{item}</span></li>
                        )
                    })}

                </ul>
            </div>
        </>
    )
}