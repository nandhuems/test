// create the module and name it scotchApp
    var scotchApp = angular.module('scotchApp', ['ngRoute', 'ngMessages']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });

    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController',['$scope','$http', function($scope, $http) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
		$scope.formData = "";
		var $serviceUrlLink = "";
		$scope.usertypes = ['user','admin'];
		$scope.submit = function(validate_form) {
			$scope.submitted = true;
			if (validate_form.$valid) {
				$scope.cust_update_data = {
					'profile_id': $profile_id
				};
				
			    $http({
                method  : 'POST', //PUT
                url     : $serviceUrlLink,
                data    : $scope.cust_update_data, 
                headers : { 'Content-Type': 'application/json' }  
				}).success(function(response){
					alert(response);
				});
			}
		 };
		 
		$scope.interacted = function(field) {
		  return $scope.submitted || field.$dirty;
		};
    }]);

    scotchApp.controller('aboutController',['$scope','$http', function($scope, $http) {
        $scope.message = 'Look! I am an about page.';
		var $serviceUrlLink = "";
		$http.get($serviceUrlLink).
		success(function(data, status, headers, config) {
		$scope.vehicleDetailsList = data.rec;
		}).
		error(function(data, status, headers, config) {
		  
		});	 
		
		
		$http.delete($serviceUrlLink).
		success(function(data, status, headers, config) {
		 alert(123);
		}).
		error(function(data, status, headers, config) {
		  
		});	 
		
    }]);

    scotchApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });

                