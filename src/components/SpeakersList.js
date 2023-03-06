import Speaker from './Speaker'

function SpeakersList({data,showSesions}){
    return(
        <div className="container speakers-list">
            <div className="row">
                {data.map(function (speaker) {
                    return (
                    <Speaker key={speaker.id} 
                    speaker={speaker}
                    showSesions={showSesions} />
                    )
                })}
            </div>
        </div>
    )
}

export default SpeakersList