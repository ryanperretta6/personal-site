'use client';
import Image from 'next/image';
import { useState } from 'react';
import {lato, latoBold, latoBlack, latoLightItalic} from '../../styles/fonts/fonts';

export default function Profile() {
    
    const [tele, setTele] = useState("");

    const teleCheck = (event : React.KeyboardEvent<HTMLInputElement>) => {
        const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        var teleInput = document.getElementById("phone");
        if(event.key in digits) {
            // input is a valid number
            setTele(tele + event.key);
            const teleLen = tele.length;
            var returnTele = tele;
            if (teleLen >= 4)
                returnTele = '(' + returnTele.slice(0,3) + ')' + returnTele.slice(3);
            if (teleLen >= 7)
                returnTele = returnTele.slice(0,8) + '-' + returnTele.slice(8);
            teleInput!.setAttribute("value", returnTele);
        } else if(event.key == 'Backspace') {
            // character was deleted
            setTele(tele.substring(0,tele.length - 1));
        }
         else {
            // input is not a valid number
            // overwrite the value in the phone input box with old value
            teleInput!.setAttribute("value", tele);
        }
    }
    
    return(
        <div className="profile">
            <div className="profilePicture">
                <Image src="/profile_pic.JPG" alt="Picture of the author" />
            </div>
            <div className="contactMeContainer">
                <div className="contactMe">
                    <h2 style={latoBold.style}>Contact Me</h2>
                    <br/>
                    <form className="contactMeForm">
                        <h3 style={latoBold.style}>Full Name</h3>
                        {/* <br/> */}
                        <div className="contactFullName">
                            <div className="firstName">
                                <p className="requiredMark">*</p>
                                <input id="firstName" type="text" placeholder="Willy" required />
                                <label htmlFor="firstName" style={latoLightItalic.style}>First</label>
                            </div>
                            <div className="lastName">
                                <p className="requiredMark">*</p>
                                <input id="lastName" type="text" placeholder="Wonka" required />
                                <label htmlFor="lastName" style={latoLightItalic.style}>Last</label>
                            </div>
                        </div>
                        <h3 style={latoBold.style}>Email</h3>
                        <p className="requiredMark">*</p>
                        <input id="email" type="email" placeholder="wwonka@wonka.org" required />
                        <h3 style={latoBold.style}>Phone</h3>
                        <input id="phone" type="tel" onKeyDown={teleCheck}/>
                        <input id="next" type="button" value="Next" />
                    </form>
                </div>
            </div>
        </div>
    )
}