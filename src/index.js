"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var utils_1 = require("./utils");
var test = "./test.cmd-que.js";
var config = require(test);
var process = require("process");
function watch() {
    utils_1.forEachDir("./", function (p, d) {
        if (!config)
            return true;
        var raw = String.raw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ""], ["", ""])), p);
        return (config.exclude || []).every(function (item) { return !item.test(raw); });
    });
}
console.log(process.cwd(), __dirname);
var templateObject_1;
/*(async function exec() {
    const cwd = process.cwd();
    const map = {
        "\\$FileDir\\$": cwd,
        "\\$FileName\\$": "",
    };

    const mapKeys = Object.keys(map);
    for (let cmd of config.command) {
        cmd = mapKeys.reduce((c, k) => c.replace(new RegExp(k, "g"), map[k]), String.raw`${cmd}`);
        await execute(cmd);
    }
})();*/
