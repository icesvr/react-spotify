import React from 'react';
import { Link } from 'react-router-dom';

const CardComponent = (props) => {

    const artistName = props.data.artists.map( artist => <span key={ artist.id } className="badge badge-primary mx-1">{artist.name}</span>);

    return (
        
        <div className="col-lg-4 mt-5 animated fadeIn">
            <Link to={`/artist/${props.data.artists[0].id}`}>

                <div className="card" >
                    <img src={props.data.images[0].url} className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <h5>{props.data.name}</h5>
                        {artistName}
                    </div>
                </div>
            </Link>
                
        </div>
    )
}

export default CardComponent;
