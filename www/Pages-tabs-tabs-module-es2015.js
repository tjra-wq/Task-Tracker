(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/tabs/tabs.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/tabs/tabs.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n<ion-tabs >\r\n  <ion-tab-bar  >\r\n    <ion-tab-button tab=\"team-progress\">\r\n      <ion-icon name=\"people-outline\"></ion-icon>\r\n      <ion-label mode=\"md\" style=\"font-size: smaller; font-stretch: condensed;\" >Team Progress</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"mytasks\">\r\n      <ion-icon name=\"list-outline\"></ion-icon>\r\n      <ion-label mode=\"md\" style=\"font-size: smaller;font-stretch: condensed;\"  >My Tasks</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"reports\">\r\n      <ion-icon  name=\"bar-chart-outline\"></ion-icon>\r\n      <ion-label mode=\"md\" style=\"font-size: smaller;font-stretch: condensed;\"  >Reports</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/Pages/tabs/tabs-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/Pages/tabs/tabs-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/Pages/tabs/tabs.page.ts");




// const routes: Routes = [
//   {
//     path: "",
//     component: TabsPage,
//       // pathMatch: "prefix",
//     // pathMatch:"full",
//     // redirectTo:"team-progress",
//     children: [
//       {
//         path: "team-progress", // loadChildren: () => //   import("../tab1/tab1.module").then((m) => m.Tab1PageModule), // loadChildren:'../tab1/tab1.module#Tab1PageModule',
//         //component:Tab1Page, //Eager Load
//         loadChildren: () =>
//           import("../tab1/tab1.module").then((m) => m.Tab1PageModule),
//       },
//       {
//         path: "reports",
//         loadChildren: () =>
//           import("../tab2/tab2.module").then((m) => m.Tab2PageModule),
//       },
//       {
//         path: "mytasks",
//         loadChildren: () =>
//           import("../tab3/tab3.module").then((m) => m.Tab3PageModule),
//         canActivate: [ActivateGuard],
//       },
//       {
//         path: "home",
//         loadChildren: () =>
//           import("../home/home.module").then((m) => m.HomePageModule),
//       },
//     ],
//   },
// ];
const routes = [
    {
        path: "tasktracker",
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: "home",
                children: [
                    {
                        path: "",
                        loadChildren: "../home/home.module#HomePageModule",
                    },
                ],
            },
            {
                path: "team-progress",
                children: [
                    {
                        path: "",
                        loadChildren: "../tab1/tab1.module#Tab1PageModule",
                    },
                ],
            },
            {
                path: "mytasks",
                children: [
                    {
                        path: "",
                        loadChildren: "../tab3/tab3.module#Tab3PageModule",
                    },
                ],
            },
            {
                path: "reports",
                children: [
                    {
                        path: "",
                        loadChildren: "../tab2/tab2.module#Tab2PageModule",
                    },
                ],
            },
            {
                path: "login",
                children: [
                    {
                        path: "",
                        loadChildren: "../login/login.module#LoginPageModule",
                    },
                ],
            },
            // { path: 'tab2/products/:id', loadChildren: '../tab2/view-product/view-product.module#ViewProductPageModule' },
            {
                path: "reports",
                children: [
                    {
                        path: "",
                        loadChildren: "../tab3/tab3.module#Tab3PageModule",
                    },
                ],
            },
            {
                path: "",
                redirectTo: "/tasktracker/home",
                pathMatch: "full",
            },
        ],
    },
    {
        path: "",
        redirectTo: "index",
        pathMatch: "full",
    },
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/Pages/tabs/tabs.module.ts":
/*!*******************************************!*\
  !*** ./src/app/Pages/tabs/tabs.module.ts ***!
  \*******************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/Pages/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/Pages/tabs/tabs.page.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"],
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]],
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/Pages/tabs/tabs.page.scss":
/*!*******************************************!*\
  !*** ./src/app/Pages/tabs/tabs.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: none;\n  background-image: url('homeBg.png');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvdGFicy9EOlxcV29ya1xcTFRJXFxQcm9qZWN0c1xcSW9uaWNcXFRhc2tUcmFja2VyL3NyY1xcYXBwXFxQYWdlc1xcdGFic1xcdGFicy5wYWdlLnNjc3MiLCJzcmMvYXBwL1BhZ2VzL3RhYnMvdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWVCZy5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZSA7XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lQmcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/Pages/tabs/tabs.page.ts":
/*!*****************************************!*\
  !*** ./src/app/Pages/tabs/tabs.page.ts ***!
  \*****************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/authService.service */ "./src/app/Services/authService.service.ts");



let TabsPage = class TabsPage {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
        let us = this.auth.getLoggedUser();
        console.log("TabsPage-ngOnInit-ngOnInit", us);
        if (us) {
            this.auth.userChange.emit(us);
        }
    }
};
TabsPage.ctorParameters = () => [
    { type: src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/tabs/tabs.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabs.page.scss */ "./src/app/Pages/tabs/tabs.page.scss")).default]
    })
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=Pages-tabs-tabs-module-es2015.js.map