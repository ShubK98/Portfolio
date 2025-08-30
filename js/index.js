//Nav bar toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})



//Contact me toggle

const ConTogg = document.querySelector('.ContactMe');

ConTogg.addEventListener('click', () => {
        document.body.classList.toggle ('Cons-open');
      
    });

 


    // Close the message

    const Crosscloser = document.querySelector('.boicloser');

    Crosscloser.addEventListener('click', () => {
            document.body.classList.toggle ('Closeboi');
    });







    
    
//close contact list on , not on target 
      /*      window.onload=function()
            {
                var hidelist=document.getElementById('conlist');
                var ConMe=document.getElementById('conme')
                document.onclick=function(d)
                {   
                                        
                    if(d.target.id !=='conlist' && d.target.parentNode !=='conlist'  && d.target.id !=='conme'  && d.target.parentNode !=='conme')
                    {
                       
                            document.body.classList.toggle ('Cons-close')   
                       
                        
                    }
                                        
                };
            };      
        */

        //gsap animation
     /*   const scroo = document.querySelector('.section__subtitle--intro')
       

        const tl = new TimelineMax();

        tl.fromTo(scroo,2, {width: "20%"}, {width:"106%" })     */
       

        

// async function showcasePortfolio() {
//     // Helper: sleep for ms milliseconds
//     const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  
//     // 1. Click on (class="boicloser")
//     document.querySelector('.boicloser')?.click();
//     await sleep(1000);
  
//     // 2. Click on class="nav-toggle", 3s delay, click again
//     const navToggle = document.querySelector('.nav-toggle');
//     navToggle?.click();
//     await sleep(3000);
//     navToggle?.click();
//     await sleep(1000);
  
//     // 3. Click on class="ContactMe" div
//     const contactMe = document.querySelector('.ContactMe');
//     contactMe?.click();
//     await sleep(1000);
  
//     // 4. Hover over all <li> in id="conlist" one by one, with delay
//     const conlistItems = document.querySelectorAll('#conlist li');
//     for (const li of conlistItems) {
//       li.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
//       await sleep(1000);
//       li.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));
//     }
  
//     // 5. Click on class="ContactMe" div again
//     contactMe?.click();
//     await sleep(1000);
  
//     // 6. Scroll to section class="my-services", stay 3s
//     const myServices = document.querySelector('.my-services');
//     myServices?.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     await sleep(3000);
  
//     // 7. Scroll to next section class="about-me"
//     const aboutMe = document.querySelector('.about-me');
//     aboutMe?.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     await sleep(1500);
  
//     // 8. Scroll to next section class="Myres"
//     const myRes = document.querySelector('.Myres');
//     myRes?.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     await sleep(1500);
  
//     // 9. Hover over both anchor tags with class="buttn" in Myres, alternately
//     const buttns = myRes ? myRes.querySelectorAll('.buttn') : [];
//     for (let i = 0; i < 2; i++) { // alternate twice
//       for (const btn of buttns) {
//         btn.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
//         await sleep(1000);
//         btn.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));
//       }
//     }
  
//     // 10. Scroll to next section class="my-work"
//     const myWork = document.querySelector('.my-work');
//     myWork?.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     await sleep(1500);
  
//     // 11. Scroll to the footer
//     const footer = document.querySelector('footer');
//     footer?.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     await sleep(1500);
  
//     // 12. Hover over all li in class="social-list" one by one
//     const socialLis = document.querySelectorAll('.social-list li');
//     for (const li of socialLis) {
//       li.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
//       await sleep(1000);
//       li.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));
//     }
  
//     // 13. 2s delay and click on anchor tag class="upp"
//     await sleep(2000);
//     document.querySelector('a.upp')?.click();
//   }
  
//   showcasePortfolio();
const btn = document.getElementById('toggleBtn');
const section = document.getElementById('tableauSection');
let isExpanded = false;

// On page load collapsed correctly
section.classList.add('collapsed');

btn.addEventListener('click', () => {
  if (!isExpanded) {
    section.classList.remove('collapsed');
    section.classList.add('expanded');

    // Explicitly set height to scrollHeight for transition effect
    section.style.height = section.scrollHeight + 'px';

    // After transition ends, reset height to auto for flexible content height
    section.addEventListener('transitionend', () => {
      if (section.classList.contains('expanded')) {
        section.style.height = 'auto';
      }
    }, { once: true });

    btn.textContent = 'Hide Dashboards';
  } else {
    // Start collapse animation by setting height to current height,
    // then to zero, forcing transition
    section.style.height = section.scrollHeight + 'px';
    void section.offsetHeight;  // Force repaint
    section.style.height = '0px';

    section.classList.remove('expanded');
    section.classList.add('collapsed');

    btn.textContent = 'Show Dashboards';
  }
  isExpanded = !isExpanded;
});





  document.getElementById('automate-link').onclick = function(e) {
    e.preventDefault();
    showcasePortfolio();
  };

  async function showcasePortfolio() {
    // Helper: sleep for ms milliseconds
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  
    // 1. Click on (class="boicloser")
    document.querySelector('.boicloser')?.click();
    await sleep(650);
    // await sleep(650);
  
    // 2. Click on class="nav-toggle", 3s delay, click again
    const navToggle = document.querySelector('.nav-toggle');
    navToggle?.click();
    await sleep(350);
    navToggle?.click();
    await sleep(350);
  
    // 3. Click on class="ContactMe" div
    const contactMe = document.querySelector('.ContactMe');
    contactMe?.click();
    await sleep(350);
  
    // 4. Hover over all <li> in id="conlist" one by one, with delay
    const conlistItems = document.querySelectorAll('#conlist li');
    for (const li of conlistItems) {
        li.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
        await sleep(300);
        li.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));
    }
  
    // 5. Click on class="ContactMe" div again
    contactMe?.click();
    await sleep(400);
  
    // ⬇ REPLACEMENT for steps 6 - 12: Smooth scroll to footer, 4.5s
    const footer = document.querySelector('footer');
    if (footer) {
        footer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        await smoothScrollToFooter(5000); // ensure the scroll takes at least 4.5s
    }

    // 13. 2s delay and click on anchor tag class="upp"
    await sleep(3800);
    document.querySelector('a.upp')?.click();

    // 14. Run the msgboio animation on .boio element
    const boioElement = document.querySelector('.boio');
    if (boioElement) {
        boioElement.classList.add('msgboio-animate');
    }

    const Crosscloser = document.querySelector('.boicloser');
            document.body.classList.toggle ('Closeboi');
}



async function smoothScrollToFooter(duration = 7000) {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const startY = window.scrollY;
    const endY = footer.getBoundingClientRect().top + window.scrollY;
    const distance = endY - startY;

    let startTime = null;

    return new Promise(resolve => {
        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            window.scrollTo(0, startY + distance * progress);
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                resolve();
            }
        }
        requestAnimationFrame(step);
    });
    

    

}

  // showcasePortfolio();