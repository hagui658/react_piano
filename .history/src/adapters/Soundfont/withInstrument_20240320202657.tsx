import { MidiValue } from "../../domain/note"
import soundfont, { InstrumentName, Player } from 'soundfont-player';
import { Optional } from "../../domain/types";
import React, { Component, ComponentType } from "react";
import { DEFAULT_INSTRUMENT } from "../../domain/sound";

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
        public static defaultProps = {
            instrument: DEFAULT_INSTRUMENT
        }

        private audio: AudioContext
        private player: Optional<Player>
        private activeNodes: AudiioNodesRegistry = {}

        public static displayName = 'withInstrument(${displayName})'
        public state: ProviderState = {
            loading: false
            current: null
        }

        private resume = async () => {
            return this.audio.state === "suspended"
                ? await this.audio.resume()
                : Promise.resolve()
        }

        constructor(props: ProviderProps) {
            super(props)

            const { AudioContext } = this.props
            this.audio = new AudioContext()
        }


    }
}