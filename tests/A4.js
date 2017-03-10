// 4 Verify that on the 'Just In' page, the content per article load correctly
// It has been noted that some articles does not have authors. Based on given requirement, this is a legitimate fail?
module.exports = {
    'Verify articles in Just In page' : function (browser) {
        browser
            .url(browser.launch_url + '/justin/')
      
            // Wait 10 seconds for page to load
            .waitForElementVisible('body', 10000);

        // Iterate for all list item available on screen and check
        browser.elements('css selector', '#main_content ul.article-index li', function(allItems) {
            for (var i=1; i<= allItems.value.length; i++) {
                
                // 1 Title
                browser.expect.element('#main_content ul.article-index li:nth-child(' + i +') h3').to.be.present.visible;

                // 2 Author
                browser.expect.element('#main_content ul.article-index li:nth-child(' + i +') .byline').to.be.present.visible;

                // 3 Timestamp
                browser.expect.element('#main_content ul.article-index li:nth-child(' + i +') p.published .timestamp').to.be.present.visible;

                // 4 Text
                browser.expect.element('#main_content ul.article-index li:nth-child(' + i +') p:not([class])').to.be.present.visible;
            }
        });

        browser.end();
    }
};