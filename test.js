var readline = require('node:readline');
var _a = require('node:process'), input = _a.stdin, output = _a.stdout;
var rl = readline.createInterface({ input: input, output: output });
rl.question('What do you think of Node.js? ', function (answer) {
    // TODO: Log the answer in a database
    console.log("Thank you for your valuable feedback: ".concat(answer));
    rl.close();
});
