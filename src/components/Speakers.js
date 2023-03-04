import SpeakersList from './SpeakersList';
import SpeakersTollbar from './SpeakersToolbar';
import { useState } from "react"

function Speakers({ data, theme, setTheme }) {
    return (
        <>
            <SpeakersTollbar theme={theme} setTheme={setTheme} />
            <SpeakersList data={data} />
        </>
    )
}

export default Speakers;