import React, { Component } from "react";
import "./App.css";
import piggy from "./assets/piggy.png";

class App extends Component {
  constructor(props) {
    super(props);
    // the state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // "phrase" is the text entered by the user - right now there are test words hard coded to make the process of testing your code faster and easier
      // ACTION ITEM: when you are ready for your full user experience, delete the test words so phrase is assigned an empty string
      phrase: "Hello, world!!!",
      // "phraseTranslated" is what the user will see appear on the page as Pig Latin, it starts as the preset message and updates when your user clicks the "submit" button
      phraseTranslated: "This is where your translated sentence will appear.",
    };
  }

  // The "myPigLatinCodeHere" function is where you will put your logic to convert the sentence entered by the user to Pig Latin

  myPigLatinCodeHere = () => {
    // the variable "userInput" will contain the text input from the user modified into an array of words
    // no need to change this variable
    let userInput = this.state.phrase.split(" ");
    console.log("userInput:", userInput);

    // now that we have an array of words, we can map over the array and access each word
    let translatedWordsArray = userInput.map((currentWord) => {
      // ACTION ITEM: use "currentWord" as a starting point for your code
      console.log("currentWord:", currentWord);

      let vowelsArray = currentWord.split("").filter((vowel) => {
        return (
          vowel === "a" ||
          vowel === "e" ||
          vowel === "i" ||
          vowel === "o" ||
          vowel === "u" ||
          vowel === "A" ||
          vowel === "E" ||
          vowel === "I" ||
          vowel === "O" ||
          vowel === "U"
        );
      });
      console.log("vowelsArray:", vowelsArray);
      // your code here!
      // if indexOfFirstVowel !== 0
      // if indexOfFirstVowel === 0
      //   add 'way' to the end of string eg. apple -> appleway
      // else if substring(0,1) === qu then, slice qu and append to the end and add 'ay'
      // else if vowelsArray.length === 0 AND there is a y if current.indexOf('y')
      // handle punctuations and capitals eg. Hello, world! -> Ellohay, orldway!
      const caseFix = (word) => {
        // false means it is uppercase, true means it is lowercase
        return word[0] == word[0].toLowerCase()
          ? word
          : word[0].toLowerCase() + word[1].toUpperCase() + word.substring(2);
      };

      const caseFixQu = (word) => {
        return word[0] == word[0].toLowerCase()
          ? word
          : word.substring(0, 2).toLowerCase() +
              word[2].toUpperCase() +
              word.substring(3);
      };

      const caseFixConsQu = (word) => {
        return word[0] == word[0].toLowerCase()
          ? word
          : word.substring(0, 2).toLowerCase() +
              word[2] +
              word[3].toUpperCase() +
              word.substring(4);
      };

      const caseFixY = (word) => {
        return word[0] == word[0].toLowerCase()
          ? word
          : word.substring(0, word.indexOf("y")).toLowerCase() +
              word[word.indexOf("y")].toUpperCase() +
              word.substring(word.indexOf("y") + 1);
      };

      const puncCheck = (word) => {
        if (word.match(/[.,:!?;]/)) {
          return word.slice(word.match(/[.,:!?;]/).index);
        } else {
          return "";
        }
      };

      let indexOfFirstVowel = currentWord.indexOf(vowelsArray[0]);
      let punc = puncCheck(currentWord);
      if (indexOfFirstVowel === 0) {
        return (
          currentWord.slice(0, currentWord.length - punc.length) + "way" + punc
        );
      } else if (currentWord.slice(0, 2).toLowerCase() === "qu") {
        let qu = caseFixQu(currentWord).substring(0, 2);
        let restOfWord = caseFixQu(currentWord).substring(2);
        return (
          restOfWord.slice(0, restOfWord.length - punc.length) +
          qu +
          "ay" +
          punc
        );
      } else if (currentWord.slice(1, 3) === "qu") {
        let consonantAndQu = caseFixConsQu(currentWord).substring(0, 3);
        let restOfWord = caseFixConsQu(currentWord).substring(3);
        return (
          restOfWord.slice(0, restOfWord.length - punc.length) +
          consonantAndQu +
          "ay" +
          punc
        );
      } else if (vowelsArray.length === 0 && currentWord.indexOf("y") !== -1) {
        let consonants = caseFixY(currentWord).substring(
          0,
          currentWord.indexOf("y")
        );
        let restOfWord = caseFixY(currentWord).substring(
          currentWord.indexOf("y")
        );
        return (
          restOfWord.slice(0, restOfWord.length - punc.length) +
          consonants +
          "ay" +
          punc
        );
      } else {
        let consonants = caseFix(currentWord).substring(0, indexOfFirstVowel);
        let restOfWord = caseFix(currentWord).substring(indexOfFirstVowel);
        return (
          restOfWord.slice(0, restOfWord.length - punc.length) +
          consonants +
          "ay" +
          punc
        );
      }
      //Input Hello, World! --> Ello,hay Orld!way -->Ellohay, Orldway!
      //if there is a puncuation, ,.?!:;
      // Move to end of the word
      // Remember: console.log is your friend :)
      // ACTION ITEM: change the value of currentWord to the name of whatever variable you made containing your Pig Latin'd word
    });

    // joining the array back to a string of translated words
    // no need to change this variable
    let translatedWords = translatedWordsArray.join(" ");
    console.log("translatedWords:", translatedWords);

    // the setState method will take your information from "translatedWords" and update the state object that is displayed to the user
    // no need to change this method
    this.setState({ phraseTranslated: translatedWords });
  };

  restartGame = () => {
    // this method restarts the game by setting the original state
    // ACTION ITEM: when you are ready for your full user experience, delete the test words in phrase so that is assigned an empty string
    this.setState({
      phrase: "alpha through yummy squeal queen fry",
      phraseTranslated: "This is where your translated sentence will appear.",
    });
  };

  // no need to modify this method
  setUpPreventDefault = (e) => {
    // this method prevents React from refreshing the page unnecessarily
    e.preventDefault();
    this.myPigLatinCodeHere();
  };

  // no need to modify this method
  handleInput = (e) => {
    // this method takes the input and saves the value in this.state.phrase so we can use the input in our program
    this.setState({ phrase: e.target.value });
  };

  render() {
    return (
      <>
        <h1>Pig Latin Translator</h1>
        <img
          src={piggy}
          alt="pig with butcher cut names in pig latin"
          className="piggy"
        />
        <div className="inputArea">
          <h4>Enter phrase to be translated:</h4>
          {/* user input field - every DOM event that happens in the input will call the handleChange method and update state */}
          <input
            type="text"
            className="userInput"
            onChange={this.handleInput}
            value={this.state.phrase}
          />
          <br />
          {/* button that called the setUpPreventDefault method which calls the myPigLatinCodeHere method */}
          <button onClick={this.setUpPreventDefault}>Translate</button>
          <button onClick={this.restartGame}>Clear</button>
        </div>
        <h4>{this.state.phraseTranslated}</h4>
      </>
    );
  }
}

export default App;

// air -> airway, oil -> oilway, ardvaark -> ardvaarkway
// chair -> airchay, wreck -> eckwray, leg -> eglay, treat -> eattray (DONE)
// quarter -> arterquay, quokka -> okkaquay, quoting -> otingquay
// yellow -> ellowyay, sky -> yskay, ybarra -> barrayay

//
// if string[0] at value 0 and 1, if that === qu

// use toLowerCase when moving char to the back
