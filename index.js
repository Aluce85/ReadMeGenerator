// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What should we name your repo?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of the repo?",
  },
  {
    type: "input",
    name: "contributors",
    message: "Were there any contributors?",
  },
  {
    type: "input",
    name: "usage",
    message: "What does this application do?",
  },
  {
    type: "list",
    message: "licenses if any?",
    name: "licenses",
    choices: ["IBM", "MIT", "CCO", "BSD"],
  },

  {
    type: "input",
    name: "contact",
    message: "What contact info would you like to display?",
  },
  {
    type: "input",
    name: "GitHub",
    message: "What is your username for Github?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();