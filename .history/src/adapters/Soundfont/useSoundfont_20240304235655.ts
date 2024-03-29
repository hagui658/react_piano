import { InstrumentName } from "soundfont-player";
import { MidiValue } from "../../domain/note";
import { Optional } from "../../domain/types";

interface Settings {
  AudioContext: AudioContextType;
}

interface Adapted {
  loading: boolean;
  current: Optional<InstrumentName>;

  load(instrument?: InstrumentName): Promise<void>;
  play(note: MidiValue): Promise<void>;
  stop(note: MidiValue): Promise<void>;
}
