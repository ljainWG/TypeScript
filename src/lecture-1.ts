// what is typescript, why to use it, when to use it ?
// how it is different from vanilla js
// benifits if ts : static typing, code completion, refactoring, shorter notations
// static and dynamic types languages - dataype of varibale is decided while coding and cannot be changed later like c, cpp, java, etc, while python, js, ruby are example of dynamically tyoed

// drawbacks of ts : compilation (ts code needs to be compiled first because browser doesn't understand it directly), discipine in coding

// Ts > Js
// every js code is a Ts code but converse it not true

console.log("Hello");

// run command tsc filename.ts to compile the ts file, it will generate the js code for the same ts file
// by default ts compiler is set to target/ generate older ecma js code
// so to target it to latest version of js so that we can use let, const etc other features, we have to configure ts compiler
// configuring ts compiler using command : tsc --init
// after running above command a tsconfig.json file is created we can change the configuration in that file 
// by changing target : xyz to whichever we want depending upon where do we want to deploy our application 
// Modules -> rootDir this is where the source code will be 
// Emit -> outDir this is where the output automated js code will be generated
//      -> removeComments 
//      -> noEmitOnError this enables to generate js code even of ts file has error in it
//      -> sourceMap this enables us to run our code line by line in case of bug and we have to debugg it, it generates a .js.map file, which is for machines, for us we have to create nodejs launch.json file to bug it from debug panel,  and we have to add "preLaunchTask":"tsc: build - tsconfig.json" line, then save it and now we can debug it(ts file/ code) 

//      -> noImplicitReturns check this setting and see what it does, it might be useful ?
//      -> noImplicitAny
//      -> noUnusedLocals
//      -> noUnusedParameters


// we can use command : tsc to compile all code present in root directory or which is set in rootDir of Modules

let age : number = 20;
// age = "lakshay";     // error

if(age<50)
    age+=10;
console.log(age);