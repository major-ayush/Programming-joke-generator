import React from 'react';

function Button(props)
{
    return <button onClick = {() => props.onClick() } className = "button">Get Joke</button>
}

export default Button;