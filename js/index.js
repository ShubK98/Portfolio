//Nav bar toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

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
        document.body.classList.toggle ('Cons-open')
    });

  
    
//close contact list on , not on target 
   /*         window.onload=function()
            {
                var hidelist=document.getElementById('conlist');
                var ConMe=document.getElementById('conme')
                document.onclick=function(d)
                {
                    if(d.target.id !=='conlist' && d.target.parentNode !=='conlist'  && d.target.id !=='conme'  && d.target.parentNode !=='conme')
                    {
                        document.body.classList.toggle ('Cons-open')    
                    }
                };
            };      */
