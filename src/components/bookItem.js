import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
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
                        <img src={props.myBook.cover}></img>
                        <footer>
                            {props.myBook.author
                            
                            }
                        </footer>
                    </blockquote>
                </Card.Body>
                <Link to={"/edit/"+props.myBook._id} className='btn btn-primary'>Edit</Link>
            </Card>
            {/* <h3>{props.myBook.title}</h3>
            <img src={props.myBook.thumbnailUrl}></img>
            <p>{props.myBook.authors[0]}</p> */}
        </div>
    );
}

// Exporting the BookItem component as default
export default BookItem;