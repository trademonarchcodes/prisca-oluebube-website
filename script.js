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

// Keep the page calm and fully visible; no scroll-triggered reveal animation.
