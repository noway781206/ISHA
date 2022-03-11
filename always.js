
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
let lastScrollTop = 0;
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
  let touchstartX,touchstartY,touchendX,touchendY,pullX,pullY;
  let newX,newY,percent;
  let switcher = false;  
  let pullSwitcher =false;
  let singleSwitcher = false;

  let SwitchY = true;
  let switchX = false;
  let touchSwicher = [...dropMenu].some(e=>e.classList.contains('atcive'));

  function menuOffset(){
    
    
    
    window.pageYOffset > lastScrollTop && window.scrollY > 62
    ? menu.classList.add('down') 
    : window.pageYOffset < lastScrollTop 
    ? menu.classList.remove('down')  
    : '';
  
    lastScrollTop = window.pageYOffset <= 0 ? 0 : window.pageYOffset;
   
    
    
    
      
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
    menuTexts.addEventListener('touchstart',menuTouchStar,false)
    
    
    
    

    
    
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
    menuTexts.style.transform = null; 
    menuTexts.style.transition =null; 
    [...dropMenu].filter((a)=>{
      return a.classList.contains('atcive')
    }).forEach(a=>
      {
        a.classList.remove('atcive')
        a.style.transform = !null? null :'' ;
        a.style.transition  = !null? null :'' ;        
      }) 
      menuTexts.removeEventListener('touchstart',menuTouchStar,false)
      window.removeEventListener('touchmove',menuTouchMove)
      window.removeEventListener('touchend',menuTouchEnd,false)
      
    // menuTexts.addEventListener('transitionend',(e)=>{
    //   e.target === menuTexts?backbuttonNav():"";
      
    // })
    
    
    
   
    
    
    

    
   
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
 



  
  

 



  function handleGesture(e) {
   
   
    console.log('handleGesture');
    
   
      if(
      [...dropMenu].some(e=>e.classList.contains('atcive')) !== true
      &&location.hash ==="#menu"
      &&switcher
      
    
      && percent > 30
      ){
     
     topButtonHLer()
     window.history.go(-1)
     pullSwitcher = false
     window.removeEventListener('touchmove',menuTouchMove)
     console.log('1 and',percent,switcher);
     
     
    
     
             
    }else if([...dropMenu].some(e=>e.classList.contains('atcive')) !== true
            &&location.hash ==="#menu"
            && percent <= 30
            && pullSwitcher
            &&switcher
            ){
      menuTexts.style.transform = `translateX(0%)`
      console.log('2');
    }
       
    if (touchendX+15 < pullX && 
      25 > touchendY - pullY && 
      touchendY - pullY > -25 && 
      switcher &&
      pullSwitcher &&
      singleSwitcher &&
          
      [...dropMenu].some(e=>e.classList.contains('atcive')) !== true) {
      topButtonHLer()
      window.removeEventListener('touchmove',menuTouchMove)

      window.history.go(-1)
      pullSwitcher = false
      console.log('3');
    }  






    if(
      [...dropMenu].some(e=>e.classList.contains('atcive')) ===true    
      && menuTexts.classList.contains('menuPop') === true
      &&location.hash ==="#menu"
      &&percent >30
      ){
     
     [...dropMenu].filter((e)=>{
      return e.classList.contains('atcive')
    }).forEach(e=>
      {
        e.classList.remove('atcive')
        e.style.transform = !null? null :'' ;
        e.style.transition  = !null? null :'' ;
        pullSwitcher = false
       
        
        
        
      })
     
             
    }else if( 
      [...dropMenu].some(e=>e.classList.contains('atcive')) ===true
      &&menuTexts.classList.contains('menuPop') === true
      &&location.hash ==="#menu"
      &&percent <= 30){
     
     [...dropMenu].filter((e)=>{
       return e.classList.contains('atcive')
     }).forEach(e=>{e.style.transform = !null? null :'' ;
     e.style.transition  = !null? null :'' ;
     })
     
   }

   if(touchendX+15 < pullX && 
    25 > touchendY - pullY && 
    touchendY - pullY > -25 && 
    switcher &&
    pullSwitcher &&
    singleSwitcher &&
    menuTexts.classList.contains('menuPop') === true&&
     [...dropMenu].some(e=>e.classList.contains('atcive')) ===true){
       [...dropMenu].filter((e)=>{
         return e.classList.contains('atcive')
       }).forEach(e=>{e.classList.remove('atcive')
     
                       e.style.transform = !null? null :'' ;
                       e.style.transition  = !null? null :'' ;
                       pullSwitcher = false })
}


 
  
  
  
  
  }
  
   
  function menuTouchMove(e) {
    

  

    
      touchsMovingY = e.changedTouches[0].screenY;
      touchsMovingX = e.changedTouches[0].screenX;
      setTimeout(()=>{
        pullX = touchsMovingX;
        pullY = touchsMovingY;
      },500)
         
      if(!switcher){
        setTimeout(()=>{
          newX = touchsMovingX
          newY = touchsMovingY
        },100)
          
          
       
        }
      
      percent = Math.floor((touchstartX - touchsMovingX) / window.screen.width *100)
      let prepercent = Math.floor((touchstartX - touchsMovingX) / window.screen.width *100)
      
   
 
    
    
     
      
    
      if (
        // newY - touchsMovingY > -20
        // &&newY - touchsMovingY < 20
        // &&newX - touchsMovingX >20
        location.hash ==='#menu') {
          // switcher = true
          pullSwitcher = true
          singleSwitcher = true
          // SwitchY = true
      }  


      
      
       
      
     
      if((newY - touchsMovingY < -5 || newY - touchsMovingY > 5) 
        &&newX - touchsMovingX < 90
        &&newX - touchsMovingX > -90
        &&location.hash ==='#menu'
        &&SwitchY
        ){
          switchX = false         
          console.log('now');
          
         
          
      }else if(
        
         [...dropMenu].some(e=>e.classList.contains('atcive')) !== true
          // && percent <= 100 
          // && percent >= 0      
            &&switchX
          // && switcher     
         ){
          SwitchY = false
          menuTexts.style.transition ='none'
          menuTexts.style.transform = `translateX(-${percent}%)`
          switcher = true;
          setTimeout(() => {
            singleSwitcher = false
          }, 50);
          
         }else if([...dropMenu].some(e=>e.classList.contains('atcive')) === true
          && percent <= 100 
          && percent >= 0
          
          && switchX
        
        
       ){
        [...dropMenu].filter((e)=>{
          return e.classList.contains('atcive')
        }).forEach(e=>
          {
            SwitchY = false
            switcher = true;
            e.style.transition ='none'
            e.style.transform = `translateX(-${percent}%)`
            setTimeout(() => {
              singleSwitcher = false
            }, 50);
          })
      
        
       }
       
       
       
      


    }

  function menuTouchStar(e){
    switchX = true
    // e.stopPropagation
    // menuTexts.removeEventListener('touchstart',menuTouchStar,true)

  
    
  touchstartX = e.changedTouches[0].screenX;
  touchstartY = e.changedTouches[0].screenY;
  newX = touchstartX
  newY = touchstartY
  pullX = touchstartX
  pullY =touchstartY
  
  // menuTexts.addEventListener('touchmove',menuTouchMove)
  window.addEventListener('touchmove',menuTouchMove)
 
  window.addEventListener('touchend',menuTouchEnd,false)
 
  
  
  }
  
  function menuTouchEnd(e) {
  
    touchendX = e.changedTouches[0].screenX;
  touchendY = e.changedTouches[0].screenY;
  

 SwitchY = true
  handleGesture();
  switcher = false
  pullSwitcher = false
  singleSwitcher= false
  
  SwitchX = false;
  
  
 
  
  
  
  // handleGesture();
  // if(percent > 20){
  //   menuTarget.style.transform = `translateX(0%)`
  // }else{
  //   menuTarget.style.transform = `translateX(-100%)`
  // }
  
  
  // setTimeout(function () {
  //   touchstartY = touchendY;
  //   touchstartX = touchendX;
  // },50)
  
  }
  
  
  window.addEventListener('scroll',menuOffset)
  menuButton.addEventListener('click',menuButtonHLer)
  rwdTopButton.forEach((button)=>{
    // menuTexts.removeEventListener('touchstart',menuTouchStar,false)
    // menuTexts.removeEventListener('touchmove',menuTouchMove)
    // window.removeEventListener('touchend',menuTouchEnd,false)
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
  // menuTexts.addEventListener('touchstart',menuTouchStar,false)
  // window.addEventListener('touchend',menuTouchEnd,false)
  // menuTexts.addEventListener('touchmove',menuTouchMove,false)


  let botDiv = document.querySelectorAll('#bottom>div');
  let botOutNav = document.querySelectorAll('#bottom .outerNav');
  let mql = window.matchMedia('(max-width: 768px)');
  let fourButton = document.querySelectorAll('#bottom>div>button')

  function backbutton(){
    menu.hash = '#menu'
    document.location.href = '#menu'
    
    
    
  }
  function backbuttonNav(e){
    if(menuTexts.classList.contains('menuPop')!== true&&location.hash ==="#menu"){
      window.history.go(-1);
      
      
   
          }
  }
  function botclickHLer(e) {
    let span = e.currentTarget.querySelector('button span')
    let h2 = e.currentTarget.querySelector('button h2')
    let allspan = document.querySelectorAll('#bottom>div button span')
    let allh2 = document.querySelectorAll('#bottom>div button h2')
    let outer = e.currentTarget.querySelector('.outerNav')
    
    
    
    
    
    
    e.target.closest('div') === e.currentTarget  ?span.classList.toggle('active'):'';
    e.target.closest('div') === e.currentTarget  ?h2.classList.toggle('active'):'';
    // outer.classList.contains('active') ? outer.classList.remove('active'):'';
    
    // span.classList.toggle('active')
    // h2.classList.toggle('active')
    
    allspan.forEach(item=>{
      item !== span ? item.classList.remove('active'):'';
    })
    allh2.forEach(item=>{
      item !== h2 ? item.classList.remove('active'):'';
    })
    botDiv.forEach(item=>{
      item !== e.currentTarget && item.querySelector('.outerNav')?item.querySelector('.outerNav').classList.remove('active'):'';
        
      
      
    })

    
  }
  function OutNavClickHLer(e) {
    let outer = e.currentTarget.nextElementSibling;
    
    
    
   e.target.closest('button') === e.currentTarget && outer ?outer.classList.toggle('active'):'';
   
 
  //  if(e.target === e.currentTarget || e.currentTarget.children[0]||e.currentTarget.children[1]){
  //    console.log('yes');
     
  //  }
   
    
    
    
  }

  

 
   
  if(mql.matches){
    
   
    menuButton.addEventListener('click',backbutton);
    window.addEventListener('hashchange', function(event) {
      
      
     
      if(menuTexts.classList.contains('menuPop')=== true  
          &&location.hash ===""
          
          ){

        topButtonHLer();
        
      }
    
    })
  
      

   
    // rwdTopButton.forEach((button)=>{

    //   button.addEventListener('click',(backbuttonNav))
    // })
    
    rwdBlack.addEventListener('click',backbuttonNav)
          //底部選單
    axios.get('image/vr-icon.svg')
    .then((res) => {
        this.markDownData = res.data
        document.querySelector('#bottom>div:nth-child(1) button span').insertAdjacentHTML("afterbegin", res.data)
    })
    axios.get('image/phone.svg')
    .then((res) => {
        this.markDownData = res.data
        document.querySelector('#bottom>div:nth-child(2) button span').insertAdjacentHTML("afterbegin", res.data)
    })
    axios.get('image/study03.svg')
    .then((res) => {
        this.markDownData = res.data
        document.querySelector('#bottom>div:nth-child(3) button span').insertAdjacentHTML("afterbegin", res.data)
    })
    axios.get('image/mail02.svg')
    .then((res) => {
        this.markDownData = res.data
        document.querySelector('#bottom>div:nth-child(4) button span').insertAdjacentHTML("afterbegin", res.data)
    })

    
    botDiv.forEach(item=>{
      item.addEventListener('click',botclickHLer)
    })
    fourButton.forEach(item=>{
      item.addEventListener('click',OutNavClickHLer)
    })
    



          //RWD結束
    }

  
  
  // 結束
  