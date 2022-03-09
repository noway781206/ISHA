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



let outer = document.querySelector('.new');
let inner = document.querySelectorAll('.new .inner');
let cotain = document.querySelector('.cotain');


let x = 0,star;
let drawing = false;

(function test() {
  outer.addEventListener('mousedown',(e)=>{  
  e.preventDefault(); 
  star = e.clientX;
  document.addEventListener('mouseup',moveEnd)
  document.addEventListener('mousemove',moveIng);
 });
  function moveIng(e){  
    x = e.clientX;
    let percent = Math.floor((star - x) / outer.offsetWidth *-100)
    cotain.style.transform = `translateX(${percent/3}%)`
    console.log(star,x,percent);  
  }
  function moveEnd(e){
      cotain.style.transform = `translateX(0)`
      document.removeEventListener('mouseup',moveEnd)
    document.removeEventListener('mousemove',moveIng)
    }
})()



//  outer.addEventListener('mousemove',(e)=>{
//   e = e||window.event
//   if(drawing !== true) return;
//   x = e.clientX;
//   let percent = Math.floor((star - x) / e.currentTarget.offsetWidth *-100)
  


//   if(percent >= -100 || percent <= 100){
//   cotain.style.transform = `translateX(${percent/3}%)`
// }

// if(percent < -100){
//   cotain.style.transform = `translateX(${-100/3}%)`
// }
// if(percent > 100){
//   cotain.style.transform = `translateX(${100/3}%)`
// }
 


  
  
   
   
//   })

 
//   window.addEventListener('mouseup',()=>{
    
//     drawing = false;
//     cotain.style.transform = `translateX(0)`
//     console.log(drawing);
    

//  });


