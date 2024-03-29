import { equal } from "assert";
import { useState, useEffect } from "react";
import { Key as KeyLabel } from "../../domain/keyboard";

type IsPressed = boolean;
type EventCode = string;

interface Settings {
  watchKey: KeyLabel;
  onStartPress: Function;
  onFinishPress: Function;
}

export function usePressObserver({
  watchKey,
  onStartPress,
  onFinishPress,
}: Settings): IsPressed {
  const [pressed, setPressed] = useState<IsPressed>(false);

  useEffect(() => {
    function handlePressStart({ code }: KeyboardEvent): void {
      if (pressed || !equal(watchKey, code)) return;
      setPressed(true);
      onStartPress();
    }
  });
}
