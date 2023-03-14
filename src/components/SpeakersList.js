import Speaker from './Speaker'
import {data} from "../../SpeakerData"
import { useState, useEffect } from 'react'

function SpeakersList({showSessions}){
    const [speakersData,setSpeakersData]=useState([]);

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    useEffect(() => {
        async function delayFunk(){
        await delay(1000);
        setSpeakersData(data); 
        }
        delayFunk()
    },[])

function onFavoriteToggle(id){
    const speakersRecPrevious = speakersData.find(function(speaker){
        return speaker.id === id
    })
    const speakersRecUpdated={
        ...speakersRecPrevious,
        favorite: !speakersRecPrevious.favorite
      };
      const speakersDataNew=speakersData.map(function(rec){
        return rec.id ===id ? speakersRecUpdated : rec
      })
      setSpeakersData(speakersDataNew)
}
    return(
        <div className="container speakers-list">
            <div className="row">
                {speakersData.map(function (speaker) {
                    return (
                    <Speaker key={speaker.id} 
                    speaker={speaker}
                    showSessions={showSessions}
                    onFavoriteToggle={()=>{
                        onFavoriteToggle(speaker.id)    
                    }}
                    />
                    )
                })}
            </div>
        </div>
    )
}

export default SpeakersList