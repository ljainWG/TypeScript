// datatypes in js :
// datatypes in ts : datatypes in js + any, unknown, never, enum, tuple

// in ts if we have large n umber we can seprate them with underscore
let sales: number = 123_4567_89;
let is_published: boolean = true;

// also in ts we dont have to specify datatype always, it can be understand by ts compiler with his intelligene, and still remain static types
let heading = "this is a typescript tutorial";

// any 
let level;
level = 1;
level = "hi";
// in this case dataype of level is dynamic, but this is againt the whole idea of ts to make js a static typed

// function render_1(document){
//     console.log(document);
// }
// we can make it work without error by way1- turning strict: false in tsconfig.json file way2- strict: true, noImplicitAny:false

function render_2(document: any, age : number){
    console.log(document);
    console.log(age);
}
