//開始


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
const mousedownRwd = (function () {
    return 'ontouchstart' in document.documentElement 
            ? 'touchstart'
            :  'mousedown'
  })()
  const mouseupRwd = (function () {
    return 'ontouchstart' in document.documentElement 
            ? 'touchend'
            :  'mouseup'
  })()
  const mousemoveRwd = (function () {
    return 'ontouchstart' in document.documentElement 
            ? 'touchmove'
            :  'mousemove'
  })()
  

;(function slider() {
    
    let slider = doc('.slider');
    let botNav = doc('.slider .navBot')
    let cotain = doc('.slider .cotain'); 
    let inner = document.querySelectorAll('.slider .inner');
    let index = 0;
    let outpercent;
    let changePage = 25;
    let leftInit = -100;
    let x,y,star,starY,starX,pullX,pullY;
    let transEndSwicher = true;
    let SwicherY = true;
    let pullStop = true;
    let pre = ()=>{
        return new Promise( resolve =>{  
            let cloneFirst = inner[0].cloneNode(true);
            let cloneLast =  inner[inner.length-1].cloneNode(true);
            
            cotain.insertAdjacentElement('beforeend', cloneFirst);
            cotain.insertAdjacentElement('afterbegin', cloneLast);  
            
            for (let i = 0; i < inner.length; i++) {  
              let botNavSpan = document.createElement('span');      
              botNavSpan.setAttribute('data-nunber',`${i}`)
              botNav.insertAdjacentElement('beforeend',botNavSpan)    
              
            }
            
           
            
              
           
            
            resolve() 
              })
    }
    // slider.style.width = Math.floor(slider.offsetWidth)+'px'

    
    pre().then(()=>{
        // let inner2 = document.querySelectorAll('.cotain div')
        // cotain.style.width = slider.offsetWidth*inner2.length + 'px'
        // inner2.forEach(item=>{
        //   item.style.width = slider.offsetWidth + 'px'
        // })
        
    
   
    }       
    )
    let inner2 = document.querySelectorAll('.cotain>div');
    let botSpans = document.querySelectorAll('.slider .navBot span');
    let navButtons = document.querySelectorAll('.button button')
    botSpans[0].classList.add('active')
    //pre結束
    //transition事件開始
    //transitionstart開始
    cotain.addEventListener('transitionstart',function (e) {
      transEndSwicher = false;
      
     
      
     
      
      
    })
    //transitionStart結束
    //transitionEnd開始
    cotain.addEventListener('transitionend',function (e) {

      

      
      
      cotain.classList.remove('active');
      outpercent = null
      if(index === inner.length){
         cotain.classList.remove('active');
         cotain.style.left = null;
         index = 0;
         leftInit = -100;      
         
               
       }else if(index === -1){
        cotain.classList.remove('active');
        cotain.style.left = `${inner.length*-100}%`;
        index = inner.length-1;
        leftInit = inner.length*-100;   
                 
       }
       
       transEndSwicher = true
       //下方燈號開始
       botSpans[index].classList.add('active')
       botSpans.forEach(item=>{
        if(botSpans[index] !== item){
          item.classList.remove('active')
          

        } 
         })
       
         //下方燈號結束

    })
    //transitionEnd 結束
    //RWD特殊mousedown
    function sliderMouseDown(e){
      pullStop = true
      e.type == 'touchstart' ? '':e.preventDefault();
      
      star = null;
      x =null;
        
        e.type == 'touchstart' ? star = e.touches[0].clientX:star = e.clientX;
        
        e.type == 'touchstart' ? starY = e.touches[0].clientY:starY = e.clientY;

        pullX = star;
        pullY = starY
          
         
      
       
        
        
        document.addEventListener(mouseupRwd,moveEnd)
        document.addEventListener(mousemoveRwd,moveIng);

    }
    //RWD特殊mousedown結束
    
    
    
    //下方燈號開始
    function botSpansHLer(e) {
      if(transEndSwicher ===false)return
      let {currentTarget} = e;
    
      cotain.classList.add('active');
      index = currentTarget.dataset.nunber*1;
      cotain.style.left = `${(index+1)*-100}%`;
      leftInit =(index+1)*-100 ;
      
    }
    function firstBotNav(e) {
      if(transEndSwicher ===false)return
      let {currentTarget} = e;
      cotain.classList.add('active');
      if(index===(botSpans.length*1)-1){
        cotain.style.left = `${leftInit-100}%`;
        index = inner.length;
        
      }else{
        index = currentTarget.dataset.nunber*1;
      cotain.style.left = `${(index+1)*-100}%`;
      leftInit =(index+1)*-100 ;
     }
    }
    function lastBotNav(e) {
      if(transEndSwicher ===false)return
      let {currentTarget} = e;
      cotain.classList.add('active');
      if(index===0){        
        cotain.style.left = `0%`;
        index = -1;            
      }else{
       
      index = currentTarget.dataset.nunber*1;
      cotain.style.left = `${(index+1)*-100}%`;
      leftInit =(index+1)*-100 ;
      }
    }
    //下方燈號結束
    //中間按鈕開史
    function preButtonHLer(e) {
      if(transEndSwicher ===false)return
      cotain.classList.add('active');
      cotain.style.left = `${leftInit+100}%`;
      leftInit += 100;
       index += -1;      
    }
    function nextButtonHLer(e) {
      if(transEndSwicher ===false)return
      cotain.classList.add('active');
      cotain.style.left = `${leftInit-100}%`;
      leftInit += -100;
      index += +1;   
    }
    //中間按鈕結束
    slider.addEventListener(mousedownRwd,sliderMouseDown)
    botSpans.forEach(item=>{
      if(item === botSpans[0] || item === botSpans[(botSpans.length*1)-1])return
     
      
      clickRwd(item,botSpansHLer)
    
    });
    clickRwd(botSpans[0],firstBotNav)
    clickRwd(botSpans[(botSpans.length*1)-1],lastBotNav)
    clickRwd(navButtons[0],preButtonHLer)
    clickRwd(navButtons[1],nextButtonHLer)
    

      
      // e.type == 'touchstart' ? '':e.preventDefault();
      
      // star = null;
      // x =null;
        
      //   e.type == 'touchstart' ? star = e.touches[0].clientX:star = e.clientX;
        
      //   e.type == 'touchstart' ? starY = e.touches[0].clientY:starY = e.clientY;

      //   pullX = star;
      //   pullY = starY
          
         
      
       
        
        
      //   document.addEventListener(mouseupRwd,moveEnd)
      //   document.addEventListener(mousemoveRwd,moveIng);
        
      
      
       
        function moveIng(e){  
          
        
        
          
          
          
          e.type == 'touchmove' ? x = e.touches[0].clientX:x = e.clientX;
          e.type == 'touchmove' ? y = e.touches[0].clientY:y = e.clientY;
          setTimeout(()=>{
            pullX = x;
            pullY = y;
          },500)
       
          outpercent = Math.floor(((star - x) / slider.offsetWidth *-100))
     
          
    
         
         
          if(transEndSwicher ===false)return
          
          if(outpercent>-100 && outpercent <100 ){
          cotain.style.left = `${leftInit+outpercent}%`;
         
             }
        }
        
        function moveEnd(e){
          
          let pullSwicher = (pullX - x > 15 || pullX - x < -15) 
                            && 25 > y - pullY 
                            && y - pullY > -25
          
    


         
          //動畫時不可中斷
          if(transEndSwicher === true&&x!==null){
         
         
          //只執行一次換頁，慢慢啦的換
          if(pullStop){
          cotain.classList.add('active');
          leftInit< 0 && outpercent > changePage ? cotain.style.left = `${leftInit+100}%`:
          leftInit > (inner.length+1)*-100 && outpercent < -changePage? cotain.style.left = `${leftInit-100}%`:
          cotain.style.left = `${leftInit}%`;
      
          leftInit< 0 && outpercent > changePage ? leftInit += 100:
          leftInit > (inner.length+1)*-100  && outpercent < -changePage? leftInit += -100:
          '';
          leftInit<= 0 && outpercent > changePage ? index += -1:
          leftInit >= (inner.length+1)*-100 && outpercent < -changePage? index += 1:
          '';

          leftInit<= 0 && outpercent > changePage ?pullStop =false :
          leftInit >= (inner.length+1)*-100 && outpercent < -changePage? pullStop =false:
          pullStop= false;

          leftInit< 0 && outpercent > changePage ? transEndSwicher = false:
          leftInit > (inner.length+1)*-100 && outpercent < -changePage? transEndSwicher = false:'';
          }
          //只執行一次換頁，快速拉
        if(pullSwicher&&pullStop){
            leftInit< 0 && outpercent > 0 ? cotain.style.left = `${leftInit+100}%`:
          leftInit > (inner.length+1)*-100 && outpercent < 0? cotain.style.left = `${leftInit-100}%`:
          cotain.style.left = `${leftInit}%`;

          leftInit< 0 && outpercent > 0 ? leftInit += 100:
          leftInit > (inner.length+1)*-100  && outpercent < -0? leftInit += -100:
          '';
          leftInit<= 0 && outpercent > 0 ? index += -1:
          leftInit >= (inner.length+1)*-100 && outpercent < -0? index += 1:
          '';

          leftInit< 0 && outpercent > 0 ? transEndSwicher = false:
          leftInit > (inner.length+1)*-100 && outpercent < -0? transEndSwicher = false:'';
          pullStop = false


          }
          
        
        }



         

          
       
          
         
          
    
          
       
        
          
       
         
          
            document.removeEventListener(mouseupRwd,moveEnd)
          document.removeEventListener(mousemoveRwd,moveIng)
         
          
          }



    

//slider結束  
})()
//slider結束

//結束
