
var Year = document.getElementById("Year");
var Month = document.getElementById("Month");
var Day = document.getElementById("Day");
var result = document.getElementById("result");

function a(){
  var dates = new Date(Year.value,Month.value,Day.value);
  var days=dates.getDay();

  switch(days)
{
    case 0:result.innerHTML="sunday"; 
    alert("your Akan name is kwasi");
    break;
    case 1:result.innerHTML="monday";
    alert("your Akan name is kwadwo");
     break;
    case 2:result.innerHTML="tuesday"; 
    alert("your Akan name is kwabena")
    break;
    case 3:result.innerHTML="wednesday"; 
    alert("your Akan name is kwaku")
    break;
    case 4:result.innerHTML="thursday"; 
    alert("your Akan name is yaw")
    break;
    case 5:result.innerHTML="friday"; 
    alert("your Akan name is kofi")
    break;
    case 6:result.innerHTML="saturday"; 
    alert("your Akan name is kwame")
    break;
 }
}

function b(){
var dates = new Date(Year.value,Month.value,Day.value);
var days=dates.getDay();

switch(days)
{
    case 0:result.innerHTML="sunday"; 
    alert("your Akan name is Akousa");
    break;
    case 1:result.innerHTML="monday";
    alert("your Akan name is Adowa");
     break;
    case 2:result.innerHTML="tuesday"; 
    alert("your Akan name is Abeena")
    break;
    case 3:result.innerHTML="wednesday"; 
    alert("your Akan  name is Akua")
    break;
    case 4:result.innerHTML="thursday"; 
    alert("your Akan name is yaa")
    break;
    case 5:result.innerHTML="friday"; 
    alert("your Akan name is Afua")
    break;
    case 6:result.innerHTML="saturday"; 
    alert("your Akan name is Ama")
    break;
}
}
 
