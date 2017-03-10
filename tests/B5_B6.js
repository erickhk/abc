// 5 Verify that when you click on 'Download audio' you are directed to the mp3 file
// 6 Verify that when you click on ‘Listen now’ (from previous url) you are re-directed to the correct url
module.exports = {
    'Verify Download audio and Listen now' : function (browser) {
        browser
        
            // Provided program no longer has Listen Now option so picked a different program
            .url(browser.launch_url + '/radionational/programs/bigideas/a-fortunate-universe/8298030')

            // Wait 10 seconds for page to load
            .waitForElementVisible('body', 10000);

        // Verify Download audio link
        browser.expect.element('a.ico-audio').to.have.attribute('href').equals('https://radio.abc.net.au/search?service_guid=RN-bia-20170309-8298030');
        

        // Verify listen now link
        browser.expect.element('a.ico-download').to.have.attribute('href').which.contains('.mp3');
        
        browser.end();
    }
};