//The functaion that a a param x will always written y is basically pure function


//This exampledont satisy thepure function
let name1 = "Divya"
function salute1(){
    return `Hello ${name1}`
}

salute1();//Divya

name1="Rani";
salute1();// "Rani"



// satisfyes the pure funtion defination

function salute2(name2){
    return `Hello ${name2}`
} 
salute('kivi');