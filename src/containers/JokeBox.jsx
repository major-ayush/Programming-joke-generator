import React from "react";

function JokeBox(props) {
    return (
        <div className = 'jokeBox'>
            {
                props.joke.split("\n").map(
                    (line) => <h1 className = "jokeLine">{line}</h1>
                )
            }
        </div>);
}

export default JokeBox;