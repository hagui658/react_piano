import soundfont, { InstrumentName, Player } from "soundfont-player";
import { Component, ReactElement } from "react";
import { MidiValue } from "../../domain/note";
import { Optional } from "../../domain/types";
import { AudioNodesRegistry, DEFAULT_INSTRUMENT } from "../../domain/sound";

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

  private audio: AudioContext;
  private player: Optional<Player> = null;
  private activeNodes: AudioNodesRegistry = {};

  public state: ProviderState = {
    loading: false,
    current: null,
  };

  private resume = async () => {
    return this.audio.state === "suspended"
      ? await this.audio.resume()
      : Promise.resolve();
  };
}
