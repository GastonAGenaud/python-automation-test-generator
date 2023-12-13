const { getFrameworkOptions } = require('./questions');
const {
    generateCypressE2EWithCucumber,
    generateCypressComponentWithoutCucumber,
    generateSeleniumWithCucumber
} = require('./generator');

async function main() {
    const answers = await getFrameworkOptions();

    if (answers.framework === 'Cypress') {
        if (answers.cypressType === 'E2E' && answers.useCucumber) {
            generateCypressE2EWithCucumber(answers.directory);
        } else if (answers.cypressType === 'Component' && !answers.useCucumber) {
            generateCypressComponentWithoutCucumber(answers.directory);
        }
        // Más condiciones según sea necesario
    } else if (answers.framework === 'Selenium') {
        if (answers.useCucumber) {
            generateSeleniumWithCucumber(answers.directory);
        }
        // Más condiciones según sea necesario
    }
}

main().catch(error => {
    console.error(`Error: ${error.message}`);
});
