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


function writeToFile(fileName, data) {
    console.log(answers);
    return `#${answers.title}
    
    ## Description
    ${answers.description}
    
    ## Table of Contents
* [Contributing](#contributions)
* [Usage](#usage)
* [Contact](#contact)

## License
${generateBadgeForLicense(answers.license)}

## contributions
${answers.contributors}
## usage
${answers.usage}
## contact
${answers.contact}
## gitHub
[Github](https://github.com/${answers.GitHub})
`;
};

        
function init() {
    inquirer.prompt(questions).then((answers) => {
      fs.writeFile("readme.md", readMeText(answers), function (err) {
        if (err) console.log(err);
      });
    });
  }

// Function call to initialize app
init();