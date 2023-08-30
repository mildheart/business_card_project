import React from "react";
import '../css/Social.css'
import TwiterIcon from '../images/Twitter_Icon.png';
import Facebook from '../images/Facebook_Icon.png';
import github from '../images/GitHub_Icon.png';
import linkedln from '../images/Linkedin_Icon.png';
import insta from '../images/Instagram_Icon.png';

export default function Media(){
    return (
        <div className="socal_container">
            <img src={TwiterIcon} className="icon" alt="Icon"/>
            <img src={Facebook} className="icon" alt="Icon"/>
            <img src={github} className="icon" alt="Icon"/>
            <img src={linkedln} className="icon" alt="Icon"/>
            <img src={insta} className="icon" alt="Icon"/>
        </div>
    );
}
