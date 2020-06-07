import React,{useState,useEffect} from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import {HttpHeadersConfig} from './../utils/util';
import ArtistLayout from './ArtistLayout';
import CardComponent from './CardComponent';
import SearchComponent from './SearchComponent';


const MainComponent = () => {

    const [release, setRelease] = useState([]);
    const [searchArtist, setArtist] = useState([""]);



    const token = 'BQD6Ov4SLm2uJVJRXCbeSI1ZzT1u3RFT1amV2k1pf1vREMnRNDklzIsXv-PEie_JXbYDWcBcid9WyoKzQkcYY6RgPczdc9Q6XB_1inwMxfOdmv-F_h9crLxrqfF-T08pzmHkE6xEBqCj1r3A'
    useEffect( () =>{
        getReleases();
        
    },[]);

   


    const RowAlbums = () => {
        
       return release.map( album => 
            <CardComponent data={album} key={album.id}/>
         )

    }

    const getReleases = () => {

        let headers = HttpHeadersConfig('GET',token);
        fetch('https://api.spotify.com/v1/browse/new-releases', headers)
        .then( response => {
            if(response.ok){
                return response.json();
            }
        })
        .then( json => {
            const albums = json.albums.items;
            setRelease(albums);
        }).catch( error => console.log(error));

    }

    const fetchArtist = (name) => {
        let headers = HttpHeadersConfig('GET',token);
        fetch(`https://api.spotify.com/v1/search?q=${name}&type=artist`, headers)
        .then( response => {
            if(response.ok){
                return response.json();
            }
        })
        .then( json => {
            const artist = json;
            console.log("Back del JSON: ",artist);
            
            //setArtist(artist);
                
            
           
        })
        .catch( error => console.log(error));
        

    }

      
    const handleSearch = (name) => {
        console.log(name);
        if(name.length != 0){
            setArtist(name);
        }
    }

    const ShowMainInfo = ({status, artist}) => {
        return <h1>Holaa</h1>
        
        
        
    }

    //<RowAlbums />
    
    const MainComponent = () =>{
        return (
          <div className="App">
            <div className="container">
            <SearchComponent handleSearch={ handleSearch } />
              <div className="row">
                    <RowAlbums />
                    
              </div>
          </div>
        </div>
        )
      }


    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={MainComponent} />
            <Route path="/artist/:id" component={ArtistLayout} />
        </Switch>
    </BrowserRouter>
    )
}



export default MainComponent;