(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var apiUrl = "/api";
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    ApiService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ApiService.prototype.getChamados = function () {
        return this.http.get(apiUrl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getChamado = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.postChamado = function (data) {
        return this.http.post(apiUrl, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.updateChamado = function (id, data) {
        var url = apiUrl + "/" + id;
        return this.http.put(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.deleteChamado = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chamado_chamado_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chamado/chamado.component */ "./src/app/chamado/chamado.component.ts");
/* harmony import */ var _chamado_detail_chamado_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chamado-detail/chamado-detail.component */ "./src/app/chamado-detail/chamado-detail.component.ts");
/* harmony import */ var _chamado_create_chamado_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chamado-create/chamado-create.component */ "./src/app/chamado-create/chamado-create.component.ts");
/* harmony import */ var _chamado_edit_chamado_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chamado-edit/chamado-edit.component */ "./src/app/chamado-edit/chamado-edit.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    {
        path: 'chamados',
        component: _chamado_chamado_component__WEBPACK_IMPORTED_MODULE_6__["ChamadoComponent"],
        data: { title: 'Chamado List' }
    },
    {
        path: 'chamado-details/:id',
        component: _chamado_detail_chamado_detail_component__WEBPACK_IMPORTED_MODULE_7__["ChamadoDetailComponent"],
        data: { title: 'Chamado Details' }
    },
    {
        path: 'chamado-create',
        component: _chamado_create_chamado_create_component__WEBPACK_IMPORTED_MODULE_8__["ChamadoCreateComponent"],
        data: { title: 'Create Chamado' }
    },
    {
        path: 'chamado-edit/:id',
        component: _chamado_edit_chamado_edit_component__WEBPACK_IMPORTED_MODULE_9__["ChamadoEditComponent"],
        data: { title: 'Edit Chamado' }
    },
    { path: '',
        redirectTo: '/chamados',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _chamado_chamado_component__WEBPACK_IMPORTED_MODULE_6__["ChamadoComponent"],
                _chamado_detail_chamado_detail_component__WEBPACK_IMPORTED_MODULE_7__["ChamadoDetailComponent"],
                _chamado_create_chamado_create_component__WEBPACK_IMPORTED_MODULE_8__["ChamadoCreateComponent"],
                _chamado_edit_chamado_edit_component__WEBPACK_IMPORTED_MODULE_9__["ChamadoEditComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chamado-create/chamado-create.component.css":
/*!*************************************************************!*\
  !*** ./src/app/chamado-create/chamado-create.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width:nth-last-child() {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.button-row {\r\n  margin: 10px 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbWFkby1jcmVhdGUvY2hhbWFkby1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NoYW1hZG8tY3JlYXRlL2NoYW1hZG8tY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoOm50aC1sYXN0LWNoaWxkKCkge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5idXR0b24tcm93IHtcclxuICBtYXJnaW46IDEwcHggMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/chamado-create/chamado-create.component.html":
/*!**************************************************************!*\
  !*** ./src/app/chamado-create/chamado-create.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\r\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/chamados']\"><mat-icon>list</mat-icon></a>\r\n</div>\r\n<form [formGroup]=\"chamadoForm\" (ngSubmit)=\"onFormSubmit(chamadoForm.value)\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"NOME\" formControlName=\"nome\"\r\n           [errorStateMatcher]=\"matcher\">\r\n    <mat-error>\r\n      <span *ngIf=\"!chamadoForm.get('nome').valid && chamadoForm.get('nome').touched\">Please enter NOME</span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Descrição\" formControlName=\"descricao\"\r\n           [errorStateMatcher]=\"matcher\">\r\n    <mat-error>\r\n      <span *ngIf=\"!chamadoForm.get('descricao').valid && chamadoForm.get('descricao').touched\">Please enter Chamado Descrição</span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Situação\" formControlName=\"situacao\"\r\n           [errorStateMatcher]=\"matcher\">\r\n    <mat-error>\r\n      <span *ngIf=\"!chamadoForm.get('situacao').valid && chamadoForm.get('situacao').touched\">Please enter Chamado Situação</span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Atendente\" formControlName=\"atendente\"\r\n           [errorStateMatcher]=\"matcher\">\r\n    <mat-error>\r\n      <span *ngIf=\"!chamadoForm.get('atendente').valid && chamadoForm.get('atendente').touched\">Please enter Atendente</span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <div class=\"button-row\">\r\n    <button type=\"submit\" [disabled]=\"!chamadoForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/chamado-create/chamado-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/chamado-create/chamado-create.component.ts ***!
  \************************************************************/
/*! exports provided: ChamadoCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChamadoCreateComponent", function() { return ChamadoCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChamadoCreateComponent = /** @class */ (function () {
    function ChamadoCreateComponent(router, api, formBuilder) {
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
        this.nome = '';
        this.descricao = '';
        this.situacao = '';
        this.atendente = '';
    }
    ChamadoCreateComponent.prototype.ngOnInit = function () {
        this.chamadoForm = this.formBuilder.group({
            'nome': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'descricao': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'situacao': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'atendente': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    ChamadoCreateComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.api.postChamado(form)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/chamado-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    ChamadoCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chamado-create',
            template: __webpack_require__(/*! ./chamado-create.component.html */ "./src/app/chamado-create/chamado-create.component.html"),
            styles: [__webpack_require__(/*! ./chamado-create.component.css */ "./src/app/chamado-create/chamado-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ChamadoCreateComponent);
    return ChamadoCreateComponent;
}());



/***/ }),

/***/ "./src/app/chamado-detail/chamado-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/chamado-detail/chamado-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n  max-width: 500px;\r\n}\r\n\r\n.button-row {\r\n  margin: 10px 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbWFkby1kZXRhaWwvY2hhbWFkby1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jaGFtYWRvLWRldGFpbC9jaGFtYWRvLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuLmJ1dHRvbi1yb3cge1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/chamado-detail/chamado-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/chamado-detail/chamado-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\r\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/chamados']\"><mat-icon>list</mat-icon></a>\r\n</div>\r\n<mat-card class=\"example-card\">\r\n  <mat-card-header>\r\n    <mat-card-title><h2>{{chamado.descricao}}</h2></mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <dl>\r\n      <dt>NOME:</dt>\r\n      <dd>{{chamado.nome}}</dd>\r\n      <dt>Situação:</dt>\r\n      <dd>{{chamado.situacao}}</dd>\r\n      <dt>Atendente:</dt>\r\n      <dd>{{chamado.atendente}}</dd>\r\n      <dt>Update Date:</dt>\r\n      <dd>{{chamado.updated_date | date}}</dd>\r\n    </dl>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <a mat-raised-button color=\"primary\" [routerLink]=\"['/chamado-edit', chamado._id]\"><mat-icon>edit</mat-icon></a>\r\n    <a mat-raised-button color=\"warn\" (click)=\"deleteChamado(chamado._id)\"><mat-icon>delete</mat-icon></a>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/chamado-detail/chamado-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/chamado-detail/chamado-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ChamadoDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChamadoDetailComponent", function() { return ChamadoDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChamadoDetailComponent = /** @class */ (function () {
    function ChamadoDetailComponent(route, api, router) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.chamado = {};
    }
    ChamadoDetailComponent.prototype.ngOnInit = function () {
        this.getChamadoDetails(this.route.snapshot.params['id']);
    };
    ChamadoDetailComponent.prototype.getChamadoDetails = function (id) {
        var _this = this;
        this.api.getChamado(id)
            .subscribe(function (data) {
            console.log(data);
            _this.chamado = data;
        });
    };
    ChamadoDetailComponent.prototype.deleteChamado = function (id) {
        var _this = this;
        this.api.deleteChamado(id)
            .subscribe(function (res) {
            _this.router.navigate(['/chamados']);
        }, function (err) {
            console.log(err);
        });
    };
    ChamadoDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chamado-detail',
            template: __webpack_require__(/*! ./chamado-detail.component.html */ "./src/app/chamado-detail/chamado-detail.component.html"),
            styles: [__webpack_require__(/*! ./chamado-detail.component.css */ "./src/app/chamado-detail/chamado-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ChamadoDetailComponent);
    return ChamadoDetailComponent;
}());



/***/ }),

/***/ "./src/app/chamado-edit/chamado-edit.component.css":
/*!*********************************************************!*\
  !*** ./src/app/chamado-edit/chamado-edit.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width:nth-last-child() {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.button-row {\r\n  margin: 10px 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbWFkby1lZGl0L2NoYW1hZG8tZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY2hhbWFkby1lZGl0L2NoYW1hZG8tZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aDpudGgtbGFzdC1jaGlsZCgpIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLXJvdyB7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/chamado-edit/chamado-edit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/chamado-edit/chamado-edit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\r\n  <a mat-raised-button color=\"primary\" (click)=\"chamadoDetails()\"><mat-icon>show</mat-icon></a>\r\n</div>\r\n<form [formGroup]=\"chamadoForm\" (ngSubmit)=\"onFormSubmit(chamadoForm.value)\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"NOME\" formControlName=\"nome\"\r\n           [errorStateMatcher]=\"matcher\">\r\n    <mat-error>\r\n      <span *ngIf=\"!chamadoForm.get('nome').valid && chamadoForm.get('nome').touched\">Please enter NOME</span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Descrição\" formControlName=\"descricao\"\r\n           [errorStateMatcher]=\"matcher\">\r\n    <mat-error>\r\n      <span *ngIf=\"!chamadoForm.get('descricao').valid && chamadoForm.get('descricao').touched\">Please enter Chamado Descrição</span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Situação\" formControlName=\"situacao\"\r\n           [errorStateMatcher]=\"matcher\">\r\n    <mat-error>\r\n      <span *ngIf=\"!chamadoForm.get('situacao').valid && chamadoForm.get('situacao').touched\">Please enter Chamado Situação</span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Atendente\" formControlName=\"atendente\"\r\n           [errorStateMatcher]=\"matcher\">\r\n    <mat-error>\r\n      <span *ngIf=\"!chamadoForm.get('atendente').valid && chamadoForm.get('atendente').touched\">Please enter Atendente</span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <div class=\"button-row\">\r\n    <button type=\"submit\" [disabled]=\"!chamadoForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/chamado-edit/chamado-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/chamado-edit/chamado-edit.component.ts ***!
  \********************************************************/
/*! exports provided: ChamadoEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChamadoEditComponent", function() { return ChamadoEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChamadoEditComponent = /** @class */ (function () {
    function ChamadoEditComponent(router, route, api, formBuilder) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.formBuilder = formBuilder;
        this.id = '';
        this.nome = '';
        this.descricao = '';
        this.situacao = '';
        this.atendente = '';
    }
    ChamadoEditComponent.prototype.ngOnInit = function () {
        this.getChamado(this.route.snapshot.params['id']);
        this.chamadoForm = this.formBuilder.group({
            'nome': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'descricao': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'situacao': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'atendente': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    ChamadoEditComponent.prototype.getChamado = function (id) {
        var _this = this;
        this.api.getChamado(id).subscribe(function (data) {
            _this.id = data._id;
            _this.chamadoForm.setValue({
                nome: data.nome,
                descricao: data.descricao,
                situacao: data.situacao,
                atendente: data.atendente
            });
        });
    };
    ChamadoEditComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.api.updateChamado(this.id, form)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/chamado-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    ChamadoEditComponent.prototype.chamadoDetails = function () {
        this.router.navigate(['/chamado-details', this.id]);
    };
    ChamadoEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chamado-edit',
            template: __webpack_require__(/*! ./chamado-edit.component.html */ "./src/app/chamado-edit/chamado-edit.component.html"),
            styles: [__webpack_require__(/*! ./chamado-edit.component.css */ "./src/app/chamado-edit/chamado-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ChamadoEditComponent);
    return ChamadoEditComponent;
}());



/***/ }),

/***/ "./src/app/chamado/chamado.component.css":
/*!***********************************************!*\
  !*** ./src/app/chamado/chamado.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-height: 500px;\r\n  min-width: 300px;\r\n  overflow: auto;\r\n}\r\n\r\n.nome-col {\r\n  flex: 0 0 100px !important;\r\n  white-space: unset !important;\r\n}\r\n\r\n.button-row {\r\n  margin: 10px 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbWFkby9jaGFtYWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY2hhbWFkby9jaGFtYWRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4ubm9tZS1jb2wge1xyXG4gIGZsZXg6IDAgMCAxMDBweCAhaW1wb3J0YW50O1xyXG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnV0dG9uLXJvdyB7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/chamado/chamado.component.html":
/*!************************************************!*\
  !*** ./src/app/chamado/chamado.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\r\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/chamado-create']\"><mat-icon>add</mat-icon></a>\r\n</div>\r\n<div class=\"example-container mat-elevation-z8\">\r\n  <table mat-table #table [dataSource]=\"dataSource\">\r\n\r\n    <!--- Note that these columns can be defined in any order.\r\n          The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n    <!-- Title Column -->\r\n    <ng-container matColumnDef=\"nome\">\r\n      <th mat-header-cell *matHeaderCellDef> NOME </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"nome-col\"> {{element.nome}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Title Column -->\r\n    <ng-container matColumnDef=\"descricao\">\r\n      <th mat-header-cell *matHeaderCellDef> Descrição </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.descricao}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Situação Column -->\r\n    <ng-container matColumnDef=\"situacao\">\r\n      <th mat-header-cell *matHeaderCellDef> Situação </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.situacao}} </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [routerLink]=\"['/chamado-details/', row._id]\"></tr>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/chamado/chamado.component.ts":
/*!**********************************************!*\
  !*** ./src/app/chamado/chamado.component.ts ***!
  \**********************************************/
/*! exports provided: ChamadoComponent, ChamadoDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChamadoComponent", function() { return ChamadoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChamadoDataSource", function() { return ChamadoDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChamadoComponent = /** @class */ (function () {
    function ChamadoComponent(api) {
        this.api = api;
        this.displayedColumns = ['nome', 'descricao', 'situacao'];
        this.dataSource = new ChamadoDataSource(this.api);
    }
    ChamadoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getChamados()
            .subscribe(function (res) {
            console.log(res);
            _this.chamados = res;
        }, function (err) {
            console.log(err);
        });
    };
    ChamadoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chamado',
            template: __webpack_require__(/*! ./chamado.component.html */ "./src/app/chamado/chamado.component.html"),
            styles: [__webpack_require__(/*! ./chamado.component.css */ "./src/app/chamado/chamado.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], ChamadoComponent);
    return ChamadoComponent;
}());

var ChamadoDataSource = /** @class */ (function (_super) {
    __extends(ChamadoDataSource, _super);
    function ChamadoDataSource(api) {
        var _this = _super.call(this) || this;
        _this.api = api;
        return _this;
    }
    ChamadoDataSource.prototype.connect = function () {
        return this.api.getChamados();
    };
    ChamadoDataSource.prototype.disconnect = function () {
    };
    return ChamadoDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]));



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\git\TestIBM\crudChamados\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map