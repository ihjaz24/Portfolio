const menuBtn = document.querySelector('.nav-btn');
const navLinks = document.querySelectorAll('.nav-item')
menuBtn.addEventListener('click', () =>{
    document.body.classList.toggle('nav-open')
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})