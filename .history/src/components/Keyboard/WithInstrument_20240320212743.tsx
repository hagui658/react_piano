import React, { FunctionComponent } from "react";
import { useAudioContext } from "../AudioContextProvider";
import { Keyboard } from "./Keyboard";
import "./style.css"
import { useInstrument } from "../../state/Instrument";
import { SoundfontProvider } from "../../adapters/Soundfont";
import { withInstrument } from "../../adapters/Soundfont/withInstrument";
import { withInstrumentStatic } from "../../adapters/Soundfont/wiithInstrumentStatic";

const withGuitar = withInstrumentStatic("acoustic_guitar_steel")
const withPiano = withInstrumentStatic("acoustic_grand_piano")
const WrappedKeyboard = withInstrument(Keyboard)

export const KeyboardWithInstrument: FunctionComponent = () => {
    const AudioContext = useAudioContext()!

    return <WrappedKeyboard AudioContext={AudioContext} />
}