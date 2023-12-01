// Importing the BookItem component from the "./bookItem" file
import BookItem from "./bookItem";

// Defining a functional component called Books, which takes 'props' as input
function Books(props) {
    // Using the map function to iterate through the 'myBooks' array passed in props
    // For each 'book' in the 'myBooks' array, rendering a BookItem component with specific props
    return props.myBooks.map(
        (book)=>{
            return <BookItem myBook={book} key={book._id}></BookItem>
        }
    );
}

// Exporting the Books component as default
export default Books;