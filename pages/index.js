import { data } from "../SpeakerData"
import Speaker from "../src/components/Speaker"
const indexPage = () => {


    return (


        <div className="container speakers-list">
            <div className="row">
                {data.map(function (speaker) {
                   

                    return (
                   <Speaker key={speaker.key} speaker={speaker} />    
                    )
                })}


            </div>
        </div>
    );
}

export default indexPage
