import React, { useState, useEffect } from 'react';
import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams} from "react-router-dom";
import '../App.css';
import axios from "axios";
import {Link} from 'react-router-dom';

const Add = (props) => {
    const { authors, setAuthors }= props;
    const [name, setName] = useState("");
    const { id } = useParams(); 
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/author/${id}`)
        .then((res) => {
            setName(res.data.name);
        })
        .catch(err => console.log(err))
        }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/author/${id}`, 
        {
        name,
    })
        .then(res=>{
            setAuthors([...authors, res.data])
            e.target.reset()
            setName('')
            navigate('/')
            })
        .catch(err=>console.log(err)) 
}
    return (
        <Form onSubmit={ submitHandler }>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <h1>Add Authors Name</h1>
                <Form.Control type="text" placeholder="Enter Name..."   />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Link to={`/`}>Home</Link>
    </Form>
    );
}

export default Add;