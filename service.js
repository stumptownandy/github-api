var app = angular.module("github-api");
app.service('githubService', function($http) {


var id = "myCLientID";
var sec = "mySecretKeyThing";
var param = "?=3257a93c96b37cf80ae9" + username + "&=45becb1dda65f5af435cb81048b8791bd02440f9" + sec;

this.getUser = function() {
    
    return $http({ 
        method: 'GET', 
        url: 'https://api.github.com/users/'+ username
    });
  }
});
 