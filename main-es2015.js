(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/add-shoes/add-shoes.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-shoes/add-shoes.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Add New Shoes</h2>\n  <form action=\"https://www.w3schools.com/action_page.php\">\n    <div class=\"form-group\">\n      <label for=\"email\">Brand Name:</label>\n      <input type=\"text\" class=\"form-control\" id=\"brand\" placeholder=\"i.e. Nike\" name=\"brand\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"model\">Model:</label>\n      <input type=\"text\" class=\"form-control\" id=\"model\" placeholder=\"i.e. Air Force 1\" name=\"model\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"price\">Price:</label>\n      <input type=\"number\" class=\"form-control\" id=\"price\" placeholder=\"i.e. 232$\" name=\"price\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"photo\">Picture:</label>\n      <input type=\"file\" class=\"form-control\" id=\"model\" placeholder=\"i.e. photo\" name=\"photo\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"qty\">Quantity:</label>\n      <input type=\"number\" class=\"form-control\" id=\"qty\" placeholder=\"i.e. Available Quantity\" name=\"qty\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"sizes\">Available Size:</label>\n      <input type=\"number\" class=\"form-control\" id=\"sizes\" placeholder=\"i.e. 9.2\" name=\"sizes\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"category\">Category:</label>\n      <select class=\"form-control\" id=\"category\" name=\"category\">\n        <option>Men</option>\n        <option>Women</option>\n        <option>Kids</option>\n      </select>\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\">Save</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<app-menu></app-menu>\n\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cart/cart.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n      <div class=\"well\">\n        <p>Jane</p>\n        <img src=\"../../assets/bKFWpD.jpg\" class=\"img-circle\" height=\"55\" width=\"55\" alt=\"Avatar\">\n      </div>\n    </div>\n    <div class=\"col-sm-9\">\n      <div class=\"well\">\n        <p>Just Forgot that I had to mention something about someone to someone about how I forgot something, but now I forgot it. Ahh, forget it! Or wait. I remember.... no I don't.</p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/category/category.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/category/category.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\n        <h2>Media Object</h2>\n        <p>Place the media object to the top, middle or at the bottom with the flex utilities, align-self-* classes:</p><br>\n        <!-- Media top -->\n        <div class=\"row text-center\">\n            <div class=\"col-sm-3 mb-3\" *ngFor=\"let listShoes of listShoesDisplay; let i = index\">\n                <div class=\"thumbnail border\">\n                <img src=\"{{listShoes.image[0].imageUrl}}\" alt=\"Paris\" width=\"100%\" height=\"200\">\n                <p><strong>{{listShoes.brand}}</strong></p>\n                <p>{{listShoes.category}}</p>\n                <a routerLink=\"/shoesDetail/{{i}}\" class=\"btn btn-link\">More</a>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/error/error.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{errorPage}}"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container-fluid text-center\">    \n    <h3>Some of my Work</h3><br>\n\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n          <div class=\"btn-group-vertical\">\n            <a routerLink=\"\">Home</a>\n            <a routerLink=\"category/all\">All Shoes</a>\n            <a routerLink=\"category/men\">Men Shoes</a>\n            <a routerLink=\"category/women\">Women Shoes</a>\n            <a routerLink=\"category/kids\">Kids Shoes</a>\n          </div> \n      </div>\n\n      <div class=\"col-sm-8 text-center\">\n        <p>Subscribe on our SneakerCity Shop</p>\n        <form class=\"form-inline\">Get deals:\n          <input type=\"email\" class=\"form-control\" size=\"50\" placeholder=\"Email Address\">\n          <button type=\"button\" class=\"btn btn-danger\">Sign Up</button>\n        </form>\n      </div>\n\n    </div>\n\n  </div><br>\n  <p class=\"text-center\">Alright Reserved Copyright</p>\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header *ngIf='!hardcodedAuthenticationsServe.isUserLoggedIn()'>\r\n    <nav class=\"navbar navbar-expand-md border\">\r\n        <ul class=\"navbar-nav navbar-collapse justify-content-end\">\r\n        <li><a routeLink=\"nav-link\" class=\"nav-link\">Cart</a></li>\r\n        </ul>\r\n    </nav>\r\n\r\n    <nav class=\"navbar navbar-expand-md border\">\r\n        <div><a href=\"#\" class=\"navbar-brand\">SneakerCity</a></div>\r\n        <ul class=\"navbar-nav navbar-collapse justify-content-center\">\r\n            <li><a routerLink=\"\" class=\"nav-link\">HOME</a></li>\r\n            <li><a routerLink=\"/category/all\" class=\"nav-link\">ALL</a></li>\r\n            <li><a routerLink=\"/category/men\" class=\"nav-link\">MEN</a></li>\r\n            <li><a routerLink=\"/category/men\" class=\"nav-link\">WOMEN</a></li>\r\n            <li><a routerLink=\"/category/men\" class=\"nav-link\">KIDS</a></li>\r\n        </ul>\r\n        <ul class=\"navbar-nav navbar-collapse justify-content-end\">\r\n            <li><a routerLink=\"nav-link\" class=\"nav-link\">Search</a></li>\r\n        </ul>\r\n    </nav>\r\n</header>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to Sneaker City Administration!</h1>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/list-shoes/list-shoes.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/list-shoes/list-shoes.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\n  <h2>Media Object</h2>\n  <p>Place the media object to the top, middle or at the bottom with the flex utilities, align-self-* classes:</p><br>\n  <!-- Media top -->\n  <div class=\"media border\" *ngFor=\"let listShoe of listShoes\">\n    <img src=\"{{listShoe.image}}\" class=\"align-self-start m-2\" style=\"width:140px\">\n    <div class=\"media-body mb-n2 mt-2\">\n      <h3>{{listShoe.brand}}</h3>\n      <p class=\"muted\">{{listShoe.category}}</p>\n      <p>{{listShoe.description}}</p>\n      <p>\n        <span>{{listShoe.size}}</span>\n        <span>{{listShoe.quantity}}</span>\n      </p>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Login form!</h1>\n  <div class=\"alert alert-warning\" *ngIf='invalidLogin'>{{errorMessage}}</div>\n    <div class=\"form-group\">\n      <label for=\"username\">User Name :</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter username\" name=\"username\" [(ngModel)]=\"username\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"pwd\">Password :</label>\n      <input type=\"password\" class=\"form-control\" placeholder=\"Enter password\" name=\"pswd\" [(ngModel)]=\"password\">\n    </div>\n    <button (click)=handleLogin() class=\"btn btn-primary\">Login</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/logout/logout.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/logout/logout.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>You are logout!</h1>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/main.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Welcome to shop!</h2>\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n    \n      <div class=\"item\">\n        <img src=\"../../assets/ban-home-devops-900x535-v2.jpg\" alt=\"New York\" style=\"width:100%;\">\n        <div class=\"carousel-caption\">\n          <h3>New York</h3>\n          <p>We love the Big Apple!</p>\n        </div>\n      </div>\n  \n    </div>\n  </div>\n\n  <h2>What's Available</h2>\n  <h4>Shop by category</h4>\n  <div class=\"row text-center\">\n    <div class=\"col-sm-4\">\n      <div class=\"thumbnail\">\n        <a routerLink=\"category/Men\">\n          <img src=\"../../assets/CNNxUnhUsAAol-x.jpg\" width=\"100%\" height=\"400\" alt=\"Men's Shoes\">\n          <p><strong>Men's Shoes</strong></p>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"thumbnail\">\n        <img src=\"../../assets/bKFWpD.jpg\" width=\"100%\" height=\"400\" alt=\"Women's Shoes\">\n        <p><strong>Women's Shoes</strong></p>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"thumbnail\">\n        <img src=\"../../assets/ban-home-devops-900x535-v2.jpg\" width=\"100%\" height=\"400\" alt=\"Kid's Shoes\">\n        <p><strong>Kid's Shoes</strong></p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row text-center\">\n      <div class=\"col-sm-3 mb-3\" *ngFor=\"let listShoe of listShoes\">\n          <div class=\"thumbnail border\">\n          <img src=\"{{listShoe.image}}\" alt=\"Paris\" width=\"100%\" height=\"200\">\n          <p><strong>{{listShoe.brand}}</strong></p>\n          <p>{{listShoe.category}}</p>\n          <a routerLink=\"/shoesDetail/{{listShoe.id}}\" class=\"btn btn-link\">More</a>\n          </div>\n      </div>\n  </div>\n</div><br>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu/menu.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header *ngIf='hardcodedAuthenticationsServe.isUserLoggedIn()'>\n  <nav class=\"navbar navbar-expand-md border\">\n    <ul class=\"navbar-nav navbar-collapse justify-content-end\">\n      <li><a routeLink=\"nav-link\" class=\"nav-link\">Cart</a></li>\n    </ul>\n  </nav>\n\n  <nav class=\"navbar navbar-expand-md border\">\n    <div><a href=\"#\" class=\"navbar-brand\">SneakerCity</a></div>\n    <ul class=\"navbar-nav navbar-collapse justify-content-center\">\n      <li><a routerLink=\"home/31s1\" class=\"nav-link\">HOME</a></li>\n      <li><a routerLink=\"/category/all\" class=\"nav-link\">ADD SHOES</a></li>\n      <li><a routerLink=\"/category/men\" class=\"nav-link\">MEN</a></li>\n      <li><a routerLink=\"/category/men\" class=\"nav-link\">WOMEN</a></li>\n      <li><a routerLink=\"/category/men\" class=\"nav-link\">KIDS</a></li>\n    </ul>\n    <ul class=\"navbar-nav navbar-collapse justify-content-end\">\n      <li><a routerLink=\"/logout\" class=\"nav-link\">Logout</a></li>\n    </ul>\n  </nav>\n</header>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shoes-details/shoes-details.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shoes-details/shoes-details.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>{{shoesDisplay.model}}</h1>\n  <div class=\"row\">\n    <div class=\"col-sm-8\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-4\" *ngFor=\"let photo of shoesDisplay.image\">\n            <div class=\"thumbnail\">\n              <a href=\"{{photo.imageUrl}}\" target=\"_blank\">\n                <img src=\"{{photo.imageUrl}}\" class=\"img-rounded\" alt=\"Lights\" style=\"width:100%\">\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\" style=\"background-color:lavender;\">\n      <h5>{{shoesDisplay.category}} <p class=\"text-right\">{{shoesDisplay.price}}$</p></h5>\n    \n      <h6>{{shoesDisplay.brand}}</h6>\n      <h6>{{shoesDisplay.model}}</h6>\n      <p>\n        <span>Size: </span>\n        <select name=\"mysize\" class=\"mr-3\" [(ngModel)]=\"myShopSize\">\n          <option selected>Select Shoes Size</option>\n          <option value=\"{{shoesSize.size}}\" *ngFor=\"let shoesSize of shoesDisplay.shoesSize; let s = index\">\n            {{shoesSize.size}}\n          </option>\n        </select>\n\n        <span>Qty: </span>\n        <input type=\"number\" min=\"1\" value=\"1\" name=\"quantity\" max=\"{{shoesDisplay.quantity}}\" placeholder=\"Quantity\" [(ngModel)]=\"myShopQty\">\n      </p>      \n      <p> \n        <button (click)=handleCart() class=\"btn btn-primary btn-block\">Add to Cart</button>\n      </p>\n      <p>\n          {{shoesDisplay.description}}\n      </p>\n    </div>\n  </div>\n</div><br>\n"

/***/ }),

/***/ "./src/app/add-shoes/add-shoes.component.css":
/*!***************************************************!*\
  !*** ./src/app/add-shoes/add-shoes.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1zaG9lcy9hZGQtc2hvZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/add-shoes/add-shoes.component.ts":
/*!**************************************************!*\
  !*** ./src/app/add-shoes/add-shoes.component.ts ***!
  \**************************************************/
/*! exports provided: AddShoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddShoesComponent", function() { return AddShoesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddShoesComponent = class AddShoesComponent {
    constructor() { }
    ngOnInit() {
    }
};
AddShoesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-shoes',
        template: __webpack_require__(/*! raw-loader!./add-shoes.component.html */ "./node_modules/raw-loader/index.js!./src/app/add-shoes/add-shoes.component.html"),
        styles: [__webpack_require__(/*! ./add-shoes.component.css */ "./src/app/add-shoes/add-shoes.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AddShoesComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _list_shoes_list_shoes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-shoes/list-shoes.component */ "./src/app/list-shoes/list-shoes.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _service_route_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/route-guard.service */ "./src/app/service/route-guard.service.ts");
/* harmony import */ var _add_shoes_add_shoes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-shoes/add-shoes.component */ "./src/app/add-shoes/add-shoes.component.ts");
/* harmony import */ var _shoes_details_shoes_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shoes-details/shoes-details.component */ "./src/app/shoes-details/shoes-details.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");














const routes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] },
    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] },
    { path: 'category/:category', component: _category_category_component__WEBPACK_IMPORTED_MODULE_7__["CategoryComponent"] },
    { path: 'shoesDetail/:key', component: _shoes_details_shoes_details_component__WEBPACK_IMPORTED_MODULE_12__["ShoesDetailsComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_13__["CartComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'home/:key', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_10__["RouteGuardService"]] },
    { path: 'addShoes', component: _add_shoes_add_shoes_component__WEBPACK_IMPORTED_MODULE_11__["AddShoesComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_10__["RouteGuardService"]] },
    { path: 'listShoes/:category', component: _list_shoes_list_shoes_component__WEBPACK_IMPORTED_MODULE_8__["ListShoesComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_10__["RouteGuardService"]] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_9__["LogoutComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_10__["RouteGuardService"]] },
    { path: '**', component: _error_error_component__WEBPACK_IMPORTED_MODULE_6__["ErrorComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Sneaker City';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _list_shoes_list_shoes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./list-shoes/list-shoes.component */ "./src/app/list-shoes/list-shoes.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _add_shoes_add_shoes_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./add-shoes/add-shoes.component */ "./src/app/add-shoes/add-shoes.component.ts");
/* harmony import */ var _shoes_details_shoes_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shoes-details/shoes-details.component */ "./src/app/shoes-details/shoes-details.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"],
            _category_category_component__WEBPACK_IMPORTED_MODULE_10__["CategoryComponent"],
            _list_shoes_list_shoes_component__WEBPACK_IMPORTED_MODULE_11__["ListShoesComponent"],
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
            _logout_logout_component__WEBPACK_IMPORTED_MODULE_15__["LogoutComponent"],
            _add_shoes_add_shoes_component__WEBPACK_IMPORTED_MODULE_16__["AddShoesComponent"],
            _shoes_details_shoes_details_component__WEBPACK_IMPORTED_MODULE_17__["ShoesDetailsComponent"],
            _cart_cart_component__WEBPACK_IMPORTED_MODULE_18__["CartComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CartComponent = class CartComponent {
    constructor() { }
    ngOnInit() {
    }
};
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html"),
        styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CartComponent);



/***/ }),

/***/ "./src/app/category/category.component.css":
/*!*************************************************!*\
  !*** ./src/app/category/category.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_shoes_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/shoes.model */ "./src/app/models/shoes.model.ts");




let CategoryComponent = class CategoryComponent {
    //ActivatedRoute
    constructor(route) {
        this.route = route;
        this.shoesType = '';
        this.shoesType = this.route.snapshot.params['category'];
        this.listShoesDisplay = [
            new _models_shoes_model__WEBPACK_IMPORTED_MODULE_3__["Shoes"](1, 'Nike', 'Nike Zoom GP', [
                {
                    imageId: 1,
                    imageUrl: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fdzy4jehj2fy6jhlhzju/zoom-gp-mens-shoe-x0957l.jpg",
                },
                {
                    imageId: 2,
                    imageUrl: "https://ph-test-11.slatic.net/p/9fcf27e45c72a67bbde43d21ca259834.jpg",
                },
                {
                    imageId: 3,
                    imageUrl: "https://rukminim1.flixcart.com/image/832/832/jo1s8sw0/shoe/g/z/z/2-whites-9-shozie-white-original-imafajhbhszphs2m.jpeg?q=70",
                },
                {
                    imageId: 4,
                    imageUrl: "https://www.buyxmart.com/wp-content/uploads/2018/07/Vintage-dad-Men-shoes-2018-kanye-west-fashion-mesh-light-breathable-men-casual-shoes-men-sneakers-2.jpg_640x640-2-min.jpg",
                }
            ], "Men's Shoe", 'Spruce Aura/Spruce Fog/Barely Volt/Volt', [
                {
                    sizeId: 1,
                    size: 7.5
                },
                {
                    sizeId: 2,
                    size: 8
                },
                {
                    sizeId: 3,
                    size: 8.5
                },
                {
                    sizeId: 4,
                    size: 9
                },
                {
                    sizeId: 5,
                    size: 9.5
                }
            ], 20, 160),
            new _models_shoes_model__WEBPACK_IMPORTED_MODULE_3__["Shoes"](2, 'Nike', 'Nike Zoom GP', [
                {
                    imageId: 1,
                    imageUrl: "https://cdn.shopify.com/s/files/1/1509/8876/products/Elastic-Sole-Trend-Shoes-Men-Summer-Mesh-Sneakers-Men-s-Casual-Shoes-Casual-Male-Air-Mesh_10565e99-7179-4927-9b18-46f22c2da100_grande.jpg?v=1558941913",
                },
                {
                    imageId: 2,
                    imageUrl: "https://cdn.shopify.com/s/files/1/2725/7454/products/2018-Super-Populaire-Hommes-Chaussures-de-Course-Respirant-Hommes-Sneakers-Rebond-Chaussures-Bounce-Chaussures-de-Sport_88031630-a2eb-4dd3-97b1-aa0b93ec6a86_grande.jpg?v=1530132697",
                },
                {
                    imageId: 3,
                    imageUrl: "https://www.cadysneakers.com/wp-content/uploads/2018/08/Bape-x-Nike-Air-Max-270-AH6799-016-Red-Shoes4.jpg",
                },
                {
                    imageId: 4,
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE69xyTP38fsnQ6D7_crU2mC4T15NqLsjfZyVxCdbLd2U2vxsn",
                }
            ], "Men's Shoe", 'Spruce Aura/Spruce Fog/Barely Volt/Volt', [
                {
                    sizeId: 1,
                    size: 7.5
                },
                {
                    sizeId: 2,
                    size: 8
                },
                {
                    sizeId: 3,
                    size: 8.5
                },
                {
                    sizeId: 4,
                    size: 9
                },
                {
                    sizeId: 5,
                    size: 9.5
                }
            ], 20, 160),
        ];
    }
    ngOnInit() {
    }
};
CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category',
        template: __webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/index.js!./src/app/category/category.component.html"),
        styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/category/category.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], CategoryComponent);



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorComponent = class ErrorComponent {
    constructor() {
        this.errorPage = "An Error Occured! Page doesn't exist!";
    }
    ngOnInit() {
    }
};
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error',
        template: __webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html"),
        styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ErrorComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    position: relative;\r\n    bottom: 0%;\r\n    width: 100%;\r\n    height: auto;\r\n    background: #222222;\r\n    color: aliceblue;\r\n    padding: 10px;\r\n}\r\n.footer a {\r\n    color: aliceblue;\r\n    text-decoration: none;\r\n}\r\n.footer a:hover {\r\n    color: aliceblue;\r\n    text-decoration: underline;\r\n}\r\n.form-inline {\r\n    width: 600px;\r\n    margin: 0 auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDBCQUEwQjtBQUM5QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICMyMjIyMjI7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4uZm9vdGVyIGEge1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmZvb3RlciBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmZvcm0taW5saW5lIHtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/hardcoded-authentication.service */ "./src/app/service/hardcoded-authentication.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(hardcodedAuthenticationsServe) {
        this.hardcodedAuthenticationsServe = hardcodedAuthenticationsServe;
    }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_2__["HardcodedAuthenticationService"]])
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/list-shoes/list-shoes.component.css":
/*!*****************************************************!*\
  !*** ./src/app/list-shoes/list-shoes.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3Qtc2hvZXMvbGlzdC1zaG9lcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/list-shoes/list-shoes.component.ts":
/*!****************************************************!*\
  !*** ./src/app/list-shoes/list-shoes.component.ts ***!
  \****************************************************/
/*! exports provided: ListShoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListShoesComponent", function() { return ListShoesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_shoes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/shoes.model */ "./src/app/models/shoes.model.ts");



let ListShoesComponent = class ListShoesComponent {
    constructor() {
        this.listShoes = [
            new _models_shoes_model__WEBPACK_IMPORTED_MODULE_2__["Shoes"](1, 'Nike', 'Nike Zoom GP', [
                {
                    imageId: 1,
                    imageUrl: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fdzy4jehj2fy6jhlhzju/zoom-gp-mens-shoe-x0957l.jpg",
                },
                {
                    imageId: 2,
                    imageUrl: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fdzy4jehj2fy6jhlhzju/zoom-gp-mens-shoe-x0957l.jpg",
                },
                {
                    imageId: 3,
                    imageUrl: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fdzy4jehj2fy6jhlhzju/zoom-gp-mens-shoe-x0957l.jpg",
                },
                {
                    imageId: 4,
                    imageUrl: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fdzy4jehj2fy6jhlhzju/zoom-gp-mens-shoe-x0957l.jpg",
                }
            ], "Men's Shoe", 'Spruce Aura/Spruce Fog/Barely Volt/Volt', [
                {
                    sizeId: 1,
                    size: 7.5
                },
                {
                    sizeId: 2,
                    size: 8
                },
                {
                    sizeId: 3,
                    size: 8.5
                },
                {
                    sizeId: 4,
                    size: 9
                },
                {
                    sizeId: 5,
                    size: 9.5
                }
            ], 20, 160),
            new _models_shoes_model__WEBPACK_IMPORTED_MODULE_2__["Shoes"](2, 'Nike', 'Nike Zoom GP', [
                {
                    imageId: 1,
                    imageUrl: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fdzy4jehj2fy6jhlhzju/zoom-gp-mens-shoe-x0957l.jpg",
                },
                {
                    imageId: 2,
                    imageUrl: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fdzy4jehj2fy6jhlhzju/zoom-gp-mens-shoe-x0957l.jpg",
                },
                {
                    imageId: 3,
                    imageUrl: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fdzy4jehj2fy6jhlhzju/zoom-gp-mens-shoe-x0957l.jpg",
                },
                {
                    imageId: 4,
                    imageUrl: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fdzy4jehj2fy6jhlhzju/zoom-gp-mens-shoe-x0957l.jpg",
                }
            ], "Men's Shoe", 'Spruce Aura/Spruce Fog/Barely Volt/Volt', [
                {
                    sizeId: 1,
                    size: 7.5
                },
                {
                    sizeId: 2,
                    size: 8
                },
                {
                    sizeId: 3,
                    size: 8.5
                },
                {
                    sizeId: 4,
                    size: 9
                },
                {
                    sizeId: 5,
                    size: 9.5
                }
            ], 20, 160),
        ];
    }
    ngOnInit() {
    }
};
ListShoesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-shoes',
        template: __webpack_require__(/*! raw-loader!./list-shoes.component.html */ "./node_modules/raw-loader/index.js!./src/app/list-shoes/list-shoes.component.html"),
        styles: [__webpack_require__(/*! ./list-shoes.component.css */ "./src/app/list-shoes/list-shoes.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ListShoesComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/hardcoded-authentication.service */ "./src/app/service/hardcoded-authentication.service.ts");




let LoginComponent = class LoginComponent {
    constructor(router, hardcodedAuthenticationService) {
        this.router = router;
        this.hardcodedAuthenticationService = hardcodedAuthenticationService;
        this.username = 'admin';
        this.password = '';
        this.errorMessage = 'Invalid Credentials';
        this.invalidLogin = false;
        this.key = 'a123bx2';
    }
    ngOnInit() {
    }
    handleLogin() {
        if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
            // Redirect to home page
            this.router.navigate(['home', this.key]);
            this.invalidLogin = false;
        }
        else
            this.invalidLogin = true;
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_3__["HardcodedAuthenticationService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/hardcoded-authentication.service */ "./src/app/service/hardcoded-authentication.service.ts");



let LogoutComponent = class LogoutComponent {
    constructor(hardcodedAuthenticationService) {
        this.hardcodedAuthenticationService = hardcodedAuthenticationService;
    }
    ngOnInit() {
        this.hardcodedAuthenticationService.logout();
    }
};
LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout',
        template: __webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/index.js!./src/app/logout/logout.component.html"),
        styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_2__["HardcodedAuthenticationService"]])
], LogoutComponent);



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainComponent = class MainComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html"),
        styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MainComponent);



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/hardcoded-authentication.service */ "./src/app/service/hardcoded-authentication.service.ts");



let MenuComponent = class MenuComponent {
    //isUserLoggedIn: boolean = false;
    constructor(hardcodedAuthenticationsServe) {
        this.hardcodedAuthenticationsServe = hardcodedAuthenticationsServe;
    }
    ngOnInit() {
        //this.isUserLoggedIn = this.hardcodedAuthenticationsServe.isUserLoggedIn();
    }
};
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html"),
        styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_2__["HardcodedAuthenticationService"]])
], MenuComponent);



/***/ }),

/***/ "./src/app/models/shoes.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/shoes.model.ts ***!
  \***************************************/
/*! exports provided: Shoes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shoes", function() { return Shoes; });
class Shoes {
    constructor(id, brand, model, image, category, description, shoesSize, quantity, price) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.image = image;
        this.category = category;
        this.description = description;
        this.shoesSize = shoesSize;
        this.quantity = quantity;
        this.price = price;
    }
}


/***/ }),

/***/ "./src/app/service/hardcoded-authentication.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/service/hardcoded-authentication.service.ts ***!
  \*************************************************************/
/*! exports provided: HardcodedAuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HardcodedAuthenticationService", function() { return HardcodedAuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HardcodedAuthenticationService = class HardcodedAuthenticationService {
    constructor() { }
    authenticate(username, password) {
        if (username === 'admin' && password === '123') {
            sessionStorage.setItem('authenticateUser', username);
            return true;
        }
        else
            return false;
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticateUser');
        return !(user === null);
    }
    logout() {
        sessionStorage.removeItem('authenticateUser');
    }
};
HardcodedAuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HardcodedAuthenticationService);



/***/ }),

/***/ "./src/app/service/route-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/route-guard.service.ts ***!
  \************************************************/
/*! exports provided: RouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuardService", function() { return RouteGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hardcoded-authentication.service */ "./src/app/service/hardcoded-authentication.service.ts");




let RouteGuardService = class RouteGuardService {
    constructor(hardcodedAuthenticationService, router) {
        this.hardcodedAuthenticationService = hardcodedAuthenticationService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.hardcodedAuthenticationService.isUserLoggedIn())
            return true;
        this.router.navigate(['login']);
        return false;
    }
};
RouteGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_3__["HardcodedAuthenticationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], RouteGuardService);



/***/ }),

/***/ "./src/app/shoes-details/shoes-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shoes-details/shoes-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob2VzLWRldGFpbHMvc2hvZXMtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shoes-details/shoes-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shoes-details/shoes-details.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoesDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoesDetailsComponent", function() { return ShoesDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_shoes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/shoes.model */ "./src/app/models/shoes.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ShoesDetailsComponent = class ShoesDetailsComponent {
    constructor(route) {
        this.route = route;
        this.listShoes = [
            new _models_shoes_model__WEBPACK_IMPORTED_MODULE_2__["Shoes"](1, 'Nike', 'Nike Zoom GP', [
                {
                    imageId: 1,
                    imageUrl: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fdzy4jehj2fy6jhlhzju/zoom-gp-mens-shoe-x0957l.jpg",
                },
                {
                    imageId: 2,
                    imageUrl: "https://ph-test-11.slatic.net/p/9fcf27e45c72a67bbde43d21ca259834.jpg",
                },
                {
                    imageId: 3,
                    imageUrl: "https://rukminim1.flixcart.com/image/832/832/jo1s8sw0/shoe/g/z/z/2-whites-9-shozie-white-original-imafajhbhszphs2m.jpeg?q=70",
                },
                {
                    imageId: 4,
                    imageUrl: "https://www.buyxmart.com/wp-content/uploads/2018/07/Vintage-dad-Men-shoes-2018-kanye-west-fashion-mesh-light-breathable-men-casual-shoes-men-sneakers-2.jpg_640x640-2-min.jpg",
                }
            ], "Men's Shoe", 'Spruce Aura/Spruce Fog/Barely Volt/Volt', [
                {
                    sizeId: 1,
                    size: 7.5
                },
                {
                    sizeId: 2,
                    size: 8
                },
                {
                    sizeId: 3,
                    size: 8.5
                },
                {
                    sizeId: 4,
                    size: 9
                },
                {
                    sizeId: 5,
                    size: 9.5
                }
            ], 10, 160),
            new _models_shoes_model__WEBPACK_IMPORTED_MODULE_2__["Shoes"](2, 'Nike', 'Nike Zoom GP', [
                {
                    imageId: 1,
                    imageUrl: "https://cdn.shopify.com/s/files/1/1509/8876/products/Elastic-Sole-Trend-Shoes-Men-Summer-Mesh-Sneakers-Men-s-Casual-Shoes-Casual-Male-Air-Mesh_10565e99-7179-4927-9b18-46f22c2da100_grande.jpg?v=1558941913",
                },
                {
                    imageId: 2,
                    imageUrl: "https://cdn.shopify.com/s/files/1/2725/7454/products/2018-Super-Populaire-Hommes-Chaussures-de-Course-Respirant-Hommes-Sneakers-Rebond-Chaussures-Bounce-Chaussures-de-Sport_88031630-a2eb-4dd3-97b1-aa0b93ec6a86_grande.jpg?v=1530132697",
                },
                {
                    imageId: 3,
                    imageUrl: "https://www.cadysneakers.com/wp-content/uploads/2018/08/Bape-x-Nike-Air-Max-270-AH6799-016-Red-Shoes4.jpg",
                },
                {
                    imageId: 4,
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE69xyTP38fsnQ6D7_crU2mC4T15NqLsjfZyVxCdbLd2U2vxsn",
                }
            ], "Men's Shoe", 'Spruce Aura/Spruce Fog/Barely Volt/Volt', [
                {
                    sizeId: 1,
                    size: 7.5
                },
                {
                    sizeId: 2,
                    size: 8
                },
                {
                    sizeId: 3,
                    size: 8.5
                },
                {
                    sizeId: 4,
                    size: 9
                },
                {
                    sizeId: 5,
                    size: 9.5
                }
            ], 20, 160),
        ];
        //Variables for session
        this.myShopQty = '1';
        this.myShopSize = '7.5';
        this.shoesId = this.route.snapshot.params['key'];
        this.shoesDisplay = this.listShoes[this.shoesId];
    }
    handleLogin(shoesIndex, shoesModel, shoesImage, shoesPrice) {
        sessionStorage.setItem('myCart', this.myShopQty);
    }
    ngOnInit() {
    }
};
ShoesDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shoes-details',
        template: __webpack_require__(/*! raw-loader!./shoes-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/shoes-details/shoes-details.component.html"),
        styles: [__webpack_require__(/*! ./shoes-details.component.css */ "./src/app/shoes-details/shoes-details.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], ShoesDetailsComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Development\frontend\sneakerCity\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map