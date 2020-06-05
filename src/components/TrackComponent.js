import React from 'react';
import "./custom.css";


const TrackComponent = (props) => {
    console.log("PROPS: ",props);
    //<AudioPlayer src={props.data.preview_url} showJumpControls={false} customAdditionalControls={[]} layout="stacked-reverse" style={{background: 'white'}}  />
    return (
        
        <div className="row align-items-center margintop">
            <div className="col-lg-2">
            <a className="text-decoration-none" href={props.data.uri} >
                <img src={props.data.album.images[0].url} className="img-thumbnail rounded mx-auto float-left"/>
            </a>
            </div>
            <div className="col-lg-3 custom">
                <a className="text-decoration-none" href={props.data.uri} >
                    <p className="h4">{props.data.name}</p>
                </a>
                
            </div>
            <div className="col-lg-3">
                <p className="h6 album custom">{props.data.album.name}</p>
            </div>
            <div className="col-lg-4 custom">
            
            
            <iframe src={`https://open.spotify.com/embed?uri=${props.data.uri}`}  height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        </div>
    )
}

export default TrackComponent;