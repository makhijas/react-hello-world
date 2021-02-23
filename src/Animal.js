//functional component
function Animal(props) {
    return (
        //jsx goes here: 
        <div>
            <h1>{props.animal}</h1>
        </div>
    )
}
function Human(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.location}</p>
        </div>
    )
}

export default Animal;
