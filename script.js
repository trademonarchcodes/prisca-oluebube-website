const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');

if(menuButton&&nav){
  const closeMenu=()=>{
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded','false');
    menuButton.setAttribute('aria-label','Open navigation');
  };
  menuButton.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded',String(open));
    menuButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape') closeMenu();
  });
  document.addEventListener('click',event=>{
    if(!nav.contains(event.target)&&!menuButton.contains(event.target)) closeMenu();
  });
}

const year=document.querySelector('#year');
if(year) year.textContent=new Date().getFullYear();

const revealItems=document.querySelectorAll('.hero-copy,.portrait-stage,.learning-card,.about-grid,.guide-art,.guide-copy,.faq-list details,.contact-inner');
if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:.12});
  revealItems.forEach(item=>{
    item.classList.add('reveal');
    observer.observe(item);
  });
}else{
  revealItems.forEach(item=>item.classList.add('is-visible'));
}
