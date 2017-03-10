// Function used to click on a program in the navigation
function goToProgram(browser,programName) {
    
    // Click on the programs link then the specific program
    browser.useXpath()
           .click('.//*[@id="rn-navigation"]//a[normalize-space()="Programs"]')
           .waitForElementVisible('.//*[@id="rn-navigation"]//a[normalize-space()="' + programName + '"]', 5000)
           .click('.//*[@id="rn-navigation"]//a[normalize-space()="' + programName + '"]');  
}

// 1 Verify can navigate to a ‘Program’ (e.g. ‘Big Ideas’) from the Programs sub-menu
module.exports = {
    'Verify program navigation' : function (browser) {
        browser
            .url(browser.launch_url + '/radionational/')

            // Wait 10 seconds for page to load
            .waitForElementVisible('body', 10000);

        goToProgram(browser,'Big Ideas')
        
        browser.useCss().waitForElementVisible('body', 10000).end();
    }
};