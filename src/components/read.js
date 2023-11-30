// Defining the Read component
function Read() {
    // Initializing state for data using the useState hook, setting it as an empty array initially
    const [data, setData] = useState([]);

    // Using the useEffect hook to perform an action on component mount
    useEffect(
        () => {
            // Making a GET request to fetch data from the specified API endpoint
            axios.get('http://localhost:4000/api/books')
                .then(
                    // Handling the response by updating the state with the received data
                    (response) => {
                        setData(response.data);
                    }
                )
                .catch(
                    // Handling errors in case of failed requests
                    (error) => {
                        console.log(error);
                    }
                );
        }, [] // Passing an empty dependency array to ensure this effect runs only once on mount
    );

    // Rendering content, including the Books component with the fetched data as a prop
    return (
        <div>
            <h2>Hello from Read Component!</h2>
            {/* Passing 'data' as props to the Books component */}
            <Books myBooks={data}></Books>
        </div>
    );
}

// Exporting the Read component as default
export default Read;
