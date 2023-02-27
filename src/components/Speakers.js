import { data } from '../../SpeakerData'
import Speaker from './Speaker'
import SpeakersList from './SpeakersList';
import Header from './Header'
import SpeakersTollbar from './SpeakersToolbar';
function Speakers() {
    return (
        <div className='container-fluid'>
            <Header />
            <SpeakersTollbar />
            <SpeakersList data={data} />
        </div>
    );
}

export default Speakers