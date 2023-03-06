import SpeakersList from './SpeakersList';
import SpeakersTollbar from './SpeakersToolbar';
import { useState } from "react"

function Speakers({ data, theme, setTheme }) {
    const
        [showSessions, setShowsessions] = useState(true)
    return (
       
        <>
            <SpeakersTollbar
                theme={theme} setTheme={setTheme}
                showSessions={showSessions}
                setShowsessions={setShowsessions} />

            <SpeakersList data={data}
                showSessions={showSessions} />
        </>
        
    )
    
}

export default Speakers;