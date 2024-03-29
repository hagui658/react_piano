import { ReactElement } from "react";
import { InstrumentName } from "soundfont-player";

interface ProviderProps {
  instrument?: InstrumentName;
  AudioContext: AudiioContextType;
  render(props: ProvidedProps): ReactElement;
}
