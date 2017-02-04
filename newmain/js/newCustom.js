"use strict";
var _customJs = (function customJs(){
    var returnable = {};
    var navItemsNodes = document.querySelectorAll("nav div ul li");
    var navItemsArray = [].slice.call(navItemsNodes);
    for(var navItem in navItemsArray)
    {
        navItemsArray[navItem].onclick = function navClick(){
            //iterate over all nav elements and clear selected
            for(var navItem in navItemsArray)
            {
                navItemsArray[navItem].classList.remove("pure-menu-selected");
            }
            //mark current item as selected
            this.classList.add("pure-menu-selected");
//            location.hash = "#" + ;
        }
    }
    
    return returnable;
}())