import { InstrumentName } from "soundfont-player";
import { ReactElement } from "react";

interface ProviderProps {
  instrument: InstrumentName;
  AudioContext: AudioContextType;
  render(props: ProvidedProps): ReactElement;
}
