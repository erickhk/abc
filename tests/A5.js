// 5 Verify that video loads and appears successfully
module.exports = {
    'Verify video load' : function (browser) {
        browser
            .url(browser.launch_url + '/news/2017-02-09/weatherill-promises-to-intervene-dramatically/8254908')
      
            // Wait 10 seconds for page to load
            .waitForElementVisible('body', 10000)
            
            // And another 10 seconds for video to actually be loaded.
            // If jw player loads correctly, we assume that video is there.
            .waitForElementVisible('.jwdisplay',10000)
            .end();
    }
};