 var w,h;
 

function opensrc(){
    if(document.querySelector(".ul-class").style.display == "none"){
        document.querySelector(".ul-class").style.display = "block";
    }
    else{
        document.querySelector(".ul-class").style.display = "none";
      }
}
function opensrc2(){
    if(document.querySelector(".ul-class-invoice").style.display == "none"){
    document.querySelector(".ul-class-invoice").style.display = "block";
    }
    else{
        document.querySelector(".ul-class-invoice").style.display = "none";
    }
}
function opensrc3(){
    if(document.querySelector(".ul-class-user").style.display == "none"){
        document.querySelector(".ul-class-user").style.display = "block";
    }
    else{
        document.querySelector(".ul-class-user").style.display = "none";
    }
}
function opensrc4(){
    if(document.querySelector(".list-none").style.display == "none"){
        document.querySelector(".list-none").style.display = "block";
    }
    else{
        document.querySelector(".list-none").style.display = "none";
    }
}
function opensrc5(){
    if(document.querySelector(".ul-class-roles_perm").style.display == "none"){
        document.querySelector(".ul-class-roles_perm").style.display = "block";
    }
    else{
        document.querySelector(".ul-class-roles_perm").style.display = "none";
    }
}
function opensrc6(){
    if(document.querySelector(".ul-class-pages").style.display == "none"){
        document.querySelector(".ul-class-pages").style.display = "block";
    }
    else{
        document.querySelector(".ul-class-pages").style.display = "none";
    }
}
function opensrc7(){
    if(document.querySelector(".list-none-user_profile").style.display == "none"){
        document.querySelector(".list-none-user_profile").style.display = "block";
    }
    else{
        document.querySelector(".list-none-user_profile").style.display = "none";
    }
}
function opensrc8(){
    if(document.querySelector(".list-none-account_profile").style.display == "none"){
        document.querySelector(".list-none-account_profile").style.display = "block";
    }
    else{
        document.querySelector(".list-none-account_profile").style.display = "none";
    }
}
function opensrc9(){
   if(document.querySelector(".list-none-misscel").style.display == "none"){document.querySelector(".list-none-misscel").style.display = "block"}
   else{
   document.querySelector(".list-none-misscel").style.display="none";
}
}
function opensrc10(){
   if( document.querySelector(".ul-class-auth").style.display == "none"){document.querySelector(".ul-class-auth").style.display = "block"}
   else{
  document.querySelector(".ul-class-auth").style.display="none";
}}
function opensrc11(){
   if( document.querySelector(".list-none-login").style.display == "none"){document.querySelector(".list-none-login").style.display = "block"}
   else{
  document.querySelector(".list-none-login").style.display="none";
}}
function opensrc12(){
   if(document.querySelector(".list-none-register").style.display == "none"){document.querySelector(".list-none-register").style.display = "block"}
   else{
  document.querySelector(".list-none-register").style.display="none";
}}
function opensrc13(){
   if( document.querySelector(".list-none-verify").style.display == "none"){document.querySelector(".list-none-verify").style.display = "block"}
   else{
  document.querySelector(".list-none-verify").style.display="none";
}}
function opensrc14(){
   if( document.querySelector(".list-none-fp").style.display == "none"){document.querySelector(".list-none-fp").style.display = "block"}
   else{
  document.querySelector(".list-none-fp").style.display="none";
}}
function opensrc15(){
   if( document.querySelector(".list-none-reset").style.display == "none"){document.querySelector(".list-none-reset").style.display = "block"}
   else{
  document.querySelector(".list-none-reset").style.display="none";
}}
function opensrc16(){
   if( document.querySelector(".list-none-ts").style.display == "none"){document.querySelector(".list-none-ts").style.display = "block"}
   else{
  document.querySelector(".list-none-ts").style.display="none";
}}
function opensrc17(){
   if( document.querySelector(".ul-class-we").style.display == "none"){document.querySelector(".ul-class-we").style.display = "block"}
   else{
  document.querySelector(".ul-class-we").style.display="none";
}}
function opensrc18(){
    
    if(document.querySelector(".ul-class-cards").style.display == "none"){
        document.querySelector(".ul-class-cards").style.display = "block";
    }
    else{
        document.querySelector(".ul-class-cards").style.display = "none";
    }

 
}
function opensrc19(){
   if( document.querySelector(".ul-class-components").style.display == "none"){document.querySelector(".ul-class-components").style.display = "block"}
   else{
  document.querySelector(".ul-class-components").style.display="none";
}}
function opensrc20(){
   if( document.querySelector(".ul-class-fele").style.display == "none"){document.querySelector(".ul-class-fele").style.display = "block"}
   else{
  document.querySelector(".ul-class-fele").style.display="none";
}}
function opensrc21(){
   if( document.querySelector(".ul-class-chart-final").style.display == "none"){document.querySelector(".ul-class-chart-final").style.display = "block"}
   else{
  document.querySelector(".ul-class-chart-final").style.display="none";
}
}
function opensrc22(){
   if( document.querySelector(".ul-class-others").style.display == "none"){document.querySelector(".ul-class-others").style.display = "block"}
   else{
  document.querySelector(".ul-class-others").style.display="none";
}
}
function opensrc23(){
   if( document.querySelector(".list-none-menu2").style.display == "none"){document.querySelector(".list-none-menu2").style.display = "block"}
   else{
  document.querySelector(".list-none-menu2").style.display="none";
}
}
function opensrc24(){
   if( document.querySelector(".list-none-menu3").style.display == "none"){document.querySelector(".list-none-menu3").style.display = "block"}
   else{
  document.querySelector(".list-none-menu3").style.display="none";
}
}
function opensrc25(){
    document.querySelector(".main").style.display = "block";
    document.querySelector(".nav-icons").style.display ="none";
}
function opensrc26(){
    document.querySelector(".nav-icons").style.display ="block";
    document.querySelector(".main").style.display = "none";

}
window.onresize = window.onload = function() {
    w = this.innerWidth;
    h = this.innerHeight;
    
    if(w>1200){
        document.querySelector(".nav-icons").style.display ="none";
    document.querySelector(".main").style.display = "block"; 
    }
    else{
        document.querySelector(".nav-icons").style.display ="block";
        document.querySelector(".main").style.display = "none";
    }
    
}
 


 



 


