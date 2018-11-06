(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shipping-shipping-module"],{

/***/ "./src/app/orders/shipping/shipping-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/orders/shipping/shipping-routing.module.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var routes = [];
var ShippingRoutingModule = /** @class */ (function () {
    function ShippingRoutingModule() {
    }
    ShippingRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ShippingRoutingModule);
    return ShippingRoutingModule;
}());
exports.ShippingRoutingModule = ShippingRoutingModule;


/***/ }),

/***/ "./src/app/orders/shipping/shipping.module.ts":
/*!****************************************************!*\
  !*** ./src/app/orders/shipping/shipping.module.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var shipping_routing_module_1 = __webpack_require__(/*! ./shipping-routing.module */ "./src/app/orders/shipping/shipping-routing.module.ts");
var ShippingModule = /** @class */ (function () {
    function ShippingModule() {
    }
    ShippingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                shipping_routing_module_1.ShippingRoutingModule
            ],
            declarations: []
        })
    ], ShippingModule);
    return ShippingModule;
}());
exports.ShippingModule = ShippingModule;


/***/ })

}]);
//# sourceMappingURL=shipping-shipping-module.js.map