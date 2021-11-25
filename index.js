//Dependencies
const Chalk = require("chalk")
const Find = require("find")

//Variables
const Self_Args = process.argv.slice(2)

//Main
if(!Self_Args.length){
    console.log("node index.js <pattern>")
    process.exit()
}

Self_Args[0] = new RegExp(Self_Args.slice(0).join(" "))

const files_found = Find.fileSync(Self_Args[0], __dirname)

if(!files_found.length){
    console.log("No files found.")
}else{
    for( i in files_found ){
        console.log(Chalk.redBright(files_found[i]))
    }
}

process.exit()
