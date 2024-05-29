
// This is the AngularJS controller for the AngularJS demos
// Note that we (2sic) always strive to follow the AngularJS community best practices
// So if you're missing something like the $scope, please read https://github.com/johnpapa/angularjs-styleguide#controlleras-with-vm

(function () { 

    angular.module("AngularRestDemos", ['2sxc4ng'])
        .controller("CreateFeedback", CreateFeedbackController)
        .controller("ManageFeedback", ManageFeedbackController)
        .controller("GetQuery", GetQueryController);

    // --------------------------------------------------------------------------------------------------------------
    function CreateFeedbackController(content) {
        var vm = this;
        vm.message = "Ready - when you click, I'll create an item";

        vm.item = {
            Subject: "New feedback from " + Date.now(),
            Message: "I love REST"
        }

        vm.add = function() {
            content('Feedback').create(vm.item).then(function(result) {
                vm.message = "I just created a new item in the content-database. I'm not showing it here to keep the code very simple - this could be a thank-you message after a contact form.";
            });
        }
    };

    // --------------------------------------------------------------------------------------------------------------
    function ManageFeedbackController(content) {
        var vm = this;
        vm.message = "loading";

        content('Feedback').get().then(function(result) {
            vm.items = result.data;
            vm.message = "Loaded, you may delete now";
        });

        vm.delete = function(item) {
            content('Feedback').delete(item.Id).then(function(){
                content('Feedback').get().then(function(result){
                    vm.items = result.data;
                })
            });
        }
    };

    // --------------------------------------------------------------------------------------------------------------
    function GetQueryController($http) {
        var vm = this;
        vm.message = "loading";

        $http.get('app-query/EverythingSorted').then(function (result) {
            vm.items = result.data.Default;
            vm.message = "Success, sorted query worked! I found " + result.data.Category.length + " categories, the first one is '" + result.data.Category[0].Title + "'";
        });
    };

} ());