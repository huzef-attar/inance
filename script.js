let menulist =document.getElementById("menulist");
let main =document.getElementsByClassName("main");

let count=0;
function togglemenu(){
    if(count==0){
    menulist.style.display="block";
    count=1;
    }else if(count==1){
        menulist.style.display="none";
        count=0;
    }
}
