import SpeakersList from './SpeakersList';
import SpeakersTollbar from './SpeakersToolbar';
import {SpeakerFilterProvider} from './contexts/speakerFilterContext'

function Speakers() {
 
    return (
         <SpeakerFilterProvider startingShowSessions={false}>
            <SpeakersTollbar />
            <SpeakersList />
        </SpeakerFilterProvider>
        )
  };

export default Speakers;