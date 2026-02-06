const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', ()=>{
  reveals.forEach(el=>{
    const pos = el.getBoundingClientRect().top;
    if(pos < window.innerHeight - 100){
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});

reveals.forEach(el=>{
  el.style.opacity = 0;
  el.style.transform = 'translateY(60px)';
});
