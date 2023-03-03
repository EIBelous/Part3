import { data } from '../../SpeakerData'
import Speaker from './Speaker'
import SpeakersList from './SpeakersList';
import Header from './Header'
import SpeakersTollbar from './SpeakersToolbar';
import { useState } from "react"


function Speakers() {
    const [theme,setTheme]=useState("light")
    return (

        <div className={
            theme==="light" ? "container-fluid light" :
            "container-fluid dark"
        }>
            <Header theme={theme}/>
            <SpeakersTollbar theme={theme} setTheme={setTheme}/>
            <SpeakersList data={data} />
        </div>
    );
}

export default Speakers