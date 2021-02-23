//functional component
function Human(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.location}</p>
        </div>
    )
}

export default Human;