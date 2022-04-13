// let div = document.querySelector('.first')


// let array1 = ['a','b','c','d','e','f','a','b','c','d','e','f',]







// let page = Math.floor(array1.length/4) + (array1.length%4 !== 0 ? 1:0)




// for(let i = 0; i < page*4;i+=4 ){
//   let aryindex = array1.slice(i,i+4).map(item=>{
  
//     return `
//     <div class='red'>${item}</div>
//     `
//   }).join('')
//   let innerDiv =  document.createElement('div')
//   let button = document.createElement('button')
//   innerDiv.classList.add('new')
//   innerDiv.innerHTML = aryindex

//   div.append(innerDiv)
//   button.innerHTML=(i/4)+1
// button.setAttribute('data-nunber',`${(i/4)+1}`)
// document.querySelector('nav').append(button)
  
//   }

//   document.querySelectorAll('nav button').forEach(e=>
//   {
//     e.addEventListener('click',(e)=>{
//       document.querySelectorAll('.new')[e.currentTarget.dataset.nunber-1].classList.add('active');
//       document.querySelectorAll('nav button').forEach(itme=>{
//         if(e.currentTarget !== itme){
//           document.querySelectorAll('.new')[itme.dataset.nunber-1].classList.remove('active');
//         }
//       })
        
//     })
//   }  )


//第二個

  

// let outer = document.querySelector('.new');
// let inner = document.querySelectorAll('.new .inner');
// let cotain = document.querySelector('.cotain');
// let index = 0;
// let outpercent;
// let changePage = 23;
// let leftInit = -100;
// let x = 0,star;
// let drawing = false;
// let cloneFirst = inner[0].cloneNode(true);
// let cloneLast =  inner[inner.length-1].cloneNode(true);
// cotain.insertAdjacentElement('beforeend', cloneFirst);
// cotain.insertAdjacentElement('afterbegin', cloneLast);
// // cotain.appendChild(cloneFirst)
// const mousedownRwd = (function () {
//   return 'ontouchstart' in document.documentElement 
//           ? 'touchstart'
//           :  'mousedown'
// })()
// const mouseupRwd = (function () {
//   return 'ontouchstart' in document.documentElement 
//           ? 'touchend'
//           :  'mouseup'
// })()
// const mousemoveRwd = (function () {
//   return 'ontouchstart' in document.documentElement 
//           ? 'touchmove'
//           :  'mousemove'
// })()
// cotain.addEventListener('transitionend',function (e) {
//   cotain.classList.remove('active');
//   console.log(e);
  
  

// })

//   outer.addEventListener(mousedownRwd,(e)=>{  
//   e.preventDefault(); 
//   e.type == 'touchstart' ? star = e.touches[0].clientX:star = e.clientX;
    
   

 
  
  
//   document.addEventListener(mouseupRwd,moveEnd)
//   document.addEventListener(mousemoveRwd,moveIng);
  
//  });

 
//   function moveIng(e){  

//     e.type == 'touchmove' ? x = e.touches[0].clientX:x = e.clientX;
    
//     let percent = Math.floor((star - x) / window.innerWidth *-100)
//     outpercent = percent;
   
//     cotain.style.left = `${leftInit+percent}%`;
  
//   }
  
//   function moveEnd(e){
//     cotain.classList.add('active');
//     leftInit< 0 && outpercent > changePage ? cotain.style.left = `${leftInit+100}%`:
//     leftInit > (inner.length+1)*-100 && outpercent < -changePage? cotain.style.left = `${leftInit-100}%`:
//     cotain.style.left = `${leftInit}%`;

//     leftInit< 0 && outpercent > changePage ? leftInit += 100:
//     leftInit > (inner.length+1)*-100  && outpercent < -changePage? leftInit += -100:
//     '';
//     leftInit<= 0 && outpercent > changePage ? index += -1:
//     leftInit >= (inner.length+1)*-100 && outpercent < -changePage? index += 1:
//     '';

  
    
    
//     if(index === inner.length){
     
//       cotain.style.left = null;
//       index = 0;
//       leftInit = -100;            
//     }else if(index === -1){
   
//      cotain.style.left = `${inner.length*-100}%`;
//      index = inner.length-1;
//      leftInit = inner.length*-100;            
//     }
//       document.removeEventListener('mouseup',moveEnd)
//     document.removeEventListener('mousemove',moveIng)
    
    
//     }

 


let TIMEOUT = null;
window.onresize = () => {
  if(TIMEOUT === null) {
    TIMEOUT = window.setTimeout(() => {
      TIMEOUT = null;
      //fb_iframe_widget class is added after first FB.FXBML.parse()
      //fb_iframe_widget_fluid is added in same situation, but only for mobile devices (tablets, phones)
      //By removing those classes FB.XFBML.parse() will reset the plugin widths.
      document.querySelector('.fb-page').classList.remove('fb_iframe_widget');
      document.querySelector('.fb-page').classList.remove('fb_iframe_widget_fluid')
      FB.XFBML.parse();
    }, 300);
  }
}