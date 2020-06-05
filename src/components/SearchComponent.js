import React,{useState} from 'react';


const SearchComponent = ({handleSearch}) => {

    const [artist, setArtist] = useState('');
    
    const handleEvent = () => {
        const handle =()=> handleSearch(artist);
        handle();
    }

    return (
        <div class="input-group mb-3">
            <input type="text" class="form-control"  onChange={e => setArtist(e.target.value)} onKeyUp={handleEvent} aria-label="Recipient's username" aria-describedby="button-addon2" autoFocus={true} />
            <div class="input-group-append">
                <button class="btn btn-outline-secondary"  type="button" id="button-addon2">Button</button>
            </div>
        </div>
    )
}

export default SearchComponent;