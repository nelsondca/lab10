import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// Defining and exporting the Edit component
export default function Edit(props) {
    // The useParams hook gets the parameter 'id' from the URL
    let { id } = useParams();

    // Initializing state variables for title, cover, and author using useState hook
    const [title, setTitle] = useState("");
    const [cover, setCover] = useState("");
    const [author, setAuthor] = useState("");

    // The useNavigate hook returns a function to navigate within the application
    const navigate = useNavigate();

    // The useEffect hook works like componentDidMount, making an HTTP GET request on component mount
    useEffect(() => {
        axios.get('http://localhost:4000/api/book/' + id)
            .then((response) => {
                // Updating the state variables with data fetched from the API
                setTitle(response.data.title);
                setCover(response.data.cover);
                setAuthor(response.data.author);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [id]); // 'id' is added as a dependency to update when 'id' changes

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Creating a new book object with updated details
        const newBook = {
            id: id,
            title: title,
            cover: cover,
            author: author
        };

        // Making a PUT request to update the book data
        axios.put('http://localhost:4000/api/book/' + id, newBook)
            .then((res) => {
                console.log(res.data);
                navigate('/read'); // Navigating to the '/read' route after successful update
            });
    }

    // Rendering the form to edit book details
    return (
        <div>
            <h2>Hello from edit component!</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Book Cover: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Book Author: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>
                <div>
                    <input
                        type="submit"
                        value="Add Book"
                    />
                </div>
            </form>
        </div>
    );
}