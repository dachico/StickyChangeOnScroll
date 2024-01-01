window.addEventListener("scroll", function(){
    const scrolled = window.scrollY;
    const header = this.document.querySelector(".header");
    var appear = this.document.querySelector(".appear");
    
    if (scrolled > 790){
        header.classList.add("appear");
        appear.innerHTML = "<h1>changed sticky top bar</h1>";
        console.log(scrolled)
    }else if (scrolled < 790){
        header.classList.remove("appear");
        appear.innerHTML = "<h1>top bar</h1>"
    }
})