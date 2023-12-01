// Defining the Read component
function Read() {
<<<<<<< HEAD

    const [data, setData] = useState([]);

    useEffect(
        () => {

            axios.get('http://localhost:4000/api/books')
                .then(
                    (response) => {
                        setData(response.data)
                    }
                )
                .catch(
                    (error) => {
                        console.log(error);
                    }
                )

        }, []
    );

    const ReloadData = (e) => {
        axios.get('http://localhost:4000/api/books')
            .then(
                (response) => {
                    setData(response.data)
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            )

    }
=======
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
>>>>>>> 85ed455be2c22a252e2d3f390aa73fee0e578d56

    // Rendering content, including the Books component with the fetched data as a prop
    return (
        <div>
            <h2>Hello from Read Component!</h2>
<<<<<<< HEAD
            <Books myBooks={data} Reload={ReloadData}></Books>
=======
            {/* Passing 'data' as props to the Books component */}
            <Books myBooks={data}></Books>
>>>>>>> 85ed455be2c22a252e2d3f390aa73fee0e578d56
        </div>
    );
}

// Exporting the Read component as default
export default Read;
