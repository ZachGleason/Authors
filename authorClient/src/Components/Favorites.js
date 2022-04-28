import React, {useState, useEffect} from "react";
import '../App.css';
import {Link} from 'react-router-dom';
import axios from "axios";
import Button from '@mui/material/Button';

const Favorites = (props) => {
    const [Authors, setAuthors ] = useState([]);

    const { removeObj } = props;

    const DeleteItem = ( authorID ) => {
        alert('product deleted')
        axios.delete('http://localhost:8000/author/' + authorID)
        .then(res => removeObj(authorID))
            console.log(authorID)
        .catch((err) => console.log(err))
}

    useEffect(() => {
        axios.get("http://localhost:8000/authors")
        .then((res) => {
            setAuthors(res.data.Authors);
            console.log(res.data.Authors);
            })
        .catch((err) => console.log(err));
    },  []);

    return (
        <div className="favorites">
            <h1 className="text">Favorite Authors</h1>
            <Button variant="contained"><Link to={'/add'} className='author'>Add Author</Link></Button>
            <table className="table">
                <thead>
                    <tr>
                        <th className="authors" >Authors</th>
                    </tr>
                </thead>
                <tbody>
                    <div className="box">
                        {Authors.map((Author, index) => (
                            <tr key={index}>
                                <div className="items">
                                    <p className="names">{ Author.name }</p>
                                    <Button variant="outlined" size="small"><Link to={`/author/${Author._id}`} className='view'>View Author</Link></Button>
                                    <Button variant="outlined" size="small"><Link to={`/edit/${Author._id}`} className='edit'>Edit Author</Link></Button>
                                    <Button onClick={(e) => {DeleteItem(Author._id)}} className='delete' variant="outlined" size="small">Delete</Button>
                                </div>
                            </tr>                
                        ))}
                    </div>
                </tbody>
            </table>
        </div>
    );
}

export default Favorites;