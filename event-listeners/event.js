function time() {
    const button = document.querySelector(".button-click");
    const pTag = document.getElementById("demo");
    button.addEventListener('click',()=> {
        setInterval(()=>{
            pTag.innerText = Date();
        },1000);
       
    })
}

