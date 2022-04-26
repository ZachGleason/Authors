import React, {useState, useEffect} from "react";
import '../App.css';
import {Link} from 'react-router-dom';
import axios from "axios";

const Favorites = (props) => {
    const [Authors, setAuthors ] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/authors")
        .then((res) => {
            setAuthors(res.data.Authors);
            console.log(res.data.Authors);
            })
        .catch((err) => console.log(err));
    },  []);

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={'/add'}>Add Author</Link>
            <p>We have quotes by:</p>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {Authors.map((Author, index) => (
                        <tr key={index}>
                            { Author.name }
                            <Link to={`/edit/${Author._id}`}>Edit Author</Link>
                        </tr>                
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Favorites;