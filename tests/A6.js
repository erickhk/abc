// 6 Verify that Image Gallery sucessfully loads and image appears correctly
module.exports = {
    'Verify image gallery' : function (browser) {
        browser
            .url(browser.launch_url + '/news/2017-02-10/abc-open-pic-of-the-week/8256256')
      
            // Wait 10 seconds for page to load
            .waitForElementVisible('body', 10000);

        // Check that the main image has attribute src and has non-zero height and width
        browser.expect.element('.gallery .imageGallery .active img').to.have.attribute('src');
        browser.expect.element('.gallery .imageGallery .active img').to.have.attribute('height').which.does.not.equal(0);
        browser.expect.element('.gallery .imageGallery .active img').to.have.attribute('width').which.does.not.equal(0);

            // Check to see that each gallery image has attribute src and has non-zero height and width
        browser.elements('css selector', '.gallery .lSGallery li img', function(allItems) {
            for (var i=1; i<= allItems.value.length; i++) {
                browser.expect.element('.gallery .lSGallery li:nth-child(' + i +') img').to.have.attribute('src');
                browser.expect.element('.gallery .lSGallery li:nth-child(' + i +') img').to.have.attribute('height').which.does.not.equal(0);
                browser.expect.element('.gallery .lSGallery li:nth-child(' + i +') img').to.have.attribute('width').which.does.not.equal(0);
            }
        }).end();
    }
};