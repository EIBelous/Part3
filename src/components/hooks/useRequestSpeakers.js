import { data } from "../../../SpeakerData";
import { useState, useEffect } from "react";

function useRequestSpeakers(delayTime = 1000){
const [speakersData, setSpeakersData] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [hasErrored, setHasArrored] = useState(false);
const [error, setError] = useState("")
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

useEffect(() => {
    async function delayFunk() {
        try {
            await delay(delayTime);

            setIsLoading(false)
            setSpeakersData(data);
        } catch (e) {
            setIsLoading(false)
            setHasArrored(true)
            setError(e)
        }
    };
    delayFunk()
}, [])

function onFavoriteToggle(id) {
    const speakersRecPrevious = speakersData.find(function (speaker) {
        return speaker.id === id
    })
    const speakersRecUpdated = {
        ...speakersRecPrevious,
        favorite: !speakersRecPrevious.favorite
    };
    const speakersDataNew = speakersData.map(function (rec) {
        return rec.id === id ? speakersRecUpdated : rec
    })
    setSpeakersData(speakersDataNew)
}
return    { speakersData, isLoading, 
        hasErrored, error, onFavoriteToggle
    }; 

}
export default useRequestSpeakers