window.addEventListener('scroll', () => { 

    console.log(window.scrollY);

    if(window.scrollY < 650) {
        document.getElementById('toBottom').style.display = "block";
        document.getElementById('toTop').style.display = "none";
    } else if(window.scrollY > 650) {
        document.getElementById('toTop').style.display = "block";
        document.getElementById('toBottom').style.display = "none";
    }
});