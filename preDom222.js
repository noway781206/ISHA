(async () => {
  //開始

function preDom() {
//pre開始
let header = document.querySelector('header');
let menu = document.querySelector('#menu'); 
fetch('header.html')
.then(function(response) {
// When the page is loaded convert it to text
return response.text()
})
.then(function(html) {

document.querySelector('header').innerHTML = html;

})
.catch(function(err) {  
console.log('Failed to fetch page: ', err);  
})


fetch('footer.html')
.then(function(response) {
// When the page is loaded convert it to text
return response.text()
})
.then(function(html) {

document.querySelector('footer').innerHTML = html;

})
.catch(function(err) {  
console.log('Failed to fetch page: ', err);  
});

function innerHTML() {  
  
  

let reportWindowSize = ()=> {  
  return  
                          
  header.style.marginTop = window.innerHeight*20/100+'px';
  }

reportWindowSize()
window.addEventListener('resize', reportWindowSize);



}

//predom end
}
preDom()

})().then(()=>{
document.addEventListener("DOMContentLoaded",()=>{

const jsScript = document.createElement('script')
jsScript.src ='always.js'
document.body.append(jsScript)


});



//結束
})