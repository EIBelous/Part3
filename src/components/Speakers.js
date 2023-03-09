import SpeakersList from './SpeakersList';
import SpeakersTollbar from './SpeakersToolbar';
import { useState } from "react"

function Speakers({  theme, setTheme }) {
    const
        [showSessions, setShowsessions] = useState(true)
    return (
       
        <>
            <SpeakersTollbar
                theme={theme} setTheme={setTheme}
                showSessions={showSessions}
                setShowsessions={setShowsessions} />

            <SpeakersList  showSessions={showSessions} />
        </>
        
    )
    
}

export default Speakers;