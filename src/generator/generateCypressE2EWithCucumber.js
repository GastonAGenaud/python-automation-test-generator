const { copyTemplateFiles } = require('../utils/fileUtils');

async function generateCypressE2EWithCucumber(destination) {
    console.log("Generating Cypress E2E project with Cucumber...");
    try {
        // Asegúrate de que las rutas de las plantillas sean correctas
        await copyTemplateFiles('src/templates/cypress/e2e_with_cucumber', destination);
        console.log('Cypress E2E with Cucumber project created successfully');
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

module.exports = generateCypressE2EWithCucumber;
