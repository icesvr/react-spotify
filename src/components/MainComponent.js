import React,{useState,useEffect} from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import {HttpHeadersConfig} from './../utils/util';
import ArtistLayout from './ArtistLayout';
import CardComponent from './CardComponent';
import SearchComponent from './SearchComponent';


const MainComponent = () => {

    const [release, setRelease] = useState([]);
    const [search, setSearch] = useState([]);

    const token = 'BQCUOGXNGHc1QRz7wQItVC3FBhASsuGQZeTWH4gxvnCa-n-e139VtONKkm4T44VGEFpp-f-pUsXNHzodt4zvYcRntaXdn3OwUF3DcN6IdWaC9KO6Yx79R7su58ttvwxyK1XvcU85kPKdIOHn'
    useEffect( () =>{
        
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

    const fetchArtist = () => {
        let headers = HttpHeadersConfig('GET',token);
        fetch(`https://api.spotify.com/v1/search?q=${search}&type=artist`, headers)
        .then( response => {
            if(response.ok){
                return response.json();
            }
        })
        .then( json => {
            const artist = json;
            console.log("Back: ",json);
        })
        .catch( error => console.log(error));
        

    }

      
    const handleSearch = (name) => {
        
        //setSearch(name);
        if(name.length > 0){
            setSearch(name);
        }
        
        
        //fetchArtist();
    }   
    
    
    RowAlbums();

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