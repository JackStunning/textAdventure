$(document).ready(function(){

  // Variables

  var urlParams = document.URL.split("?")[1];
  var userName = urlParams.split("name=")[1];
  var userClass = urlParams.split("class=")[1].split("&")[0];

  $("#userName").append(userName);
  $("#userClass").append(userClass);


  // restart button
  $("#restart").click(function(){
    $(location).attr("href", "./index.html");
  })

  // getName function
  function getName(userName) {
    return userName;
  }

  // getClass function
  function getClass(userClass) {
    return userClass;
  }

});