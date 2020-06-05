import React from 'react';
import { Link } from 'react-router-dom';
import "./custom.css";

const ArtistHeader = (props) => {


    console.log(props.data);

    const ShowHeader = () => {
        const imageExist = props.data.images;
        if(!imageExist){
            return (<p>Loading...</p>)
        }else{
            return (
                <div className="row rounded-top border border-dark align-items-center">
                    <div className="col-lg-3 text-center">
                        <img src={props.data.images[2].url} className="img img-thumbnail" alt="artist"/>
                    </div>
                    <div className="col text-center">
                        <a className="text-decoration-none" href={props.data.uri}>
                        <h1 className="mt-3">{props.data.name}</h1>
                        </a>
                        <h6>{`${props.data.followers.total} seguidores`}</h6>
                    </div>
                    <div className="col-lg-3 text-center">
                        <Link to="/">
                            <button className="btn btn-outline-dark">Back</button>
                        </Link>
                        
                    </div>
                </div>
            )
        }
    }
    
    
    return (
        <div className="container">
            <ShowHeader />
        </div>
    )
}

export default ArtistHeader;