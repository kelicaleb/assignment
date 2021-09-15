
$(document).ready(function(){
    $("#para1").hide();
    $('#design').click(function(){
       $('#para1').toggle();
   });
   $("#para2").hide();
   $('#development').click(function(){
       $('#para2').toggle();
   });
   $("#para3").hide();
   $('#management').click(function(){
       $('#para3').toggle();
       
   });

  })

const a = document.querySelector("#caleb");


a.addEventListener("submit", function(x){
    x.preventDefault();
    const jsform = new FormData(a);
    console.log(jsform.get("username"));
    console.log(jsform.get("email"));
    if(jsform.get("username") && jsform.get("email")){
        alert("Thank you for contacting us we will get back to you ")

    }
    else{
        alert("please provide us with your conatcts ")
    }

})
