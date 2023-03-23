
import { useState, useEffect } from "react";

export const REQUEST_STATUS={
    LOADING: "loading",
    SUCCES: "succes",
    FAILURE: "failure",

}

function useRequestDelay(delayTime = 1000, initialData=[]){
const [data, setData] = useState(initialData);
const [requestStatus, setRequestStatus]= useState(REQUEST_STATUS.LOADING)
const [error, setError] = useState("")
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

useEffect(() => {
    async function delayFunk() {
        try {
            await delay(delayTime);
            //Has arror
            setRequestStatus(REQUEST_STATUS.SUCCES)
            setData(data);
        } catch (e) {
            setRequestStatus(REQUEST_STATUS.FAILURE)
            setError(e)
        }
    };
    delayFunk()
}, [])

    function updateRecord(recordUpdated, doneCallback) {
        const newRecords = data.map(function (rec) {
            return rec.id === recordUpdated.id ? recordUpdated : rec
        })
        async function delayFunction() {
            try {
                await delay(delayTime)
                if (doneCallback){
                    doneCallback()
                }
                setData(newRecords)
            } catch (error) {
                console.log("Eroorr ya ebu blyaaaa")
            }
        }
delayFunction()
}
return    { data, requestStatus, error, updateRecord
    }; 

}
export default useRequestDelay