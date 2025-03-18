// if called directly we willget window object


//1. talk without params
function talk (){
    return `I am ${this.name}`
} //undefined (in browswer)


const me = {
    name: "Hija",
    talk
}

const you = {
    name:"Sree",
    talk
}


const he = {
    name: "Ram",
    talk
}

you.talk(); // gives "Im sree"
me.talk(); // gives Imhija


//2. talk with params
function talk(lang){
    if(lang === "en"){
        return `I am ${name}`
    }
    else if( lang === "kn") {
        return  `Naanu ${name}`
    }
}

const me = {
    
}



//   #  BIND
//it takes a value that overrides the current function value

 // this passes value the name as hija to talk func
const meTalk = talk.bind(me);
 // this passes the name as sree
const youTalk = talk.bind(you);

 // this paseses the name as ram
const heTalkinBIND = talk.bind(he);
// returns "I amRam" when we use heTalkinBind()

//bind return a function meTalk, to run it we must use meTalk()





// CALL
//it directly takes as function

const heTalkinCALL = talk.call(he);
// returns " I am Ram"



// APPLY