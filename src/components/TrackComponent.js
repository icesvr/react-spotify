import React from 'react';
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import { Link } from 'react-router-dom';
import 'react-h5-audio-player/lib/styles.css';
import "./custom.css";


const TrackComponent = (props) => {
    console.log("PROPS: ",props);
    return (
        
        <div className="row align-items-center margintop">
            <div className="col-lg-2">
                <img src={props.data.album.images[0].url} className="img img-thumbnail rounded mx-auto d-block"/>
            </div>
            <div className="col-lg-3 custom">
                <a href={props.data.uri} >
                    <p className="h4">{props.data.name}</p>
                </a>
                
            </div>
            <div className="col-lg-3">
                <p className="h6 album custom">{props.data.album.name}</p>
            </div>
            <div className="col-lg-4 custom">
            
            <AudioPlayer src={props.data.preview_url} showJumpControls={false} customAdditionalControls={[]} layout="stacked-reverse" style={{background: 'white'}}  />
            </div>
        </div>
    )
}

export default TrackComponent;