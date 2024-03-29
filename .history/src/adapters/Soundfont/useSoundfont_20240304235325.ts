import { InstrumentName } from "soundfont-player";
import { Optional } from "../../domain/types";

interface Settings {
  AudioContext: AudioContextType;
}

interface Adapted {
  loading: boolean;
  current: Optional<InstrumentName>;
}
