// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is github username?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is the project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is your description?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are your Installation instructions?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What is your Usage information?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'What is your License?',
      name: 'license',
      choices: ["apache", "boost", "bsd"],
    },
    {
      type: 'input',
      message: 'What are your Contribution guidelines?',
      name: 'contributing',
    },
  ];

inquirer
  .prompt(questions)

  .then((data) =>{
    const fileName = "ReadMe2.md"
    fs.writeFile(fileName, generateMarkdown(data), (err)=> err ? console.log(err) : console.log("Yay!"))
  }
  );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


function generateMarkdown(data) {
    const licenseChoice = data.license;
    let license;
    switch (licenseChoice) {
        case "apache":
            license = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case "boost":
            license = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
            break;
        case "bsd":
            license = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
            break; 
        default:
            license = `No license selected.`;
            console.log("No license selected.");
    }

return`
# ${data.title}
${license}

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:
${data.installation}
\`\`\`
npm i
\`\`\`

## Usage

${data.usage}

## License

This project is licensed under the ${data.license} license.
  
## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
npm test
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.name}](https://github.com/${data.name}/).`
}