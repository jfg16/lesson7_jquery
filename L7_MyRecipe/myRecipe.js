/*
Program Name: Recipe Display Application
Author: Jonathan Garcia
Date: April 3, 2018
Filename: myRecipe.js 
*/

/* global $ */

//displays the next element after the current target
    function display3(event) {
        
        $(event.currentTarget).next().animate( {height: 'toggle'}, "fast");
        
    }//end of display
    
//attach event listener to h3 elements to invoke display function when clicked 
    $("h3").click(display3);
    $("h4").hover(function(){
            $(this).css("background-color", "gold");
            }, function(){ 
            $(this).css("background-color", "grey");
        });