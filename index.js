
var _           = require('underscore'),
    fs          = require('fs'),
    request     = require('sync-request');

/**
 * get a list of all public npm package names
 *
 * @param {String} [name] (default=all)
 * @return {Array} names (null on failure)
 */
var npmall = function(name){

    var path = '/tmp/';
    var url = 'https://registry.npmjs.org/-/all';
    var packages = null;
    var name = name || null;

    if (!fs.existsSync(path + 'npmall.json')){

        // download names
        var body = request('GET', url).getBody();
        var json = JSON.parse(body);
        var data = _.map(json, function(val){
            return val;
        });
        packages = {data: data};

        // save names
        fs.writeFileSync(path + 'npmall.json', JSON.stringify(packages), 'utf8');

    } else {

        // read names
        var json = JSON.parse(fs.readFileSync(path + 'npmall.json', 'utf8'));
        packages = json;

    }

    // some data
    if (name){
        return _.where(packages.data, { name: name });
    }

    // all data
    return packages.data;

};

module.exports = npmall;

