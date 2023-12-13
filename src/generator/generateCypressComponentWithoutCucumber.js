const { copyTemplateFiles } = require('../utils/fileUtils');

async function generateCypressComponentWithoutCucumber(destination) {
    console.log("Generating Cypress Component project without Cucumber...");
    try {
        await copyTemplateFiles('src/templates/cypress/component_without_cucumber', destination);
        console.log('Cypress Component project created successfully');
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

module.exports = generateCypressComponentWithoutCucumber;
