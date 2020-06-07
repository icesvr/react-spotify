import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import {HttpHeadersConfig} from './../utils/util';
import ArtistHeader from './ArtistHeader';
import TopTacksComponent from './TopTracksComponent';


const ArtistLayout = () => {

    const [artist, setArtist] = useState([]);
    const [songs, setSongs] = useState([]);
  
    let {id} = useParams();
    const token = "BQD6Ov4SLm2uJVJRXCbeSI1ZzT1u3RFT1amV2k1pf1vREMnRNDklzIsXv-PEie_JXbYDWcBcid9WyoKzQkcYY6RgPczdc9Q6XB_1inwMxfOdmv-F_h9crLxrqfF-T08pzmHkE6xEBqCj1r3A"
    const headerConfig = HttpHeadersConfig('get',token);
    useEffect( () => {

        fetch(`https://api.spotify.com/v1/artists/${id}`,headerConfig)
        .then( response => {
            if(response.ok){
                return response.json();
            }
        })
        .then( artist => {
            setArtist(artist);
        });

        
        
    },[]);

    useEffect( () => {
        fetch(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=cl`, headerConfig)
        .then( response => {
            if(response.ok){
                return response.json();
            }
        } )
        .then( songs => {
            setSongs(songs);
        });
    },[])
    
    return (
        
        <div className="mt-5">
            <ArtistHeader data={artist}/>
            <TopTacksComponent data={songs}/>
        </div>
    )
}


export default ArtistLayout;