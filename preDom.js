{
    //開始

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
    });

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
//     fetch("image/social-color-1_logo-facebook.svg")
//   .then(response => response.text())
//   .then(svg => document.querySelector('#facebook_Icon').insertAdjacentHTML("afterbegin", svg));

//   fetch("image/social-color-1_logo-youtube.svg")
//   .then(response => response.text())
//   .then(svg => document.querySelector('#youtube_Icon').insertAdjacentHTML("afterbegin", svg));

    

    function innerHTML() {  
        
        

        let reportWindowSize = ()=> {  
            return  
                                    
            header.style.marginTop = window.innerHeight*20/100+'px';
            }

        reportWindowSize()
        window.addEventListener('resize', reportWindowSize);
        
        
        
    }
    
    
    
    

document.addEventListener("DOMContentLoaded",innerHTML);
let header = document.querySelector('header');
        let menu = document.querySelector('#menu');

  //結束
}