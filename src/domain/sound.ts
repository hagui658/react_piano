import { InstrumentName, Player } from "soundfont-player";
import { MidiValue } from "../../.history/src/domain/note_20240303113053";
import { Optional } from "../../.history/src/domain/audio_20240303114439";

export type AudioNodesRegistry = Record<MidiValue, Optional<Player>>;

export const DEFAULT_INSTRUMENT: InstrumentName = "acoustic_grand_piano";
