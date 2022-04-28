import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';
import '../App.css';
import {Link} from 'react-router-dom';




const View = (props) => {
    const {id} = useParams(); 
    const [Author, setAuthor] = useState({});


    useEffect(() => {
        axios.get(`http://localhost:8000/author/${id}`)
            .then( res => {
                console.log(res.data.Author);
                setAuthor(res.data.Author);
            })
            .catch( err => console.log(err) )
    }, [id])

    return (
    <div className='viewing'>
        <h1>Viewing Author</h1>
        <h3>Name: {Author.name}</h3>
        <Link to={'/'}>Home</Link>
    </div>
)
}

export default View;