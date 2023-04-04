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
        updateRecord
    } = useRequestDelay(2000, data)

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
                    {speakersData.map(function (speaker) {
                        return (
                            <Speaker key={speaker.id}
                                speaker={speaker}
                                onFavoriteToggle={(doneCallback) => {
                                    updateRecord({
                                        ...speaker,
                                        favorite: !speaker.favorite,
                                    },doneCallback)
                                }}
                            />
                        )
                    })}
                </div>
            </ReactPlaceholder>
        </div>
    )
}

export default SpeakersList