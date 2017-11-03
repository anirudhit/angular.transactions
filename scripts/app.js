/**
 * Author - Anirudh
 */
'use strict';
app.controller('AbCtrl', ['$scope', function($scope){
	$scope.profile	=	{
        "header"    :   [
            {
                "title"         :   "Accounts",
                "navigateTo"    :   "#!/accounts"
            }
        ]
	};
    $scope.$on('$routeChangeStart', function(next, current){
        if(current.$$route){
            var _chCurrent = "#!"+current.$$route.originalPath;
            angular.forEach($scope.profile.header,function(nav){
                if(nav.navigateTo === _chCurrent){
                    nav.selected = true;
                }else{
                    nav.selected = false;
                }
            });
        }
    });
}]);
