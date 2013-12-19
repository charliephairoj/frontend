angular.module('employeeApp.services', ['ngResource']);
angular.module('employeeApp.directives', []);
angular.module('employeeApp.filters', []);
angular.module('employeeApp', [
  'ngRoute',
  'ngResource',
  'ui',
  'employeeApp.directives',
  'employeeApp.filters',
  'employeeApp.services',
  'ngGrid',
  'pascalprecht.translate'
]).config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    }).when('/contact/customer/add', {
      templateUrl: 'views/contact/customer/add.html',
      controller: 'ContactCustomerAddCtrl'
    }).when('/contact/customer/:id', {
      templateUrl: 'views/contact/customer/details.html',
      controller: 'ContactCustomerDetailsCtrl'
    }).when('/contact/customer', {
      templateUrl: 'views/contact/customer/view.html',
      controller: 'ContactCustomerViewCtrl'
    }).when('/contact/supplier/add', {
      templateUrl: 'views/contact/supplier/add.html',
      controller: 'ContactSupplierAddCtrl'
    }).when('/contact/supplier', {
      templateUrl: 'views/contact/supplier/view.html',
      controller: 'ContactSupplierViewCtrl'
    }).when('/contact/supplier/:id', {
      templateUrl: 'views/contact/supplier/details.html',
      controller: 'ContactSupplierDetailsCtrl'
    }).when('/contact', { templateUrl: 'views/contact.html' }).when('/product/upholstery/add', {
      templateUrl: 'views/product/upholstery/add.html',
      controller: 'ProductUpholsteryAddCtrl'
    }).when('/product/upholstery', {
      templateUrl: 'views/product/upholstery/view.html',
      controller: 'ProductUpholsteryViewCtrl'
    }).when('/product/upholstery/:id', {
      templateUrl: 'views/product/upholstery/details.html',
      controller: 'ProductUpholsteryDetailsCtrl'
    }).when('/product', { templateUrl: 'views/product.html' }).when('/product/model/add', {
      templateUrl: 'views/product/model/add.html',
      controller: 'ProductModelAddCtrl'
    }).when('/product/model', {
      templateUrl: 'views/product/model/view.html',
      controller: 'ProductModelViewCtrl'
    }).when('/product/model/:id', {
      templateUrl: 'views/product/model/details.html',
      controller: 'ProductModelDetailsCtrl'
    }).when('/order/acknowledgement/create', {
      templateUrl: 'views/order/acknowledgement/create.html',
      controller: 'OrderAcknowledgementCreateCtrl'
    }).when('/order', { templateUrl: 'views/order.html' }).when('/order/acknowledgement', {
      templateUrl: 'views/order/acknowledgement/view.html',
      controller: 'OrderAcknowledgementViewCtrl'
    }).when('/order/shipping/create', {
      templateUrl: 'views/order/shipping/create.html',
      controller: 'OrderShippingCreateCtrl'
    }).when('/order/shipping', {
      templateUrl: 'views/order/shipping/view.html',
      controller: 'OrderShippingViewCtrl'
    }).when('/order/shipping/deliveries/today', {
      templateUrl: 'views/order/shipping/today.html',
      controller: 'OrderShippingTodayCtrl'
    }).when('/order/shipping/deliveries/week', {
      templateUrl: 'views/order/shipping/week.html',
      controller: 'OrderShippingWeekCtrl'
    }).when('/administrator/group/add', {
      templateUrl: 'views/administrator/group/add.html',
      controller: 'AdministratorGroupAddCtrl'
    }).when('/administrator/group', {
      templateUrl: 'views/administrator/group/view.html',
      controller: 'AdministratorGroupViewCtrl'
    }).when('/administrator/group/:id', {
      templateUrl: 'views/administrator/group/details.html',
      controller: 'AdministratorGroupDetailsCtrl'
    }).when('/administrator/user/add', {
      templateUrl: 'views/administrator/user/add.html',
      controller: 'AdministratorUserAddCtrl'
    }).when('/administrator/user/:id', {
      templateUrl: 'views/administrator/user/details.html',
      controller: 'AdministratorUserDetailsCtrl'
    }).when('/administrator/user', {
      templateUrl: 'views/administrator/user/view.html',
      controller: 'AdministratorUserViewCtrl'
    }).when('/administrator', { templateUrl: 'views/administrator.html' }).when('/supply', {
      templateUrl: 'views/supply/view.html',
      controller: 'SupplyViewCtrl'
    }).when('/supply/fabric', {
      templateUrl: 'views/supply/fabric/view.html',
      controller: 'SupplyFabricViewCtrl'
    }).when('/supply/fabric/add', {
      templateUrl: 'views/supply/fabric/add.html',
      controller: 'SupplyFabricAddCtrl'
    }).when('/supply/fabric/:id', {
      templateUrl: 'views/supply/fabric/details.html',
      controller: 'SupplyFabricDetailsCtrl'
    }).when('/supply/foam/add', {
      templateUrl: 'views/supply/foam/add.html',
      controller: 'SupplyFoamAddCtrl'
    }).when('/supply/foam/:id', {
      templateUrl: 'views/supply/foam/details.html',
      controller: 'SupplyFoamDetailsCtrl'
    }).when('/supply/foam', {
      templateUrl: 'views/supply/foam/view.html',
      controller: 'SupplyFoamViewCtrl'
    }).when('/accounting', { templateUrl: 'views/accounting.html' }).when('/accounting/transaction', {
      templateUrl: 'views/accounting/transaction/view.html',
      controller: 'AccountingTransactionViewCtrl'
    }).when('/accounting/transaction/add', {
      templateUrl: 'views/accounting/transaction/add.html',
      controller: 'AccountingTransactionAddCtrl'
    }).when('/accounting/transaction/:id', {
      templateUrl: 'views/accounting/transaction/details.html',
      controller: 'AccountingTransactionDetailsCtrl'
    }).when('/order/acknowledgement/:id', {
      templateUrl: 'views/order/acknowledgement/details.html',
      controller: 'OrderAcknowledgementDetailsCtrl'
    }).when('/order/shipping/delivery', {
      templateUrl: 'views/order/shipping/delivery.html',
      controller: 'OrderShippingDeliveryCtrl'
    }).when('/order/shipping/:id', {
      templateUrl: 'views/order/shipping/details.html',
      controller: 'OrderShippingDetailsCtrl'
    }).when('/order/acknowledgement/item/:id', {
      templateUrl: 'views/order/acknowledgement/item/details.html',
      controller: 'OrderAcknowledgementItemDetailsCtrl'
    }).when('/supply/prop', {
      templateUrl: 'views/supply/prop/view.html',
      controller: 'SupplyPropViewCtrl'
    }).when('/supply/prop/add', {
      templateUrl: 'views/supply/prop/add.html',
      controller: 'SupplyPropAddCtrl'
    }).when('/supply/prop/:id', {
      templateUrl: 'views/supply/prop/details.html',
      controller: 'SupplyPropDetailsCtrl'
    }).when('/supply/lumber/view', {
      templateUrl: 'views/supply/lumber/view.html',
      controller: 'SupplyLumberViewCtrl'
    }).when('/product/inventory', {
      templateUrl: 'views/product/inventory.html',
      controller: 'ProductInventoryCtrl'
    }).when('/product/table', {
      templateUrl: 'views/product/table/view.html',
      controller: 'ProductTableViewCtrl'
    }).when('/product/rug', {
      templateUrl: 'views/product/rug.html',
      controller: 'ProductRugCtrl'
    }).when('/product/rug/view', {
      templateUrl: 'views/product/rug/view.html',
      controller: 'ProductRugViewCtrl'
    }).when('/product/rug/add', {
      templateUrl: 'views/product/rug/add.html',
      controller: 'ProductRugAddCtrl'
    }).when('/product/table/add', {
      templateUrl: 'views/product/table/add.html',
      controller: 'ProductTableAddCtrl'
    }).when('/product/table/:id', {
      templateUrl: 'views/product/table/details.html',
      controller: 'ProductTableDetailsCtrl'
    }).when('/project', {
      templateUrl: 'views/project/view.html',
      controller: 'ProjectViewCtrl'
    }).when('/project/:id', {
      templateUrl: 'views/project/details.html',
      controller: 'ProjectDetailsCtrl'
    }).when('/hr', { templateUrl: 'views/hr.html' }).when('/hr/employee', {
      templateUrl: 'views/hr/employee/view.html',
      controller: 'HrEmployeeViewCtrl'
    }).when('/project/room/:id', {
      templateUrl: 'views/project/room/details.html',
      controller: 'ProjectRoomDetailsCtrl'
    }).when('/order/purchase_order', {
      templateUrl: 'views/order/purchase_order/view.html',
      controller: 'OrderPurchaseOrderViewCtrl'
    }).when('/order/purchase_order/create', {
      templateUrl: 'views/order/purchase_order/create.html',
      controller: 'OrderPurchaseOrderCreateCtrl'
    }).when('/order/purchase_order/:id', {
      templateUrl: 'views/order/purchase_order/details.html',
      controller: 'OrderPurchaseOrderDetailsCtrl'
    }).when('/supply/:id', {
      templateUrl: 'views/supply/details.html',
      controller: 'SupplyDetailsCtrl'
    }).otherwise({ redirectTo: '/' });
  }
]);
function search(list, key, value, callback, error) {
  for (var i = 0; i < list.length; i++) {
    if (list[i].hasOwnProperty(key)) {
      if (list[i][key] == value) {
        callback(list[i], i);
        return list[i];
      }
    }
  }
  if (angular.isFunction(error)) {
    error();
  }
  return false;
}
function merge(permList, groupPerms) {
  if (permList && groupPerms) {
    angular.forEach(groupPerms, function (perm) {
      search(permList, 'id', perm.id, function (item, index) {
        permList[index].status = true;
      });
    });
  }
}
angular.module('employeeApp').config([
  '$httpProvider',
  function ($httpProvider) {
    $httpProvider.defaults.headers.post = {
      'Cache-Control': 'no-cache',
      'expires': '-1',
      'pragma': 'no-cache',
      'Content-Type': 'application/json'
    };
    $httpProvider.defaults.headers.get = {
      'Cache-Control': 'no-cache',
      'expires': '-1',
      'pragma': 'no-cache'
    };
    $httpProvider.defaults.transformResponse.push(function (data, headers) {
      if (typeof data == 'object') {
        if (data.hasOwnProperty('meta') && data.hasOwnProperty('objects')) {
          return data.objects;
        }
      }
      return data;
    });
  }
]);
angular.module('employeeApp').run([
  '$rootScope',
  'CurrentUser',
  'scanner',
  '$http',
  function ($rootScope, CurrentUser, scanner, $http) {
    $rootScope.currentUser = new CurrentUser();
    Array.prototype.indexOfById = function (needle) {
      needle = typeof needle == 'object' ? needle.hasOwnProperty('id') ? needle.id : null : needle;
      var haystack = this;
      for (var i = 0; i < haystack.length; i++) {
        if (haystack[i].id == needle) {
          return i;
        }
      }
      return -1;
    };
    $rootScope.safeApply = function (fn) {
      if (!this.$$phase) {
        this.$apply(fn);
      } else {
        this.$eval(fn);
      }
    };
    $rootScope.units = {
      'in': 'Inch',
      cm: 'Centimeter',
      m: 'Meter',
      mm: 'Millimeter',
      yd: 'Yard',
      kg: 'Kilogram',
      pack: 'Pack',
      container: 'Container',
      pc: 'Piece'
    };
    scanner.enable();
  }
]);
angular.module('employeeApp').controller('ContactCustomerAddCtrl', [
  '$scope',
  'Customer',
  '$location',
  'Notification',
  'Geocoder',
  function ($scope, Customer, $location, Notification, Geocoder) {
    $scope.customer = new Customer();
    $scope.save = function () {
      Notification.display('Saving Customer...', false);
      $scope.customer.$save(function () {
        Notification.display('Customer Saved');
        $location.path('/contact/customer');
      });
    };
    $scope.getPosition = function () {
      if ($scope.customer.address.address1 && $scope.customer.address.city && $scope.customer.address.territory && $scope.customer.address.country && $scope.customer.address.zipcode) {
        var promise = Geocoder.geocode($scope.customer.address);
        promise.then(function (results) {
          if ($scope.marker) {
            $scope.marker.setPosition(results[0].geometry.location);
          } else {
            $scope.marker = $scope.map.createMarker(results[0].geometry.location);
            $scope.marker.onchange = function (latLng) {
              $scope.customer.address.lat = $scope.marker.lat;
              $scope.customer.address.lng = $scope.marker.lng;
            };
          }
          $scope.map.setPosition(results[0].geometry.location);
          $scope.customer.address.lat = $scope.marker.lat;
          $scope.customer.address.lng = $scope.marker.lng;
        }, function (status) {
          console.error(status);
        });
      }
    };
  }
]);
angular.module('employeeApp').controller('ContactCustomerDetailsCtrl', [
  '$scope',
  'Customer',
  '$routeParams',
  '$location',
  'Notification',
  'Geocoder',
  function ($scope, Customer, $routeParams, $location, Notification, Geocoder) {
    $scope.customer = Customer.get({ 'id': $routeParams.id }, function () {
      if ($scope.customer.address.lat && $scope.customer.address.lng) {
        $scope.marker = $scope.map.createMarker({
          lat: $scope.customer.address.lat,
          lng: $scope.customer.address.lng
        });
      } else if (!$scope.customer.address.user_defined_latlng) {
        try {
          var promise = Geocoder.geocode($scope.customer.address);
          promise.then(function (results) {
            updatePosition(results);
          });
        } catch (err) {
          console.warn(err);
        }
      }
    });
    function updatePosition(results) {
      if ($scope.marker) {
        $scope.marker.setPosition(results[0].geometry.location);
      } else {
        $scope.marker = $scope.map.createMarker(results[0].geometry.location);
        $scope.marker.onchange = function (latLng) {
          $scope.customer.address.lat = $scope.marker.lat;
          $scope.customer.address.lng = $scope.marker.lng;
          $scope.customer.address.user_defined_latlng = true;
          $scope.customer.$update();
        };
      }
      $scope.map.setPosition(results[0].geometry.location);
      $scope.customer.address[0].lat = $scope.marker.lat;
      $scope.customer.address[0].lng = $scope.marker.lng;
    }
    $scope.update = function () {
      Notification.display('Updating...', false);
      $scope.customer.$update(function () {
        Notification.display('Customer Save');
      }, function () {
        Notification.display('Unable to Update Customer');
      });
    };
    $scope.updatePosition = function () {
      var promise = Geocoder.geocode($scope.customer.address);
      promise.then(function (results) {
        updatePosition(results);
      });
    };
    $scope.remove = function () {
      $scope.customer.$delete(function () {
        $location.path('/contact/customer');
      });
    };
  }
]);
angular.module('employeeApp').controller('ContactCustomerViewCtrl', [
  '$scope',
  'Customer',
  'Notification',
  '$location',
  'Geocoder',
  '$filter',
  function ($scope, Customer, Notification, $location, Geocoder, $filter) {
    var fetching = false;
    Notification.display('Loading Customers...', false);
    $scope.customers = Customer.query(function () {
      Notification.hide();
    });
    $scope.$watch('query', function (q) {
      if (q) {
        Customer.query({ q: q }, function (resources) {
          for (var i = 0; i < resources.length; i++) {
            if ($scope.customers.indexOfById(resources[i]) == -1) {
              $scope.customers.push(resources[i]);
            }
          }
        });
      }
    });
    $scope.loadNext = function () {
      if (!fetching) {
        fetching = true;
        Customer.query({
          offset: $scope.customers.length,
          limit: 50
        }, function (resources) {
          fetching = false;
          for (var i = 0; i < resources.length; i++) {
            $scope.customers.push(resources[i]);
          }
        });
      }
    };
  }
]);
angular.module('employeeApp').controller('ContactSupplierAddCtrl', [
  '$scope',
  'Supplier',
  '$location',
  'Notification',
  function ($scope, Supplier, $location, Notification) {
    $scope.supplier = new Supplier();
    $scope.addContact = function () {
      Notification.display('Contact Added to Supplier');
      $scope.supplier.contacts = $scope.supplier.contacts || [];
      $scope.supplier.contacts.push(angular.copy($scope.contact));
      $scope.contact = {};
      $scope.showAddContact = false;
    };
    $scope.getLocation = function () {
      var position = $scope.map.getPosition($scope.supplier.address, function (response) {
          angular.extend($scope.supplier.address, response);
          $scope.map.setPosition({
            lat: response.lat,
            lng: response.lng,
            updateMarker: true
          });
        });
    };
    $scope.save = function () {
      if ($scope.form.$valid) {
        Notification.display('Saving Supplier...', false);
        $scope.supplier.$save(function () {
          Notification.display('Supplier Saved');
          $location.path('/contact/supplier');
        });
      }
    };
  }
]);
angular.module('employeeApp').controller('ContactSupplierViewCtrl', [
  '$scope',
  'Supplier',
  'Notification',
  '$filter',
  function ($scope, Supplier, Notification, $filter) {
    Notification.display('Loading suppliers...', false);
    $scope.suppliers = Supplier.query(function () {
      Notification.hide();
    });
    $scope.$watch('query', function (q) {
      if (q) {
        Supplier.query({ q: q }, function (resources) {
          for (var i = 0; i < resources.length; i++) {
            if ($scope.suppliers.indexOfById(resources[i]) == -1) {
              $scope.suppliers.push(resources[i]);
            }
          }
        });
      }
    });
    $scope.loadNext = function () {
      Supplier.query({
        offset: $scope.suppliers.length,
        limit: 50
      }, function (resources) {
        for (var i = 0; i < resources.length; i++) {
          $scope.suppliers.push(resources[i]);
        }
      });
    };
  }
]);
angular.module('employeeApp').controller('ContactSupplierDetailsCtrl', [
  '$scope',
  'Supplier',
  '$routeParams',
  '$location',
  'SupplierContact',
  'Notification',
  function ($scope, Supplier, $routeParams, $location, SupplierContact, Notification) {
    $scope.supplier = Supplier.get({ 'id': $routeParams.id });
    $scope.addContact = function () {
      $scope.supplier.contacts = $scope.supplier.contacts || [];
      $scope.supplier.contacts.push(angular.copy($scope.contact));
      $scope.contact = {};
      $scope.showAddContact = false;
      $scope.supplier.$save();
    };
    $scope.deleteContact = function ($index) {
      var contact = SupplierContact.get({ 'id': $scope.supplier.contacts[$index].id }, function () {
          $scope.supplier.contacts.splice($index, 1);
          contact.$delete();
          $scope.supplier.$save();
          $scope.$apply();
        });
    };
    $scope.update = function () {
      Notification.display('Updating Supplier...', false);
      $scope.supplier.$update(function (data) {
        Notification.display('Supplier Updated');
      });
    };
    $scope.remove = function () {
      $scope.supplier.$remove(function () {
        $location.path('/contact/supplier');
      });
    };
  }
]);
angular.module('employeeApp.services').factory('ecResource', [
  '$storage',
  '$rootScope',
  '$http',
  '$q',
  '$parse',
  '$resource',
  function ($storage, $rootScope, $http, $q, $parse, $resource) {
    function ResourceFactory(url, paramDefaults, actions) {
      var DEFAULT_ACTIONS = {
          'get': { method: 'GET' },
          'save': { method: 'POST' },
          'update': { method: 'PUT' },
          'query': {
            method: 'GET',
            isArray: true
          },
          'remove': { method: 'DELETE' },
          'delete': { method: 'DELETE' }
        }, oResource, storage = $storage(url.split(/\//g)[0]), value, poll = false, getter = function (obj, path) {
          return $parse(path)(obj);
        };
      function extractParams(data, actionParams) {
        var ids = {};
        actionParams = angular.extend({}, paramDefaults, actionParams);
        angular.forEach(actionParams, function (value, key) {
          if (angular.isFunction(value)) {
            value = value();
          }
          ids[key] = value.charAt && value.charAt(0) == '@' ? getter(data, value.substr(1)) : value;
        });
        return ids;
      }
      function indexOfId(array, id) {
        for (var i = 0; i < array.length; i++) {
          if (array[i].hasOwnProperty('id')) {
            if (array[i].id == id) {
              return i;
            }
          }
        }
        return -1;
      }
      actions = angular.extend({}, DEFAULT_ACTIONS, actions);
      oResource = new $resource(url, paramDefaults, actions);
      function Resource(value) {
        angular.extend(this, value || {});
        this.$$poll = false;
        this.$$last_checked = false;
        this.$$timeout;
        this.$$date = true;
      }
      Resource.disableDate = function () {
        this.$$date = false;
      };
      Resource.prototype.disableDate = Resource.disableDate;
      Resource.poll = function () {
        this.$$poll = true;
        poll = true;
        return this;
      };
      Resource.prototype.poll = Resource.poll;
      Resource.stopPolling = function () {
        poll = false;
        return this;
      };
      Resource.prototype.poll = Resource.poll;
      angular.forEach(actions, function (action, name) {
        var hasBody = action.method == 'POST' || action.method == 'PUT' || action.method == 'PATCH';
        Resource[name] = function (a1, a2, a3, a4) {
          var params = {};
          var data;
          var success = angular.noop;
          var error = null;
          var promise;
          switch (arguments.length) {
          case 4:
            error = a4;
            success = a3;
          case 3:
          case 2:
            if (angular.isFunction(a2)) {
              if (angular.isFunction(a1)) {
                success = a1;
                error = a2;
                break;
              }
              success = a2;
              error = a3;
            } else {
              params = a1;
              data = a2;
              success = a3;
              break;
            }
          case 1:
            if (angular.isFunction(a1))
              success = a1;
            else if (hasBody)
              data = a1;
            else
              params = a1;
            break;
          case 0:
            break;
          default:
            throw 'Expected between 0-4 arguments [params, data, success, error], got ' + arguments.length + ' arguments.';
          }
          if (action.isArray) {
            value = angular.isArray(value) ? value || [] : [];
          } else {
            value = angular.isObject(value) && !value.hasOwnProperty('length') ? value || {} : {};
          }
          value['$$marker'] = 'poop';
          if (storage[name]) {
            var strorageData = hasBody ? storage[name](data) || value : storage[name](params) || value;
            if (action.isArray) {
              angular.forEach(strorageData, function (item, index) {
                var index = indexOfId(value, item.id);
                if (index > -1) {
                  angular.extend(value[index], new Resource(item));
                }
                index > -1 ? angular.extend(value[index], new Resource(item)) : value.push(new Resource(item));
              });
            } else {
              value = new Resource(strorageData);
            }
            if (hasBody) {
              angular.extend(value, this);
            }
          }
          var oPromise = oResource[name](params, data, function (response) {
              action.method == 'DELETE' ? storage.remove(params) : storage.save(response);
              if (action.method == 'DELETE' || hasBody) {
                angular.extend(this, response);
              }
              if (action.isArray) {
                var index;
                angular.forEach(response, function (item) {
                  var index = indexOfId(value, item.id);
                  if (index > -1) {
                    angular.extend(value[index], item);
                  } else {
                    value.push(new Resource(item));
                  }
                });
              } else {
                angular.extend(value, new Resource(response));
              }
              this.$$last_checked = new Date();
              storage.saveLastModified(this.$$last_checked);
              if (poll && action.method == 'GET') {
                this.$$timeout = setTimeout(Resource[name], 5000);
              }
              console.log(value.length);
              success(response);
            }.bind(this), function (e) {
              console.log(e);
            });
          return value;
        };
        Resource.prototype['$' + name] = function (a1, a2, a3) {
          var params = extractParams(this), success = angular.noop, error;
          switch (arguments.length) {
          case 3:
            params = a1;
            success = a2;
            error = a3;
            break;
          case 2:
          case 1:
            if (angular.isFunction(a1)) {
              success = a1;
              error = a2;
            } else {
              params = a1;
              success = a2 || angular.noop;
            }
          case 0:
            break;
          default:
            throw 'Expected between 1-3 arguments [params, success, error], got ' + arguments.length + ' arguments.';
          }
          var data = hasBody ? this : undefined;
          Resource[name].call(this, params, data, success, error);
        };
      });
      return Resource;
    }
    return ResourceFactory;
  }
]);
angular.module('employeeApp.services').factory('$storage', [function () {
    function storageFactory(key) {
      function StorageEngine(key) {
        this.key = key;
        if ('localStorage' in window && window.localStorage !== null) {
          this.storage = window.localStorage;
          this.getKeys();
        }
      }
      StorageEngine.prototype.isSupported = function () {
        try {
          return 'localStorage' in window && window.localStorage !== null;
        } catch (e) {
          return false;
        }
      };
      StorageEngine.prototype.createKeysArray = function () {
        this.keys = [];
        this.saveKeys();
        return this.keys;
      };
      StorageEngine.prototype.saveKeys = function () {
        typeof this.keys === 'object' ? this.storage.setItem(this.key, JSON.stringify(this.keys)) : this.createKeysArray();
      };
      StorageEngine.prototype.createKey = function () {
        key = 'storage-temp' + Date.now();
        return key;
      };
      StorageEngine.prototype.saveKey = function (arg) {
        var itemKey = this.key + arg;
        this.keys = this.keys || this.createKeysArray();
        if (this.keys.indexOf(itemKey) === -1) {
          this.keys.push(itemKey);
          this.saveKeys();
        }
        return itemKey;
      };
      StorageEngine.prototype.getKeys = function () {
        this.keys = JSON.parse(this.storage.getItem(this.key));
        if (typeof this.keys != 'object') {
          this.createKeysArray();
        }
        return this.keys;
      };
      StorageEngine.prototype.deleteKey = function (key) {
        this.keys = this.keys || this.getKeys();
        var index = this.keys.indexOf(key);
        if (index != -1) {
          this.keys.splice(index);
          this.saveKeys();
          return true;
        } else {
          return false;
        }
      };
      StorageEngine.prototype.clearKeys = function () {
        this.keys = [];
        this.storage.setItem(this.key, JSON.stringify(this.keys));
        if (JSON.parse(this.storage.getItem(this.key)).length === 0) {
          return true;
        } else {
          return false;
        }
      };
      StorageEngine.prototype.getKey = function (arg) {
        return this.key + arg;
      };
      StorageEngine.prototype.query = function () {
        var data = [], i;
        this.keys = this.getKeys();
        for (i in this.keys) {
          data.push(JSON.parse(this.storage.getItem(this.keys[i])));
        }
        return data;
      };
      StorageEngine.prototype.save = function (data) {
        var itemKey;
        function saveFn(obj) {
          if (obj.hasOwnProperty('id')) {
            var itemKey = this.saveKey(obj.id);
            this.storage.setItem(itemKey, JSON.stringify(obj));
            return true;
          } else {
            return false;
          }
        }
        var saveObject = saveFn.bind(this);
        if (data) {
          if (angular.isArray(data)) {
            for (var i = 0; i < data.length; i++) {
              if (!saveObject(data[i])) {
                return false;
              }
            }
          } else {
            return saveObject(data) ? data : false;
          }
        } else {
          return false;
        }
      };
      StorageEngine.prototype.get = function (args) {
        if (args.hasOwnProperty('id')) {
          var itemKey;
          itemKey = this.getKey(args.id);
          if (itemKey) {
            return JSON.parse(this.storage.getItem(itemKey));
          } else {
            return 'itemKey';
          }
        } else {
          return args;
        }
      };
      StorageEngine.prototype.remove = function (args) {
        var itemKey;
        if (args.hasOwnProperty('id')) {
          itemKey = this.getKey(args.id);
          this.storage.removeItem(itemKey);
          this.deleteKey(itemKey);
          return true;
        } else {
          return false;
        }
      };
      StorageEngine.prototype.clear = function () {
        var index;
        for (index in this.keys) {
          this.storage.removeItem(this.keys[index]);
        }
        this.clearKeys();
      };
      StorageEngine.prototype.saveLastModified = function (date) {
        this.storage.setItem(this.key + '-last_modified', date.toISOString());
      };
      StorageEngine.prototype.getLastModified = function () {
        var dateStr = this.storage.getItem(this.key + '-last_modified');
        if (dateStr) {
          return new Date(dateStr);
        } else {
          return false;
        }
      };
      return new StorageEngine(key);
    }
    return storageFactory;
  }]);
angular.module('employeeApp.services').factory('Customer', [
  '$resource',
  function ($resource) {
    return $resource('/api/v1/customer/:id', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  }
]);
angular.module('employeeApp.services').factory('Supplier', [
  '$resource',
  function ($resource) {
    return $resource('/api/v1/supplier/:id', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  }
]);
angular.module('employeeApp.services').factory('CurrentUser', [
  '$http',
  function ($http) {
    function User() {
      this.ready = false;
      this._onready = [];
      var promise = $http.get('/api/v1/current_user');
      promise.then(function (response) {
        angular.extend(this, response.data || {});
        this.ready = true;
        for (var i = 0; i < this._onready.length; i++) {
          this._onready[i](response.data);
        }
      }.bind(this));
    }
    User.prototype.hasPermission = function (permStr) {
      return this.modules ? this.permissions.indexOf(permStr) !== -1 ? true : false : false;
    };
    User.prototype.hasModule = function (moduleStr) {
      return this.modules ? this.modules.indexOf(moduleStr) !== -1 ? true : false : false;
    };
    Object.defineProperties(User.prototype, {
      onready: {
        set: function (fn) {
          if (typeof fn == 'function') {
            this._onready.push(fn);
          }
        }
      }
    });
    return User;
  }
]);
angular.module('employeeApp.services').factory('Notification', [
  '$timeout',
  '$rootScope',
  function ($timeout, $rootScope) {
    function center(target) {
      var width = $(window).width();
      var tWidth = $(target).width();
      if ($(target).css('left') === 0) {
        $(target).css('left', width - tWidth);
      } else {
        $(target).css('margin-left', -(tWidth / 2));
      }
    }
    function Notifier() {
      this.notification = angular.element('#notification');
      this.promise = null;
    }
    Notifier.prototype.display = function (message, autoHide) {
      $rootScope.safeApply(function () {
        this.notification.html(message);
        center(this.notification);
        this.notification.addClass('active');
      }.bind(this));
      if (this.promise) {
        $timeout.cancel(this.promise);
      }
      if (autoHide !== false) {
        this.promise = $timeout(function () {
          this.hide();
        }.bind(this), 1000);
      }
    };
    Notifier.prototype.hide = function () {
      this.notification.removeClass('active');
    };
    return new Notifier();
  }
]);
angular.module('employeeApp.services').factory('SupplierContact', [
  'eaResource',
  function (eaResource) {
    return eaResource('supplier_contact/:id', { id: '@id' });
  }
]);
angular.module('employeeApp.filters').filter('dateRange', [function () {
    function filter(date, start, end, success) {
      if (start.getTime() <= date.getTime() && date.getTime() <= end.getTime()) {
        success();
      }
    }
    function convertToDateObject(arg) {
      switch (typeof arg) {
      case 'object':
        return arg;
      case 'string':
        return new Date(arg);
      case 'number':
        return new Date(arg);
      default:
        return new Date(arg);
      }
    }
    return function (array, key, arg1, arg2) {
      var predicates = [], start = convertToDateObject(arg1), end = convertToDateObject(arg2), testDate = null;
      angular.forEach(array, function (item) {
        if (item.hasOwnProperty(key)) {
          if (typeof item[key] == 'object') {
            filter(item[key], start, end, function () {
              predicates.push(item);
            });
          } else if (typeof item[key] == 'string') {
            testDate = new Date(item[key]);
            filter(testDate, start, end, function () {
              predicates.push(item);
            });
          } else if (typeof item[key] == 'number') {
            testDate = new Date(item[key]);
            filter(testDate, start, end, function () {
              predicates.push(item);
            });
          }
        }
      });
      return predicates;
    };
  }]);
angular.module('employeeApp.filters').filter('dateFilter', [function () {
    function filter(item, target, comparison, success) {
      switch (comparison) {
      case 'equals':
        if (item.getMonth() == target.getMonth() && item.getYear() == target.getYear() && item.getDate() == target.getDate()) {
          return true;
        }
        break;
      case 'greater':
        if (item.getTime() >= target.getTime()) {
          return true;
        }
        break;
      case 'less':
        if (item.getTime() <= target.getTime()) {
          return true;
        }
        break;
      default:
        if (item.getMonth(item) == target.getMonth() && item.getYear() == target.getYear() && item.getDate() == target.getDate()) {
          return true;
        }
        break;
      }
      return false;
    }
    return function (array, key, date, comparison) {
      var predicates = [];
      angular.forEach(array, function (item) {
        if (item.hasOwnProperty(key)) {
          if (typeof item[key] == 'object') {
            if (filter(item[key], date, comparison)) {
              predicates.push(item);
            }
          } else if (typeof item[key] == 'string') {
            var testDate = new Date(item[key]);
            filter(testDate, date, comparison, function (verifiedObj) {
              predicates.push(verifiedObj);
            });
          }
        }
      });
      return predicates;
    };
  }]);
angular.module('employeeApp.filters').filter('beautify', [function () {
    return function (input) {
      var newStrArray = [], newStr, upperLetter, newWord, words = input.split(/\s+/);
      angular.forEach(words, function (word) {
        upperLetter = word.charAt(0).toUpperCase();
        newWord = word.slice(1);
        newWord = upperLetter + newWord;
        newStrArray.push(newWord);
      });
      newStr = newStrArray.join(' ');
      return newStr;
    };
  }]);
angular.module('employeeApp.filters').filter('exclude', [function () {
    return function (array, key, value) {
      if (!(array instanceof Array)) {
        return [];
      }
      var filtered = [];
      for (var i in array) {
        if (array[i][key] != value) {
          filtered.push(array[i]);
        }
      }
      return filtered;
    };
  }]);
angular.module('employeeApp.filters').filter('telephone', [function () {
    return function ($input) {
      var clean = $input.replace(/ /g, '').replace(/\-/g, '');
      return clean;
    };
  }]);
angular.module('employeeApp').controller('ProductUpholsteryAddCtrl', [
  '$scope',
  'Model',
  'Configuration',
  'Upholstery',
  'Notification',
  '$location',
  function ($scope, Model, Configuration, Upholstery, Notification, $location) {
    $scope.modelList = Model.query({ limit: 0 });
    $scope.configurationList = Configuration.query({ limit: 0 });
    $scope.upholstery = new Upholstery();
    $scope.modelText = 'Choose a Model';
    $scope.configurationText = 'Choose a Configuration';
    $scope.widthText = 'Enter a Width in millimeters';
    $scope.depthText = 'Enter a Depth in millimeters';
    $scope.bpText = 'Enter the number of Back Pillows';
    $scope.apText = 'Enter the number of Accent Pillows';
    $scope.lpText = 'Enter the number of Lumbar Pillows';
    $scope.cpText = 'Enter the number of Corner Pillows';
    $scope.upload = function () {
      Notification.display('Uploading Image...', false);
      var fd = new FormData();
      fd.append('image', $scope.images[0]);
      $scope.addLength = null;
      $scope.addRemark = null;
      jQuery.ajax('upholstery/image', {
        type: 'POST',
        data: fd,
        processData: false,
        contentType: false,
        success: function (responseData) {
          Notification.display('Image Uploaded');
          $scope.upholstery.image = $scope.upholstery.image || {};
          angular.copy(responseData, $scope.upholstery.image);
          $scope.$apply();
        }
      });
    };
    $scope.save = function () {
      Notification.display('Saving Upholstery Product...');
      $scope.upholstery.$create(function () {
        Notification.display('Upholstery Product Saved');
        $location.path('/product/upholstery');
      });
    };
  }
]);
angular.module('employeeApp').controller('ProductUpholsteryViewCtrl', [
  '$scope',
  'Upholstery',
  'Notification',
  '$filter',
  '$location',
  function ($scope, Upholstery, Notification, $filter, $location) {
    var fetching = false;
    Notification.display('Loading Upholstery...', false);
    $scope.resources = Upholstery.query({ limit: 20 }, function () {
      Notification.hide();
    });
    $scope.$watch('query', function (q) {
      if (q) {
        Upholstery.query({
          q: q,
          limit: 5
        }, function (resources) {
          for (var i = 0; i < resources.length; i++) {
            if ($scope.resources.indexOfById(resources[i]) == -1) {
              $scope.resources.push(resources[i]);
            }
          }
        });
      }
    });
    $scope.loadNext = function () {
      if (!fetching) {
        Notification.display('Loading more upholstery...', false);
        Upholstery.query({
          offset: $scope.resources.length,
          limit: 10
        }, function (resources) {
          Notification.hide();
          for (var i = 0; i < resources.length; i++) {
            $scope.resources.push(resources[i]);
          }
        });
      }
    };
  }
]);
angular.module('employeeApp').controller('ProductUpholsteryDetailsCtrl', [
  '$scope',
  'Upholstery',
  '$routeParams',
  'Notification',
  '$location',
  function ($scope, Upholstery, $routeParams, Notification, $location) {
    $scope.uphol = Upholstery.get({ 'id': $routeParams.id });
    $scope.upload = function () {
      Notification.display('Uploading Image...', false);
      var fd = new FormData();
      fd.append('image', $scope.images[0]);
      jQuery.ajax('upholstery/image', {
        type: 'POST',
        data: fd,
        cache: false,
        processData: false,
        contentType: false,
        success: function (responseData) {
          Notification.display('Image Updated');
          $scope.uphol.image = {};
          angular.copy(responseData, $scope.uphol.image);
          $scope.uphol.$save();
          $scope.imagePreviews = null;
          $scope.images = null;
          $scope.$apply();
        }
      });
    };
    $scope.update = function () {
      Notification.display('Saving Upholsterty...', false);
      $scope.uphol.$update(function () {
        Notification.display('Upholstery Saved');
      });
    };
    $scope.remove = function () {
      Notification.display('Deleteing Upholstery Product');
      $scope.uphol.$delete(function () {
        Notification.display('Upholstery Product Deleted');
        $location.path('/product/upholstery');
      });
    };
    $scope.$on('$destroy', function () {
      $scope.update();
    });
  }
]);
angular.module('employeeApp.services').factory('Upholstery', [
  '$resource',
  function ($resource) {
    return $resource('/api/v1/upholstery/:id', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  }
]);
angular.module('employeeApp.services').factory('Model', [
  '$resource',
  function ($resource) {
    return $resource('/api/v1/model/:id', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  }
]);
angular.module('employeeApp.services').factory('Configuration', [
  '$resource',
  function ($resource) {
    return $resource('/api/v1/configuration/:id', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  }
]);
angular.module('employeeApp').controller('ProductModelAddCtrl', [
  '$scope',
  'Model',
  'Notification',
  '$location',
  function ($scope, Model, Notification, $location) {
    $scope.model = new Model();
    $scope.nameText = 'Enter a Name for this Model';
    $scope.modelText = 'Enter a Model Number for this Model';
    $scope.collectionText = 'Enter this Model\'s Collection';
    $scope.save = function (model) {
      Notification.display('Saving Model...', false);
      $scope.model.$create(function () {
        $location.path('/product/model');
        Notification.display('Model Saved');
      });
    };
    $scope.uploadImage = function () {
      Notification.display('Uploading Image...', false);
      var fd = new FormData();
      fd.append('image', $scope.images[0]);
      $scope.addLength = null;
      $scope.addRemark = null;
      jQuery.ajax('model/image', {
        type: 'POST',
        data: fd,
        processData: false,
        contentType: false,
        success: function (responseData) {
          Notification.display('Image Uploaded');
          $scope.model.image = $scope.model.image || {};
          angular.copy(responseData, $scope.model.image);
          $scope.$apply();
        }
      });
    };
  }
]);
angular.module('employeeApp').controller('ProductModelViewCtrl', [
  '$scope',
  'Model',
  'Notification',
  function ($scope, Model, Notification) {
    var fetching = false;
    $scope.modelList = Model.query(function () {
    });
    $scope.$watch('query', function (q) {
      if (q) {
        Model.query({
          q: q,
          limit: 10
        }, function (resources) {
          for (var i = 0; i < resources.length; i++) {
            if ($scope.modelList.indexOfById(resources[i]) == -1) {
              $scope.modelList.push(resources[i]);
            }
          }
        });
      }
    });
    $scope.loadNext = function () {
      if (!fetching) {
        Notification.display('Loading more models...', false);
        Model.query({
          limit: 50,
          offset: $scope.modelList.length
        }, function (resources) {
          for (var i = 0; i < resources.length; i++) {
            $scope.modelList.push(resources[i]);
          }
        });
      }
    };
  }
]);
angular.module('employeeApp').controller('ProductModelDetailsCtrl', [
  '$scope',
  'Model',
  '$routeParams',
  '$location',
  'Notification',
  '$http',
  function ($scope, Model, $routeParams, $location, Notification, $http) {
    $scope.model = Model.get({ 'id': $routeParams.id });
    $scope.upload = function () {
      Notification.display('Uploading Model Image...', false);
      var fd = new FormData();
      fd.append('image', $scope.images[0]);
      $scope.addLength = null;
      $scope.addRemark = null;
      jQuery.ajax('fabric/' + $scope.model.id + '/image', {
        type: 'POST',
        data: fd,
        processData: false,
        contentType: false,
        success: function (response) {
          Notification.display('Model Image Updated');
          $scope.model.image = $scope.model.image || {};
          angular.copy(response, $scope.model.image);
          $scope.model.$save();
          $scope.imagePreviews = null;
          $scope.images = null;
          $scope.$apply();
        }
      });
    };
    $scope.remove = function () {
      Notification.display('Deleting Model...');
      $scope.model.$delete(function () {
        Notification.display('Model Deleted');
        $location.path('/product/model');
      });
    };
    $scope.update = function () {
      Notification.display('Saving Model...', false);
      $scope.model.$update(function () {
        Notification.display('Model Updated');
      });
    };
    $scope.$on('$destroy', function () {
      $scope.update();
    });
  }
]);
angular.module('employeeApp.services').factory('Acknowledgement', [
  '$resource',
  '$http',
  function ($resource, $http) {
    return $resource('/api/v1/acknowledgement/:id', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  }
]);
angular.module('employeeApp').controller('OrderAcknowledgementCreateCtrl', [
  '$scope',
  'Acknowledgement',
  'Customer',
  '$filter',
  'Notification',
  function ($scope, Acknowledgement, Customer, $filter, Notification) {
    $scope.showFabric = false;
    $scope.uploading = false;
    $scope.customImageScale = 100;
    $scope.ack = new Acknowledgement();
    var uploadTargets = [];
    var storage = window.localStorage;
    if (storage.getItem('acknowledgement-create')) {
      angular.extend($scope.ack, JSON.parse(storage.getItem('acknowledgement-create')));
    }
    $scope.ack.items = $scope.ack.items || [];
    $scope.employee = { id: $scope.currentUser.id };
    $scope.tempSave = function () {
      storage.setItem('acknowledgement-create', JSON.stringify($scope.ack));
    };
    $scope.addCustomer = function (customer) {
      $scope.ack.customer = customer;
      $scope.showCustomers = false;
      $scope.tempSave();
    };
    $scope.addItem = function (product) {
      $scope.ack.items.push(product);
      $scope.tempSave();
    };
    $scope.removeItem = function (index) {
      $scope.ack.items.splice(index, 1);
      $scope.tempSave();
    };
    $scope.create = function () {
      $scope.ack.employee = $scope.currentUser;
      $scope.tempSave();
      try {
        if ($scope.isValidated()) {
          Notification.display('Creating Acknowledgement...', false);
          $scope.ack.$create(function (response) {
            Notification.display('Acknowledgement created');
            window.open(response.pdf.acknowledgement);
            window.open(response.pdf.production);
            angular.extend($scope.ack, JSON.parse(storage.getItem('acknowledgement-create')));
          }, function (e) {
            console.error(e);
            Notification.display('There an error in creating the Acknowledgement', false);
          });
        }
      } catch (e) {
        Notification.display(e.message, false);
        throw new Error(e);
      }
    };
    $scope.reset = function () {
      $scope.ack = new Acknowledgement();
      $scope.ack.items = [];
      storage.removeItem('acknowledgement-create');
    };
    $scope.isValidated = function () {
      if (!$scope.ack.customer) {
        throw new TypeError('Customer is not an object');
      } else {
        if (!$scope.ack.customer.hasOwnProperty('id')) {
          throw new ReferenceError('Missin customer ID');
        }
      }
      if (!$scope.ack.items) {
        throw new TypeError('Products is not an array');
      } else {
        if ($scope.ack.items.length <= 0) {
          throw new RangeError('No products added to the order');
        } else {
          for (var i = 0; i < $scope.ack.items.length; i++) {
            if (!$scope.ack.items[i].hasOwnProperty('quantity') || !$scope.ack.items[i].quantity) {
              throw new RangeError('Expecting a quantity of at least 1 for ' + $scope.ack.items[i].description);
            }
            if (!$scope.ack.items[i].hasOwnProperty('has_price')) {
            } else {
              if (!$scope.ack.items[i].has_price) {
              }
            }
          }
        }
      }
      if ($scope.ack.vat === undefined || $scope.ack.vat === null) {
        throw new TypeError('Vat is not a number');
      }
      if (!$scope.ack.delivery_date) {
        throw new TypeError('Delivery Date is not a valid Date type');
      }
      if (!$scope.ack.po_id) {
        throw new TypeError('PO# is not defined');
      }
      return true;
    };
  }
]);
angular.module('employeeApp').controller('OrderAcknowledgementViewCtrl', [
  '$scope',
  'Acknowledgement',
  'Notification',
  '$location',
  '$filter',
  function ($scope, Acknowledgement, Notification, $location, $filter) {
    var fetching = true;
    Notification.display('Loading Acknowledgements...', false);
    $scope.acknowledgements = Acknowledgement.query({ limit: 20 }, function (e) {
      Notification.hide();
      fetching = false;
    });
    $scope.$watch('query', function (q) {
      if (q) {
        Acknowledgement.query({
          q: q,
          limit: 5
        }, function (resources) {
          for (var i = 0; i < resources.length; i++) {
            if ($scope.acknowledgements.indexOfById(resources[i].id) == -1) {
              $scope.acknowledgements.push(resources[i]);
            }
          }
        });
      }
    });
    $scope.loadNext = function () {
      if (!fetching) {
        fetching = true;
        Notification.display('Loading more acknowledgements', false);
        Acknowledgement.query({
          limit: 50,
          offset: $scope.acknowledgements.length
        }, function (resources) {
          fetching = false;
          Notification.hide();
          for (var i = 0; i < resources.length; i++) {
            $scope.acknowledgements.push(resources[i]);
          }
        });
      }
    };
  }
]);
angular.module('employeeApp.services').factory('Fabric', [
  '$resource',
  function ($resource) {
    return $resource('/api/v1/fabric/:id/:action', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' },
      add: {
        method: 'POST',
        params: { action: 'add' }
      },
      subtract: {
        method: 'POST',
        params: { action: 'subtract' }
      }
    });
  }
]);
angular.module('employeeApp.directives').directive('fadeLoad', [function () {
    return {
      restrict: 'A',
      replace: false,
      link: function (scope, element, attrs) {
        element.css('opacity', 0);
        element.bind('load', function () {
          element.fadeTo(1000, 1);
        });
      }
    };
  }]);
angular.module('employeeApp').directive('fadeIn', [function () {
    return {
      restrict: 'A',
      replace: false,
      link: function (scope, element, attrs) {
        element.addClass('fadeIn');
      }
    };
  }]);
angular.module('employeeApp').directive('ecBlur', [function () {
    return {
      restrict: 'A',
      replace: false,
      link: function (scope, element, attrs) {
        element.bind('blur', function () {
          scope.$eval(attrs.ecBlur);
        });
      }
    };
  }]);
angular.module('employeeApp').directive('dragOn', [function () {
    return {
      restrict: 'A',
      replace: false,
      link: function (scope, element, attrs) {
        element.attr('draggable', true);
        element.bind('dragstart', function (event) {
          event.originalEvent.dataTransfer.setData('text/plain', JSON.stringify(scope.$eval(attrs.dragOn)));
        });
      }
    };
  }]);
angular.module('employeeApp').directive('dropOn', [function () {
    function emptyStrFilter(element, index, array) {
      return element !== '';
    }
    function getTarget(scope, targetString) {
      var preTarget = targetString.split(/\.\w*$/).shift(), targetObj = targetString.split(/\./).pop(), target;
      target = scope.$eval(preTarget);
      target[targetObj] = target[targetObj] || {};
      target = target[targetObj];
      return target;
    }
    function getData(event) {
      return JSON.parse(event.originalEvent.dataTransfer.getData('text/plain'));
    }
    function preventPropagation(event) {
      event.stopPropagation();
      event.preventDefault();
      event.originalEvent.dataTransfer.effectAllowed = 'copy';
    }
    return {
      restrict: 'A',
      replace: false,
      link: function (scope, element, attrs) {
        element.bind('drop', function (event) {
          preventPropagation(event);
          element.removeClass('drag');
          scope.$apply(function () {
            var target = getTarget(scope, attrs.dropOn);
            angular.copy(getData(event), target);
          });
        }).bind('dragover', function (event) {
          preventPropagation(event);
          element.addClass('drag');
        }).bind('dragleave', function (event) {
          preventPropagation(event);
          element.removeClass('drag');
        });
      }
    };
  }]);
angular.module('employeeApp').directive('imageDropTarget', [
  '$parse',
  function ($parse) {
    return {
      restrict: 'A',
      replace: false,
      link: function ($scope, element, attrs) {
        var fileReader = new FileReader();
        fileReader.onload = function (evt) {
          var image = { 'url': evt.target.result };
          $scope.imagePreviews = $scope.imagePreviews || [];
          $scope.$apply(function () {
            $scope.imagePreviews.push(image);
          });
        };
        $scope.clearImages = function () {
          $scope.images ? $scope.images.length = 0 : $scope.images = [];
        };
        element.bind('dragenter', function (evt) {
          evt.preventDefault();
          element.addClass('active');
        });
        element.bind('dragleave', function (evt) {
          evt.preventDefault();
          element.removeClass('active');
        });
        element.bind('dragover', function (evt) {
          evt.preventDefault();
          element.addClass('active');
        });
        element.bind('drop', function (evt) {
          evt.preventDefault();
          evt.stopPropagation();
          element.removeClass('active');
          var e = evt.originalEvent;
          var files = e.dataTransfer.files;
          for (var i = 0; i < files.length; i++) {
            if (files[i].type == 'image/png' || files[i].type == 'image/jpeg') {
              $scope.images = $scope.images || [];
              $scope.images.push(files[i]);
              fileReader.readAsDataURL(files[i]);
            }
          }
          $scope.$eval(attrs.imageDropTarget);
        });
      }
    };
  }
]);
angular.module('employeeApp').directive('beautify', [
  '$filter',
  '$parse',
  function ($filter, $parse) {
    return {
      restrict: 'A',
      link: function (scope, element, attr) {
        element.bind('blur', function () {
          var beautifiedValue = $filter('beautify')(element.context.value);
          element.context.value = beautifiedValue;
          $parse(attr.ngModel).assign(scope, beautifiedValue);
        });
      }
    };
  }
]);
angular.module('employeeApp.directives').directive('telephone', [
  '$filter',
  '$parse',
  function ($filter, $parse) {
    return {
      restrict: 'A',
      link: function (scope, element, attr) {
        element.bind('blur', function () {
          var filteredValue = $filter('telephone')(element.context.value);
          element.context.value = filteredValue;
          $parse(attr.ngModel).assign(scope, filteredValue);
        });
      }
    };
  }
]);
angular.module('employeeApp.directives').directive('map', [
  'mapMarker',
  function (mapMarker) {
    var latLng = {}, map, marker, mapOptions = {
        center: new google.maps.LatLng(13.776239, 100.527884),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
      };
    return {
      restrict: 'A',
      replace: false,
      link: function (scope, element, attrs) {
        scope.map = {
          Marker: mapMarker,
          LatLng: google.maps.LatLng
        };
        scope.map.map = new google.maps.Map(element.get(0), mapOptions);
        scope.$on('shown', function () {
          google.maps.event.trigger(scope.map.map, 'resize');
        });
        scope.map.refresh = function () {
          google.maps.event.triggger(this.map);
        };
        scope.map.createMarker = function (obj) {
          if (obj instanceof google.maps.LatLng) {
            latLng = obj;
          } else if (obj.hasOwnProperty('lat') && obj.hasOwnProperty('lng')) {
            latLng = new google.maps.LatLng(obj.lat, obj.lng);
          } else {
            latLng = null;
          }
          return new scope.map.Marker({
            map: this.map,
            position: latLng
          });
        };
        scope.map.setPosition = function (obj) {
          if (obj instanceof google.maps.LatLng) {
            latLng = obj;
          } else {
            latLng = new google.maps.LatLng(obj.lat, obj.lng);
          }
          this.map.panTo(latLng);
          this.map.setZoom(14);
        };
      }
    };
  }
]);
angular.module('employeeApp').directive('clickUrl', [function () {
    return {
      restrict: 'A',
      link: function (scope, element, attr) {
        element.bind('click', function () {
          scope.category = 'fabric';
          $location.path(attr.clickUrl);
          scope.$apply();
        });
      }
    };
  }]);
angular.module('employeeApp.directives').directive('modal', [function () {
    var backdrop;
    function create_backdrop() {
      return angular.element('<div id="backdrop"></div>');
    }
    return {
      restrict: 'A',
      scope: false,
      link: function (scope, element, attr) {
        element.addClass('modal hide');
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
                (scope.modal._onhide || angular.noop)();
              } catch (e) {
                console.warn(e);
              }
              if (attr.ngModel) {
                scope.$apply(function () {
                  scope[attr.ngModel] = false;
                });
              }
            });
          }
        }
        scope.$on('$destroy', function () {
          if (backdrop) {
            backdrop.remove();
          }
        });
        if (attr.ngModel) {
          scope.$watch(attr.ngModel, function (value) {
            if (value) {
              show(scope, element);
            } else {
              hide(scope, element, backdrop);
            }
          });
        }
        scope.modal = { _onhide: [] };
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
      }
    };
  }]);
angular.module('employeeApp').controller('OrderShippingCreateCtrl', [
  '$scope',
  'Acknowledgement',
  '$filter',
  'Notification',
  'Shipping',
  '$location',
  'scanner',
  function ($scope, Acknowledgement, $filter, Notification, Shipping, $location, scanner) {
    var fetchingAck = true;
    $scope.acknowledgements = Acknowledgement.query({ limit: 20 }, function () {
      fetchingAck = false;
    });
    $scope.shipping = new Shipping();
    var ack;
    scanner.onscan = function (code) {
      var re = new RegExp(/^A\-(s+)?/);
      if (re.test(code)) {
        Notification.display('Retrieving Acknowledgement# ' + code.split('-')[1], false);
        Acknowledgement.get({ id: code.split('-')[1] }, function (response) {
          Notification.hide();
          var ack = response;
          $scope.shipping.acknowledgement = { id: ack.id };
          $scope.shipping.customer = ack.customer;
          $scope.shipping.products = ack.products;
          $scope.shipping.delivery_date = new Date(ack.delivery_date);
        }, function () {
          Notification.display('Unable to locate Acknowledgement#' + code.split('-')[1]);
        });
      }
    };
    $scope.addAcknowledgement = function (ack) {
      $scope.shipping.acknowledgement = { id: ack.id };
      $scope.shipping.customer = ack.customer;
      $scope.shipping.items = ack.items;
      $scope.shipping.delivery_date = new Date(ack.delivery_date);
      $scope.showAck = false;
    };
    $scope.$watch('query', function (q) {
      if (q) {
        Acknowledgement.query({
          limit: 5,
          q: q
        }, function (resources) {
          for (var i = 0; i < resources.length; i++) {
            if ($scope.acknowledgements.indexOfById(resources[i].id) == -1) {
              $scope.acknowledgements.push(resources[i]);
            }
          }
        });
      }
    });
    $scope.loadNext = function () {
      if (!fetchingAck) {
        fetchingAck = true;
        Acknowledgement.query({
          offset: $scope.acknowledgements.length,
          limit: 20
        }, function (resources) {
          for (var i = 0; i < resources.length; i++) {
            $scope.acknowledgements.push(resources[i]);
          }
          fetchingAck = false;
        });
      }
    };
    $scope.create = function () {
      if ($scope.isValidated()) {
        Notification.display('Creating Acknowledgement...', false);
        $scope.shipping.$save(function (resource) {
          Notification.display('Shipping manifest created');
          window.open(resource.pdf.url);
          $location.path('/order/shipping');
        }, function () {
          Notification.display('There was an error in creating the shipping manifest', false);
        });
      } else {
        Notification.display('The Order is Not Complete');
      }
    };
    $scope.removeProduct = function (index) {
      $scope.shipping.items.splice(index, 1);
    };
    $scope.isValidated = function () {
      if (!$scope.shipping.acknowledgement) {
        return false;
      }
      if (!$scope.shipping.delivery_date) {
        return false;
      }
      return true;
    };
    $scope.$on('$destroy', function () {
      scanner.onscan = null;
    });
  }
]);
angular.module('employeeApp').controller('OrderShippingViewCtrl', [
  '$scope',
  'Shipping',
  '$filter',
  'Notification',
  function ($scope, Shipping, $filter, Notification) {
    var fetching = true;
    Notification.display('Loading shipping manifests...', false);
    $scope.shippingList = Shipping.query(function (resources) {
      fetching = false;
      Notification.hide();
    });
    $scope.$watch('query', function (q) {
      if (q) {
        Shipping.query({
          limit: 5,
          q: q
        }, function (resources) {
          for (var i = 0; i < resources.length; i++) {
            if ($scope.shippingList.indexOfById(resources[i].id) == -1) {
              $scope.shippingList.push(resources[i]);
            }
          }
        });
      }
    });
    $scope.loadNext = function () {
      if (!fetching) {
        Notification.display('Loading more shipping manifests...', false);
        Shipping.query({
          offset: $scope.shippingList.length,
          limit: 20
        }, function (resources) {
          Notification.hide();
          for (var i = 0; i < resources.length; i++) {
            $scope.shippingList.push(resources[i]);
          }
        });
      }
    };
  }
]);
angular.module('employeeApp').controller('OrderShippingTodayCtrl', [
  '$scope',
  'Acknowledgement',
  function ($scope, Acknowledgement) {
    $scope.startDate = new Date();
    $scope.startDate.setHours(0, 0, 0);
    $scope.endDate = new Date();
    $scope.endDate.setHours(0, 0, 0);
    $scope.endDate.setDate($scope.endDate.getDate() + 1);
    $scope.ackList = Acknowledgement.query({
      start_date: $scope.startDate.toISOString(),
      end_date: $scope.endDate.toISOString()
    });
  }
]);
angular.module('employeeApp').controller('OrderShippingWeekCtrl', [
  '$scope',
  'Acknowledgement',
  function ($scope, Acknowledgement) {
    $scope.startDate = new Date();
    $scope.endDate = new Date();
    $scope.endDate.setDate($scope.endDate.getDate() + 7);
    $scope.ackList = Acknowledgement.query({
      start_date: $scope.startDate.toISOString(),
      end_date: $scope.endDate.toISOString()
    });
  }
]);
angular.module('employeeApp.services').factory('Shipping', [
  '$resource',
  function ($resource) {
    return $resource('/api/v1/shipping/:id', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  }
]);
angular.module('employeeApp').controller('AdministratorGroupAddCtrl', [
  '$scope',
  'Group',
  'Permission',
  '$location',
  function ($scope, Group, Permission, $location) {
    $scope.permissions = Permission.query({ limit: 0 });
    $scope.group = new Group();
    $scope.group.permissions = [];
    $scope.save = function () {
      for (var i = 0; i < $scope.permissions; i++) {
        if ($scope.permissions[i].$checked) {
          $scope.group.permissions.push($scope.permissions[i]);
        }
      }
      $scope.group.$create(function () {
        $location.path('/administrator/group');
      });
    };
  }
]);
angular.module('employeeApp').controller('AdministratorGroupViewCtrl', [
  '$scope',
  'Group',
  function ($scope, Group) {
    $scope.groups = Group.query({ limit: 0 });
  }
]);
angular.module('employeeApp').controller('AdministratorGroupDetailsCtrl', [
  '$scope',
  'Group',
  'Permission',
  '$routeParams',
  '$location',
  function ($scope, Group, Permission, $routeParams, $location) {
    function indexById(list, item) {
      if (!list.hasOwnProperty('length')) {
        throw new TypeError('Expecting an Array');
      }
      if (typeof item == 'object') {
        if (!item.hasOwnProperty('id')) {
          throw new TypeError('Expecting an id property for argument 2');
        }
      }
      var id = typeof item == 'object' ? item.id : item;
      for (var i in list) {
        if (list[i].id == id) {
          return i;
        }
      }
      return -1;
    }
    function merge(list1, list2) {
      for (var i in list1) {
        for (var h in list2) {
          if (list1[i].id == list2[h].id) {
            list1[i].$checked = true;
          }
        }
      }
    }
    $scope.permissionList = Permission.query({ limit: 0 }, function () {
      merge($scope.permissionList, $scope.group.permissions);
    });
    $scope.group = Group.get({ 'id': $routeParams.id }, function () {
      merge($scope.permissionList, $scope.group.permissions);
    });
    $scope.updatePermission = function (permission) {
      if (permission.$checked) {
        if (indexById($scope.group.permissions, permission) == -1) {
          $scope.group.permissions.push(angular.copy(permission));
        }
      } else {
        var index = indexById($scope.group.permissions, permission);
        if (index > -1) {
          $scope.group.permissions.splice(index, 1);
        }
      }
      $scope.group.$update(function (response) {
      });
    };
    $scope.remove = function () {
      $scope.group.$delete(function () {
        $location.path('/groups');
      });
    };
    $scope.$on('$destroy', function () {
      $scope.group.$update();
    });
  }
]);
angular.module('employeeApp').controller('AdministratorUserDetailsCtrl', [
  '$scope',
  'Group',
  'User',
  '$routeParams',
  '$location',
  '$http',
  'Notification',
  function ($scope, Group, User, $routeParams, $location, $http, Notification) {
    function indexById(list, item) {
      if (!list.hasOwnProperty('length')) {
        throw new TypeError('Expecting an Array');
      }
      if (typeof item == 'object') {
        if (!item.hasOwnProperty('id')) {
          throw new TypeError('Expecting an id property for argument 2');
        }
      }
      var id = typeof item == 'object' ? item.id : item;
      for (var i in list) {
        if (list[i].id == id) {
          return i;
        }
      }
      return -1;
    }
    function merge(list1, list2) {
      for (var i in list1) {
        for (var h in list2) {
          if (list1[i].id == list2[h].id) {
            list1[i].$checked = true;
          }
        }
      }
    }
    $scope.groupList = Group.query({ limit: 0 }, function () {
      merge($scope.groupList, $scope.user.groups);
    });
    $scope.user = User.get({ 'id': $routeParams.id }, function () {
      merge($scope.groupList, $scope.user.groups);
    });
    $scope.changePassword = function () {
      var url = '/user/' + $scope.user.id + '/change_password';
      $http.post(url, $scope.password).success(function (e) {
        Notification.display('Password successfully changed');
        $scope.password = {};
        $scope.showChangePassword = false;
      }).error(function (err) {
        console.error(err);
      });
    };
    $scope.updateGroup = function (group) {
      if (group.$checked) {
        if ($scope.user.groups.indexOfById(group.id) == -1) {
          $scope.user.groups.push(angular.copy(group));
        }
      } else {
        var index = $scope.user.groups.indexOfById(group.id);
        if (index != -1) {
          $scope.user.groups.splice(index, 1);
        }
      }
      Notification.display('Updating ' + $scope.user.username + '...', false);
      $scope.user.$update(function (response) {
        Notification.display($scope.user.username + ' updated.');
      });
    };
    $scope.remove = function () {
      $scope.user.$delete(function () {
        $location.path('/users');
      });
    };
    $scope.update = function () {
      $scope.user.$update();
    };
    $scope.$on('$destroy', function () {
      $scope.user.$update();
    });
  }
]);
angular.module('employeeApp').controller('AdministratorUserAddCtrl', [
  '$scope',
  'User',
  'Group',
  '$location',
  function ($scope, User, Group, $location) {
    $scope.user = new User();
    $scope.user.groups = [];
    $scope.groups = Group.query({ limit: 0 });
    $scope.save = function () {
      if ($scope.form.$valid) {
        for (var i = 0; i < $scope.groups.length; i++) {
          if ($scope.groups[i].$checked) {
            $scope.user.groups.push(angular.copy($scope.groups[i]));
          }
        }
        $scope.user.$create(function () {
          $location.path('/administrator/user');
        });
      }
    };
  }
]);
angular.module('employeeApp').controller('AdministratorUserViewCtrl', [
  '$scope',
  'User',
  function ($scope, User) {
    $scope.users = User.query({ limit: 0 });
  }
]);
angular.module('employeeApp.services').factory('Group', [
  '$resource',
  function ($resource) {
    return $resource('/api/v1/group/:id', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  }
]);
angular.module('employeeApp.services').factory('User', [
  '$resource',
  function ($resource) {
    return $resource('/api/v1/user/:id', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  }
]);
angular.module('employeeApp').controller('SupplyFabricViewCtrl', [
  '$scope',
  'Fabric',
  'Notification',
  function ($scope, Fabric, Notification) {
    var fetching = true;
    $scope.fabrics = Fabric.query(function () {
      fetching = false;
    });
    $scope.$watch('query', function (q) {
      if (q) {
        Fabric.query({
          q: q,
          limit: 5
        }, function (resources) {
          for (var i = 0; i < resources.length; i++) {
            if ($scope.fabrics.indexOfById(resources[i].id) == -1) {
              $scope.fabrics.push(resources[i]);
            }
          }
        });
      }
    });
    $scope.loadNext = function () {
      if (!fetching) {
        fetching = true;
        Notification.display('Loading more fabrics...', false);
        Fabric.query({
          offset: $scope.fabrics.length,
          limit: 50
        }, function (resources) {
          fetching = false;
          Notification.hide();
          for (var i = 0; i < resources.length; i++) {
            if ($scope.fabrics.indexOfById(resources[i].id) == -1) {
              $scope.fabrics.push(resources[i]);
            }
          }
        });
      }
    };
  }
]);
angular.module('employeeApp').controller('SupplyFabricAddCtrl', [
  '$scope',
  'Supplier',
  'Fabric',
  '$location',
  'Notification',
  function ($scope, Supplier, Fabric, $location, Notification) {
    $scope.supplierList = Supplier.query();
    $scope.fabric = new Fabric();
    $scope.supplierText = 'Choose a Supplier for this Fabric';
    $scope.referenceText = 'Enter the Supplier\'s Reference Number';
    $scope.lengthText = 'Enter the Current Length of this Fabric in yards';
    $scope.widthText = 'Enter the Width in millimeters';
    $scope.patternText = 'Enter the Pattern of this Fabric';
    $scope.colorText = 'Enter the Color of this Fabric';
    $scope.cost = 'Enter the Cost per Yard of this Fabric';
    $scope.save = function () {
      Notification.display('Saving Fabric...', false);
      if ($scope.form.$valid) {
        $scope.fabric.$create(function () {
          Notification.display('Fabric Saved');
          $location.path('supply/fabric');
        });
      }
    };
    $scope.upload = function () {
      Notification.display('Uploading Image...', false);
      var fd = new FormData();
      fd.append('image', $scope.images[0]);
      $scope.addLength = null;
      $scope.addRemark = null;
      jQuery.ajax('fabric/image', {
        type: 'POST',
        data: fd,
        processData: false,
        contentType: false,
        success: function (responseData) {
          Notification.display('Image Updated');
          angular.copy(responseData, $scope.fabric);
          $scope.$apply();
        }
      });
    };
  }
]);
angular.module('employeeApp').controller('SupplyFabricDetailsCtrl', [
  '$scope',
  'Fabric',
  '$routeParams',
  '$location',
  'Notification',
  '$http',
  function ($scope, Fabric, $routeParams, $location, Notification, $http) {
    $scope.fabric = Fabric.get({ 'id': $routeParams.id });
    $scope.upload = function () {
      Notification.display('Uploading Image...', false);
      var fd = new FormData();
      fd.append('image', $scope.images[0]);
      $scope.addLength = null;
      $scope.addRemark = null;
      jQuery.ajax('fabric/' + $scope.fabric.id + '/image', {
        type: 'POST',
        data: fd,
        processData: false,
        contentType: false,
        success: function (responseData) {
          Notification.display('Image Updated');
          $scope.fabric.image = {};
          angular.copy(responseData, $scope.fabric.image);
          $scope.fabric.$save();
          $scope.profileImageUrl = $scope.fabric.image.url;
          $scope.imagePreviews = null;
          $scope.images = null;
          $scope.$apply();
        }
      });
    };
    var DEFAULT_ACTIONS = [
        'reserve',
        'add',
        'subtract',
        'reset'
      ];
    function capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    $scope.add = function () {
      $scope.fabric.$add({ quantity: $scope.quantity }, function () {
      });
      $scope.showAdd = false;
      $scope.quantity = null;
    };
    $scope.subtract = function () {
      $scope.fabric.$subtract({ quantity: $scope.quantity }, function () {
      });
      $scope.showSubtract = false;
      $scope.quantity = null;
    };
    $scope.viewLog = function () {
      $http.get('fabric/' + $scope.fabric.id + '/log').success(function (data) {
        $scope.logs = [];
        angular.forEach(data, function (item) {
          $scope.logs.push(item);
        });
      });
    };
    $scope.remove = function () {
      Notification.display('Deleting Fabric...');
      $scope.fabric.$delete(function () {
        Notification.display('Fabric Deleted');
        $location.path('/fabric');
      });
    };
    $scope.update = function () {
      Notification.display('Updating Fabric...', false);
      $scope.fabric.$update(Notification.display('Fabric Updated'));
    };
  }
]);
angular.module('employeeApp').controller('SupplyFoamDetailsCtrl', [
  '$scope',
  'Foam',
  '$routeParams',
  '$location',
  'Notification',
  function ($scope, Foam, $routeParams, $location, Notification) {
    $scope.foam = Foam.get({ 'id': $routeParams.id });
    $scope.upload = function () {
      Notification.display('Uploading Image...', false);
      var fd = new FormData();
      fd.append('image', $scope.images[0]);
      $scope.addLength = null;
      $scope.addRemark = null;
      jQuery.ajax('supply/' + $scope.foam.id + '/image', {
        type: 'POST',
        data: fd,
        processData: false,
        contentType: false,
        success: function (responseData) {
          Notification.display('Image Updated');
          $scope.foam.image = {};
          angular.copy(responseData, $scope.foam.image);
          $scope.foam.$save();
          $scope.profileImageUrl = $scope.foam.image.url;
          $scope.imagePreviews = null;
          $scope.images = null;
          $scope.$apply();
        }
      });
    };
    $scope.remove = function () {
      $scope.foam.$delete(function () {
        $location.path('/foam');
      });
      $scope.foamList = Foam.query();
    };
    $scope.update = function () {
      Notification.display('Updating Foam...', false);
      $scope.foam.$save(function () {
        Notification.display('Foam Updated');
      });
    };
  }
]);
angular.module('employeeApp').controller('SupplyFoamAddCtrl', [
  '$scope',
  'Foam',
  'Supplier',
  '$location',
  'Notificaiton',
  function ($scope, Foam, Supplier, $location, Notification) {
    $scope.supplierList = Supplier.query();
    $scope.foam = new Foam();
    $scope.save = function () {
      $scope.foam.$save(function () {
        $location.path('/foam');
      });
    };
    $scope.upload = function () {
      Notification.display('Uploading Image...', false);
      var fd = new FormData();
      fd.append('image', $scope.images[0]);
      $scope.addLength = null;
      $scope.addRemark = null;
      jQuery.ajax('supply/image', {
        type: 'POST',
        data: fd,
        processData: false,
        contentType: false,
        success: function (responseData) {
          Notification.display('Image Updated');
          $scope.foam.image = $scope.foam.image || {};
          angular.copy(responseData, $scope.foam.image);
          $scope.$apply();
        }
      });
    };
  }
]);
angular.module('employeeApp').controller('SupplyFoamViewCtrl', [
  '$scope',
  'Foam',
  function ($scope, Foam) {
    $scope.foamList = Foam.query();
  }
]);
angular.module('employeeApp.services').factory('Foam', [
  'eaResource',
  function (eaResource) {
    return eaResource('foam/:id', { id: '@id' });
  }
]);
angular.module('employeeApp').controller('AccountingTransactionViewCtrl', [
  '$scope',
  'Transaction',
  function ($scope, Transaction) {
    $scope.transactionList = Transaction.poll().query();
    $scope.$on('$destroy', function () {
      Transaction.stopPolling();
    });
  }
]);
angular.module('employeeApp').controller('AccountingTransactionAddCtrl', [
  '$scope',
  'Transaction',
  'Notification',
  '$location',
  'Contact',
  function ($scope, Transaction, Notification, $location, Contact) {
    $scope.transaction = new Transaction();
    $scope.contactList = Contact.query();
    $scope.save = function () {
      Notification.display('Saving Transaction...', false);
      $scope.transaction.$save(function () {
        Notification.display('Transaction Saved');
        $location.path('/accounting/transaction');
      });
    };
  }
]);
angular.module('employeeApp').controller('AccountingTransactionDetailsCtrl', [
  '$scope',
  function ($scope) {
  }
]);
angular.module('employeeApp.services').factory('Transaction', [
  'eaResource',
  function (eaResource) {
    return eaResource('transaction/:id', { id: '@id' });
  }
]);
angular.module('employeeApp.services').factory('eaStorage', [function () {
    function factory(namespace) {
      function compare(item, arg) {
        var aKey;
        for (aKey in arg) {
          if (item.hasOwnProperty(aKey)) {
            if (item[aKey] !== arg[aKey]) {
              return false;
            }
          } else {
            return false;
          }
        }
        return true;
      }
      function parseDate(obj) {
        if (obj.hasOwnProperty('delivery_date')) {
          obj.delivery_date = new Date(obj.delivery_date);
        }
        if (obj.hasOwnProperty('time_created')) {
          obj.time_created = new Date(obj.time_created);
        }
        if (obj.hasOwnProperty('last_login')) {
          obj.last_login = new Date(obj.last_login);
        }
        return obj;
      }
      function storage(namespace) {
        this.namespace = namespace;
        this.collection = this.__loadFromStorage__(this.namespace) || {};
      }
      storage.__defineGetter__('length', function () {
        return 'ok';
      });
      storage.prototype.__save__ = function (obj) {
        if (obj.hasOwnProperty('id')) {
          this.collection[obj.id] = obj;
        } else {
        }
      };
      storage.prototype.__saveToStorage__ = function (key, data) {
        window.localStorage.setItem(key, JSON.stringify(data));
      };
      storage.prototype.__loadFromStorage__ = function (key) {
        return JSON.parse(window.localStorage.getItem(key));
      };
      storage.prototype.query = function (arg) {
        if (typeof arg === 'object') {
          var data = [], key;
          for (key in this.collection) {
            if (compare(this.collection[key], arg)) {
              this.collection[key] = parseDate(this.collection[key]);
              data.push(this.collection[key]);
            }
          }
          return data;
        } else {
          throw new TypeError('Arguments must be in the form of a key:value object');
        }
      };
      storage.prototype.save = function (obj) {
        var i;
        if (Object.prototype.toString.call(obj) === '[object Array]') {
          for (i in obj) {
            this.__save__(obj[i]);
          }
        } else {
          this.__save__(obj);
        }
        this.__saveToStorage__(this.namespace, this.collection);
      };
      storage.prototype.get = function (id) {
        return this.collection[id] ? parseDate(this.collection[id]) : null;
      };
      storage.prototype.iterate = function (callback) {
        var key;
        for (key in this.collection) {
          if (this.collection.hasOwnProperty(key)) {
            callback(parseDate(this.collection[key]));
          }
        }
      };
      storage.prototype.remove = function (arg) {
        var id = typeof arg === 'object' ? arg.hasOwnProperty('id') ? arg.id : null : arg;
        if (this.collection.hasOwnProperty(id)) {
          delete this.collection[id];
          this.__saveToStorage__(this.namespace, this.collection);
        }
      };
      return new storage(namespace);
    }
    return factory;
  }]);
angular.module('employeeApp.services').factory('eaResource', [
  'eaStorage',
  '$rootScope',
  '$http',
  '$q',
  '$parse',
  '$resource',
  '$timeout',
  'eaIndexedDB',
  'Notification',
  function (eaStorage, $rootScope, $http, $q, $parse, $resource, $timeout, eaIndexedDB, Notification) {
    function ResourceFactory(url, paramDefaults, actions) {
      var DEFAULT_ACTIONS = {
          'get': { method: 'GET' },
          'save': { method: 'POST' },
          'update': { method: 'PUT' },
          'query': {
            method: 'GET',
            isArray: true
          },
          'remove': { method: 'DELETE' },
          'delete': { method: 'DELETE' }
        }, oResource = new $resource(url, paramDefaults, actions), storage = eaStorage(url.split(/\//g)[0]), db = eaIndexedDB(url), value, previousAction, previousParams, last_checked = true, poll = true, getter = function (obj, path) {
          return $parse(path)(obj);
        };
      function extractParams(data, actionParams) {
        var ids = {};
        actionParams = angular.extend({}, paramDefaults, actionParams);
        angular.forEach(actionParams, function (value, key) {
          if (angular.isFunction(value)) {
            value = value();
          }
          ids[key] = value.charAt && value.charAt(0) == '@' ? getter(data, value.substr(1)) : value;
        });
        return ids;
      }
      function indexOfId(array, id) {
        for (var i = 0; i < array.length; i++) {
          if (array[i].hasOwnProperty('id')) {
            if (array[i].id == id) {
              return i;
            }
          }
        }
        return -1;
      }
      actions = angular.extend({}, DEFAULT_ACTIONS, actions);
      function Resource(value) {
        angular.extend(this, value || {});
        this.$$poll = false;
        this.$$last_checked = null;
        this.$$timeout = null;
        this.$$date = true;
      }
      Resource.disableLastChecked = function () {
        last_checked = false;
      };
      Resource.prototype.disableLastChecked = Resource.disableLastChecked;
      Resource.poll = function () {
        this.$$poll = true;
        poll = true;
        return this;
      };
      Resource.prototype.poll = Resource.poll;
      Resource.stopPolling = function () {
        this.$$poll = false;
        poll = false;
        return this;
      };
      Resource.prototype.poll = Resource.poll;
      angular.forEach(actions, function (action, name) {
        var hasBody = action.method == 'POST' || action.method == 'PUT' || action.method == 'PATCH';
        Resource[name] = function (a1, a2, a3, a4) {
          var params = {};
          var data;
          var success = angular.noop;
          var error = null;
          var promise;
          switch (arguments.length) {
          case 4:
            error = a4;
            success = a3;
          case 3:
          case 2:
            if (angular.isFunction(a2)) {
              if (angular.isFunction(a1)) {
                success = a1;
                error = a2;
                break;
              }
              success = a2;
              error = a3;
            } else {
              params = a1;
              data = a2;
              success = a3;
              break;
            }
          case 1:
            if (angular.isFunction(a1))
              success = a1;
            else if (hasBody)
              data = a1;
            else
              params = a1;
            break;
          case 0:
            break;
          default:
            throw 'Expected between 0-4 arguments [params, data, success, error], got ' + arguments.length + ' arguments.';
          }
          if (previousAction != name || params != previousParams) {
            this.$$last_checked = undefined;
          }
          if (action.isArray) {
            value = angular.isArray(value) ? value || [] : [];
          } else {
            value = angular.isObject(value) && !value.hasOwnProperty('length') ? value || {} : {};
            value = this instanceof Resource ? this : new Resource(value);
          }
          if (action.method == 'GET' && !this.$$last_checked) {
            if (db.ready) {
              if (action.isArray) {
                db.query(function (data) {
                  var fn = function () {
                    for (var key in data) {
                      var index = indexOfId(value, data[key].id);
                      if (index != -1) {
                        angular.copy(data[key], value[index]);
                      } else {
                        try {
                          value.push(new Resource(data[key]));
                        } catch (e) {
                          console.warn(e.stack);
                        }
                      }
                    }
                    (success || angular.noop)(value);
                  };
                  if ($rootScope.$$phase == '$apply' || $rootScope.$$phase == '$digest') {
                    fn();
                  } else {
                    $rootScope.$apply(function () {
                      fn();
                    });
                  }
                });
              } else {
                db.get(params.id, function (response) {
                  var fn = function () {
                    angular.copy(new Resource(response), value);
                    (success || angular.noop)(value);
                  };
                  if ($rootScope.$$phase == '$digest' || $rootScope.$$phase == '$apply') {
                    fn();
                  } else {
                    $rootScope.$apply(function () {
                      fn();
                    });
                  }
                });
              }
            } else {
              if (action.isArray) {
                db.onready = function () {
                  db.query(function (data) {
                    var fn = function () {
                      for (var key in data) {
                        var index = indexOfId(value, data[key].id);
                        if (index != -1) {
                          angular.copy(data[key], value[index]);
                        } else {
                          try {
                            value.push(new Resource(data[key]));
                          } catch (e) {
                            console.warn(e.stack);
                          }
                        }
                      }
                      (success || angular.noop)(value);
                    };
                    if ($rootScope.$$phase == '$digest' || $rootScope.$$phase == '$apply') {
                      fn();
                    } else {
                      $rootScope.$apply(function () {
                        fn();
                      });
                    }
                  });
                };
              } else {
                db.onready = function () {
                  db.get(params.id, function (response) {
                    var fn = function () {
                      angular.copy(new Resource(response), value);
                      (success || angular.noop)(value);
                    };
                    if ($rootScope.$$phase == '$digest' || $rootScope.$$phase == '$apply') {
                      fn();
                    } else {
                      $rootScope.$apply(function () {
                        fn();
                      });
                    }
                  });
                };
              }
            }
          }
          if (this.$$last_checked !== undefined && action.method == 'GET') {
            angular.extend(params, { last_modified: this.$$last_checked.toISOString() });
          }
          var oPromise = oResource[name](params, data, function (response) {
              if (action.method == 'DELETE' || hasBody) {
                angular.extend(this, response);
              }
              if (action.method === 'GET') {
                if (action.isArray || angular.isArray(response)) {
                  var index;
                  for (var i in response) {
                    index = indexOfId(value, response[i].id);
                    if (index > -1) {
                      if (!angular.equals(value[index], response[i])) {
                        angular.extend(value[index], new Resource(response[i]));
                        if (value[index].deleted) {
                          value.splice(index, 1);
                          var item = [];
                          item.splice(index);
                        }
                      }
                    } else {
                      if (!response[i].deleted) {
                        try {
                          value.push(new Resource(response[i]));
                        } catch (e) {
                          console.warn(e.stack);
                        }
                      }
                    }
                  }
                } else {
                  if (response.deleted) {
                    angular.copy({}, value);
                    Notification.display('This resource no longer exists.');
                  } else {
                    angular.extend(value, new Resource(response));
                  }
                }
              }
              if (db.ready) {
                action.method == 'DELETE' ? db.remove(params) : hasBody ? db.save(this) : db.save(value);
              }
              if (last_checked) {
                this.$$last_checked = new Date();
              }
              if (this.$$poll && action.method == 'GET') {
                this.$$timeout = $timeout(function () {
                  var request = Resource[name].bind(this);
                  request(params, data, success, error);
                }.bind(this), 30000);
              }
              success(response);
            }.bind(this), function (e) {
            });
          previousAction = name;
          previousParams = params;
          return value;
        };
        Resource.prototype['$' + name] = function (a1, a2, a3) {
          var params = extractParams(this), success = angular.noop, error;
          switch (arguments.length) {
          case 3:
            params = a1;
            success = a2;
            error = a3;
            break;
          case 2:
          case 1:
            if (angular.isFunction(a1)) {
              success = a1;
              error = a2;
            } else {
              params = a1;
              success = a2 || angular.noop;
            }
            break;
          case 0:
            break;
          default:
            throw 'Expected between 1-3 arguments [params, success, error], got ' + arguments.length + ' arguments.';
          }
          var data = hasBody ? this : undefined;
          Resource[name].call(this, params, data, success, error);
        };
      });
      return Resource;
    }
    return ResourceFactory;
  }
]);
angular.module('employeeApp.services').factory('scanner', [
  '$location',
  '$rootScope',
  function ($location, $rootScope) {
    var code = '';
    function Scanner() {
      this._activeParse = false;
      this._onscan = null;
    }
    Scanner.prototype._check = function (evt, customFn) {
      if (evt.keyCode === 76 && evt.altKey) {
        this._activeParse = true;
      }
      if (this._activeParse) {
        this._parse(evt);
      }
    };
    Scanner.prototype._parse = function (evt) {
      var key = evt.keyCode;
      if (evt.altKey) {
        if (key == 71) {
          this._activeParse = false;
          (this._onscan || this._dispatch)(code);
          code = '';
        }
      } else if (96 <= key && key <= 105 || 48 <= key && key <= 90) {
        var letter = String.fromCharCode(96 <= key && key <= 105 ? key - 48 : key);
        code += letter;
      } else if (key === 189) {
        code += '-';
      }
    };
    Scanner.prototype._dispatch = function (code) {
      var codes = code.split('-');
      if (codes.length > 1) {
        switch (codes[0]) {
        case 'A':
          $rootScope.$apply(function () {
            $location.path('/order/acknowledgement/' + codes[1]);
          });
          break;
        case 'AI':
          $rootScope.$apply(function () {
            $location.path('/order/acknowledgement/item/' + codes[1]);
          });
          break;
        case 'S':
          $rootScope.$apply(function () {
            $location.path('/order/shipping/' + codes[1]);
          });
          break;
        default:
          break;
        }
      }
    };
    Scanner.prototype.enable = function () {
      angular.element(document.body).bind('keydown', this._check.bind(this));
    };
    Scanner.prototype.disable = function () {
      angular.element(document.body).unbind('keydown', this._check.bind(this));
    };
    Object.defineProperty(Scanner.prototype, 'onscan', {
      set: function (fn) {
        this._onscan = fn;
      }
    });
    return new Scanner();
  }
]);
angular.module('employeeApp').controller('OrderAcknowledgementDetailsCtrl', [
  '$scope',
  'Acknowledgement',
  '$routeParams',
  'Notification',
  '$http',
  function ($scope, Acknowledgement, $routeParams, Notification, $http) {
    Notification.display('Loading Acknowledgement...', false);
    $scope.showCal = false;
    $scope.acknowledgement = Acknowledgement.get({
      'id': $routeParams.id,
      'pdf': true
    }, function () {
      Notification.display('Acknowledgement Loaded');
    });
    $scope.gridOptions = {
      data: 'acknowledgement.products',
      columnDefs: [{
          field: 'image',
          displayName: 'Image'
        }]
    };
    $scope.getPDF = function (type) {
      try {
        var address = $scope.acknowledgement.pdf[type.toLowerCase()];
        window.open(address);
      } catch (e) {
        var message = 'Missing ' + type + ' pdf for Acknowledgement #' + $scope.acknowledgement.id;
        Notification.display(message);
        throw new Error(message);
      }
    };
    $scope.viewLog = function () {
      $http.get('acknowledgement/' + $scope.acknowledgement.id + '/log').success(function (data) {
        angular.forEach(data, function (log) {
          $scope.logs = $scope.logs || [];
          $scope.logs.push(log);
          $scope.showLog = true;
        });
      });
    };
    $scope.save = function () {
      Notification.display('Saving Acknowledgement...', false);
      $scope.acknowledgement.$update(function (response) {
        Notification.display('Acknowledgement ' + $scope.acknowledgement.id + ' saved.');
      }, function () {
        Notification.display('Failed to save acknowledgement ' + $scope.acknowledgement.id, false);
      });
    };
  }
]);
angular.module('employeeApp').directive('scanner', [
  '$location',
  '$rootScope',
  function ($location, $rootScope) {
    var code = '';
    function dispatch(code) {
      var codes = code.split('-');
      if (codes.length > 1) {
        switch (codes[0]) {
        case 'A':
          $rootScope.$apply(function () {
            $location.path('/order/acknowledgement/' + codes[1]);
          });
          break;
        case 'S':
          $rootScope.$apply(function () {
            $location.path('/order/shipping/' + codes[1]);
          });
          break;
        default:
          break;
        }
      }
    }
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.keyup(function (e) {
          var key = e.keyCode;
          if (96 <= key && key <= 105 || 48 <= key && key <= 90) {
            var letter = String.fromCharCode(96 <= key && key <= 105 ? key - 48 : key);
            code += letter;
          } else {
            switch (key) {
            case 13:
              dispatch(code);
              code = '';
              break;
            case 189:
              code += '-';
              break;
            default:
              break;
            }
          }
        });
      }
    };
  }
]);
angular.module('employeeApp.services').factory('dateParser', [function () {
    return function (promise) {
      function formatter(obj) {
        if (obj.hasOwnProperty('delivery_date')) {
          obj.delivery_date = new Date(obj.delivery_date);
        }
        if (obj.hasOwnProperty('time_created')) {
          obj.time_created = new Date(obj.time_created);
        }
        if (obj.hasOwnProperty('last_login')) {
          obj.last_login = new Date(obj.last_login);
        }
        return obj;
      }
      return promise.then(function (response) {
        var data = response.data;
        if (angular.isArray(data)) {
          for (var i = 0; i < data.length; i++) {
            data[i] = formatter(data[i]);
          }
        } else if (angular.isObject(data)) {
          data = formatter(data);
        }
        response.data = data;
        return response;
      }, function () {
      });
    };
  }]).config(function ($httpProvider) {
  $httpProvider.responseInterceptors.push('dateParser');
});
angular.module('employeeApp.services').factory('Permission', [
  '$resource',
  function ($resource) {
    return $resource('/api/v1/permission/:id', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  }
]);
angular.module('employeeApp').controller('OrderAcknowledgementWeeklyCtrl', [
  '$scope',
  'Acknowledgement',
  function ($scope, Acknowledgement) {
    $scope.startDate = new Date();
    $scope.endDate = new Date();
    $scope.endDate.setDate($scope.endDate.getDate() + 7);
    $scope.ackList = Acknowledgement.query({
      start_date: $scope.startDate.toISOString(),
      end_date: $scope.endDate.toISOString()
    });
  }
]);
angular.module('employeeApp').controller('OrderAcknowledgementDailyCtrl', [
  '$scope',
  'Acknowledgement',
  function ($scope, Acknowledgement) {
    $scope.today = new Date();
    $scope.ackList = Acknowledgement.query({ date: $scope.today.toISOString() });
  }
]);
angular.module('employeeApp').controller('OrderShippingDetailsCtrl', [
  '$scope',
  'Shipping',
  '$routeParams',
  'Notification',
  '$http',
  function ($scope, Shipping, $routeParams, Notification, $http) {
    Notification.display('Loading Shipping Manifest...', false);
    $scope.showCal = false;
    $scope.shipping = Shipping.get({
      'id': $routeParams.id,
      pdf: true
    }, function () {
      Notification.display('Shipping Manifest Loaded');
    });
    $scope.updateDeliveryDate = function () {
      $scope.showCal = false;
    };
    $scope.getPDF = function () {
      Notification.display('Retrieving PDF...', false);
      window.open($scope.shipping.pdf.url);
    };
    $scope.save = function () {
      Notification.display('Saving Shipping Manifest...', false);
      $scope.shipping.$update(function () {
        Notification.display('Shipping Manifest ' + $scope.shipping.id + ' Saved');
      });
    };
  }
]);
angular.module('employeeApp.directives').directive('tooltip', [function () {
    function getText(scope, attrs) {
      switch (attrs.tooltip) {
      case 'price':
        return 'Enter a price in the format of 100 or 123.45';
      default:
        return scope.$eval(attrs.tooltip);
      }
    }
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var text = getText(scope, attrs);
        if (attrs.required) {
          text += ' (Required)';
        }
        var tooltip = angular.element('<div class="tooltip right"><div class="tooltip-arrow"></div><div class="tooltip-inner">' + text + '</div></div>');
        var position = element.position();
        element.bind('mouseenter', function () {
          element.parent().append(tooltip);
          tooltip.css({
            left: position.left + element.outerWidth(),
            top: position.top - (tooltip.outerHeight() - element.outerHeight()) / 2
          });
          tooltip.fadeTo(250, 0.8);
        });
        element.bind('mouseleave', function () {
          tooltip.fadeTo(250, 0, function () {
            tooltip.remove();
          });
        });
      }
    };
  }]);
angular.module('employeeApp').controller('OrderAcknowledgementItemDetailsCtrl', [
  '$scope',
  '$routeParams',
  'AcknowledgementItem',
  'Fabric',
  'Notification',
  '$location',
  function ($scope, $routeParams, AcknowledgementItem, Fabric, Notification, $location) {
    $scope.fabricList = Fabric.query();
    $scope.item = AcknowledgementItem.get({ id: $routeParams.id });
    $scope.save = function () {
      Notification.display('Saving' + $scope.item.description + '...', false);
      $scope.item.$save(function () {
        Notification.display($scope.item.description + ' saved');
      }, function () {
        Notification.display('There was an error in saving ' + $scope.item.description, false);
      });
    };
    $scope.remove = function () {
      Notification.display('Deleting ' + $scope.item.description, false);
      $scope.item.$delete(function () {
        Notification.display('Deleting ' + $scope.item.description);
        $location.path('/order/acknowledgement');
      });
    };
  }
]);
angular.module('employeeApp').factory('AcknowledgementItem', [
  '$resource',
  function ($resource) {
    return $resource('/api/v1/acknowledgement-item/:id', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  }
]);
angular.module('employeeApp').controller('SupplyPropViewCtrl', [
  '$scope',
  'Supply',
  '$filter',
  '$q',
  'Notification',
  '$location',
  function ($scope, Supply, $filter, $q, Notification, $location) {
    $scope.supplyList = Supply.query({ type: 'prop' });
    $scope.add = function () {
      $scope.safeApply(function () {
        $location.path('/supply/prop/add');
      });
    };
    $scope.upload = function (index, image) {
      Notification.display('Uploading Image...', false);
      var resource = $filter('orderBy')($filter('filter')($scope.supplyList, $scope.query), 'supplier.name')[index], deferred, promise, fd = new FormData();
      deferred = $q.defer();
      promise = deferred.promise;
      promise.then(function (data) {
        Notification.display('Image Updated');
        $scope.safeApply(function () {
          resource.image = resource.image || {};
          angular.copy(data, resource.image);
          resource.$save(function () {
            Notification.display('Prop Saved');
          });
        });
      }, function (reason) {
        Notification.display('Unable to Upload Image');
      });
      fd.append('image', image);
      jQuery.ajax('supply/image', {
        type: 'POST',
        data: fd,
        processData: false,
        contentType: false,
        success: function (response) {
          deferred.resolve(response);
        },
        error: function () {
          deferred.reject();
        }
      });
    };
  }
]);
angular.module('employeeApp').controller('SupplyPropAddCtrl', [
  '$scope',
  'Supplier',
  'Supply',
  'Notification',
  '$location',
  '$q',
  function ($scope, Supplier, Supply, Notification, $location, $q) {
    var deferred, promise, uploading = false;
    $scope.supplierList = Supplier.query();
    $scope.prop = new Supply();
    $scope.prop.type = 'prop';
    $scope.supplierText = 'Choose a Supplier for this Fabric';
    $scope.referenceText = 'Enter the Supplier\'s Reference Number';
    $scope.widthText = 'Enter the Width in millimeters';
    $scope.depthText = 'Enter the Depth in millimeters';
    $scope.heightText = 'Enter the Height in millimeters';
    $scope.cost = 'Enter the Cost in the format of 100 or 123.45';
    $scope.save = function () {
      if ($scope.form.$valid) {
        if (uploading) {
          var prop = angular.copy($scope.prop);
          promise.then(function (response) {
            prop.image = prop.image || {};
            angular.copy(response, prop.image);
            Notification.display('Saving Prop...', false);
            prop.$save(function () {
              Notification.display('Prop Saved');
            });
          }, angular.noop);
        } else {
          Notification.display('Saving Prop...', false);
          $scope.prop.$save(function () {
            Notification.display('Prop Saved');
          });
        }
        $location.path('/supply/prop');
      }
    };
    $scope.upload = function () {
      Notification.display('Uploading Image...', false);
      var fd = new FormData();
      fd.append('image', $scope.images[0]);
      $scope.addLength = null;
      $scope.addRemark = null;
      deferred = $q.defer();
      promise = deferred.promise;
      promise.then(function (data) {
        Notification.display('Image Updated');
        if ($scope) {
          $scope.$apply(function () {
            $scope.prop.image = $scope.prop.image || {};
            angular.copy(data, $scope.prop.image);
          });
        }
      }, function (reason) {
        Notification.display('Unable to Upload Image');
      });
      uploading = true;
      jQuery.ajax('supply/image', {
        type: 'POST',
        data: fd,
        processData: false,
        contentType: false,
        success: function (response) {
          deferred.resolve(response);
        },
        error: function () {
          deferred.reject();
        }
      });
    };
  }
]);
angular.module('employeeApp').factory('Supply', [
  '$resource',
  function ($resource) {
    return $resource('/api/v1/supply/:id/:action', { id: '@id' }, {
      create: { method: 'POST' },
      update: { method: 'PUT' },
      add: {
        method: 'POST',
        params: { action: 'add' }
      },
      subtract: {
        method: 'POST',
        params: { action: 'subtract' }
      }
    });
  }
]);
angular.module('employeeApp').controller('SupplyPropDetailsCtrl', [
  '$scope',
  function ($scope) {
  }
]);
angular.module('employeeApp').directive('searchBar', [
  '$compile',
  function ($compile) {
    'use strict';
    return {
      restrict: 'A',
      scope: { query: '=ngModel' },
      link: function postLink(scope, element, attrs) {
        var input = null;
        var model = attrs.ngModel || 'query';
        element.addClass('search-bar');
        if (attrs.searchBarDate !== undefined) {
          input = angular.element('<div data-ng-model="' + model + '" class="datepicker" ui-date></div>');
          element.addClass('date');
        } else {
          input = angular.element('<input size="40" placeholder="Search" ng-model="query" />');
        }
        $compile(input)(scope);
        element.append(input);
        function searchHandler(evt) {
          if (evt.which == '70' && (evt.metaKey || evt.ctrlKey)) {
            evt.preventDefault();
            if (element.hasClass('focus')) {
              input.blur();
              element.removeClass('focus');
            } else {
              input.focus();
              element.addClass('focus');
            }
          }
        }
        $(window).on('keydown', searchHandler);
        scope.$on('$destroy', function () {
          $(window).off('keydown', searchHandler);
        });
      }
    };
  }
]);
angular.module('employeeApp').directive('eaSave', [function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.text('this is the eaSave directive');
      }
    };
  }]);
angular.module('employeeApp').directive('eaAdd', [function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        function callback(evt) {
          if (evt.which == '65' && (evt.metaKey || evt.ctrlKey)) {
            evt.preventDefault();
            scope.$eval(attrs.eaAdd);
          }
        }
        $(window).on('keydown', callback);
        scope.$on('$destroy', function () {
          $(window).off('keydown', callback);
        });
      }
    };
  }]);
angular.module('employeeApp.directives').directive('imageCropper', [
  'Notification',
  '$compile',
  function (Notification, $compile) {
    function Scene(canvas, ctx, image) {
      this.ctx = ctx;
      this.canvas = canvas;
      this.img = image;
      this._scale = 1;
      this.bX = 0;
      this.bY = 0;
      this.bH = this.img.height;
      this.bW = this.img.width;
      this.cropX = null;
      this.cropY = null;
      this.cropW = null;
      this.cropH = null;
      this.mouseX = null;
      this.mouseY = null;
      this.corners = [];
      this.xProportion = this.canvas.width / this.img.width;
      this.yProportion = this.canvas.height / this.img.height;
    }
    Object.defineProperties(Scene.prototype, {
      scale: {
        get: function () {
          return this._scale;
        },
        set: function (scale) {
          this._scale = scale <= 1 ? scale : scale / 100;
        }
      },
      x: {
        get: function () {
          return this.bX;
        },
        set: function (x) {
          this.bX = x;
        }
      },
      y: {
        get: function () {
          return this.bY;
        },
        set: function (y) {
          this.bY = y;
        }
      },
      w: {
        get: function () {
          return this.bW;
        },
        set: function (w) {
          this.bW = w;
        }
      },
      h: {
        get: function () {
          return this.bH;
        },
        set: function (h) {
          this.bH = h;
        }
      }
    });
    Scene.prototype.repositionCorners = function () {
      this.corners.topLeft = {
        x: this.bX * this.xProportion,
        y: this.bY * this.yProportion
      };
      this.corners.topRight = {
        x: (this.bX + this.bW) * this.xProportion,
        y: this.bY * this.yProportion
      };
      this.corners.bottomRight = {
        x: (this.bX + this.bW) * this.xProportion,
        y: (this.bY + this.bH) * this.yProportion
      };
      this.corners.bottomLeft = {
        x: this.bX * this.xProportion,
        y: (this.bY + this.bH) * this.yProportion
      };
    };
    Scene.prototype.inCorner = function (x, y) {
      for (var key in this.corners) {
        if (Math.sqrt(Math.pow(x - this.corners[key].x, 2) + Math.pow(y - this.corners[key].y, 2)) <= 10) {
          return key;
        }
      }
    };
    Scene.prototype.drawCube = function (x, y) {
      this.ctx.beginPath();
      this.ctx.arc(x, y, 5, 0, Math.PI * 2, true);
      this.ctx.fill();
    };
    Scene.prototype.drawCubes = function () {
      this.ctx.fillStyle = 'rgb(255, 255, 255)';
      this.drawCube(this.bX * this.xProportion, this.bY * this.yProportion);
      this.drawCube((this.bX + this.bW) * this.xProportion, (this.bY + this.bH) * this.yProportion);
      this.drawCube((this.bX + this.bW) * this.xProportion, this.bY * this.yProportion);
      this.drawCube(this.bX * this.xProportion, (this.bY + this.bH) * this.yProportion);
    };
    Scene.prototype.drawBackground = function () {
      this.ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    };
    Scene.prototype.draw = function () {
      this.repositionCorners();
      this.drawBackground();
      this.ctx.drawImage(this.img, this.bX, this.bY, this.bW, this.bH, this.bX * this.xProportion, this.bY * this.yProportion, this.bW * this.xProportion, this.bH * this.yProportion);
      this.drawCubes();
    };
    Scene.prototype.drawImage = function () {
      this.ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height, 0, 0, this.canvas.width, this.canvas.height);
    };
    Scene.prototype.crop = function (boundingWidth, boundingHeight) {
      if (boundingHeight && boundingWidth) {
        var ratio1 = boundingHeight / boundingWidth;
        var ratio2 = this.bH / this.bW;
        if (ratio1 > ratio2) {
          this.canvas.width = boundingWidth;
          this.canvas.height = this.bH * boundingWidth / this.bW;
          angular.element(this.canvas).css('top', (boundingHeight - this.canvas.height) / 2);
          angular.element(this.canvas).css('left', (boundingWidth - this.canvas.width) / 2);
        } else {
          this.canvas.height = boundingHeight;
          this.canvas.width = this.bW * boundingHeight / this.bH;
          angular.element(this.canvas).css('left', (boundingWidth - this.canvas.width) / 2);
          angular.element(this.canvas).css('top', (boundingHeight - this.canvas.height) / 2);
        }
      } else {
        this.canvas.width = this.bW;
        this.canvas.height = this.bH;
      }
      this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h, 0, 0, this.canvas.width, this.canvas.height);
    };
    Scene.prototype.getImageAsURL = function () {
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.width = this.w * this._scale;
      canvas.height = this.h * this._scale;
      context.drawImage(this.img, this.x, this.y, this.w, this.h, 0, 0, this.w * this._scale, this.h * this._scale);
      return canvas.toDataURL('image/jpeg');
    };
    Scene.prototype.getImageAsBlob = function () {
      var url = this.getImageAsURL();
      var bytes = atob(url.split(',')[1]);
      var stream = new Uint8Array(bytes.length);
      for (var key in bytes) {
        stream[key] = bytes.charCodeAt(key);
      }
      return new Blob([stream], { type: 'image/jpeg' });
    };
    return {
      restrict: 'A',
      template: '<div class="cropper">                        <div class="cropper-message" ng-show="!cropper.image.loaded"><h3>Drop Image Here</h3></div>                        <div class="cropper-controller" ng-show="cropper.image.loaded">                            <button ng-click="cropper.crop()" ng-show="!cropper.cropping">Crop</button>                            <button ng-click="cropper.save()" ng-show="cropper.cropping">Done Cropping</button>                            <button ng-click="save()" ng-show="!cropper.cropping">Save</button>                            <button data-ng-click="preview(cropper.getImageAsURL())">Preview</button>                            <table class="cropper-scale">                                <tr>                                    <td>Scale:</td>                                    <td><input class="scale" type="number" data-ng-model="cropper.scale" min="0" max="100">%</td>                                </tr>                                <tr>                                    <td>Width</td>                                    <td>{{cropper.image.scaled_width | number:0}}px</td>                                </tr>                                <tr>                                    <td>Height</td>                                    <td>{{cropper.image.scaled_height | number:0}}px</td>                                </tr>                            </table>                        </div>                        <div class="canvas-container" ng-show="cropper.image.loaded">                            <canvas class="cropper-canvas"></canvas>                        </div>                    </div>',
      replace: true,
      scope: {
        onSave: '&',
        onLoad: '&'
      },
      link: function postLink(scope, element, attrs) {
        var cubes = [];
        var canvasContainer = element.find('.canvas-container');
        var canvasElement = canvasContainer.find('canvas');
        var canvas = canvasContainer.find('canvas')[0];
        var parent = element;
        var fileReader = new FileReader();
        var ctx = canvas.getContext('2d');
        var mouseX;
        var mouseY;
        var corner;
        var scene;
        var image;
        var mousedown = false;
        canvas.width = canvasContainer.outerWidth();
        canvas.height = canvasContainer.outerHeight();
        fileReader.onload = function (evt) {
          parent.removeClass('drag-drop-active');
          image = new Image();
          image.onload = function (e) {
            Notification.display('Image Rendered');
            var height = canvasContainer.innerHeight();
            var width = canvasContainer.innerWidth();
            var ratio1 = height / width;
            var ratio2 = image.height / image.width;
            if (ratio1 > ratio2) {
              canvas.width = width;
              canvas.height = image.height * width / image.width;
            } else {
              canvas.height = height;
              canvas.width = image.width * height / image.height;
            }
            angular.element(canvas).css('top', (height - canvas.height) / 2);
            angular.element(canvas).css('left', (width - canvas.width) / 2);
            scene = new Scene(canvas, ctx, image);
            scene.drawImage();
            try {
              scope.onLoad();
            } catch (evt) {
              console.warn(evt);
            }
            scope.$apply();
          };
          image.src = evt.target.result;
        };
        element.bind('dragenter', function (evt) {
          evt.preventDefault();
          parent.addClass('drag-drop-active');
        });
        element.bind('dragleave', function (evt) {
          evt.preventDefault();
          parent.removeClass('drag-drop-active');
        });
        element.bind('dragover', function (evt) {
          evt.preventDefault();
          parent.addClass('drag-drop-active');
        });
        element.bind('drop', function (evt) {
          evt.preventDefault();
          evt.stopPropagation();
          Notification.display('Processing Image...', false);
          parent.removeClass('drag-drop-active');
          var e = evt.originalEvent;
          var file = e.dataTransfer.files[0];
          fileReader.readAsDataURL(file);
        });
        function mouseDown(e) {
          e.preventDefault();
          mousedown = true;
          mouseX = e.offsetX;
          mouseY = e.offsetY;
          corner = scene.inCorner(e.offsetX, e.offsetY);
          scene.canvas.style.cursor = 'move';
        }
        function mouseMove(e) {
          if (mousedown) {
            if (corner) {
              switch (corner) {
              case 'topLeft':
                scene.w = scene.w + (mouseX - e.offsetX) / scene.xProportion;
                scene.h = scene.h + (mouseY - e.offsetY) / scene.yProportion;
                scene.y = scene.y - (mouseY - e.offsetY) / scene.yProportion;
                scene.x = scene.x - (mouseX - e.offsetX) / scene.xProportion;
                break;
              case 'topRight':
                scene.w = scene.w - (mouseX - e.offsetX) / scene.xProportion;
                scene.h = scene.h + (mouseY - e.offsetY) / scene.yProportion;
                scene.y = scene.y - (mouseY - e.offsetY) / scene.yProportion;
                break;
              case 'bottomRight':
                scene.w = scene.w - (mouseX - e.offsetX) / scene.xProportion;
                scene.h = scene.h - (mouseY - e.offsetY) / scene.yProportion;
                break;
              case 'bottomLeft':
                scene.x = scene.x - (mouseX - e.offsetX) / scene.xProportion;
                scene.h = scene.h - (mouseY - e.offsetY) / scene.yProportion;
                scene.w = scene.w + (mouseX - e.offsetX) / scene.xProportion;
                break;
              }
            } else {
              var topLeft = scene.corners.topLeft, bottomRight = scene.corners.bottomRight;
              if (topLeft.y - (mouseY - e.offsetY) > 0 && bottomRight.y - (mouseY - e.offsetY) < scene.img.height * scene.yProportion) {
                scene.y = scene.y - (mouseY - e.offsetY) / scene.yProportion;
              } else {
                scene.y = topLeft.y - (mouseY - e.offsetY) <= 0 ? 0 : (scene.canvas.height - (bottomRight.y - topLeft.y)) / scene.yProportion;
              }
              if (topLeft.x - (mouseX - e.offsetX) > 0 && bottomRight.x - (mouseX - e.offsetX) < scene.img.width * scene.xProportion) {
                scene.x = scene.x - (mouseX - e.offsetX) / scene.xProportion;
              } else {
                scene.x = topLeft.x - (mouseX - e.offsetX) <= 0 ? 0 : (scene.canvas.width - (bottomRight.x - topLeft.x)) / scene.xProportion;
              }
            }
            mouseX = e.offsetX;
            mouseY = e.offsetY;
            scene.draw();
            scope.$apply();
          }
        }
        function mouseUp(e) {
          mousedown = false;
          corner = false;
        }
        function mouseLeave(e) {
          mousedown = false;
          corner = false;
        }
        scope.cropper = {
          cropping: false,
          image: {}
        };
        Object.defineProperties(scope.cropper, {
          scale: {
            get: function () {
              return scene ? scene.scale * 100 : 100;
            },
            set: function (scale) {
              if (scene) {
                scene.scale = scale;
              }
            }
          }
        });
        Object.defineProperties(scope.cropper.image, {
          width: {
            get: function () {
              return scene ? scene.w ? scene.w : 0 : 0;
            }
          },
          height: {
            get: function () {
              return scene ? scene.h ? scene.h : 0 : 0;
            }
          },
          scaled_height: {
            get: function () {
              return scene ? scene.h ? scene.h * scene.scale : 0 : 0;
            }
          },
          scaled_width: {
            get: function () {
              return scene ? scene.w ? scene.w * scene.scale : 0 : 0;
            }
          },
          loaded: {
            get: function () {
              return scene ? true : false;
            }
          }
        });
        scope.cropper.crop = function () {
          scope.cropper.cropping = true;
          scene.x = 10;
          scene.y = 10;
          scene.w = scene.w - 20;
          scene.h = scene.h - 20;
          scene.canvas.style.cursor = 'move';
          scene.draw();
          canvasElement.bind('mousedown', mouseDown);
          canvasElement.bind('mousemove', mouseMove);
          canvasElement.bind('mouseup', mouseUp);
          canvasElement.bind('mouseleave', mouseLeave);
        };
        scope.cropper.save = function () {
          scope.cropper.cropping = false;
          scene.canvas.style.cursor = 'move';
          scene.crop(canvasContainer.innerWidth(), canvasContainer.innerHeight());
          canvasElement.unbind('mousedown', mouseDown);
          canvasElement.unbind('mousemove', mouseMove);
          canvasElement.unbind('mouseup', mouseUp);
          canvasElement.unbind('mouseleave', mouseLeave);
        };
        scope.cropper.upload = function () {
        };
        scope.cropper.getImage = function () {
          return scene ? scene.getImageAsBlob() : null;
        };
        scope.cropper.getImageAsURL = function () {
          return scope.cropper.getImageURL();
        };
        scope.cropper.getImageURL = function () {
          return scene ? scene.getImageAsURL() : null;
        };
        scope.preview = function (url) {
          if (url) {
            window.open(url);
          }
        };
        scope.cropper.reset = function () {
          scene = undefined;
        };
        scope.save = function () {
          scope.onSave({ $image: scope.cropper.getImage() });
          scope.cropper.reset();
        };
      }
    };
  }
]);
angular.module('employeeApp.services').factory('indexOfId', [
  '$q',
  function ($q) {
    function filter() {
      this.worker = new Worker('scripts/workers/index-of-id.js');
    }
    filter.prototype._prepare_id = function (arg1) {
      if (typeof arg1 == 'object') {
      } else if (typeof arg1 == 'number') {
      }
    };
    filter.prototype.filter = function (arg1, haystack, callback) {
      var needle = this._prepare_id(arg1);
      this.worker.onmessage = function (e) {
        (callback || angular.noop)(e.data);
      };
    };
  }
]);
angular.module('employeeApp').controller('SupplyLumberViewCtrl', [
  '$scope',
  function ($scope) {
  }
]);
angular.module('employeeApp.services').factory('Contact', [
  'eaResource',
  function (eaResource) {
    return eaResource('contact/:id', { id: '@id' });
  }
]);
angular.module('employeeApp.services').factory('eaIndexedDB', [
  '$q',
  '$timeout',
  '$rootScope',
  function ($q, $timeout, $rootScope) {
    function getNamespaces() {
      return [
        'customer',
        'supplier',
        'supplier-contact',
        'permission',
        'acknowledgement',
        'acknowledgement-item',
        'contact',
        'shipping',
        'transaction',
        'fabric',
        'supply',
        'model',
        'product',
        'configuration',
        'upholstery',
        'group',
        'user',
        'delivery',
        'table',
        'project',
        'project-room',
        'project-item',
        'purchase-order',
        'test'
      ];
    }
    function saveNamespaces(namespaces) {
      window.localStorage.setItem('namespaces', JSON.stringify(namespaces));
    }
    function formatNamespace(str) {
      try {
        var strArray = str.split(/\//);
        var re = new RegExp(/^\:/);
        str = '';
        for (var key in strArray) {
          if (!re.test(strArray[key])) {
            if (str.length > 0) {
              str += '-';
            }
            str += strArray[key];
          }
        }
        return str;
      } catch (e) {
        throw new TypeError('Must be a string');
      }
    }
    var database = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    var version = getNamespaces().length;
    var request = database.open('app', version);
    var DBVehicle = { _readyFns: [] };
    Object.defineProperties(DBVehicle, {
      onready: {
        set: function (fn) {
          this._readyFns.push(fn);
        },
        get: function () {
          return function () {
            for (var key in this._readyFns) {
              this._readyFns[key]();
            }
          };
        }
      }
    });
    request.onupgradeneeded = function (event) {
      var namespaces = getNamespaces();
      DBVehicle.db = request.result;
      var db = DBVehicle.db;
      for (var key in namespaces) {
        if (!db.objectStoreNames.contains(namespaces[key])) {
          var objectStore = db.createObjectStore(namespaces[key], { keyPath: 'id' });
        }
      }
    };
    request.onsuccess = function (e) {
      DBVehicle.db = request.result;
      DBVehicle.onready();
    };
    request.onerror = function (e) {
      console.error(e);
    };
    function factory(namespace) {
      namespace = formatNamespace(namespace);
      var namespaces = JSON.parse(window.localStorage.getItem('namespaces')) || [];
      if (namespaces.indexOf(namespace) == -1) {
        namespaces.push(namespace);
      }
      window.localStorage.setItem('namespaces', JSON.stringify(namespaces));
      function Database(namespace) {
        this.namespace = namespace;
        this.indexedDB = database;
        this.DBVehicle = DBVehicle;
        Object.defineProperties(this, {
          db: {
            get: function () {
              return this.DBVehicle.db;
            }
          },
          ready: {
            get: function () {
              return this.DBVehicle.db ? true : false;
            }
          },
          onready: {
            set: function (fn) {
              this.DBVehicle.onready = fn;
            }
          }
        });
      }
      Database.prototype._cleanObj = function (obj) {
        var re = new RegExp(/^\$/);
        for (var key in obj) {
          if (re.test(key) || angular.isFunction(obj[key])) {
            delete obj[key];
          }
        }
        return obj;
      };
      Database.prototype._save = function (obj, success, error) {
        try {
          var cleanObj = this._cleanObj(obj);
          var request = this.db.transaction([this.namespace], 'readwrite').objectStore(this.namespace).put(cleanObj);
          request.onsuccess = function (evt) {
            (success || angular.noop)();
          };
          request.onerror = function (evt) {
            console.error(evt);
            (error || angular.noop)(evt);
          };
        } catch (e) {
          console.error(e);
          (error || angular.noop)(e);
        }
      };
      Database.prototype._get = function (param, success, error) {
        try {
          param = parseFloat(param);
          var store = this.db.transaction(this.namespace).objectStore(this.namespace).get(param).onsuccess = function (evt) {
              var response = evt.target.result || null;
              (success || angular.noop)(response);
            };
        } catch (e) {
          console.error(e.stack);
          (error || angular.noop)();
        }
      };
      Database.prototype._query = function (param, success, error) {
        var data = [];
        var objectStore = this.db.transaction([this.namespace], 'readonly').objectStore(this.namespace);
        var request = objectStore.openCursor();
        request.onsuccess = function (evt) {
          var cursor = evt.target.result;
          if (cursor) {
            data.push(cursor.value);
            cursor.continue();
          } else {
            (success || angular.noop)(data);
          }
        };
        request.onerror = function (evt) {
          console.error(evt);
          (error || angular.noop)();
        };
      };
      Database.prototype._remove = function (arg, success, error) {
        var request = this.db.transaction([this.namespace], 'readwrite').objectStore(this.namespace).delete(arg);
        request.onsuccess = function (evt) {
          (success || angular.noop)();
        };
        request.onerror = function (evt) {
          (error || angular.noop)();
        };
      };
      Database.prototype._clear = function (success, error) {
        try {
          var store = this.db.transaction(this.namespace, 'readwrite').objectStore(this.namespace);
          store.clear().onsuccess = function () {
            (success || angular.noop)();
          };
        } catch (e) {
          console.error(e.stack);
          (error || angular.noop)(e);
        }
      };
      Database.prototype.query = function (arg1, arg2, arg3) {
        var success, error, param;
        switch (arguments.length) {
        case 1:
          angular.isFunction(arg1) ? success = arg1 : param = arg1;
          break;
        case 2:
          if (angular.isFunction(arg1)) {
            success = arg1;
            error = arg2;
          } else {
            param = arg1;
            success = arg2;
          }
          break;
        case 3:
          if (angular.isFunction(arg1)) {
            success = arg1;
            error = arg2;
          } else {
            param = arg1;
            success = arg2;
            error = arg3;
          }
          break;
        default:
          throw new RangeError('Expects between 1-3 arguments');
        }
        try {
          this._query(param, success, error);
        } catch (e) {
        }
      };
      Database.prototype.get = function (param, success, error) {
        if (arguments.length < 1 && arguments.length > 3) {
          throw new RangeError('Expects between 1-3 argumeents');
        }
        try {
          this._get(param, success, error);
        } catch (e) {
          console.error(e);
        }
      };
      Database.prototype.save = function (obj, success, error) {
        try {
          if (angular.isArray(obj)) {
            for (var key in obj) {
              this._save(obj[key]);
            }
            (success || angular.noop)();
          } else {
            this._save(obj, success, error);
          }
        } catch (e) {
          console.error(e.stack);
        }
      };
      Database.prototype.remove = function (arg, success, error) {
        try {
          this._remove(arg, success, error);
        } catch (e) {
          console.error(e);
        }
      };
      Database.prototype.clear = function (success, error) {
        this._clear(success, error);
      };
      Database.prototype.destroy = function (success) {
        this.indexedDB.deleteDatabase('app').onsuccess = function () {
          (success || angular.noop)();
        };
      };
      return new Database(namespace);
    }
    return factory;
  }
]);
angular.module('employeeApp').controller('ProductInventoryCtrl', [
  '$scope',
  'AcknowledgementItem',
  function ($scope, AcknowledgementItem) {
    $scope.itemList = AcknowledgementItem.poll().query({ status: 'inventory' });
    $scope.showAddInventory = false;
    $scope.addInventory = function (product) {
      $scope.item = new AcknowledgementItem();
      angular.extend($scope.item, JSON.parse(JSON.stringify(product)));
      if (product.hasOwnProperty('id')) {
        $scope.item.product = { id: product.id };
      }
      delete $scope.item.id;
      $scope.item.status = 'INVENTORY';
      $scope.item.$save(function () {
        $scope.itemList.push(angular.copy($scope.item));
      });
    };
    $scope.$on('$destroy', function () {
      $scope.AcknowledgementItem.stopPolling();
    });
  }
]);
angular.module('employeeApp.services').factory('Geocoder', [
  '$q',
  '$rootScope',
  function ($q, $rootScope) {
    function prepareAddress(obj) {
      var addrStr = '';
      if (obj.hasOwnProperty('address') || obj.hasOwnProperty('address1')) {
        addrStr += obj.address || obj.address1;
      } else {
        throw new TypeError('Missing \'address\' or \'address1\' argument');
      }
      if (obj.hasOwnProperty('city')) {
        addrStr += ', ' + obj.city;
      } else {
        throw new TypeError('Missing \'city\' argument');
      }
      if (obj.hasOwnProperty('territory')) {
        addrStr += ', ' + obj.territory;
      } else {
        throw new TypeError('Missing \'territory\' argument');
      }
      if (obj.hasOwnProperty('country')) {
        addrStr += ', ' + obj.country;
      } else {
        throw new TypeError('Missing \'country\' argument');
      }
      if (obj.hasOwnProperty('zipcode')) {
        addrStr += ', ' + obj.zipcode;
      } else {
        throw new TypeError('Missing \'zipcode\' argument');
      }
      return addrStr;
    }
    function Geocoder() {
      this.google = google;
      this.geocoder = new google.maps.Geocoder();
    }
    Geocoder.prototype._getRegion = function (country) {
      switch (country.toLocaleLowerCase()) {
      case 'thailand':
        return 'TH';
      case 'usa':
        return 'US';
      case 'us':
        return 'US';
      case 'italy':
        return 'IT';
      case 'spain':
        return 'ES';
      case 'germany':
        return 'DE';
      case 'china':
        return 'CN';
      case 'india':
        return 'IN';
      case 'new zealand':
        return 'NZ';
      case 'australia':
        return 'AU';
      default:
        return false;
      }
    };
    Geocoder.prototype._lookup = function (addr, callback, errback) {
      var addrStr = prepareAddress(addr);
      this.geocoder.geocode({
        'address': addrStr,
        'region': this._getRegion(addr.country)
      }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          (callback || angular.noop)(results);
        } else {
          console.error(status);
          (errback || angular.noop)(status);
        }
      });
    };
    Geocoder.prototype.geocode = function (arg) {
      if (angular.isObject(arg)) {
        var deferred = $q.defer();
        this._lookup(arg, function (results) {
          $rootScope.safeApply(function () {
            deferred.resolve(results);
          });
        }, function (status) {
          $rootScope.safeApply(function () {
            deferred.reject(status);
          });
        });
        return deferred.promise;
      } else {
        throw new TypeError('Arguments must be in the form of an object.');
      }
    };
    return new Geocoder();
  }
]);
angular.module('employeeApp.services').factory('mapMarker', [function () {
    function MarkerFactory(configs) {
      function Marker(configs) {
        if (angular.isObject(configs)) {
          if (configs.map instanceof google.maps.Map) {
            this._map = configs.map;
          } else {
            throw new TypeError('Is not an instance of google.maps.Map');
          }
          if (!configs.position instanceof google.maps.LatLng) {
            throw new TypeError('Is not an instance of google.maps.LatLng');
          }
          this.prototype = new google.maps.Marker({
            position: configs.position,
            map: this._map,
            draggable: true,
            animation: google.maps.Animation.DROP
          });
          google.maps.event.addListener(this, 'dragend', function (e) {
            (this.onchange || angular.noop)({
              lat: this.lat,
              lng: this.lng
            });
          }.bind(this));
        }
      }
      Object.defineProperties(Marker.prototype, {
        lat: {
          get: function () {
            return this.getPosition().lat() || null;
          }
        },
        lng: {
          get: function () {
            return this.getPosition().lng() || null;
          }
        }
      });
      Marker.prototype.setPosition = function (latLng) {
        if (latLng instanceof google.maps.LatLng) {
          this.setPosition(latLng);
        }
      };
      Marker.prototype.hide = function () {
        this.setMap(null);
      };
      Marker.prototype.show = function () {
        this.setMap(this._map);
      };
      Marker.prototype.focus = function () {
        this.setCenter(this._marker.getPosition());
      };
      return new Marker(configs);
    }
    return MarkerFactory;
  }]);
angular.module('employeeApp').controller('OrderShippingDeliveryCtrl', [
  '$scope',
  'Delivery',
  function ($scope, Delivery) {
    $scope.deliveryList = Delivery.query();
  }
]);
angular.module('employeeApp').factory('Delivery', [
  'eaResource',
  function (eaResource) {
    return eaResource('delivery/:id', { id: '@id' });
  }
]);
angular.module('employeeApp').controller('ProductTableViewCtrl', [
  '$scope',
  'Table',
  'Notification',
  function ($scope, Table, Notification) {
    var fetching = true;
    Notification.display('Loading Tables...');
    $scope.tableList = Table.query(function () {
      fetching = false;
      Notification.hide();
    });
    $scope.$watch('query', function (q) {
      if (q) {
        Table.query({
          q: q,
          limit: 5
        }, function (resources) {
          for (var i = 0; i < resources.length; i++) {
            if ($scope.tableList.indexOfById(resources[i]) == -1) {
              $scope.tableList.push(resources[i]);
            }
          }
        });
      }
    });
    $scope.loadNext = function () {
      if (!fetching) {
        Table.query({
          offset: $scope.tableList.length,
          limit: 50
        }, function (resources) {
          for (var i = 0; i < resources.length; i++) {
            $scope.tableList.push(resources[i]);
          }
        });
      }
    };
  }
]);
angular.module('employeeApp.services').factory('Table', [
  '$resource',
  function ($resource) {
    return $resource('api/v1/table/:id', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  }
]);
angular.module('employeeApp').controller('ProductRugViewCtrl', [
  '$scope',
  function ($scope) {
  }
]);
angular.module('employeeApp').controller('ProductRugAddCtrl', [
  '$scope',
  function ($scope) {
  }
]);
angular.module('employeeApp').directive('background', [function () {
    return {
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        if (attrs.backgroundImages) {
        } else {
          throw new TypeError('Missing Images for Background Directive.');
        }
      }
    };
  }]);
angular.module('employeeApp').controller('ProductTableDetailsCtrl', [
  '$scope',
  'Table',
  '$routeParams',
  'Notification',
  '$location',
  function ($scope, Table, $routeParams, Notification, $location) {
    $scope.table = Table.get({ 'id': $routeParams.id });
    $scope.upload = function () {
      Notification.display('Uploading Image...', false);
      var fd = new FormData();
      fd.append('image', $scope.images[0]);
      jQuery.ajax('upholstery/image', {
        type: 'POST',
        data: fd,
        cache: false,
        processData: false,
        contentType: false,
        success: function (responseData) {
          Notification.display('Image Updated');
          $scope.table.image = {};
          angular.copy(responseData, $scope.uphol.image);
          $scope.table.$save();
          $scope.imagePreviews = null;
          $scope.images = null;
          $scope.$apply();
        }
      });
    };
    $scope.update = function () {
      Notification.display('Saving Table...', false);
      $scope.table.$update(function () {
        Notification.display('Table Saved');
      });
    };
    $scope.remove = function () {
      Notification.display('Deleteing Table Product');
      $scope.table.$delete(function () {
        Notification.display('Table Product Deleted');
        $location.path('/product/table');
      });
    };
    $scope.$on('$destroy', function () {
      $scope.update();
    });
  }
]);
angular.module('employeeApp').controller('ProductTableAddCtrl', [
  '$scope',
  'Table',
  'Configuration',
  'Model',
  'Notification',
  '$location',
  function ($scope, Table, Configuration, Model, Notification, $location) {
    $scope.configurationList = Configuration.query({ limit: 0 });
    $scope.modelList = Model.query({ limit: 0 });
    $scope.table = new Table();
    $scope.modelText = 'Choose a Model';
    $scope.configurationText = 'Choose a Configuration';
    $scope.widthText = 'Enter a Width in millimeters';
    $scope.depthText = 'Enter a Depth in millimeters';
    $scope.upload = function () {
      Notification.display('Uploading Image...', false);
      var fd = new FormData();
      fd.append('image', $scope.images[0]);
      $scope.addLength = null;
      $scope.addRemark = null;
      jQuery.ajax('upholstery/image', {
        type: 'POST',
        data: fd,
        processData: false,
        contentType: false,
        success: function (responseData) {
          Notification.display('Image Uploaded');
          $scope.table.image = $scope.table.image || {};
          angular.copy(responseData, $scope.table.image);
          $scope.$apply();
        }
      });
    };
    $scope.save = function () {
      Notification.display('Saving Table Product...');
      $scope.table.$create(function () {
        Notification.display('Table Product Saved');
        $location.path('/product/table');
      });
    };
  }
]);
angular.module('employeeApp').controller('ProjectViewCtrl', [
  '$scope',
  'Project',
  'Notification',
  'Customer',
  '$location',
  function ($scope, Project, Notification, Customer, $location) {
    $scope.showAddProject = false;
    $scope.projectList = Project.query();
    $scope.customerList = Customer.query();
    $scope.gridOptions = {
      data: 'projectList',
      columnDefs: [
        {
          field: 'description',
          displayName: 'Description'
        },
        {
          field: 'customer.name',
          displayName: 'customer'
        },
        {
          field: 'type',
          displayName: 'Type'
        },
        {
          field: 'status',
          displayName: 'Status'
        },
        {
          field: 'delivery_date',
          displayName: 'Delivery Date',
          filter: 'date:"MMMM d, yyyy"'
        }
      ]
    };
    $scope.create = function () {
      Notification.display('Creating new project...', false);
      var project = new Project();
      angular.extend(project, $scope.project);
      project.$save(function (response) {
        Notification.display('New project created.');
        $scope.projectList.push(response);
        $scope.project = {};
        $scope.showAddProject = false;
      });
    };
  }
]);
angular.module('employeeApp').controller('ProjectDetailsCtrl', [
  '$scope',
  'Project',
  '$routeParams',
  'Room',
  'Notification',
  'FileUploader',
  function ($scope, Project, $routeParams, Room, Notification, FileUploader) {
    $scope.showAddRoom = false;
    $scope.flag = false;
    $scope.project = Project.get({ id: $routeParams.id });
    $scope.room = {};
    $scope.addImage = function (image) {
      var promise = FileUploader.upload(image, 'project/room/image');
      promise.then(function (response) {
        $scope.room.image = response;
        $scope.cropper.reset();
      });
    };
    $scope.addSchematic = function (files) {
      var file = angular.isArray(files) ? files[0] : files;
      var promise = FileUploader.upload(file, 'project/room/schematic');
      promise.then(function (response) {
        $scope.room.schematic = response;
      });
    };
    $scope.addRoom = function () {
      Notification.display('Adding ' + $scope.room.type, false);
      var room = new Room();
      angular.extend(room, $scope.room);
      room.project = { id: $scope.project.id };
      room.$save(function (response) {
        Notification.display($scope.room.description + ' added.');
        $scope.showAddRoom = false;
        $scope.project.rooms.push(room);
      }, function (e) {
        $scope.flag = true;
      });
    };
  }
]);
angular.module('employeeApp.services').factory('Project', [
  'eaResource',
  function (eaResource) {
    return eaResource('project/:id', { id: '@id' });
  }
]);
angular.module('employeeApp.services').factory('Room', [
  'eaResource',
  function (eaResource) {
    return eaResource('project/room/:id', { id: '@id' });
  }
]);
angular.module('employeeApp.directives').directive('checkmark', [function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        if (!attrs.checkmark) {
          throw new TypeError('Missing expression to evaluate.');
        }
        var check = angular.element('<span class="checkmark">\u2713</span>');
        scope.$watch(attrs.checkmark, function (val) {
          if (val) {
            element.append(check);
          } else {
            check.remove();
          }
        });
      }
    };
  }]);
angular.module('employeeApp.directives').directive('x', [function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        if (!attrs.x) {
          throw new TypeError('Missing expression to evaluate.');
        }
        var x = angular.element('<span class="x-mark">\ud800\udd02</span>');
        scope.$watch(attrs.x, function (val) {
          if (val) {
            element.append(x);
          } else {
            x.remove();
          }
        });
      }
    };
  }]);
angular.module('employeeApp').controller('HrEmployeeViewCtrl', [
  '$scope',
  'User',
  function ($scope, User) {
    $scope.employeeList = User.query();
  }
]);
angular.module('employeeApp').factory('ProjectItem', [
  'eaResource',
  function (eaResource) {
    return eaResource('project/item/:id', { id: '@id' });
  }
]);
angular.module('employeeApp').directive('productSelector', [
  'Upholstery',
  'Fabric',
  'Table',
  '$rootScope',
  'Notification',
  'FileUploader',
  function (Upholstery, Fabric, Table, $rootScope, Notification, FileUploader) {
    return {
      templateUrl: 'views/templates/product-selector.html',
      replace: true,
      restrict: 'A',
      scope: {
        visible: '=productSelector',
        url: '@productSelectorUploadUrl',
        add: '&productSelectorAdd'
      },
      link: function postLink(scope, element, attrs) {
        scope.$watch('visible', function (val) {
          if (val) {
            scope.modal.onhide = function () {
              if ($rootScope.$$phase == '$digest' || $rootScope.$$phase == '$apply') {
                scope.visible = false;
              } else {
                $rootScope.$apply(function () {
                  scope.visible = false;
                });
              }
            };
            scope.modal.show();
          } else {
            scope.modal.hide();
          }
        });
        scope.fabricList = Fabric.query();
        scope.tableList = Table.query();
        scope.product = {};
        function uploadImage(image, callback) {
          Notification.display('Uploading Image', false);
          var fd = new FormData();
          fd.append('image', image);
          jQuery.ajax(scope.url || 'upload/images', {
            type: 'POST',
            data: fd,
            processData: false,
            contentType: false,
            success: function (response) {
              Notification.display('Image Uploaded');
              (callback || angular.noop)(response);
            }
          });
        }
        function add() {
          var newProduct = angular.copy(scope.product);
          scope.add({ product: newProduct });
        }
        scope.addImage = function (data) {
          scope.product.image = data;
        };
        scope.addUpholstery = function (upholstery) {
          if (upholstery) {
            scope.product = upholstery;
            scope.selection = 'quantity';
          } else {
            throw new TypeError('Expecting an Upholstery.');
          }
        };
        scope.addTable = function (table) {
          if (table) {
            scope.product = table;
            scope.selection = 'quantity';
          } else {
            throw new TypeError('Expecting a Table.');
          }
        };
        scope.addCustomItem = function (item, image) {
          if (item) {
            angular.extend(scope.product, item);
            scope.product.is_custom = true;
            scope.product.type = 'custom';
            scope.selection = 'quantity';
          } else {
            throw new TypeError('Expecting a Custom Item and Image.');
          }
        };
        scope.setQuantity = function (quantity) {
          scope.product.quantity = quantity;
          if (scope.product.type.toLowerCase() == 'upholstery') {
            scope.selection = 'fabric';
          } else {
            scope.visible = false;
            scope.modal.hide(function () {
              scope.reset();
            });
            var newProduct = angular.copy(scope.product);
            scope.add({ product: newProduct });
          }
        };
        scope.setFabric = function () {
          scope.visible = false;
          scope.modal.hide(function () {
            scope.reset();
          });
          var newProduct = angular.copy(scope.product);
          scope.add({ product: newProduct });
        };
        scope.reset = function () {
          scope.product = {};
          scope.selection = 'upholstery';
        };
      }
    };
  }
]);
angular.module('employeeApp').directive('fileHandler', [
  '$rootScope',
  function ($rootScope) {
    return {
      template: '<div class="file-handler">                        <div class="file-handler-message" ng-hide="files.length>0">                            <h3>Drop File Here</h3>                        </div>                        <div class="file-handler-list">                            <ul>                                <li ng-repeat="file in files">{{file.name}}</li>                            </ul>                        </div>                   </div>',
      restrict: 'A',
      scope: { files: '=fileHandler' },
      replace: true,
      link: function postLink(scope, element, attrs) {
        var reader = new FileReader();
        element.bind('dragenter', function (evt) {
          evt.preventDefault();
          element.addClass('drag-drop-active');
          element.addClass('drag-over');
        });
        element.bind('dragleave', function (evt) {
          evt.preventDefault();
          element.removeClass('drag-drop-active');
          element.removeClass('drag-over');
        });
        element.bind('dragover', function (evt) {
          evt.preventDefault();
          element.addClass('drag-drop-active');
          element.addClass('drag-over');
        });
        element.bind('drop', function (evt) {
          evt.preventDefault();
          evt.stopPropagation();
          element.removeClass('drag-drop-active');
          element.removeClass('drag-over');
          var e = evt.originalEvent;
          var files = e.dataTransfer.files;
          scope.files = files;
        });
      }
    };
  }
]);
angular.module('employeeApp').controller('ProjectRoomDetailsCtrl', [
  '$scope',
  'Room',
  '$routeParams',
  'ProjectItem',
  'Notification',
  function ($scope, Room, $routeParams, ProjectItem, Notification) {
    $scope.room = Room.get({ id: $routeParams.id });
    $scope.gridOptions = {
      data: 'room.items',
      columnDefs: [
        {
          field: 'description',
          displayName: 'Description'
        },
        {
          field: 'status',
          displayName: 'Status'
        },
        {
          field: 'delivery_date',
          displayName: 'Delivery Date',
          filter: 'date:"MMMM d, yyyy"'
        },
        {
          field: 'schematic',
          displayName: 'Schematic',
          cellTemplate: '<div file-handler><div>'
        }
      ]
    };
    $scope.addProduct = function (product) {
      Notification.display('Adding ' + product.description + ' to ' + $scope.room.description, false);
      var item = new ProjectItem();
      item.product = product;
      item.type = 'product';
      item.room = { id: $scope.room.id };
      item.reference = $scope.room.reference + ($scope.room.items.length + 1);
      item.$save(function () {
        Notification.display(item.description + ' added to ' + $scope.room.description);
        $scope.room.items.push(item);
      });
    };
  }
]);
angular.module('employeeApp').factory('s3', [function () {
    var meaningOfLife = 42;
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  }]);
angular.module('employeeApp').factory('FileUploader', [
  '$q',
  'Notification',
  function ($q, Notification) {
    var uploader = {};
    uploader.upload = function (file, url, data) {
      if (!file.isPrototypeOf) {
        throw new TypeError('Expectina a file');
      }
      var type = file.isPrototypeOf(Image) ? 'Image' : 'File';
      Notification.display('Uploading ' + type + '...', false);
      var fd = new FormData();
      fd.append(type.toLowerCase(), file);
      for (var i in data) {
        fd.append(i, data[i]);
      }
      var deferred = $q.defer();
      jQuery.ajax(url || 'upload/images', {
        type: 'POST',
        data: fd,
        processData: false,
        contentType: false,
        success: function (response) {
          Notification.display(type + ' Uploaded');
          deferred.resolve(response);
        },
        error: function (response) {
          deferred.reject(response);
        }
      });
      return deferred.promise;
    };
    return uploader;
  }
]);
angular.module('employeeApp').filter('available', [function () {
    return function (input) {
      return 'available filter: ' + input;
    };
  }]);
angular.module('employeeApp').controller('SupplyViewCtrl', [
  '$scope',
  'Supply',
  'Notification',
  '$filter',
  'Supplier',
  function ($scope, Supply, Notification, $filter, Supplier) {
    var fetching = true;
    Notification.display('Loading supplies...', false);
    $scope.supplies = Supply.query(function () {
      fetching = false;
      Notification.hide();
    });
    $scope.$watch('query', function (q) {
      if (q) {
        Supply.query({
          limit: 10,
          q: q
        }, function (resources) {
          for (var i = 0; i < resources.length; i++) {
            if ($scope.supplies.indexOfById(resources[i].id) == -1) {
              $scope.supplies.push(resources[i]);
            }
          }
        });
      }
    });
    $scope.loadNext = function () {
      if (!fetching) {
        Supply.query({
          offset: $scope.supplies.length,
          limit: 50
        }, function (resources) {
          for (var i = 0; i < resources.length; i++) {
            $scope.supplies.push(resources[i]);
          }
        });
      }
    };
  }
]);
angular.module('employeeApp').controller('OrderPurchaseOrderViewCtrl', [
  '$scope',
  'PurchaseOrder',
  '$filter',
  'Notification',
  function ($scope, PurchaseOrder, $filter, Notification) {
    var fetching = true;
    Notification.display('Loading purchase orders...', false);
    $scope.poList = PurchaseOrder.query(function () {
      fetching = false;
      Notification.hide();
    }, function () {
      fetching = false;
    });
    $scope.$watch('query', function (q) {
      if (q) {
        PurchaseOrder.query({
          limit: 5,
          q: q
        }, function (resources) {
          for (var i = 0; i < resources.length; i++) {
            if ($scope.poList.indexOfById(resources[i].id) == -1) {
              $scope.poList.push(resources[i]);
            }
          }
        });
      }
    });
    $scope.loadNext = function () {
      if (!fetching) {
        fetching = true;
        PurchaseOrder.query({
          limit: 20,
          offset: $scope.poList.length
        }, function (resources) {
          fetching = false;
          for (var i = 0; i < resources.length; i++) {
            $scope.poList.push(resources[i]);
          }
        });
      }
    };
  }
]);
angular.module('employeeApp').factory('PurchaseOrder', [
  '$resource',
  function ($resource) {
    return $resource('/api/v1/purchase-order/:id', { id: '@id' }, {
      create: { method: 'POST' },
      update: { method: 'PUT' }
    });
  }
]);
angular.module('employeeApp').controller('OrderPurchaseOrderCreateCtrl', [
  '$scope',
  'PurchaseOrder',
  'Supplier',
  'Supply',
  'Notification',
  '$filter',
  function ($scope, PurchaseOrder, Supplier, Supply, Notification, $filter) {
    $scope.showSuppliers = false;
    $scope.showSupplies = false;
    $scope.suppliers = Supplier.query({ limit: 0 });
    $scope.po = new PurchaseOrder();
    $scope.po.items = [];
    $scope.addSupplier = function (supplier) {
      $scope.showSuppliers = false;
      $scope.po.supplier = supplier;
      $scope.supplies = $filter('filter')(Supply.query({ supplier_id: supplier.id }, function (response) {
        $scope.supplies = $filter('filter')(response, supplier.name);
      }), supplier.name);
    };
    $scope.addItem = function (item) {
      $scope.showSupplies = false;
      var purchasedItem = angular.copy(item);
      delete purchasedItem.quantity;
      $scope.po.items.push(purchasedItem);
    };
    $scope.removeItem = function (index) {
      $scope.po.items.splice(index, 1);
    };
    $scope.subtotal = function () {
      var subtotal = 0;
      for (var i = 0; i < $scope.po.items.length; i++) {
        subtotal += Number($scope.po.items[i].cost) * Number($scope.po.items[i].quantity || 1);
      }
      return subtotal.toFixed(2);
    };
    $scope.total = function () {
      var subtotal = Number($scope.subtotal());
      var vat = subtotal * (Number($scope.po.vat || 0) / 100);
      return vat + subtotal;
    };
    $scope.verifyOrder = function () {
      if (!$scope.po.hasOwnProperty('supplier')) {
        return false;
      }
      if ($scope.po.items.length <= 0) {
        return false;
      }
      return true;
    };
    $scope.save = function () {
      if ($scope.verifyOrder()) {
        Notification.display('Creating purchase order...', false);
        $scope.po.$save(function (response) {
          try {
            window.open(response.pdf.url);
          } catch (e) {
            console.warn(e);
          }
          Notification.display('Purchase order created.');
        }, function () {
          Notification.display('ooops');
        });
      }
    };
    $scope.reset = function () {
      $scope.po = new PurchaseOrder();
      $scope.po.items = [];
    };
  }
]);
angular.module('employeeApp.directives').directive('addSupply', [
  '$rootScope',
  'Supplier',
  'Supply',
  'Notification',
  function ($rootScope, Supplier, Supply, Notification) {
    return {
      templateUrl: 'views/templates/add-supply.html',
      replace: true,
      restrict: 'EA',
      scope: { 'visible': '=addSupply' },
      link: function postLink(scope, element, attrs) {
        scope.$watch('visible', function (val) {
          if (val) {
            scope.modal.onhide = function () {
              if ($rootScope.$$phase == '$digest' || $rootScope.$$phase === '$apply') {
                scope.visible = false;
              } else {
                $rootScope.$apply(function () {
                  scope.visible = false;
                });
              }
            };
            try {
              scope.modal.show();
            } catch (e) {
            }
          } else {
            try {
              scope.modal.hide();
            } catch (e) {
            }
          }
        });
        scope.showWidth = function () {
          var units = scope.supply.units;
          var type = scope.supply.type;
          return units === 'm' || units === 'pc' || units === 'pack' || units === 'yd' || units === 'kg' && type === 'packaging' ? true : false;
        };
        scope.showDepth = function () {
          var units = scope.supply.units;
          return units === 'pc' || units === 'pack' ? true : false;
        };
        scope.showHeight = function () {
          var units = scope.supply.units;
          var type = scope.supply.type;
          return units === 'pc' || units === 'pack' || units === 'kg' && type === 'packaging' ? true : false;
        };
        scope.supply = new Supply();
        scope.supply.units = 'piece';
        scope.suppliers = Supplier.query({ limit: 0 });
        scope.add = function () {
          if (scope.form.$valid) {
            Notification.display('Add supply...', false);
            scope.supply.$create(function (response) {
              Notification.display(scope.supply.description + ' added');
              scope.visible = false;
              scope.supply = new Supply();
            }, function (reason) {
              console.error(reason);
            });
          } else {
            Notification.display('Please fill out the form properly');
          }
        };
        scope.addImage = function (data) {
          scope.supply.image = data;
        };
      }
    };
  }
]);
angular.module('employeeApp.directives').directive('addSupplier', [
  '$rootScope',
  'Supplier',
  'Notification',
  function ($rootScope, Supplier, Notification) {
    return {
      templateUrl: 'views/templates/add-supplier.html',
      replace: true,
      restrict: 'EA',
      scope: { 'visible': '=addSupplier' },
      link: function postLink(scope, element, attrs) {
        scope.$watch('visible', function (val) {
          if (val) {
            scope.modal.onhide = function () {
              if ($rootScope.$$phase == '$digest' || $rootScope.$$phase == '$apply') {
                scope.visible = false;
              } else {
                $rootScope.$apply(function () {
                  scope.visible = false;
                });
              }
            };
            scope.modal.show();
          } else {
            scope.modal.hide();
          }
        });
        scope.supplier = new Supplier();
        scope.add = function () {
          if (scope.form.$valid) {
            Notification.display('Adding supplier...', false);
            scope.supplier.$save(function (response) {
              Notification.display(scope.supplier.name + ' added');
              scope.visible = false;
              scope.supplier = new Supplier();
            }, function (reason) {
              console.error(reason);
            });
          } else {
            Notification.display('Please fill out the form properly');
          }
        };
      }
    };
  }
]);
angular.module('employeeApp').factory('inventory', [function () {
    var meaningOfLife = 42;
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  }]);
angular.module('employeeApp').directive('onScrollEnd', [function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.bind('scroll', function (e) {
          var childHeight = $(element.children()[0]).height();
          var elHeight = element.height();
          if (childHeight >= elHeight) {
            if (element.scrollTop() + elHeight >= childHeight - 10) {
              try {
                scope.$eval(attrs.onScrollEnd);
              } catch (err) {
                console.error('Missing a function for \'on-scroll-end\'');
              }
            }
          }
        });
      }
    };
  }]);
angular.module('employeeApp').directive('customerList', [
  'Customer',
  'Notification',
  '$parse',
  function (Customer, Notification, $parse) {
    return {
      templateUrl: 'views/templates/customer-list.html',
      replace: true,
      restrict: 'A',
      scope: {
        visible: '=customerList',
        onSelect: '&'
      },
      link: function postLink(scope, element, attrs) {
        var fetching = true;
        scope.$watch('visible', function (val) {
          if (val) {
            scope.modal.onhide = function () {
              if ($rootScope.$$phase === '$digest' || $rootScope.$$phase === '$apply') {
                scope.visible = false;
              } else {
                $rootScope.$apply(function () {
                  scope.visible = false;
                });
              }
            };
            try {
              scope.modal.show();
            } catch (e) {
            }
          } else {
            try {
              scope.modal.hide();
            } catch (e) {
            }
          }
        });
        scope.customers = Customer.query({ limit: 20 }, function (response) {
          fetching = false;
        });
        scope.$watch('query', function (q) {
          if (q) {
            Customer.query({
              q: q,
              limit: 5
            }, function (resources) {
              for (var i = 0; i < resources.length; i++) {
                if (scope.customers.indexOfById(resources[i].id) == -1) {
                  scope.customers.push(resources[i]);
                }
              }
            });
          }
        });
        scope.loadNext = function () {
          if (!fetching) {
            Notification.display('Loading more customers...', false);
            fetching = true;
            Customer.query({
              offset: scope.customers.length,
              limit: 50
            }, function (resources) {
              fetching = false;
              Notification.hide();
              for (var i = 0; i < resources.length; i++) {
                scope.customers.push(resources[i]);
              }
            });
          }
        };
        scope.select = function (customer) {
          scope.onSelect({ 'customer': customer });
        };
      }
    };
  }
]);
angular.module('employeeApp').directive('upholsteryList', [
  'Upholstery',
  'Notification',
  function (Upholstery, Notification) {
    return {
      templateUrl: 'views/templates/upholstery-list.html',
      replace: true,
      restrict: 'A',
      scope: { onSelect: '&' },
      link: function postLink(scope, element, attrs) {
        var fetching = true;
        scope.upholsteries = Upholstery.query({ limit: 20 }, function (response) {
          fetching = false;
        });
        scope.$watch('query', function (q) {
          if (q) {
            Upholstery.query({
              q: q,
              limit: 10
            }, function (resources) {
              for (var i = 0; i < resources.length; i++) {
                if (scope.upholsteries.indexOfById(resources[i].id) == -1) {
                  scope.upholsteries.push(resources[i]);
                }
              }
            });
          }
        });
        scope.loadNext = function () {
          if (!fetching) {
            Notification.display('Loading more upholsteries...', false);
            fetching = true;
            Upholstery.query({
              offset: scope.upholsteries.length,
              limit: 50
            }, function (resources) {
              fetching = false;
              Notification.hide();
              for (var i = 0; i < resources.length; i++) {
                scope.upholsteries.push(resources[i]);
              }
            });
          }
        };
        scope.select = function (upholstery) {
          scope.onSelect({ $upholstery: upholstery });
        };
      }
    };
  }
]);
angular.module('employeeApp').directive('tableList', [
  'Table',
  'Notification',
  function (Table, Notification) {
    return {
      templateUrl: 'views/templates/table-list.html',
      replace: true,
      restrict: 'A',
      scope: { onSelect: '&' },
      link: function postLink(scope, element, attrs) {
        var fetching = true;
        scope.tables = Table.query({ limit: 20 }, function (response) {
          fetching = false;
        });
        scope.$watch('query', function (q) {
          if (q) {
            Table.query({
              q: q,
              limit: 10
            }, function (resources) {
              for (var i = 0; i < resources.length; i++) {
                if (scope.tables.indexOfById(resources[i].id) == -1) {
                  scope.tables.push(resources[i]);
                }
              }
            });
          }
        });
        scope.loadNext = function () {
          if (!fetching) {
            Notification.display('Loading more upholsteries...', false);
            fetching = true;
            Table.query({
              offset: scope.tables.length,
              limit: 50
            }, function (resources) {
              fetching = false;
              Notification.hide();
              for (var i = 0; i < resources.length; i++) {
                scope.tables.push(resources[i]);
              }
            });
          }
        };
        scope.select = function (table) {
          scope.onSelect({ $table: table });
        };
      }
    };
  }
]);
angular.module('employeeApp').directive('fabricSelector', [
  'Fabric',
  'Notification',
  '$parse',
  function (Fabric, Notification, $parse) {
    return {
      templateUrl: 'views/templates/fabric-selector.html',
      replace: true,
      restrict: 'A',
      scope: {
        product: '=',
        onComplete: '&'
      },
      link: function postLink(scope, element, attrs) {
        var fetching = true;
        scope.fabrics = Fabric.query(function (response) {
          fetching = false;
        });
        scope.$watch('query', function (q) {
          if (q) {
            Fabric.query({
              q: q,
              limit: 5
            }, function (resources) {
              for (var i = 0; i < resources.length; i++) {
                if (scope.fabrics.indexOfById(resources[i].id) == -1) {
                  scope.fabrics.push(resources[i]);
                }
              }
            });
          }
        });
        scope.loadNext = function () {
          if (!fetching) {
            Notification.display('Loading more fabrics...', false);
            fetching = true;
            Fabric.query({
              offset: scope.fabrics.length,
              limit: 50
            }, function (resources) {
              fetching = false;
              Notification.hide();
              for (var i = 0; i < resources.length; i++) {
                scope.fabrics.push(resources[i]);
              }
            });
          }
        };
        scope.done = function (customer) {
          scope.onComplete();
        };
      }
    };
  }
]);
angular.module('employeeApp').controller('OrderPurchaseOrderDetailsCtrl', [
  '$scope',
  '$routeParams',
  'PurchaseOrder',
  'Notification',
  '$location',
  function ($scope, $routeParams, PurchaseOrder, Notification, $location) {
    Notification.display('Loading purchase order ' + $routeParams.id + '...', false);
    $scope.po = PurchaseOrder.get({
      id: $routeParams.id,
      pdf: true
    }, function () {
      Notification.hide();
    });
    $scope.viewPDF = function () {
      window.open($scope.po.pdf.url);
    };
    $scope.order = function () {
      Notification.display('Updating purchase order...', false);
      $scope.showCal = false;
      $scope.po.status = 'Ordered';
      for (var i = 0; i < $scope.po.items.length; i++) {
        $scope.po.items[i].status = 'Ordered';
      }
      $scope.po.$update(function () {
        Notification.display('Purchase order updated.');
      });
    };
    $scope.receive = function () {
      if ($scope.po.receive_date) {
        Notification.display('Updating purchase order...', false);
        $scope.showCal = false;
        $scope.po.status = 'Received';
        for (var i = 0; i < $scope.po.items.length; i++) {
          $scope.po.items[i].status = 'Received';
        }
        $scope.po.$update(function () {
          Notification.display('Purchase order updated.');
        });
      } else {
        $scope.showCal = true;
      }
    };
    $scope.pay = function () {
      Notification.display('Updating purchase order...', false);
      $scope.po.status = 'Paid';
      for (var i = 0; i < $scope.po.items.length; i++) {
        $scope.po.items[i].status = 'Paid';
      }
      $scope.po.$update(function () {
        Notification.display('Purchase order updated.');
      });
    };
    $scope.cancel = function () {
      Notification.display('Cancelling purchase order...', false);
      $scope.po.status = 'Cancelled';
      for (var i = 0; i < $scope.po.items.length; i++) {
        $scope.po.items[i].status = 'Cancelled';
      }
      $scope.po.$update(function () {
        Notification.display('Purchase order ' + $scope.po.id + ' cancelled.');
        $location.path('order/purchase_order');
      });
    };
  }
]);
angular.module('employeeApp').controller('SupplyDetailsCtrl', [
  '$scope',
  '$routeParams',
  'Notification',
  'Supply',
  function ($scope, $routeParams, Notification, Supply) {
    Notification.display('Retrieving supply...', false);
    $scope.showQuantity = false;
    $scope.supply = Supply.get({ 'id': $routeParams.id }, function () {
      Notification.hide();
    });
    var validWidth = [
        'm',
        'yd',
        'pc',
        'pack',
        'container',
        'fabric'
      ];
    var validDepth = [
        'pc',
        'pack',
        'container'
      ];
    var validHeight = [
        'pack',
        'pc'
      ];
    $scope.showWidth = function () {
      return validWidth.indexOf($scope.supply.units) > -1 || validWidth.indexOf($scope.supply.type) > -1 || $scope.supply.units == 'kg' && $scope.supply.type == 'packaging' ? true : false;
    };
    $scope.showDepth = function () {
      return validDepth.indexOf($scope.supply.units) > -1 ? true : false;
    };
    $scope.showHeight = function () {
      return validHeight.indexOf($scope.supply.units) > -1 || $scope.supply.units == 'kg' && $scope.supply.type == 'packaging' ? true : false;
    };
    $scope.update = function () {
      Notification.display('Updating ' + $scope.supply.description + '...', false);
      $scope.supply.$update(function () {
        Notification.display($scope.supply.description + ' updated.');
      });
    };
    $scope.add = function (quantity) {
      $scope.showQuantity = false;
      if (!quantity) {
        quantity = $scope.quantity;
      }
      $scope.supply.$add({ quantity: quantity }, function () {
      });
    };
    $scope.subtract = function (quantity) {
      $scope.showQuantity = false;
      if (!quantity) {
        quantity = $scope.quantity;
      }
      $scope.supply.$subtract({ quantity: quantity }, function () {
      });
    };
    $scope.changeQuantity = function (action, quantity) {
      if (!quantity) {
        throw ValueError('Expecting a quantity');
      }
      $scope[action]();
    };
    $scope.$on('$destroy', function () {
      $scope.update();
    });
  }
]);
angular.module('employeeApp').directive('imageUploader', [
  'Notification',
  'FileUploader',
  function (Notification, FileUploader) {
    return {
      templateUrl: 'views/templates/image-uploader.html',
      restrict: 'EA',
      replace: true,
      scope: {
        url: '@url',
        onUpload: '&'
      },
      link: function postLink(scope, element, attrs) {
        scope.selection = 'addImage';
        scope.showUploadButton = false;
        scope.buttonOn = function () {
          scope.showUploadButton = true;
        };
        scope.buttonOff = function () {
          scope.showUploadButton = false;
        };
        scope.upload = function ($image) {
          var promise = FileUploader.upload($image, scope.url);
          promise.then(function (data) {
            scope.onUpload({ data: data });
          });
        };
      }
    };
  }
]);
angular.module('employeeApp.directives').directive('addCustomer', [
  'Customer',
  'Notification',
  'Geocoder',
  function (Customer, Notification, Geocoder) {
    return {
      templateUrl: 'views/templates/add-customer.html',
      replace: true,
      restrict: 'A',
      scope: { visible: '=addCustomer' },
      link: function postLink(scope, element, attrs) {
        scope.$watch('visible', function (val) {
          if (val) {
            scope.modal.onhide = function () {
              if (scope.$$phase == '$digest' || scope.$$phase == '$apply') {
                scope.visible = false;
              } else {
                scope.$apply(function () {
                  scope.visible = false;
                });
              }
            };
            scope.modal.show();
          } else {
            scope.modal.hide();
          }
        });
        scope.customer = new Customer();
        scope.getLocation = function () {
          if (scope.customer.address.address1 && scope.customer.address.city && scope.customer.address.territory && scope.customer.address.country && scope.customer.address.zipcode && !scope.customer.address.user_defined_latlng) {
            var promise = Geocoder.geocode(scope.customer.address);
            promise.then(function (results) {
              if (scope.marker) {
                scope.marker.setPosition(results[0].geometry.location);
              } else {
                scope.marker = scope.map.createMarker(results[0].geometry.location);
                scope.marker.onchange = function (latLng) {
                  scope.customer.address.lat = scope.marker.lat;
                  scope.customer.address.lng = scope.marker.lng;
                  scope.customer.address.user_defined_latlng = true;
                };
              }
              scope.map.setPosition(results[0].geometry.location);
              scope.customer.address.lat = scope.marker.lat;
              scope.customer.address.lng = scope.marker.lng;
            }, function (status) {
              console.error(status);
            });
          }
        };
        scope.add = function () {
          if (scope.form.$valid) {
            Notification.display('Adding customer:+ ' + scope.customer.first_name + '...', false);
            scope.customer.$save(function (response) {
              Notification.display(scope.customer.first_name + ' added');
              scope.visible = false;
              scope.customer = new Customer();
            }, function (reason) {
              console.error(reason);
            });
          } else {
            Notification.display('Please fill out the form properly');
          }
        };
      }
    };
  }
]);
angular.module('employeeApp').controller('MainCtrl', [
  '$scope',
  '$location',
  function ($scope, $location) {
    var user = $scope.currentUser;
    var changePage = function () {
      if (user.hasModule('supplies') && !user.hasModule('acknowledgements') && !user.hasModule('shipping')) {
        $location.path('/supply');
      }
    };
    if (!$scope.currentUser.ready) {
      user.onready = changePage;
    } else {
      changePage();
    }
  }
]);