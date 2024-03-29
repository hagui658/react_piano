import { MidiValue } from "../../domain/note"
import { InstrumentName } from 'soundfont-player';
import { Optional } from "../../domain/types";

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

