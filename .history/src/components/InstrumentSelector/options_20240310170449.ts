import { InstrumentName } from "soundfont-player";

interface Option {
  value: InstrumentName;
  label: string;
}

type OptionsList = Option[];
type InstrumentList = InstrumentName[];

function normalizeList(list: InstrumentList): OptionsList {
  return list.map((instrument) => ({
    value: instrument,
    label: instrument.replace(/_/gi, ""),
  }));
}

export const options = normalizeList(instruments as InstrumentList);
