import React,{useState} from 'react';


const SearchComponent = ({handleSearch}) => {

    const [artist, setArtist] = useState([]);
    

     if(artist.length > 0){
         handleSearch(artist);
     }
   
  
    
    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control"  onChange={e => {
                
                setArtist(e.target.value);
                

            } }  />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary"  type="button" id="button-addon2">Button</button>
            </div>
        </div>
    )
}

export default SearchComponent;