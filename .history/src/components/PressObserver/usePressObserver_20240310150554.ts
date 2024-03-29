import { equal } from "assert";
import { useState, useEffect } from "react";
import { Key as KeyLabel, Key } from "../../domain/keyboard";

type IsPressed = boolean;
type EventCode = string;

interface Settings {
  watchKey: KeyLabel;
  onStartPress: Function;
  onFinishPress: Function;
}

function fromEventCode(code: EventCode): KeyLabel {
  const prefixRegex = /Key|Digit/gi;
  return code.replace(prefixRegex, "");
}

function equal(watchKey: KeyLabel, eventCode: EventCode): boolean {
  return fromEventCode(eventCode).toUpperCase() === watchKey.toUpperCase();
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

    function handlePressFinish({ code }: KeyboardEvent): void {
      if (!pressed || !equal(watchKey, code)) return;
      setPressed(false);
      onFinishPress();
    }

    document.addEventListener("keydown", handlePressStart);
    document.addEventListener("keyup", handlePressFinish);

    return () => {
      document.addEventListener("keydown", handlePressStart);
      document.addEventListener("keyup", handlePressFinish);
    };
  }, [watchKey, pressed, setPressed, onStartPress, onFinishPress]);

  return pressed;
}
