const inquirer = require('inquirer');

async function getFrameworkOptions() {
    return await inquirer.prompt([
        {
            type: 'list',
            name: 'framework',
            message: 'Which testing framework would you like to use?',
            choices: ['Cypress', 'Selenium'],
        },
        {
            type: 'list',
            name: 'cypressType',
            message: 'Choose the type of tests for Cypress:',
            choices: ['E2E', 'Component'],
            when: (answers) => answers.framework === 'Cypress',
        },
        {
            type: 'confirm',
            name: 'useCucumber',
            message: 'Would you like to use Cucumber?',
            when: (answers) => answers.framework === 'Cypress' || answers.framework === 'Selenium',
        },
        {
            type: 'input',
            name: 'directory',
            message: 'What is the name of the directory where you want to create the project?(e.g., ./my-test-project)',
            when: (answers) => answers.useCucumber === true || answers.useCucumber === false,
        },
    ]);
}

module.exports = { getFrameworkOptions };
