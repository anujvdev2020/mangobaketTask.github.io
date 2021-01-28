
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
 
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


  document.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{
     document.querySelector('.wrapper').style.display="none"
    },3000)
  })