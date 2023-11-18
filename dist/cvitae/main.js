"use strict";
(self["webpackChunkcvitae"] = self["webpackChunkcvitae"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {
    static { this.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); }
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_strings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/strings.service */ 1143);
/* harmony import */ var _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cards/cards.component */ 8486);
/* harmony import */ var _components_header_tool_bar_header_tool_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header-tool-bar/header-tool-bar.component */ 7231);
/* harmony import */ var _components_coverage_coverage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/coverage/coverage.component */ 5740);
/* harmony import */ var _components_dashboard_admin_dashboard_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboard-admin/dashboard-admin.component */ 7258);
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navigation/navigation.component */ 6);







class AppComponent {
    constructor(_stringService) {
        this._stringService = _stringService;
        this.title = 'cvitae';
        this._stringService.language = "Spanish";
    }
    static { this.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_strings_service__WEBPACK_IMPORTED_MODULE_0__.StringService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-navigation")(2, "app-header-tool-bar")(3, "app-coverage")(4, "app-cards-component")(5, "app-dashboard-admin");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        } }, dependencies: [_components_cards_cards_component__WEBPACK_IMPORTED_MODULE_1__.CardsComponent, _components_header_tool_bar_header_tool_bar_component__WEBPACK_IMPORTED_MODULE_2__.HeaderToolBarComponent, _components_coverage_coverage_component__WEBPACK_IMPORTED_MODULE_3__.CoverageComponent, _components_dashboard_admin_dashboard_admin_component__WEBPACK_IMPORTED_MODULE_4__.DashboardAdminComponent, _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__.NavigationComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] }); }
}


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/cards/cards.component */ 8486);
/* harmony import */ var _components_card_generator_card_generator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/card-generator/card-generator.component */ 7807);
/* harmony import */ var _components_header_tool_bar_header_tool_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header-tool-bar/header-tool-bar.component */ 7231);
/* harmony import */ var _components_coverage_coverage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/coverage/coverage.component */ 5740);
/* harmony import */ var _components_dashboard_admin_dashboard_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashboard-admin/dashboard-admin.component */ 7258);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navigation/navigation.component */ 6);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);























class AppModule {
    static { this.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] }); }
    static { this.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__.MatToolbarModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__.MatSlideToggleModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__.LayoutModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__.MatSidenavModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_22__.MatListModule] }); }
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_2__.CardsComponent,
        _components_card_generator_card_generator_component__WEBPACK_IMPORTED_MODULE_3__.CardGeneratorComponent,
        _components_header_tool_bar_header_tool_bar_component__WEBPACK_IMPORTED_MODULE_4__.HeaderToolBarComponent,
        _components_coverage_coverage_component__WEBPACK_IMPORTED_MODULE_5__.CoverageComponent,
        _components_dashboard_admin_dashboard_admin_component__WEBPACK_IMPORTED_MODULE_6__.DashboardAdminComponent,
        _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__.NavigationComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__.MatToolbarModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__.MatSlideToggleModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule,
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__.LayoutModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__.MatSidenavModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_22__.MatListModule] }); })();


/***/ }),

/***/ 7807:
/*!***********************************************************************!*\
  !*** ./src/app/components/card-generator/card-generator.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardGeneratorComponent": () => (/* binding */ CardGeneratorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _services_colors_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/colors.service */ 962);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);







const _c0 = ["cardContainer"];
const _c1 = ["cardTitle"];
const _c2 = ["cardSubtitle"];
const _c3 = ["cardDescription"];
function CardGeneratorComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const button_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, ctx_r5.style$));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](button_r6.title);
  }
}
class CardGeneratorComponent {
  constructor(_colorService) {
    this._colorService = _colorService;
    this.title = "Default title";
    this.subtitle = "Default subtitle";
    this.description = "Default description container";
    this.actionButtons = [];
    //@ViewChild('cardButton', {static:true, read:ElementRef}) private cardButton?:ElementRef;
    this.styleHandler$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject("");
    this.style$ = this.styleHandler$;
  }
  ngOnInit() {
    //console.log(this.cardButton);
    this._colorService.getColors$().subscribe(colors => {
      this.mainContainer?.nativeElement.setAttribute("style", `background-color:${colors.backgroundDocument}`);
      this.cardTitle?.nativeElement.setAttribute('style', `color:${colors.titles}`);
      this.cardSubTitle?.nativeElement.setAttribute('style', `color:${colors.subtitles}`);
      this.cardDescription?.nativeElement.setAttribute('style', `color:${colors.texts}`);
      //this.cardButton?.nativeElement.setAttribute('style', `color:${colors.buttons}`);
      this.styleHandler$.next({
        'background-color': `${colors.buttons}`
      });
    });
  }
  static {
    this.ɵfac = function CardGeneratorComponent_Factory(t) {
      return new (t || CardGeneratorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_colors_service__WEBPACK_IMPORTED_MODULE_0__.ColorService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CardGeneratorComponent,
      selectors: [["app-card-generator"]],
      viewQuery: function CardGeneratorComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mainContainer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.cardTitle = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.cardSubTitle = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.cardDescription = _t.first);
        }
      },
      inputs: {
        title: "title",
        subtitle: "subtitle",
        description: "description",
        actionButtons: "actionButtons"
      },
      decls: 15,
      vars: 4,
      consts: [["cardContainer", ""], ["cardHeader", ""], ["cardTitle", ""], ["cardSubtitle", ""], ["cardDescription", ""], ["mat-button", "", 3, "ngStyle", 4, "ngFor", "ngForOf"], ["mat-button", "", 3, "ngStyle"], ["cardButton", ""]],
      template: function CardGeneratorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", null, 0)(2, "mat-card-header", null, 1)(4, "mat-card-title", null, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-subtitle", null, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card-content", null, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-card-actions");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CardGeneratorComponent_button_14_Template, 4, 4, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.subtitle);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.description, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.actionButtons);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
      styles: ["mat-card[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\nmat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtZ2VuZXJhdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoiY2FyZC1nZW5lcmF0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbm1hdC1jYXJkLWFjdGlvbnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuIl19 */"]
    });
  }
}

/***/ }),

/***/ 8486:
/*!*****************************************************!*\
  !*** ./src/app/components/cards/cards.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardsComponent": () => (/* binding */ CardsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4055);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_mock_data_js_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/mock-data.js.service */ 5842);
/* harmony import */ var _services_strings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/strings.service */ 1143);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _card_generator_card_generator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card-generator/card-generator.component */ 7807);








function CardsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-card-generator", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", item_r1.title)("subtitle", item_r1.subtitle)("description", item_r1.description)("actionButtons", item_r1.actionButtons);
  }
}
class CardsComponent {
  constructor(_mockService, _stringService, _layout) {
    this._mockService = _mockService;
    this._stringService = _stringService;
    this._layout = _layout;
    this.componentName = "CardsComponent";
    this.isWeb$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(false);
    this.data = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([]);
  }
  ngOnInit() {
    //this.data = of(this._mockService.getData().cards);
    this._layout.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.Breakpoints.Web, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.Breakpoints.Tablet, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.Breakpoints.Handset]).subscribe(({
      matches,
      breakpoints
    }) => {
      if (!matches) console.log(`UNCOVER DEVICE !!`);
      if (breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.Breakpoints.WebLandscape]) console.log(`This is a WEB Landscape!`);
      if (breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.Breakpoints.WebPortrait]) console.log(`This is a WEB Portrait!`);
      if (breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.Breakpoints.TabletLandscape]) console.log(`This is a TABLET Landscape!`);
      if (breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.Breakpoints.TabletPortrait]) console.log(`This is a TABLET! Portrait`);
      if (breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.Breakpoints.HandsetLandscape]) console.log(`This is a Phone Landscape`);
      if (breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.Breakpoints.HandsetPortrait]) console.log(`This is a Phone Portrait`);
    });
    this._stringService.stringsText$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.skipWhile)(strings => !strings.components), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(strings => strings.components), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(strings => strings[this.componentName])).subscribe(cards => {
      this.data = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(cards);
    });
  }
  static {
    this.ɵfac = function CardsComponent_Factory(t) {
      return new (t || CardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_mock_data_js_service__WEBPACK_IMPORTED_MODULE_0__.MockDataJsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_strings_service__WEBPACK_IMPORTED_MODULE_1__.StringService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.BreakpointObserver));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CardsComponent,
      selectors: [["app-cards-component"]],
      decls: 2,
      vars: 3,
      consts: [[4, "ngFor", "ngForOf"], [3, "title", "subtitle", "description", "actionButtons"]],
      template: function CardsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CardsComponent_div_0_Template, 2, 4, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.data));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _card_generator_card_generator_component__WEBPACK_IMPORTED_MODULE_2__.CardGeneratorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkcy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
  }
}

/***/ }),

/***/ 5740:
/*!***********************************************************!*\
  !*** ./src/app/components/coverage/coverage.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoverageComponent": () => (/* binding */ CoverageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_colors_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/colors.service */ 962);



const _c0 = ["coverageContainer"];
class CoverageComponent {
    constructor(_colors) {
        this._colors = _colors;
    }
    ngOnInit() {
        this._colors.getColors$().subscribe(colors => {
            this.coverageContainer?.nativeElement.setAttribute("style", `background-color:${colors.backgroundDocument}`);
        });
    }
    static { this.ɵfac = function CoverageComponent_Factory(t) { return new (t || CoverageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_colors_service__WEBPACK_IMPORTED_MODULE_0__.ColorService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CoverageComponent, selectors: [["app-coverage"]], viewQuery: function CoverageComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
        } if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.coverageContainer = _t.first);
        } }, decls: 4, vars: 0, consts: [[1, "mainContainer"], ["coverageContainer", ""]], template: function CoverageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1)(2, "a");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Hello covergae");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        } }, styles: [".mainContainer[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdmVyYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoiY292ZXJhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbkNvbnRhaW5lcntcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */"] }); }
}


/***/ }),

/***/ 7258:
/*!*************************************************************************!*\
  !*** ./src/app/components/dashboard-admin/dashboard-admin.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardAdminComponent": () => (/* binding */ DashboardAdminComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);










function DashboardAdminComponent_mat_grid_tile_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 4)(1, "mat-card", 5)(2, "mat-card-header")(3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6)(6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-menu", 7, 8)(10, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Expand");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-content", 10)(15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Card Content Here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", card_r1.cols)("rowspan", card_r1.rows);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", card_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);
  }
}
class DashboardAdminComponent {
  constructor(breakpointObserver) {
    this.breakpointObserver = breakpointObserver;
    /** Based on the screen size, switch from standard to one column per row */
    this.cards = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.Breakpoints.Handset).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(({
      matches
    }) => {
      if (matches) {
        return [{
          title: 'Card 1',
          cols: 1,
          rows: 1
        }, {
          title: 'Card 2',
          cols: 1,
          rows: 1
        }, {
          title: 'Card 3',
          cols: 1,
          rows: 1
        }, {
          title: 'Card 4',
          cols: 1,
          rows: 1
        }];
      }
      return [{
        title: 'Card 1',
        cols: 2,
        rows: 1
      }, {
        title: 'Card 2',
        cols: 1,
        rows: 1
      }, {
        title: 'Card 3',
        cols: 1,
        rows: 2
      }, {
        title: 'Card 4',
        cols: 1,
        rows: 1
      }];
    }));
  }
  static {
    this.ɵfac = function DashboardAdminComponent_Factory(t) {
      return new (t || DashboardAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.BreakpointObserver));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardAdminComponent,
      selectors: [["app-dashboard-admin"]],
      decls: 6,
      vars: 3,
      consts: [[1, "grid-container"], [1, "mat-h1"], ["cols", "2", "rowHeight", "350px"], [3, "colspan", "rowspan", 4, "ngFor", "ngForOf"], [3, "colspan", "rowspan"], [1, "dashboard-card"], ["mat-icon-button", "", "aria-label", "Toggle menu", 1, "more-button", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["menu", "matMenu"], ["mat-menu-item", ""], [1, "dashboard-card-content"]],
      template: function DashboardAdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-grid-list", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardAdminComponent_mat_grid_tile_4_Template, 17, 4, "mat-grid-tile", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx.cards));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__.MatGridTile, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
      styles: [".grid-container[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.dashboard-card[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.more-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC1hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRiIsImZpbGUiOiJkYXNoYm9hcmQtYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jb250YWluZXIge1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5kYXNoYm9hcmQtY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgYm90dG9tOiAxNXB4O1xufVxuXG4ubW9yZS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogMTBweDtcbn1cblxuLmRhc2hib2FyZC1jYXJkLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"]
    });
  }
}

/***/ }),

/***/ 7231:
/*!*************************************************************************!*\
  !*** ./src/app/components/header-tool-bar/header-tool-bar.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderToolBarComponent": () => (/* binding */ HeaderToolBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4055);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _services_colors_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/colors.service */ 962);
/* harmony import */ var _services_strings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/strings.service */ 1143);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);







const _c0 = ["mainToolBar"];
const _c1 = ["titleBar"];
class HeaderToolBarComponent {
    constructor(_colorService, _stringService) {
        this._colorService = _colorService;
        this._stringService = _stringService;
        this.title = "";
        this.componentName = "HeaderToolBarComponent";
    }
    ngOnInit() {
        this._colorService.getColors$().subscribe(colors => {
            this.toolBar?.nativeElement.setAttribute("style", `background-color:${colors.primaryColor}`);
            this.titleBar?.nativeElement.setAttribute('style', `color:${colors.titles}`);
        });
        this._stringService.stringsText$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.skipWhile)((strings) => !strings.components), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((strings) => strings.components), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((componentStrings) => componentStrings[this.componentName])).subscribe(strings => {
            this.title = strings.title;
        });
        setTimeout(() => (this._stringService.language = "English"), 3000);
    }
    onToggleChange(value) {
        if (!value.checked) {
            this._colorService.theme = "light";
            return;
        }
        this._colorService.theme = "dark";
    }
    static { this.ɵfac = function HeaderToolBarComponent_Factory(t) { return new (t || HeaderToolBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_colors_service__WEBPACK_IMPORTED_MODULE_0__.ColorService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_strings_service__WEBPACK_IMPORTED_MODULE_1__.StringService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HeaderToolBarComponent, selectors: [["app-header-tool-bar"]], viewQuery: function HeaderToolBarComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef);
        } if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.toolBar = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.titleBar = _t.first);
        } }, decls: 12, vars: 1, consts: [["mainToolBar", ""], [1, "mainContainer"], ["titleBar", ""], [2, "display", "flex", "justify-content", "center", "align-items", "center"], [3, "change"]], template: function HeaderToolBarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-toolbar", null, 0)(2, "div", 1)(3, "span", null, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3)(7, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "\uD83C\uDF1E");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-slide-toggle", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function HeaderToolBarComponent_Template_mat_slide_toggle_change_9_listener($event) { return ctx.onToggleChange($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\uD83C\uDF1B");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.title);
        } }, dependencies: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbar, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__.MatSlideToggle], styles: [".mainContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 2;\n  flex-direction: row;\n  width: 100%;\n}\n\nspan[_ngcontent-%COMP%] {\n  flex: 1;\n  align-items: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci10b29sLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxPQUFBO0VBQ0EscUJBQUE7QUFDSiIsImZpbGUiOiJoZWFkZXItdG9vbC1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbkNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6MjtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5zcGFue1xuICAgIGZsZXg6MTtcbiAgICBhbGlnbi1pdGVtczpmbGV4LWVuZDtcbn0iXX0= */"] }); }
}


/***/ }),

/***/ 6:
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationComponent": () => (/* binding */ NavigationComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ 6517);










function NavigationComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class NavigationComponent {
  constructor(breakpointObserver) {
    this.breakpointObserver = breakpointObserver;
    this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.Breakpoints.Handset).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(result => result.matches), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.shareReplay)());
  }
  static {
    this.ɵfac = function NavigationComponent_Factory(t) {
      return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.BreakpointObserver));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavigationComponent,
      selectors: [["app-navigation"]],
      decls: 21,
      vars: 12,
      consts: [[1, "sidenav-container"], ["fixedInViewport", "", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], ["mat-list-item", "", "href", "#"], ["color", "primary"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"]],
      template: function NavigationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0)(1, "mat-sidenav", 1, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-toolbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-nav-list")(9, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Link 1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Link 2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Link 3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-sidenav-content")(16, "mat-toolbar", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NavigationComponent_button_17_Template, 3, 0, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "cvitae");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 8, ctx.isHandset$) === false);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.isHandset$) ? "dialog" : "navigation");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 10, ctx.isHandset$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavContent, _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListItem, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
      styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQUNGIiwiZmlsZSI6Im5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG4iXX0= */"]
    });
  }
}

/***/ }),

/***/ 962:
/*!********************************************!*\
  !*** ./src/app/services/colors.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorService": () => (/* binding */ ColorService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4055);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _data_themes_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/themes.json */ 6104);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);



class ColorService {
    constructor() {
        this.currentTheme$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject("");
        this.changeThemeDetection$ = this.currentTheme$;
        this.jsonThemes = _data_themes_json__WEBPACK_IMPORTED_MODULE_0__;
        this.themeDetails$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({});
        this.colorListener$ = this.themeDetails$;
        this.currentTheme$.next(this.jsonThemes.defaultSelection);
        this.themeDetails$.next(this.jsonThemes[this.jsonThemes.defaultSelection]);
        this.changeThemeDetection$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.skipWhile)(theme => theme === ""), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((theme) => (this.jsonThemes[theme])), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(theme => this.themeDetails$.next(theme))).subscribe();
    }
    set theme(theme) {
        this.currentTheme$.next(theme);
    }
    getColors$() {
        return this.colorListener$;
    }
    static { this.ɵfac = function ColorService_Factory(t) { return new (t || ColorService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ColorService, factory: ColorService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 5842:
/*!**************************************************!*\
  !*** ./src/app/services/mock-data.js.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MockDataJsService": () => (/* binding */ MockDataJsService)
/* harmony export */ });
/* harmony import */ var _data_cards_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../data/cards.json */ 6605);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


;
;
class MockDataJsService {
    constructor() {
    }
    getData() {
        return {
            cards: _data_cards_json__WEBPACK_IMPORTED_MODULE_0__
        };
    }
    static { this.ɵfac = function MockDataJsService_Factory(t) { return new (t || MockDataJsService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MockDataJsService, factory: MockDataJsService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 1143:
/*!*********************************************!*\
  !*** ./src/app/services/strings.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StringService": () => (/* binding */ StringService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _data_i18n_en_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/i18n/en.json */ 7733);
/* harmony import */ var _data_i18n_es_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/i18n/es.json */ 1461);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




class StringService {
    constructor() {
        this.stringHandler$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
        this.strings$ = this.stringHandler$;
        this.languageCode = (lang) => ({ 'Spanish': 'es', 'English': 'en' })[lang];
        this._englishStrings = _data_i18n_en_json__WEBPACK_IMPORTED_MODULE_0__;
        this._spanishStrings = _data_i18n_es_json__WEBPACK_IMPORTED_MODULE_1__;
    }
    set language(language) {
        switch (language) {
            case 'English':
                this.stringHandler$.next(this._englishStrings);
                break;
            case 'Spanish':
                this.stringHandler$.next(this._spanishStrings);
                break;
        }
    }
    get stringsText$() {
        return this.strings$;
    }
    static { this.ɵfac = function StringService_Factory(t) { return new (t || StringService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: StringService, factory: StringService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6605:
/*!*********************************!*\
  !*** ./src/app/data/cards.json ***!
  \*********************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"title":"Title One","image":"assets/imageOne.png","subtitle":"Subtitle One","description":"This is the description number one","actionButtons":[{"title":"SAVE","link":""},{"title":"ADD","link":""}]},{"title":"Title Two","image":"assets/imageOne.png","subtitle":"Subtitle Two","description":"This is the description number Two","actionButtons":[{"title":"SAVE","link":""},{"title":"ADD","link":""}]},{"title":"Title Three","image":"assets/imageOne.png","subtitle":"Subtitle Three","description":"This is the description number Three","actionButtons":[{"title":"SAVE","link":""},{"title":"ADD","link":""}]}]');

/***/ }),

/***/ 7733:
/*!***********************************!*\
  !*** ./src/app/data/i18n/en.json ***!
  \***********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"components":{"HeaderToolBarComponent":{"title":"My Application"},"CardsComponent":[{"title":"Title One","image":"assets/imageOne.png","subtitle":"Subtitle One","description":"This is the description number one","actionButtons":[{"title":"SAVE","link":""},{"title":"ADD","link":""}]},{"title":"Title Two","image":"assets/imageOne.png","subtitle":"Subtitle Two","description":"This is the description number Two","actionButtons":[{"title":"SAVE","link":""},{"title":"ADD","link":""}]},{"title":"Title Three","image":"assets/imageOne.png","subtitle":"Subtitle Three","description":"This is the description number Three","actionButtons":[{"title":"SAVE","link":""},{"title":"ADD","link":""}]}]}}');

/***/ }),

/***/ 1461:
/*!***********************************!*\
  !*** ./src/app/data/i18n/es.json ***!
  \***********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"components":{"HeaderToolBarComponent":{"title":"Mi Aplicación"},"CardsComponent":[{"title":"Titulo Uno","image":"assets/imageOne.png","subtitle":"Subtitulo Uno","description":"Esta es la descripción número uno","actionButtons":[{"title":"GUARDAR","link":""},{"title":"AGREGAR","link":""}]},{"title":"Titulo Dos","image":"assets/imageOne.png","subtitle":"Subtitulo Dos","description":"Esta es la descripcion número dos","actionButtons":[{"title":"GUARDAR","link":""},{"title":"AGREGAR","link":""}]},{"title":"Titulo Tres","image":"assets/imageOne.png","subtitle":"Subtitulo tres","description":"Esta es la descripción número tres","actionButtons":[{"title":"GUARDAR","link":""},{"title":"AGREGAR","link":""}]}]}}');

/***/ }),

/***/ 6104:
/*!**********************************!*\
  !*** ./src/app/data/themes.json ***!
  \**********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"defaultSelection":"light","dark":{"primaryColor":"#000000","backgroundDocument":"#14213d","titles":"#e5e5e5","subtitles":"#e0e1dd","texts":"#f4f3ee","warning":"#fcbf49","error":"#ef233c","success":"#06d6a0","buttons":"#fee440"},"light":{"primaryColor":"#ffffff","backgroundDocument":"#e5e5e5","titles":"#14213d","subtitles":"#778da9","texts":"#1b263b","warning":"#fcbf49","error":"#ef233c","success":"#06d6a0","buttons":"#fca311"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map