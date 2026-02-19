document.addEventListener("DOMContentLoaded", () => {

/* PRELOADER */
window.addEventListener("load", () => {
document.getElementById("preloader").style.display="none";
});

/* MOBILE MENU */
const toggle=document.getElementById("menu-toggle");
const nav=document.getElementById("nav-menu");

toggle.addEventListener("click",()=>{
nav.classList.toggle("active");
});

/* AUDIO CONTROL */
const audios=document.querySelectorAll("audio");

audios.forEach(audio=>{
audio.addEventListener("play",()=>{
audios.forEach(other=>{
if(other!==audio) other.pause();
});
});
});

/* CART SYSTEM */
let cart=[];
const buyBtns=document.querySelectorAll(".buy-btn");
const cartSidebar=document.getElementById("cart-sidebar");
const cartItems=document.getElementById("cart-items");
const cartTotal=document.getElementById("cart-total");

buyBtns.forEach(btn=>{
btn.addEventListener("click",()=>{
const card=btn.parentElement;
const name=card.querySelector("h3").innerText;
const price=parseInt(card.querySelector(".price").innerText.replace("$",""));

cart.push({name,price});
updateCart();
cartSidebar.classList.add("active");
});
});

function updateCart(){
cartItems.innerHTML="";
let total=0;

cart.forEach(item=>{
const li=document.createElement("li");
li.textContent=item.name+" - $"+item.price;
cartItems.appendChild(li);
total+=item.price;
});

cartTotal.textContent="Total: $"+total;
}

/* CHECKOUT */
document.getElementById("checkout-btn").addEventListener("click",()=>{
if(cart.length===0){
alert("Cart is empty.");
return;
}
alert("Checkout successful (Demo).");
cart=[];
updateCart();
cartSidebar.classList.remove("active");
});

/* CONTACT FORM */
document.getElementById("contact-form").addEventListener("submit",(e)=>{
e.preventDefault();
alert("Message sent successfully.");
e.target.reset();
});

/* BACK TO TOP */
const back=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{
if(window.scrollY>400){
back.style.display="block";
}else{
back.style.display="none";
}
});

back.addEventListener("click",()=>{
window.scrollTo({top:0,behavior:"smooth"});
});

/* YEAR */
document.getElementById("year").textContent=new Date().getFullYear();

});
