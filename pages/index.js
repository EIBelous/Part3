import { data} from "../SpeakerData"
 
const indexPage = ()=>{
    
    const {id,bio,first,last,favorite,twitterHandle,company,sessions,}=data[0]
    
    return (
       

        <div>Hello from Plural1</div>
    );
}

export default indexPage
