const { upperFirst } = require("./upperFirst");
const { toString } = require("./toString");

// Convert the first character of `string` to upper case and remaining to lower case.
const capitalize = (string) => upperFirst(toString(string).toLowerCase());

module.exports = {
    capitalize,
}
