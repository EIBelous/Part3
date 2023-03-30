import SpeakersList from './SpeakersList';
import SpeakersTollbar from './SpeakersToolbar';
import { useState } from "react"

function Speakers() {
    const
        [showSessions, setShowsessions] = useState(true)
    return (
       
        <>
            <SpeakersTollbar
                showSessions={showSessions}
                setShowsessions={setShowsessions} />

            <SpeakersList  showSessions={showSessions} />
        </>
        
    )
    
}

export default Speakers;