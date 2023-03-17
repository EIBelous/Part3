import { data } from "../../../SpeakerData";
import { useState, useEffect } from "react";

export const REQUEST_STATUS={
    LOADING: "loading",
    SUCCES: "succes",
    FAILURE: "failure",

}

function useRequestSpeakers(delayTime = 1000){
const [speakersData, setSpeakersData] = useState([]);
const [requestStatus, setRequestStatus]= useState(REQUEST_STATUS.LOADING)
const [error, setError] = useState("")
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

useEffect(() => {
    async function delayFunk() {
        try {
            await delay(delayTime);
            //Has arror
            setRequestStatus(REQUEST_STATUS.SUCCES)
            setSpeakersData(data);
        } catch (e) {
            setRequestStatus(REQUEST_STATUS.FAILURE)
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
return    { speakersData, requestStatus, error, onFavoriteToggle
    }; 

}
export default useRequestSpeakers