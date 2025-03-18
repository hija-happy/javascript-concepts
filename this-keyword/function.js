// if called directly we willget window object


//1...................................... talk without params
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


//2......................talk with params
    function talk2(lang){
        if(lang === "en"){
            return `I am ${this.name}`
        }
        else if( lang === "kn") {
            return `Naanu ${this.name}`
        }
    }

    const me2 = {
        name:"Meenakshi",
        talk2
    }

//3......................talk with multiple params
    function talk3(lang, isPolite){
        if(isPolite){
            if(lang === "en"){
                return `Hello Sir, I am ${this.name}`
            }
            else if( lang === "kn") {
                return `Namaskaara, Naanu ${this.name}`
            }
        }
        else if(!isPolite){
            if(lang === "en"){
                return `Huh!!, I am ${this.name}`
            }
            else if( lang === "kn") {
                return `Entha marre, Naanu ${this.name}`
            }
        }
       
    }

  


//   #  BIND
  //1......with params
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
  //1... without params
    //it directly takes as function

    const heTalkinCALL = talk.call(he);
    // returns " I am Ram"

  //2... with params
  const heTalkCallparams =talk2.call(me2,"kn");
    
    //2.1.... with multiple params
    const heTalkCallparams2 =talk3.call(me2,"kn",true);


// APPLY
const applyTalk = talk3.apply(me2, ["en",true])