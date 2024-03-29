import React, { FunctionComponent } from "react";
import { Keyboard } from "../Keyboard"
import { NoAudioMessage } from "../NoAudioMessage"
import { useAudioContext } from "../AudioContextProvider"
import { KeyboardWithInstrument } from "../Keyboard/WithInstrument";

export const Main: FunctionComponent = () => {
    const AudioContext = useAudioContext()
    return !!AudioContext ? (<KeyboardWithInstrument />) : (<NoAudioMessage />)
}