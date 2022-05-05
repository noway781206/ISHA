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
      let firstTimeBack = doc('.firstTime>ul>span')
      let firstTimeButtonLeft = doc('.firstTime>ul>li:first-child')
      let firstTimeButtonRight = doc('.firstTime>ul>li:nth-child(2)')
      let selectClicker = document.querySelectorAll('.select')
      let allSelectBot  = document.querySelectorAll('.select-inner')
      let timeButton = document.querySelectorAll('.innerHtml nav.tech_title ul li > div')

      
      let clickSwicher =true;
      //立刻執行
      const render = (()=>{
        //月份
        let timeButton = [...document.querySelectorAll('nav.tech_title ul>li h5')]
        const time = new Date();
        const month = time.getMonth()+1;
        const nextMonth = month+1;
        const monthChinese = 
        [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月"
        ];
        timeButton[1].textContent = monthChinese[month]
        timeButton[2].textContent = monthChinese[nextMonth] 
        
        
      })()
      

      //初複訓按鈕
      let firstTimeButtonHDLer = (e)=>{
          if((firstTimeBack.classList.contains('active') && e.currentTarget === firstTimeButtonRight)
            ||
            (!firstTimeBack.classList.contains('active') && e.currentTarget === firstTimeButtonLeft)) return
  
      
        
        firstTimeBack.classList.contains('active')?firstTimeBack.classList.remove('active'):firstTimeBack.classList.add('active');
        firstTimeBack.classList.contains('active')?firstTimeButtonRight.querySelector('h2').style.color = 'white':firstTimeButtonRight.querySelector('h2').style.color = '#222';
        firstTimeBack.classList.contains('active')?firstTimeButtonLeft.querySelector('h2').style.color = '#222':firstTimeButtonLeft.querySelector('h2').style.color = 'white';
        firstTimeBack.classList.add('up')


      }
      firstTimeBack.addEventListener('transitionend',(e)=>{
        e.propertyName === 'transform' ?firstTimeBack.classList.remove('up'):'';
        
        
      })
      //沒focus時關閉
      let focusoutHDLer = (e)=>{
        if(!clickSwicher)return

        e.currentTarget.parentElement.classList.remove('active'); 
        e.currentTarget.closest('li').classList.remove('active');
        
    
   
      }
      //選擇後關閉
      let ChoiceClick = (e) =>{
        console.log('選擇');
        let test = e.currentTarget.parentElement;
        let test02 = e.currentTarget.closest('li');
        
        setTimeout(()=>{
          test.classList.remove('active');
          test02.classList.remove('active');
          
        },150)
         
      }
      //連點input fix開關
      let fixSevralTimesInput = (e)=>{
        clickSwicher = true
    
        setTimeout(()=>{
    
          window.removeEventListener(mouseupRwd,fixSevralTimesInput)
          

        },5000)
      }
      //下拉選項
      let selectHDLer = (e)=>{
        console.log('open');
        e.currentTarget.closest('li').classList.add('active');
        
        
        
        
     
        let selectbot = e.currentTarget.querySelector('.select-inner')
        let options = e.currentTarget.querySelectorAll('.select-inner option')

       // e.currentTarget.classList.toggle('active') 

        let a = e.currentTarget;
        setTimeout((e)=>{
          a.classList.toggle('active') 
          
        },100)
        if(window.matchMedia('(min-width: 769px)').matches){
          selectbot.size=options.length
          
        }
        
        selectbot.focus();
        //修復假如按到其他input 
        selectClicker.forEach((item)=>{
        if(e.currentTarget === item)return
          item.classList.contains('active')?item.classList.remove('active'):"";
        })
       

      }
      //時間range按鈕觸發function
      let timeButtonHDLer = (e)=>{
        !e.currentTarget.classList.contains('active')?e.currentTarget.classList.add('active'):'';
        timeButton.forEach((item)=>{
          if(item === e.currentTarget)return
          e.currentTarget.classList.contains('active')?item.classList.remove('active'):'';
        })
      }

      clickRwd(firstTimeButtonLeft,firstTimeButtonHDLer)
      clickRwd(firstTimeButtonRight,firstTimeButtonHDLer)
      
      //選單觸發按鈕
      selectClicker.forEach((item)=>{
        //clickRwd(item,selectHDLer)
        item.addEventListener('click',selectHDLer)
        //修復input 滑鼠放開
      //壓住
        item.addEventListener(mousedownRwd,(e)=>{
      
          clickSwicher = false;
          window.addEventListener(mouseupRwd,fixSevralTimesInput)
        });
        //鬆開

      });
      
      //關閉選單
      allSelectBot.forEach((item)=>{
        item.addEventListener('focusout', focusoutHDLer);
        clickRwd(item,ChoiceClick)
          //item.addEventListener('click',ChoiceClick)
        
        //轉換文字
            item.addEventListener("change", (e)=>{
              
              let inner = e.currentTarget.selectedOptions[0].text;
              e.currentTarget.parentElement.querySelector('h3').innerHTML = inner;
              e.currentTarget.parentElement.querySelector('h3').classList.add('checked')
              
            })
      })
      //時間range按鈕觸發事件
      timeButton.forEach((item)=>{
        clickRwd(item,timeButtonHDLer)
      })



      
      
      

      
    //結束
}