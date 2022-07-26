const validateEmail=email=>{
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return true;
    }
    return false;
}

let ulazi=document.querySelectorAll("input");
let gumb=document.querySelector("button");
let upozorenja=document.querySelectorAll("h4");
gumb.addEventListener("click",()=>{
    if(!validateEmail(ulazi[2].value)){
        ulazi[2].style="color:hsl(0, 100%, 74%); border-width:2px;border-color:hsl(0, 100%, 74%); background-image: url('images/icon-error.svg');background-repeat: no-repeat;  background-size: contain;";
        ulazi[2].placeholder="email@example.com";
        upozorenja[2].style="display:block;";
    }
    else{
        ulazi[2].style="color:hsl(249, 10%, 26%) ; border-width:1px;border-color:hsl(246, 25%, 77%);";
        ulazi[2].value="";
        upozorenja[2].style="display:none;";
    }
    if(ulazi[0].value===""){
        ulazi[0].style="border-width:2px;border-color:hsl(0, 100%, 74%);background-image: url('images/icon-error.svg');background-repeat: no-repeat;  background-size: contain;";
        upozorenja[0].style="display:block;";
    }
    else{
        ulazi[0].style="color:hsl(249, 10%, 26%) ; border-width:1px;border-color:hsl(246, 25%, 77%);";
        ulazi[0].value="";
        upozorenja[0].style="display:none;";
    }
    if(ulazi[1].value===""){
        ulazi[1].style="border-width:2px;border-color:hsl(0, 100%, 74%);background-image: url('images/icon-error.svg');background-repeat: no-repeat;  background-size: contain;";
        upozorenja[1].style="display:block;";
    }
    else{
        ulazi[1].style="color:hsl(249, 10%, 26%) ; border-width:1px;border-color:hsl(246, 25%, 77%);";
        ulazi[1].value="";
        upozorenja[1].style="display:none;";
    }
    if(ulazi[3].value===""){
        ulazi[3].style="border-width:2px;border-color:hsl(0, 100%, 74%);background-image: url('images/icon-error.svg');background-repeat: no-repeat;  background-size: contain;";
        upozorenja[3].style="display:block;";
    }
    else{
        ulazi[3].style="color:hsl(249, 10%, 26%) ; border-width:1px;border-color:hsl(246, 25%, 77%);";
        ulazi[3].value="";
        upozorenja[3].style="display:none;";
    }
});