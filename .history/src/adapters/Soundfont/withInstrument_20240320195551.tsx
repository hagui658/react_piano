import { MidiValue } from "../../domain/note"
import soundfont, { InstrumentName } from 'soundfont-player';
import { Optional } from "../../domain/types";
import React, { Component, ComponentType } from "react";

interface InjectedProps {
    loading: boolean
    play(note: MidiValue): Promise<void>
    stop(note: MidiValue): Promise<void>
}

interface ProviderProps {
    AudioContext: AudioContextType
    instrument: InstrumentName
}

interface ProviderState {
    loading: boolean
    current: Optional<InstrumentName>
}

export function withInstrument<
    TProps extends InjectedProps = InjectedProps
>(WrappedComponent: ComponentType<TProps>) {
    const displayName =
        WrappedComponent.displayName ||
        WrappedComponent.name ||
        "Component"

    return class WithInstrument extends Component<
        ProviderProps,
        ProviderState
    >{

    }
}