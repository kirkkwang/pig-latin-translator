# Pig Latin Activity

[ Oday ouyay eakspay igpay atinlay? ](http://www.wikihow.com/Speak-Pig-Latin)

In this activity we're going to create an application that translates regular English words into Pig Latin. We'll use a React application as a template to run the code that we are going to write for Pig Latin.

### Rules of Pig Latin
- For words beginning with a vowel, add "way" to the end.
- For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
- If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
- "y" is treated like a vowel in appropriate circumstances.

There are many [ examples ](http://funtranslations.com/pig-latin) of Pig Latin translators out there on the Internet to give you inspiration.

### Getting started
All the code you'll need to write for this app is going to be inside one function in the `/src/App.js` file.

After you accept the assignment from GitHub Classroom, you'll want to install all the necessary dependencies:

```bash
$ cd pig-latin-challenge
$ yarn
```

Then you are ready to start a server to run the application:

```bash
$ yarn start
```

Now you're ready to code!

To get started, find the `myPigLatinCodeHere` function, and write your code. Every time you save your updated file, the browser window displaying your app will reload.

### Pig Latin Challenge
- Take the time to plan your approach.
- This is a difficult logic problem to solve, brainstorm with your team and create a road map for your approach.

**MVP - Minimum Viable Product**
- As a user, I can type a series of English words into the Pig Latin application.
- As a user, when I click Submit, I see a Pig Latin translation of the sentence I entered.
- As a user, the page is styled, and pleasing to use.

**User Stretch Goals**
- As a user, I can input a sentence that includes punctuation.
- As a user, I can input a sentence that includes lower and upper case words.
- As a user, I can input a sentence that includes special characters.
- As a user, I can see a message if I am not using the application correctly.

**Developer Stretch Goals**
- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://www.netlify.com/).
