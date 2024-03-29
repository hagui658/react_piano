import { ReactElement, FunctionComponent } from "react";
import { InstrumentName } from "soundfont-player";
import { MidiValue } from "../../domain/note";

interface ProviderProps {
  instrument?: InstrumentName;
  AudioContext: AudiioContextType;
  render(props: ProvidedProps): ReactElement;
}

interface ProvidedProps {
  loading: boolean;
  play(note: MidiValue): Promise<void>;
  stop(note: MidiValue): Promise<void>;
}

export const SoundfontProvider: FunctionComponent<ProviderProps> = ({
  AudioContext,
  instrument,
  render,
}) => {};
