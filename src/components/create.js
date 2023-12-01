// Importing necessary dependencies from React and Axios
import { useState } from "react";
import axios from "axios";

// Creating a functional component named Create
function Create() {
    // Initializing states using the useState hook for title, cover, and author
    const [title, setTitle] = useState(''); // State for book title
    const [cover, setCover] = useState(''); // State for book cover
    const [author, setAuthor] = useState(''); // State for book author

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Preventing the default form submission behavior

        // Logging the entered book details to the console
        console.log("Title: " + title +
            " Cover: " + cover +
            " Author: " + author);

        // Creating a book object with the entered details
        const book = {
            title: title,
            cover: cover,
            author: author
        };

        // Sending a POST request to the specified endpoint to add the book
        axios.post('http://localhost:4000/api/book', book)
            .then(/* Optional handling for successful response */)
            .catch(/* Optional handling for error */);
    }

    // Rendering the form to add a book
    return (
        <div>
            <h2>Hello from create Component!</h2>
            {/* Form to add book details */}
            <form onSubmit={handleSubmit}>
                {/* Input field for adding book title */}
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }} // Updating title state on change
                    />
                </div>
                {/* Input field for adding book cover */}
                <div className="form-group">
                    <label>Add Book Cover: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }} // Updating cover state on change
                    />
                </div>
                {/* Input field for adding book author */}
                <div className="form-group">
                    <label>Add Book Author: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }} // Updating author state on change
                    />
                </div>
                {/* Submit button to add the book */}
                <div>
                    <input type="submit" value="Add Book" />
                </div>
            </form>
        </div>
    );
}

// Exporting the Create component as default
export default Create;