const messages = require("./error.messages");
// could not overwrite forEach method, because jest unable to start
module.exports = function createForEachCustomFunction(Object) {
    Array.prototype.forEachCustom = function forEachCustom(callback/*, thisArg*/) {
        // Could not test this functionality,
        // because node runs this code in global context
        // but it is nessesary to check if this is defined;
        if (this == null) {
            throw new Error(messages.THIS_IS_NULL);
        }

        const innerList = Object(this);

        if (typeof callback !== 'function') {
            throw new TypeError(messages.NO_CALLBACK);
        }

        console.log(arguments);

    }
}



