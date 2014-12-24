
angular.module('employeeApp.directives')
.directive('modal', [function () {
    var backdrop;
    var closeButton;
    
    function create_backdrop() {
        return angular.element('<div id="backdrop"></div>');
    }
    
    function postLink(scope, element, attr) {
        

    }
    
    return {
        restrict: 'A',
        scope: false,
        compile: function (Element, Attrs) {
			return {
				pre: function (scope, tElement, tAttrs) {
						tElement.addClass('modal hide');
						if (tAttrs.title) {
							closeButton = angular.element('<button type="button" class="close">&times;</button>');
							var title = angular.element('<div class="title"><h4>' + tAttrs.title + '</h4></div>');
							title.append(closeButton);
							tElement.append(title);
						} else {
							//throw Error("Missing Title");
						}
				},
				post: function (scope, element, attrs) {
       
					function show(scope, element) {
						element.removeClass('hide');
						backdrop = create_backdrop();
						$(document.body).append(backdrop); 
						backdrop.on('click', function () {
							hide(scope, element, backdrop);
						});
	
						backdrop.fadeTo(500, 0.7);
						element.fadeTo(500, 1, function () {
							scope.$broadcast('shown');
						});
					}
	
					function hide(scope, element, backdrop, callback) {

						element.fadeOut(400, function () {
							element.addClass('hide');
							scope.$broadcast('hidden');
						});

						if (backdrop) {
							backdrop.fadeOut(500, function () {
								backdrop.remove();
								(callback || angular.noop)();
								try {
									(scope.modal._onhide && scope.modal || angular.noop)();
								} catch (e) {
									console.warn(e);
								}

								if (attrs.ngModel || attrs.modal) {
									if (scope.$$phase == '$apply' || scope.$$phase == '$digest') {
										scope[attrs.ngModel || attrs.modal] = false;
									} else {
										scope.$apply(function () {
											scope[attrs.ngModel || attrs.modal] = false;
										});
									}
								}

								if (attrs.onhide) {
									scope.$eval(attrs.onhide);
								}
							});
						}
					}
					/*
					* Hide the modal when the page
					* changes based on the scope 
					* messages
					*/
					scope.$on('$destroy', function () {
						if (backdrop) {
							backdrop.remove();
						}
					});

					if (attrs.ngModel || attrs.modal) {
						scope.$watch(attrs.ngModel || attrs.modal, function (value) {
							if (value) {
								show(scope, element);
							} else {
								hide(scope, element, backdrop);
							}
						});
					}

					scope.modal = {_onhide: undefined};
					scope.modal.show = function () {
						show(scope, element);
					};
					scope.modal.hide = function (callback) {
						hide(scope, element, backdrop, callback);
					};

					Object.defineProperties(scope.modal, {
						onhide: {
							set: function (fn) {
								this._onhide = fn;
							}
						}
					});

					if (closeButton) {
						closeButton.click(function () {
							scope.$apply(function () {
								scope[attrs.ngModel || attrs.modal] = false;
							});
						});
					}
				}
			};
		}
	};
}]);
