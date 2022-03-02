{
  //     fetch("image/social-color-1_logo-facebook.svg")
  // .then(response => response.text())
  // .then(svg => document.querySelector('#facebook_Icon').insertAdjacentHTML("afterbegin", svg));

  axios.get('image/social-color-1_logo-facebook.svg')
.then((res) => {
    this.markDownData = res.data
    document.querySelector('#facebook_Icon').insertAdjacentHTML("afterbegin", res.data)
})
  // fetch("image/social-color-1_logo-youtube.svg")
  // .then(response => response.text())
  // .then(svg => document.querySelector('#youtube_Icon').insertAdjacentHTML("afterbegin", svg)); 
  axios.get('image/social-color-1_logo-youtube.svg')
  .then((res) => {
      this.markDownData = res.data
      document.querySelector('#youtube_Icon').insertAdjacentHTML("afterbegin", res.data)
  })

  console.log(2,document.querySelector('.menu-button'));

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
  let menuButton = document.querySelector('.menu-button');
  let menuTexts = document.querySelector('.menu-texts');
  let rwdTopButton = document.querySelector('#rwd-top-button');
  let span = [...document.querySelectorAll('#rwd-top-button span')]
  let spanDiv = [...document.querySelectorAll('#rwd-top-button span div')]
  let rwdBlack = document.querySelector('#rwdblack');
  
  
  
  
  function menuButtonHLer(e) {    
    
    let {currentTarget} = e
    span[0].style.transform = "translate(0)";
    span[2].style.transform = "translate(0)";
    span[1].style.transform = "scaleX(0)";
    spanDiv[0].style.transform = "rotateZ(45deg) scaleX(1)";
    spanDiv[2].style.transform = "rotateZ(-45deg) scaleX(1)";
    rwdTopButton.style.transform = "scale(1)";
    menuTexts.classList.add('menuPop');
    rwdBlack.classList.add('blackPop');
    
    
  }
  function topButtonHLer() {
    span[0].style.transform = "translate(-27%,13%)";
    span[2].style.transform = "translate(-27%,-13%)";
    span[1].style.transform = "scaleX(1)";
    spanDiv[0].style.transform = "rotateZ(45deg) scaleX(0.5)";
    spanDiv[2].style.transform = "rotateZ(-45deg) scaleX(0.5)";
    rwdTopButton.style.transform = "scale(0.7)";
    menuTexts.classList.remove('menuPop');
    rwdBlack.classList.remove('blackPop');
    
    
   
  }

  window.addEventListener('scroll',menuOffset)
  menuButton.addEventListener('click',menuButtonHLer)
  rwdTopButton.addEventListener('click',topButtonHLer)
  rwdBlack.addEventListener('click',topButtonHLer)
 
  
  
  
  
  }