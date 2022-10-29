var  openBtn =document.getElementById("openBtn");
var ktba2 =document.querySelector(".ktba2");
openBtn.addEventListener("click",function(){
   ktba2.classList.toggle('active');
})



var  btnplat =document.getElementById("btnplat");
var Plat =document.querySelector(".Plat");
var produit =document.querySelector(".produit");
// Plat.classList.add('plat');
btnplat.addEventListener("click",function(){
   produit.classList.toggle('active');
    Plat.classList.toggle('Plat');
   // alert("clicked");
})


