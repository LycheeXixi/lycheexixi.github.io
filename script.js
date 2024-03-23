document.querySelector('.des-button').addEventListener('click', function() {
    window.open('Hongxi_CV.pdf', '_blank');
});

window.addEventListener('scroll', function() {
    var aboutRight = document.querySelector('.about-right');
    var aboutRightPosition = aboutRight.getBoundingClientRect().top;
    console.log(aboutRightPosition)
    var scrollPosition = window.scrollY + this.window.innerHeight;

    if(scrollPosition > aboutRightPosition) {
       aboutRight.classList.add("about-right-anim");
    }
});