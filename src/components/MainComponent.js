import React,{useState,useEffect} from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import {HttpHeadersConfig} from './../utils/util';
import ArtistLayout from './ArtistLayout';
import CardComponent from './CardComponent';


const MainComponent = () => {

    const [release, setRelease] = useState([]);


    useEffect( () =>{
        let token = 'BQDGq3uNG_-OXkKrKB-SE5dysVCUPFqLfzmBxIlDXuiJBoWk7SpuWSpIUvX5sAMbkDm51UU6--pBIvEw3Qs2urbSCRsWOhub-2LLjixnOBn2hCMfWIgcwrpO4HgVowltEFZBaAkhGpIEMF1c'
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
        })
        .catch( error => console.log(error));
        
    },[]);

    const RowAlbums = () => {
        
       return release.map( album => 
            <CardComponent data={album} key={album.id}/>
         )

    }
    
    RowAlbums();

    const MainComponent = () =>{
        return (
          <div className="App">
            <div className="container">
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