

// async function showcasePortfolio() {
//     // Helper: sleep for ms milliseconds
//     const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  
//     // 1. Click on (class="boicloser")
//     document.querySelector('.boicloser')?.click();
//     await sleep(650);
  
//     // 2. Click on class="nav-toggle", 3s delay, click again
//     const navToggle = document.querySelector('.nav-toggle');
//     navToggle?.click();
//     await sleep(350);
//     navToggle?.click();
//     await sleep(350);
  
//     // 3. Click on class="ContactMe" div
//     const contactMe = document.querySelector('.ContactMe');
//     contactMe?.click();
//     await sleep(350);
  
//     // 4. Hover over all <li> in id="conlist" one by one, with delay
//     const conlistItems = document.querySelectorAll('#conlist li');
//     for (const li of conlistItems) {
//       li.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
//       await sleep(300);
//       li.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));
//     }
  
//     // 5. Click on class="ContactMe" div again
//     contactMe?.click();
//     await sleep(400);
  
//     // 6. Scroll to section class="my-services", stay 3s
//     const myServices = document.querySelector('.my-services');
//     myServices?.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     await sleep(400);
  
//     // 7. Scroll to next section class="about-me"
//     const aboutMe = document.querySelector('.about-me');
//     aboutMe?.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     await sleep(400);
  
//     // 8. Scroll to next section class="Myres"
//     const myRes = document.querySelector('.Myres');
//     myRes?.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     await sleep(400);
  
//     // 9. Hover over both anchor tags with class="buttn" in Myres, alternately
//     const buttns = myRes ? myRes.querySelectorAll('.buttn') : [];
//     for (let i = 0; i < 2; i++) { // alternate twice
//       for (const btn of buttns) {
//         btn.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
//         await sleep(400);
//         btn.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));
//       }
//     }
  
//     // 10. Scroll to next section class="my-work"
//     const myWork = document.querySelector('.my-work');
//     myWork?.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     await sleep(650);
  
//     // 11. Scroll to the footer
//     const footer = document.querySelector('footer');
//     footer?.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     await sleep(650);
  
//     // 12. Hover over all li in class="social-list" one by one
//     const socialLis = document.querySelectorAll('.social-list li');
//     for (const li of socialLis) {
//       li.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
//       await sleep(500);
//       li.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));
//     }
  
//     // 13. 2s delay and click on anchor tag class="upp"
//     await sleep(650);
//     document.querySelector('a.upp')?.click();
//   }
  
//   showcasePortfolio();


//   document.getElementById('automate-link').onclick = function(e) {
//     e.preventDefault();
//     showcasePortfolio();
//   };