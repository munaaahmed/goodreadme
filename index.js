
// array of questions for user
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs")
const path = require("path")
const questions = [

    {
        type: 'input',
        name: 'first_name',
        message: "What's your github user name?",
      },
      {
        type: 'input',
        name: 'first_name',
        message: "What is your email address?",
      },
      {
        type: 'input',
        name: 'first_name',
        message: "What is your project's name?",
      },
      {
        type: 'input',
        name: 'first_name',
        message: "Write a descrption of your project",
      },
      {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
      },
      {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
      },
      {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
      },
      {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?",
      },
      {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?",
      }                       
];

// function to write README file
function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
      console.log("Generating README...",{...answers});
      writeToFile("README.md", generateMarkdown({...answers}));
    })
  
}

// function call to initialize program
init();
