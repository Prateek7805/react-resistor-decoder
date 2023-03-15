import React, { createContext, useState } from "react";
export const BandsData = createContext({
    band1:  {
        color: 'default',
        value: "0"
    },
    band2: {
        color: 'default',
        value: "0"
    },
    band3: {
        color: 'default',
        value: "0"
    },
    band4: {
        color: 'default',
        value: "0"
    }
});
export const BandsNumNav = createContext(4);

export default function MainContext({ children }) {
    const [bands, setBands] = useState({
        band1: {
            color: 'default',
            value: null
        },
        band2: {
            color: 'default',
            value: null
        },
        band3: {
            color: 'default',
            value: null
        },
        band4: {
            color: 'default',
            value: null
        },
        band5: {
            color: 'default',
            value: null
        },
        band6: {
            color: 'default',
            value: null
        }
    });
    const [numBands, setNumBands] = useState(4);
    return (
        <BandsNumNav.Provider value={{ numBands, setNumBands }}>
            <BandsData.Provider value={{ bands, setBands }}>
                {children}
            </BandsData.Provider>
        </BandsNumNav.Provider>
    )
}