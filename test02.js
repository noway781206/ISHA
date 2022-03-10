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
// let outpercent;


// let x = 0,star;
// let drawing = false;


//   outer.addEventListener('mousedown',(e)=>{  
//   e.preventDefault(); 
//   console.log(e,window.event);
  
//   star = e.clientX;
//   document.addEventListener('mouseup',moveEnd)
//   document.addEventListener('mousemove',moveIng);
//  });
//  let leftInit = -100;
//   function moveIng(e){  
//     x = e.clientX;
//     let percent = Math.floor((star - x) / outer.offsetWidth *-100)
//     outpercent = percent;
//     // cotain.style.transform = `translateX(${percent/3}%)`
//     cotain.style.left = `${leftInit+percent}%`;
//     console.log(star,x,percent);  
//   }
  
//   function moveEnd(e){
//     cotain.classList.add('active');
//     leftInit< 0 && outpercent > 30 ? cotain.style.left = `${leftInit+100}%`:
//     leftInit > -200 && outpercent < -30? cotain.style.left = `${leftInit-100}%`:
//     cotain.style.left = `${leftInit}%`;

//     leftInit< 0 && outpercent > 30 ? leftInit += 100:
//     leftInit > -200 && outpercent < -30? leftInit += -100:
//     '';
//     cotain.addEventListener('transitionend',function () {
//       cotain.classList.remove('active');
//     })

    
    
     
//       document.removeEventListener('mouseup',moveEnd)
//     document.removeEventListener('mousemove',moveIng)
//     }





// JS
let div = document.querySelector('div')
let touchstartX,touchstartY,touchsMovingY,
touchsMovingX,touchendY,touchendX,newMovingX,newMovingY;
var switcher = false;
window.addEventListener('touchstart',(e)=>{
  touchstartX = e.changedTouches[0].screenX;
  touchstartY = e.changedTouches[0].screenY;
  newMovingX = touchstartX
  
})
window.addEventListener('touchend',(e)=>{
 
  touchendX = e.changedTouches[0].screenX;
  touchendY = e.changedTouches[0].screenY;
  switcher = false
  div.innerHTML = switcher
  
})
window.addEventListener('touchmove',(e)=>{
  touchsMovingY = e.changedTouches[0].screenY;
  touchsMovingX = e.changedTouches[0].screenX;
  if(!switcher){
  var timer12 = setTimeout(() => {
    newMovingX = touchsMovingX
    newMovingY = touchsMovingY
  
  }, 50);
  }
  
  
  if(newMovingX - touchsMovingX >30&&
    newMovingY - touchsMovingY > -20&&
    newMovingY - touchsMovingY < 20){
    switcher = true
        console.log(switcher);
        div.innerHTML = switcher
        
  }
  
  console.log(touchstartX,newMovingX,touchsMovingX);
})




