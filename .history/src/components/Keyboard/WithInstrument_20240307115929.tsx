import React, { FunctionComponent } from "react";
import { useAudioContext } from "../AudioContextProvider";
import { useSoundfont } from "../../adapters/Soundfont/useSoundfont";
import { Keyboard } from "./Keyboard";
import "./style.css"
import { useMount } from "../../utils/useMount/useMount";

export const KeyboardWithInstrument: FunctionComponent = () => {
    const AudioContext = useAudioContext()!
    const { loading, play, stop, load } = useSoundfont({ AudioContext })

    useMount(load)

    return <Keyboard loading={loading} play={play} stop={stop} />
}