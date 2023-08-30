import React from "react";
import '../css/app.css';
import ImageDiv from './imageSection.js';
import Details from './DetailSection.js';
import Media from './SocialMediaSection.js'
export default function App(){
    return (
        <div className="app">
            <ImageDiv />
            <Details />
            <Media />
        </div>
    );
}
