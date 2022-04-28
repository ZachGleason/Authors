import axios from 'axios';
import react, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate, useParams} from "react-router-dom";
import {Link} from 'react-router-dom';
import '../App.css';



const Edit = (props) => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/author/${id}`)
        .then((res) => {
        setName(res.data.Author.name);
        console.log(res.data.Author.name);
        })
        .catch((err) => console.log(err)) 
    }, [])

    const updateAuthor = ( e ) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/author/${id}`, {
            name,
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate("/");
        })
        .catch((err) => {console.log(err)})
    }


    return (
    <div className='editbox'>
        <form >
                <h1>Edit Author</h1>
                <input type="text" value={name}  onChange={(e) => setName(e.target.value)} className='input'/>
        </form>
        <div className='updating'>
                <Button variant="contained" type="submit" onClick={ updateAuthor }>Update</Button>
        </div>
        <div className='linking'> 
                <Link to={`/`}>Home</Link>
        </div>
    </div>
    );
}

export default Edit;