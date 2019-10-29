import React from 'react';
import logo from './tinkerbell.gif';
import $ from 'jquery'
import './App.css';

const CHOICES = ["cat", "dog", "rainbow", "chicken", "spongebob","cute cats", "I love you"];
const HOST = "http://api.giphy.com/v1/gifs/search?q=r"
const KEY = "&api_key=UQxXAEY1N3B7lJXh6v543knKd82IFvTA&limit=1"



let giphyURL = fetch("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=UQxXAEY1N3B7lJXh6v543knKd82IFvTA&limit=1").then(response => response.json()).then(data => {return data.data[0].images.original.url}).catch(error => console.log(error));

//  var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=UQxXAEY1N3B7lJXh6v543knKd82IFvTA&limit=1");
//   xhr.done(function(data) {console.log(data.data[0].images.original.url) });
//  console.log("foo");


function combineWords (total = "", word){
    return total + "+" + word;
}


function makeUrl (userChoice){
  return HOST + userChoice + KEY
}



function GiphyDisplay (){
  return(
    <img src={logo} className="giphy" alt="giphy" />
  )
}

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      userChoice: "", //a holder for the choice the user makes. 
    }
  }
  

  handleClick(){

    //imitate user choice
    const randomChoice = Math.floor((Math.random() * 7));
    const arrayOfChoices = [...CHOICES];
    const choice = arrayOfChoices[randomChoice];
    const userChoice =  choice.split(" ").reduce(combineWords)

    this.setState({
      userChoice: userChoice,
    })


  }
  
  render(){

    const userChoice = this.state.userChoice;
    const url = makeUrl(userChoice);

    // async function getGiphy(url) {
    //  const giphySRC = fetch(url).then(data => data.json()).then(data => {return data.data.images.original.url}).catch(error => console.log(error));
    //  return giphySRC;
    // }

    // const giphySRC = await getGiphy(url);



    // const response = await fetch(url);
    // const myJson = await response.json();
    // const giphySRC = await myJson.then(data => {return data.data.images.original.url}).catch(error => console.log(error));


    //var xhr = $.get(url);
    // go into the giphy data object
    // go to image
    // go to original url
    // pass url to GiphyDisplay
  
    return (
    <div className="App">
      <h1>
      What gif are you looking for? 
      </h1>

      <form action="/action_page.php">
        Search: <input type="text" name="Search Terms"></input>
        <button onClick={this.handleClick}>Click me</button>
      </form>

      <GiphyDisplay/>

    </div>
  );
  }


}

export default App;


// join function on arrays - to replace the combine function
// look into redux with sagas (?) 