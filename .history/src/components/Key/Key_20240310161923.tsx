import React, { FunctionComponent, ReactEventHandler } from "react";
import clsx from "clsx"
import { NoteType } from "../../domain/note";
import "./style.css"
import { usePressObserver } from "../PressObserver";

interface KeyProps {
    type: NoteType
    label: string
    disabled?: boolean

    onUp: ReactEventHandler<HTMLButtonElement>
    onDown: ReactEventHandler<HTMLButtonElement>
}

export const Key: FunctionComponent<KeyProps> = ({
    type,
    label,
    onDown,
    onUp,
    ...rest
}) => {
    const pressed = usePressObserver({
        watchKey: label,
        onStartPress: onDown,
        onFinishPress: onUp
    })

    return (
        <button
            className={clsx(`key key--${type}`)}
            onMouseDown={onDown}
            onMouseUp={onUp}
            type="button"
            {...rest}
        >
            {label}
        </button>
    )
}