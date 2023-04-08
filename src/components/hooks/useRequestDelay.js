
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
        const oridinalRecords=[...data]
        const newRecords = data.map(function (rec) {
            return rec.id === recordUpdated.id ? recordUpdated : rec
        })
        async function delayFunction() {
            try {
                setData(newRecords)
                await delay(delayTime)
                if (doneCallback){
                    doneCallback()
                }
                
            } catch (error) {
                console.log("Eroorr ya ebu blyaaaa")
                if (doneCallback) {
                    doneCallback()
                }
                setData(oridinalRecords)
            }
        }
delayFunction()
}
function insertRecord(record, doneCallback) {
    const oridinalRecords=[...data]
    const newRecords = [record, ...data]
    async function delayFunction() {
        try {
            setData(newRecords)
            await delay(delayTime)
            if (doneCallback){
                doneCallback()
            }
            
        } catch (error) {
            console.log("Eroorr ya ebu blyaaaa")
            if (doneCallback) {
                doneCallback()
            }
            setData(oridinalRecords)
        }
    }
    delayFunction()
}

function deleteRecord(record, doneCallback) {
    const oridinalRecords=[...data]
    const newRecords = data.filter(function(rec){
        return (
            rec.id != record.id
        )
    })
    async function delayFunction() {
        try {
            setData(newRecords)
            await delay(delayTime)
            if (doneCallback){
                doneCallback()
            }
            
        } catch (error) {
            console.log("Eroorr ya ebu blyaaaa")
            if (doneCallback) {
                doneCallback()
            }
            setData(oridinalRecords)
        }
    }
    delayFunction()
}




return    { data, requestStatus, error, updateRecord,insertRecord,deleteRecord
    }; 

}
export default useRequestDelay