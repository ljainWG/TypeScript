// objects in ts

// in js we can add fields to object dynamically like objectName.newPropertyAdded = newValue
// but in ts we cannot do so, in ts objects have fixed structure just like we have in java or other languages

// let car = { id: 1};
// car.color = "RED";
// // or like this
// let toy1 : {
//     id: number, name:string
// } = {
//     id : 123
// };
// toy1.name = "Lakshay"
// // or
// let toy2 : {
//     id: number, name:string
// } = {};
// we can remove error by just assigning a empty string to it but it is not a good practise



// so we can do like this, by making optional fields
let employee: {id ?: number, name ?:string, dob ?:Date} = {
    id : 123
};

let employee2: {id ?: number, name ?:string, dob ?:Date} = {};      
employee2.id = 123;
console.log(employee2);
// here is a catch, we have to initailse it always doesn't matter wheather it is empty or not
// beacause if we dont then its datatype will become any in ts while decalring it we have already given it a object datatype

// even this isn't valid
// let toy3 : {
//     id: number, name:string
// };
// toy3.id = 123;
// toy3.name = "Name";


// readonly is used to make one field read only i.e., it cannot be modified after it is intialised, those properties value must we written while declaring and intialising them
// let user_1:{ readonly id?:number, name?:string, dob?: Date}= {  };
// user_1.id=1234;

// let user_2:{ readonly id?:number, name?:string, dob?: Date}= { id: 123};
// user_2.id=1234;

let user_3:{ readonly id?:number, name?:string, dob?: Date}= { id: 123};
console.log(user_3.id);

// methods in object
let user_4: { 
    id?: number, 
    name?: string, 
    dob?: Date, 
    retire?: (date: Date) => void, 
    age?: () => number  // The return type of age will be a number.
} = {
    id: 123,
    name: "XYZ",
    dob: new Date("2002-09-25"),
    retire: (date: Date) => { 
        console.log(date); 
    },
    age: function() {  // Calculate the age
        if (this.dob) {
            const currentDate = new Date();
            const age = currentDate.getFullYear() - this.dob.getFullYear();
            const month = currentDate.getMonth() - this.dob.getMonth();
            if (month < 0 || (month === 0 && currentDate.getDate() < this.dob.getDate())) {
                return age - 1;
            }
            return age;
        }
        return 0; // If dob is undefined, return 0.
    }
};

// Example usage
// console.log(user_4.age()); // Calls the age function and logs the result     // donot know why it is giving error ?
// user_4.retire(new Date()); // Calls the retire function and logs the date    // donot know why it is giving error ?