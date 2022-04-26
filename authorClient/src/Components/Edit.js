import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';
import '../App.css';
import {Link} from 'react-router-dom';
import res from 'express/lib/response';



const Edit = (props) => {
    const {id} = useParams(); 
    const [Authors, setAuthors] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/edit/${id}`)
            .then( res => {
                console.log(res.data.Authors);
                setAuthors(res.data.Authors);
            })
            .catch( err => console.log(err) )
    }, [id])


    return (
    <div>
        <p>{Authors.name}</p>
        <Link to={'/'}>Home</Link>
    </div>
)
}

export default Edit