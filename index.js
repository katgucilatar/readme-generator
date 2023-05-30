const inquirer = require('inquirer');
const fs = require('fs');


inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'What is a description of your project?',
            name: 'description'
        },
        {
            type: 'input',
            message: 'What are the installation instructions of your project?',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'What are the test instructions of your project?',
            name: 'tests'
        },
        {
            type: 'input',
            message: 'What is the usage information of your project?',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Who contributed to your project?',
            name: 'contribution'
        },
        {
            type: 'list',
            message: 'What is the appropriate license for this project?',
            name: 'license',
            choices: [
                "Apache",
                "BSD",
                "Eclipse",
                "GNU",
                "IBM",
                "ISC",
                "MIT",
                "Perl",
                "SIL",
                "Zlib"
            ]
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'github'
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email'
        }
    ])

    .then((answers) => {
        console.log(answers)
        const readmeContent = generateMarkdown(answers);
    
        fs.writeFile('README.md', readmeContent, (err) =>
          err ? console.log(err) : console.log('Successfully created README.md!')
        );
      });


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
        return ``;
    } else {
        return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](${renderLicenseLink(license)})`
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'Apache' ) {
        return `https://opensource.org/licenses/Apache-2.0`
    } else if (license === 'BSD' ) {
        return `https://opensource.org/licenses/BSD-3-Clause`
    } else if (license === 'Eclipse') {
        return `https://opensource.org/licenses/EPL-1.0`
    } else if (license === 'GNU' ) {
        return `https://www.gnu.org/licenses/gpl-3.0`
    } else if (license === 'IBM' ) {
        return `https://opensource.org/licenses/IPL-1.0`
    } else if (license === 'ISC' ) {
        return `https://opensource.org/licenses/ISC`
    } else if (license === 'MIT' ) {
        return `https://opensource.org/licenses/MIT`
    } else if (license === 'Perl' ) {
        return `https://opensource.org/licenses/Artistic-2.0`
    } else if (license === 'SIL' ) {
        return `https://opensource.org/licenses/OFL-1.1`
    } else if (license === 'Zlib' ) {
        return `https://opensource.org/licenses/Zlib`
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license) {
        return ``;
    } else {
        return `## Licenses
        ${license}`
    }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({ title, description, installation, tests, usage, contribution, license, github, email}) =>
`   ${renderLicenseBadge(license)}

    ${title}
    
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Tests](#tests)
* [Usage](#usage)
* [Contributing](#contributing)
* [Licenses](#licenses)
* [Questions](#questions)
* [Credits](#credits)

## Description
${description}

## Installation
${installation}

## Tests
${tests}

## Usage
${usage}

## Contributing
${contribution}

## Licenses
${renderLicenseSection(license)}

## Questions
Contact me at the following for any questions: 
GitHub: https://github.com/${github}  
Email: ${email}`
