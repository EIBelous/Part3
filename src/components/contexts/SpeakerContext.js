import { createContext, useContext } from "react";

const SpeakerContext = createContext()

function SpeakerProvider ({children, speaker, updateRecord, insertRecord, deleteRecord}) {
    return(
        <SpeakerContext.Provider
        value={
            {speaker, updateRecord, insertRecord, deleteRecord}
        }>
            {children}
        </SpeakerContext.Provider>
    )
}

export {SpeakerContext, SpeakerProvider}