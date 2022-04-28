import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useNavigate, useParams} from "react-router-dom";
import '../App.css';
import axios from "axios";
import {Link} from 'react-router-dom';

const Add = (props) => {
    const { Authors, setAuthors }= props;
    const [name, setName] = useState("");
    const { id } = useParams(); 
    const navigate = useNavigate();

    // useEffect(() => {
    //     axios.get(`http://localhost:8000/author/${id}`)
    //     .then((res) => {
    //         setName(res.data.name);
    //     })
    //     .catch(err => console.log(err))
    //     }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/author/${id}`, 
        {
        name: name,
    })
        .then(res=>{
            setAuthors([...Authors, res.data])
            setName('')
            navigate('/')
            })
        .catch(err=>console.log(err)) 
}
    return (
    <div className='creating'>
        <form >
                <h1>Add Authors Name</h1>
                <input type="text" placeholder="Enter Name..."  onChange={(e) => setName(e.target.value)} className='inputs'/>
        </form>
        <div className='add'>
            <Button variant="contained" type="submit" onClick={ submitHandler }>Submit</Button>
        </div>
        <div className='gohome'>
            <Link to={`/`}>Home</Link>
        </div>
    </div>
    );
}

export default Add;