import { InstrumentName } from "soundfont-player";
import { ReactElement } from "react";
import { MidiValue } from "../../domain/note";
import { Optional } from "../../domain/types";

interface ProviderProps {
  instrument: InstrumentName;
  AudioContext: AudioContextType;
  render(props: ProvidedProps): ReactElement;
}

interface ProvidedProps {
  loading: boolean;
  play(note: MidiValue): Promise<void>;
  stop(note: MidiValue): Promise<void>;
}

interface ProviderState {
  loading: boolean;
  current: Optional<InstrumentName>;
}
