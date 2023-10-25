// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
//I prefer switch, but maybe if's are better?
  switch (license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break;
    case 'Apache':
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      break;
    case 'GPL':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      break;
    case 'BSD':
      return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
      break;
    default:
      return ``
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return `[MIT](https://opensource.org/licenses/MIT)`
      break;
    case 'Apache':
      return `[Apache](https://opensource.org/licenses/Apache-2.0)`
      break;
    case 'GPL':
      return `[GPL](https://www.gnu.org/licenses/gpl-3.0)`
      break;
    case 'BSD':
      return `[BSD](https://opensource.org/licenses/BSD-3-Clause)`
      break;
    default:
      return ``
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None') {
    return ''
  } else {
    return `## License
      This project is licensed under the ${renderLicenseLink(license)} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
   
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  Questions?  Email me at ${data.email} or visit my [${data.github}](GitHub):
  `;

}

module.exports = generateMarkdown;
