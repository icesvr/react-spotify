import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import {HttpHeadersConfig} from './../utils/util';
import ArtistHeader from './ArtistHeader';
import TopTacksComponent from './TopTracksComponent';


const ArtistLayout = () => {

    const [artist, setArtist] = useState([]);
    const [songs, setSongs] = useState([]);
  
    let {id} = useParams();
    const token = "BQCUOGXNGHc1QRz7wQItVC3FBhASsuGQZeTWH4gxvnCa-n-e139VtONKkm4T44VGEFpp-f-pUsXNHzodt4zvYcRntaXdn3OwUF3DcN6IdWaC9KO6Yx79R7su58ttvwxyK1XvcU85kPKdIOHn"
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
        fetch(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=us`, headerConfig)
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