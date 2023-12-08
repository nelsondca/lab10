// Import necessary components and modules from react-bootstrap, react-router-dom, and axios
import Card from 'react-bootstrap/Card'; // Card component from react-bootstrap
import { Link } from 'react-router-dom'; // Link component from react-router-dom for navigation
import Button from 'react-bootstrap/Button'; // Button component from react-bootstrap
import axios from 'axios'; // Axios for making HTTP requests

// Functional component BookItem that takes props as an argument
function BookItem(props) {

    return (
        <div>
            {/* Display a Card */}
            <Card>
                {/* Display the book title in the Card Header */}
                <Card.Header>{props.myBook.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        {/* Display the book cover */}
                        <img src={props.myBook.cover} alt="Book cover"></img>
                        {/* Display the book author */}
                        <footer>{props.myBook.author}</footer>
                    </blockquote>
                </Card.Body>
                {/* Link to the edit page for the specific book */}
                <Link to={"/edit/" + props.myBook._id} className='btn btn-primary'>Edit</Link>
                {/* Delete button to delete the book */}
                <Button variant='danger' onClick={ // Click event to delete the book
                    (e) => {
                        // Axios DELETE request to the API endpoint to delete the book by ID
                        axios.delete('http://localhost:4000/api/book/' + props.myBook._id)
                            .then((res) => {
                                // Call reload function passed through props to update the component after deletion
                                let reload = props.reload();
                            })
                            .catch(); // Handle errors if any
                    }
                }>Delete</Button>
            </Card>
        </div>
    );
}

export default BookItem; // Export the BookItem component
