// Importing necessary components from react-bootstrap and react-router-dom
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

// Defining a functional component called BookItem, which takes 'props' as input
function BookItem(props) {
    // Rendering the following JSX content
    return (
        <div>
            {/* Creating a Card component from react-bootstrap */}
            <Card>
                {/* Displaying the book title in the Card Header */}
                <Card.Header>{props.myBook.title}</Card.Header>
                <Card.Body>
                    {/* Adding a blockquote with a class */}
                    <blockquote className="blockquote mb-0">
                        {/* Displaying the book cover image */}
                        <img src={props.myBook.cover} alt="Book Cover" />
                        {/* Displaying the book author */}
                        <footer>{props.myBook.author}</footer>
                    </blockquote>
                </Card.Body>
                {/* Creating a link to edit the book by using react-router-dom */}
                <Link to={"/edit/" + props.myBook._id} className='btn btn-primary'>Edit</Link>
            </Card>

            {/* 
                The commented section below seems to be an alternative way of displaying book information.
                It includes a title, thumbnail image, and author name using different properties of 'myBook'.
                This section is currently commented out and not being used.
            */}
            {/* 
            <h3>{props.myBook.title}</h3>
            <img src={props.myBook.thumbnailUrl} alt="Book Thumbnail"></img>
            <p>{props.myBook.authors[0]}</p> 
            */}
        </div>
    );
}

// Exporting the BookItem component as default
export default BookItem;