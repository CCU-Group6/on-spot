(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n      <router-outlet></router-outlet>\r\n</body>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/confirm-screen/confirm-screen.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/confirm-screen/confirm-screen.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<button mat-button class=\"backbutton\" routerLink=\"{{backLink}}\"><img src=\"assets/img/go_back_color.png\" width=\"32px\"\r\n        color=\"#647c84\" />Anterior</button>\r\n\r\n<div class=\"centered-content\">\r\n    <h3 id=\"title\">{{paymentInfo.zoneTitle}}</h3>\r\n\r\n    <p class=\"parkInfo\">{{paymentInfo.parkingTime}}</p>\r\n    <p class=\"parkInfo\">Zona {{paymentInfo.zoneColor}}</p>\r\n\r\n    <p class=\"parkInfo\">{{paymentInfo.priceToPay}}€</p>\r\n\r\n    <p id = \"discountInfo\" class = \"discountInfo\"></p>\r\n    <button id=\"discount\" type=\"button\" class=\"btn btn-outline-secondary\" [routerLink]=\"['/discountScreen']\">Aplicar\r\n        Desconto</button>\r\n\r\n    <h3 id=\"paymentMethod\">{{paymentMethod}}</h3>\r\n    <button id=\"change\" type=\"button\" class=\"btn btn-link\" [routerLink]=\"'/paymentMethod'\">Alterar método de pagamento</button>\r\n\r\n    <div class=\"buttons\">\r\n        <button id=\"cancelButton\" type=\"button\" class=\"btn btn-outline-primary\" [routerLink]=\"['/defaultScreen']\">Cancelar</button>\r\n        <button id=\"nextButton\" type=\"button\" class=\"btn btn-primary\" (click)=\"onConfirm()\" [routerLink]=\"['/defaultScreen']\" >Confirmar</button>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/default-screen/default-screen.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/default-screen/default-screen.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"sideMenu\">\r\n  <div id=\"sideMenuProfile\">\r\n    <h1 href=\"\" id = \"userName\">{{userDetails.name}}</h1>\r\n    <h2 href=\"\" id = \"discountText\" class=\"smallText\">Saldo: {{userDetails.balance}}€</h2>\r\n  </div>\r\n  <div id = \"sideMenuTabs\">\r\n    <hr class=\"style1\">\r\n    <a href=\"\">Histórico</a>\r\n    <hr class=\"style1\">\r\n    <a href=\"\">Método de Pagamento</a>\r\n    <hr class=\"style1\">\r\n    <a href=\"\">Ajuda</a>\r\n    <hr class=\"style1\">\r\n    <h1 class =\"smallText\"><i>Todos os valores apresentados são apenas previsões</i></h1>\r\n  </div>\r\n  <button mat-button id = \"logoutButton\" (click) = \"userLogOut()\" [routerLink]=\"['/login']\">Logout</button>\r\n</div>\r\n<span style=\"font-size:30px;cursor:pointer\" id = \"menuIcon\" (click)=\"openMenu()\">\r\n  <img src=\"assets/img/menu_icon.png\" width=\"80px\" />\r\n</span>\r\n\r\n<body (click) = \"closeMenu()\">\r\n  <div class=\"centered-content\">\r\n    <div *ngIf = \"bool\">\r\n      <div id=\"parkedInformations\">\r\n        <div id=\"zoneText\">\r\n          <div id=\"zoneTitle\" style=\"font-size: 19px;\">Estacionado</div>\r\n        </div>\r\n        <div id=\"myProgress\">\r\n          <div id=\"myBar\"></div>\r\n        </div>\r\n        <table style=\"margin-left: 7.5%;\" width=\"100%;\">\r\n          <tr>\r\n            <td><button mat-raised-button (click) = \"cancelPark()\" id = \"cancelParkButton\" class=\"btn btn-primary\" >Cancelar</button></td>\r\n            <td><button id = \"rechargeParkButton\" class=\"btn btn-primary\" [routerLink]=\"['/parkingTimeScreen']\">Prolongar</button></td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n   <!--<div *ngIf = \"!isSelected\" class = \"Zonelegend\">\r\n      <h1 id = \"legendTitle\">Zona: </h1>\r\n      <div id = \"greenZone\">\r\n        <tr>\r\n          <td class=\"littleCircle\" id = \"green\"></td>\r\n          <td>Verde</td>\r\n        </tr>\r\n      </div>\r\n      <div id = \"yellowZone\">\r\n        <tr>\r\n          <td class=\"littleCircle\" id = \"yellow\"></td>\r\n          <td>Amarela</td>\r\n        </tr>\r\n      </div>\r\n      <div id = \"redZone\">\r\n        <tr>\r\n          <td class=\"littleCircle\" id = \"red\"></td>\r\n          <td>Vermelha</td>\r\n        </tr>\r\n      </div>\r\n    </div> -->\r\n    <app-map [mapZoom] = \"mapZoom\" (messageEvent) = \"receiveMessage($event)\"></app-map>\r\n    <div *ngIf = \"!bool\" id=\"zoneInformations\" >\r\n        <span id=\"scroll_image\" (click)=\"closeInformations()\">\r\n            <img id=\"scroll_image\" src=\"assets/img/scroll_down.png\" width=\"64px\" (click)=\"closeInformations()\"/>\r\n        </span>\r\n        <div id=\"zoneText\">\r\n          <div id=\"zoneTitle\" style=\"font-size: 19px;\">{{message.zoneTitle}}</div>\r\n          <div id=\"zoneCharge\">{{message.zoneCharge}}€/h</div>\r\n          <div id=\"zoneColor\">Zona {{message.zoneColor}}</div>\r\n        </div>\r\n        <button mat-raised-button (click) = \"setZoneInformation()\" id = \"parkButton\" class=\"btn btn-primary\" [routerLink]=\"['/parkingTimeScreen']\">Estacionar</button>\r\n    </div>\r\n  </div>\r\n</body>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/discount-screen/discount-screen.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/discount-screen/discount-screen.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<button mat-button class=\"backbutton\" routerLink=\"{{backLink}}\"><img src=\"assets/img/go_back_color.png\" width=\"32px\"\r\n        color=\"#647c84\" />Anterior</button>\r\n\r\n<div class=\"centered-content\">\r\n\r\n    <h4 id=\"title\">Saldo: {{userDetails.balance}}€</h4>\r\n    <h4 id=\"discountDisclaimer\">Introduza o valor que pretende descontar</h4>\r\n\r\n    <div class=\"form-group\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"numpad\" mbsc-numpad-decimal\r\n            [mbsc-options]=\"numpadSettings\" placeholder=\"Valor\" />\r\n    </div>\r\n\r\n    <button type=\"button\" id=\"next_button\" class=\"btn btn-primary\" [routerLink]=\"['/confirmScreen']\">Descontar\r\n    </button>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/informations-screen/informations-screen.component.html": 
        /*!*************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/informations-screen/informations-screen.component.html ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<button mat-button class=\"backbutton\" routerLink=\"{{rtLink}}\"><img src=\"assets/img/go_back_color.png\" width=\"32px\"\r\n    color=\"#647c84\" />Anterior</button>\r\n<div class=\"centered-content\">\r\n\r\n  <h2 id=\"title\">\r\n    Bem vindo à OnSpot\r\n  </h2>\r\n\r\n  <h3 class=\"subtitle\">\r\n    Introduza os Seguintes Dados Adicionais\r\n  </h3>\r\n\r\n  <form id=\"register_form\">\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" placeholder=\"Nome\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" [(ngModel)]=\"phoneNumber\" name=\"phoneNumber\" class=\"form-control\" placeholder=\"Telemóvel\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" [(ngModel)]=\"licensePlate\" name=\"licensePlate\" class=\"form-control\" placeholder=\"Matrícula\">\r\n    </div>\r\n\r\n    <div *ngIf=\"invalidMessage; else elseBlock\" class=\"alert alert-dismissible alert-danger\">\r\n      <strong>{{invalidMessage}}</strong>\r\n    </div>\r\n\r\n    <ng-template #elseBlock>\r\n      <div class=\"alert alert-dismissible\">\r\n        <strong>AAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAA</strong>\r\n      </div>\r\n    </ng-template>\r\n\r\n    <button type=\"button\" id=\"next_button\" class=\"btn btn-primary\" (click)=\"registerInformation()\">Seguinte\r\n    </button>\r\n\r\n  </form>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-container/main-container.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-container/main-container.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"centered-content\">\r\n\r\n  <img id=\"logo_img\" src=\"assets/img/logo.png\" width=\"150px\" />\r\n\r\n  <h2 id=\"title\">OnSpot</h2>\r\n\r\n  <form id=\"login_form\">\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" [(ngModel)]=\"phoneNumber\" name=\"phoneNumber\" class=\"form-control\" placeholder=\"Número de Telefone\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n    </div>\r\n\r\n    <div *ngIf=\"invalidMessage; else elseBlock\" class=\"alert alert-dismissible alert-danger\">\r\n      <strong>{{invalidMessage}}</strong>\r\n    </div>\r\n\r\n    <ng-template #elseBlock>\r\n      <div class=\"alert alert-dismissible\">\r\n        <strong>AAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAA</strong>\r\n      </div>\r\n    </ng-template>\r\n\r\n    <button type=\"button\" id=\"next_button\" class=\"btn btn-primary\" (click)=\"checkUser()\">Entrar\r\n    </button>\r\n  </form>\r\n\r\n  <div id=\"registerContainer\">\r\n    <h1 id=\"writtenQuestion\">Não tens conta?</h1>\r\n    <button class=\"writtenButton\" routerLink=\"/registerAccount\">Regista-te aqui!</button>\r\n  </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/map/map.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/map/map.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <script src='https://api.mapbox.com/mapbox-gl-js/v1.0.0/mapbox-gl.js'></script>\r\n<link href='https://api.mapbox.com/mapbox-gl-js/v1.0.0/mapbox-gl.css' rel='stylesheet' /> -->\r\n\r\n<div *ngIf = \"lat && lng\">\r\n\r\n    <agm-map [latitude] = \"lat\" [longitude] = \"lng\" [zoom]=\"mapZoom\" [minZoom] = \"12\" [disableDefaultUI] = \"bool\" [streetViewControl]=\"false\" [styles] = \"mapStyle\" (zoomChange) = \"zoomChange($event)\" [usePanning] = \"true\">\r\n        <agm-data-layer [geoJson] = \"Zones\" (layerClick) = \"onZoneClick($event);\" [style] = \"styleF\" (parkedEvent) = \"zoneParkingCommited(-1, $event)\">\r\n            <agm-overlay *ngFor= \"let item of Zones.features\" [latitude] = \"latMid(item)\" [longitude] = \"lngMid(item)\">\r\n                <div class=\"layerSpots\" *ngIf = \"mapZoom>13 && mapZoom<15\">\r\n                    <img src=\"assets/img/car.png\" style=\"display: inline;\" height=\"14px\"/>\r\n                    {{item.properties.spots}}\r\n                </div>\r\n            </agm-overlay>\r\n        </agm-data-layer>\r\n\r\n        <agm-data-layer *ngIf = \"mapZoom >= 15\" [geoJson] = \"ZonesZoomed\" (layerClick) = \"onZoneClick($event)\" [style] = \"styleFunc\" (parkedEvent) = \"zoneParkingCommited(-1, $event)\">\r\n                <agm-overlay *ngFor= \"let item of ZonesZoomed.features\" [latitude] = \"latMid(item)\" [longitude] = \"lngMid(item)\">\r\n                    <div class=\"layerSpots\" *ngIf = \"mapZoom>14\">\r\n                            <img src=\"assets/img/car.png\" style=\"display: inline;\" height=\"14px\"/>\r\n                            {{item.properties.spots}}\r\n                    </div>\r\n                </agm-overlay>\r\n            </agm-data-layer>\r\n\r\n        <div *ngIf = \"parked\">   \r\n            <agm-marker [iconUrl] = \"'./assets/img/parked.png'\"  [latitude] = \"parkedLat\" [longitude] = \"parkedLng\"></agm-marker>\r\n        </div>\r\n        <div>   \r\n            <agm-marker [iconUrl] = \"'./assets/img/location.png'\"  [latitude] = \"cLat\" [longitude] = \"cLng\"></agm-marker>\r\n        </div>\r\n    </agm-map>\r\n\r\n</div>\r\n\r\n<!-- <div id=\"map\" class=\"match-parent\"></div> -->");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/parking-time-screen/parking-time-screen.component.html": 
        /*!*************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/parking-time-screen/parking-time-screen.component.html ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<button mat-button class=\"backbutton\" routerLink=\"{{rtLink}}\"><img src=\"assets/img/go_back_color.png\" width=\"32px\"\r\n        color=\"#647c84\" />Anterior</button>\r\n\r\n<div class=\"centered-content\">\r\n    <h2 id=\"title\">\r\n        Tempo de Estacionamento\r\n    </h2>\r\n\r\n    <mbsc-form>\r\n        <mbsc-timespan id=\"time\" [(ngModel)]=\"timespanInline\" [options]=\"timespanInlineSettings\"></mbsc-timespan>\r\n    </mbsc-form>\r\n\r\n    <div class=\"subtitle\">Valor a pagar</div>\r\n\r\n    <div class=\"parkingPrice\">{{selectedTime.price}}€</div>\r\n\r\n    <button type=\"button\" id=\"next_button\" class=\"btn btn-primary\" [routerLink]=\"frontLink\">Seguinte\r\n    </button>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payment-method-screen/payment-method-screen.component.html": 
        /*!*****************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/payment-method-screen/payment-method-screen.component.html ***!
          \*****************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<button mat-button class=\"backbutton\" routerLink=\"{{rtLink}}\"><img src=\"assets/img/go_back_color.png\"\r\n    width=\"32px\" />Anterior</button>\r\n\r\n<div class=\"centered-content\">\r\n  <h2 class=\"subtitle\">Escolha o seu método de pagamento</h2>\r\n  <tr>\r\n    <button class=\"paymentButtons\" (click)=\"paymentMethod = 'Cartão de Crédito'\"\r\n      [ngClass]=\"paymentMethod =='Cartão de Crédito' ? 'paymentButtonsActive' : 'paymentButtons'\">\r\n      <img class=\"buttonImage\" src=\"assets/img/credit_card.png\" />\r\n      <h6 class=\"buttonText\">Cartão de crédito</h6>\r\n    </button>\r\n    <button class=\"paymentButtons\" (click)=\"paymentMethod = 'ePark'\"\r\n      [ngClass]=\"paymentMethod =='ePark' ? 'paymentButtonsActive' : 'paymentButtons'\">\r\n      <img class=\"buttonImage\" src=\"assets/img/e_mel.png\" />\r\n      <h6 class=\"buttonText\">ePark</h6>\r\n    </button>\r\n  </tr>\r\n  <tr>\r\n    <button class=\"paymentButtons\" (click)=\"paymentMethod = 'MbWay'\"\r\n      [ngClass]=\"paymentMethod =='MbWay' ? 'paymentButtonsActive' : 'paymentButtons'\">\r\n      <img class=\"buttonImage\" src=\"assets/img/mb_way.png\" />\r\n      <h6 class=\"buttonText\">MB Way</h6>\r\n    </button>\r\n    <button class=\"paymentButtons\" (click)=\"paymentMethod = 'Parquimetro'\"\r\n      [ngClass]=\"paymentMethod =='Parquimetro' ? 'paymentButtonsActive' : 'paymentButtons'\">\r\n      <img class=\"buttonImage\" src=\"assets/img/parking_meter.png\" />\r\n      <h6 class=\"buttonText\">Parquímetro</h6>\r\n    </button>\r\n  </tr>\r\n  <button mat-raised-button [disabled]=\"!paymentMethod\" type=\"button\" class=\"continueButton\"\r\n    [ngClass]=\"!paymentMthod ? 'continueButton' : 'disabledContinueButton'\" (click)=\"registerInformation()\">\r\n    <font color=\"white\">Continuar</font>\r\n  </button>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phone-footer/phone-footer.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phone-footer/phone-footer.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <button mat-button id=\"continueButton\" routerLink = \"{{rtLink}}\">Continuar</button>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phone-header/phone-header.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/phone-header/phone-header.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <button mat-button class=\"backbutton\" routerLink = \"{{rtLink}}\"><img src=\"assets/img/go_back.png\" width=\"32px\"/></button>\r\n  <div class=\"screenTitle\">{{title}}</div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popup-screen/popup-screen.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/popup-screen/popup-screen.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"centered-content\">\r\n    <h1 id=\"title\">Pagamento bem Sucedido</h1>\r\n    <h3>{{zone}}</h3>\r\n    <h3>Acumulou {{saldo}}€</h3>\r\n    <button type=\"button\" id=\"next_button\" class=\"btn btn-primary\" (click)=\"close()\">OK\r\n    </button>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"centered-content\">\r\n  <h2 id=\"title\">\r\n    Bem vindo à OnSpot\r\n  </h2>\r\n\r\n  <h3 class=\"subtitle\">\r\n    Introduza os dados para LogIn\r\n  </h3>\r\n\r\n  <form id=\"register_form\">\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <input type=\"password\" [(ngModel)]=\"passwordConfirm\" name=\"passwordConfirm\" class=\"form-control\"\r\n        placeholder=\"Confirme a Password\">\r\n    </div>\r\n\r\n    <div *ngIf=\"invalidMessage; else elseBlock\" class=\"alert alert-dismissible alert-danger\">\r\n      <strong>{{invalidMessage}}</strong>\r\n    </div>\r\n\r\n    <ng-template #elseBlock>\r\n      <div class=\"alert alert-dismissible\">\r\n        <strong>AAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAA</strong>\r\n      </div>\r\n    </ng-template>\r\n\r\n    <button type=\"button\" id=\"next_button\" class=\"btn btn-primary\" (click)=\"sendMessage()\">Seguinte\r\n    </button>\r\n\r\n    <button id=\"writtenButton\" class=\"btn btn-link\" [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\">Já tenho\r\n      conta</button>\r\n  </form>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
            /* harmony import */ var _components_main_container_main_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main-container/main-container.component */ "./src/app/components/main-container/main-container.component.ts");
            /* harmony import */ var _components_default_screen_default_screen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/default-screen/default-screen.component */ "./src/app/components/default-screen/default-screen.component.ts");
            /* harmony import */ var _components_informations_screen_informations_screen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/informations-screen/informations-screen.component */ "./src/app/components/informations-screen/informations-screen.component.ts");
            /* harmony import */ var _components_payment_method_screen_payment_method_screen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/payment-method-screen/payment-method-screen.component */ "./src/app/components/payment-method-screen/payment-method-screen.component.ts");
            /* harmony import */ var _components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/auth/auth.guard */ "./src/app/components/auth/auth.guard.ts");
            /* harmony import */ var _components_parking_time_screen_parking_time_screen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/parking-time-screen/parking-time-screen.component */ "./src/app/components/parking-time-screen/parking-time-screen.component.ts");
            /* harmony import */ var _components_confirm_screen_confirm_screen_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/confirm-screen/confirm-screen.component */ "./src/app/components/confirm-screen/confirm-screen.component.ts");
            /* harmony import */ var _components_discount_screen_discount_screen_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/discount-screen/discount-screen.component */ "./src/app/components/discount-screen/discount-screen.component.ts");
            //canActivate: [AuthGuard]
            var routes = [
                { path: '', redirectTo: '/defaultScreen', pathMatch: 'full' },
                { path: 'login', component: _components_main_container_main_container_component__WEBPACK_IMPORTED_MODULE_4__["MainContainerComponent"] },
                { path: 'registerAccount', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
                { path: 'registerInformation', component: _components_informations_screen_informations_screen_component__WEBPACK_IMPORTED_MODULE_6__["InformationsScreenComponent"] },
                { path: 'paymentMethod', component: _components_payment_method_screen_payment_method_screen_component__WEBPACK_IMPORTED_MODULE_7__["PaymentMethodScreenComponent"] },
                { path: 'defaultScreen', component: _components_default_screen_default_screen_component__WEBPACK_IMPORTED_MODULE_5__["DefaultScreenComponent"], canActivate: [_components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
                { path: 'parkingTimeScreen', component: _components_parking_time_screen_parking_time_screen_component__WEBPACK_IMPORTED_MODULE_9__["ParkingTimeScreenComponent"], canActivate: [_components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
                { path: 'confirmScreen', component: _components_confirm_screen_confirm_screen_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmScreenComponent"], canActivate: [_components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
                { path: 'discountScreen', component: _components_discount_screen_discount_screen_component__WEBPACK_IMPORTED_MODULE_11__["DiscountScreenComponent"], canActivate: [_components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".toolbarButtons {\r\n  padding: 10px;\r\n  background: none;\r\n  border-radius: 5%;\r\n  border: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyQnV0dG9ucyB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'tentativa';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mobiscroll/angular */ "./node_modules/@mobiscroll/angular/dist/esm5/mobiscroll.angular.min.js");
            /* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _components_main_container_main_container_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/main-container/main-container.component */ "./src/app/components/main-container/main-container.component.ts");
            /* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
            /* harmony import */ var _components_default_screen_default_screen_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/default-screen/default-screen.component */ "./src/app/components/default-screen/default-screen.component.ts");
            /* harmony import */ var _components_phone_header_phone_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/phone-header/phone-header.component */ "./src/app/components/phone-header/phone-header.component.ts");
            /* harmony import */ var _components_phone_footer_phone_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/phone-footer/phone-footer.component */ "./src/app/components/phone-footer/phone-footer.component.ts");
            /* harmony import */ var _components_informations_screen_informations_screen_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/informations-screen/informations-screen.component */ "./src/app/components/informations-screen/informations-screen.component.ts");
            /* harmony import */ var _components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/auth/auth.guard */ "./src/app/components/auth/auth.guard.ts");
            /* harmony import */ var _components_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/auth/auth.interceptor */ "./src/app/components/auth/auth.interceptor.ts");
            /* harmony import */ var _components_payment_method_screen_payment_method_screen_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/payment-method-screen/payment-method-screen.component */ "./src/app/components/payment-method-screen/payment-method-screen.component.ts");
            /* harmony import */ var _components_parking_time_screen_parking_time_screen_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/parking-time-screen/parking-time-screen.component */ "./src/app/components/parking-time-screen/parking-time-screen.component.ts");
            /* harmony import */ var _components_confirm_screen_confirm_screen_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/confirm-screen/confirm-screen.component */ "./src/app/components/confirm-screen/confirm-screen.component.ts");
            /* harmony import */ var _components_discount_screen_discount_screen_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/discount-screen/discount-screen.component */ "./src/app/components/discount-screen/discount-screen.component.ts");
            /* harmony import */ var _components_popup_screen_popup_screen_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/popup-screen/popup-screen.component */ "./src/app/components/popup-screen/popup-screen.component.ts");
            /* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/map/map.component */ "./src/app/components/map/map.component.ts");
            /* harmony import */ var agm_overlays__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! agm-overlays */ "./node_modules/agm-overlays/index.js");
            /* harmony import */ var agm_overlays__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/ __webpack_require__.n(agm_overlays__WEBPACK_IMPORTED_MODULE_27__);
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                        _components_main_container_main_container_component__WEBPACK_IMPORTED_MODULE_13__["MainContainerComponent"],
                        _components_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                        _components_default_screen_default_screen_component__WEBPACK_IMPORTED_MODULE_15__["DefaultScreenComponent"],
                        _components_phone_header_phone_header_component__WEBPACK_IMPORTED_MODULE_16__["PhoneHeaderComponent"],
                        _components_phone_footer_phone_footer_component__WEBPACK_IMPORTED_MODULE_17__["PhoneFooterComponent"],
                        _components_informations_screen_informations_screen_component__WEBPACK_IMPORTED_MODULE_18__["InformationsScreenComponent"],
                        _components_payment_method_screen_payment_method_screen_component__WEBPACK_IMPORTED_MODULE_21__["PaymentMethodScreenComponent"],
                        _components_parking_time_screen_parking_time_screen_component__WEBPACK_IMPORTED_MODULE_22__["ParkingTimeScreenComponent"],
                        _components_confirm_screen_confirm_screen_component__WEBPACK_IMPORTED_MODULE_23__["ConfirmScreenComponent"],
                        _components_discount_screen_discount_screen_component__WEBPACK_IMPORTED_MODULE_24__["DiscountScreenComponent"],
                        _components_popup_screen_popup_screen_component__WEBPACK_IMPORTED_MODULE_25__["PopupScreenComponent"],
                        _components_map_map_component__WEBPACK_IMPORTED_MODULE_26__["MapComponent"]
                    ],
                    imports: [
                        _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_6__["MbscModule"],
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                        _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_6__["MbscModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                        agm_overlays__WEBPACK_IMPORTED_MODULE_27__["AgmOverlays"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientJsonpModule"],
                        _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                            apiKey: 'AIzaSyCVJFjI_1hipSPAtGzloqu4JKLahI2z6JI'
                        })
                    ],
                    entryComponents: [
                        _components_popup_screen_popup_screen_component__WEBPACK_IMPORTED_MODULE_25__["PopupScreenComponent"]
                    ],
                    providers: [_components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"], { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _components_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_20__["AuthInterceptor"], multi: true }],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/auth/auth.guard.ts": 
        /*!***********************************************!*\
          !*** ./src/app/components/auth/auth.guard.ts ***!
          \***********************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_web_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/web.service */ "./src/app/services/web.service.ts");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(webService, router) {
                    this.webService = webService;
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function (next, state) {
                    if (!this.webService.isLoggedIn()) {
                        this.router.navigateByUrl('/login');
                        this.webService.deleteToken();
                        return false;
                    }
                    return true;
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _services_web_service__WEBPACK_IMPORTED_MODULE_3__["WebService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/components/auth/auth.interceptor.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/components/auth/auth.interceptor.ts ***!
          \*****************************************************/
        /*! exports provided: AuthInterceptor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () { return AuthInterceptor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_web_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/web.service */ "./src/app/services/web.service.ts");
            var AuthInterceptor = /** @class */ (function () {
                function AuthInterceptor(webService, router) {
                    this.webService = webService;
                    this.router = router;
                }
                AuthInterceptor.prototype.intercept = function (req, next) {
                    var _this = this;
                    if (req.headers.get('noauth')) {
                        return next.handle(req.clone());
                    }
                    else {
                        //console.log(this.webService.getToken());
                        var clonereq = req.clone({
                            headers: req.headers.set("Authorization", "Bearer " + this.webService.getToken())
                        });
                        return next.handle(clonereq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) { }, function (err) {
                            if (err.error.auth == false) {
                                _this.router.navigateByUrl('/login');
                            }
                        }));
                    }
                };
                return AuthInterceptor;
            }());
            AuthInterceptor.ctorParameters = function () { return [
                { type: _services_web_service__WEBPACK_IMPORTED_MODULE_4__["WebService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], AuthInterceptor);
            /***/ 
        }),
        /***/ "./src/app/components/confirm-screen/confirm-screen.component.css": 
        /*!************************************************************************!*\
          !*** ./src/app/components/confirm-screen/confirm-screen.component.css ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".backbutton{\r\n    color: #647c84;\r\n    margin: 10px 0px 0px -5px;\r\n    font-size: 18px;\r\n}\r\n  \r\n.centered-content{\r\n    padding: 5% 8%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    -webkit-box-align: center;\r\n    box-sizing: border-box;\r\n    max-width: 100%;  \r\n    min-height: 594px;\r\n}\r\n  \r\n#title{\r\n    padding: 10% 0% 5% 0%;\r\n    font-size: 36px;\r\n    font-weight: 1000;\r\n    text-align: center;\r\n    color: #647c84;\r\n}\r\n  \r\n.parkInfo {\r\n    font-size: 28px;\r\n    margin: 0%;\r\n}\r\n  \r\n#discount {\r\n    margin: 30px auto;\r\n    color: #6e6e6e;\r\n    border-color: #6e6e6e;\r\n}\r\n  \r\n.buttons {\r\n    margin: 90px 0px 0px 0px;\r\n    display: flex;\r\n    width: 100%;\r\n    height: 45px;\r\n    justify-content: space-evenly;\r\n}\r\n  \r\n#change {\r\n    color: #6e6e6e;\r\n    font-size: 16px;\r\n}\r\n  \r\n#nextButton {\r\n    width: 45%;\r\n    background-color: #647c84;\r\n}\r\n  \r\n#cancelButton {\r\n    width: 45%;\r\n    color: #647c84;\r\n    border-color: #647c84;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb25maXJtLXNjcmVlbi9jb25maXJtLXNjcmVlbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb25maXJtLXNjcmVlbi9jb25maXJtLXNjcmVlbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tidXR0b257XHJcbiAgICBjb2xvcjogIzY0N2M4NDtcclxuICAgIG1hcmdpbjogMTBweCAwcHggMHB4IC01cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuICBcclxuLmNlbnRlcmVkLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOiA1JSA4JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAgXHJcbiAgICBtaW4taGVpZ2h0OiA1OTRweDtcclxufVxyXG5cclxuI3RpdGxle1xyXG4gICAgcGFkZGluZzogMTAlIDAlIDUlIDAlO1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzY0N2M4NDtcclxufVxyXG5cclxuLnBhcmtJbmZvIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIG1hcmdpbjogMCU7XHJcbn1cclxuXHJcbiNkaXNjb3VudCB7XHJcbiAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICAgIGNvbG9yOiAjNmU2ZTZlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNmU2ZTZlO1xyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgICBtYXJnaW46IDkwcHggMHB4IDBweCAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuI2NoYW5nZSB7XHJcbiAgICBjb2xvcjogIzZlNmU2ZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuI25leHRCdXR0b24ge1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDdjODQ7XHJcbn1cclxuXHJcbiNjYW5jZWxCdXR0b24ge1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIGNvbG9yOiAjNjQ3Yzg0O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNjQ3Yzg0O1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/confirm-screen/confirm-screen.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/components/confirm-screen/confirm-screen.component.ts ***!
          \***********************************************************************/
        /*! exports provided: ConfirmScreenComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmScreenComponent", function () { return ConfirmScreenComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var src_app_services_payment_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/payment-service.service */ "./src/app/services/payment-service.service.ts");
            var ConfirmScreenComponent = /** @class */ (function () {
                function ConfirmScreenComponent(userService, paymentService) {
                    this.userService = userService;
                    this.paymentService = paymentService;
                    this.backLink = "../parkingTimeScreen";
                    this.title = "Resumo de Estacionamento";
                    this.paymentInfo = {
                        zoneTitle: "",
                        zoneCharge: "",
                        zoneColor: "",
                        priceToPay: 0.0,
                        parkingTime: "",
                        discount: 0.0,
                        originalprice: 0.0
                    };
                }
                ConfirmScreenComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var userDetails = this.userService.getUserProfile().subscribe(function (res) {
                        var userDetails = res['user'];
                        _this.paymentMethod = userDetails.paymentMethod;
                        _this.userId = userDetails._id;
                        var p = _this.paymentService.getParkingInformations();
                        _this.paymentInfo.zoneTitle = p.zoneTitle;
                        _this.paymentInfo.zoneCharge = p.zoneCharge;
                        _this.paymentInfo.zoneColor = p.zoneColor;
                        _this.paymentInfo.priceToPay = Math.floor(p.price * 100) / 100;
                        _this.paymentInfo.originalprice = p.price;
                        _this.paymentInfo.parkingTime = _this.paymentService.msToTime(p.parkingTime);
                        _this.paymentInfo.discount = Math.floor(_this.paymentService.getParkingDiscount() * 100) / 100;
                        console.log("desconto:", _this.paymentInfo.discount);
                        if (_this.paymentInfo.discount != 0 && _this.paymentInfo.discount != null) {
                            _this.paymentInfo.priceToPay = Math.floor((_this.paymentInfo.originalprice - _this.paymentInfo.discount) * 100) / 100;
                            var node = document.getElementById("discountInfo");
                            var text = document.createTextNode("[" + _this.paymentInfo.originalprice + " - " + _this.paymentInfo.discount + "]");
                            node.appendChild(text);
                        }
                    }, function (err) {
                    });
                };
                ConfirmScreenComponent.prototype.onConfirm = function () {
                    this.userService.setConfirmParking(true);
                    console.log(this.paymentInfo.priceToPay);
                    var p = this.paymentService.getParkingInformations();
                    this.userService.setUserBalance(this.userId, this.paymentInfo.priceToPay * 0.10);
                    this.userService.setUserBalance(this.userId, -this.paymentInfo.discount);
                };
                return ConfirmScreenComponent;
            }());
            ConfirmScreenComponent.ctorParameters = function () { return [
                { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
                { type: src_app_services_payment_service_service__WEBPACK_IMPORTED_MODULE_3__["PaymentServiceService"] }
            ]; };
            ConfirmScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-confirm-screen',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirm-screen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/confirm-screen/confirm-screen.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirm-screen.component.css */ "./src/app/components/confirm-screen/confirm-screen.component.css")).default]
                })
            ], ConfirmScreenComponent);
            /***/ 
        }),
        /***/ "./src/app/components/default-screen/default-screen.component.css": 
        /*!************************************************************************!*\
          !*** ./src/app/components/default-screen/default-screen.component.css ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css?family=Poppins');\r\nbody{\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n.centered-content{\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  -webkit-box-align: center;\r\n  box-sizing: border-box;\r\n  min-width: 335px;\r\n  max-width: 100%;\r\n  height:100%;\r\n}\r\n.titles{\r\n  padding: 20px;\r\n  margin-bottom: 10px;\r\n  font-size: 25px;\r\n  font-weight: 1000;\r\n  text-align: center;\r\n  min-width: 250px;\r\n  max-width: 800px;\r\n}\r\n.centeredZone{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  min-width: 335px;\r\n  max-width: 1000px;\r\n}\r\n.loginMatFormField{\r\n  font-family: \"Poppins\", sans-serif;\r\n  width: 250px;\r\n  margin-top: 22px;\r\n  padding: 10px;\r\n}\r\n.bigButton{\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n\r\n  width: 100%;\r\n  min-width: 100px;\r\n  max-width: 200px;\r\n\r\n}\r\n.writtenButton{\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  margin: 5px;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  font-family: \"Poppins\", sans-serif;\r\n\r\n\r\n  cursor: pointer;\r\n\r\n  background: none;\r\n  border: none;\r\n  outline: none;\r\n}\r\n.writtenButton:active{\r\n  color: \t#2c2f33;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  font-family: \"Poppins\", sans-serif;\r\n\r\n}\r\n#parkingButton {\r\n  height: 50px;\r\n  width: 100%;\r\n  bottom: 20%;\r\n  display: none;\r\n  position: relative;\r\n  background-color: #111;\r\n  overflow-y: hidden;\r\n}\r\n#menuIcon{\r\n  position: absolute;\r\n  color: black;\r\n  margin: 10px 0px 0px 0px;\r\n  z-index: 1;\r\n}\r\n#sideMenu {\r\n  font-family: \"Poppins\", sans-serif;\r\n\r\n  height: 100%;\r\n  width: 0;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  color: #ffffff;\r\n  background-color: #23272a;\r\n  overflow-x: hidden;\r\n  transition: 0.3s;\r\n  padding-top: 20px;\r\n  opacity: 0.8;\r\n}\r\n#sideMenuProfile{\r\n  padding-left: 4%;\r\n  margin-top: 25%;\r\n  margin-bottom: 20px;\r\n}\r\n#userName {\r\n  min-width: 210px;\r\n  font-size:  26px;\r\n  margin: 0px;\r\n}\r\n#discountText{\r\n  min-width: 210px;\r\n  margin: 0px;\r\n  margin-top:2.5%;\r\n  margin-bottom: 20px;\r\n  font-size: 16px;\r\n}\r\n#sideMenu a {\r\n  text-decoration: none;\r\n  font-size: 20px;\r\n  color: #f1f1f1;\r\n  display: block;\r\n  min-width: 210px;\r\n  transition: 0.1s;\r\n  padding-left: 4%;\r\n}\r\n#sideMenuTabs{\r\n  margin-top: 25%;\r\n  margin-bottom: 10px;\r\n}\r\n#sideMenuTabs h1{\r\n  padding-left: 4%;\r\n  min-width: 210px;\r\n  margin-top: 25%;\r\n  font-size: 14px;\r\n}\r\nhr.style1{\r\n\tborder-top: 1px solid #8c8b8b;\r\n}\r\n#logoutButton {\r\n  margin-left: 4%;\r\n  margin-top: 25%;\r\n  text-align: left;\r\n  position: absolute;\r\n  top: 20;\r\n  font-size: 20px;\r\n  outline: auto;\r\n}\r\n.smallText{\r\n  font-size: 12px;\r\n}\r\n#parkButton{\r\n  width: 80%;\r\n  height: 40px;\r\n  font-size: 1.2rem;\r\n  background-color: #647c84;\r\n  position: relative;\r\n  margin-top: 2%;\r\n  margin-left: 10%;\r\n}\r\n#scroll_image{\r\n  margin-left: 21%;\r\n}\r\n#zoneText{\r\n  text-align: center;\r\n  width: 45vw;\r\n  margin-top: 1%;\r\n  margin-left: 27.5%;\r\n}\r\n#parkedInformations{\r\n  align-content: center;\r\n  width: 100%;\r\n  height: 25%;\r\n  z-index: 2;\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background-color: white;\r\n  overflow: hidden;\r\n  height: 25%;\r\n}\r\n#cancelParkButton{\r\n  width: 35%;\r\n  height: 40px;\r\n  font-size: 1.2rem;\r\n  background-color: #647c84;\r\n  position: absolute;\r\n  margin-top: 7.5%;\r\n}\r\n#rechargeParkButton{\r\n  width: 35%;\r\n  height: 40px;\r\n  font-size: 1.2rem;\r\n  background-color: #647c84;\r\n  position: absolute;\r\n  margin-top: 7.5%;\r\n}\r\n#zoneInformations{\r\n  align-content: center;\r\n  width: 100%;\r\n  height: 0%;\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background-color: white;\r\n  overflow: hidden;\r\n  height: 0;\r\n  transition: .5s ease;\r\n}\r\n#myProgress{\r\n  margin-top: 5%;\r\n  margin-left: 10%;\r\n  width: 80%;\r\n  border-radius: 15px;\r\n  border-style: solid;\r\n  border-color: #637C87;\r\n  background-color:white;\r\n}\r\n#myBar{\r\n  width: 0%;\r\n  border-radius: 15px;\r\n  height: 30px;\r\n  background-color: #637C87;\r\n}\r\n/* legend */\r\n.Zonelegend {\r\n  position: absolute;\r\n  padding: 20px;\r\n  padding-bottom: 40px;\r\n  left:0;\r\n  bottom:0;\r\n  font-size: 10px;\r\n  font-weight: 1000;\r\n  font-style: italic;\r\n  z-index: 1;\r\n  color: #000;\r\n  text-shadow: -0.5px -0.5px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;\r\n}\r\n#legendTitle {\r\n  font-size: 16px;\r\n  font-style: normal;\r\n}\r\n.littleCircle {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 5px;\r\n  height: 5px;\r\n  border-radius: 100%;\r\n  margin-right: 5px; \r\n  margin-top: 1px;\r\n}\r\n#green{\r\n  background-color: green;\r\n}\r\n#yellow{\r\n  background-color: yellow;\r\n}\r\n#red{\r\n  background-color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZWZhdWx0LXNjcmVlbi9kZWZhdWx0LXNjcmVlbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhEQUE4RDtBQUM5RDtFQUNFLGtDQUFrQztBQUNwQztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7O0VBRW5CLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCOztBQUVsQjtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0NBQWtDOzs7RUFHbEMsZUFBZTs7RUFFZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0NBQWtDOztBQUVwQztBQUdBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixVQUFVO0FBQ1o7QUFFQTtFQUNFLGtDQUFrQzs7RUFFbEMsWUFBWTtFQUNaLFFBQVE7RUFDUixlQUFlO0VBQ2YsVUFBVTtFQUNWLE1BQU07RUFDTixPQUFPO0VBQ1AsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsY0FBYztFQUNkLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUVBO0NBQ0MsNkJBQTZCO0FBQzlCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLGVBQWU7RUFDZixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7QUFFQSxXQUFXO0FBQ1g7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixNQUFNO0VBQ04sUUFBUTtFQUNSLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsbUZBQW1GO0FBQ3JGO0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kZWZhdWx0LXNjcmVlbi9kZWZhdWx0LXNjcmVlbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zJyk7XHJcbmJvZHl7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY2VudGVyZWQtY29udGVudHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWluLXdpZHRoOiAzMzVweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbn1cclxuXHJcbi50aXRsZXN7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogMTAwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWluLXdpZHRoOiAyNTBweDtcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG59XHJcblxyXG4uY2VudGVyZWRab25le1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1pbi13aWR0aDogMzM1cHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbn1cclxuXHJcbi5sb2dpbk1hdEZvcm1GaWVsZHtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmJpZ0J1dHRvbntcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAxMDBweDtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG5cclxufVxyXG5cclxuLndyaXR0ZW5CdXR0b257XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG5cclxuXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ud3JpdHRlbkJ1dHRvbjphY3RpdmV7XHJcbiAgY29sb3I6IFx0IzJjMmYzMztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcblxyXG59IFxyXG5cclxuXHJcbiNwYXJraW5nQnV0dG9uIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm90dG9tOiAyMCU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuXHJcbiNtZW51SWNvbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4jc2lkZU1lbnUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzI3MmE7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4jc2lkZU1lbnVQcm9maWxle1xyXG4gIHBhZGRpbmctbGVmdDogNCU7XHJcbiAgbWFyZ2luLXRvcDogMjUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbiN1c2VyTmFtZSB7XHJcbiAgbWluLXdpZHRoOiAyMTBweDtcclxuICBmb250LXNpemU6ICAyNnB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcbiNkaXNjb3VudFRleHR7XHJcbiAgbWluLXdpZHRoOiAyMTBweDtcclxuICBtYXJnaW46IDBweDtcclxuICBtYXJnaW4tdG9wOjIuNSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbiNzaWRlTWVudSBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjZjFmMWYxO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1pbi13aWR0aDogMjEwcHg7XHJcbiAgdHJhbnNpdGlvbjogMC4xcztcclxuICBwYWRkaW5nLWxlZnQ6IDQlO1xyXG59XHJcblxyXG4jc2lkZU1lbnVUYWJze1xyXG4gIG1hcmdpbi10b3A6IDI1JTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4jc2lkZU1lbnVUYWJzIGgxe1xyXG4gIHBhZGRpbmctbGVmdDogNCU7XHJcbiAgbWluLXdpZHRoOiAyMTBweDtcclxuICBtYXJnaW4tdG9wOiAyNSU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5oci5zdHlsZTF7XHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICM4YzhiOGI7XHJcbn1cclxuXHJcbiNsb2dvdXRCdXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiA0JTtcclxuICBtYXJnaW4tdG9wOiAyNSU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgb3V0bGluZTogYXV0bztcclxufVxyXG5cclxuLnNtYWxsVGV4dHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbiNwYXJrQnV0dG9ue1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDdjODQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuXHJcbiNzY3JvbGxfaW1hZ2V7XHJcbiAgbWFyZ2luLWxlZnQ6IDIxJTtcclxufVxyXG5cclxuI3pvbmVUZXh0e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogNDV2dztcclxuICBtYXJnaW4tdG9wOiAxJTtcclxuICBtYXJnaW4tbGVmdDogMjcuNSU7XHJcbn1cclxuXHJcbiNwYXJrZWRJbmZvcm1hdGlvbnN7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjUlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiAyNSU7XHJcbn1cclxuXHJcbiNjYW5jZWxQYXJrQnV0dG9ue1xyXG4gIHdpZHRoOiAzNSU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDdjODQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDcuNSU7XHJcbn1cclxuXHJcbiNyZWNoYXJnZVBhcmtCdXR0b257XHJcbiAgd2lkdGg6IDM1JTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0N2M4NDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogNy41JTtcclxufVxyXG5cclxuI3pvbmVJbmZvcm1hdGlvbnN7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xyXG59XHJcblxyXG4jbXlQcm9ncmVzc3tcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogIzYzN0M4NztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4jbXlCYXJ7XHJcbiAgd2lkdGg6IDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MzdDODc7XHJcbn1cclxuXHJcbi8qIGxlZ2VuZCAqL1xyXG4uWm9uZWxlZ2VuZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgbGVmdDowO1xyXG4gIGJvdHRvbTowO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogMTAwMDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgei1pbmRleDogMTtcclxuICBjb2xvcjogIzAwMDtcclxuICB0ZXh0LXNoYWRvdzogLTAuNXB4IC0wLjVweCAwICNmZmYsIDFweCAtMXB4IDAgI2ZmZiwgLTFweCAxcHggMCAjZmZmLCAxcHggMXB4IDAgI2ZmZjtcclxufVxyXG5cclxuI2xlZ2VuZFRpdGxlIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG4ubGl0dGxlQ2lyY2xlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgd2lkdGg6IDVweDtcclxuICBoZWlnaHQ6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIG1hcmdpbi1yaWdodDogNXB4OyBcclxuICBtYXJnaW4tdG9wOiAxcHg7XHJcbn1cclxuXHJcbiNncmVlbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuI3llbGxvd3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuXHJcbiNyZWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/default-screen/default-screen.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/components/default-screen/default-screen.component.ts ***!
          \***********************************************************************/
        /*! exports provided: DefaultScreenComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultScreenComponent", function () { return DefaultScreenComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _popup_screen_popup_screen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popup-screen/popup-screen.component */ "./src/app/components/popup-screen/popup-screen.component.ts");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var src_app_services_payment_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/payment-service.service */ "./src/app/services/payment-service.service.ts");
            var DefaultScreenComponent = /** @class */ (function () {
                function DefaultScreenComponent(userService, router, dialog, paymentService) {
                    this.userService = userService;
                    this.router = router;
                    this.dialog = dialog;
                    this.paymentService = paymentService;
                    this.mapZoom = 15;
                    this.message = {
                        "zoneTitle": "",
                        "zoneCharge": "",
                        "zoneColor": ""
                    };
                    this.parkedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.isSelected = false;
                    this.backLink = '../registerInformation';
                }
                DefaultScreenComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.userService.getUserProfile().subscribe(function (res) {
                        _this.userDetails = res['user'];
                        console.log(_this.userDetails);
                    }, function (err) {
                    });
                    this.bool = this.userService.getConfirmParking();
                    console.log(this.bool);
                    if (this.bool == true) {
                        this.openDialog();
                        this.userService.setConfirmParking(false);
                    }
                };
                DefaultScreenComponent.prototype.openMenu = function () {
                    document.getElementById("menuIcon").style.zIndex = "-1";
                    document.getElementById("sideMenu").style.width = "250px";
                };
                DefaultScreenComponent.prototype.closeMenu = function () {
                    document.getElementById("menuIcon").style.zIndex = "1";
                    document.getElementById("sideMenu").style.width = "0px";
                };
                DefaultScreenComponent.prototype.userLogOut = function () {
                    this.userService.logOut();
                };
                DefaultScreenComponent.prototype.raiseParkingButton = function () {
                    var result = document.getElementById('parkingButton');
                    result.style.height = '50px';
                    result.style.bottom = '50%';
                };
                DefaultScreenComponent.prototype.closeInformations = function () {
                    this.isSelected = false;
                    document.getElementById('zoneInformations').style.height = "0";
                };
                DefaultScreenComponent.prototype.openDialog = function () {
                    var dialogRef = this.dialog.open(_popup_screen_popup_screen_component__WEBPACK_IMPORTED_MODULE_4__["PopupScreenComponent"], {});
                    // setTimeout(() => dialogRef.close(), 2500)
                    this.parkedEvent.emit(true);
                    if (this.userService.getConfirmParking()) {
                        setTimeout(function () {
                            document.getElementById("myBar").style.width = "5%";
                        }, 5000);
                    }
                    dialogRef.afterClosed().subscribe(function (result) {
                        console.log('The dialog was closed');
                    });
                };
                DefaultScreenComponent.prototype.receiveMessage = function (event) {
                    //dont forget
                    this.message = event;
                    this.isSelected = true;
                    document.getElementById("zoneInformations").style.height = "25%";
                };
                DefaultScreenComponent.prototype.setZoneInformation = function () {
                    this.paymentService.setZoneInformations(this.message.zoneTitle, this.message.zoneCharge, this.message.zoneColor);
                };
                DefaultScreenComponent.prototype.cancelPark = function () {
                    this.userService.setConfirmParking(false);
                    this.bool = false;
                    document.getElementById('parkedInformations').style.height = "0";
                };
                return DefaultScreenComponent;
            }());
            DefaultScreenComponent.ctorParameters = function () { return [
                { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
                { type: src_app_services_payment_service_service__WEBPACK_IMPORTED_MODULE_6__["PaymentServiceService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], DefaultScreenComponent.prototype, "parkedEvent", void 0);
            DefaultScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-default-screen',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./default-screen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/default-screen/default-screen.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./default-screen.component.css */ "./src/app/components/default-screen/default-screen.component.css")).default]
                })
            ], DefaultScreenComponent);
            /***/ 
        }),
        /***/ "./src/app/components/discount-screen/discount-screen.component.css": 
        /*!**************************************************************************!*\
          !*** ./src/app/components/discount-screen/discount-screen.component.css ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".backbutton{\r\n    color: #647c84;\r\n    margin: 10px 0px 0px -5px;\r\n    font-size: 18px;\r\n}\r\n\r\n.centered-content{\r\n    padding: 5% 8%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    -webkit-box-align: center;\r\n    box-sizing: border-box;\r\n    max-width: 100%;  \r\n    min-height: 640px;\r\n}\r\n\r\n#title{\r\n    padding: 0% 0% 5% 0%;\r\n    font-size: 36px;\r\n    font-weight: 1000;\r\n    text-align: center;\r\n    color: #647c84;\r\n}\r\n\r\n#discountDisclaimer {\r\n    text-align: center;\r\n}\r\n\r\n.form-control {\r\n    text-align: center;\r\n}\r\n\r\n#next_button {\r\n    width: 80%;\r\n    height: 50px;\r\n    font-size: 1.2rem;\r\n    margin: 0px auto;\r\n    background-color: #647c84;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaXNjb3VudC1zY3JlZW4vZGlzY291bnQtc2NyZWVuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kaXNjb3VudC1zY3JlZW4vZGlzY291bnQtc2NyZWVuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2J1dHRvbntcclxuICAgIGNvbG9yOiAjNjQ3Yzg0O1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweCAwcHggLTVweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmNlbnRlcmVkLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOiA1JSA4JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAgXHJcbiAgICBtaW4taGVpZ2h0OiA2NDBweDtcclxufVxyXG5cclxuI3RpdGxle1xyXG4gICAgcGFkZGluZzogMCUgMCUgNSUgMCU7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBmb250LXdlaWdodDogMTAwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNjQ3Yzg0O1xyXG59XHJcblxyXG4jZGlzY291bnREaXNjbGFpbWVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNuZXh0X2J1dHRvbiB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0N2M4NDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/discount-screen/discount-screen.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/components/discount-screen/discount-screen.component.ts ***!
          \*************************************************************************/
        /*! exports provided: DiscountScreenComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountScreenComponent", function () { return DiscountScreenComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var src_app_services_payment_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/payment-service.service */ "./src/app/services/payment-service.service.ts");
            var DiscountScreenComponent = /** @class */ (function () {
                function DiscountScreenComponent(userService, paymentService) {
                    var _this = this;
                    this.userService = userService;
                    this.paymentService = paymentService;
                    this.backLink = "../confirmScreen";
                    this.rtLink = "../confirmScreen";
                    this.title = "Descontar";
                    this.balanceUser = 0;
                    this.maximum = this.paymentService.getPrice();
                    this.numpadSettings = {
                        theme: 'ios',
                        themeVariant: 'light',
                        lang: 'pt-PT',
                        min: 0.01,
                        max: this.maximum,
                        scale: 2,
                        onClose: function (event, inst) {
                            // console.log(this.userService.getUserProfile().getBalance());
                            console.log("saldooo", _this.balanceUser);
                            _this.paymentService.setParkingDiscount(inst.getVal());
                        }
                    };
                }
                DiscountScreenComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.userService.getUserProfile().subscribe(function (res) {
                        _this.userDetails = res['user'];
                        console.log("user:", _this.userDetails);
                        _this.balanceUser = _this.userDetails.balance;
                        console.log("SALDO", _this.balanceUser);
                        if (_this.balanceUser < _this.maximum) {
                            _this.numpadSettings.max = _this.balanceUser;
                        }
                    }, function (err) {
                    });
                };
                return DiscountScreenComponent;
            }());
            DiscountScreenComponent.ctorParameters = function () { return [
                { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
                { type: src_app_services_payment_service_service__WEBPACK_IMPORTED_MODULE_3__["PaymentServiceService"] }
            ]; };
            DiscountScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-discount-screen',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./discount-screen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/discount-screen/discount-screen.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./discount-screen.component.css */ "./src/app/components/discount-screen/discount-screen.component.css")).default]
                })
            ], DiscountScreenComponent);
            /***/ 
        }),
        /***/ "./src/app/components/informations-screen/informations-screen.component.css": 
        /*!**********************************************************************************!*\
          !*** ./src/app/components/informations-screen/informations-screen.component.css ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".backbutton{\r\n  color: #647c84;\r\n  margin: 10px 0px 0px -5px;\r\n}\r\n\r\n.centered-content{\r\n  padding: 5% 8%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  -webkit-box-align: center;\r\n  box-sizing: border-box;\r\n  max-width: 100%;  \r\n  min-height: 594px;\r\n}\r\n\r\n#title{\r\n  padding: 0% 0% 5% 0%;\r\n  font-size: 36px;\r\n  font-weight: 1000;\r\n  text-align: center;\r\n  color: #647c84;\r\n}\r\n\r\n.subtitle {\r\n  font-size: 20px;\r\n  text-align: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n#register_form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n\r\n.form-control {\r\n  text-align: center;\r\n  height: 50px;\r\n  margin-top: 15px;\r\n}\r\n\r\n#next_button {\r\n  width: 80%;\r\n  height: 50px;\r\n  font-size: 1.2rem;\r\n  margin: 0px auto;\r\n  background-color: #647c84;\r\n}\r\n\r\n#writtenButton{\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  margin: 10px;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  font-family: \"Poppins\", sans-serif;\r\n\r\n  cursor: pointer;\r\n  color: #505050;\r\n\r\n  background: none;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n#writtenButton:active{\r\n  color: \t#2c2f33;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  font-family: \"Poppins\", sans-serif;\r\n} \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmZvcm1hdGlvbnMtc2NyZWVuL2luZm9ybWF0aW9ucy1zY3JlZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0NBQWtDOztFQUVsQyxlQUFlO0VBQ2YsY0FBYzs7RUFFZCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtDQUFrQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5mb3JtYXRpb25zLXNjcmVlbi9pbmZvcm1hdGlvbnMtc2NyZWVuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2J1dHRvbntcclxuICBjb2xvcjogIzY0N2M4NDtcclxuICBtYXJnaW46IDEwcHggMHB4IDBweCAtNXB4O1xyXG59XHJcblxyXG4uY2VudGVyZWQtY29udGVudHtcclxuICBwYWRkaW5nOiA1JSA4JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWF4LXdpZHRoOiAxMDAlOyAgXHJcbiAgbWluLWhlaWdodDogNTk0cHg7XHJcbn1cclxuXHJcbiN0aXRsZXtcclxuICBwYWRkaW5nOiAwJSAwJSA1JSAwJTtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjNjQ3Yzg0O1xyXG59XHJcblxyXG4uc3VidGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuI3JlZ2lzdGVyX2Zvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4jbmV4dF9idXR0b24ge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0N2M4NDtcclxufVxyXG5cclxuI3dyaXR0ZW5CdXR0b257XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjNTA1MDUwO1xyXG5cclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4jd3JpdHRlbkJ1dHRvbjphY3RpdmV7XHJcbiAgY29sb3I6IFx0IzJjMmYzMztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbn0gXHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/informations-screen/informations-screen.component.ts": 
        /*!*********************************************************************************!*\
          !*** ./src/app/components/informations-screen/informations-screen.component.ts ***!
          \*********************************************************************************/
        /*! exports provided: InformationsScreenComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationsScreenComponent", function () { return InformationsScreenComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/register.service */ "./src/app/services/register.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var InformationsScreenComponent = /** @class */ (function () {
                function InformationsScreenComponent(registerService, router) {
                    this.registerService = registerService;
                    this.router = router;
                }
                InformationsScreenComponent.prototype.ngOnInit = function () {
                    this.backLink = '../registerAccount';
                };
                InformationsScreenComponent.prototype.validateFields = function () {
                    if (this.name == undefined || this.phoneNumber == undefined || this.licensePlate == undefined) {
                        this.invalidMessage = "Por favor preencha todos os espaços!";
                        return false;
                    }
                    else if (this.phoneNumber.length != 9) {
                        this.invalidMessage = "Introduza um Número de telemóvel válido!";
                        return false;
                    }
                    // else if (this.licensePlate) {
                    //   this.invalidMessage = "Introduza uma matrícula Válida!";
                    //   return false;
                    // }
                    else {
                        return true;
                    }
                };
                InformationsScreenComponent.prototype.registerInformation = function () {
                    if (!this.validateFields()) {
                        return false;
                    }
                    var values = {
                        name: this.name,
                        phoneNumber: this.phoneNumber,
                        licensePlate: this.licensePlate
                    };
                    this.registerService.setPersonalInformation(values);
                    this.router.navigate(['/paymentMethod']);
                };
                return InformationsScreenComponent;
            }());
            InformationsScreenComponent.ctorParameters = function () { return [
                { type: _services_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            InformationsScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-informations-screen',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./informations-screen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/informations-screen/informations-screen.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./informations-screen.component.css */ "./src/app/components/informations-screen/informations-screen.component.css")).default]
                })
            ], InformationsScreenComponent);
            /***/ 
        }),
        /***/ "./src/app/components/main-container/main-container.component.css": 
        /*!************************************************************************!*\
          !*** ./src/app/components/main-container/main-container.component.css ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".centered-content{\r\n  padding: 5% 8%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  -webkit-box-align: center;\r\n  box-sizing: border-box;\r\n  max-width: 100%;  \r\n  min-height: 640px;\r\n}\r\n\r\n.logo{\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  -webkit-box-align: center;\r\n  margin-top: 10vh;\r\n  margin-bottom: -5vh;\r\n}\r\n\r\n#title{\r\n  padding: 5% 0%;\r\n  font-size: 36px;\r\n  font-weight: 1000;\r\n  text-align: center;\r\n  color: #647c84;\r\n}\r\n\r\n.form-control {\r\n  text-align: center;\r\n  height: 50px;\r\n  margin-top: 15px;\r\n}\r\n\r\n#login_form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n\r\n#next_button {\r\n  width: 80%;\r\n  height: 50px;\r\n  font-size: 1.2rem;\r\n  margin: 0px auto;\r\n  background-color: #647c84;\r\n}\r\n\r\n.loginMatFormField{\r\n  font-family: \"Poppins\", sans-serif;\r\n  width: 250px;\r\n  margin-bottom: 14px;\r\n  padding: 10px;\r\n}\r\n\r\n#phone_number{\r\n  margin-top: 12px;\r\n}\r\n\r\n.bigButton{\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n\r\n  width: 100%;\r\n  min-width: 100px;\r\n  max-width: 200px;\r\n\r\n}\r\n\r\n.writtenButton{\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  margin: 5px;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  font-family: \"Poppins\", sans-serif;\r\n\r\n\r\n  cursor: pointer;\r\n\r\n  background: none;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.writtenButton:active{\r\n  color: \t#2c2f33;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  font-family: \"Poppins\", sans-serif;\r\n\r\n}\r\n\r\n.logo{\r\n  width: 100%;\r\n  height: 200px;\r\n}\r\n\r\n#loginButton{\r\n  margin-left: 0px;\r\n  margin-top: 5px;\r\n}\r\n\r\n#registerContainer{\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  font-family: Whitney,Helvetica Neue,Helvetica,Arial,sans-serif;\r\n  padding-top: 10px;\r\n  width: 100%;\r\n}\r\n\r\n#writtenQuestion{\r\n  font-size: 10px;\r\n  font-weight: 300;\r\n  margin: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjs7RUFFbkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7O0FBRWxCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0NBQWtDOzs7RUFHbEMsZUFBZTs7RUFFZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtDQUFrQzs7QUFFcEM7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw4REFBOEQ7RUFDOUQsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcmVkLWNvbnRlbnR7XHJcbiAgcGFkZGluZzogNSUgOCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1heC13aWR0aDogMTAwJTsgIFxyXG4gIG1pbi1oZWlnaHQ6IDY0MHB4O1xyXG59XHJcblxyXG4ubG9nb3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTV2aDtcclxufVxyXG5cclxuI3RpdGxle1xyXG4gIHBhZGRpbmc6IDUlIDAlO1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBmb250LXdlaWdodDogMTAwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM2NDdjODQ7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuI2xvZ2luX2Zvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI25leHRfYnV0dG9uIHtcclxuICB3aWR0aDogODAlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBtYXJnaW46IDBweCBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDdjODQ7XHJcbn1cclxuXHJcbi5sb2dpbk1hdEZvcm1GaWVsZHtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuI3Bob25lX251bWJlcntcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG59XHJcblxyXG4uYmlnQnV0dG9ue1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gIG1heC13aWR0aDogMjAwcHg7XHJcblxyXG59XHJcblxyXG4ud3JpdHRlbkJ1dHRvbntcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDVweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcblxyXG5cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi53cml0dGVuQnV0dG9uOmFjdGl2ZXtcclxuICBjb2xvcjogXHQjMmMyZjMzO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuXHJcbn0gXHJcblxyXG5cclxuLmxvZ297XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuI2xvZ2luQnV0dG9ue1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4jcmVnaXN0ZXJDb250YWluZXJ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFdoaXRuZXksSGVsdmV0aWNhIE5ldWUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiN3cml0dGVuUXVlc3Rpb257XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/main-container/main-container.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/components/main-container/main-container.component.ts ***!
          \***********************************************************************/
        /*! exports provided: MainContainerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContainerComponent", function () { return MainContainerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
            var MainContainerComponent = /** @class */ (function () {
                function MainContainerComponent(userService) {
                    this.userService = userService;
                }
                MainContainerComponent.prototype.ngOnInit = function () {
                };
                MainContainerComponent.prototype.checkUser = function (form) {
                    var _this = this;
                    if (this.phoneNumber == undefined || this.password == undefined) {
                        this.invalidMessage = "Por favor preencha todos os espaços!";
                        return false;
                    }
                    var response = this.userService.LoginUser(this.phoneNumber, this.password).subscribe(function (res) {
                        _this.userService.setToken(res['token']);
                    }, function (err) {
                        _this.invalidMessage = "Número de Telefone ou Password Erradas";
                        return false;
                    });
                };
                return MainContainerComponent;
            }());
            MainContainerComponent.ctorParameters = function () { return [
                { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
            ]; };
            MainContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-main-container',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-container/main-container.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-container.component.css */ "./src/app/components/main-container/main-container.component.css")).default]
                })
            ], MainContainerComponent);
            /***/ 
        }),
        /***/ "./src/app/components/map/map.component.css": 
        /*!**************************************************!*\
          !*** ./src/app/components/map/map.component.css ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("agm-map{\r\n    height: 100vh;\r\n    width: 100vw;\r\n}\r\n\r\n.match-parent {\r\n    width: 100vw;\r\n    height: 90vh;\r\n}\r\n\r\n.layerSpots{\r\n    border-style: solid;\r\n    border-width: 1.5px;\r\n    border-color: #A5A398;\r\n    border-radius: 15px;\r\n    width: 20vw;\r\n    text-align: center;\r\n    background: #CDCDCD;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXAvbWFwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYXAvbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwe1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxufVxyXG5cclxuLm1hdGNoLXBhcmVudCB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbn1cclxuXHJcbi5sYXllclNwb3Rze1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMS41cHg7XHJcbiAgICBib3JkZXItY29sb3I6ICNBNUEzOTg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgd2lkdGg6IDIwdnc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQ0RDRENEO1xyXG59XHJcblxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/map/map.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/components/map/map.component.ts ***!
          \*************************************************/
        /*! exports provided: MapComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function () { return MapComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_payment_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/payment-service.service */ "./src/app/services/payment-service.service.ts");
            var MapComponent = /** @class */ (function () {
                function MapComponent(paymentService) {
                    this.paymentService = paymentService;
                    // style = 'mapbox://styles/mapbox/streets-v11';
                    this.mapStyle = [
                        {
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#ebe3cd"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#523735"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "color": "#f5f1e6"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#c9b2a6"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.land_parcel",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#dcd2be"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.land_parcel",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#ae9e90"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.natural",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#dfd2ae"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#dfd2ae"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#93817c"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.business",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#a5b076"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#447530"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f5f1e6"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#fdfcf8"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f8c967"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#e9bc62"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway.controlled_access",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#e98d58"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway.controlled_access",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#db8555"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#806b63"
                                }
                            ]
                        },
                        {
                            "featureType": "transit",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.line",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#dfd2ae"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.line",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#8f7d77"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.line",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "color": "#ebe3cd"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.station",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#dfd2ae"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#b9d3c2"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#92998d"
                                }
                            ]
                        }
                    ];
                    this.lat = 38.73674521461237;
                    this.lng = -9.1386079788208;
                    //bastante badalhoco click on '-' to not see this
                    this.Zones = {
                        "type": "FeatureCollection",
                        "features": [
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Av. João XXI",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "100",
                                    "center": [
                                        -9.14011001586914,
                                        38.74169937598144
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.14088249206543,
                                                38.73788336317147
                                            ],
                                            [
                                                -9.138565063476562,
                                                38.73835200730645
                                            ],
                                            [
                                                -9.136762619018553,
                                                38.73774946428237
                                            ],
                                            [
                                                -9.136505126953125,
                                                38.737448190864036
                                            ],
                                            [
                                                -9.133973121643066,
                                                38.73761556514222
                                            ],
                                            [
                                                -9.133672714233398,
                                                38.739255812311086
                                            ],
                                            [
                                                -9.134659767150879,
                                                38.739523604189955
                                            ],
                                            [
                                                -9.134659767150879,
                                                38.73999223756174
                                            ],
                                            [
                                                -9.133672714233398,
                                                38.73989181638382
                                            ],
                                            [
                                                -9.133501052856445,
                                                38.74109686119914
                                            ],
                                            [
                                                -9.131269454956055,
                                                38.745983778934686
                                            ],
                                            [
                                                -9.145517349243164,
                                                38.74518047296261
                                            ],
                                            [
                                                -9.142084121704102,
                                                38.73917212714299
                                            ],
                                            [
                                                -9.142427444458008,
                                                38.739038230670104
                                            ],
                                            [
                                                -9.142169952392578,
                                                38.737799676395184
                                            ],
                                            [
                                                -9.141011238098145,
                                                38.73793357519016
                                            ],
                                            [
                                                -9.14088249206543,
                                                38.73788336317147
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Campo Pequeno",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "80",
                                    "center": [
                                        -9.14637565612793,
                                        38.74002571125633
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.142202138900757,
                                                38.737799676395184
                                            ],
                                            [
                                                -9.142448902130127,
                                                38.739088441876866
                                            ],
                                            [
                                                -9.1421377658844,
                                                38.73919723270372
                                            ],
                                            [
                                                -9.145528078079224,
                                                38.74518047296261
                                            ],
                                            [
                                                -9.147491455078123,
                                                38.74484575947351
                                            ],
                                            [
                                                -9.14637565612793,
                                                38.74015960587783
                                            ],
                                            [
                                                -9.1456139087677,
                                                38.737255709959214
                                            ],
                                            [
                                                -9.142202138900757,
                                                38.737799676395184
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Estefânia",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "97",
                                    "center": [
                                        -9.142513275146484,
                                        38.735071433783396
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.1456139087677,
                                                38.737255709959214
                                            ],
                                            [
                                                -9.145002365112305,
                                                38.73430148143083
                                            ],
                                            [
                                                -9.144487380981445,
                                                38.734134099386395
                                            ],
                                            [
                                                -9.144272804260254,
                                                38.73393324041529
                                            ],
                                            [
                                                -9.144401550292969,
                                                38.733531520778705
                                            ],
                                            [
                                                -9.141011238098145,
                                                38.73158984401968
                                            ],
                                            [
                                                -9.140753746032715,
                                                38.731690276870516
                                            ],
                                            [
                                                -9.14113998413086,
                                                38.7330293680559
                                            ],
                                            [
                                                -9.138479232788086,
                                                38.73282850597838
                                            ],
                                            [
                                                -9.137020111083984,
                                                38.734569291886125
                                            ],
                                            [
                                                -9.136419296264648,
                                                38.73649414998851
                                            ],
                                            [
                                                -9.136526584625244,
                                                38.73746492830949
                                            ],
                                            [
                                                -9.136784076690674,
                                                38.73776620165722
                                            ],
                                            [
                                                -9.138575792312622,
                                                38.73835200730645
                                            ],
                                            [
                                                -9.14089322090149,
                                                38.73788336317147
                                            ],
                                            [
                                                -9.141032695770264,
                                                38.73793357519016
                                            ],
                                            [
                                                -9.1456139087677,
                                                38.737255709959214
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Berna/Valmor",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "77",
                                    "center": [
                                        -9.151010513305664,
                                        38.73701301590504
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.146676063537598,
                                                38.741347909642876
                                            ],
                                            [
                                                -9.148693084716797,
                                                38.741029914798396
                                            ],
                                            [
                                                -9.15311336517334,
                                                38.73898801942805
                                            ],
                                            [
                                                -9.152555465698242,
                                                38.73825158382212
                                            ],
                                            [
                                                -9.152169227600098,
                                                38.73497100568634
                                            ],
                                            [
                                                -9.145190119743345,
                                                38.735171861739225
                                            ],
                                            [
                                                -9.14562463760376,
                                                38.73727244744978
                                            ],
                                            [
                                                -9.146676063537598,
                                                38.741347909642876
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Avenidas Novas",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "63",
                                    "center": [
                                        -9.150581359863281,
                                        38.731991574575844
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.152179956436155,
                                                38.73498774371232
                                            ],
                                            [
                                                -9.153907299041746,
                                                38.734360065053735
                                            ],
                                            [
                                                -9.148521423339842,
                                                38.72794068800838
                                            ],
                                            [
                                                -9.145216941833496,
                                                38.733330660113175
                                            ],
                                            [
                                                -9.144734144210815,
                                                38.73332229090655
                                            ],
                                            [
                                                -9.144412279129028,
                                                38.73353988996086
                                            ],
                                            [
                                                -9.144283533096313,
                                                38.73394160955037
                                            ],
                                            [
                                                -9.144487380981445,
                                                38.734134099386395
                                            ],
                                            [
                                                -9.145013093948364,
                                                38.73430985052276
                                            ],
                                            [
                                                -9.145216941833496,
                                                38.735171861739225
                                            ],
                                            [
                                                -9.152179956436155,
                                                38.73498774371232
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Parque",
                                    "charge": "1.60",
                                    "color": "Vermelha",
                                    "spots": "43",
                                    "center": [
                                        -9.152383804321287,
                                        38.72984898550344
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.153912663459778,
                                                38.734368434138794
                                            ],
                                            [
                                                -9.154422283172607,
                                                38.73383281071796
                                            ],
                                            [
                                                -9.154513478279114,
                                                38.7335691820906
                                            ],
                                            [
                                                -9.152909517288208,
                                                38.7316484298665
                                            ],
                                            [
                                                -9.152780771255493,
                                                38.73158147460909
                                            ],
                                            [
                                                -9.152566194534302,
                                                38.731380608460256
                                            ],
                                            [
                                                -9.149004220962524,
                                                38.727405016391536
                                            ],
                                            [
                                                -9.148526787757874,
                                                38.72794278046775
                                            ],
                                            [
                                                -9.153912663459778,
                                                38.734368434138794
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Roma",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "41",
                                    "center": [
                                        -9.138479232788086,
                                        38.74712178025749
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.131274819374084,
                                                38.745983778934686
                                            ],
                                            [
                                                -9.131054878234863,
                                                38.74876180908016
                                            ],
                                            [
                                                -9.141976833343506,
                                                38.74927640219556
                                            ],
                                            [
                                                -9.139927625656126,
                                                38.7454942654336
                                            ],
                                            [
                                                -9.131274819374084,
                                                38.745983778934686
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Bairro S. Miguel",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "58",
                                    "center": [
                                        -9.146203994750977,
                                        38.746653193674206
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.141998291015625,
                                                38.74931405520473
                                            ],
                                            [
                                                -9.148693084716797,
                                                38.748276498353235
                                            ],
                                            [
                                                -9.147491455078123,
                                                38.74486249518524
                                            ],
                                            [
                                                -9.1455602645874,
                                                38.745230679850636
                                            ],
                                            [
                                                -9.139959812164307,
                                                38.74553192043746
                                            ],
                                            [
                                                -9.141998291015625,
                                                38.74931405520473
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Entrecampos",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "89",
                                    "center": [
                                        -9.153499603271484,
                                        38.745314357918915
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.146697521209717,
                                                38.741381382702045
                                            ],
                                            [
                                                -9.147512912750244,
                                                38.74485412732986
                                            ],
                                            [
                                                -9.148693084716797,
                                                38.748280682080484
                                            ],
                                            [
                                                -9.150238037109375,
                                                38.74802547426893
                                            ],
                                            [
                                                -9.150710105895996,
                                                38.74974915520319
                                            ],
                                            [
                                                -9.15137529373169,
                                                38.74959854396535
                                            ],
                                            [
                                                -9.151268005371094,
                                                38.74907976949178
                                            ],
                                            [
                                                -9.151761531829834,
                                                38.74891242208322
                                            ],
                                            [
                                                -9.151482582092285,
                                                38.747941799378026
                                            ],
                                            [
                                                -9.156632423400879,
                                                38.747038104307435
                                            ],
                                            [
                                                -9.15536642074585,
                                                38.74590010165094
                                            ],
                                            [
                                                -9.154642224311829,
                                                38.74390436937326
                                            ],
                                            [
                                                -9.153960943222046,
                                                38.74296296686167
                                            ],
                                            [
                                                -9.152383804321287,
                                                38.743762113789764
                                            ],
                                            [
                                                -9.152137041091917,
                                                38.74384579357908
                                            ],
                                            [
                                                -9.152061939239502,
                                                38.743967129099424
                                            ],
                                            [
                                                -9.152158498764038,
                                                38.74417214382042
                                            ],
                                            [
                                                -9.151777625083923,
                                                38.74498382897791
                                            ],
                                            [
                                                -9.150774478912354,
                                                38.74451941231094
                                            ],
                                            [
                                                -9.150468707084656,
                                                38.74446920492277
                                            ],
                                            [
                                                -9.149540662765503,
                                                38.74457380360828
                                            ],
                                            [
                                                -9.14936363697052,
                                                38.74389181742141
                                            ],
                                            [
                                                -9.14959967136383,
                                                38.74384160959196
                                            ],
                                            [
                                                -9.149546027183533,
                                                38.74362822592289
                                            ],
                                            [
                                                -9.15111780166626,
                                                38.74289602221041
                                            ],
                                            [
                                                -9.149953722953796,
                                                38.74156548424692
                                            ],
                                            [
                                                -9.150372147560118,
                                                38.74129351588829
                                            ],
                                            [
                                                -9.149803519248962,
                                                38.7405319989738
                                            ],
                                            [
                                                -9.148698449134827,
                                                38.74103828310192
                                            ],
                                            [
                                                -9.146697521209717,
                                                38.741381382702045
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Rio de Janeiro",
                                    "charge": "0.8",
                                    "color": "Verde",
                                    "spots": "72",
                                    "center": [
                                        -9.141654968261717,
                                        38.750937299383246
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.141976833343506,
                                                38.74928476953266
                                            ],
                                            [
                                                -9.137492179870605,
                                                38.74907140213065
                                            ],
                                            [
                                                -9.13738489151001,
                                                38.751573199411816
                                            ],
                                            [
                                                -9.138994216918945,
                                                38.754769347975106
                                            ],
                                            [
                                                -9.144036769866943,
                                                38.75306252204569
                                            ],
                                            [
                                                -9.141976833343506,
                                                38.74928476953266
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Av. da Igreja",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "56",
                                    "center": [
                                        -9.148435592651367,
                                        38.75167360416169
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.142019748687744,
                                                38.749322422537375
                                            ],
                                            [
                                                -9.145903587341309,
                                                38.75668529512561
                                            ],
                                            [
                                                -9.151139259338379,
                                                38.754995248348564
                                            ],
                                            [
                                                -9.148263931274414,
                                                38.749606911264664
                                            ],
                                            [
                                                -9.148060083389282,
                                                38.74838527518231
                                            ],
                                            [
                                                -9.142019748687744,
                                                38.749322422537375
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Campo Grande",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "100",
                                    "center": [
                                        -9.155473709106445,
                                        38.750937299383246
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.148081541061401,
                                                38.74839364262384
                                            ],
                                            [
                                                -9.148285388946533,
                                                38.749590176665045
                                            ],
                                            [
                                                -9.151160717010498,
                                                38.754995248348564
                                            ],
                                            [
                                                -9.15285587310791,
                                                38.75439284576394
                                            ],
                                            [
                                                -9.154572486877441,
                                                38.756024341002494
                                            ],
                                            [
                                                -9.15809154510498,
                                                38.75497014834236
                                            ],
                                            [
                                                -9.15885329246521,
                                                38.755154214849426
                                            ],
                                            [
                                                -9.160569906234741,
                                                38.75458528047555
                                            ],
                                            [
                                                -9.156632423400879,
                                                38.74705483950528
                                            ],
                                            [
                                                -9.151493310928345,
                                                38.747958534364074
                                            ],
                                            [
                                                -9.151772260665894,
                                                38.74892915684175
                                            ],
                                            [
                                                -9.151278734207153,
                                                38.74909650421107
                                            ],
                                            [
                                                -9.151386022567749,
                                                38.74961527856301
                                            ],
                                            [
                                                -9.150720834732056,
                                                38.74974915520319
                                            ],
                                            [
                                                -9.150227308273315,
                                                38.748050576717084
                                            ],
                                            [
                                                -9.148081541061401,
                                                38.74839364262384
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Praça José Fontana",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "45",
                                    "center": [
                                        -9.1461181640625,
                                        38.7286437509105
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.148221015930176,
                                                38.72845961605723
                                            ],
                                            [
                                                -9.14785623550415,
                                                38.72794068800838
                                            ],
                                            [
                                                -9.146997928619383,
                                                38.72571427650825
                                            ],
                                            [
                                                -9.1461181640625,
                                                38.72472659806434
                                            ],
                                            [
                                                -9.146096706390379,
                                                38.72578123726451
                                            ],
                                            [
                                                -9.143521785736084,
                                                38.72773981162272
                                            ],
                                            [
                                                -9.140582084655762,
                                                38.72760589371852
                                            ],
                                            [
                                                -9.14036750793457,
                                                38.729229631377216
                                            ],
                                            [
                                                -9.140879809856415,
                                                38.73164424516476
                                            ],
                                            [
                                                -9.141011238098145,
                                                38.73159193637218
                                            ],
                                            [
                                                -9.144412279129028,
                                                38.733535705369896
                                            ],
                                            [
                                                -9.144734144210815,
                                                38.73332229090655
                                            ],
                                            [
                                                -9.145219624042511,
                                                38.733330660113175
                                            ],
                                            [
                                                -9.148221015930176,
                                                38.72845961605723
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Santa Marta ",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "83",
                                    "center": [
                                        -9.147834777832031,
                                        38.72288512722238
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.148215651512146,
                                                38.72844078405688
                                            ],
                                            [
                                                -9.148518741130827,
                                                38.72794068800838
                                            ],
                                            [
                                                -9.14900690317154,
                                                38.727405016391536
                                            ],
                                            [
                                                -9.149808883666992,
                                                38.726057449720756
                                            ],
                                            [
                                                -9.149283170700073,
                                                38.72583145779053
                                            ],
                                            [
                                                -9.149004220962524,
                                                38.72539621205908
                                            ],
                                            [
                                                -9.148682355880737,
                                                38.72532088079793
                                            ],
                                            [
                                                -9.144787788391113,
                                                38.720876195817276
                                            ],
                                            [
                                                -9.1446053981781,
                                                38.72096827307492
                                            ],
                                            [
                                                -9.143795371055601,
                                                38.71987589432773
                                            ],
                                            [
                                                -9.14310336112976,
                                                38.72039488094865
                                            ],
                                            [
                                                -9.142529368400574,
                                                38.72071296765987
                                            ],
                                            [
                                                -9.14287269115448,
                                                38.72103523827869
                                            ],
                                            [
                                                -9.143446683883667,
                                                38.72141610168178
                                            ],
                                            [
                                                -9.14383292198181,
                                                38.72195181819781
                                            ],
                                            [
                                                -9.144288897514343,
                                                38.72324086960606
                                            ],
                                            [
                                                -9.144288897514343,
                                                38.72334549938187
                                            ],
                                            [
                                                -9.143564701080322,
                                                38.72333712900546
                                            ],
                                            [
                                                -9.143575429916382,
                                                38.72339990680475
                                            ],
                                            [
                                                -9.145672917366028,
                                                38.72335386975732
                                            ],
                                            [
                                                -9.145962595939636,
                                                38.7243415671759
                                            ],
                                            [
                                                -9.14612352848053,
                                                38.72472659806434
                                            ],
                                            [
                                                -9.147003293037415,
                                                38.72572264660622
                                            ],
                                            [
                                                -9.147861599922178,
                                                38.72794487292707
                                            ],
                                            [
                                                -9.148215651512146,
                                                38.72844078405688
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Campo Santana",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "40",
                                    "center": [
                                        -9.144144058227539,
                                        38.72375564662567
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.140592813491821,
                                                38.72760170877996
                                            ],
                                            [
                                                -9.143521785736084,
                                                38.72774399655319
                                            ],
                                            [
                                                -9.14610207080841,
                                                38.72578960735462
                                            ],
                                            [
                                                -9.14612889289856,
                                                38.72472241295714
                                            ],
                                            [
                                                -9.145967960357666,
                                                38.72434575230539
                                            ],
                                            [
                                                -9.145678281784058,
                                                38.7233622401318
                                            ],
                                            [
                                                -9.143575429916382,
                                                38.72340827717381
                                            ],
                                            [
                                                -9.143580794334412,
                                                38.72333712900546
                                            ],
                                            [
                                                -9.144294261932373,
                                                38.72335386975732
                                            ],
                                            [
                                                -9.144294261932373,
                                                38.72323249921738
                                            ],
                                            [
                                                -9.143843650817871,
                                                38.7219601887365
                                            ],
                                            [
                                                -9.143446683883667,
                                                38.72142865758361
                                            ],
                                            [
                                                -9.142540097236633,
                                                38.72072133834368
                                            ],
                                            [
                                                -9.141912460327148,
                                                38.720625075420706
                                            ],
                                            [
                                                -9.14137601852417,
                                                38.72032372978001
                                            ],
                                            [
                                                -9.140174388885496,
                                                38.72030698831826
                                            ],
                                            [
                                                -9.13935899734497,
                                                38.720574851235504
                                            ],
                                            [
                                                -9.139251708984375,
                                                38.72234941770309
                                            ],
                                            [
                                                -9.140753746032715,
                                                38.72584819795801
                                            ],
                                            [
                                                -9.140592813491821,
                                                38.72760170877996
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Chile",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "55",
                                    "center": [
                                        -9.137105941772461,
                                        38.73192461964005
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.140753746032715,
                                                38.731698646268384
                                            ],
                                            [
                                                -9.14088249206543,
                                                38.731642152813784
                                            ],
                                            [
                                                -9.140678644180298,
                                                38.73057713821701
                                            ],
                                            [
                                                -9.13963794708252,
                                                38.730736159086604
                                            ],
                                            [
                                                -9.138200283050537,
                                                38.73055202962631
                                            ],
                                            [
                                                -9.136183261871338,
                                                38.73061898584861
                                            ],
                                            [
                                                -9.13611888885498,
                                                38.729664853756496
                                            ],
                                            [
                                                -9.134659767150879,
                                                38.72959789663996
                                            ],
                                            [
                                                -9.134788513183594,
                                                38.72830059012025
                                            ],
                                            [
                                                -9.133608341217041,
                                                38.728216892116485
                                            ],
                                            [
                                                -9.132653474807737,
                                                38.728568423073355
                                            ],
                                            [
                                                -9.131923913955688,
                                                38.72820852231071
                                            ],
                                            [
                                                -9.131505489349365,
                                                38.728267110930496
                                            ],
                                            [
                                                -9.131226539611816,
                                                38.728216892116485
                                            ],
                                            [
                                                -9.131011962890625,
                                                38.72781514033352
                                            ],
                                            [
                                                -9.13063645362854,
                                                38.727823510185395
                                            ],
                                            [
                                                -9.130722284317015,
                                                38.72822526192126
                                            ],
                                            [
                                                -9.130926132202147,
                                                38.72850983470067
                                            ],
                                            [
                                                -9.131312370300293,
                                                38.72897854033697
                                            ],
                                            [
                                                -9.13137674331665,
                                                38.729388655246275
                                            ],
                                            [
                                                -9.130969047546385,
                                                38.72994105119892
                                            ],
                                            [
                                                -9.130797386169434,
                                                38.7299828992031
                                            ],
                                            [
                                                -9.130947589874268,
                                                38.73278665964114
                                            ],
                                            [
                                                -9.137020111083984,
                                                38.734577660946684
                                            ],
                                            [
                                                -9.138500690460205,
                                                38.73282850597838
                                            ],
                                            [
                                                -9.14113998413086,
                                                38.73304610653687
                                            ],
                                            [
                                                -9.140753746032715,
                                                38.731698646268384
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Anjos",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "80",
                                    "center": [
                                        -9.13813591003418,
                                        38.72603233954158
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.14064645767212,
                                                38.73056876868774
                                            ],
                                            [
                                                -9.1403728723526,
                                                38.72924218590605
                                            ],
                                            [
                                                -9.140592813491821,
                                                38.72760170877996
                                            ],
                                            [
                                                -9.140764474868774,
                                                38.72586075308105
                                            ],
                                            [
                                                -9.139251708984375,
                                                38.722353602949305
                                            ],
                                            [
                                                -9.139278531074524,
                                                38.722064820387494
                                            ],
                                            [
                                                -9.138731360435486,
                                                38.72224060121627
                                            ],
                                            [
                                                -9.13838803768158,
                                                38.72224897172115
                                            ],
                                            [
                                                -9.136821627616882,
                                                38.72347105491062
                                            ],
                                            [
                                                -9.136220812797546,
                                                38.723320388249654
                                            ],
                                            [
                                                -9.135764837265015,
                                                38.72342501790903
                                            ],
                                            [
                                                -9.135577082633972,
                                                38.723010683560034
                                            ],
                                            [
                                                -9.13515329360962,
                                                38.722596346808594
                                            ],
                                            [
                                                -9.132653474807737,
                                                38.722487530697755
                                            ],
                                            [
                                                -9.132449626922606,
                                                38.72289768286607
                                            ],
                                            [
                                                -9.131709337234495,
                                                38.72331201787029
                                            ],
                                            [
                                                -9.131795167922974,
                                                38.723609165737415
                                            ],
                                            [
                                                -9.130228757858275,
                                                38.726304366012585
                                            ],
                                            [
                                                -9.13063108921051,
                                                38.727823510185395
                                            ],
                                            [
                                                -9.131011962890625,
                                                38.72781932525959
                                            ],
                                            [
                                                -9.131231904029846,
                                                38.72821270721372
                                            ],
                                            [
                                                -9.131510853767395,
                                                38.728262926030666
                                            ],
                                            [
                                                -9.131918549537659,
                                                38.72820852231071
                                            ],
                                            [
                                                -9.132658839225769,
                                                38.728568423073355
                                            ],
                                            [
                                                -9.13359761238098,
                                                38.728221077018986
                                            ],
                                            [
                                                -9.134793877601624,
                                                38.72830059012025
                                            ],
                                            [
                                                -9.134675860404968,
                                                38.72959789663996
                                            ],
                                            [
                                                -9.13611352443695,
                                                38.729673223391664
                                            ],
                                            [
                                                -9.136183261871338,
                                                38.73061480108653
                                            ],
                                            [
                                                -9.138194918632507,
                                                38.73054784486034
                                            ],
                                            [
                                                -9.139648675918579,
                                                38.73074034384155
                                            ],
                                            [
                                                -9.14064645767212,
                                                38.73056876868774
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Alameda",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "76",
                                    "center": [
                                        -9.13461685180664,
                                        38.73687911538422
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.130942225456238,
                                                38.732799213544865
                                            ],
                                            [
                                                -9.131054878234863,
                                                38.73307539886914
                                            ],
                                            [
                                                -9.130416512489319,
                                                38.73341853672385
                                            ],
                                            [
                                                -9.130330681800842,
                                                38.73684982461182
                                            ],
                                            [
                                                -9.129536747932434,
                                                38.736925143716554
                                            ],
                                            [
                                                -9.129230976104736,
                                                38.737109256749335
                                            ],
                                            [
                                                -9.129161238670347,
                                                38.737326844267066
                                            ],
                                            [
                                                -9.128801822662354,
                                                38.73734776610883
                                            ],
                                            [
                                                -9.128522872924805,
                                                38.737297553678296
                                            ],
                                            [
                                                -9.127192497253418,
                                                38.73774946428237
                                            ],
                                            [
                                                -9.127235412597656,
                                                38.73821810929596
                                            ],
                                            [
                                                -9.126849174499512,
                                                38.73841895621757
                                            ],
                                            [
                                                -9.128286838531494,
                                                38.741163807537085
                                            ],
                                            [
                                                -9.12912368774414,
                                                38.74161569367677
                                            ],
                                            [
                                                -9.130303859710693,
                                                38.74198389508377
                                            ],
                                            [
                                                -9.132975339889526,
                                                38.74225167673276
                                            ],
                                            [
                                                -9.13350373506546,
                                                38.74109476912505
                                            ],
                                            [
                                                -9.133675396442413,
                                                38.73989390849312
                                            ],
                                            [
                                                -9.134665131568909,
                                                38.73999223756174
                                            ],
                                            [
                                                -9.134659767150879,
                                                38.73952569631005
                                            ],
                                            [
                                                -9.133672714233398,
                                                38.739257904439015
                                            ],
                                            [
                                                -9.133975803852081,
                                                38.73761765731821
                                            ],
                                            [
                                                -9.136518537998198,
                                                38.73745446740652
                                            ],
                                            [
                                                -9.136416614055634,
                                                38.73649414998851
                                            ],
                                            [
                                                -9.137014746665955,
                                                38.734577660946684
                                            ],
                                            [
                                                -9.130942225456238,
                                                38.732799213544865
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Gulbenkian",
                                    "charge": "1.60",
                                    "color": "Vermelha",
                                    "spots": "60",
                                    "center": [
                                        -9.155731201171875,
                                        38.73895454524709
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.153263568878174,
                                                38.734619506234694
                                            ],
                                            [
                                                -9.1532501578331,
                                                38.73460276812244
                                            ],
                                            [
                                                -9.152171909809113,
                                                38.73499402047105
                                            ],
                                            [
                                                -9.152558147907257,
                                                38.73825158382212
                                            ],
                                            [
                                                -9.153116047382355,
                                                38.73899220369958
                                            ],
                                            [
                                                -9.149803519248962,
                                                38.740529906883175
                                            ],
                                            [
                                                -9.150369465351103,
                                                38.74129770002474
                                            ],
                                            [
                                                -9.149956405162811,
                                                38.74156339218657
                                            ],
                                            [
                                                -9.151115119457245,
                                                38.74290020625294
                                            ],
                                            [
                                                -9.156417846679688,
                                                38.740544551516216
                                            ],
                                            [
                                                -9.15858507156372,
                                                38.740544551516216
                                            ],
                                            [
                                                -9.15530204772949,
                                                38.736159395783886
                                            ],
                                            [
                                                -9.153263568878174,
                                                38.734619506234694
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Bairro de Santos",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "76",
                                    "center": [
                                        -9.158649444580078,
                                        38.742435776033936
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.15858507156372,
                                                38.74055291987662
                                            ],
                                            [
                                                -9.156417846679688,
                                                38.74055710405647
                                            ],
                                            [
                                                -9.149551391601562,
                                                38.74361985792289
                                            ],
                                            [
                                                -9.14961040019989,
                                                38.74385416155264
                                            ],
                                            [
                                                -9.14935827255249,
                                                38.743896001405595
                                            ],
                                            [
                                                -9.149540662765503,
                                                38.74458217149651
                                            ],
                                            [
                                                -9.150479435920715,
                                                38.744473388873146
                                            ],
                                            [
                                                -9.150779843330382,
                                                38.74451941231094
                                            ],
                                            [
                                                -9.151777625083923,
                                                38.74499219681804
                                            ],
                                            [
                                                -9.152158498764038,
                                                38.744176327788175
                                            ],
                                            [
                                                -9.152067303657532,
                                                38.74397968103802
                                            ],
                                            [
                                                -9.152153134346008,
                                                38.743849977565986
                                            ],
                                            [
                                                -9.152426719665526,
                                                38.74374537782013
                                            ],
                                            [
                                                -9.153971672058105,
                                                38.74296296686167
                                            ],
                                            [
                                                -9.154642224311829,
                                                38.743896001405595
                                            ],
                                            [
                                                -9.15536105632782,
                                                38.745887550049915
                                            ],
                                            [
                                                -9.15662705898285,
                                                38.74705902330416
                                            ],
                                            [
                                                -9.161911010742188,
                                                38.745247415472136
                                            ],
                                            [
                                                -9.15858507156372,
                                                38.74055291987662
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Laranjeiras",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "88",
                                    "center": [
                                        -9.168691635131836,
                                        38.74584989523363
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.161932468414307,
                                                38.745264151089714
                                            ],
                                            [
                                                -9.16532278060913,
                                                38.75008384570525
                                            ],
                                            [
                                                -9.16811227798462,
                                                38.75001690773035
                                            ],
                                            [
                                                -9.171416759490965,
                                                38.7546856809887
                                            ],
                                            [
                                                -9.173755645751953,
                                                38.75458528047555
                                            ],
                                            [
                                                -9.17508602142334,
                                                38.754033075128824
                                            ],
                                            [
                                                -9.172682762145996,
                                                38.74998343871939
                                            ],
                                            [
                                                -9.174163341522217,
                                                38.74991650065036
                                            ],
                                            [
                                                -9.172725677490234,
                                                38.7478748593947
                                            ],
                                            [
                                                -9.171438217163086,
                                                38.74814261895145
                                            ],
                                            [
                                                -9.170687198638916,
                                                38.747138515435715
                                            ],
                                            [
                                                -9.16982889175415,
                                                38.74643563457229
                                            ],
                                            [
                                                -9.16907787322998,
                                                38.74497964505743
                                            ],
                                            [
                                                -9.166116714477539,
                                                38.74287091794999
                                            ],
                                            [
                                                -9.163005352020264,
                                                38.74113033437596
                                            ],
                                            [
                                                -9.15910005569458,
                                                38.74129770002474
                                            ],
                                            [
                                                -9.161932468414307,
                                                38.745264151089714
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Praça de Espanha",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "68",
                                    "center": [
                                        -9.16560173034668,
                                        38.73774946428237
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.15637493133545,
                                                38.737548615478
                                            ],
                                            [
                                                -9.159164428710938,
                                                38.74129770002474
                                            ],
                                            [
                                                -9.162983894348145,
                                                38.74114707095849
                                            ],
                                            [
                                                -9.166202545166016,
                                                38.742904390295244
                                            ],
                                            [
                                                -9.170043468475342,
                                                38.74074539189515
                                            ],
                                            [
                                                -9.171395301818848,
                                                38.73935623438332
                                            ],
                                            [
                                                -9.17107343673706,
                                                38.73671173938017
                                            ],
                                            [
                                                -9.166374206542969,
                                                38.73677868982884
                                            ],
                                            [
                                                -9.165794849395752,
                                                38.73557357215053
                                            ],
                                            [
                                                -9.163928031921387,
                                                38.733782595816336
                                            ],
                                            [
                                                -9.16234016418457,
                                                38.735422931011044
                                            ],
                                            [
                                                -9.15637493133545,
                                                38.737548615478
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Castilho",
                                    "charge": "1.60",
                                    "color": "Vermelha",
                                    "spots": "45",
                                    "center": [
                                        -9.154443740844727,
                                        38.72703673982525
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.154529571533203,
                                                38.73356499750139
                                            ],
                                            [
                                                -9.155076742172241,
                                                38.73200412861934
                                            ],
                                            [
                                                -9.157876968383789,
                                                38.72994942080172
                                            ],
                                            [
                                                -9.153542518615723,
                                                38.72509488653802
                                            ],
                                            [
                                                -9.151182174682617,
                                                38.72527903006298
                                            ],
                                            [
                                                -9.15088176727295,
                                                38.72589841843698
                                            ],
                                            [
                                                -9.150452613830565,
                                                38.726065819778526
                                            ],
                                            [
                                                -9.149814248085022,
                                                38.72606163474977
                                            ],
                                            [
                                                -9.149014949798582,
                                                38.72741338629145
                                            ],
                                            [
                                                -9.152775406837463,
                                                38.73157310519748
                                            ],
                                            [
                                                -9.152904152870178,
                                                38.7316484298665
                                            ],
                                            [
                                                -9.154529571533203,
                                                38.73356499750139
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Campolide",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "72",
                                    "center": [
                                        -9.160194396972654,
                                        38.731455933332256
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.163928031921387,
                                                38.73380770327155
                                            ],
                                            [
                                                -9.162994623184204,
                                                38.73333902931887
                                            ],
                                            [
                                                -9.162554740905762,
                                                38.73228450168213
                                            ],
                                            [
                                                -9.16159987449646,
                                                38.731422455621185
                                            ],
                                            [
                                                -9.161460399627686,
                                                38.7302507258494
                                            ],
                                            [
                                                -9.161717891693115,
                                                38.729572787705074
                                            ],
                                            [
                                                -9.161696434020996,
                                                38.72888647340107
                                            ],
                                            [
                                                -9.160494804382324,
                                                38.72814993364289
                                            ],
                                            [
                                                -9.159904718399048,
                                                38.7284512462799
                                            ],
                                            [
                                                -9.157136678695679,
                                                38.72528740021194
                                            ],
                                            [
                                                -9.156514406204224,
                                                38.724935853111795
                                            ],
                                            [
                                                -9.153545200824738,
                                                38.72509488653802
                                            ],
                                            [
                                                -9.157898426055908,
                                                38.729966160004366
                                            ],
                                            [
                                                -9.1550874710083,
                                                38.73202505202021
                                            ],
                                            [
                                                -9.154529571533203,
                                                38.73358173585684
                                            ],
                                            [
                                                -9.154433012008667,
                                                38.73385791815554
                                            ],
                                            [
                                                -9.153907299041746,
                                                38.734385172305984
                                            ],
                                            [
                                                -9.153285026550293,
                                                38.73460276812244
                                            ],
                                            [
                                                -9.15530204772949,
                                                38.736151026908665
                                            ],
                                            [
                                                -9.15635347366333,
                                                38.73755698418948
                                            ],
                                            [
                                                -9.16235089302063,
                                                38.73543966893112
                                            ],
                                            [
                                                -9.163928031921387,
                                                38.73380770327155
                                            ]
                                        ]
                                    ]
                                }
                            }
                        ]
                    };
                    this.ZonesZoomed = {
                        "type": "FeatureCollection",
                        "features": [
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Parque",
                                    "charge": "1.60",
                                    "color": "Vermelha",
                                    "spots": "43",
                                    "parent": "Parque",
                                    "center": [
                                        -9.151439666748045,
                                        38.73058550774531
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.153912663459778,
                                                38.734368434138794
                                            ],
                                            [
                                                -9.154422283172607,
                                                38.73383281071796
                                            ],
                                            [
                                                -9.154513478279114,
                                                38.7335691820906
                                            ],
                                            [
                                                -9.152909517288208,
                                                38.7316484298665
                                            ],
                                            [
                                                -9.152780771255493,
                                                38.73158147460909
                                            ],
                                            [
                                                -9.152566194534302,
                                                38.731380608460256
                                            ],
                                            [
                                                -9.149004220962524,
                                                38.727405016391536
                                            ],
                                            [
                                                -9.148526787757874,
                                                38.72794278046775
                                            ],
                                            [
                                                -9.153912663459778,
                                                38.734368434138794
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Laranjeiras 1",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "10",
                                    "parent": "Laranjeiras",
                                    "center": [
                                        -9.171223640441895,
                                        38.751238515892375
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.172682762145996,
                                                38.75000017322683
                                            ],
                                            [
                                                -9.168133735656738,
                                                38.7500420094783
                                            ],
                                            [
                                                -9.169925451278687,
                                                38.75255213969891
                                            ],
                                            [
                                                -9.173036813735962,
                                                38.752493570999476
                                            ],
                                            [
                                                -9.17404532432556,
                                                38.75225092873278
                                            ],
                                            [
                                                -9.172682762145996,
                                                38.75000017322683
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Laranjeiras 2",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "10",
                                    "parent": "Laranjeiras",
                                    "center": [
                                        -9.17259693145752,
                                        38.75358126757668
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.169903993606567,
                                                38.7525772405554
                                            ],
                                            [
                                                -9.171448945999146,
                                                38.75469404769175
                                            ],
                                            [
                                                -9.173766374588013,
                                                38.754602013904226
                                            ],
                                            [
                                                -9.1750967502594,
                                                38.75404980868696
                                            ],
                                            [
                                                -9.174056053161621,
                                                38.75225929572122
                                            ],
                                            [
                                                -9.173036813735962,
                                                38.752518671876565
                                            ],
                                            [
                                                -9.169903993606567,
                                                38.7525772405554
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Laranjeiras 3",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "15",
                                    "parent": "Laranjeiras",
                                    "center": [
                                        -9.167962074279783,
                                        38.748092414111035
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.174163341522217,
                                                38.74992486791242
                                            ],
                                            [
                                                -9.172736406326294,
                                                38.74789159439642
                                            ],
                                            [
                                                -9.171448945999146,
                                                38.7481593538904
                                            ],
                                            [
                                                -9.170644283294678,
                                                38.74712178025749
                                            ],
                                            [
                                                -9.169796705245972,
                                                38.74641053155634
                                            ],
                                            [
                                                -9.16907787322998,
                                                38.744962909373186
                                            ],
                                            [
                                                -9.163466691970825,
                                                38.74741464531031
                                            ],
                                            [
                                                -9.16534423828125,
                                                38.75008384570525
                                            ],
                                            [
                                                -9.16811227798462,
                                                38.750025274980636
                                            ],
                                            [
                                                -9.174163341522217,
                                                38.74992486791242
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Laranjeiras 4",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "13",
                                    "parent": "Laranjeiras",
                                    "center": [
                                        -9.163713455200195,
                                        38.74400896888619
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.169067144393921,
                                                38.7449880128981
                                            ],
                                            [
                                                -9.166191816329956,
                                                38.74292949454387
                                            ],
                                            [
                                                -9.163005352020264,
                                                38.741163807537085
                                            ],
                                            [
                                                -9.159132242202759,
                                                38.74129770002474
                                            ],
                                            [
                                                -9.163455963134766,
                                                38.747423012865596
                                            ],
                                            [
                                                -9.169067144393921,
                                                38.7449880128981
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Estefânia 1",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "20",
                                    "parent": "Estefânia",
                                    "center": [
                                        -9.143500328063965,
                                        38.73577442650899
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.14562463760376,
                                                38.7372808161936
                                            ],
                                            [
                                                -9.145023822784424,
                                                38.73431821961372
                                            ],
                                            [
                                                -9.144492745399473,
                                                38.734134099386395
                                            ],
                                            [
                                                -9.144272804260254,
                                                38.73393742498297
                                            ],
                                            [
                                                -9.141418933868408,
                                                38.73426800505333
                                            ],
                                            [
                                                -9.142169952392578,
                                                38.73783315111748
                                            ],
                                            [
                                                -9.14562463760376,
                                                38.7372808161936
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Estefânia 2",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "17",
                                    "parent": "Estefânia",
                                    "center": [
                                        -9.142427444458008,
                                        38.73336413693001
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.144401550292969,
                                                38.73356499750139
                                            ],
                                            [
                                                -9.144412279129028,
                                                38.733537797665406
                                            ],
                                            [
                                                -9.141016602516174,
                                                38.73159612107701
                                            ],
                                            [
                                                -9.140764474868774,
                                                38.731700738617704
                                            ],
                                            [
                                                -9.14113998413086,
                                                38.73304610653687
                                            ],
                                            [
                                                -9.141440391540527,
                                                38.734284743244054
                                            ],
                                            [
                                                -9.144272804260254,
                                                38.73396671694971
                                            ],
                                            [
                                                -9.144401550292969,
                                                38.73356499750139
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Estefânia 3",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "30",
                                    "parent": "Estefânia",
                                    "center": [
                                        -9.13912296295166,
                                        38.73677868982884
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.1416335105896,
                                                38.73520533769313
                                            ],
                                            [
                                                -9.138329029083252,
                                                38.735230444648266
                                            ],
                                            [
                                                -9.136590957641602,
                                                38.73599201809325
                                            ],
                                            [
                                                -9.136430025100708,
                                                38.736485781152524
                                            ],
                                            [
                                                -9.136515855789185,
                                                38.73745655958725
                                            ],
                                            [
                                                -9.136805534362791,
                                                38.737774570343205
                                            ],
                                            [
                                                -9.138586521148682,
                                                38.73835200730645
                                            ],
                                            [
                                                -9.140914678573607,
                                                38.73790010051497
                                            ],
                                            [
                                                -9.141043424606323,
                                                38.73793357519016
                                            ],
                                            [
                                                -9.142159223556519,
                                                38.73780804507723
                                            ],
                                            [
                                                -9.1416335105896,
                                                38.73520533769313
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Estefânia 4",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "30",
                                    "parent": "Estefânia",
                                    "center": [
                                        -9.139208793640137,
                                        38.734234528660124
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.14162278175354,
                                                38.73520533769313
                                            ],
                                            [
                                                -9.141150712966919,
                                                38.73306284501392
                                            ],
                                            [
                                                -9.138479232788086,
                                                38.732836875242874
                                            ],
                                            [
                                                -9.137052297592161,
                                                38.734577660946684
                                            ],
                                            [
                                                -9.13661241531372,
                                                38.73603386255266
                                            ],
                                            [
                                                -9.138329029083252,
                                                38.73524718261345
                                            ],
                                            [
                                                -9.14162278175354,
                                                38.73520533769313
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Campo Pequeno 1",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "35",
                                    "parent": "Campo Pequeno",
                                    "center": [
                                        -9.145731925964355,
                                        38.742904390295244
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.147448539733887,
                                                38.74482902375787
                                            ],
                                            [
                                                -9.146676063537598,
                                                38.741197280682535
                                            ],
                                            [
                                                -9.143500328063965,
                                                38.74161569367677
                                            ],
                                            [
                                                -9.1455602645874,
                                                38.74521394422522
                                            ],
                                            [
                                                -9.147448539733887,
                                                38.74482902375787
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Campo Pequeno 2",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "45",
                                    "parent": "Campo Pequeno",
                                    "center": [
                                        -9.144401550292969,
                                        38.73935623438332
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.14661169052124,
                                                38.741163807537085
                                            ],
                                            [
                                                -9.14562463760376,
                                                38.73734776610883
                                            ],
                                            [
                                                -9.142234325408936,
                                                38.73783315111748
                                            ],
                                            [
                                                -9.142427444458008,
                                                38.73910517893793
                                            ],
                                            [
                                                -9.14212703704834,
                                                38.739205601222004
                                            ],
                                            [
                                                -9.143500328063965,
                                                38.74161569367677
                                            ],
                                            [
                                                -9.14661169052124,
                                                38.741163807537085
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Av. João XXI 1",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "23",
                                    "parent": "Av. João XXI",
                                    "center": [
                                        -9.14011001586914,
                                        38.74029350024827
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.142427444458008,
                                                38.73910517893793
                                            ],
                                            [
                                                -9.142148494720457,
                                                38.73784988847274
                                            ],
                                            [
                                                -9.141043424606323,
                                                38.737935667356844
                                            ],
                                            [
                                                -9.140885174274445,
                                                38.73789173184371
                                            ],
                                            [
                                                -9.138586521148682,
                                                38.73836874454011
                                            ],
                                            [
                                                -9.137041568756104,
                                                38.739858342626455
                                            ],
                                            [
                                                -9.138522148132324,
                                                38.742603138623146
                                            ],
                                            [
                                                -9.143671989440916,
                                                38.74186674029658
                                            ],
                                            [
                                                -9.142084121704102,
                                                38.73918886418447
                                            ],
                                            [
                                                -9.142427444458008,
                                                38.73910517893793
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Av. João XXI 2",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "27",
                                    "parent": "Av. João XXI",
                                    "center": [
                                        -9.135732650756836,
                                        38.73949013026
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.138522148132324,
                                                38.73841895621757
                                            ],
                                            [
                                                -9.138597249984741,
                                                38.73836874454011
                                            ],
                                            [
                                                -9.136794805526733,
                                                38.73776620165722
                                            ],
                                            [
                                                -9.136537313461304,
                                                38.73747329703077
                                            ],
                                            [
                                                -9.133983850479126,
                                                38.73761556514222
                                            ],
                                            [
                                                -9.133683443069456,
                                                38.73924744379868
                                            ],
                                            [
                                                -9.134670495986938,
                                                38.73954034114904
                                            ],
                                            [
                                                -9.134670495986938,
                                                38.74001734283415
                                            ],
                                            [
                                                -9.133694171905518,
                                                38.739900184820705
                                            ],
                                            [
                                                -9.133533239364624,
                                                38.74108012460482
                                            ],
                                            [
                                                -9.133415222167969,
                                                38.74146506528127
                                            ],
                                            [
                                                -9.137964248657227,
                                                38.741598957204076
                                            ],
                                            [
                                                -9.137063026428223,
                                                38.739925290125484
                                            ],
                                            [
                                                -9.138522148132324,
                                                38.73841895621757
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Av. João XXI 3",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "23",
                                    "parent": "Av. João XXI",
                                    "center": [
                                        -9.141998291015625,
                                        38.74374119382711
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.143661260604858,
                                                38.74189184491
                                            ],
                                            [
                                                -9.138532876968382,
                                                38.74261150674231
                                            ],
                                            [
                                                -9.139927625656126,
                                                38.745498449323925
                                            ],
                                            [
                                                -9.145538806915283,
                                                38.745222312038415
                                            ],
                                            [
                                                -9.143661260604858,
                                                38.74189184491
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Av. João XXI 4",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "7",
                                    "parent": "Av. João XXI",
                                    "center": [
                                        -9.135432243347168,
                                        38.74183326746493
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.138522148132324,
                                                38.7426198748605
                                            ],
                                            [
                                                -9.137964248657227,
                                                38.741632430145565
                                            ],
                                            [
                                                -9.13337230682373,
                                                38.741498538285526
                                            ],
                                            [
                                                -9.132900238037108,
                                                38.7424525123105
                                            ],
                                            [
                                                -9.138522148132324,
                                                38.7426198748605
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Av. João XXI 5",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "20",
                                    "parent": "Av. João XXI",
                                    "center": [
                                        -9.13538932800293,
                                        38.744176327788175
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.139916896820068,
                                                38.74548171376125
                                            ],
                                            [
                                                -9.138543605804443,
                                                38.74265334732343
                                            ],
                                            [
                                                -9.132921695709229,
                                                38.742485984851875
                                            ],
                                            [
                                                -9.131269454956055,
                                                38.745983778934686
                                            ],
                                            [
                                                -9.139916896820068,
                                                38.74548171376125
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Berna/Valmor 1",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "47",
                                    "parent": "Berna/Valmor",
                                    "center": [
                                        -9.15088176727295,
                                        38.7372808161936
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.15311336517334,
                                                38.73900475651266
                                            ],
                                            [
                                                -9.152534008026123,
                                                38.73825158382212
                                            ],
                                            [
                                                -9.152147769927979,
                                                38.735021219752504
                                            ],
                                            [
                                                -9.149014949798582,
                                                38.73510490978435
                                            ],
                                            [
                                                -9.150302410125732,
                                                38.74034371057247
                                            ],
                                            [
                                                -9.15311336517334,
                                                38.73900475651266
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Berna/Valmor 2",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "30",
                                    "parent": "Berna/Valmor",
                                    "center": [
                                        -9.147706031799316,
                                        38.73798378717357
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.150302410125732,
                                                38.74034371057247
                                            ],
                                            [
                                                -9.148972034454344,
                                                38.735155123756385
                                            ],
                                            [
                                                -9.145238399505615,
                                                38.73520533769313
                                            ],
                                            [
                                                -9.145667552947998,
                                                38.73733102863592
                                            ],
                                            [
                                                -9.146697521209717,
                                                38.741381382702045
                                            ],
                                            [
                                                -9.148671627044678,
                                                38.741029914798396
                                            ],
                                            [
                                                -9.150302410125732,
                                                38.74034371057247
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Avenidas Novas 1",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "30",
                                    "parent": "Avenidas Novas",
                                    "center": [
                                        -9.150924682617188,
                                        38.73356499750139
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.153928756713867,
                                                38.734418648628576
                                            ],
                                            [
                                                -9.15086030960083,
                                                38.73070268103822
                                            ],
                                            [
                                                -9.150238037109375,
                                                38.73102072186449
                                            ],
                                            [
                                                -9.147727489471436,
                                                38.735088171785826
                                            ],
                                            [
                                                -9.152190685272217,
                                                38.735021219752504
                                            ],
                                            [
                                                -9.153928756713867,
                                                38.734418648628576
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Avenidas Novas 2",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "33",
                                    "parent": "Avenidas Novas",
                                    "center": [
                                        -9.147663116455078,
                                        38.7321589616408
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.15086030960083,
                                                38.730736159086604
                                            ],
                                            [
                                                -9.148542881011963,
                                                38.72797416735108
                                            ],
                                            [
                                                -9.145259857177734,
                                                38.73336413693001
                                            ],
                                            [
                                                -9.144723415374756,
                                                38.73334739852356
                                            ],
                                            [
                                                -9.144423007965088,
                                                38.73354825914202
                                            ],
                                            [
                                                -9.144294261932373,
                                                38.73394997868446
                                            ],
                                            [
                                                -9.144487380981445,
                                                38.73415083760847
                                            ],
                                            [
                                                -9.145002365112305,
                                                38.73431821961372
                                            ],
                                            [
                                                -9.145238399505615,
                                                38.735155123756385
                                            ],
                                            [
                                                -9.147727489471436,
                                                38.735088171785826
                                            ],
                                            [
                                                -9.150216579437256,
                                                38.731037460816125
                                            ],
                                            [
                                                -9.15086030960083,
                                                38.730736159086604
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Roma 1",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "23",
                                    "parent": "Roma",
                                    "center": [
                                        -9.138650894165039,
                                        38.747356072395846
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.141955375671387,
                                                38.749263851188104
                                            ],
                                            [
                                                -9.139938354492188,
                                                38.74551518488265
                                            ],
                                            [
                                                -9.136462211608887,
                                                38.74574948229309
                                            ],
                                            [
                                                -9.136784076690674,
                                                38.74904630004144
                                            ],
                                            [
                                                -9.141955375671387,
                                                38.749263851188104
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Roma 2",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "18",
                                    "parent": "Roma",
                                    "center": [
                                        -9.13384437561035,
                                        38.747423012865596
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.136805534362791,
                                                38.74906303476857
                                            ],
                                            [
                                                -9.136462211608887,
                                                38.74573274678925
                                            ],
                                            [
                                                -9.131312370300293,
                                                38.746017249820724
                                            ],
                                            [
                                                -9.131076335906982,
                                                38.74876180908016
                                            ],
                                            [
                                                -9.136805534362791,
                                                38.74906303476857
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Bairro S. Miguel 1",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "28",
                                    "parent": "Bairro S. Miguel",
                                    "center": [
                                        -9.146804809570312,
                                        38.746653193674206
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.148693084716797,
                                                38.74829323326079
                                            ],
                                            [
                                                -9.147469997406006,
                                                38.74487923089301
                                            ],
                                            [
                                                -9.145581722259521,
                                                38.745247415472136
                                            ],
                                            [
                                                -9.144916534423828,
                                                38.74528088670338
                                            ],
                                            [
                                                -9.146311283111572,
                                                38.74867813505225
                                            ],
                                            [
                                                -9.148693084716797,
                                                38.74829323326079
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Bairro S. Miguel 2",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "30",
                                    "parent": "Bairro S. Miguel",
                                    "center": [
                                        -9.143199920654297,
                                        38.74712178025749
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.146268367767334,
                                                38.7486614002349
                                            ],
                                            [
                                                -9.144895076751709,
                                                38.74529762231309
                                            ],
                                            [
                                                -9.139959812164307,
                                                38.74553192043746
                                            ],
                                            [
                                                -9.142019748687744,
                                                38.74933078986908
                                            ],
                                            [
                                                -9.146268367767334,
                                                38.7486614002349
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Entrecampos 1",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "39",
                                    "parent": "Entrecampos",
                                    "center": [
                                        -9.153499603271484,
                                        38.74564906921134
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.15661096572876,
                                                38.74705483950528
                                            ],
                                            [
                                                -9.155344963073729,
                                                38.74590010165094
                                            ],
                                            [
                                                -9.154658317565918,
                                                38.74395876113911
                                            ],
                                            [
                                                -9.153971672058105,
                                                38.74298807108971
                                            ],
                                            [
                                                -9.15212631225586,
                                                38.74389181742141
                                            ],
                                            [
                                                -9.152083396911621,
                                                38.744042440697974
                                            ],
                                            [
                                                -9.152169227600098,
                                                38.744193063656816
                                            ],
                                            [
                                                -9.151782989501953,
                                                38.745029852086674
                                            ],
                                            [
                                                -9.151482582092285,
                                                38.747975269346156
                                            ],
                                            [
                                                -9.15661096572876,
                                                38.74705483950528
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Entrecampos 2",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "25",
                                    "parent": "Entrecampos",
                                    "center": [
                                        -9.149723052978516,
                                        38.74615113320797
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.151504039764404,
                                                38.74802547426893
                                            ],
                                            [
                                                -9.151782989501953,
                                                38.745029852086674
                                            ],
                                            [
                                                -9.151788353919983,
                                                38.744998472697546
                                            ],
                                            [
                                                -9.150785207748413,
                                                38.74452150428468
                                            ],
                                            [
                                                -9.15047138929367,
                                                38.74447548084823
                                            ],
                                            [
                                                -9.149543344974518,
                                                38.74458635544027
                                            ],
                                            [
                                                -9.147491455078123,
                                                38.74484575947351
                                            ],
                                            [
                                                -9.148693084716797,
                                                38.748276498353235
                                            ],
                                            [
                                                -9.150238037109375,
                                                38.74803802549412
                                            ],
                                            [
                                                -9.150726199150085,
                                                38.74975333884416
                                            ],
                                            [
                                                -9.15136992931366,
                                                38.74961527856301
                                            ],
                                            [
                                                -9.151278734207153,
                                                38.7490881368519
                                            ],
                                            [
                                                -9.151761531829834,
                                                38.74894589159633
                                            ],
                                            [
                                                -9.151504039764404,
                                                38.74802547426893
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Entrecampos 3",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "25",
                                    "parent": "Entrecampos",
                                    "center": [
                                        -9.148693084716797,
                                        38.74246924858317
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.1511070728302,
                                                38.742904390295244
                                            ],
                                            [
                                                -9.149969816207886,
                                                38.741573852487676
                                            ],
                                            [
                                                -9.15035605430603,
                                                38.74130606829689
                                            ],
                                            [
                                                -9.149787425994873,
                                                38.74056965659449
                                            ],
                                            [
                                                -9.148703813552856,
                                                38.74105501970604
                                            ],
                                            [
                                                -9.146729707717896,
                                                38.741373014438715
                                            ],
                                            [
                                                -9.147502183914185,
                                                38.74486249518524
                                            ],
                                            [
                                                -9.149540662765503,
                                                38.74461145909757
                                            ],
                                            [
                                                -9.14936900138855,
                                                38.74388344945229
                                            ],
                                            [
                                                -9.14960503578186,
                                                38.743858345539046
                                            ],
                                            [
                                                -9.149562120437622,
                                                38.743632409922526
                                            ],
                                            [
                                                -9.1511070728302,
                                                38.742904390295244
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Rio de Janeiro 1",
                                    "charge": "0.8",
                                    "color": "Verde",
                                    "spots": "32",
                                    "parent": "Rio de Janeiro",
                                    "center": [
                                        -9.14088249206543,
                                        38.75287845014463
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.143993854522705,
                                                38.75309598961306
                                            ],
                                            [
                                                -9.142996072769165,
                                                38.75113811053054
                                            ],
                                            [
                                                -9.138007164001465,
                                                38.75276131323317
                                            ],
                                            [
                                                -9.139015674591064,
                                                38.754769347975106
                                            ],
                                            [
                                                -9.143993854522705,
                                                38.75309598961306
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Rio de Janeiro 2",
                                    "charge": "0.8",
                                    "color": "Verde",
                                    "spots": "40",
                                    "parent": "Rio de Janeiro",
                                    "center": [
                                        -9.13963794708252,
                                        38.75060261288245
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.142996072769165,
                                                38.75114647764943
                                            ],
                                            [
                                                -9.141955375671387,
                                                38.74929732053643
                                            ],
                                            [
                                                -9.137502908706663,
                                                38.74907976949178
                                            ],
                                            [
                                                -9.137406349182129,
                                                38.75156483234295
                                            ],
                                            [
                                                -9.138007164001465,
                                                38.752778047089436
                                            ],
                                            [
                                                -9.142996072769165,
                                                38.75114647764943
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Av. da Igreja 1",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "16",
                                    "parent": "Av. da Igreja",
                                    "center": [
                                        -9.148907661437988,
                                        38.75341393072052
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.15109634399414,
                                                38.75502034834591
                                            ],
                                            [
                                                -9.149250984191895,
                                                38.751372389488445
                                            ],
                                            [
                                                -9.14659023284912,
                                                38.752142157793756
                                            ],
                                            [
                                                -9.148564338684082,
                                                38.75589047613091
                                            ],
                                            [
                                                -9.15109634399414,
                                                38.75502034834591
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Av. da Igreja 2",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "16",
                                    "parent": "Av. da Igreja",
                                    "center": [
                                        -9.146161079406738,
                                        38.7542171440524
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.14659023284912,
                                                38.752158891795155
                                            ],
                                            [
                                                -9.143983125686646,
                                                38.75297885305858
                                            ],
                                            [
                                                -9.145914316177368,
                                                38.75669366159426
                                            ],
                                            [
                                                -9.148532152175903,
                                                38.755848643307054
                                            ],
                                            [
                                                -9.14659023284912,
                                                38.752158891795155
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Av. da Igreja 3",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "24",
                                    "parent": "Av. da Igreja",
                                    "center": [
                                        -9.145774841308594,
                                        38.750267924812526
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.149165153503418,
                                                38.751372389488445
                                            ],
                                            [
                                                -9.148253202438354,
                                                38.74958180936377
                                            ],
                                            [
                                                -9.148070812225342,
                                                38.748402010064396
                                            ],
                                            [
                                                -9.142019748687744,
                                                38.74935589185827
                                            ],
                                            [
                                                -9.143993854522705,
                                                38.752970486154496
                                            ],
                                            [
                                                -9.149165153503418,
                                                38.751372389488445
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Campo Grande 1",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "20",
                                    "parent": "Campo Grande",
                                    "center": [
                                        -9.15809154510498,
                                        38.752510304918516
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.1605806350708,
                                                38.75455181360643
                                            ],
                                            [
                                                -9.158263206481932,
                                                38.750134049145224
                                            ],
                                            [
                                                -9.155817031860352,
                                                38.75097076794702
                                            ],
                                            [
                                                -9.15809154510498,
                                                38.7549868816808
                                            ],
                                            [
                                                -9.158906936645508,
                                                38.75518768143609
                                            ],
                                            [
                                                -9.1605806350708,
                                                38.75455181360643
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Campo Grande 2",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "30",
                                    "parent": "Campo Grande",
                                    "center": [
                                        -9.154143333435059,
                                        38.75307925583132
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.15809154510498,
                                                38.7549868816808
                                            ],
                                            [
                                                -9.155817031860352,
                                                38.751037705027514
                                            ],
                                            [
                                                -9.14985179901123,
                                                38.752510304918516
                                            ],
                                            [
                                                -9.151139259338379,
                                                38.754953414999996
                                            ],
                                            [
                                                -9.152812957763672,
                                                38.75441794597313
                                            ],
                                            [
                                                -9.154658317565918,
                                                38.755990874808134
                                            ],
                                            [
                                                -9.15809154510498,
                                                38.7549868816808
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Campo Grande 3",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "50",
                                    "parent": "Campo Grande",
                                    "center": [
                                        -9.153156280517578,
                                        38.74959854396535
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.158263206481932,
                                                38.75012568190766
                                            ],
                                            [
                                                -9.156632423400879,
                                                38.747079942294725
                                            ],
                                            [
                                                -9.151504039764404,
                                                38.74800037181197
                                            ],
                                            [
                                                -9.151761531829834,
                                                38.748937524219535
                                            ],
                                            [
                                                -9.151278734207153,
                                                38.74912160628262
                                            ],
                                            [
                                                -9.15135383605957,
                                                38.749640380452185
                                            ],
                                            [
                                                -9.150720834732056,
                                                38.74975752248487
                                            ],
                                            [
                                                -9.150227308273315,
                                                38.748050576717084
                                            ],
                                            [
                                                -9.148092269897461,
                                                38.74841037750396
                                            ],
                                            [
                                                -9.148296117782593,
                                                38.749565074758245
                                            ],
                                            [
                                                -9.149830341339111,
                                                38.752518671876565
                                            ],
                                            [
                                                -9.155838489532469,
                                                38.751046072158154
                                            ],
                                            [
                                                -9.155817031860352,
                                                38.75096240080754
                                            ],
                                            [
                                                -9.158263206481932,
                                                38.75012568190766
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Praça José Fontana 1",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "15",
                                    "parent": "Praça José Fontana",
                                    "center": [
                                        -9.146504402160645,
                                        38.7272710978598
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.148221015930176,
                                                38.72850983470067
                                            ],
                                            [
                                                -9.14784550666809,
                                                38.72794068800838
                                            ],
                                            [
                                                -9.147030115127563,
                                                38.72578960735462
                                            ],
                                            [
                                                -9.14612889289856,
                                                38.72475170870241
                                            ],
                                            [
                                                -9.1461181640625,
                                                38.72578960735462
                                            ],
                                            [
                                                -9.144680500030518,
                                                38.7268944506435
                                            ],
                                            [
                                                -9.147577285766602,
                                                38.72958115735103
                                            ],
                                            [
                                                -9.148221015930176,
                                                38.72850983470067
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Praça José Fontana 2",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "20",
                                    "parent": "Praça José Fontana",
                                    "center": [
                                        -9.143972396850586,
                                        38.72911245566826
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.147491455078123,
                                                38.72964811448324
                                            ],
                                            [
                                                -9.147566556930542,
                                                38.729606266282964
                                            ],
                                            [
                                                -9.144659042358398,
                                                38.72690282060323
                                            ],
                                            [
                                                -9.143532514572144,
                                                38.72775655134309
                                            ],
                                            [
                                                -9.140625,
                                                38.72761426359487
                                            ],
                                            [
                                                -9.14037823677063,
                                                38.729212892001975
                                            ],
                                            [
                                                -9.140453338623047,
                                                38.729815507039284
                                            ],
                                            [
                                                -9.146032333374023,
                                                38.7321589616408
                                            ],
                                            [
                                                -9.147491455078123,
                                                38.72964811448324
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Praça José Fontana 3",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "10",
                                    "parent": "Praça José Fontana",
                                    "center": [
                                        -9.143071174621582,
                                        38.73165679926926
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.145989418029785,
                                                38.732150592296875
                                            ],
                                            [
                                                -9.140496253967285,
                                                38.72984898550344
                                            ],
                                            [
                                                -9.140903949737549,
                                                38.73163169105804
                                            ],
                                            [
                                                -9.141021966934204,
                                                38.73159821342931
                                            ],
                                            [
                                                -9.144423007965088,
                                                38.73354825914202
                                            ],
                                            [
                                                -9.144691228866577,
                                                38.73333902931887
                                            ],
                                            [
                                                -9.145259857177734,
                                                38.73337250613175
                                            ],
                                            [
                                                -9.145989418029785,
                                                38.732150592296875
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Santa Marta 1",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "43",
                                    "parent": "Santa Marta",
                                    "center": [
                                        -9.147748947143555,
                                        38.72539621205908
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.149798154830933,
                                                38.726065819778526
                                            ],
                                            [
                                                -9.149283170700073,
                                                38.725839827874765
                                            ],
                                            [
                                                -9.149014949798582,
                                                38.72542132246178
                                            ],
                                            [
                                                -9.148693084716797,
                                                38.725337621085046
                                            ],
                                            [
                                                -9.147276878356934,
                                                38.72373053563759
                                            ],
                                            [
                                                -9.145989418029785,
                                                38.72436667794925
                                            ],
                                            [
                                                -9.14613962173462,
                                                38.72475170870241
                                            ],
                                            [
                                                -9.147019386291504,
                                                38.725747756894215
                                            ],
                                            [
                                                -9.14784550666809,
                                                38.72794068800838
                                            ],
                                            [
                                                -9.148242473602295,
                                                38.72844287650159
                                            ],
                                            [
                                                -9.148542881011963,
                                                38.72797416735108
                                            ],
                                            [
                                                -9.149014949798582,
                                                38.72743012608831
                                            ],
                                            [
                                                -9.149798154830933,
                                                38.726065819778526
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Santa Marta 2",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "40",
                                    "parent": "Santa Marta",
                                    "center": [
                                        -9.144830703735352,
                                        38.72194763292809
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.147266149520874,
                                                38.72373890596793
                                            ],
                                            [
                                                -9.144809246063232,
                                                38.72089293714568
                                            ],
                                            [
                                                -9.1446053981781,
                                                38.720976643728825
                                            ],
                                            [
                                                -9.143811464309692,
                                                38.71988007971876
                                            ],
                                            [
                                                -9.142513275146484,
                                                38.720692040946076
                                            ],
                                            [
                                                -9.143457412719727,
                                                38.72142865758361
                                            ],
                                            [
                                                -9.14385437965393,
                                                38.72198111507896
                                            ],
                                            [
                                                -9.144291579723358,
                                                38.72323877700899
                                            ],
                                            [
                                                -9.144288897514343,
                                                38.72335386975732
                                            ],
                                            [
                                                -9.143570065498352,
                                                38.72334549938187
                                            ],
                                            [
                                                -9.143580794334412,
                                                38.72340409198941
                                            ],
                                            [
                                                -9.145699739456177,
                                                38.723378980877776
                                            ],
                                            [
                                                -9.145989418029785,
                                                38.72436667794925
                                            ],
                                            [
                                                -9.147266149520874,
                                                38.72373890596793
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Campo Santana 1",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "15",
                                    "parent": "Campo Santana",
                                    "center": [
                                        -9.14311408996582,
                                        38.725228809148675
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.1461181640625,
                                                38.7247851895394
                                            ],
                                            [
                                                -9.145699739456177,
                                                38.72338735124931
                                            ],
                                            [
                                                -9.14358615875244,
                                                38.723412462357985
                                            ],
                                            [
                                                -9.14014220237732,
                                                38.72435830769245
                                            ],
                                            [
                                                -9.140753746032715,
                                                38.72586493812159
                                            ],
                                            [
                                                -9.140592813491821,
                                                38.72760589371852
                                            ],
                                            [
                                                -9.143553972244263,
                                                38.7277816609163
                                            ],
                                            [
                                                -9.1461181640625,
                                                38.72580634753192
                                            ],
                                            [
                                                -9.1461181640625,
                                                38.7247851895394
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Campo Santana 2",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "25",
                                    "parent": "Campo Santana",
                                    "center": [
                                        -9.141247272491455,
                                        38.722081561437435
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.139294624328613,
                                                38.722081561437435
                                            ],
                                            [
                                                -9.139257073402405,
                                                38.722341047209994
                                            ],
                                            [
                                                -9.140118062496185,
                                                38.72435202999919
                                            ],
                                            [
                                                -9.143578112125397,
                                                38.72340409198941
                                            ],
                                            [
                                                -9.143575429916382,
                                                38.72334968456973
                                            ],
                                            [
                                                -9.144294261932373,
                                                38.72333712900546
                                            ],
                                            [
                                                -9.144294261932373,
                                                38.723236684411866
                                            ],
                                            [
                                                -9.14385437965393,
                                                38.72198111507896
                                            ],
                                            [
                                                -9.143446683883667,
                                                38.72142028698264
                                            ],
                                            [
                                                -9.14285659790039,
                                                38.72102686763165
                                            ],
                                            [
                                                -9.142502546310425,
                                                38.7207171530019
                                            ],
                                            [
                                                -9.141923189163208,
                                                38.72064181680791
                                            ],
                                            [
                                                -9.141418933868408,
                                                38.72034047123783
                                            ],
                                            [
                                                -9.140206575393677,
                                                38.72032372978001
                                            ],
                                            [
                                                -9.13936972618103,
                                                38.72059159263449
                                            ],
                                            [
                                                -9.139294624328613,
                                                38.722081561437435
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Chile 1",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "25",
                                    "parent": "Chile",
                                    "center": [
                                        -9.137020111083984,
                                        38.73204179073652
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.14111852645874,
                                                38.73306284501392
                                            ],
                                            [
                                                -9.140753746032715,
                                                38.73170283096695
                                            ],
                                            [
                                                -9.14089322090149,
                                                38.73164424516476
                                            ],
                                            [
                                                -9.140651822090149,
                                                38.73058132298127
                                            ],
                                            [
                                                -9.139648675918579,
                                                38.73074871335069
                                            ],
                                            [
                                                -9.138194918632507,
                                                38.730554122009195
                                            ],
                                            [
                                                -9.136193990707397,
                                                38.73062735537197
                                            ],
                                            [
                                                -9.133415222167969,
                                                38.733531520778705
                                            ],
                                            [
                                                -9.137063026428223,
                                                38.73460276812244
                                            ],
                                            [
                                                -9.138479232788086,
                                                38.732895460066985
                                            ],
                                            [
                                                -9.14111852645874,
                                                38.73306284501392
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Chile 2",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "30",
                                    "parent": "Chile",
                                    "center": [
                                        -9.13287878036499,
                                        38.73058550774531
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.136183261871338,
                                                38.73062735537197
                                            ],
                                            [
                                                -9.13611888885498,
                                                38.72967950061739
                                            ],
                                            [
                                                -9.134670495986938,
                                                38.72959789663996
                                            ],
                                            [
                                                -9.134796559810638,
                                                38.72830686746657
                                            ],
                                            [
                                                -9.133611023426056,
                                                38.728221077018986
                                            ],
                                            [
                                                -9.132653474807737,
                                                38.728568423073355
                                            ],
                                            [
                                                -9.132052659988403,
                                                38.72833616174214
                                            ],
                                            [
                                                -9.131915867328642,
                                                38.72821270721372
                                            ],
                                            [
                                                -9.131510853767395,
                                                38.728273388279774
                                            ],
                                            [
                                                -9.131226539611816,
                                                38.72820642985913
                                            ],
                                            [
                                                -9.131022691726685,
                                                38.727831880036256
                                            ],
                                            [
                                                -9.1306471824646,
                                                38.72781514033352
                                            ],
                                            [
                                                -9.130711555480957,
                                                38.728233631725075
                                            ],
                                            [
                                                -9.131323099136353,
                                                38.72898691005251
                                            ],
                                            [
                                                -9.13136601448059,
                                                38.72941376424587
                                            ],
                                            [
                                                -9.130958318710327,
                                                38.729957790403525
                                            ],
                                            [
                                                -9.130808115005493,
                                                38.729991268801015
                                            ],
                                            [
                                                -9.130936861038208,
                                                38.73277829037075
                                            ],
                                            [
                                                -9.133425951004028,
                                                38.73355662832219
                                            ],
                                            [
                                                -9.136183261871338,
                                                38.73062735537197
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Anjos 1",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "40",
                                    "parent": "Anjos",
                                    "center": [
                                        -9.137706756591797,
                                        38.72636714120497
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.14064645767212,
                                                38.73056039915753
                                            ],
                                            [
                                                -9.14037823677063,
                                                38.72922126169009
                                            ],
                                            [
                                                -9.140764474868774,
                                                38.725873308201905
                                            ],
                                            [
                                                -9.139251708984375,
                                                38.72238289966573
                                            ],
                                            [
                                                -9.139273166656492,
                                                38.722089931960944
                                            ],
                                            [
                                                -9.138736724853514,
                                                38.72224897172115
                                            ],
                                            [
                                                -9.138414859771729,
                                                38.72224060121627
                                            ],
                                            [
                                                -9.136816263198853,
                                                38.7234877956311
                                            ],
                                            [
                                                -9.136226177215576,
                                                38.72332875862805
                                            ],
                                            [
                                                -9.135775566101074,
                                                38.723420832725594
                                            ],
                                            [
                                                -9.135582447052002,
                                                38.72302742438838
                                            ],
                                            [
                                                -9.135260581970215,
                                                38.72270934797905
                                            ],
                                            [
                                                -9.134681224822998,
                                                38.72959789663996
                                            ],
                                            [
                                                -9.13612961769104,
                                                38.72968159302584
                                            ],
                                            [
                                                -9.136161804199219,
                                                38.73061898584861
                                            ],
                                            [
                                                -9.138189554214478,
                                                38.73055202962631
                                            ],
                                            [
                                                -9.13963794708252,
                                                38.73075289810491
                                            ],
                                            [
                                                -9.14064645767212,
                                                38.73056039915753
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Anjos 2",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "40",
                                    "parent": "Anjos",
                                    "center": [
                                        -9.132986068725586,
                                        38.72509488653802
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.134745597839355,
                                                38.72830895991523
                                            ],
                                            [
                                                -9.135260581970215,
                                                38.722692607076205
                                            ],
                                            [
                                                -9.135164022445679,
                                                38.72260890250302
                                            ],
                                            [
                                                -9.132653474807737,
                                                38.72250845688579
                                            ],
                                            [
                                                -9.132460355758667,
                                                38.72291023850757
                                            ],
                                            [
                                                -9.131730794906616,
                                                38.723320388249654
                                            ],
                                            [
                                                -9.131795167922974,
                                                38.723604980564765
                                            ],
                                            [
                                                -9.130228757858275,
                                                38.726325291082844
                                            ],
                                            [
                                                -9.13063645362854,
                                                38.727823510185395
                                            ],
                                            [
                                                -9.131022691726685,
                                                38.727823510185395
                                            ],
                                            [
                                                -9.131221175193787,
                                                38.72820852231071
                                            ],
                                            [
                                                -9.131516218185425,
                                                38.72827548072942
                                            ],
                                            [
                                                -9.131926596164703,
                                                38.72820642985913
                                            ],
                                            [
                                                -9.13264811038971,
                                                38.72856633063231
                                            ],
                                            [
                                                -9.133616387844086,
                                                38.72822316947016
                                            ],
                                            [
                                                -9.134745597839355,
                                                38.72830895991523
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Alameda 1",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "26",
                                    "parent": "Alameda",
                                    "center": [
                                        -9.135174751281738,
                                        38.735757688667334
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.136515855789185,
                                                38.737448190864036
                                            ],
                                            [
                                                -9.136430025100708,
                                                38.73650251882352
                                            ],
                                            [
                                                -9.137020111083984,
                                                38.73463624434305
                                            ],
                                            [
                                                -9.13387656211853,
                                                38.73365705840782
                                            ],
                                            [
                                                -9.133683443069456,
                                                38.73762393384584
                                            ],
                                            [
                                                -9.133994579315186,
                                                38.73762393384584
                                            ],
                                            [
                                                -9.136515855789185,
                                                38.737448190864036
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Alameda 2",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "20",
                                    "parent": "Alameda",
                                    "center": [
                                        -9.131956100463865,
                                        38.73532250340823
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.133868515491486,
                                                38.73366751986696
                                            ],
                                            [
                                                -9.130936861038208,
                                                38.73278665964114
                                            ],
                                            [
                                                -9.131076335906982,
                                                38.73308795272213
                                            ],
                                            [
                                                -9.13038969039917,
                                                38.733439459710446
                                            ],
                                            [
                                                -9.130336046218872,
                                                38.736845640214796
                                            ],
                                            [
                                                -9.13036823272705,
                                                38.73780804507723
                                            ],
                                            [
                                                -9.133694171905518,
                                                38.73762393384584
                                            ],
                                            [
                                                -9.133868515491486,
                                                38.73366751986696
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Alameda 3",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "30",
                                    "parent": "Alameda",
                                    "center": [
                                        -9.130218029022217,
                                        38.73949013026
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.133983850479126,
                                                38.737649039950796
                                            ],
                                            [
                                                -9.133704900741577,
                                                38.73763230254846
                                            ],
                                            [
                                                -9.13038969039917,
                                                38.737799676395184
                                            ],
                                            [
                                                -9.130346775054932,
                                                38.736845640214796
                                            ],
                                            [
                                                -9.129542112350464,
                                                38.73692932810895
                                            ],
                                            [
                                                -9.129230976104736,
                                                38.737113441130916
                                            ],
                                            [
                                                -9.129177331924438,
                                                38.73733102863592
                                            ],
                                            [
                                                -9.128812551498413,
                                                38.73735613484382
                                            ],
                                            [
                                                -9.128512144088745,
                                                38.737314291159066
                                            ],
                                            [
                                                -9.127213954925537,
                                                38.73773272690358
                                            ],
                                            [
                                                -9.127235412597656,
                                                38.73823484656101
                                            ],
                                            [
                                                -9.126849174499512,
                                                38.73842732482704
                                            ],
                                            [
                                                -9.128276109695435,
                                                38.74115543924829
                                            ],
                                            [
                                                -9.130293130874634,
                                                38.7419922632755
                                            ],
                                            [
                                                -9.132986068725586,
                                                38.74225167673276
                                            ],
                                            [
                                                -9.133522510528564,
                                                38.741105229494806
                                            ],
                                            [
                                                -9.133661985397339,
                                                38.7399085532566
                                            ],
                                            [
                                                -9.134670495986938,
                                                38.740008974411005
                                            ],
                                            [
                                                -9.134691953659058,
                                                38.73957381505546
                                            ],
                                            [
                                                -9.133683443069456,
                                                38.739264180822495
                                            ],
                                            [
                                                -9.133983850479126,
                                                38.737649039950796
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Gulbenkian 1",
                                    "charge": "1.60",
                                    "color": "Vermelha",
                                    "spots": "30",
                                    "parent": "Gulbenkian",
                                    "center": [
                                        -9.153800010681152,
                                        38.73657783829453
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.15634274482727,
                                                38.737540246765576
                                            ],
                                            [
                                                -9.155280590057373,
                                                38.736151026908665
                                            ],
                                            [
                                                -9.153285026550293,
                                                38.734644613395744
                                            ],
                                            [
                                                -9.152169227600098,
                                                38.735037957766714
                                            ],
                                            [
                                                -9.152544736862183,
                                                38.73825158382212
                                            ],
                                            [
                                                -9.15311336517334,
                                                38.73902149359334
                                            ],
                                            [
                                                -9.15634274482727,
                                                38.737540246765576
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Gulbenkian 2",
                                    "charge": "1.60",
                                    "color": "Vermelha",
                                    "spots": "30",
                                    "parent": "Gulbenkian",
                                    "center": [
                                        -9.153800010681152,
                                        38.74009265859846
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.158520698547363,
                                                38.74052781479249
                                            ],
                                            [
                                                -9.15633201599121,
                                                38.73758209031797
                                            ],
                                            [
                                                -9.14985179901123,
                                                38.74059476166391
                                            ],
                                            [
                                                -9.150323867797852,
                                                38.74133117310742
                                            ],
                                            [
                                                -9.149980545043945,
                                                38.741598957204076
                                            ],
                                            [
                                                -9.151139259338379,
                                                38.74287091794999
                                            ],
                                            [
                                                -9.156417846679688,
                                                38.74056128823605
                                            ],
                                            [
                                                -9.158520698547363,
                                                38.74052781479249
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Bairro de Santos 1",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "36",
                                    "parent": "Bairro de Santos",
                                    "center": [
                                        -9.15761947631836,
                                        38.74390855335671
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.16186809539795,
                                                38.745247415472136
                                            ],
                                            [
                                                -9.159078598022461,
                                                38.74113033437596
                                            ],
                                            [
                                                -9.154014587402344,
                                                38.74303827951935
                                            ],
                                            [
                                                -9.154787063598633,
                                                38.74400896888619
                                            ],
                                            [
                                                -9.15530204772949,
                                                38.745916837115544
                                            ],
                                            [
                                                -9.156718254089355,
                                                38.74698789869036
                                            ],
                                            [
                                                -9.16186809539795,
                                                38.745247415472136
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Bairro de Santos 2",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "40",
                                    "parent": "Bairro de Santos",
                                    "center": [
                                        -9.153671264648438,
                                        38.74236883088842
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.158949851989746,
                                                38.741197280682535
                                            ],
                                            [
                                                -9.158649444580078,
                                                38.74059476166391
                                            ],
                                            [
                                                -9.156417846679688,
                                                38.74057802495194
                                            ],
                                            [
                                                -9.149572849273682,
                                                38.74364077792108
                                            ],
                                            [
                                                -9.14962649345398,
                                                38.743858345539046
                                            ],
                                            [
                                                -9.14937973022461,
                                                38.743900185389556
                                            ],
                                            [
                                                -9.149562120437622,
                                                38.74461145909757
                                            ],
                                            [
                                                -9.150495529174803,
                                                38.744477572823264
                                            ],
                                            [
                                                -9.150785207748413,
                                                38.74452778020553
                                            ],
                                            [
                                                -9.151815176010132,
                                                38.745029852086674
                                            ],
                                            [
                                                -9.152190685272217,
                                                38.74422653538229
                                            ],
                                            [
                                                -9.152061939239502,
                                                38.74399223297443
                                            ],
                                            [
                                                -9.152147769927979,
                                                38.743849977565986
                                            ],
                                            [
                                                -9.153971672058105,
                                                38.74298807108971
                                            ],
                                            [
                                                -9.154046773910522,
                                                38.74302991145018
                                            ],
                                            [
                                                -9.158949851989746,
                                                38.741197280682535
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Praça de Espanha 1",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "38",
                                    "parent": "Praça de Espanha",
                                    "center": [
                                        -9.167275428771973,
                                        38.73962402588564
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.171137809753418,
                                                38.73681216502967
                                            ],
                                            [
                                                -9.166374206542969,
                                                38.736845640214796
                                            ],
                                            [
                                                -9.162983894348145,
                                                38.741197280682535
                                            ],
                                            [
                                                -9.166159629821777,
                                                38.74293786262479
                                            ],
                                            [
                                                -9.170064926147461,
                                                38.740829075219665
                                            ],
                                            [
                                                -9.171481132507324,
                                                38.739289286350854
                                            ],
                                            [
                                                -9.171137809753418,
                                                38.73681216502967
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Praça de Espanha 2",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "15",
                                    "parent": "Praça de Espanha",
                                    "center": [
                                        -9.161953926086426,
                                        38.73681216502967
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.166374206542969,
                                                38.736845640214796
                                            ],
                                            [
                                                -9.165816307067871,
                                                38.735640523666106
                                            ],
                                            [
                                                -9.163928031921387,
                                                38.73386628729943
                                            ],
                                            [
                                                -9.162297248840332,
                                                38.735540096369206
                                            ],
                                            [
                                                -9.15637493133545,
                                                38.73761556514222
                                            ],
                                            [
                                                -9.157447814941406,
                                                38.73902149359334
                                            ],
                                            [
                                                -9.159979820251465,
                                                38.73798378717357
                                            ],
                                            [
                                                -9.164872169494629,
                                                38.73882064836625
                                            ],
                                            [
                                                -9.166374206542969,
                                                38.736845640214796
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Praça de Espanha 3",
                                    "charge": "0.80",
                                    "color": "Verde",
                                    "spots": "15",
                                    "parent": "Praça de Espanha",
                                    "center": [
                                        -9.160966873168945,
                                        38.73969097360433
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.164786338806152,
                                                38.73885412260998
                                            ],
                                            [
                                                -9.159979820251465,
                                                38.73808421103445
                                            ],
                                            [
                                                -9.157533645629883,
                                                38.73905496774295
                                            ],
                                            [
                                                -9.1591215133667,
                                                38.74126422692636
                                            ],
                                            [
                                                -9.163026809692383,
                                                38.741163807537085
                                            ],
                                            [
                                                -9.164786338806152,
                                                38.73885412260998
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Castilho 1",
                                    "charge": "1.60",
                                    "color": "Vermelha",
                                    "spots": "25",
                                    "parent": "Castilho",
                                    "center": [
                                        -9.154486656188965,
                                        38.72991594238464
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.157876968383789,
                                                38.730016377588804
                                            ],
                                            [
                                                -9.155731201171875,
                                                38.72750545512564
                                            ],
                                            [
                                                -9.151182174682617,
                                                38.72974855006393
                                            ],
                                            [
                                                -9.15461540222168,
                                                38.73356499750139
                                            ],
                                            [
                                                -9.155044555664062,
                                                38.73212548425921
                                            ],
                                            [
                                                -9.157876968383789,
                                                38.730016377588804
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Castilho 2",
                                    "charge": "1.60",
                                    "color": "Vermelha",
                                    "spots": "20",
                                    "parent": "Castilho",
                                    "center": [
                                        -9.152083396911621,
                                        38.72710369934212
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.155688285827637,
                                                38.72753893467227
                                            ],
                                            [
                                                -9.153585433959961,
                                                38.725161847874716
                                            ],
                                            [
                                                -9.151182174682617,
                                                38.72528740021194
                                            ],
                                            [
                                                -9.150903224945067,
                                                38.725915158588755
                                            ],
                                            [
                                                -9.150441884994507,
                                                38.7260741898353
                                            ],
                                            [
                                                -9.149808883666992,
                                                38.726065819778526
                                            ],
                                            [
                                                -9.149036407470703,
                                                38.72743849598527
                                            ],
                                            [
                                                -9.15112853050232,
                                                38.729765289313654
                                            ],
                                            [
                                                -9.155688285827637,
                                                38.72753893467227
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Campolide 1",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "32",
                                    "parent": "Campolide",
                                    "center": [
                                        -9.156417846679688,
                                        38.73487057744808
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.16036605834961,
                                                38.736176133531394
                                            ],
                                            [
                                                -9.1550874710083,
                                                38.732075268157345
                                            ],
                                            [
                                                -9.154422283172607,
                                                38.73388302558428
                                            ],
                                            [
                                                -9.153915345668793,
                                                38.734387264576604
                                            ],
                                            [
                                                -9.15332794189453,
                                                38.73466972054797
                                            ],
                                            [
                                                -9.155344963073729,
                                                38.736142658032485
                                            ],
                                            [
                                                -9.15637493133545,
                                                38.73761556514222
                                            ],
                                            [
                                                -9.16036605834961,
                                                38.736176133531394
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Campolide 2",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "20",
                                    "parent": "Campolide",
                                    "center": [
                                        -9.160795211791992,
                                        38.733799334120796
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.163906574249268,
                                                38.73381607242134
                                            ],
                                            [
                                                -9.163016080856323,
                                                38.73337250613175
                                            ],
                                            [
                                                -9.162554740905762,
                                                38.73229287101036
                                            ],
                                            [
                                                -9.16161060333252,
                                                38.73144756390594
                                            ],
                                            [
                                                -9.157726764678953,
                                                38.73412573027386
                                            ],
                                            [
                                                -9.160323143005371,
                                                38.736142658032485
                                            ],
                                            [
                                                -9.16234016418457,
                                                38.73545640684727
                                            ],
                                            [
                                                -9.163906574249268,
                                                38.73381607242134
                                            ]
                                        ]
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "zone": "Campolide 3",
                                    "charge": "1.20",
                                    "color": "Amarela",
                                    "spots": "20",
                                    "parent": "Campolide",
                                    "center": [
                                        -9.158735275268555,
                                        38.73015029097471
                                    ]
                                },
                                "geometry": {
                                    "type": "Polygon",
                                    "coordinates": [
                                        [
                                            [
                                                -9.1615891456604,
                                                38.731455933332256
                                            ],
                                            [
                                                -9.161503314971924,
                                                38.7302507258494
                                            ],
                                            [
                                                -9.161674976348875,
                                                38.72959789663996
                                            ],
                                            [
                                                -9.161696434020996,
                                                38.728878103673765
                                            ],
                                            [
                                                -9.160559177398682,
                                                38.72819178269622
                                            ],
                                            [
                                                -9.159915447235107,
                                                38.728476355608976
                                            ],
                                            [
                                                -9.15712594985962,
                                                38.72527903006298
                                            ],
                                            [
                                                -9.156525135040283,
                                                38.72494422330096
                                            ],
                                            [
                                                -9.153563976287842,
                                                38.725128367214204
                                            ],
                                            [
                                                -9.15785551071167,
                                                38.72999963839791
                                            ],
                                            [
                                                -9.155130386352539,
                                                38.73209200686189
                                            ],
                                            [
                                                -9.157769680023192,
                                                38.734134099386395
                                            ],
                                            [
                                                -9.1615891456604,
                                                38.731455933332256
                                            ]
                                        ]
                                    ]
                                }
                            }
                        ]
                    };
                    this.layer = this.ZonesZoomed;
                    this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.parked = false;
                }
                MapComponent.prototype.setParked = function (q) {
                    this.parked = q;
                };
                MapComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    navigator.geolocation.watchPosition(function (position) {
                        _this.lat = position.coords.latitude;
                        _this.lng = position.coords.longitude;
                        _this.cLat = position.coords.latitude;
                        _this.cLng = position.coords.longitude;
                    });
                    //this should be in the database
                    if (this.paymentService.getParkingInformations()) {
                        this.parked = true;
                        console.log(this.parked);
                        var a = this.paymentService.getParkingInformations();
                        for (var i = 0; i < Object.keys(this.layer["features"]).length; i++) {
                            if (this.layer["features"][i].properties.zone == a.zoneTitle || this.layer["features"][i].properties.parent == a.zoneTitle) {
                                console.log(this.layer["features"][i].properties.spots);
                                this.layer["features"][i].properties.spots = parseInt(this.layer["features"][i].properties.spots) - 1;
                                console.log(this.layer["features"][i].properties.spots);
                                this.parkedLng = this.layer["features"][i].properties.center[0];
                                this.parkedLat = this.layer["features"][i].properties.center[1];
                                this.lat = this.parkedLat;
                                this.lng = this.parkedLng;
                                for (var j = 0; j < Object.keys(this.Zones["features"]).length; j++) {
                                    if (this.layer["features"][i].properties.parent == this.Zones["features"][j].properties.zone) {
                                        this.Zones["features"][j].properties.spots = parseInt(this.Zones["features"][j].properties.spots) - 1;
                                        break;
                                    }
                                }
                                break;
                            }
                        }
                    }
                };
                MapComponent.prototype.onZoneClick = function (event) {
                    this.zoneData = {
                        "zoneTitle": event.feature.h.zone,
                        "zoneCharge": event.feature.h.charge,
                        "zoneColor": event.feature.h.color,
                        "parkingSpots": event.feature.getProperty('spots')
                    };
                    console.log(this.zoneData);
                    this.messageEvent.emit(this.zoneData);
                    for (var i = 0; i < Object.keys(this.layer["features"]).length; i++) {
                        if (this.layer["features"][i].properties.zone == this.zoneData.zoneTitle || this.layer["features"][i].properties.parent == this.zoneData.zoneTitle) {
                            this.zone = this.layer["features"][i];
                            this.lng = this.layer["features"][i].properties.center[0];
                            this.lat = this.layer["features"][i].properties.center[1];
                            break;
                        }
                    }
                    //find the average point of a zone
                    console.log(this.zone);
                    //this.lng = this.zone.properties.center[0];
                    console.log(this.zone.properties.center);
                    //this.lat = this.zone.properties.center[1];
                    this.styleFunc(event.feature);
                };
                MapComponent.prototype.styleFunc = function (feature) {
                    if (feature.getProperty('color') == 'Amarela')
                        return ({ fillColor: 'yellow', strokeWeight: 1, fillOpacity: 0 });
                    else if (feature.getProperty('color') == 'Verde')
                        return ({ fillColor: 'green', strokeWeight: 1, fillOpacity: 0 });
                    else if (feature.getProperty('color') == 'Vermelha')
                        return ({ fillColor: 'red', strokeWeight: 1, fillOpacity: 0 });
                };
                MapComponent.prototype.styleF = function (feature) {
                    if (feature.getProperty('color') == 'Amarela')
                        return ({ fillColor: 'yellow', strokeWeight: 3, fillOpacity: 0.2 });
                    else if (feature.getProperty('color') == 'Verde')
                        return ({ fillColor: 'green', strokeWeight: 3, fillOpacity: 0.2 });
                    else if (feature.getProperty('color') == 'Vermelha')
                        return ({ fillColor: 'red', strokeWeight: 3, fillOpacity: 0.2 });
                };
                MapComponent.prototype.onChoseLocation = function (event) {
                    console.log(event);
                    this.lat = event.coords.lat;
                    this.lng = event.coords.lng;
                };
                MapComponent.prototype.zoomChange = function (event) {
                    console.log(event);
                    if (event >= 15) {
                        this.layer = this.ZonesZoomed;
                    }
                    else
                        this.layer = this.Zones;
                    console.log(this.layer);
                    this.mapZoom = event;
                };
                MapComponent.prototype.zoneParkingCommited = function (spotNumber, event) {
                    var spots = event.feature.getProperty('spots');
                    event.feature.setProperty('spots', spots + spotNumber);
                    console.log(event.feature.getProperty('spots'));
                };
                //returns the mid point of the zone
                MapComponent.prototype.latMid = function (item) {
                    return item.properties.center[1] - 0.0005;
                };
                MapComponent.prototype.lngMid = function (item) {
                    return item.properties.center[0] - 0.0008;
                };
                MapComponent.prototype.fontSize = function () {
                    console.log(5 * this.mapZoom / 12);
                    return 5 * this.mapZoom / 12;
                };
                return MapComponent;
            }());
            MapComponent.ctorParameters = function () { return [
                { type: src_app_services_payment_service_service__WEBPACK_IMPORTED_MODULE_2__["PaymentServiceService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], MapComponent.prototype, "mapZoom", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], MapComponent.prototype, "messageEvent", void 0);
            MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-map',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/map/map.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./map.component.css */ "./src/app/components/map/map.component.css")).default]
                })
            ], MapComponent);
            /***/ 
        }),
        /***/ "./src/app/components/parking-time-screen/parking-time-screen.component.css": 
        /*!**********************************************************************************!*\
          !*** ./src/app/components/parking-time-screen/parking-time-screen.component.css ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".backbutton{\r\n  color: #647c84;\r\n  margin: 10px 0px 0px -5px;\r\n  font-size: 18px;\r\n}\r\n\r\n.centered-content{\r\n  padding: 5% 8%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  -webkit-box-align: center;\r\n  box-sizing: border-box;\r\n  max-width: 100%;  \r\n  min-height: 594px;\r\n}\r\n\r\n#title{\r\n    padding: 0% 0% 15% 0%;\r\n    font-size: 30px;\r\n    font-weight: 1000;\r\n    text-align: center;\r\n    color: #647c84;\r\n}\r\n\r\n.subtitle {\r\n    font-size: 20px;\r\n    text-align: center;\r\n    margin: 20px 0px;\r\n}\r\n\r\n#next_button {\r\n    width: 80%;\r\n    height: 50px;\r\n    font-size: 1.2rem;\r\n    margin: 40px auto;\r\n    background-color: #647c84;\r\n}\r\n\r\n.parkingPrice {\r\n    font-size: 36px;\r\n    color: #647c84;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXJraW5nLXRpbWUtc2NyZWVuL3BhcmtpbmctdGltZS1zY3JlZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYXJraW5nLXRpbWUtc2NyZWVuL3BhcmtpbmctdGltZS1zY3JlZW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrYnV0dG9ue1xyXG4gIGNvbG9yOiAjNjQ3Yzg0O1xyXG4gIG1hcmdpbjogMTBweCAwcHggMHB4IC01cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uY2VudGVyZWQtY29udGVudHtcclxuICBwYWRkaW5nOiA1JSA4JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWF4LXdpZHRoOiAxMDAlOyAgXHJcbiAgbWluLWhlaWdodDogNTk0cHg7XHJcbn1cclxuXHJcbiN0aXRsZXtcclxuICAgIHBhZGRpbmc6IDAlIDAlIDE1JSAwJTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM2NDdjODQ7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDIwcHggMHB4O1xyXG59XHJcblxyXG4jbmV4dF9idXR0b24ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgbWFyZ2luOiA0MHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3Yzg0O1xyXG59XHJcblxyXG4ucGFya2luZ1ByaWNlIHtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGNvbG9yOiAjNjQ3Yzg0O1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/parking-time-screen/parking-time-screen.component.ts": 
        /*!*********************************************************************************!*\
          !*** ./src/app/components/parking-time-screen/parking-time-screen.component.ts ***!
          \*********************************************************************************/
        /*! exports provided: ParkingTimeScreenComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingTimeScreenComponent", function () { return ParkingTimeScreenComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mobiscroll/angular */ "./node_modules/@mobiscroll/angular/dist/esm5/mobiscroll.angular.min.js");
            /* harmony import */ var src_app_services_payment_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/payment-service.service */ "./src/app/services/payment-service.service.ts");
            /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
            _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_2__["mobiscroll"].settings = {
                lang: 'pt-PT',
                theme: 'ios',
                themeVariant: 'light'
            };
            var ParkingTimeScreenComponent = /** @class */ (function () {
                function ParkingTimeScreenComponent(userService, paymentService) {
                    var _this = this;
                    this.userService = userService;
                    this.paymentService = paymentService;
                    this.title = "Tempo de Estacionamento";
                    this.backLink = "";
                    this.selectedTime = {
                        zoneCharge: 0.0,
                        parkingTime: 0,
                        price: 0.0,
                    };
                    this.timespanInlineSettings = {
                        wheelOrder: 'hhii',
                        display: 'inline',
                        max: 14400000,
                        min: 60000,
                        onChange: function (event, inst) {
                            _this.selectedTime.price = Math.floor((inst.getVal() * _this.selectedTime.zoneCharge) / 3600000 * 100) / 100;
                            var price = _this.selectedTime.price;
                            _this.paymentService.setParkingInfo(inst.getVal(), _this.selectedTime.price);
                        }
                    };
                    this.backLink = "../defaultScreen";
                    this.frontLink = "../confirmScreen";
                }
                ParkingTimeScreenComponent.prototype.ngOnInit = function () {
                    var userDetails = this.userService.getUserProfile().subscribe();
                    var p = this.paymentService.getParkingInformations();
                    this.selectedTime.zoneCharge = p.zoneCharge;
                };
                return ParkingTimeScreenComponent;
            }());
            ParkingTimeScreenComponent.ctorParameters = function () { return [
                { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
                { type: src_app_services_payment_service_service__WEBPACK_IMPORTED_MODULE_3__["PaymentServiceService"] }
            ]; };
            ParkingTimeScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-parking-time-screen',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./parking-time-screen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/parking-time-screen/parking-time-screen.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./parking-time-screen.component.css */ "./src/app/components/parking-time-screen/parking-time-screen.component.css")).default]
                })
            ], ParkingTimeScreenComponent);
            /***/ 
        }),
        /***/ "./src/app/components/payment-method-screen/payment-method-screen.component.css": 
        /*!**************************************************************************************!*\
          !*** ./src/app/components/payment-method-screen/payment-method-screen.component.css ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".backbutton{\r\n  color: #647c84;\r\n  margin: 10px 0px 0px -5px;\r\n}\r\n\r\n.centered-content{\r\n  padding: 5% 8%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  -webkit-box-align: center;\r\n  box-sizing: border-box;\r\n  max-width: 100%;  \r\n  min-height: 594px;\r\n}\r\n\r\n.subtitle {\r\n  font-size: 30px;\r\n  text-align: center;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.paymentButtons {\r\n  border-radius: 10px 10px 10px 10px;\r\n  background: #fff;\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-size: 9px;\r\n  padding: 30px;\r\n  width: 125px;\r\n  height: 170px;\r\n  margin: 5px;\r\n  position: relative;\r\n  padding: 0px;\r\n  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.3);\r\n  text-align: center;\r\n}\r\n\r\n.paymentButtonsActive {\r\n  border-radius: 10px 10px 10px 10px;\r\n  border-style: solid;\r\n  background: #fff;\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-size: 9px;\r\n  padding: 30px;\r\n  width: 125px;\r\n  height: 170px;\r\n  margin: 5px;\r\n  position: relative;\r\n  padding: 0px;\r\n  text-align: center;\r\n  border-color: #637C87;\r\n  border-width: 5px;\r\n}\r\n\r\n.continueButton {\r\n  width: 80%;\r\n  height: 50px;\r\n  font-size: 1.2rem;\r\n  margin: 40px auto 0px auto;\r\n  background-color: #647c84;\r\n}\r\n\r\n.buttonImage {\r\n  align-items: center;\r\n  width: 100px;\r\n}\r\n\r\n.buttonText{\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  max-height: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXltZW50LW1ldGhvZC1zY3JlZW4vcGF5bWVudC1tZXRob2Qtc2NyZWVuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBRUUsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsY0FBYztFQUNkLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUVaLHVDQUF1QztFQUN2QyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFFRSxrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsY0FBYztFQUNkLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BheW1lbnQtbWV0aG9kLXNjcmVlbi9wYXltZW50LW1ldGhvZC1zY3JlZW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrYnV0dG9ue1xyXG4gIGNvbG9yOiAjNjQ3Yzg0O1xyXG4gIG1hcmdpbjogMTBweCAwcHggMHB4IC01cHg7XHJcbn1cclxuXHJcbi5jZW50ZXJlZC1jb250ZW50e1xyXG4gIHBhZGRpbmc6IDUlIDglO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXgtd2lkdGg6IDEwMCU7ICBcclxuICBtaW4taGVpZ2h0OiA1OTRweDtcclxufVxyXG5cclxuLnN1YnRpdGxlIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5wYXltZW50QnV0dG9ucyB7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiA5cHg7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICB3aWR0aDogMTI1cHg7XHJcbiAgaGVpZ2h0OiAxNzBweDtcclxuICBtYXJnaW46IDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBheW1lbnRCdXR0b25zQWN0aXZlIHtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogOXB4O1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgd2lkdGg6IDEyNXB4O1xyXG4gIGhlaWdodDogMTcwcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNjM3Qzg3O1xyXG4gIGJvcmRlci13aWR0aDogNXB4O1xyXG59XHJcblxyXG4uY29udGludWVCdXR0b24ge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIG1hcmdpbjogNDBweCBhdXRvIDBweCBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDdjODQ7XHJcbn1cclxuXHJcbi5idXR0b25JbWFnZSB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5idXR0b25UZXh0e1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1heC1oZWlnaHQ6IDEwcHg7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/payment-method-screen/payment-method-screen.component.ts": 
        /*!*************************************************************************************!*\
          !*** ./src/app/components/payment-method-screen/payment-method-screen.component.ts ***!
          \*************************************************************************************/
        /*! exports provided: PaymentMethodScreenComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodScreenComponent", function () { return PaymentMethodScreenComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/register.service */ "./src/app/services/register.service.ts");
            /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
            var PaymentMethodScreenComponent = /** @class */ (function () {
                function PaymentMethodScreenComponent(registerService, userService) {
                    this.registerService = registerService;
                    this.userService = userService;
                }
                PaymentMethodScreenComponent.prototype.ngOnInit = function () {
                    this.backLink = '../registerInformation';
                };
                PaymentMethodScreenComponent.prototype.registerInformation = function () {
                    var _this = this;
                    this.registerService.setPaymentMethod(this.paymentMethod);
                    var f = this.registerService.getRegisterInformation();
                    var name = f.name;
                    var password = f.password;
                    var phonenumber = f.phoneNumber;
                    var email = f.email;
                    var licensePlate = f.licensePlate;
                    this.userService.createUser(name, password, phonenumber, email, licensePlate, this.paymentMethod)
                        .subscribe(function (response) {
                        (function (res) {
                            _this.showMessage = true;
                        });
                        (function (err) {
                            if (err.status === 422) {
                                _this.serverError = err.err.join('<br/>');
                            }
                        });
                        _this.userService.LoginUser(phonenumber, password).subscribe(function (res) {
                            _this.userService.setToken(res['token']);
                        }, function (err) {
                        });
                        ;
                    });
                };
                return PaymentMethodScreenComponent;
            }());
            PaymentMethodScreenComponent.ctorParameters = function () { return [
                { type: _services_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"] },
                { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
            ]; };
            PaymentMethodScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-payment-method-screen',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment-method-screen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payment-method-screen/payment-method-screen.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment-method-screen.component.css */ "./src/app/components/payment-method-screen/payment-method-screen.component.css")).default]
                })
            ], PaymentMethodScreenComponent);
            /***/ 
        }),
        /***/ "./src/app/components/phone-footer/phone-footer.component.css": 
        /*!********************************************************************!*\
          !*** ./src/app/components/phone-footer/phone-footer.component.css ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css?family=Poppins');\r\nbody{\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n.centered-content{\r\n  padding-top: 5%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  -webkit-box-align: center;\r\n  box-sizing: border-box;\r\n  min-width: 335px;\r\n  max-width: 100%;\r\n  height:100%;\r\n}\r\n.titles{\r\n  padding: 20px;\r\n  margin-bottom: 10px;\r\n  font-size: 25px;\r\n  font-weight: 1000;\r\n  text-align: center;\r\n  min-width: 250px;\r\n  max-width: 800px;\r\n}\r\n.centeredZone{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  min-width: 335px;\r\n  max-width: 1000px;\r\n}\r\n.loginMatFormField{\r\n  font-family: \"Poppins\", sans-serif;\r\n  width: 250px;\r\n  margin-top: 22px;\r\n  padding: 10px;\r\n}\r\n.bigButton{\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n\r\n  width: 100%;\r\n  min-width: 100px;\r\n  max-width: 200px;\r\n\r\n}\r\n.writtenButton{\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  margin: 5px;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  font-family: \"Poppins\", sans-serif;\r\n\r\n\r\n  cursor: pointer;\r\n\r\n  background: none;\r\n  border: none;\r\n  outline: none;\r\n}\r\n.writtenButton:active{\r\n  color: \t#2c2f33;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  font-family: \"Poppins\", sans-serif;\r\n\r\n}\r\n.container{\r\n  margin: 10px;\r\n  position: relative;\r\n  bottom: 0;\r\n  right: 0;\r\n  min-width: 350px;\r\n  max-width: 100%;\r\n  min-height: 40px;\r\n  max-height: 80px;\r\n}\r\n#continueButton{\r\n  position: fixed;\r\n  right: 0;\r\n  bottom: 0;\r\n  margin: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZS1mb290ZXIvcGhvbmUtZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOERBQThEO0FBQzlEO0VBQ0Usa0NBQWtDO0FBQ3BDO0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7O0VBRW5CLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCOztBQUVsQjtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0NBQWtDOzs7RUFHbEMsZUFBZTs7RUFFZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0NBQWtDOztBQUVwQztBQUdBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9waG9uZS1mb290ZXIvcGhvbmUtZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnMnKTtcclxuYm9keXtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jZW50ZXJlZC1jb250ZW50e1xyXG4gIHBhZGRpbmctdG9wOiA1JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWluLXdpZHRoOiAzMzVweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbn1cclxuXHJcbi50aXRsZXN7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogMTAwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWluLXdpZHRoOiAyNTBweDtcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG59XHJcblxyXG4uY2VudGVyZWRab25le1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1pbi13aWR0aDogMzM1cHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbn1cclxuXHJcbi5sb2dpbk1hdEZvcm1GaWVsZHtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmJpZ0J1dHRvbntcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAxMDBweDtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG5cclxufVxyXG5cclxuLndyaXR0ZW5CdXR0b257XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG5cclxuXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ud3JpdHRlbkJ1dHRvbjphY3RpdmV7XHJcbiAgY29sb3I6IFx0IzJjMmYzMztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcblxyXG59IFxyXG5cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWluLXdpZHRoOiAzNTBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogNDBweDtcclxuICBtYXgtaGVpZ2h0OiA4MHB4O1xyXG59XHJcbiNjb250aW51ZUJ1dHRvbntcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG1hcmdpbjogMjBweDtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/phone-footer/phone-footer.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/components/phone-footer/phone-footer.component.ts ***!
          \*******************************************************************/
        /*! exports provided: PhoneFooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneFooterComponent", function () { return PhoneFooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PhoneFooterComponent = /** @class */ (function () {
                function PhoneFooterComponent() {
                }
                PhoneFooterComponent.prototype.ngOnInit = function () {
                };
                return PhoneFooterComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PhoneFooterComponent.prototype, "rtLink", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PhoneFooterComponent.prototype, "title", void 0);
            PhoneFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-phone-footer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phone-footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phone-footer/phone-footer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phone-footer.component.css */ "./src/app/components/phone-footer/phone-footer.component.css")).default]
                })
            ], PhoneFooterComponent);
            /***/ 
        }),
        /***/ "./src/app/components/phone-header/phone-header.component.css": 
        /*!********************************************************************!*\
          !*** ./src/app/components/phone-header/phone-header.component.css ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css?family=Poppins');\r\nbody{\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n.centered-content{\r\n  padding-top: 5%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  -webkit-box-align: center;\r\n  box-sizing: border-box;\r\n  min-width: 335px;\r\n  max-width: 100%;\r\n  height:100%;\r\n}\r\n.titles{\r\n  padding: 20px;\r\n  margin-bottom: 10px;\r\n  font-size: 25px;\r\n  font-weight: 1000;\r\n  text-align: center;\r\n  min-width: 250px;\r\n  max-width: 800px;\r\n}\r\n.centeredZone{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  min-width: 335px;\r\n  max-width: 1000px;\r\n}\r\n.loginMatFormField{\r\n  font-family: \"Poppins\", sans-serif;\r\n  width: 250px;\r\n  margin-top: 22px;\r\n  padding: 10px;\r\n}\r\n.bigButton{\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n\r\n  width: 100%;\r\n  min-width: 100px;\r\n  max-width: 200px;\r\n\r\n}\r\n.writtenButton{\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  margin: 5px;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  font-family: \"Poppins\", sans-serif;\r\n\r\n\r\n  cursor: pointer;\r\n\r\n  background: none;\r\n  border: none;\r\n  outline: none;\r\n}\r\n.writtenButton:active{\r\n  color: \t#2c2f33;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  font-family: \"Poppins\", sans-serif;\r\n\r\n}\r\n.container{\r\n  display: flex;\r\n  color:#fff;\r\n  background: #647c84;\r\n  font-family: \"Poppins\", sans-serif;\r\n  min-width: 335px;\r\n  max-width: 100%;\r\n  min-height: 40px;\r\n  max-height: 80px;\r\n}\r\n.screenTitle{\r\n  text-align: center;\r\n  position: flex;\r\n  vertical-align: middle;\r\n  align-items: center;\r\n  padding: 5px;\r\n  max-width: 100%;\r\n  margin: auto;\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n}\r\n.backbutton{\r\n  margin-left: -25px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZS1oZWFkZXIvcGhvbmUtaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOERBQThEO0FBQzlEO0VBQ0Usa0NBQWtDO0FBQ3BDO0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7O0VBRW5CLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCOztBQUVsQjtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0NBQWtDOzs7RUFHbEMsZUFBZTs7RUFFZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0NBQWtDOztBQUVwQztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmUtaGVhZGVyL3Bob25lLWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zJyk7XHJcbmJvZHl7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY2VudGVyZWQtY29udGVudHtcclxuICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1pbi13aWR0aDogMzM1cHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDoxMDAlO1xyXG59XHJcblxyXG4udGl0bGVze1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxufVxyXG5cclxuLmNlbnRlcmVkWm9uZXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtaW4td2lkdGg6IDMzNXB4O1xyXG4gIG1heC13aWR0aDogMTAwMHB4O1xyXG59XHJcblxyXG4ubG9naW5NYXRGb3JtRmllbGR7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBtYXJnaW4tdG9wOiAyMnB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5iaWdCdXR0b257XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxuXHJcbn1cclxuXHJcbi53cml0dGVuQnV0dG9ue1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuXHJcblxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLndyaXR0ZW5CdXR0b246YWN0aXZle1xyXG4gIGNvbG9yOiBcdCMyYzJmMzM7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG5cclxufSBcclxuXHJcbi5jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb2xvcjojZmZmO1xyXG4gIGJhY2tncm91bmQ6ICM2NDdjODQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gIG1pbi13aWR0aDogMzM1cHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgbWF4LWhlaWdodDogODBweDtcclxufVxyXG5cclxuLnNjcmVlblRpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogZmxleDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5iYWNrYnV0dG9ue1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjVweDtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/phone-header/phone-header.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/components/phone-header/phone-header.component.ts ***!
          \*******************************************************************/
        /*! exports provided: PhoneHeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneHeaderComponent", function () { return PhoneHeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PhoneHeaderComponent = /** @class */ (function () {
                function PhoneHeaderComponent() {
                }
                PhoneHeaderComponent.prototype.ngOnInit = function () {
                    console.log(this.rtLink);
                };
                return PhoneHeaderComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PhoneHeaderComponent.prototype, "title", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PhoneHeaderComponent.prototype, "rtLink", void 0);
            PhoneHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-phone-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phone-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/phone-header/phone-header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phone-header.component.css */ "./src/app/components/phone-header/phone-header.component.css")).default]
                })
            ], PhoneHeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/components/popup-screen/popup-screen.component.css": 
        /*!********************************************************************!*\
          !*** ./src/app/components/popup-screen/popup-screen.component.css ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".centered-content{\r\n    padding: 5% 8%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    box-sizing: border-box;\r\n    max-width: 80%;  \r\n    min-height: 350px;\r\n    margin: auto;\r\n}\r\n\r\n#title{\r\n    padding: 0% 0% 5% 0%;\r\n    font-size: 30px;\r\n    font-weight: 1000;\r\n    text-align: center;\r\n    color: #647c84;\r\n}\r\n\r\n.centered-content h3 {\r\n    text-align: center;\r\n    margin-bottom: 5px;\r\n    font-size: 26px;\r\n}\r\n\r\n#next_button {\r\n    width: 80%;\r\n    height: 40px;\r\n    font-size: 1.1rem;\r\n    margin: 30px auto 0px auto;\r\n    background-color: #647c84;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3B1cC1zY3JlZW4vcG9wdXAtc2NyZWVuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9wdXAtc2NyZWVuL3BvcHVwLXNjcmVlbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcmVkLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOiA1JSA4JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXgtd2lkdGg6IDgwJTsgIFxyXG4gICAgbWluLWhlaWdodDogMzUwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbiN0aXRsZXtcclxuICAgIHBhZGRpbmc6IDAlIDAlIDUlIDAlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzY0N2M4NDtcclxufVxyXG5cclxuLmNlbnRlcmVkLWNvbnRlbnQgaDMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG59XHJcblxyXG4jbmV4dF9idXR0b24ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gMHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3Yzg0O1xyXG4gIH0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/popup-screen/popup-screen.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/components/popup-screen/popup-screen.component.ts ***!
          \*******************************************************************/
        /*! exports provided: PopupScreenComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupScreenComponent", function () { return PopupScreenComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var src_app_services_payment_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/payment-service.service */ "./src/app/services/payment-service.service.ts");
            var PopupScreenComponent = /** @class */ (function () {
                function PopupScreenComponent(dialogRef, paymentService, data) {
                    this.dialogRef = dialogRef;
                    this.paymentService = paymentService;
                    this.data = data;
                }
                PopupScreenComponent.prototype.ngOnInit = function () {
                    this.zone = this.paymentService.getZone();
                    this.saldo = Math.floor(this.paymentService.getAccumulated() * 100) / 100;
                };
                PopupScreenComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                return PopupScreenComponent;
            }());
            PopupScreenComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: src_app_services_payment_service_service__WEBPACK_IMPORTED_MODULE_3__["PaymentServiceService"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            PopupScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-popup-screen',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-screen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popup-screen/popup-screen.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-screen.component.css */ "./src/app/components/popup-screen/popup-screen.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], PopupScreenComponent);
            /***/ 
        }),
        /***/ "./src/app/components/register/register.component.css": 
        /*!************************************************************!*\
          !*** ./src/app/components/register/register.component.css ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".centered-content{\r\n  padding: 5% 8%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  -webkit-box-align: center;\r\n  box-sizing: border-box;\r\n  max-width: 100%;  \r\n  min-height: 640px;\r\n}\r\n\r\n#title{\r\n  padding: 5% 0%;\r\n  font-size: 36px;\r\n  font-weight: 1000;\r\n  text-align: center;\r\n  color: #647c84;\r\n}\r\n\r\n.subtitle {\r\n  font-size: 20px;\r\n  text-align: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n#register_form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n\r\n.form-control {\r\n  text-align: center;\r\n  height: 50px;\r\n  margin-top: 17px;\r\n}\r\n\r\n#next_button {\r\n  width: 80%;\r\n  height: 50px;\r\n  font-size: 1.2rem;\r\n  margin: 0px auto;\r\n  background-color: #647c84;\r\n}\r\n\r\n#writtenButton{\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  margin: 10px;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  font-family: \"Poppins\", sans-serif;\r\n\r\n  cursor: pointer;\r\n  color: #505050;\r\n\r\n  background: none;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n#writtenButton:active{\r\n  color: \t#2c2f33;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  font-family: \"Poppins\", sans-serif;\r\n} \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtDQUFrQzs7RUFFbEMsZUFBZTtFQUNmLGNBQWM7O0VBRWQsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQ0FBa0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyZWQtY29udGVudHtcclxuICBwYWRkaW5nOiA1JSA4JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWF4LXdpZHRoOiAxMDAlOyAgXHJcbiAgbWluLWhlaWdodDogNjQwcHg7XHJcbn1cclxuXHJcbiN0aXRsZXtcclxuICBwYWRkaW5nOiA1JSAwJTtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjNjQ3Yzg0O1xyXG59XHJcblxyXG4uc3VidGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuI3JlZ2lzdGVyX2Zvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW4tdG9wOiAxN3B4O1xyXG59XHJcblxyXG4jbmV4dF9idXR0b24ge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0N2M4NDtcclxufVxyXG5cclxuI3dyaXR0ZW5CdXR0b257XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjNTA1MDUwO1xyXG5cclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4jd3JpdHRlbkJ1dHRvbjphY3RpdmV7XHJcbiAgY29sb3I6IFx0IzJjMmYzMztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbn0gXHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/register/register.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/components/register/register.component.ts ***!
          \***********************************************************/
        /*! exports provided: RegisterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () { return RegisterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/register.service */ "./src/app/services/register.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var RegisterComponent = /** @class */ (function () {
                function RegisterComponent(registerService, router) {
                    this.registerService = registerService;
                    this.router = router;
                }
                RegisterComponent.prototype.validateFields = function () {
                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (this.email == undefined || this.password == undefined || this.passwordConfirm == undefined) {
                        this.invalidMessage = "Por favor preencha todos os espaços!";
                        return false;
                    }
                    else if (!re.test(this.email)) {
                        this.invalidMessage = "Introduza um email válido!";
                        return false;
                    }
                    else if (this.passwordConfirm != this.password) {
                        this.invalidMessage = "As passwords são diferentes!";
                        return false;
                    }
                    else {
                        return true;
                    }
                };
                RegisterComponent.prototype.sendMessage = function () {
                    if (!this.validateFields()) {
                        return false;
                    }
                    var values = {
                        email: this.email,
                        password: this.password,
                    };
                    this.registerService.setRegisterInformation(values);
                    this.router.navigate(['/registerInformation']);
                };
                return RegisterComponent;
            }());
            RegisterComponent.ctorParameters = function () { return [
                { type: _services_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-register',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")).default]
                })
            ], RegisterComponent);
            /***/ 
        }),
        /***/ "./src/app/services/payment-service.service.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/services/payment-service.service.ts ***!
          \*****************************************************/
        /*! exports provided: PaymentServiceService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentServiceService", function () { return PaymentServiceService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PaymentServiceService = /** @class */ (function () {
                function PaymentServiceService() {
                    //from parking Time Screen
                    this.parkingTime = 1;
                    //not implemented yet
                    this.discount = 0.00;
                }
                PaymentServiceService.prototype.setZoneInformations = function (zoneTitle, zoneCharge, zoneColor) {
                    this.zoneTitle = zoneTitle;
                    this.zoneCharge = zoneCharge;
                    this.zoneColor = zoneColor;
                };
                PaymentServiceService.prototype.setParkingInfo = function (parkingTime, parkingPrice) {
                    this.parkingTime = parkingTime; //This time is in milliseconds
                    this.price = parkingPrice;
                };
                PaymentServiceService.prototype.getParkingDiscount = function () {
                    return this.discount;
                };
                PaymentServiceService.prototype.getPrice = function () {
                    return this.price;
                };
                PaymentServiceService.prototype.getAccumulated = function () {
                    return this.price * 0.10;
                };
                PaymentServiceService.prototype.getZone = function () {
                    return this.zoneTitle;
                };
                PaymentServiceService.prototype.setParkingDiscount = function (discount) {
                    this.discount = discount;
                };
                PaymentServiceService.prototype.msToTime = function (parkingTime) {
                    var minutes = (Math.floor((parkingTime / (1000 * 60)) % 60)).toString(), hours = (Math.floor((parkingTime / (1000 * 60 * 60)) % 24)).toString();
                    hours = (parseInt(hours) < 10) ? "0" + hours : hours;
                    minutes = (parseInt(minutes) < 10) ? "0" + minutes : minutes;
                    return hours + "h" + minutes + "min";
                };
                PaymentServiceService.prototype.setDiscount = function (discount) {
                    this.discount = discount;
                };
                PaymentServiceService.prototype.getParkingInformations = function () {
                    //this.price = parseFloat(this.zoneCharge)*this.parkingTime - this.discount;
                    //console.log(parseFloat(this.zoneCharge)*this.parkingTime - this.discount);
                    return {
                        zoneTitle: this.zoneTitle,
                        zoneCharge: this.zoneCharge,
                        zoneColor: this.zoneColor,
                        price: this.price,
                        parkingTime: this.parkingTime,
                        discount: this.discount
                    };
                };
                return PaymentServiceService;
            }());
            PaymentServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], PaymentServiceService);
            /***/ 
        }),
        /***/ "./src/app/services/register.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/services/register.service.ts ***!
          \**********************************************/
        /*! exports provided: RegisterService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function () { return RegisterService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var RegisterService = /** @class */ (function () {
                function RegisterService() {
                }
                RegisterService.prototype.setRegisterInformation = function (values) {
                    this.email = values.email;
                    this.password = values.password;
                };
                RegisterService.prototype.setPersonalInformation = function (values) {
                    this.phoneNumber = values.phoneNumber;
                    this.name = values.name;
                    this.licensePlate = values.licensePlate;
                };
                RegisterService.prototype.setPaymentMethod = function (string) {
                    this.paymentMethod = string;
                };
                RegisterService.prototype.getRegisterInformation = function () {
                    var form = {
                        password: this.password,
                        name: this.name,
                        phoneNumber: this.phoneNumber,
                        email: this.email,
                        licensePlate: this.licensePlate,
                        paymentMethod: this.paymentMethod
                    };
                    return form;
                };
                return RegisterService;
            }());
            RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], RegisterService);
            /***/ 
        }),
        /***/ "./src/app/services/user.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/user.service.ts ***!
          \******************************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _web_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web.service */ "./src/app/services/web.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var UserService = /** @class */ (function () {
                function UserService(webService, router) {
                    this.webService = webService;
                    this.router = router;
                    this.confirmParking = false;
                    this.noAuthHeader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'NoAuth': 'True' }) };
                }
                UserService.prototype.createUser = function (name, password, phoneNumber, email, licensePlate, paymentMethod) {
                    return this.webService.post('users', { name: name, password: password, phoneNumber: phoneNumber, email: email, licensePlate: licensePlate, paymentMethod: paymentMethod }, this.noAuthHeader);
                };
                UserService.prototype.LoginUser = function (phoneNumber, password) {
                    return this.webService.post('authenticate', { phoneNumber: phoneNumber, password: password }, this.noAuthHeader);
                };
                UserService.prototype.setToken = function (token) {
                    this.webService.setToken(token);
                    this.router.navigateByUrl('/defaultScreen');
                };
                UserService.prototype.logOut = function () {
                    this.webService.deleteToken();
                };
                UserService.prototype.getUserProfile = function () {
                    return this.webService.getWithPermission('userProfile');
                };
                UserService.prototype.setUserBalance = function (id, balance) {
                    //this should need authorization but it should be fine because they can only access from within
                    return this.webService.patch('changeBalance', id, { balance: balance }, this.noAuthHeader);
                };
                UserService.prototype.setConfirmParking = function (bool) {
                    this.confirmParking = bool;
                };
                UserService.prototype.getConfirmParking = function () {
                    return this.confirmParking;
                };
                UserService.prototype.getZones = function () {
                    return this.webService.get('Zones', this.noAuthHeader);
                };
                return UserService;
            }());
            UserService.ctorParameters = function () { return [
                { type: _web_service__WEBPACK_IMPORTED_MODULE_2__["WebService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], UserService);
            /***/ 
        }),
        /***/ "./src/app/services/web.service.ts": 
        /*!*****************************************!*\
          !*** ./src/app/services/web.service.ts ***!
          \*****************************************/
        /*! exports provided: WebService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebService", function () { return WebService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var WebService = /** @class */ (function () {
                function WebService(http) {
                    this.http = http;
                    //this.ROOT_URL = 'http://localhost:3000/';
                    this.ROOT_URL = '';
                }
                // Http methods
                WebService.prototype.get = function (uri, permission) {
                    //return this.http.get(`${uri}`, permission);
                    return this.http.get("" + this.ROOT_URL + uri, permission);
                };
                WebService.prototype.getWithPermission = function (uri) {
                    //return this.http.get(`${uri}`);
                    return this.http.get("" + this.ROOT_URL + uri);
                };
                WebService.prototype.post = function (uri, payload, permission) {
                    //return this.http.post(`${uri}`, payload, permission);
                    return this.http.post("" + this.ROOT_URL + uri, payload, permission);
                };
                WebService.prototype.patch = function (uri, id, payload, permission) {
                    //return this.http.patch(`${uri}/${id}`, payload, permission);
                    return this.http.patch("" + this.ROOT_URL + uri + "/" + id, payload, permission);
                };
                // Token helper methods
                WebService.prototype.setToken = function (token) {
                    this.deleteToken();
                    localStorage.setItem('token', token);
                };
                WebService.prototype.deleteToken = function () {
                    localStorage.removeItem('token');
                };
                WebService.prototype.getToken = function () {
                    return localStorage.getItem('token');
                };
                WebService.prototype.getTokenPayload = function () {
                    var token = this.getToken();
                    if (token) {
                        var userPayload = atob(token.split('.')[1]);
                        return JSON.parse(userPayload);
                    }
                    else
                        return null;
                };
                WebService.prototype.isLoggedIn = function () {
                    var userPayload = this.getTokenPayload();
                    console.log(userPayload);
                    if (userPayload) {
                        return true;
                    }
                    else
                        return false;
                };
                return WebService;
            }());
            WebService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            WebService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], WebService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                mapbox: {
                    accessToken: 'pk.eyJ1IjoiaGxmZXJyZWlyYSIsImEiOiJjazN2aXloMHYwbWFyM21waWhoY255NzF1In0.Koj_fvIbCCUV4SQ48VL1qg'
                }
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\Pc\Desktop\CCU\Project\OnSpot\on-spot\frontend-Angular\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map