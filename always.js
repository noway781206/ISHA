
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
  let myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)counter\s*\=\s*([^;]*).*$)|^.*$/, "$1");

  function cookie(){
   
    allCookies = document.cookie;
    myCookie !== '' &&  myCookie > 0 ? menuCounter = myCookie : document.cookie = "counter=0"
    myCookie !== '' &&  myCookie > 0 ? navCounter = myCookie :navCounter = 0;
    console.log(myCookie);
    
  }

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
  let menuCounter = 0;
  let navCounter;
 
  
  
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
    document.querySelectorAll('.innerText').forEach((item)=>{
      let a = item.classList.contains('active');
      a ? item.classList.remove('active'):'';
      
    })
    document.querySelectorAll('h2 span').forEach(item=>{
      let removespan = item.classList.contains('active')
      removespan? item.classList.remove('active'):'';
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
  let touchstartX,touchstartY,touchendX,touchendY;
  
  let touchSwicher = [...dropMenu].some(e=>e.classList.contains('atcive'));

// let touchboolean = [];
// let touchSwitcher = touchboolean.some(e=>e);
// let test = ()=>{ [...dropMenu].forEach(item=>{
//   if(item.classList.contains('atcive')=== true){
//     touchboolean.push(true)  
//   }else{
//     touchboolean.push(false)  
//   }
// })} 
// let result = ()=>{
//   touchboolean = [];
//   test()
//   if([...dropMenu].some(e=>e.classList.contains('atcive'))) return
//   console.log('true');
  
//     }

  
  
  
  


  function handleGesture(e) {
    // touchboolean = [];
    // test()
    // if(touchboolean.some(e=>e)) return
    // if(touchSwicher) return
      
 
    if (touchendX+15 < touchstartX && 
      25 > touchendY - touchstartY && 
      touchendY - touchstartY > -25 &&
     
      [...dropMenu].some(e=>e.classList.contains('atcive')) !== true) {
      topButtonHLer()
        // console.log('Swiped Left');
    }if(touchendX+15 < touchstartX && 
             25 > touchendY - touchstartY &&
             touchendY - touchstartY > -25 &&
              [...dropMenu].some(e=>e.classList.contains('atcive')) ===true){
                [...dropMenu].filter((e)=>{
                  return e.classList.contains('atcive')
                }).forEach(e=>e.classList.toggle('atcive'))
    }
 
  
  
  
  
  }
  function menuTouchStar(e){
    touchstartX = e.changedTouches[0].screenX;
  touchstartY = e.changedTouches[0].screenY;
  
  }
  function menuTouchMove(e) {
    setTimeout(function () {
    touchstartY = e.changedTouches[0].screenY;
    touchstartX = e.changedTouches[0].screenX;
  },150)
  }
  function menuTouchEnd(e) {
    touchendX = e.changedTouches[0].screenX;
  touchendY = e.changedTouches[0].screenY;
  // setTimeout(function () {
  //   touchstartY = touchendY;
  //   touchstartX = touchendX;
  // },50)
  handleGesture();
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
  menuTexts.addEventListener('touchstart',menuTouchStar,false)
  menuTexts.addEventListener('touchend',menuTouchEnd,false)
  // menuTexts.addEventListener('touchmove',menuTouchMove,false)


  function backbutton(){
    menu.hash = '#menu'
    document.location.href = '#menu'
    
    
    
  }
  function backbuttonNav(){
    if(menuTexts.classList.contains('menuPop')!== true&&location.hash ==="#menu"){
      window.history.go(-1);
   
          }
  }

  

  let mql = window.matchMedia('(max-width: 768px)');
  if(mql.matches){
   
    menuButton.addEventListener('click',backbutton);
    window.addEventListener('hashchange', function(event) {
      
      
     
      if(menuTexts.classList.contains('menuPop')=== true  &&location.hash ===""){

        topButtonHLer();
        
      }
    
    })
  
      

   
    rwdTopButton.forEach((button)=>{
      button.addEventListener('click',backbuttonNav)
    })
    
    rwdBlack.addEventListener('click',backbuttonNav)
          //RWD結束
    }

  
  
  // 結束
  