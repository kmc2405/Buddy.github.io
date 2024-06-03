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

    if(scrollTop > 4270) {
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
      }

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
    if(scrollTop >= 7800) {
        section3.classList.add('active');
        section3.style.opacity = 1;
    }
    else if(scrollTop <= 7400) {
        section3.style.opacity = 0;
    }
    if(scrollTop >= 17000) {
        section3.style.opacity = 0;
    }

    if(scrollTop >= 17400) {
        logoImg.src = "./img/logo_black.png";
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
            let keyword5 = document.querySelector('.keyword_5');
            let keyword6 = document.querySelector('.keyword_6');
            let keyword7 = document.querySelector('.keyword_7');

              if (scrollTop3 >= 8200 && scrollTop3 <= 9500) {
                let opacity = (scrollTop3 - 8200) / (9500 - 8200);
                keyword1.style.opacity = opacity;
              } else if (scrollTop3 < 8200) {
                keyword1.style.opacity = 0;
              } else {
                keyword1.style.opacity = 1;
              }

              if (scrollTop3 >= 8750 && scrollTop3 <= 9300) {
                let opacity = (scrollTop3 - 8750) / (9300 - 8750);
                keyword2.style.opacity = opacity;
              } else if (scrollTop3 < 8750) {
                keyword2.style.opacity = 0;
              } else {
                keyword2.style.opacity = 1;
              }

              if (scrollTop3 >= 9500 && scrollTop3 <= 10800) {
                let opacity = (scrollTop3 - 9500) / (10800 - 9500);
                keyword3.style.opacity = opacity;
              } else if (scrollTop3 < 9500) {
                keyword3.style.opacity = 0;
              } else {
                keyword3.style.opacity = 1;
              }

              if (scrollTop3 >= 8300 && scrollTop3 <= 16000) {
                let opacity = (scrollTop3 - 8300) / (16000 - 8300);
                let scale = 1 + (scrollTop3 - 8300) / (4800);
                keyword4.style.opacity = opacity;
                keyword4.style.transform = `scale(${scale})`;
              } else if (scrollTop3 < 8300) {
                keyword4.style.opacity = 0;
              } else {
                keyword4.style.opacity = 1;
              }

              if (scrollTop3 >= 10100 && scrollTop3 <= 12500) {
                let opacity = (scrollTop3 - 10100) / (12500 - 10100);
                keyword5.style.opacity = opacity;
              } else if (scrollTop3 < 10100) {
                keyword5.style.opacity = 0;
              } else {
                keyword5.style.opacity = 1;
              }

              if (scrollTop3 >= 12100 && scrollTop3 <= 14000) {
                let opacity = (scrollTop3 - 12100) / (14000 - 12100);
                keyword6.style.opacity = opacity;
              } else if (scrollTop3 < 12100) {
                keyword6.style.opacity = 0;
              } else {
                keyword6.style.opacity = 1;
              }

              if (scrollTop3 >= 10500 && scrollTop3 <= 15500) {
                let opacity = (scrollTop3 - 10500) / (15500 - 10500);
                keyword7.style.opacity = opacity;
              } else if (scrollTop3 < 10500) {
                keyword7.style.opacity = 0;
              } else {
                keyword7.style.opacity = 1;
              }

        })
 