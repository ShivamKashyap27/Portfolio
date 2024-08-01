let menu = document.querySelector('.profile');
let navbar = document.querySelector('.navbar');

menu.onclick = (e) => {
    e.stopPropagation();
    menu.classList.toggle('active');
    navbar.classList.toggle('open');
};

document.onclick = (e) => {
    if(!menu.contains(e.target) && !navbar.contains(e.target)){
        menu.classList.remove('active');
        navbar.classList.remove('open');
    }
}

let typed = new Typed(".msg", {
    strings: ["Frontend Developer", "Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})