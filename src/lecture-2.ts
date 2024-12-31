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


let numbers_js = [1,2,3,'4'];   // js array can have any datatype in it any they can be different as well
// this above numbers_js variable has datatype of number | string
// let numbers_ts_1: number [] = [1,2,3,'4']; // to restrict this above one we do like this
let numbers_ts_2: number [] = [1,2,3,4];
// we can remove explicitly number if all elements are number
let numbers_ts_3 = [1,2,3,4];

let anyValue = [];  // datatype is any
anyValue[0]=1;
anyValue[2]="typescript";

// tuples
// fixed length array where each element has a particular type, used when working with pair of values
let user: [number, string] = [1,"typescript"];
// let user_2: [number, string] = [1,"typescript",0];  
// let user_3: [number, string] = [1];

// let account: [number, string] = [];  //error
let account: [number, string] = [1,"typescript"];
account.push(1);            // we can push new elements
// console.log(account);   
// this is some gap or bugs in ts, which will be removed in future
