(function (angular) {
    angular.module("dnnsfConstants", [])
        .factory("constantsService", function () {
            return {
                requiresSvcframework: function () { return true; },
                helperScriptsPath: g_dnnsfState.viewUrl + "/mid/" + g_dnnsfState.moduleId + "/moduleId/" + g_dnnsfState.moduleId + "/controller/Main/action/",
                helperScriptsExtension: ""
            }
        })

    window.dnnsfDependencies ? window.dnnsfDependencies.push("dnnsfConstants") : (window.dnnsfDependencies = ["dnnsfConstants"]);
})(dnnsfAngular15 || angular);