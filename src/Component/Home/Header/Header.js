import React from "react";
import '../Header/CSS/style.css'
import { BrowserRouter, Route, Link } from "react-router-dom";
class Header extends React.Component {
 render() {
   return (
<div>
<nav class="nav-extended">
    <div class="nav-wrapper"> 
     <img src="//cdn.shopify.com/s/files/1/0009/9555/7491/files/logo_410x.png?v=1526016607" class="primary_logo" alt="Catfootwear PK"/>
      
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="+92348-114747">+92348-1114747</a></li>
        <li><a href="CUSTOMER SERVICE">CUSTOMER SERVICE</a></li>
        <li><a href="FAQS">FAQS</a></li>
        <li><a href="FIND A STORE">FIND A STORE</a></li>
        <li><a href="LOGIN">LOGIN</a></li>
        
        <div id="cstm_shipping_slide2" class="">
        <span><b>NO DELIVERY CHARGES; EXCHANGE WITHIN 30 DAYS.ANNOUNCEMENT!</b></span></div>

    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg> CART 0<a href="/cart" class="icon-cart mini_cart dropdown_link" data-no-instant="" data-click-count="0"> <span class="cart_count"></span></a>
              
        
      </ul>
      
    </div>
    <div class="nav-content"> 
      <ul class="tabs tabs-transparent">
        <li class=""><a href="#MEN">MEN</a></li>
        <li class=""><a class="" href="#ACCESSORIES">ACCESSORIES</a></li>
        <li class=""><a href="#OUTLETS">OUTLETS</a></li>
        <li class=""><a href="#EARTHMOVERS">EARTHMOVERS</a></li>
        <li class=""><a href="#SALE">SALE</a></li>
                
          <ul class="sidenav" id="mobile-demo">
            <li><a href="+92348-1114747">+92348-1114747</a></li>
            <li><a href="CUSTOMERSERVICE">CUSTOMERSERVICE</a></li>
            <li><a href="FAQS">FAQS</a></li>
            <li><a href="FIND A STORE">FIND A STORE</a></li>
            <li><a href="LOGIN.html">LOGIN</a></li>
          </ul>

        
            
            
      </ul>
    </div>
  </nav>

  


</div>

   )
   }
 }
 export default Header