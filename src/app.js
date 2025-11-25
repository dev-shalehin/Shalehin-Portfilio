let navbar = document.querySelector('.navBar');
let navbtn = document.querySelector('.navitagation-btn i')

navbtn.addEventListener('click', () => {
    if(navbar.classList.contains('-right-full') && navbtn.classList.contains('fa-bars')){
        navbar.classList.remove('-right-full')
        navbar.classList.add('right-0')
        navbtn.classList.remove('fa-bars');
        navbtn.classList.add('fa-xmark')
    }else{
        navbar.classList.add('-right-full')
        navbar.classList.remove('right-0')
        navbtn.classList.add('fa-bars');
        navbtn.classList.remove('fa-xmark')
    }
})

// CV Download System

let downloadButton = document.querySelector('.cvdownload--btn');

downloadButton.addEventListener ('click', (e) => {
    e.preventDefault();

    let link = document.createElement('a');
    link.href = './CV/Md Shalehin Resume web.pdf';
    link.download = 'Md Shalehin Resume web.pdf';
    link.click();
})