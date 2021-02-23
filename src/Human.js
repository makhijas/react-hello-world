import Player from './Player';

//functional component
function Human(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.location}</p>
            <Player position="Small Forward" />
        </div>
    )
}

export default Human;