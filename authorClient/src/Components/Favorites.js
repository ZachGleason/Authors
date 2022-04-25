import React from "react";
import '../App.css';
import {Link} from 'react-router-dom';

const Favorites = () => {
    return (
    <div>
    <h1>Favorite Authors</h1>
    {/* <Link to='' >Add Author</Link> */}
    <p>We have quotes by:</p>
    <table>
        <tr>
            <th>Author</th>
            <th>Actions Available</th>
        </tr>
        <tr>
            <td>Alfreds Futterkiste</td>

        </tr>
        <tr>
            <td>Centro comercial Moctezuma</td>

        </tr>
    </table>
    </div>
    );
}

export default Favorites