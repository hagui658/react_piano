import React, { FunctionComponent } from "react";

export const NoAudioMessage: FunctionComponent = () => {
    return (
        <div>
            <p> Sorry, it's not gonna work :-( </p>
            <p>
                Semms like your browser doesn't support <code>Auido API</code>
            </p>
        </div>
    )
}
