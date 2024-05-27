// 스크롤 이벤트
window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    let logoImg = document.getElementById('logo_img')
    let header = document.querySelector('header')
    let menu = document.querySelectorAll('li')

    let bgImg = document.getElementById('bg_img')
    let intro = document.querySelector('.section_1 video')
    let article1 = document.querySelector('article.design_0')
    console.log(scrollTop);

    if(scrollTop >= 950) {
        logoImg.src = "./img/logo_yellow.png";
        header.classList.add('active');
        menu.forEach(item => {
            item.classList.add('active')
        })
    }
    else if(scrollTop <= 950) {
        logo_img.src = "./img/logo.png"
        header.classList.remove('active');
        menu.forEach(item => {
            item.classList.remove('active')
        })
    }
    if(scrollTop >= 600) {
        intro.style.display = "block";
    }
    else if(scrollTop <= 500) {
        intro.style.display = "none";
    }
    if(scrollTop >= 1670) {
        bg_img.style.display = "block";
    }
    else if(scrollTop <= 900) {
        bg_img.style.display = "none";
    }
    if(scrollTop >= 2900) {
        article1.style.display = "block";
    }
    else if(scrollTop <= 2200) {
        article1.style.display = "none";
    }
})