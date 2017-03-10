
// C1, C2, C3 Verify the key/value pairs from the following json output
module.exports = {
    'Verify json' : function (browser) {
        browser
        
            // Provided program no longer has Listen Now option so picked a different program
            .url(browser.globals['json_base_url'] + browser.globals['json_file_path'])

            // Wait 10 seconds for page to load
            .waitForElementVisible('body', 10000);
        
        var schema = {
            "description": "ABC JSON Test",
            "type": "object",
            "properties": {
                "entity": { "type": "string" },
                "arid": { "type": "string" },
                "title": { "type": "string" },
                "mini_synopsys": { "type": "string" },
                "short_synopsis": { "type": "string" },
                "medium_synopsys": { "type": "string" },
                "created_utc": { "type": "string" },
                "last_updated_utc": { "type": "string" },
                "service_airport_code": {}
            },
            "required": ["entity","arid","title"]
        };

        // Actual response is just json but browser will format it to have body and pre tags. Perhaps nightwatch not the best way to process json?
        browser.getText('pre', function(result) {
            var Validator = require('jsonschema').Validator;
            var v = new Validator();
            var instance = 1;
            const assert = require('assert');
            assert.equal(v.validate(JSON.parse(result.value), schema).errors,'','JSON does not conform to schema');
        });
        
        browser.end();
    }
};