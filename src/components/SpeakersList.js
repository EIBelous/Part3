import Speaker from './Speaker'
import ReactPlaceholder from 'react-placeholder/lib';
import useRequestSpeakers from './hooks/useRequestSpeakers';

function SpeakersList({ showSessions }) {
    const {
        speakersData, isLoading, 
        hasErrored, error, onFavoriteToggle
    } = useRequestSpeakers(2000)

    if (hasErrored === true)
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
                ready={isLoading === false}
            >
                <div className="row">
                    {speakersData.map(function (speaker) {
                        return (
                            <Speaker key={speaker.id}
                                speaker={speaker}
                                showSessions={showSessions}
                                onFavoriteToggle={() => {
                                    onFavoriteToggle(speaker.id)
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