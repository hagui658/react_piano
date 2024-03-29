import { InstrumentName } from "soundfont-player";
import { Component, ReactElement } from "react";
import { MidiValue } from "../../domain/note";
import { Optional } from "../../domain/types";
import { DEFAULT_INSTRUMENT } from "../../../.history/src/domain/sound_20240303115747";

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

export class SoundfontProvider extends Component<ProvidedProps, ProviderState> {
  public static defaultProps = {
    instrument: DEFAULT_INSTRUMENT,
  };
}
