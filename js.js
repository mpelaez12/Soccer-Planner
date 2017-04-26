// JavaScript File

$("#submit-button").click(function(){
    var input = $("#zipcode").val();
    window.location="second.html?zipcode="+input
});
