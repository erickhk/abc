module.exports = {
    'Verify load of news page' : function (browser) {
        browser
            .url(browser.launch_url + '/news')
      
            // 1 Verify that the page loads successful (10 second max wait)
            .waitForElementVisible('body', 10000);

        browser
            // 2 Verify that News banner loads (should be present immediately once page loads)
            .expect.element('#container_header').to.be.present.visible;

        browser
            .end();
    }
};