// 스크롤 이벤트
window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    let logoImg = document.getElementById('logo_img')
    let header = document.querySelector('header')
    let menu = document.querySelectorAll('li')

    let bgImg = document.getElementById('bg_img')
    let intro = document.querySelector('.section_1 video')
    let article1 = document.querySelector('article.design_0')
    let article2 = document.querySelector('article.plan')
    let article3 = document.querySelector('article.naming')
    let plan = document.querySelector('.plan')
    let planImg = document.querySelector('.plan_img')
    let comment4 = document.querySelectorAll('.comment4')
    let section3 = document.querySelector('.section_3 .keyword')
    console.log(scrollTop);

    let img1 = document.querySelector('.plan_1');
    let img2 = document.querySelector('.plus');
    let img3 = document.querySelectorAll('.comment2');

    let scrollTop2 = window.pageYOffset || document.documentElement.scrollTop;
    let scaleValue = Math.max(1 - (scrollTop2 - 4270) / 420, 0);

    let circles = document.querySelectorAll('.circle');
    let circles2 = document.querySelectorAll('.circle2');

    if(scrollTop >= 950) {
        header.classList.add('active');
        menu.forEach(item => {
            item.classList.add('active')
        })
    }
    else if(scrollTop <= 950) {
        header.classList.remove('active');
        menu.forEach(item => {
            item.classList.remove('active')
        })
    }
    if(scrollTop >= 600) {
        intro.style.display = "block";
    }
    else if(scrollTop <= 300) {
        intro.style.display = "none";
    }
    if(scrollTop >= 1100) {
        bg_img.style.display = "block";
    }
    else if(scrollTop <= 900) {
        bg_img.style.display = "none";
    }
    if(scrollTop >= 2160) {
        plan.style.display = "block";  
    }
  
    else if(scrollTop <= 1900) {
        plan.style.display = "none";
    }
    if(scrollTop >= 2192) {
      logoImg.src = "./img/logo_green.svg";  
    }

    else if(scrollTop <= 2192) {
      logoImg.src = "./img/logo.svg";;
    }
    if(scrollTop >= 2950) {
        article1.style.display = "block";
        
    }
    else if(scrollTop <= 2000) {
        article1.style.display = "none";
    }
    if(scrollTop >= 3500) {
        planImg.style.display = "block";  
    }
  
    else if(scrollTop <= 2900) {
        planImg.style.display = "none";
    }

    /*if(scrollTop > 4270) {
        document.addEventListener('scroll', function() {
            img1.style.transform = `scale(${scaleValue})`;
            img2.style.transform = `scale(${scaleValue})`;
            img3.forEach((item) => {
                item.style.transform = `scale(${scaleValue})`;
            }) 
          }); 
    } else {
            img1.style.transform = 'scale(1)';
            img2.style.transform = 'scale(1)';
            img3.forEach((item) => {
                item.style.transform = 'scale(1)';
            });
      }*/

    if(scrollTop >= 4100) {
        comment4.forEach((item) => {
            item.style.display = "block";
        });
    }
    else if(scrollTop <= 4000) {
        comment4.forEach((item) => {
            item.style.display = "none";
        });
    }
    if(scrollTop >= 5350) {
        article3.style.opacity = 1;
    }
    else if(scrollTop <= 5000) {
        article3.style.opacity = 0;
    }
    if(scrollTop >= 6100) {
      circles.forEach(item => {
        item.classList.add('active')
    })
    }
    else if(scrollTop <= 6000) {
      circles.forEach(item => {
        item.classList.remove('active')
    })
    }
    if(scrollTop >= 6350) {
      circles2.forEach(item => {
        item.classList.add('active')
    })
    }
    else if(scrollTop <= 6250) {
      circles2.forEach(item => {
        item.classList.remove('active')
    })
    }
    if(scrollTop >= 7800) {
        section3.classList.add('active');
        section3.style.opacity = 1;
    }
    if(scrollTop >= 13890) {
        section3.style.opacity = 0;
    }       
})

// 스크롤 애니메이션
    window.onscroll = ()=>{
        /* 화살표 스케일 */
        let arrowImg = document.querySelector('.arrow');
        let viewportHeight = window.innerHeight;
        let length = arrowImg.getBoundingClientRect().top;
        let length2 = viewportHeight - length;
        let imgHeight = arrowImg.clientHeight;
        let scrollTop = window.scrollY;
    
        let scrollRate = length2/imgHeight * 100;

        /* plan_img 스케일 
        let parentDiv = document.querySelector('.plan_img');
        let viewportHeight = window.innerHeight;
        let length = arrowImg.getBoundingClientRect().top;
        let 스크롤이넘어간정도 = viewportHeight - length;
        let imgHeight = arrowImg.clientHeight;
    
        let scrollRate = 스크롤이넘어간정도/imgHeight * 100;*/

        if(length2/imgHeight * 100 <0){
            scrollRate = 0;
        }else if(length2/imgHeight * 100 > 100){
            scrollRate = 100;
        }
        console.log(scrollRate);

        /*const childDiv = document.querySelector('.child_div');*/
        arrowImg.style.transform = `scale(${scrollRate/100})`;
    }

        // parallex scroll opacity 
        document.addEventListener('scroll', function() {
            let scrollElement = document.querySelector('.scroll')
            let scrollTop3 = window.pageYOffset || document.documentElement.scrollTop;
            let scaleValue = Math.max(1 - (scrollTop3 - 7300) / 400, 0);

            let keyword1 = document.querySelector('.keyword_1');
            let keyword2 = document.querySelector('.keyword_2');
            let keyword3 = document.querySelector('.keyword_3');
            let keyword4 = document.querySelector('.keyword_4');

              if (scrollTop3 >= 8619 && scrollTop3 <= 10500) {
                let opacity = (scrollTop3 - 8619) / (9900 - 8619);
                keyword1.style.opacity = opacity;
              } else if (scrollTop3 < 8619) {
                keyword1.style.opacity = 0;
              } else {
                keyword1.style.opacity = 1;
              }

              if (scrollTop3 >= 9500 && scrollTop3 <= 10800) {
                let opacity = (scrollTop3 - 9500) / (10800 - 9500);
                keyword2.style.opacity = opacity;
              } else if (scrollTop3 < 9500) {
                keyword2.style.opacity = 0;
              } else {
                keyword2.style.opacity = 1;
              }

              if (scrollTop3 >= 10800 && scrollTop3 <= 12100) {
                let opacity = (scrollTop3 - 10800) / (12100 - 10800);
                keyword3.style.opacity = opacity;
              } else if (scrollTop3 < 10800) {
                keyword3.style.opacity = 0;
              } else {
                keyword3.style.opacity = 1;
              }

              if (scrollTop3 >= 12100 && scrollTop3 <= 13400) {
                let opacity = (scrollTop3 - 12100) / (13400 - 11700);
                //let scale = 1 + (scrollTop3 - 11700) / (4800);
                keyword4.style.opacity = opacity;
                //keyword4.style.transform = `scale(${scale})`;
              } else if (scrollTop3 < 12100) {
                keyword4.style.opacity = 0;
              } else {
                keyword4.style.opacity = 1;
              }

        })
 