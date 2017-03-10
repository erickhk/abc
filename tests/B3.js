// 3 Verify can search for content in the search bar and that content is returned.
module.exports = {
    'Verify basic search' : function (browser) {
        browser
            .url(browser.launch_url + '/radionational/')

            // Wait 10 seconds for page to load
            .waitForElementVisible('body', 10000);

        // Enter the search term and submit the form
        browser.setValue('#search-simple-input-query', 'Big Ideas');
        browser.submitForm('#search-simple-form');
        
        // While it is not visible, we click right arrow until it is
        // Once visible then we click on it.
        
        browser.waitForElementVisible('body', 10000).end();
    }
};


// 4 Verify you can click on Social media ‘Share’ icon and the correct pop-up appears.
// 'http://www.abc.net.au/radionational/programs/bigideas/a-fortunate-universe/8076406'

