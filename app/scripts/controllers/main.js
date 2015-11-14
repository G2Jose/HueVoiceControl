'use strict';

/**
 * @ngdoc function
 * @name raspberrypivoicecontrolhueApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the raspberrypivoicecontrolhueApp
 */
angular.module('raspberrypivoicecontrolhueApp')
  .controller('MainCtrl', function ($scope, $http) {

  	$scope.turnOn = function(){

  		$scope.method = 'PUT';
	    $scope.url = 'http://192.168.0.21/api/14681cbe10e72d072faf0cd21eda252b/lights/1/state';
	    $scope.turnoffjson = '{"on":true}';
	    this.urls = [
	    	'http://192.168.0.21/api/14681cbe10e72d072faf0cd21eda252b/lights/1/state', 
	    	'http://192.168.0.21/api/14681cbe10e72d072faf0cd21eda252b/lights/2/state', 
	    	'http://192.168.0.21/api/14681cbe10e72d072faf0cd21eda252b/lights/3/state'
	    ];
	    for (var i = 0; i < this.urls.length; i ++ ){
		    $http.put(this.urls[i], $scope.turnoffjson)
	            .success(function(data){

	               console.log(data);
	            })
	            .error(function(data){
	            	$scope.message = 'error';
	               console.log('Error: ' + data);
	            });
        }
  		
  	};

  	$scope.turnOff = function(){
  		$scope.method = 'PUT';
	    $scope.url = 'http://192.168.0.21/api/14681cbe10e72d072faf0cd21eda252b/lights/1/state';
	    $scope.turnoffjson = '{"on":false}';
	    this.urls = [
	    	'http://192.168.0.21/api/14681cbe10e72d072faf0cd21eda252b/lights/1/state', 
	    	'http://192.168.0.21/api/14681cbe10e72d072faf0cd21eda252b/lights/2/state', 
	    	'http://192.168.0.21/api/14681cbe10e72d072faf0cd21eda252b/lights/3/state'
	    ];
	    for (var i = 0; i < this.urls.length; i ++ ){
		    $http.put(this.urls[i], $scope.turnoffjson)
	            .success(function(data){

	               console.log(data);
	            })
	            .error(function(data){
	            	$scope.message = 'error';
	               console.log('Error: ' + data);
	            });
        }
  		
  	};




    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
