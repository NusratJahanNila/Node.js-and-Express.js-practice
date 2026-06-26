//Built in Modules : module already exist on the node
// const os= require ('os')
// console.log("OS Platform", os.platform());
// console.log("Free Memory", os.freemem());

//Local Modules: module that we build in one page and import in other to use 
// const add = require("./math_Module").add
// console.log("addition=", add(5,7))

//Third Party Modules
//npm install chalk
import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));