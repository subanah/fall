let nav = document.querySelector('#nav');
let test = 0;
window.addEventListener('scroll',function(){
   let top = document.documentElement.scrollTop;
   if(top < test){
      nav.classList.add('active');
   }else{
    nav.classList.remove('active');
   }
   test = top;
});