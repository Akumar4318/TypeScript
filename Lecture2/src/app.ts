let a=34
let nameo="aman"
let firstName: string="Abhishek kuamr"
let c;

// union type datatype --> multiple data type

let surname:string | number

surname=23
surname="suraj"




// function return implicitly such as void ,Number , String

//-> return void
const mult =(n:number,m:number)=>{

    console.log(n*m)
 
}

//-> return number
const mult1 =(n:number,m:number)=>{

   
    return (n*m)
}
//_> reutnr string

const mult2 =(n:number,m:number)=>{

    console.log(n*m)
    return String(n*m)
}


// we can define at the return -->explecitly
// here we explecitly return a number
const mult3 =(n:number,m:number):number=>{

    console.log(n*m)
    return (n*m)
}


//LINK -  TypeKeywrod and Interface Keyword

type userName=string | number

let a1:userName="amab"


type add=(a:number , b: number) => number;


let func:add=(a,b)=>{

    console.log(a+b)
    return a+b
}


type fullName=(firstName:string,lastName:string)=>string;

const sayName=(firstName:string,lastName:string)=>{

    return firstName+lastName;
}

console.log(sayName("aman"," yadav"))

//SECTION - 


//SECTION -  Array in typeScript

const arr:number[]=[1,2,3,5,]
const arr1: string[]=["aman","kumar"]
const bool:boolean[]=[true,false]

const arr2:Array<string>=["aman","kumar"]
const arr3:Array<number>=[1,2,4]
const arr4:Array<string | number>=[1,2,4,"aman"]

//NOTE - A tuple in TypeScript is a fixed-length array where each element has a specific type and position.
// So unlike a regular array (which can hold multiple values of the same type), a tuple lets you define exactly what types are allowed at each position.

let tuple:[number,string,number]=[1,"aman",4]
// let tuple2:[number,string]=[1,3,"suraj"] this is wrong it should be fixed size and the order of type should be same


//SECTION - Object

//NOTE - janha janha class or object create karna hai wanha interface use karenge type se bhi kar shakate par interface ke sath hum extends bhi kar shakte hai

//--> with type 
type Obj={
    name:string;
    age:number;
    gender:boolean; // true-- male  false -- female

}
const obj:Obj={
    name:"aman",
    age:34,
    gender:true
}

//--> with interface we can extend 

interface Person{
    name:string;
    age:number;
    gender?:boolean;
    
}

interface Personlanguage extends Person{
    motherToung:string;
}

const person:Person={
    name:"suraj",
    age:23,
    
}

// extend 

const person1:Personlanguage={
    name:"abhishek",
    age:25,
    motherToung:"hindi"
}
console.log(person)

console.log(person1)