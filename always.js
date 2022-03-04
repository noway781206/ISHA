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
  let rwdTopButton = document.querySelectorAll('.rwd-top-button');
  let span = [...document.querySelectorAll('.rwd-top-button span')]
  let spanDiv = [...document.querySelectorAll('.rwd-top-button span div')]
  let rwdBlack = document.querySelector('#rwdblack');
  let dropMenu = document.querySelectorAll('.drop-menu');
  let rwdList = [...document.querySelectorAll('.drop-menu>ul>li')];
  let rwdLastbutton = document.querySelectorAll('.drop-menu button')
  let menuText = document.querySelectorAll('.menu-text');
  
 
  
  
  function menuButtonHLer(e) {    
    
    let {currentTarget} = e
    span[0].style.transform = "translate(0)";
    span[2].style.transform = "translate(0)";
    span[1].style.transform = "scaleX(0)";
    spanDiv[0].style.transform = "rotateZ(45deg) scaleX(1)";
    spanDiv[2].style.transform = "rotateZ(-45deg) scaleX(1)";
    currentTarget.style.transform = "scale(1)";
    menuTexts.classList.add('menuPop');
    rwdBlack.classList.add('blackPop');
    document.body.style.overflow = 'hidden';

    
    
  }
  function topButtonHLer(e) {
    span[0].style.transform = "translate(-27%,13%)";
    span[2].style.transform = "translate(-27%,-13%)";
    span[1].style.transform = "scaleX(1)";
    spanDiv[0].style.transform = "rotateZ(45deg) scaleX(0.5)";
    spanDiv[2].style.transform = "rotateZ(-45deg) scaleX(0.5)";
    // e.currentTarget.style.transform = "scale(0.7)";
    menuTexts.classList.remove('menuPop');
    rwdBlack.classList.remove('blackPop');
    document.body.style.overflow = 'inherit';
    dropMenu.forEach(item=>{
      item.classList.remove('atcive');
    })
    

    
   
  }
  function rwdInnerList(e) {
    let {currentTarget} = e
    
    let text = currentTarget.querySelector('.innerText');
    let rwdListSpan = currentTarget.querySelector('h2 span:nth-child(1)');
    let rwdDropIcon = currentTarget.querySelector('.rwd-drop-icon');

    let otherList = rwdList.filter((list)=>{
      return list !== currentTarget
    });    
    otherList.forEach((list)=>{
      list.querySelector('.innerText')?list.querySelector('.innerText').classList.remove('active'):'';
      list.querySelector('h2 span:nth-child(1)')?list.querySelector('h2 span:nth-child(1)').classList.remove('active'):'';
      list.querySelector('.rwd-drop-icon')? list.querySelector('.rwd-drop-icon').classList.remove('active') :'';
      
      
      
    })
    text.classList.toggle('active');
    rwdListSpan.classList.toggle('active');
    rwdDropIcon?rwdDropIcon.classList.toggle('active'):0;
  }

  function dropMenuHLer(e) {
    let a = e.currentTarget.nextElementSibling
    a.classList.toggle('atcive');
    let b = menuTexts.querySelector('.logo')
    b.style.display= 'none'
    
    
  }
  function rwdLastHLer(e){   
    
    let a = e.currentTarget.parentElement
   
    a.classList.remove('atcive')
    
  }
  function dropMenuTransition(e) {
    if(e.currentTarget.classList.contains('atcive') !== true &&
    e.propertyName.includes('transform')){
      menuTexts.querySelector('.logo').style.display='flex';
    }
    
    
  }
  
  
  window.addEventListener('scroll',menuOffset)
  menuButton.addEventListener('click',menuButtonHLer)
  rwdTopButton.forEach((button)=>{
    button.addEventListener('click',topButtonHLer)
  })
  

  rwdBlack.addEventListener('click',topButtonHLer)
  rwdList.forEach((list)=>{
   
    list.addEventListener('click',rwdInnerList)
  })
  rwdLastbutton.forEach((button)=>{
    button.addEventListener('click',rwdLastHLer)
  })
  menuText.forEach((menu)=>{
    menu.addEventListener('click',dropMenuHLer)
  })
  dropMenu.forEach((item)=>{
    item.addEventListener('transitionend',dropMenuTransition)
  })

  
  
  
  // 結束
  }