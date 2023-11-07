var a=1
function menu_chiq() {
    if (a==0) {
    document.querySelector(".menu").style = "right:-100%"
    a=1
    } else {
    document.querySelector(".menu").style = "right: 0px"    
    a=0
    }
    
    console.log(a);
}
function hover1() {
    document.querySelector(".card12").style="display:flex"
}
function hover12() {
  document.querySelector(".card12").style = "display:none";
}