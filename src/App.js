import React, { useState, useEffect } from 'react';
import Heading  from './containers/heading';
import Button from './containers/button';
import JokeBox  from './containers/JokeBox';

function App() {

  const [joke, getJoke] = useState("");
  const [isClicked, setClick] = useState(false);
  const apiUrl = "https://v2.jokeapi.dev/joke/Programming";
  
  useEffect(
    () => {
      fetch(apiUrl).then(response => response.json()).then(data => {
        if(data.type === "twopart")
        {
          var twopartJoke = data.setup + "\n\n\n" + data.delivery;
          getJoke(twopartJoke); 
        }
        else
        {
          getJoke(data.joke);
        }
      });
    }, [isClicked]
  );

  function clickHandeler()
  {
    setClick(prevValue => !prevValue);
  }
  console.log(joke);
  return (
    
    <div className="App">
      <Heading/>
      <Button  
        onClick = {clickHandeler}
      />
      <JokeBox
        joke = {joke}
      />
    </div>
  );
}

export default App;
