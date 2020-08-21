(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n    <ion-title\n      ><ion-label class=\"\" position=\"stacked\" color=\"primary\">\n        Welcome to Task Tracker\n      </ion-label></ion-title\n    >\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"\">\n      <ion-col\n        size-xs=\"12\"\n        size-sm=\"12\"\n        size-med=\"3\"\n        size-lg=\"3\"\n        offset-med=\"4\"\n        offset-lg=\"4\"\n      >\n        <ion-card>\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col\n              size=\"auto\"\n              style=\"text-align: center !important;\"\n              style=\"height: 80px;\"\n            >\n              <ion-avatar name=\"avatar\" class=\"ion-no-padding ion-margin\">\n                <img src=\"../assets/images/avatar.svg\" />\n              </ion-avatar>\n            </ion-col>\n\n  \n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">\n                  Email <ion-text color=\"danger\">*</ion-text></ion-label\n                >\n                <ion-input\n                  type=\"email\"\n                  required\n                  #txtemail\n                  id=\"txtemail\"\n                  [(ngModel)]=\"email\"\n                  style=\"font-size: small;\"\n                ></ion-input\n              ></ion-item>\n              <ion-item>\n                <ion-label\n                  position=\"floating\"\n                  color=\"medium\"\n                  aria-setsize=\"small\"\n                  >Password <ion-text color=\"danger\">*</ion-text></ion-label\n                >\n                <ion-input\n                  type=\"password\"\n                  #txtpass\n                  id=\"txtpass\"\n                  [(ngModel)]=\"pass\"\n                  required\n                ></ion-input\n              ></ion-item>\n              <ion-item>\n                <ion-checkbox color=\"primary\" position=\"fixed\"></ion-checkbox>\n                <ion-label color=\"primary\" mode=\"md\" style=\"padding-left: 4px;\"\n                  ><h3>Remember My Credentials</h3>\n                </ion-label>\n              </ion-item>\n              <div\n                class=\"ion-padding ion-no-margin\"\n                style=\"text-align: center !important; height:100px;\"\n              >\n                <div style=\"height:8px;  text-align: center !important;\">\n                  <ion-spinner style=\"position: relative;\"   *ngIf=\"loading\" name=\"dots\"></ion-spinner>\n                </div>\n\n                <ion-button\n                  [disabled]=\" loading \"\n                  expand=\"block\"\n                  type=\"button\"\n                  (click)=\"signIn()\"\n                  class=\"ion-margin\"\n                  >login</ion-button\n                >\n              </div>\n              <div\n                *ngIf=\"message\"\n                class=\"ion-no-padding ion-margin-bottom ion-margin-horizontal\"\n              >\n                <ion-chip\n                  [color]=\"\n                messageType == 1\n                  ? 'success'\n                  : messageType == 2\n                  ? 'warning'\n                  : 'danger'\n              \"\n                  class=\"ion-justify-content-center\"\n                  style=\"width: 98%;\"\n                >\n                  <ion-label> {{message}}</ion-label>\n                </ion-chip>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/Pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/Pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/Pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/Pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/Pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/Pages/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/Pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/Pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/Pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/Pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_Services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/users.service */ "./src/app/Services/users.service.ts");
/* harmony import */ var src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/authService.service */ "./src/app/Services/authService.service.ts");




let LoginPage = class LoginPage {
    constructor(auth, userServ) {
        this.auth = auth;
        this.userServ = userServ;
        if (auth.isLoggedIn()) {
            auth.redirectToHome();
        }
        this.auth.errmessage.subscribe((msg) => {
            this.message = msg;
        });
    }
    ngOnInit() {
        // this.authServ.auth.sharedUser.subscribe((user) => (this.email = user));
        // this.authServ.auth.sharedLoggedIn.subscribe(
        //   (loggedIn) => (this.loggedIn = loggedIn)
        // );
    }
    signIn() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            let errmessage = "";
            yield new Promise(() => {
                console.log("Sign In");
                setTimeout(() => {
                    try {
                        this.auth.signIn(this.email, this.pass);
                        this.auth.userChange.emit(this.auth.getLoggedUser());
                        this.loading = false;
                    }
                    catch (err) {
                        this.loading = false;
                        this.message = err;
                    }
                }, 1000);
            }).catch((error) => (this.message = error));
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_Services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/Pages/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map