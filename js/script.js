const h1=document.querySelector('.heading-primary');
console.log(h1);
const currentYear=document.querySelector('.year');
const dataNow=new Date().getFullYear();
console.log(dataNow);
currentYear.textContent=dataNow;
// navgiator
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});


const allLinkes=document.querySelectorAll('a:link');
 allLinkes.forEach((link)=>{
   link.addEventListener('click',(e)=>{
    e.preventDefault();
    const href=link.getAttribute('href');

    if(href=="#")
     window.scrollTo({
       top:'0',
       behavior:'smooth'
    })

    else if (href!="#" && href.startsWith("#")) {
        const sectionEl=document.querySelector(href);
         sectionEl.scrollIntoView( {behavior:'smooth' })
        }
      })
})
// const sectionHeroEl = document.querySelector(".section-hero");
// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);

//     if (ent.isIntersecting === false) {
//       document.body.classList.add("sticky");
//     }

//     if (ent.isIntersecting === true) {
//       document.body.classList.remove("sticky");
//     }
//   },
//   {
//     // In the viewport
//     root: null,
//     threshold: 0,
//     rootMargin: "-80px",
//   }
// );
// obs.observe(sectionHeroEl);

  // const sectionHeroEl=document.querySelector(".section-hero");
  // const obs=new IntersectionObserver(
  // function(entries){
  //   const ent=entries[0];
  //  if(ent.isIntersecting === false)
  //  {
  //   document.body.classList.add('sticky');
  //  } 
  //  if(ent.isIntersecting === true) 
  //  {
  //   document.body.classList.remove('sticky');
  //  }
  // },
  // {
  //   root:null,
  //   threshold:0,
  //   rootMargin:"-80px"
  // })
  // obs.observe(sectionHeroEl);