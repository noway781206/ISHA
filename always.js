{
  const clickRwd = function(targetEl,func){
    let X,Y,endX,endY,rwdSwicher;
    function touchClickStar(e) {
      X = e.changedTouches[0].screenX;
      Y = e.changedTouches[0].screenY;    
    }
    function touchClickEnd(e) {
      endX = e.changedTouches[0].screenX;
      endY = e.changedTouches[0].screenY;
      if(
        (endX - X > -5 & endX - X < 5) &&
        (endY - Y > -5 & endY - Y < 5)
        ){
          // targetEl.addEventListener('touchend',func)
          (func)(e)                        
      }  
    }
  

    if ('ontouchstart' in document.documentElement === true){
     
      
      return targetEl.addEventListener('touchstart',touchClickStar),
      targetEl.addEventListener('touchend',touchClickEnd)
     

  
     
    }else{
      return targetEl.addEventListener('click',func);   
   
    }
  }
  const doc = (taget)=> document.querySelector(taget);
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
  let rwdLastbutton = document.querySelectorAll('.drop-menu>button')
  let menuText = document.querySelectorAll('.menu-text');
  let touchstartX,touchstartY,touchendX,touchendY,pullX,pullY;
  let newX,newY,percent;
  let switcher = false;  
  let pullSwitcher =false;
  let singleSwitcher = false;
  let rwdNoticeSwitcher = true;
  let SwitchY = true;
  let switchX = false;
  let touchSwicher = [...dropMenu].some(e=>e.classList.contains('atcive'));
  
//預先載入選單功能
  let menuOffset = () =>{
  
    
    
    if(rwdNoticeSwitcher){
      
      
 
          // window.pageYOffset > lastScrollTop 
    // && window.scrollY > 62
    // ? menu.classList.add('down')
    // : window.pageYOffset < lastScrollTop 
    // ?doc('.rwd-notice').classList.remove('active')
    // : '';

    if(window.pageYOffset > lastScrollTop 
      && window.scrollY > 150
      &&lastScrollTop !== 0){
       menu.classList.add('down');
       !doc('.rwd-notice').classList.contains('active')&& menu.classList.contains('down')?doc('.rwd-notice').classList.add('active'):'';

        


    }else if(window.pageYOffset < lastScrollTop 
          
            && lastScrollTop !== 0 ){
      doc('.rwd-notice').classList.contains('active')?doc('.rwd-notice').classList.remove('active'):menu.classList.add('stiky');

      
    }
    }
    
    


    
  
    
 
  


  
    lastScrollTop = window.pageYOffset <= 0 ? 0 : window.pageYOffset;
   
    
    
    
      
    if (window.scrollY > topBar.offsetHeight){
        menu.classList.add('stiky');
        topBar.classList.add('stikyBar');   
       
            
          
        
    }else if(window.scrollY <= topBar.offsetHeight){
        
        menu.classList.remove('stiky')
        topBar.classList.remove('stikyBar');   
    }
    
    

  
    
    
    
  };
window.addEventListener('scroll',throttle(menuOffset))

  axios.get('footer.html')
.then((res) => {
    this.markDownData = res.data
    document.querySelector('footer').innerHTML = res.data;    
}).catch((error) => {
    console.error(error) 
}).then(()=>{
  axios.get('image/social-color-1_logo-facebook.svg')
  .then((res) => {
      this.markDownData = res.data
      document.querySelector('.social a:nth-child(1) span').insertAdjacentHTML("afterbegin", res.data)
  })
  axios.get('image/social-color-1_logo-youtube.svg')
  .then((res) => {
      this.markDownData = res.data
      document.querySelector('.social a:nth-child(2) span').insertAdjacentHTML("afterbegin", res.data)
  })
})

  axios.get('image/social-color-1_logo-facebook.svg')
.then((res) => {
    this.markDownData = res.data
    document.querySelector('#facebook_Icon').insertAdjacentHTML("afterbegin", res.data)
})

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
 

  function throttle(func, timeout = 100) {
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

  
  let menuHoverEnterHLer = (e) => {
    if(mql.matches)return
    let now = e.currentTarget
    now.previousElementSibling.querySelector('h1').classList.add('active');
    
    
  }
  let menuHoverLeaverHLer = (e)=> {
    if(mql.matches)return
    let now = e.currentTarget
    now.previousElementSibling.querySelector('h1').classList.remove('active');
    
  }

  
  
  let menuButtonHLer = (e)=> {    
    
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
  let topButtonHLer = (e) => {
    setTimeout(()=>{
     
      
    
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

    
    
    
    },50)
    
    
    

    
   
  }
  let rwdInnerList = (e) => {
    
    if(e.composedPath()[0].classList.contains('innerText'),
    e.composedPath()[1].classList.contains('innerText'),
    e.composedPath()[2].classList.contains('innerText'))return
   
    
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

  let dropMenuHLer = (e) => {
    let a = e.currentTarget.nextElementSibling
    a.classList.toggle('atcive');
    let b = menuTexts.querySelector('.logo')
    b.style.display= 'none'
    
    
    
  }
  let rwdLastHLer = (e) =>{   
    
    let a = e.currentTarget.parentElement
   
    a.classList.remove('atcive')
    document.querySelectorAll('.innerText').forEach((item)=>{
      let b = item.classList.contains('active');
      b ? item.classList.remove('active'):'';
      
    })
    
  }
  let dropMenuTransition = (e) => {
    if(e.currentTarget.classList.contains('atcive') !== true &&
    e.propertyName.includes('transform')&&
    e.currentTarget === e.target){
      menuTexts.querySelector('.logo').style.display='flex';
      console.log(e);
      
    }
    
    
  }
 



  
  

 



  let handleGesture = (e) => {
   
   
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
     console.log('1');
     
     
    
     
             
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
      &&switcher
      ){
     
     [...dropMenu].filter((e)=>{
      return e.classList.contains('atcive')
    }).forEach(e=>
      {
        e.classList.remove('atcive')
        e.style.transform = !null? null :'' ;
        e.style.transition  = !null? null :'' ;
        pullSwitcher = false;
        document.querySelectorAll('.innerText').forEach((item)=>{
          let a = item.classList.contains('active');
          a ? item.classList.remove('active'):'';
          
        })
        rwdList.forEach((list)=>{
          list.querySelector('h2 span:nth-child(1)')?list.querySelector('h2 span:nth-child(1)').classList.remove('active'):'';
          list.querySelector('.rwd-drop-icon')? list.querySelector('.rwd-drop-icon').classList.remove('active') :'';
          
          
          
        })
        console.log(4);
       
        
        
        
      })
     
             
    }else if( 
      [...dropMenu].some(e=>e.classList.contains('atcive')) ===true
      &&menuTexts.classList.contains('menuPop') === true
      &&location.hash ==="#menu"
      &&percent <= 30
      
      ){
     
     [...dropMenu].filter((e)=>{
       return e.classList.contains('atcive')
     }).forEach(e=>{e.style.transform = !null? null :'' ;
     e.style.transition  = !null? null :'' ;
    //  document.querySelectorAll('.innerText').forEach((item)=>{
    //   let a = item.classList.contains('active');
    //   a ? item.classList.remove('active'):'';
      
    // })

  
     console.log(5);
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
     console.log(6);
     
                       e.style.transform = !null? null :'' ;
                       e.style.transition  = !null? null :'' ;
                       pullSwitcher = false })
}


 
  
  
  
  
  }
  
   
  let menuTouchMove = (e) => {
    

  

    
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

  let menuTouchStar = (e) =>{
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
  
  let menuTouchEnd = (e) => {
  
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
  
  
  
  menuButton.addEventListener('click',menuButtonHLer)
  rwdTopButton.forEach((button)=>{
    // menuTexts.removeEventListener('touchstart',menuTouchStar,false)
    // menuTexts.removeEventListener('touchmove',menuTouchMove)
    // window.removeEventListener('touchend',menuTouchEnd,false)
    button.addEventListener('click',topButtonHLer)
  })
  

  rwdBlack.addEventListener('click',topButtonHLer)
  rwdList.forEach((list)=>{
   
    list.addEventListener('click',rwdInnerList,true)
  })
  rwdLastbutton.forEach((button)=>{
    button.addEventListener('click',rwdLastHLer)
  })
  menuText.forEach((menu)=>{
    menu.addEventListener('click',dropMenuHLer)
    
  })



  dropMenu.forEach((item)=>{
    item.addEventListener('transitionend',dropMenuTransition)
    item.addEventListener('mouseenter',menuHoverEnterHLer)
    item.addEventListener('mouseleave',menuHoverLeaverHLer)
  })
  // menuTexts.addEventListener('touchstart',menuTouchStar,false)
  // window.addEventListener('touchend',menuTouchEnd,false)
  // menuTexts.addEventListener('touchmove',menuTouchMove,false)


  let botDiv = document.querySelectorAll('#bottom>div');
  let botOutNav = document.querySelectorAll('#bottom .outerNav');
  let mql = window.matchMedia('(max-width: 768px)');
  let fourButton = document.querySelectorAll('#bottom>div>button')
  let fourButtonCloseButton = document.querySelector('.close');

  let backbutton = () =>{
    menu.hash = '#menu'
    document.location.href = '#menu'
    
    
    
  }
  let backbuttonNav = (e) =>{
    // if(menuTexts.classList.contains('menuPop')!== true&&location.hash ==="#menu"){
    //   window.history.go(-1);
      
      
   
    //       }
    window.history.go(-1);
  }
  let botclickHLer = (e) => {
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
  let OutNavClickHLer = (e) => {
    let outer = e.currentTarget.nextElementSibling;
    
    
    
   e.target.closest('button') === e.currentTarget && outer ?outer.classList.toggle('active'):'';
   
 
  //  if(e.target === e.currentTarget || e.currentTarget.children[0]||e.currentTarget.children[1]){
  //    console.log('yes');
     
  //  }
   
    
    
    
  }
  let menuRwdNotice = (e) => {
    if(e.currentTarget !== e.target)return
    let rwdNotice = e.currentTarget.classList;
    rwdNotice.contains('down')? doc('.rwd-notice').classList.add('active') :'';
  
    //rwdNotice.contains('down')? setTimeout(() => {rwdNoticeSwitcher = true}, 500) :'';
    
    
    
    
    
    
    
    
   
    // !rwdNotice?doc('.rwd-notice').classList.remove('active') :'';
    
    
    
  }
  let fourButtonClose = (e) => {
    let parent = e.currentTarget.parentElement.parentElement
    parent.classList.remove('active')
    
  }


  

 
   
  if(mql.matches){
    let botFour = doc('.bot_popMenu');
   

    
    
   
    menuButton.addEventListener('click',backbutton);
    window.addEventListener('hashchange', function(event) {
      
      
     
      if(menuTexts.classList.contains('menuPop')=== true  
          &&location.hash ===""
          
          ){

        topButtonHLer();
        
      }
    
    })
  
      

   
    rwdTopButton.forEach((button)=>{

      button.addEventListener('touchstart',(backbuttonNav))
    })
    
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
    //六個icon
    axios.get('image/mid-icon01.svg')
    .then((res) => {
        this.markDownData = res.data
        botFour.querySelector(`div:nth-child(1)>button:nth-child(1)>span`).insertAdjacentHTML("afterbegin", res.data)
    })
    axios.get('image/mid-icon02.svg')
    .then((res) => {
        this.markDownData = res.data
        botFour.querySelector(`div:nth-child(1)>button:nth-child(2)>span`).insertAdjacentHTML("afterbegin", res.data)
    })
    axios.get('image/mid-icon03.svg')
    .then((res) => {
        this.markDownData = res.data
        botFour.querySelector(`div:nth-child(1)>button:nth-child(3)>span`).insertAdjacentHTML("afterbegin", res.data)
    })
    axios.get('image/mid-icon04.svg')
    .then((res) => {
        this.markDownData = res.data
        botFour.querySelector(`div:nth-child(2)>button:nth-child(1)>span`).insertAdjacentHTML("afterbegin", res.data)
    })
    axios.get('image/mid-icon05.svg')
    .then((res) => {
        this.markDownData = res.data
        botFour.querySelector(`div:nth-child(2)>button:nth-child(2)>span`).insertAdjacentHTML("afterbegin", res.data)
    })
    axios.get('image/mid-icon06.svg')
    .then((res) => {
        this.markDownData = res.data
        botFour.querySelector(`div:nth-child(2)>button:nth-child(3)>span`).insertAdjacentHTML("afterbegin", res.data)
    })

    
    botDiv.forEach(item=>{
      clickRwd(item,botclickHLer)
      // item.addEventListener('click',botclickHLer)
    })
    fourButton.forEach(item=>{
      clickRwd(item,OutNavClickHLer)
      // item.addEventListener('click',OutNavClickHLer)
    })
   
  
    clickRwd(fourButtonCloseButton,fourButtonClose)
    menu.addEventListener('transitionend',menuRwdNotice)
    doc('.rwd-notice').addEventListener('transitionend',(e)=>{
        if(e.currentTarget.classList.contains('active'))return
     
        //setTimeout(() => {rwdNoticeSwitcher = true}, 300);       
        e.propertyName === 'transform' ? menu.classList.remove('down') : '';
        //e.propertyName === 'transform' ? setTimeout(() => {rwdNoticeSwitcher = true}, 500) : '';
      
        
        
        
        
       
        
        
        
        
    })
    





          //RWD結束
    }

  
  
  // 結束
  }