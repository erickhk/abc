// 7 Verify that the audio player loads successfully when you load url
module.exports = {
    'Verify that audio player loads correctly' : function (browser) {
        browser
            .url('https://radio.abc.net.au/programitem/peB3zwlexQ?play=true')

            // Wait 10 seconds for page to load
            .waitForElementVisible('body', 10000);

        // Check that there is a background image (media loads successfully)
        browser.expect.element('.rp__playingItem__hero__primary__image').to.have.css('background-image');
        
        browser.useCss().waitForElementVisible('body', 10000).end();
    }
};