import { useContext } from 'react';
import Speaker from './Speaker'
import ReactPlaceholder from 'react-placeholder/lib';
import useRequestDelay, {REQUEST_STATUS}  from './hooks/useRequestDelay';
import {data} from "../../SpeakerData"
import {SpeakerFilterContext} from './contexts/speakerFilterContext'

function SpeakersList() {
    const {
       data: speakersData,
        requestStatus,
        error, 
        updateRecord,
        deleteRecord,
        insertRecord
    } = useRequestDelay(2000, data)

    const {searchQuery,eventYear} = useContext(SpeakerFilterContext);


    if (requestStatus === REQUEST_STATUS.FAILURE)
        return (
            <div className='text-danger'>
                ERROR:<b>Downloading failed {error}</b>
            </div>
        )

    return (
        <div className="container speakers-list">
            <ReactPlaceholder
                type="media"
                rows={20}
                className="speakerslist-placeholder bg-red"
                ready={requestStatus === REQUEST_STATUS.SUCCES}
            >
                <div className="row">
                    {speakersData
                    .filter(function(speaker){
                        return(
                            speaker.first.toLowerCase().includes(searchQuery) || 
                            speaker.last.toLowerCase().includes(searchQuery)

                        )
                    })
                    .filter(function(speaker){
                        return  speaker.sessions.find((session) =>{
                                return session.eventYear === eventYear
                            })
                        
                    })
                    .map(function (speaker) {
                        return (
                            <Speaker key={speaker.id}
                                speaker={speaker}
                             updateRecord = {updateRecord}
                             insertRecord = {insertRecord}
                             deleteRecord = {deleteRecord}
                            />
                        )
                    })}
                </div>
            </ReactPlaceholder>
        </div>
    )
}

export default SpeakersList