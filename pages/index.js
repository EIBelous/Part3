import { data } from "../SpeakerData"
import Speaker from "../src/components/Speaker"

const indexPage = () => {


    return (
        <div className="container spearers-list">
            <div className="row">
                {data.map(function (speaker) {
                    
                    return (

                        <Speaker key={speaker.id} speaker={speaker}/>
                    )

                })}

            </div>
        </div>
    );
};

export default indexPage
