
angular.module('employeeApp.services', ['ngResource']);
angular.module('employeeApp.directives', []);
angular.module('employeeApp.filters', []);
angular.module('employeeApp', ['ngRoute', 'ngResource', 'ngCookies', 'employeeApp.directives', 'employeeApp.filters',
                               'employeeApp.services', 'ui.date'])
.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/main.html',
		controller: 'MainCtrl'
	})
	.when('/contact/customer/add', {
		templateUrl: 'views/contact/customer/add.html',
		controller: 'ContactCustomerAddCtrl'
	})
	.when('/contact/customer/:id', {
		templateUrl: 'views/contact/customer/details.html',
        controller: 'ContactCustomerDetailsCtrl'
	})
      .when('/contact/customer', {
        templateUrl: 'views/contact/customer/view.html',
        controller: 'ContactCustomerViewCtrl'
	})
      .when('/contact/supplier/add', {
        templateUrl: 'views/contact/supplier/add.html',
        controller: 'ContactSupplierAddCtrl'
	})
      .when('/contact/supplier', {
        templateUrl: 'views/contact/supplier/view.html',
        controller: 'ContactSupplierViewCtrl'
	})
      .when('/contact/supplier/:id', {
        templateUrl: 'views/contact/supplier/details.html',
        controller: 'ContactSupplierDetailsCtrl'
	})
      .when('/contact', {
        templateUrl: 'views/contact.html'
	})
      .when('/product/upholstery/add', {
        templateUrl: 'views/product/upholstery/add.html',
        controller: 'ProductUpholsteryAddCtrl'
	})
      .when('/product/upholstery', {
        templateUrl: 'views/product/upholstery/view.html',
        controller: 'ProductUpholsteryViewCtrl'
	})
      .when('/product/upholstery/:id', {
        templateUrl: 'views/product/upholstery/details.html',
        controller: 'ProductUpholsteryDetailsCtrl'
	})
      .when('/product', {
        templateUrl: 'views/product.html'
	})
      .when('/product/model/add', {
        templateUrl: 'views/product/model/add.html',
        controller: 'ProductModelAddCtrl'
	})
      .when('/product/model', {
        templateUrl: 'views/product/model/view.html',
        controller: 'ProductModelViewCtrl'
	})
      .when('/product/model/:id', {
        templateUrl: 'views/product/model/details.html',
        controller: 'ProductModelDetailsCtrl'
	})
      .when('/order/acknowledgement/create', {
        templateUrl: 'views/order/acknowledgement/create.html',
        controller: 'OrderAcknowledgementCreateCtrl'
	})
      .when('/order', {
        templateUrl: 'views/order.html'
	})
      .when('/order/acknowledgement', {
        templateUrl: 'views/order/acknowledgement/view.html',
        controller: 'OrderAcknowledgementViewCtrl'
	})
      .when('/order/shipping/create', {
        templateUrl: 'views/order/shipping/create.html',
        controller: 'OrderShippingCreateCtrl'
	})
      .when('/order/shipping', {
        templateUrl: 'views/order/shipping/view.html',
        controller: 'OrderShippingViewCtrl'
	})
      .when('/order/shipping/deliveries/today', {
        templateUrl: 'views/order/shipping/today.html',
        controller: 'OrderShippingTodayCtrl'
	})
      .when('/order/shipping/deliveries/week', {
        templateUrl: 'views/order/shipping/week.html',
        controller: 'OrderShippingWeekCtrl'
	})
      .when('/administrator/group/add', {
        templateUrl: 'views/administrator/group/add.html',
        controller: 'AdministratorGroupAddCtrl'
	})
      .when('/administrator/group', {
        templateUrl: 'views/administrator/group/view.html',
        controller: 'AdministratorGroupViewCtrl'
	})
      .when('/administrator/group/:id', {
        templateUrl: 'views/administrator/group/details.html',
        controller: 'AdministratorGroupDetailsCtrl'
	})
      .when('/administrator/user/add', {
        templateUrl: 'views/administrator/user/add.html',
        controller: 'AdministratorUserAddCtrl'
	})
      .when('/administrator/user/:id', {
        templateUrl: 'views/administrator/user/details.html',
        controller: 'AdministratorUserDetailsCtrl'
	})
      .when('/administrator/user', {
        templateUrl: 'views/administrator/user/view.html',
        controller: 'AdministratorUserViewCtrl'
	})
      .when('/administrator', {
        templateUrl: 'views/administrator.html'
	})
      .when('/supply', {
        templateUrl: 'views/supply/view.html',
        controller: 'SupplyViewCtrl'
	})
      .when('/supply/fabric', {
        templateUrl: 'views/supply/fabric/view.html',
        controller: 'SupplyFabricViewCtrl'
	})
      .when('/supply/fabric/add', {
        templateUrl: 'views/supply/fabric/add.html',
        controller: 'SupplyFabricAddCtrl'
	})
      .when('/supply/fabric/:id', {
        templateUrl: 'views/supply/fabric/details.html',
        controller: 'SupplyFabricDetailsCtrl'
	})
      .when('/supply/foam/add', {
        templateUrl: 'views/supply/foam/add.html',
        controller: 'SupplyFoamAddCtrl'
	})
      .when('/supply/foam/:id', {
        templateUrl: 'views/supply/foam/details.html',
        controller: 'SupplyFoamDetailsCtrl'
	})
      .when('/supply/foam', {
        templateUrl: 'views/supply/foam/view.html',
        controller: 'SupplyFoamViewCtrl'
	})
      .when('/accounting', {
        templateUrl: 'views/accounting.html'
	})
      .when('/accounting/transaction', {
        templateUrl: 'views/accounting/transaction/view.html',
        controller: 'AccountingTransactionViewCtrl'
	})
      .when('/accounting/transaction/add', {
        templateUrl: 'views/accounting/transaction/add.html',
        controller: 'AccountingTransactionAddCtrl'
	})
      .when('/accounting/transaction/:id', {
        templateUrl: 'views/accounting/transaction/details.html',
        controller: 'AccountingTransactionDetailsCtrl'
	})
      .when('/order/acknowledgement/:id', {
        templateUrl: 'views/order/acknowledgement/details.html',
        controller: 'OrderAcknowledgementDetailsCtrl'
	})
      .when('/order/shipping/delivery', {
        templateUrl: 'views/order/shipping/delivery.html',
        controller: 'OrderShippingDeliveryCtrl'
	})
      /*
      .when('/order/shipping/deliveries/week', {
        templateUrl: 'views/order/acknowledgement/weekly.html',
        controller: 'OrderAcknowledgementWeeklyCtrl'
      })
      .when('/order/shipping/deliveries/today', {
        templateUrl: 'views/order/acknowledgement/daily.html',
        controller: 'OrderAcknowledgementDailyCtrl'
      })*/
      .when('/order/shipping/:id', {
        templateUrl: 'views/order/shipping/details.html',
        controller: 'OrderShippingDetailsCtrl'
	})
      .when('/order/acknowledgement/item/:id', {
        templateUrl: 'views/order/acknowledgement/item/details.html',
        controller: 'OrderAcknowledgementItemDetailsCtrl'
	})
      .when('/supply/prop', {
        templateUrl: 'views/supply/prop/view.html',
        controller: 'SupplyPropViewCtrl'
	})
      .when('/supply/prop/add', {
        templateUrl: 'views/supply/prop/add.html',
        controller: 'SupplyPropAddCtrl'
	})
      .when('/supply/prop/:id', {
        templateUrl: 'views/supply/prop/details.html',
        controller: 'SupplyPropDetailsCtrl'
	})
      .when('/supply/lumber/view', {
        templateUrl: 'views/supply/lumber/view.html',
        controller: 'SupplyLumberViewCtrl'
	})
      .when('/product/inventory', {
        templateUrl: 'views/product/inventory.html',
        controller: 'ProductInventoryCtrl'
	})
      
      .when('/product/table', {
        templateUrl: 'views/product/table/view.html',
        controller: 'ProductTableViewCtrl'
	})
      .when('/product/rug', {
        templateUrl: 'views/product/rug.html',
        controller: 'ProductRugCtrl'
	})
      .when('/product/rug/view', {
        templateUrl: 'views/product/rug/view.html',
        controller: 'ProductRugViewCtrl'
	})
      .when('/product/rug/add', {
        templateUrl: 'views/product/rug/add.html',
        controller: 'ProductRugAddCtrl'
	})
      .when('/product/table/add', {
        templateUrl: 'views/product/table/add.html',
        controller: 'ProductTableAddCtrl'
	})
      .when('/product/table/:id', {
        templateUrl: 'views/product/table/details.html',
        controller: 'ProductTableDetailsCtrl'
	})
      .when('/project', {
        templateUrl: 'views/project/view.html',
        controller: 'ProjectViewCtrl'
	})
      .when('/project/:id', {
        templateUrl: 'views/project/details.html',
        controller: 'ProjectDetailsCtrl'

	})
      .when('/hr', {
        templateUrl: 'views/hr.html'
	})
      .when('/hr/employee', {
        templateUrl: 'views/hr/employee/view.html',
        controller: 'HrEmployeeViewCtrl'
	})
      .when('/project/room/:id', {
        templateUrl: 'views/project/room/details.html',
        controller: 'ProjectRoomDetailsCtrl'
	})
      .when('/order/purchase_order', {
        templateUrl: 'views/order/purchase_order/view.html',
        controller: 'OrderPurchaseOrderViewCtrl'
	})
      .when('/order/purchase_order/create', {
        templateUrl: 'views/order/purchase_order/create.html',
        controller: 'OrderPurchaseOrderCreateCtrl'
	})
      .when('/order/purchase_order/:id', {
        templateUrl: 'views/order/purchase_order/details.html',
        controller: 'OrderPurchaseOrderDetailsCtrl'
	})
      .when('/supply/log', {
        templateUrl: 'views/supply/log.html',
        controller: 'SupplyLogCtrl'
    })
    .when('/supply/shopping_list', {
      templateUrl: 'views/supply/shopping_list.html',
      controller: 'SupplyShoppingListCtrl'
    })
    .when('/supply/buying_guide', {
      templateUrl: 'views/supply/buying_guide.html',
      controller: 'SupplyBuyingGuideCtrl'
    })
      .when('/supply/:id', {
        templateUrl: 'views/supply/details.html',
        controller: 'SupplyDetailsCtrl'
	})
      
     
      .when('/equipment', {
        templateUrl: 'views/equipment/view.html',
        controller: 'EquipmentViewCtrl'
      })
 
     
      .otherwise({
        redirectTo: '/'
	});
}]);

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