/**
 * Author - Anirudh
 */
'use strict';
app.config(['$routeProvider',function($routeProvider){
	//$locationProvider.hashPrefix('!');
	$routeProvider.
		when('/accounts', {
		  template: '<ab-accounts></ab-accounts>'
		}).
		otherwise('/accounts');
}]);
