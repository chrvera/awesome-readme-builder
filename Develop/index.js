// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
inquirer
.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Write a short description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions:',
        default: 'npm install',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
      },
    ])
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`${fileName} has been generated successfully!`);
        }
    });
}

// TODO: Create a function to initialize app
function init() {

inquirer.prompt(questions)
 .then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile('README.md', readmeContent);
 })
 .catch((error) => {
    console.error('Error occured:', error);
 });
}
// Function call to initialize app
init();
