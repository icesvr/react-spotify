import React from 'react';
import TrackComponent from './TrackComponent';


const TopTacksComponent = (props) =>{
   
    const songs = props.data.tracks;
    const ShowSongs = () => {
        
        if(!songs){
            return (
                <p>Loading songs....</p>
            )
        }else{
            console.log(songs);
            
          return  songs.map( song => <TrackComponent data={song} key={song.id} />)


            
        }
    }

    ShowSongs();
    return (
        
        <div className="container mt-5">
            <div className="jumbotron">
                <h1 className="text-center">Populares</h1>
                <ShowSongs />
            </div>
        </div>
    )
}


export default TopTacksComponent;