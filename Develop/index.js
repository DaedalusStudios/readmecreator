// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your project title?",
    },
    {
        type: 'input',
        name: 'description',
        message: "Please provide an accurate description.",
    },
    {
        type: 'input',
        name: 'installation',
        message: "Please detail any installation instructions required",
    },
    {
        type: 'input',
        name: 'usage',
        message: "How should your project be used?",
    },
    {
        type: 'input',
        name: 'contribution',
        message: "Please detail any contributions.",
    },
    {
        type: 'input',
        name: 'test',
        message: "Please provide test instructions.",
    },
    {
        type: 'list',
        name: 'license',
        message: "Which license will your project use?.",
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: "Please provide your GitHub username.",
    },
    {
        type: 'input',
        name: 'email',
        message: "Please provide an email address.",
    },
    {
        type: 'input',
        name: 'FileName',
        message: "What would you like to name your file?",
    },

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile(`${data.FileName}.md`, generateMarkdown(data));
        });
}

// Function call to initialize app
init();
