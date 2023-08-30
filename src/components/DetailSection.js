import React from "react";
import EmailIcon from '../images/Icon.png';
import '../css/detailSection.css';

export default function Details(){
    return (
        <div className="detail_container">
            <h2>Laura Smith</h2>
             <p className="job_role">Frontend Developer</p>
             <p className="website">laurasmith.website</p>
             <button><pre><img src={EmailIcon} /> Email</pre></button>
             <h3 className="about">About</h3>
             <p className="description">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
             <h3>Interests</h3>
             <p className="description">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
    );
}
