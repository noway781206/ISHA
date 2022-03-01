{
  
 
function menuOffset(){

    
    if (window.scrollY > topBar.offsetHeight){
        menu.classList.add('stiky');
        topBar.classList.add('stikyBar');        
          
        
    }else if(window.scrollY <= topBar.offsetHeight){
        
        menu.classList.remove('stiky')
        topBar.classList.remove('stikyBar');   
    }
    
    
    // if (window.scrollY > menu.offsetTop){
    //     menu.classList.remove('stiky')    
    // }   
  
    
    
    
};
function throttle(func, timeout = 250) {
    let last;
    let timer;
   
    return function () {
      const context = this;
      const args = arguments;
      const now = +new Date();
   
      if (last && now < last + timeout) {
        clearTimeout(timer)
        timer = setTimeout(function () {
          last = now
          func.apply(context, args)
        }, timeout)
      } else {
        last = now
        func.apply(context, args)
      }
    }
  };

    
    document.addEventListener("DOMContentLoaded", function(){
        let menu = document.querySelector('#menu');
        let topBar = document.querySelector('#topBar');
        

        
      


        window.addEventListener('scroll',menuOffset)








      });
    }