// 네비게이션 메뉴 이벤트
let menu = document.querySelectorAll('.scroll_link')
menu.forEach((item) => {
  item.addEventListener('click', (event) => {
      if(event.target.classList.contains('link_1')) {
          window.scrollTo({
            top: 990,
            behavior: 'smooth'
          });
      }
      else if(event.target.classList.contains('link_2')) {
          window.scrollTo({
            top: 2150, 
            behavior: 'smooth'
          });
      }
      else if(event.target.classList.contains('link_3')) {
          window.scrollTo({
            top: 14390, 
            behavior: 'smooth'
          });
      }
      else if(event.target.classList.contains('link_4')) {
        window.scrollTo({
          top: 22200, 
          behavior: 'smooth'
        });
    }
  })
})
  /*links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
}); */
// 스크롤 이벤트
window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    let logoImg = document.getElementById('logo_img');
    let header = document.querySelector('header');
    let menu = document.querySelectorAll('li')

    let bgImg = document.getElementById('bg_img');
    let article1 = document.querySelector('article.design_0');
    let article2 = document.querySelector('article.plan');
    let article3 = document.querySelector('article.naming');
    let plan = document.querySelector('.plan');
    let planImg = document.querySelector('.plan_img');
    let comment4 = document.querySelectorAll('.comment4');
    let section3 = document.querySelector('.section_3 .keyword');
    let section4 = document.querySelector('.section_4')
    let section5 = document.querySelector('.section_5')
    console.log(scrollTop);

    let img1 = document.querySelector('.plan_logo');
    let news = document.querySelector('.news');
    let trend = document.querySelector('.trend');
    let health = document.querySelector('.health');
    let planner = document.querySelector('.planner');
    
    let scrollTop2 = window.pageYOffset || document.documentElement.scrollTop;
    let scaleValue = Math.max(1 - (scrollTop2 - 7253) / 500, 0);

    let circles = document.querySelectorAll('.circle');
    let circles2 = document.querySelectorAll('.circle2');
    let frame = document.querySelector('.frame')

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
    if(scrollTop >= 2400) {
      section3.style.opacity = 1; 
    }

    else if(scrollTop <= 1641) {
      section3.style.opacity = 0;
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

    if(scrollTop > 7253) {
        document.addEventListener('scroll', function() {
          img1.style.transform = `scale(${scaleValue})`;
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
    if(scrollTop >= 6100) {
      circles.forEach(item => {
        item.classList.add('active');
    })
    }
    else if(scrollTop <= 6000) {
      circles.forEach(item => {
        item.classList.remove('active');
    })
    }
    if(scrollTop >= 6350) {
      circles2.forEach(item => {
        item.classList.add('active');
    })
    }
    else if(scrollTop <= 6250) {
      circles2.forEach(item => {
        item.classList.remove('active');
    })
    }
    if(scrollTop >= 7800) {
        section3.classList.add('active');
        section3.style.opacity = 1;
    }
    if(scrollTop >= 13890) {
        section3.style.opacity = 0;
    }
    if(scrollTop >= 14034) {
      section4.style.opacity = 1;
    }
    else if(scrollTop <= 14034) {
      section4.style.opacity = 0;
    }
    if(scrollTop >= 18240) {
      frame.classList.add('active');
    }
    else if(scrollTop <= 18240) {
      frame.classList.remove('active');
    }
    if(scrollTop >= 21672) {
      section5.style.opacity = 1;
    }
    else if(scrollTop <= 21672) {
      section5.style.opacity = 0;
    }
    if(scrollTop >= 22707) {
      news.style.opacity = 1;
    }
    else if(scrollTop <= 22707) {
      news.style.opacity = 0;
    }
    if(scrollTop >= 23958) {
      trend.style.opacity = 1;
    }
    else if(scrollTop <= 23958) {
      trend.style.opacity = 0;
    }
    if(scrollTop >= 24968) {
      health.style.opacity = 1;
    }
    else if(scrollTop <= 24968) {
      health.style.opacity = 0;
    }
    if(scrollTop >= 26322) {
      planner.style.opacity = 1;
    }
    else if(scrollTop <= 26322) {
      planner.style.opacity = 0;
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

        if(length2/imgHeight * 100 <0){
            scrollRate = 0;
        }else if(length2/imgHeight * 100 > 100){
            scrollRate = 100;
        }
        console.log(scrollRate);

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
 