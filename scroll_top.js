let toTop = document.querySelector("span");
window.onscroll = () => {
    if (this.scrollY >= 900){
        toTop.classList.add("show")
        console.log("value is here");
    }else {
        toTop.classList.remove("show")
    }
};

toTop.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}