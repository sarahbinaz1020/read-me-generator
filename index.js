// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'Hi there, what is your github username?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is the description of your project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are your installation instructions?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What is your usage information?',
      name: 'usage',
      default: 'npm',
    },
    {
      type: 'checkbox',
      message: 'What license are you using?',
      name: 'license',
      choices: ["Apache", "Boost", "Bsd"],
    },
    {
      type: 'input',
      message: 'What are your contribution guidelines?',
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

function generateMarkdown(data) {
    const licenseChoice = data.license;
    let license;
    switch (licenseChoice) {
        case "Apache":
            license = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case "Boost":
            license = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
            break;
        case "Bsd":
            license = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
            break; 
        default:
            license = `No license selected.`;
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
