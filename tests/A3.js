// 3 Verify can navigate to the 'Just In' page
module.exports = {
    'Verify Just In page link' : function (browser) {
        browser
            .url(browser.launch_url + '/news')
      
            // Wait 10 seconds for page to load
            .waitForElementVisible('body', 10000)

            // Click on Just In link
            .element('css selector', '#container_nav')
            .useXpath()
            .click('.//a[normalize-space()="Just In"]');
            
        browser
      
            // Wait 10 seconds for page to load
            .useCss()
            .waitForElementVisible('body', 10000)
            
            // Verify correct url
            browser.assert.urlEquals('http://www.abc.net.au/news/justin/')
            .end();

            
    }
};