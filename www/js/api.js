
var serverUrl = 'http://on-time-dev.elasticbeanstalk.com';
// var serverUrl = 'http://10.6.31.117:3000';

var getRoutes = function($http, longitude, latitude, destAddress, callback) {
    $http.post(serverUrl + '/api/routes',
        {
            origin: { "longitude": longitude, "latitude": latitude },
            destAddress : destAddress
        }).success(function(data) {
            console.log(data);
            callback(data);
     }).error(function(data) {
         console.log(data);
     });
};

var getCalendarEvents = function($http, callback) {

    $http.get(serverUrl + '/cal/events').success(function(data) {
        callback(data);
    }).error(function(error) {
        console.log(error);
    });
};

var getEvents = function($http, callback) {

  // console.log('getEvents triggered');

  //   $http.get(serverUrl + '/cal/events').success(function(data) {
  //       callback(data);
  //       console.log(data);
  //   }).error(function(error) {
  //       console.log(error);
  //   });
};
