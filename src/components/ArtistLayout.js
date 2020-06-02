import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import {HttpHeadersConfig} from './../utils/util';
import ArtistHeader from './ArtistHeader';
import TopTacksComponent from './TopTracksComponent';


const ArtistLayout = () => {

    const [artist, setArtist] = useState([]);
    const [songs, setSongs] = useState([]);
  
    let {id} = useParams();
    const token = "BQDGq3uNG_-OXkKrKB-SE5dysVCUPFqLfzmBxIlDXuiJBoWk7SpuWSpIUvX5sAMbkDm51UU6--pBIvEw3Qs2urbSCRsWOhub-2LLjixnOBn2hCMfWIgcwrpO4HgVowltEFZBaAkhGpIEMF1c"
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