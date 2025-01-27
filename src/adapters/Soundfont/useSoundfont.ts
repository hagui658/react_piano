import { useState, useRef } from "react";
import Soundfont, { InstrumentName, Player } from "soundfont-player";
import { MidiValue } from "../../domain/note";
import { Optional } from "../../domain/types";
import { AudioNodesRegistry, DEFAULT_INSTRUMENT } from "../../domain/sound";

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

export function useSoundfont({ AudioContext }: Settings): Adapted {
  let activeNodes: AudioNodesRegistry = {};
  const [current, setCurrent] = useState<Optional<InstrumentName>>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [player, setPlayer] = useState<Optional<Player>>(null);
  const audio = useRef(new AudioContext());

  async function load(instrument: InstrumentName) {
    setLoading(true);
    const player = await Soundfont.instrument(audio.current, instrument);

    setLoading(false);
    setCurrent(instrument);
    setPlayer(player);
  }

  async function play(note: MidiValue) {
    await resume();
    if (!player) return;

    const node = player.play(note.toString());
    activeNodes = { ...activeNodes, [note]: node };
  }

  async function stop(node: MidiValue) {
    await resume();
    if (!activeNodes[node]) return;

    activeNodes[node]!.stop();
    activeNodes = { ...activeNodes, [node]: null };
  }

  async function resume() {
    return audio.current.state === "suspended"
      ? await audio.current.resume()
      : Promise.resolve();
  }

  return {
    loading,
    current,

    load,
    play,
    stop,
  };
}
