import React, { FunctionComponent } from "react";
import { useAudioContext } from "../AudioContextProvider";
import { Keyboard } from "./Keyboard";
import "./style.css"
import { useInstrument } from "../../state/Instrument";
import { SoundfontProvider } from "../../adapters/Soundfont";

export const KeyboardWithInstrument: FunctionComponent = () => {
    const AudioContext = useAudioContext()!
    const { instrument } = useInstrument()

    return (
        <SoundfontProvider
            AudioContext={AudioContext}
            instrument={instrument}
            render={(props) => <Keyboard {...props} />}
        />
    )
}