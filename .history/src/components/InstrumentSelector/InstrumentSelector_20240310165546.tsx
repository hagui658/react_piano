import React, { FunctionComponent, ChangeEvent } from "react";
import { InstrumentName } from 'soundfont-player';
import { useInstrument } from "../../state/Instrument";
import { options } from "./options"
import "./style.css"

export const InstrumentSelector: FunctionComponent = () => {
    const { instrument, setInstrument } = useInstrument()
    const updateValue = ({ target }: ChangeEvent: <HTMLScriptElement>) =>
setInstrument(target.value as InstrumentName)
}