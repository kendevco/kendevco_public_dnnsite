(function (angular) {
    angular.module('agreementlinks', [])
        .directive('agreementlinks', ['$timeout', '$sce', function ($timeout, $sce) {
            return {
                restrict: 'A',
                replace: true,
                templateUrl: dnnsf.commonUrl + '/static/angular15/agreementlinks/agreementlinks.html?v=' + dnnsf.commonVersion,
                scope: {
                    title: '@',
                    content: '=',
                    enforce: '@',
                    field: '=',
                    separator: '@',
                    popupHeight: '@',
                    popupWidth: '@',
                    closeButton: '@',
                    disagreeButton: '@',
                    ngModel: '=',
                    isBs5: '=',
                },
                link: function (scope) {
                    scope.$sce = $sce;
                    scope.ngModel = (scope.ngModel === 'True');
                    scope.enforce = (scope.enforce === 'True');
                    scope.modalId = scope.field.TitleCompacted + scope.field.FormFieldId + 'terms';
                    scope.index = 0;
                    var printMode = '&dnnprintmode=true&SkinSrc=%5bG%5dSkins%2f_default%2fNo+Skin&ContainerSrc=%5bG%5dContainers%2f_default%2fNo+Container';
                    scope.height = 0;
                    scope.agreeButton = scope.closeButton || 'I agree';

                    if (scope.enforce) {
                        scope.$watch('ngModel', function (newValue, oldValue, scope) {
                            if (newValue == true && (oldValue == 'False' || !oldValue) && !scope.accept) {
                                scope.ngModel = false;
                                scope.content[scope.index] && scope.openModal(scope.content[scope.index]);
                            }
                        });
                    }

                    scope.openModal = function (link) {
                        var $modal = $('#' + scope.modalId);

                        $modal.on('click', function (event) {
                            event.preventDefault();
                        });

                        scope.contentId = link.LinkText;
                        if (link.ContentType == 'html') {
                            scope.contentHtml = link.Html;
                            scope.termsUrl = "";
                        } else {
                            var url = isNaN(parseInt(link.PageId)) ? link.PageId : '/?tabId=' + link.PageId + printMode;
                            scope.termsUrl != url && (scope.termsUrl = url);
                        }

                        $timeout(function () {
                            $modal.on('shown.bs.modal', function () {
                                scope.$apply(function () {
                                    scope.height = parseInt($modal.find('.modal-dialog').height());
                                });
                            });
                            $modal.on('hidden.bs.modal', function () {
                                scope.$apply(function () {
                                    scope.contentId = scope.contentHtml = '';
                                });
                            });
                            $modal.modal('show');

                        }, 0);
                    };

                    scope.agree = function () {
                        var $modal = $('#' + scope.modalId);

                        if (scope.enforce) {
                            scope.index++;
                            if (scope.content[scope.index]) {
                                scope.contentId = scope.contentHtml = "";
                                scope.openModal(scope.content[scope.index]);
                                $('html, .modal').animate({ scrollTop: 0 }, 'slow');
                            } else {
                                $modal.modal('hide');
                                scope.accept = true;
                                scope.ngModel = true;
                                scope.index = 0;
                            }
                        } else {
                            $modal.modal('hide');
                        }

                    };

                    scope.disagree = function () {
                        var $modal = $('#' + scope.modalId);

                        $modal.modal('hide');
                        scope.accept = false;
                        scope.ngModel = false;
                        scope.index = 0;
                    }

                    scope.closeModal = function () {
                        var $modal = $('#' + scope.modalId);
                        $modal.modal('hide');
                    }

                }
            };
        }]);
})(window.dnnsfAngular15 || window.angular)