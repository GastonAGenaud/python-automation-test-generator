const { copyTemplateFiles } = require('../utils/fileUtils');

async function generateSeleniumWithCucumber(destination) {
    console.log("Generating Selenium project with Cucumber...");
    try {
        await copyTemplateFiles('src/templates/selenium/with_cucumber', destination);
        console.log('Selenium with Cucumber project created successfully');
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

module.exports = generateSeleniumWithCucumber;
