(async () => {
    //開始
  
 
  //pre開始
  
//   fetch('header.html')
//   .then(function(response) {
//   // When the page is loaded convert it to text
//   return response.text()
//   })
//   .then(function(html) {
  
//   document.querySelector('header').innerHTML = html;
  
  
//   })
//   .catch(function(err) {  
//   console.log('Failed to fetch page: ', err);  
//   })
  
  
//   fetch('footer.html')
//   .then(function(response) {
//   // When the page is loaded convert it to text
//   return response.text()
//   })
//   .then(function(html) {
  
//   document.querySelector('footer').innerHTML = html;
  
//   })
//   .catch(function(err) {  
//   console.log('Failed to fetch page: ', err);  
//   });
  
axios.get('header.html')
.then((res) => {
    this.markDownData = res.data
    document.querySelector('header').innerHTML = res.data;    
}).catch((error) => {
    console.error(error) 
}).then(()=>{
    const jsScript = document.createElement('script')
    jsScript.src ='always.js'
    document.body.append(jsScript)
})

axios.get('footer.html')
.then((res) => {
    this.markDownData = res.data
    document.querySelector('footer').innerHTML = res.data;    
}).catch((error) => {
    console.error(error) 
})


  
  //predom end
  
 
  
  
  })().then(()=>{
      
   
   
    
//   document.addEventListener("DOMContentLoaded",()=>{
  
//   const jsScript = document.createElement('script')
//   jsScript.src ='always.js'
//   document.body.append(jsScript)
  
  
//   });
  
  
  
  //結束
  })