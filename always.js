{
      fetch("image/social-color-1_logo-facebook.svg")
  .then(response => response.text())
  .then(svg => document.querySelector('#facebook_Icon').insertAdjacentHTML("afterbegin", svg));

  fetch("image/social-color-1_logo-youtube.svg")
  .then(response => response.text())
  .then(svg => document.querySelector('#youtube_Icon').insertAdjacentHTML("afterbegin", svg)); 



  function menuOffset(){
    
      
    if (window.scrollY > topBar.offsetHeight){
        menu.classList.add('stiky');
        topBar.classList.add('stikyBar');        
          
        
    }else if(window.scrollY <= topBar.offsetHeight){
        
        menu.classList.remove('stiky')
        topBar.classList.remove('stikyBar');   
    }
    
    

  
    
    
    
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
  
  let menu = document.querySelector('#menu');
  let topBar = document.querySelector('#topBar');
  window.addEventListener('scroll',menuOffset)
  
  
  
  }