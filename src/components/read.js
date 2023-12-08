// Import necessary hooks and modules from React and axios
import { useEffect, useState } from "react"; // Importing hooks from React
import axios from "axios"; // Axios for making HTTP requests
import Books from "./books"; // Importing the Books component

// Functional component Read
function Read() {
   
    // State variable to hold data fetched from the API
    const [data, setData] = useState([]);

    // useEffect hook to perform an action after the component mounts
    useEffect(
        () => {
            // Axios GET request to fetch books from the API when the component mounts
            axios.get('http://localhost:4000/api/books')
                .then(
                    (response) => {
                        setData(response.data); // Update the state with fetched data
                    }
                )
                .catch(
                    (error) => {
                        console.log(error); // Log error if fetching data fails
                    }
                );
        }, [] // Empty dependency array to run this effect only once (on mount)
    );

    // Function to reload data by fetching books again from the API
    const ReloadData = (e) => {
        axios.get('http://localhost:4000/api/books')
            .then(
                (response) => {
                    setData(response.data); // Update the state with fetched data
                }
            )
            .catch(
                (error) => {
                    console.log(error); // Log error if fetching data fails
                }
            );
    };

    return (
        <div>
            {/* Display a heading */}
            <h2>Hello from Read Component!</h2>
            {/* Render the Books component and pass fetched data and ReloadData function as props */}
            <Books myBooks={data} Reload={ReloadData}></Books>
        </div>
    );
}

export default Read; // Export the Read component
