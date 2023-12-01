function Content() {
    // Returning JSX content
    return (
        <div>
            {/* Displaying a heading with text "Hello World!" */}
            <h1>Hello World!</h1>
            {/* Displaying a subheading showing the current time using Date's toLocaleTimeString method */}
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}

// Exporting the Content component as default
export default Content;