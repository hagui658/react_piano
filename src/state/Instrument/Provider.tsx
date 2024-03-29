import React, { FunctionComponent, useState, ReactNode } from 'react';
import { DEFAULT_INSTRUMENT } from '../../domain/sound';
import { InstrumentContext } from './Context';

interface InstrumentContextProviderProps {
    children: ReactNode;
}

export const InstrumentContextProvider: FunctionComponent<InstrumentContextProviderProps> = ({ children }) => {
    const [instrument, setInstrument] = useState(DEFAULT_INSTRUMENT)

    return (
        <InstrumentContext.Provider value={{ instrument, setInstrument }}>
            {children}
        </InstrumentContext.Provider>
    )
}