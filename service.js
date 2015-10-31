var app = angular.module("github-api");
var id = "myCLientID";
var sec = "mySecretKeyThing";
var param = "?=3257a93c96b37cf80ae9" + id + "&=45becb1dda65f5af435cb81048b8791bd02440f9" + sec;
$http({ method: 'GET',
  url: 'https://api.github.com/users/' + 3257a93c96b37cf80ae9' }).then(function successCallback(getUser) {
   
}, function errorCallback(getUsure) {
    
  });
