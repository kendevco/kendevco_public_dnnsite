
// This is the AngularJS controller for the AngularJS demos
// Note that we (2sic) always strive to follow the AngularJS community best practices
// So if you're missing something like the $scope, 
// ...please read https://github.com/johnpapa/angularjs-styleguide#controlleras-with-vm

(function () { 

    angular.module("AngularRestDemos", ['2sxc4ng'])
        .controller("GetList", GetListController);

    function GetListController($http) {
        var vm = this;
        vm.message = "loading";

        $http.get('app/auto/content/Category').then(function (result) {
            vm.items = result.data;
            vm.message = "Success, the $.ajax(...) worked! I found " + result.data.length 
                + " categories, the first one is '" + result.data[0].Title + "'";
        });
    };


} ());