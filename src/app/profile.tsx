import Image from 'next/image';
import {lato, latoBold, latoBlack} from '../../styles/fonts/fonts';

export default function Profile() {
    return(
        <div className="profile">
            <div className="profilePicture">
                <Image src="/profile_pic.JPG" alt="Picture of the author" />
                <div className="overlay">Ryan Perretta</div>
            </div>
        </div>
    )
}