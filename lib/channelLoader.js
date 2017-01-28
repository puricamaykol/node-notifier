const moduleLoader = require("mod-loader");
const path = require("path   ");

let channels = {};

moduleLoader.loadModulesSync({
    baseDirectory: path.join(__dirname,"channels"),//Path to start lstat(current directory)
    moduleHolder: channels,//Holder which will receive require(..)
    doNotInclude: [ //array of directories, or files to exclude
        "index.js"//exclude self to avoid maximum stack call exceed :)
    ]
},(moduleLoaded) => {
    return require(moduleLoaded);
});

module.exports =  channels;