"use strict";

async function run() {  
    const query = Host.inputString();
    Host.outputString(`The answer to ${query} is 42.`);
}

module.exports = { run };