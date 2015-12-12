
var _           = require('underscore'),
    fs          = require('fs'),
    request     = require('sync-request');

/**
 * get a list of all public npm package names
 *
 * @param {Void}
 * @return {Array} names
 */
var npmall = function(){

    var path = '/tmp/npmall.json';
    var url = 'https://registry.npmjs.org/-/all';
    var names = null;

    if (!fs.existsSync(path)){

        // download names
        var body = request('GET', url).getBody();
        var json = JSON.parse(body);
        var names = _.map(json, function(val, key){
            return key;
        });

        // save names
        fs.writeFileSync(path, JSON.stringify(names), 'utf8');

    } else {

        // read names
        names = JSON.parse(fs.readFileSync(path, 'utf8'));

    }

    // done
    return names;

};

module.exports = npmall;

