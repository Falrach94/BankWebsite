(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Ull":
/*!*************************************************************!*\
  !*** ./src/app/components/customs/group/group.component.ts ***!
  \*************************************************************/
/*! exports provided: GroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupComponent", function() { return GroupComponent; });
/* harmony import */ var src_app_store_groups_groups_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/store/groups/groups.actions */ "kciF");
/* harmony import */ var _dialogs_color_dialog_color_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dialogs/color-dialog/color-dialog.component */ "vxP4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









class GroupComponent {
    constructor(_store, _dialog) {
        this._store = _store;
        this._dialog = _dialog;
        this.labelVisible = true;
    }
    ngOnInit() {
    }
    onClickRemove() {
        this._store.dispatch(src_app_store_groups_groups_actions__WEBPACK_IMPORTED_MODULE_0__["GroupActions"].remove({ group: this.group }));
        //this._groupsService.removeGroup(this.group).subscribe();
    }
    onChangeName(name) {
        this.group.name = name;
        //this._groupsService.saveGroup(this.group).subscribe();
    }
    onClickPickColor() {
        this._dialog.open(_dialogs_color_dialog_color_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ColorDialogComponent"]).afterClosed().subscribe(res => {
        });
    }
}
GroupComponent.ɵfac = function GroupComponent_Factory(t) { return new (t || GroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
GroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GroupComponent, selectors: [["app-group"]], inputs: { group: "group" }, decls: 17, vars: 6, consts: [["backcolor", "red", 1, "group-container-element", 3, "mouseleave"], [3, "click"], ["labelDiv", ""], ["appearance", "standard"], ["fieldDiv", ""], ["matInput", "", "placeholder", "group name", 3, "value", "keydown.enter"], ["name", ""], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-button", ""]], template: function GroupComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseleave", function GroupComponent_Template_mat_card_mouseleave_0_listener() { return ctx.labelVisible = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GroupComponent_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9); ctx.labelVisible = false; return _r2.focus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-form-field", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.enter", function GroupComponent_Template_input_keydown_enter_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9); ctx.labelVisible = true; return ctx.onChangeName(_r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-card-actions", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GroupComponent_Template_button_click_11_listener() { return ctx.onClickPickColor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "set color");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "set icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GroupComponent_Template_button_click_15_listener() { return ctx.onClickRemove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("hide", !ctx.labelVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.group == null ? null : ctx.group.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("hide", ctx.labelVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.group.name);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: [".group-container-element[_ngcontent-%COMP%]{\r\n    margin: 5pt\r\n}\r\n\r\n \r\n.group-container-element .mat-form-field-appearance-standard .mat-form-field-flex{\r\n    padding:0pt\r\n}\r\n\r\n \r\n.group-container-element .mat-form-field-infix{\r\n    border-top:0pt\r\n}\r\n\r\n.show[_ngcontent-%COMP%]{\r\n    display:block;\r\n}\r\n\r\n.hide[_ngcontent-%COMP%]{\r\n    display:none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBOztJQUVJO0FBQ0o7O0FBQ0E7O0lBRUk7QUFDSjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6Imdyb3VwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JvdXAtY29udGFpbmVyLWVsZW1lbnR7XHJcbiAgICBtYXJnaW46IDVwdFxyXG59XHJcblxyXG46Om5nLWRlZXBcclxuLmdyb3VwLWNvbnRhaW5lci1lbGVtZW50IC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtZm9ybS1maWVsZC1mbGV4e1xyXG4gICAgcGFkZGluZzowcHRcclxufVxyXG46Om5nLWRlZXBcclxuLmdyb3VwLWNvbnRhaW5lci1lbGVtZW50IC5tYXQtZm9ybS1maWVsZC1pbmZpeHtcclxuICAgIGJvcmRlci10b3A6MHB0XHJcbn1cclxuXHJcbi5zaG93e1xyXG4gICAgZGlzcGxheTpibG9jaztcclxufVxyXG4uaGlkZXtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Coding\BankWebsite\PresentationLayer\WebFrontEnd\src\main.ts */"zUnb");


/***/ }),

/***/ "7/Rb":
/*!**************************************************!*\
  !*** ./src/app/store/account/account.actions.ts ***!
  \**************************************************/
/*! exports provided: AccountActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountActions", function() { return AccountActions; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

var AccountActions;
(function (AccountActions) {
    AccountActions.authenticate = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Action] authenticate", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    AccountActions.authenticateSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Action] authenticate success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    AccountActions.authenticateFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Action] authenticate failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    AccountActions.create = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Action] create", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    AccountActions.createSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Action] create success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    AccountActions.createFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Action] create failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    AccountActions.logout = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Action] logout");
})(AccountActions || (AccountActions = {}));


/***/ }),

/***/ "7caK":
/*!***************************************************************!*\
  !*** ./src/app/services/transactions/transactions.service.ts ***!
  \***************************************************************/
/*! exports provided: TransactionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsService", function() { return TransactionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _account_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../account/account.service */ "IRyT");



class TransactionsService {
    //subscription!: Subscription
    constructor(_http, baseUrl, _accountService) {
        this._http = _http;
        this._accountService = _accountService;
        this._baseUrl = baseUrl;
    }
    loadMonth(date) {
        date = new Date(date.getFullYear(), date.getMonth());
        let url = `${this._baseUrl}api/transactions/get/${this._accountService.getId()}/${date.toDateString()}/1`;
        return this._http.get(url);
    }
    assign(transaction, group) {
        let url = `${this._baseUrl}api/transactions/assign/${this._accountService.getId()}/${transaction.id}/${group.id}`;
        return this._http.put(url, {});
    }
    uploadCSVFile(file) {
        /*
        if(file.type != "text/csv")
        {
          console.log("no csv file selected")
          return;
        }*/
        const formData = new FormData();
        formData.append('file', file);
        let url = `${this._baseUrl}api/transactions/upload/${this._accountService.getId()}`;
        return this._http.post(url, formData);
    }
}
TransactionsService.ɵfac = function TransactionsService_Factory(t) { return new (t || TransactionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('baseUrl'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_account_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"])); };
TransactionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TransactionsService, factory: TransactionsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AEEb":
/*!**************************************************!*\
  !*** ./src/app/store/account/account.reducer.ts ***!
  \**************************************************/
/*! exports provided: AccountReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountReducer", function() { return AccountReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _account_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.actions */ "7/Rb");


function spreadError(error) {
    let errorMsg = "Unkown error!";
    switch (error.status) {
        case 404:
            errorMsg = "Page not found!";
            break;
        case 504:
            errorMsg = "Server could not be reached!";
            break;
    }
    return errorMsg;
}
var AccountReducer;
(function (AccountReducer) {
    AccountReducer.initialState = {};
    AccountReducer.stateFeatureKey = "account";
    AccountReducer.reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(AccountReducer.initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_account_actions__WEBPACK_IMPORTED_MODULE_1__["AccountActions"].authenticateSuccess, (state, { user }) => (Object.assign(Object.assign({}, state), { currentUser: user }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_account_actions__WEBPACK_IMPORTED_MODULE_1__["AccountActions"].authenticateFailure, (state, { error }) => (Object.assign(Object.assign({}, state), { lastError: spreadError(error) }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_account_actions__WEBPACK_IMPORTED_MODULE_1__["AccountActions"].createSuccess, (state, { user }) => (Object.assign(Object.assign({}, state), { currentUser: user }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_account_actions__WEBPACK_IMPORTED_MODULE_1__["AccountActions"].createFailure, (state, { error }) => (Object.assign(Object.assign({}, state), { lastError: spreadError(error) }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_account_actions__WEBPACK_IMPORTED_MODULE_1__["AccountActions"].logout, (state, _) => (Object.assign(Object.assign({}, state), { currentUser: undefined, lastError: undefined }))));
})(AccountReducer || (AccountReducer = {}));


/***/ }),

/***/ "AytR":
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

/***/ "BNhE":
/*!************************************************!*\
  !*** ./src/app/store/groups/groups.reducer.ts ***!
  \************************************************/
/*! exports provided: GroupReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupReducer", function() { return GroupReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _groups_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./groups.actions */ "kciF");


var GroupReducer;
(function (GroupReducer) {
    GroupReducer.initialState = {
        items: [],
        selectedGroups: [],
        lastSearchTerm: ""
    };
    function reducer(state = GroupReducer.initialState, action) {
        return _reducer(state, action);
    }
    GroupReducer.reducer = reducer;
    GroupReducer.stateFeatureKey = 'groups';
})(GroupReducer || (GroupReducer = {}));
const _reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(GroupReducer.initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_groups_actions__WEBPACK_IMPORTED_MODULE_1__["GroupActions"].loadAllSuccess, (state, { groups }) => (Object.assign(Object.assign({}, state), { items: groups }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_groups_actions__WEBPACK_IMPORTED_MODULE_1__["GroupActions"].addSuccess, (state, { group }) => (Object.assign(Object.assign({}, state), { items: [...state.items, group] }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_groups_actions__WEBPACK_IMPORTED_MODULE_1__["GroupActions"].removeSuccess, (state, { group }) => (Object.assign(Object.assign({}, state), { items: state.items.filter(g => g.id !== group.id) }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_groups_actions__WEBPACK_IMPORTED_MODULE_1__["GroupActions"].selectTypeahead, (state, { input }) => (Object.assign(Object.assign({}, state), { selectedGroups: state.items.filter(g => g.name.toUpperCase().includes(input.toUpperCase())), lastSearchTerm: input }))));


/***/ }),

/***/ "E9WU":
/*!*********************************************************************!*\
  !*** ./src/app/components/dialogs/new-group/new-group.component.ts ***!
  \*********************************************************************/
/*! exports provided: NewGroupDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewGroupDialog", function() { return NewGroupDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");




class NewGroupDialog {
    constructor(_dialogRef) {
        this._dialogRef = _dialogRef;
    }
    ngOnInit() {
    }
    confirm(name) {
        this._dialogRef.close(name);
    }
}
NewGroupDialog.ɵfac = function NewGroupDialog_Factory(t) { return new (t || NewGroupDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
NewGroupDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewGroupDialog, selectors: [["app-new-group"]], decls: 5, vars: 0, consts: [["appearance", "standard"], ["matInput", "", "placeholder", "group name", 3, "keydown.enter"], ["name", ""]], template: function NewGroupDialog_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function NewGroupDialog_Template_input_keydown_enter_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.confirm(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctZ3JvdXAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "FRQK":
/*!**************************************************!*\
  !*** ./src/app/store/groups/groups.selectors.ts ***!
  \**************************************************/
/*! exports provided: GroupSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupSelectors", function() { return GroupSelectors; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _groups_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./groups.reducer */ "BNhE");


var GroupSelectors;
(function (GroupSelectors) {
    GroupSelectors.getGroupState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_groups_reducer__WEBPACK_IMPORTED_MODULE_1__["GroupReducer"].stateFeatureKey);
    GroupSelectors.getAllGroups = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(GroupSelectors.getGroupState, (state) => state.items);
    GroupSelectors.getTypeaheadSelection = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(GroupSelectors.getGroupState, (state) => state.selectedGroups);
    GroupSelectors.getLastSearchTerm = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(GroupSelectors.getGroupState, (state) => state.lastSearchTerm);
})(GroupSelectors || (GroupSelectors = {}));


/***/ }),

/***/ "HEZe":
/*!********************************************************************!*\
  !*** ./src/app/components/pages/home/summary/summary.component.ts ***!
  \********************************************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_store_transactions_transactions_seletors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/transactions/transactions.seletors */ "J6Na");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var angular_plotly_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-plotly.js */ "u3+B");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






class SummaryComponent {
    constructor(_store) {
        this._store = _store;
        this.balanceGraph = {
            data$: this._store.select(src_app_store_transactions_transactions_seletors__WEBPACK_IMPORTED_MODULE_1__["TransactionsSelectors"].getBalance)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(({ plus, minus }) => ([
                {
                    x: ["income"],
                    y: [plus],
                    type: 'bar',
                    text: [`${plus.toFixed(0)} €`],
                },
                {
                    x: ["spendings"],
                    y: [minus],
                    type: 'bar',
                    text: [`${minus.toFixed(0)} €`],
                },
            ]))),
            layout: {
                width: 320,
                height: 420,
                barmode: 'group',
                showlegend: false
            }
        };
        this.pieChart = {
            data$: this._store.select(src_app_store_transactions_transactions_seletors__WEBPACK_IMPORTED_MODULE_1__["TransactionsSelectors"].getPartitioning)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((results) => ([{
                    values: results.map(({ value }) => value),
                    labels: results.map(({ group }) => { var _a; return (_a = group.group) === null || _a === void 0 ? void 0 : _a.name; }),
                    type: 'pie',
                }]))),
            layout: {
                width: 500,
                height: 400,
            }
        };
    }
    ngOnInit() {
    }
}
SummaryComponent.ɵfac = function SummaryComponent_Factory(t) { return new (t || SummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
SummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SummaryComponent, selectors: [["app-summary"]], decls: 5, vars: 8, consts: [[2, "display", "flex"], [3, "data", "layout"]], template: function SummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "plotly-plot", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "plotly-plot", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, ctx.balanceGraph.data$))("layout", ctx.balanceGraph.layout);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 6, ctx.pieChart.data$))("layout", ctx.pieChart.layout);
    } }, directives: [angular_plotly_js__WEBPACK_IMPORTED_MODULE_4__["PlotlyComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdW1tYXJ5LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "IRyT":
/*!*****************************************************!*\
  !*** ./src/app/services/account/account.service.ts ***!
  \*****************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_store_account_account_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/account/account.selectors */ "agWm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");





class AccountService {
    constructor(_http, baseUrl, _store) {
        this._http = _http;
        this._store = _store;
        this.BASE_URL = baseUrl;
    }
    getId() {
        let id;
        this._store.select(src_app_store_account_account_selectors__WEBPACK_IMPORTED_MODULE_1__["AccountSelectors"].getUserId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])()).subscribe(val => id = val);
        return id;
    }
    authenticate(name, pw) {
        let url = `${this.BASE_URL}api/user/auth/${name}/${pw}`;
        return this._http.get(url);
    }
    createAccount(name, email, pw) {
        console.log("email:'" + email + "'");
        if (email === "") {
            email = "none";
        }
        let url = `${this.BASE_URL}api/user/create/${name}/${email}/${pw}`;
        return this._http.get(url);
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"]('baseUrl'), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "J6Na":
/*!*************************************************************!*\
  !*** ./src/app/store/transactions/transactions.seletors.ts ***!
  \*************************************************************/
/*! exports provided: TransactionsSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsSelectors", function() { return TransactionsSelectors; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _transactions_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transactions.reducer */ "tDtf");


var TransactionsSelectors;
(function (TransactionsSelectors) {
    TransactionsSelectors.getTransactionsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_transactions_reducer__WEBPACK_IMPORTED_MODULE_1__["TransactionsReducer"].stateFeatureKey);
    TransactionsSelectors.getDataDate = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(TransactionsSelectors.getTransactionsState, ({ dataDate }) => dataDate);
    TransactionsSelectors.getData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(TransactionsSelectors.getTransactionsState, ({ data }) => data);
    TransactionsSelectors.getSelectedTransaction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(TransactionsSelectors.getTransactionsState, ({ selectedTransaction }) => selectedTransaction);
    TransactionsSelectors.isTransactionSelected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(TransactionsSelectors.getTransactionsState, ({ selectedTransaction }) => typeof (selectedTransaction) !== "undefined");
    TransactionsSelectors.getBalance = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(TransactionsSelectors.getTransactionsState, ({ data }) => {
        let plus = 0;
        let minus = 0;
        data.forEach(group => {
            plus += group.totalPlus;
            minus -= group.totalMinus;
        });
        return ({ plus, minus });
    });
    TransactionsSelectors.getParitioningType = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(TransactionsSelectors.getTransactionsState, ({ data, partitioning }) => ({ data, partitioning }));
    TransactionsSelectors.getPartitioning = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(TransactionsSelectors.getParitioningType, ({ data, partitioning }) => {
        if (partitioning === _transactions_reducer__WEBPACK_IMPORTED_MODULE_1__["PartitioningType"].Income) {
            return data.filter(g => g.totalPlus != 0).map(group => ({ group, value: group.totalPlus }));
        }
        else {
            return data.filter(g => g.totalMinus != 0).map(group => ({ group, value: -group.totalMinus }));
        }
    });
})(TransactionsSelectors || (TransactionsSelectors = {}));


/***/ }),

/***/ "KKA6":
/*!**********************************************!*\
  !*** ./src/app/routing/guards/loginGuard.ts ***!
  \**********************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_store_account_account_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/account/account.selectors */ "agWm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class LoginGuard {
    constructor(_store, _router) {
        this._store = _store;
        this._router = _router;
    }
    canActivate(route, state) {
        let loginDone = false;
        this._store.select(src_app_store_account_account_selectors__WEBPACK_IMPORTED_MODULE_1__["AccountSelectors"].isLoginDone)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])()).subscribe(v => loginDone = v);
        if (!loginDone) {
            console.log("redirect to login");
            const url = encodeURI(state.url);
            this._router.navigate(['/login'], { queryParams: { redirect: url } });
        }
        return true;
    }
}
LoginGuard.ɵfac = function LoginGuard_Factory(t) { return new (t || LoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoginGuard, factory: LoginGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Nk97":
/*!****************************************************************************!*\
  !*** ./src/app/components/pages/home/group-title/group-title.component.ts ***!
  \****************************************************************************/
/*! exports provided: GroupTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupTitleComponent", function() { return GroupTitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



class GroupTitleComponent {
    constructor() { }
    /*
    total(){
      return this.data?.total;
    }*/
    title() {
        var _a, _b, _c;
        if ((_a = this.data) === null || _a === void 0 ? void 0 : _a.group) {
            return (_c = (_b = this.data) === null || _b === void 0 ? void 0 : _b.group) === null || _c === void 0 ? void 0 : _c.name;
        }
        else {
            return "unassigned";
        }
    }
    ngOnInit() {
    }
}
GroupTitleComponent.ɵfac = function GroupTitleComponent_Factory(t) { return new (t || GroupTitleComponent)(); };
GroupTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GroupTitleComponent, selectors: [["app-group-title"]], inputs: { data: "data" }, decls: 11, vars: 16, consts: [[1, "title-card", 2, "background-color", "lightslategray"]], template: function GroupTitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " )\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.title(), " ( ", ctx.data == null ? null : ctx.data.transactions == null ? null : ctx.data.transactions.length, "x, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", (ctx.data == null ? null : ctx.data.totalPlus) === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" +", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 10, ctx.data == null ? null : ctx.data.totalPlus, "EUR"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", (ctx.data == null ? null : ctx.data.totalPlus) === 0 || (ctx.data == null ? null : ctx.data.totalMinus) === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", (ctx.data == null ? null : ctx.data.totalMinus) === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 13, ctx.data == null ? null : ctx.data.totalMinus, "EUR"), " ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: [".title-card[_ngcontent-%COMP%]{\r\n    width:80%\r\n}\r\n\r\n.hide[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwLXRpdGxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJncm91cC10aXRsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLWNhcmR7XHJcbiAgICB3aWR0aDo4MCVcclxufVxyXG5cclxuLmhpZGV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59Il19 */"] });


/***/ }),

/***/ "OJY5":
/*!*********************************************************************************!*\
  !*** ./src/app/components/customs/group-container/group-container.component.ts ***!
  \*********************************************************************************/
/*! exports provided: GroupContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupContainerComponent", function() { return GroupContainerComponent; });
/* harmony import */ var src_app_store_groups_groups_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/store/groups/groups.actions */ "kciF");
/* harmony import */ var src_app_store_groups_groups_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/groups/groups.selectors */ "FRQK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _group_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../group/group.component */ "+Ull");






function GroupContainerComponent_app_group_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-group", 1);
} if (rf & 2) {
    const g_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("group", g_r1);
} }
class GroupContainerComponent {
    //groups$:Observable<IGroup[]> | undefined;
    constructor(_store) {
        this._store = _store;
        this.groups$ = this._store.select(src_app_store_groups_groups_selectors__WEBPACK_IMPORTED_MODULE_1__["GroupSelectors"].getAllGroups);
    }
    ngOnInit() {
        this._store.dispatch(src_app_store_groups_groups_actions__WEBPACK_IMPORTED_MODULE_0__["GroupActions"].loadAll());
        this.reload();
    }
    reload() {
        //    this._store.dispatch(GroupActions)
        //this.groups$ = this._groupsService.getGroups();
    }
}
GroupContainerComponent.ɵfac = function GroupContainerComponent_Factory(t) { return new (t || GroupContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
GroupContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GroupContainerComponent, selectors: [["app-group-container"]], decls: 3, vars: 3, consts: [[3, "group", 4, "ngFor", "ngForOf"], [3, "group"]], template: function GroupContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, GroupContainerComponent_app_group_1_Template, 1, 1, "app-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx.groups$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _group_group_component__WEBPACK_IMPORTED_MODULE_5__["GroupComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncm91cC1jb250YWluZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "RKQe":
/*!**************************************************!*\
  !*** ./src/app/store/account/account.effects.ts ***!
  \**************************************************/
/*! exports provided: AccountEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountEffects", function() { return AccountEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _account_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.actions */ "7/Rb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_account_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/account/account.service */ "IRyT");







class AccountEffects {
    constructor(actions$, _accountService) {
        this.actions$ = actions$;
        this._accountService = _accountService;
        this.authenticate = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_account_actions__WEBPACK_IMPORTED_MODULE_3__["AccountActions"].authenticate), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(({ name, pw }) => this._accountService.authenticate(name, pw)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((user) => _account_actions__WEBPACK_IMPORTED_MODULE_3__["AccountActions"].authenticateSuccess({ user })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_account_actions__WEBPACK_IMPORTED_MODULE_3__["AccountActions"].authenticateFailure({ error })))))));
        this.create = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_account_actions__WEBPACK_IMPORTED_MODULE_3__["AccountActions"].create), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(({ name, email, pw }) => this._accountService.createAccount(name, email, pw)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(user => _account_actions__WEBPACK_IMPORTED_MODULE_3__["AccountActions"].createSuccess({ user })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_account_actions__WEBPACK_IMPORTED_MODULE_3__["AccountActions"].createFailure({ error })))))));
    }
}
AccountEffects.ɵfac = function AccountEffects_Factory(t) { return new (t || AccountEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_services_account_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"])); };
AccountEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AccountEffects, factory: AccountEffects.ɵfac });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, baseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return baseUrl; });
/* harmony import */ var _store_account_account_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/account/account.actions */ "7/Rb");
/* harmony import */ var _store_account_account_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/account/account.selectors */ "agWm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_ping_ping_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/ping/ping.service */ "wX50");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");









class AppComponent {
    constructor(_pingService, _store, _router) {
        this._pingService = _pingService;
        this._store = _store;
        this._router = _router;
        this.title = 'WebUIApp';
    }
    ngOnInit() {
        this._pingService.ping(true);
        this._store.select(_store_account_account_selectors__WEBPACK_IMPORTED_MODULE_1__["AccountSelectors"].isLoginDone).subscribe(done => {
            if (!done) {
                this._router.navigate(['\login']);
            }
        });
    }
    performLogout() {
        this._store.dispatch(_store_account_account_actions__WEBPACK_IMPORTED_MODULE_0__["AccountActions"].logout());
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_ping_ping_service__WEBPACK_IMPORTED_MODULE_3__["PingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 13, vars: 0, consts: [["color", "primary"], ["routerLink", "/user/home", "routerLinkActive", "active", "mat-button", ""], ["routerLink", "/user/transactions", "routerLinkActive", "active", "mat-button", ""], ["routerLink", "/user/groups", "routerLinkActive", "active", "mat-button", ""], ["mat-icon-button", "", 3, "click"], [2, "width", "70%", "height", "viewport", "margin-left", "auto", "margin-right", "auto"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Manage Groups");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_8_listener() { return ctx.performLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
//export const baseUrl :String = "http://localhost:5000/";
//export const baseUrl :String = "https://localhost:44394/";
//export const baseUrl :String = "https://62.75.175.66:44394/";
const baseUrl = "http://62.75.175.66:5000/";


/***/ }),

/***/ "Vd5d":
/*!*************************************************************!*\
  !*** ./src/app/components/pages/upload/upload.component.ts ***!
  \*************************************************************/
/*! exports provided: UploadPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadPageComponent", function() { return UploadPageComponent; });
/* harmony import */ var src_app_store_transactions_transactions_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/store/transactions/transactions.actions */ "kbha");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _customs_upload_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../customs/upload/upload.component */ "ipqM");




class UploadPageComponent {
    constructor(_store) {
        this._store = _store;
    }
    ngOnInit() {
    }
    uploadFile(file) {
        this._store.dispatch(src_app_store_transactions_transactions_actions__WEBPACK_IMPORTED_MODULE_0__["TransactionActions"].upload({ file }));
    }
}
UploadPageComponent.ɵfac = function UploadPageComponent_Factory(t) { return new (t || UploadPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
UploadPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UploadPageComponent, selectors: [["app-upload-page"]], decls: 1, vars: 0, consts: [[3, "fileSelected"]], template: function UploadPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-upload", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("fileSelected", function UploadPageComponent_Template_app_upload_fileSelected_0_listener($event) { return ctx.uploadFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_customs_upload_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGxvYWQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "W0X1":
/*!***********************************************!*\
  !*** ./src/app/routing/app-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_pages_upload_upload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/pages/upload/upload.component */ "Vd5d");
/* harmony import */ var _components_pages_groups_groups_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/pages/groups/groups.component */ "xo7X");
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/pages/home/home.component */ "wpF5");
/* harmony import */ var _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pages/login/login.component */ "wnWX");
/* harmony import */ var _guards_loginGuard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/loginGuard */ "KKA6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const userRoutes = [
    { path: 'home', component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'transactions', component: _components_pages_upload_upload_component__WEBPACK_IMPORTED_MODULE_1__["UploadPageComponent"] },
    { path: 'groups', component: _components_pages_groups_groups_component__WEBPACK_IMPORTED_MODULE_2__["GroupsComponent"] },
];
const routes = [
    { path: 'login', component: _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'user', canActivate: [_guards_loginGuard__WEBPACK_IMPORTED_MODULE_5__["LoginGuard"]], children: userRoutes }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "YZbJ":
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/*! exports provided: AppReducers, AppEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppReducers", function() { return AppReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEffects", function() { return AppEffects; });
/* harmony import */ var _account_account_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account/account.effects */ "RKQe");
/* harmony import */ var _account_account_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account/account.reducer */ "AEEb");
/* harmony import */ var _groups_groups_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./groups/groups.effects */ "iXVy");
/* harmony import */ var _groups_groups_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./groups/groups.reducer */ "BNhE");
/* harmony import */ var _transactions_transactions_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transactions/transactions.effects */ "zWi4");
/* harmony import */ var _transactions_transactions_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transactions/transactions.reducer */ "tDtf");






const AppReducers = {
    groups: _groups_groups_reducer__WEBPACK_IMPORTED_MODULE_3__["GroupReducer"].reducer,
    account: _account_account_reducer__WEBPACK_IMPORTED_MODULE_1__["AccountReducer"].reducer,
    transactions: _transactions_transactions_reducer__WEBPACK_IMPORTED_MODULE_5__["TransactionsReducer"].reducer
};
const AppEffects = [_groups_groups_effects__WEBPACK_IMPORTED_MODULE_2__["GroupEffects"], _account_account_effects__WEBPACK_IMPORTED_MODULE_0__["AccountEffects"], _transactions_transactions_effects__WEBPACK_IMPORTED_MODULE_4__["TransactionsEffects"]];


/***/ }),

/***/ "Yq5Y":
/*!**********************************************************************************!*\
  !*** ./src/app/components/pages/home/group-selector/group-selector.component.ts ***!
  \**********************************************************************************/
/*! exports provided: GroupSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupSelectorComponent", function() { return GroupSelectorComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_components_dialogs_new_group_new_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/dialogs/new-group/new-group.component */ "E9WU");
/* harmony import */ var src_app_store_groups_groups_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/groups/groups.actions */ "kciF");
/* harmony import */ var src_app_store_groups_groups_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/groups/groups.selectors */ "FRQK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _small_group_small_group_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../small-group/small-group.component */ "kvba");














function GroupSelectorComponent_app_small_group_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-small-group", 7, 8);
} if (rf & 2) {
    const g_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("group", g_r2);
} }
class GroupSelectorComponent {
    constructor(_store, _dialog) {
        this._store = _store;
        this._dialog = _dialog;
        this.searchTerm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
        this.groups$ = this._store.select(src_app_store_groups_groups_selectors__WEBPACK_IMPORTED_MODULE_3__["GroupSelectors"].getTypeaheadSelection);
    }
    ngOnInit() {
        this._store.dispatch(src_app_store_groups_groups_actions__WEBPACK_IMPORTED_MODULE_2__["GroupActions"].loadAll());
        this.searchTerm.valueChanges.subscribe(value => {
            this._store.dispatch(src_app_store_groups_groups_actions__WEBPACK_IMPORTED_MODULE_2__["GroupActions"].selectTypeahead({ input: value }));
        });
    }
    onClickAddGroup(name) {
        if (name.length > 2) {
            this._store.dispatch(src_app_store_groups_groups_actions__WEBPACK_IMPORTED_MODULE_2__["GroupActions"].add({ group: { name } }));
        }
        else {
            let dialogRef = this._dialog.open(src_app_components_dialogs_new_group_new_group_component__WEBPACK_IMPORTED_MODULE_1__["NewGroupDialog"]);
            dialogRef.afterClosed().subscribe(name => {
                if (name) {
                    this._store.dispatch(src_app_store_groups_groups_actions__WEBPACK_IMPORTED_MODULE_2__["GroupActions"].add({ group: { name } }));
                }
            });
        }
    }
}
GroupSelectorComponent.ɵfac = function GroupSelectorComponent_Factory(t) { return new (t || GroupSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
GroupSelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: GroupSelectorComponent, selectors: [["app-group-selector"]], decls: 10, vars: 4, consts: [[1, "group-selector"], [2, "display", "flex", "align-items", "center"], ["appearance", "standard"], ["matInput", "", "placeholder", "search group", 3, "formControl", "keydown.enter"], ["name", ""], ["mat-mini-fab", "", "color", "primary", 2, "margin-left", "5pt", 3, "click"], ["style", "margin-bottom: 4pt;", "class", "assignment-group", 3, "group", 4, "ngFor", "ngForOf"], [1, "assignment-group", 2, "margin-bottom", "4pt", 3, "group"], ["group", ""]], template: function GroupSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown.enter", function GroupSelectorComponent_Template_input_keydown_enter_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4); return ctx.onClickAddGroup(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupSelectorComponent_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4); return ctx.onClickAddGroup(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, GroupSelectorComponent_app_small_group_8_Template, 2, 1, "app-small-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 2, ctx.groups$));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _small_group_small_group_component__WEBPACK_IMPORTED_MODULE_12__["SmallGroupComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: [".group-selector[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding-left: 10pt;\r\n}\r\n\r\n.assignment-group[_ngcontent-%COMP%]{\r\n    width:100%\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwLXNlbGVjdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtBQUNKIiwiZmlsZSI6Imdyb3VwLXNlbGVjdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JvdXAtc2VsZWN0b3J7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHQ7XHJcbn1cclxuXHJcbi5hc3NpZ25tZW50LWdyb3Vwe1xyXG4gICAgd2lkdGg6MTAwJVxyXG59Il19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routing/app-routing.module */ "W0X1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/login/login.component */ "wnWX");
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/home/home.component */ "wpF5");
/* harmony import */ var _components_pages_upload_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/upload/upload.component */ "Vd5d");
/* harmony import */ var _components_pages_groups_groups_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/groups/groups.component */ "xo7X");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/text-field */ "ihCf");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _components_customs_upload_upload_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/customs/upload/upload.component */ "ipqM");
/* harmony import */ var _components_customs_transaction_transaction_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/customs/transaction/transaction.component */ "mhOi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/locales/de */ "VLs4");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _components_customs_group_group_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/customs/group/group.component */ "+Ull");
/* harmony import */ var _components_customs_group_container_group_container_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/customs/group-container/group-container.component */ "OJY5");
/* harmony import */ var _components_dialogs_new_group_new_group_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/dialogs/new-group/new-group.component */ "E9WU");
/* harmony import */ var _iplab_ngx_color_picker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @iplab/ngx-color-picker */ "EHWK");
/* harmony import */ var _components_dialogs_color_dialog_color_dialog_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/dialogs/color-dialog/color-dialog.component */ "vxP4");
/* harmony import */ var _components_pages_home_small_group_small_group_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/pages/home/small-group/small-group.component */ "kvba");
/* harmony import */ var _components_pages_home_group_title_group_title_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/pages/home/group-title/group-title.component */ "Nk97");
/* harmony import */ var _components_pages_home_group_selector_group_selector_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/pages/home/group-selector/group-selector.component */ "Yq5Y");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./store */ "YZbJ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pipes_string_replacement_pipe__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pipes/string-replacement.pipe */ "wHDL");
/* harmony import */ var plotly_js_dist_min__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! plotly.js-dist-min */ "RGiy");
/* harmony import */ var plotly_js_dist_min__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(plotly_js_dist_min__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var angular_plotly_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! angular-plotly.js */ "u3+B");
/* harmony import */ var _components_pages_home_summary_summary_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/pages/home/summary/summary.component */ "HEZe");














































Object(_angular_common__WEBPACK_IMPORTED_MODULE_22__["registerLocaleData"])(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_23___default.a, 'de-DE', localeDeExtra);
angular_plotly_js__WEBPACK_IMPORTED_MODULE_40__["PlotlyModule"].plotlyjs = plotly_js_dist_min__WEBPACK_IMPORTED_MODULE_39__;
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [{ provide: 'baseUrl', useValue: _app_component__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] },
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], useValue: 'de-DE' },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
            _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_15__["TextFieldModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            _iplab_ngx_color_picker__WEBPACK_IMPORTED_MODULE_27__["ColorPickerModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_18__["DragDropModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_19__["MatTreeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_37__["ReactiveFormsModule"],
            angular_plotly_js__WEBPACK_IMPORTED_MODULE_40__["PlotlyModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_32__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_36__["AppReducers"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_33__["EffectsModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_36__["AppEffects"]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_34__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_35__["environment"].production }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _components_customs_upload_upload_component__WEBPACK_IMPORTED_MODULE_20__["UploadComponent"],
        _components_pages_groups_groups_component__WEBPACK_IMPORTED_MODULE_8__["GroupsComponent"],
        _components_pages_upload_upload_component__WEBPACK_IMPORTED_MODULE_7__["UploadPageComponent"],
        _components_customs_transaction_transaction_component__WEBPACK_IMPORTED_MODULE_21__["TransactionComponent"],
        _components_customs_group_group_component__WEBPACK_IMPORTED_MODULE_24__["GroupComponent"],
        _components_customs_group_container_group_container_component__WEBPACK_IMPORTED_MODULE_25__["GroupContainerComponent"],
        _components_dialogs_new_group_new_group_component__WEBPACK_IMPORTED_MODULE_26__["NewGroupDialog"],
        _components_dialogs_color_dialog_color_dialog_component__WEBPACK_IMPORTED_MODULE_28__["ColorDialogComponent"],
        _components_pages_home_small_group_small_group_component__WEBPACK_IMPORTED_MODULE_29__["SmallGroupComponent"],
        _components_pages_home_group_title_group_title_component__WEBPACK_IMPORTED_MODULE_30__["GroupTitleComponent"],
        _components_pages_home_group_selector_group_selector_component__WEBPACK_IMPORTED_MODULE_31__["GroupSelectorComponent"],
        _pipes_string_replacement_pipe__WEBPACK_IMPORTED_MODULE_38__["StringReplacementPipe"],
        _components_pages_home_summary_summary_component__WEBPACK_IMPORTED_MODULE_41__["SummaryComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
        _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_15__["TextFieldModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
        _iplab_ngx_color_picker__WEBPACK_IMPORTED_MODULE_27__["ColorPickerModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_18__["DragDropModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_19__["MatTreeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_37__["ReactiveFormsModule"],
        angular_plotly_js__WEBPACK_IMPORTED_MODULE_40__["PlotlyModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_32__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_33__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_34__["StoreDevtoolsModule"]] }); })();
function localeDeExtra(localeDe, arg1, localeDeExtra) {
    throw new Error('Function not implemented.');
}


/***/ }),

/***/ "agWm":
/*!****************************************************!*\
  !*** ./src/app/store/account/account.selectors.ts ***!
  \****************************************************/
/*! exports provided: AccountSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSelectors", function() { return AccountSelectors; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _account_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.reducer */ "AEEb");


var AccountSelectors;
(function (AccountSelectors) {
    AccountSelectors.getAccountState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_account_reducer__WEBPACK_IMPORTED_MODULE_1__["AccountReducer"].stateFeatureKey);
    AccountSelectors.isLoginDone = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(AccountSelectors.getAccountState, state => typeof (state.currentUser) != "undefined");
    AccountSelectors.getUserData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(AccountSelectors.getAccountState, ({ currentUser }) => currentUser);
    AccountSelectors.getUserId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(AccountSelectors.getAccountState, ({ currentUser }) => currentUser === null || currentUser === void 0 ? void 0 : currentUser.id);
    AccountSelectors.getLastError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(AccountSelectors.getAccountState, ({ lastError }) => lastError);
    AccountSelectors.hasError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(AccountSelectors.getAccountState, ({ lastError }) => typeof (lastError) === "undefined");
})(AccountSelectors || (AccountSelectors = {}));


/***/ }),

/***/ "iXVy":
/*!************************************************!*\
  !*** ./src/app/store/groups/groups.effects.ts ***!
  \************************************************/
/*! exports provided: GroupEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupEffects", function() { return GroupEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _groups_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./groups.actions */ "kciF");
/* harmony import */ var _groups_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./groups.selectors */ "FRQK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/groups/groups.service */ "xC8e");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");









class GroupEffects {
    constructor(actions$, groupService, _store) {
        this.actions$ = actions$;
        this.groupService = groupService;
        this._store = _store;
        this.loadGroups = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_groups_actions__WEBPACK_IMPORTED_MODULE_3__["GroupActions"].loadAll), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(_ => this.groupService.getGroups()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((groups) => _groups_actions__WEBPACK_IMPORTED_MODULE_3__["GroupActions"].loadAllSuccess({ groups })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_groups_actions__WEBPACK_IMPORTED_MODULE_3__["GroupActions"].loadAllFailure({ error })))))));
        this.loadGroupsSuccess = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_groups_actions__WEBPACK_IMPORTED_MODULE_3__["GroupActions"].loadAllSuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(_ => _groups_actions__WEBPACK_IMPORTED_MODULE_3__["GroupActions"].selectTypeahead({ input: "" }))));
        this.addGroup = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_groups_actions__WEBPACK_IMPORTED_MODULE_3__["GroupActions"].add), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(action => this.groupService.addGroup(action.group)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(group => _groups_actions__WEBPACK_IMPORTED_MODULE_3__["GroupActions"].addSuccess({ group })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_groups_actions__WEBPACK_IMPORTED_MODULE_3__["GroupActions"].loadAllFailure({ error })))))));
        this.addGroupSuccess = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_groups_actions__WEBPACK_IMPORTED_MODULE_3__["GroupActions"].addSuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(this._store.select(_groups_selectors__WEBPACK_IMPORTED_MODULE_4__["GroupSelectors"].getLastSearchTerm)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(([_, searchTerm]) => _groups_actions__WEBPACK_IMPORTED_MODULE_3__["GroupActions"].selectTypeahead({ input: searchTerm }))));
        this.removeGroup = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_groups_actions__WEBPACK_IMPORTED_MODULE_3__["GroupActions"].remove), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(action => this.groupService.removeGroup(action.group)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(_ => _groups_actions__WEBPACK_IMPORTED_MODULE_3__["GroupActions"].removeSuccess({ group: action.group })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_groups_actions__WEBPACK_IMPORTED_MODULE_3__["GroupActions"].removeFailure({ error })))))));
    }
}
GroupEffects.ɵfac = function GroupEffects_Factory(t) { return new (t || GroupEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_6__["GroupsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"])); };
GroupEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: GroupEffects, factory: GroupEffects.ɵfac });


/***/ }),

/***/ "ipqM":
/*!***************************************************************!*\
  !*** ./src/app/components/customs/upload/upload.component.ts ***!
  \***************************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");




class UploadComponent {
    constructor() {
        this.fileName = "";
        this.selectionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onFileSelected(event) {
        var _a;
        const input = event.target;
        if (!((_a = input.files) === null || _a === void 0 ? void 0 : _a.length)) {
            return;
        }
        const file = input.files[0];
        this.fileName = file.name;
        this.selectionEvent.emit(file);
    }
}
UploadComponent.ɵfac = function UploadComponent_Factory(t) { return new (t || UploadComponent)(); };
UploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploadComponent, selectors: [["app-upload"]], outputs: { selectionEvent: "fileSelected" }, decls: 7, vars: 1, consts: [["type", "file", 1, "file-input", 3, "change"], ["fileUpload", ""], [1, "file-upload"], ["mat-mini-fab", "", "color", "primary", 1, "upload-btn", 3, "click"]], template: function UploadComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadComponent_Template_input_change_0_listener($event) { return ctx.onFileSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadComponent_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.fileName || "Select File", " ");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], styles: [".file-input[_ngcontent-%COMP%]{\r\n    display:none\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSiIsImZpbGUiOiJ1cGxvYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlLWlucHV0e1xyXG4gICAgZGlzcGxheTpub25lXHJcbn0iXX0= */"] });


/***/ }),

/***/ "kbha":
/*!************************************************************!*\
  !*** ./src/app/store/transactions/transactions.actions.ts ***!
  \************************************************************/
/*! exports provided: TransactionActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionActions", function() { return TransactionActions; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

var TransactionActions;
(function (TransactionActions) {
    TransactionActions.loadMonth = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Transaction] loadMonth", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    TransactionActions.loadMonthSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Transaction] loadMonth success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    TransactionActions.loadMonthFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Transaction] loadMonth failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    TransactionActions.assignGroup = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Transaction] assignGroup", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    TransactionActions.assignGroupSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Transaction] assignGroup success");
    TransactionActions.assignGroupFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Transaction] assignGroup failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    TransactionActions.upload = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Transaction] upload", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    TransactionActions.uploadSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Transaction] upload sucess");
    TransactionActions.uploadFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Transaction] upload failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    TransactionActions.selectTransaction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Transaction] selectTransaction", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    TransactionActions.deselectTransaction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Transaction] deselectTransaction");
    TransactionActions.setPartitioningType = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Transaction] setPartitioningType", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
})(TransactionActions || (TransactionActions = {}));


/***/ }),

/***/ "kciF":
/*!************************************************!*\
  !*** ./src/app/store/groups/groups.actions.ts ***!
  \************************************************/
/*! exports provided: GroupActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupActions", function() { return GroupActions; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

var GroupActions;
(function (GroupActions) {
    GroupActions.loadAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Group] Load all');
    GroupActions.loadAllSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Group] Load all success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    GroupActions.loadAllFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Group] Load all failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    GroupActions.add = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Group] add', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    GroupActions.addSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Group] add success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    GroupActions.addFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Group] add failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    GroupActions.remove = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Group] remove', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    GroupActions.removeSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Group] remove success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    GroupActions.removeFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Group] remove failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    GroupActions.selectTypeahead = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Group] select typeahead', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
})(GroupActions || (GroupActions = {}));


/***/ }),

/***/ "kvba":
/*!****************************************************************************!*\
  !*** ./src/app/components/pages/home/small-group/small-group.component.ts ***!
  \****************************************************************************/
/*! exports provided: SmallGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmallGroupComponent", function() { return SmallGroupComponent; });
/* harmony import */ var src_app_store_transactions_transactions_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/store/transactions/transactions.actions */ "kbha");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");




class SmallGroupComponent {
    constructor(_store) {
        this._store = _store;
    }
    getId() {
        if (this.group)
            return this.group.id;
        else
            return 0;
    }
    onClick() {
        this._store.dispatch(src_app_store_transactions_transactions_actions__WEBPACK_IMPORTED_MODULE_0__["TransactionActions"].assignGroup({ group: this.group }));
    }
    ngOnInit() {
    }
}
SmallGroupComponent.ɵfac = function SmallGroupComponent_Factory(t) { return new (t || SmallGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
SmallGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SmallGroupComponent, selectors: [["app-small-group"]], inputs: { group: "group" }, decls: 3, vars: 1, consts: [[3, "click"]], template: function SmallGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SmallGroupComponent_Template_mat_card_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.group == null ? null : ctx.group.name, " ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbWFsbC1ncm91cC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "mhOi":
/*!*************************************************************************!*\
  !*** ./src/app/components/customs/transaction/transaction.component.ts ***!
  \*************************************************************************/
/*! exports provided: TransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionComponent", function() { return TransactionComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_store_transactions_transactions_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/transactions/transactions.actions */ "kbha");
/* harmony import */ var src_app_store_transactions_transactions_seletors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/transactions/transactions.seletors */ "J6Na");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_string_replacement_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/string-replacement.pipe */ "wHDL");








class TransactionComponent {
    constructor(_store) {
        this._store = _store;
        this.selectedTransaction$ = this._store.select(src_app_store_transactions_transactions_seletors__WEBPACK_IMPORTED_MODULE_2__["TransactionsSelectors"].getSelectedTransaction);
        this.transaction = { target: "", purpose: "", date: new Date(), amount: 0 };
    }
    ngOnInit() {
    }
    onDoubleClick() {
        let selection;
        this.selectedTransaction$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])()).subscribe(val => selection = val);
        if (selection && selection.id == this.transaction.id) {
            this._store.dispatch(src_app_store_transactions_transactions_actions__WEBPACK_IMPORTED_MODULE_1__["TransactionActions"].deselectTransaction());
        }
        else {
            this._store.dispatch(src_app_store_transactions_transactions_actions__WEBPACK_IMPORTED_MODULE_1__["TransactionActions"].selectTransaction({ transaction: this.transaction }));
        }
    }
}
TransactionComponent.ɵfac = function TransactionComponent_Factory(t) { return new (t || TransactionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
TransactionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TransactionComponent, selectors: [["app-transaction"]], inputs: { transaction: "transaction" }, decls: 10, vars: 16, consts: [[1, "transaction", 3, "dblclick"]], template: function TransactionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dblclick", function TransactionComponent_Template_mat_card_dblclick_0_listener() { return ctx.onDoubleClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "stringReplacement");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_0_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("selected", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 6, ctx.selectedTransaction$)) == null ? null : tmp_0_0.id) === ctx.transaction.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx.transaction.target, " (", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 8, ctx.transaction.amount, "EUR"), ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](8, 11, ctx.transaction.date, "dd-MM-YYYY"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 14, ctx.transaction.purpose), "");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _pipes_string_replacement_pipe__WEBPACK_IMPORTED_MODULE_7__["StringReplacementPipe"]], styles: [".transaction[_ngcontent-%COMP%]{\r\n    margin-top: 5pt;\r\n    margin-left:5pt;\r\n    margin-right:5pt;\r\n}\r\n\r\n.selected[_ngcontent-%COMP%]{\r\n    background-color: lightblue;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zYWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJ0cmFuc2FjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyYW5zYWN0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogNXB0O1xyXG4gICAgbWFyZ2luLWxlZnQ6NXB0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjVwdDtcclxufVxyXG5cclxuLnNlbGVjdGVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG59Il19 */"] });


/***/ }),

/***/ "tDtf":
/*!************************************************************!*\
  !*** ./src/app/store/transactions/transactions.reducer.ts ***!
  \************************************************************/
/*! exports provided: PartitioningType, TransactionsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartitioningType", function() { return PartitioningType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsReducer", function() { return TransactionsReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _transactions_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transactions.actions */ "kbha");


var PartitioningType;
(function (PartitioningType) {
    PartitioningType[PartitioningType["Income"] = 0] = "Income";
    PartitioningType[PartitioningType["Spendings"] = 1] = "Spendings";
})(PartitioningType || (PartitioningType = {}));
var TransactionsReducer;
(function (TransactionsReducer) {
    TransactionsReducer.initialState = {
        dataDate: new Date(),
        data: [],
        selectedTransaction: undefined,
        partitioning: PartitioningType.Spendings
    };
    TransactionsReducer.stateFeatureKey = "transactions";
    TransactionsReducer.reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(TransactionsReducer.initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_transactions_actions__WEBPACK_IMPORTED_MODULE_1__["TransactionActions"].setPartitioningType, (state, { paritioningType }) => (Object.assign(Object.assign({}, state), { partitioning: paritioningType }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_transactions_actions__WEBPACK_IMPORTED_MODULE_1__["TransactionActions"].selectTransaction, (state, { transaction }) => (Object.assign(Object.assign({}, state), { selectedTransaction: transaction }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_transactions_actions__WEBPACK_IMPORTED_MODULE_1__["TransactionActions"].deselectTransaction, (state, _) => (Object.assign(Object.assign({}, state), { selectedTransaction: undefined, lastSearchTerm: "" }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_transactions_actions__WEBPACK_IMPORTED_MODULE_1__["TransactionActions"].assignGroupSuccess, (state, _) => (Object.assign(Object.assign({}, state), { selectedTransaction: undefined, lastSearchTerm: "" }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_transactions_actions__WEBPACK_IMPORTED_MODULE_1__["TransactionActions"].loadMonth, (state, { year, month }) => (Object.assign(Object.assign({}, state), { dataDate: new Date(year, month) }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_transactions_actions__WEBPACK_IMPORTED_MODULE_1__["TransactionActions"].loadMonthSuccess, (state, { transactions }) => (Object.assign(Object.assign({}, state), { data: [...transactions] }))));
})(TransactionsReducer || (TransactionsReducer = {}));


/***/ }),

/***/ "vxP4":
/*!***************************************************************************!*\
  !*** ./src/app/components/dialogs/color-dialog/color-dialog.component.ts ***!
  \***************************************************************************/
/*! exports provided: ColorDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorDialogComponent", function() { return ColorDialogComponent; });
/* harmony import */ var _iplab_ngx_color_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iplab/ngx-color-picker */ "EHWK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





class ColorDialogComponent {
    constructor(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.pickerControl = new _iplab_ngx_color_picker__WEBPACK_IMPORTED_MODULE_0__["ColorPickerControl"]();
    }
    ngOnInit() {
    }
    confirm() {
        this._dialogRef.close();
    }
    abort() {
        this._dialogRef.close();
    }
}
ColorDialogComponent.ɵfac = function ColorDialogComponent_Factory(t) { return new (t || ColorDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"])); };
ColorDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ColorDialogComponent, selectors: [["app-color-dialog"]], decls: 6, vars: 1, consts: [[3, "control"], ["align", "center", 1, "buttons"], ["mat-button", "", 3, "click"]], template: function ColorDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "chrome-picker", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ColorDialogComponent_Template_button_click_2_listener() { return ctx.confirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ColorDialogComponent_Template_button_click_4_listener() { return ctx.abort(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Abort");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx.pickerControl);
    } }, directives: [_iplab_ngx_color_picker__WEBPACK_IMPORTED_MODULE_0__["ChromePickerComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: [".buttons[_ngcontent-%COMP%]{\r\n    margin-top: 15pt\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbG9yLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSiIsImZpbGUiOiJjb2xvci1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b25ze1xyXG4gICAgbWFyZ2luLXRvcDogMTVwdFxyXG59Il19 */"] });


/***/ }),

/***/ "wHDL":
/*!**************************************************!*\
  !*** ./src/app/pipes/string-replacement.pipe.ts ***!
  \**************************************************/
/*! exports provided: StringReplacementPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringReplacementPipe", function() { return StringReplacementPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class StringReplacementPipe {
    transform(value) {
        let re = /\+/gi;
        return value.replace(re, " ");
    }
}
StringReplacementPipe.ɵfac = function StringReplacementPipe_Factory(t) { return new (t || StringReplacementPipe)(); };
StringReplacementPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "stringReplacement", type: StringReplacementPipe, pure: true });


/***/ }),

/***/ "wX50":
/*!***********************************************!*\
  !*** ./src/app/services/ping/ping.service.ts ***!
  \***********************************************/
/*! exports provided: PingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PingService", function() { return PingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




const TIMEOUT = 2000;
class PingService {
    constructor(_http, baseUrl) {
        this._http = _http;
        this.pingTimeMs$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](-1);
        this.BASE_URL = "";
        this.finished = false;
        this.BASE_URL = baseUrl;
    }
    reping() {
    }
    ping(once) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.finished = false;
            let stamp = performance.now();
            let sub = this._http.get(`${this.BASE_URL}api/ping`)
                .subscribe(v => {
                let t = performance.now() - stamp;
                if (t < TIMEOUT) {
                    this.finished = true;
                    console.log("ping: " + t + " ms");
                }
            }, e => {
                this.finished = true;
                console.log("Ping failed!", e);
            });
            setTimeout(() => {
                if (!this.finished) {
                    console.log("Ping failed! (timeout)");
                    sub.unsubscribe();
                }
                if (!once) {
                    this.ping(false);
                }
            }, TIMEOUT);
            return 0;
        });
    }
}
PingService.ɵfac = function PingService_Factory(t) { return new (t || PingService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"]('baseUrl')); };
PingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PingService, factory: PingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "wnWX":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var src_app_store_account_account_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/store/account/account.actions */ "7/Rb");
/* harmony import */ var src_app_store_account_account_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/account/account.selectors */ "agWm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









class LoginComponent {
    constructor(_store, _router) {
        this._store = _store;
        this._router = _router;
        this.error$ = this._store.select(src_app_store_account_account_selectors__WEBPACK_IMPORTED_MODULE_1__["AccountSelectors"].getLastError);
        this.hasError$ = this._store.select(src_app_store_account_account_selectors__WEBPACK_IMPORTED_MODULE_1__["AccountSelectors"].hasError);
        this.loginDone$ = this._store.select(src_app_store_account_account_selectors__WEBPACK_IMPORTED_MODULE_1__["AccountSelectors"].isLoginDone);
    }
    ngOnInit() {
        this.loginDone$.subscribe(done => {
            if (done) {
                this._router.navigate(['/user/home']);
            }
        });
    }
    performLogin(name, pw) {
        this._store.dispatch(src_app_store_account_account_actions__WEBPACK_IMPORTED_MODULE_0__["AccountActions"].authenticate({ name, pw }));
    }
    registerUser(name, email, pw) {
        this._store.dispatch(src_app_store_account_account_actions__WEBPACK_IMPORTED_MODULE_0__["AccountActions"].create({ name, email, pw }));
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 26, vars: 7, consts: [[1, "form"], ["matInput", ""], ["name", ""], ["pw", ""], [1, "par"], [1, "error"], ["email", ""], ["mat-raised-button", "", "color", "primary", 1, "buttons", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "button-reg", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 1, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "E-Mail:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 1, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10); return ctx.performLogin(_r0.value, _r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10); return ctx.registerUser(_r0.value, _r2.value, _r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "register");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("hide", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 3, ctx.hasError$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 5, ctx.error$));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".form[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 20%;\r\n    min-width: 120pt;\r\n    margin:auto\r\n}\r\n\r\n.buttons[_ngcontent-%COMP%]{\r\n    margin-top: 25pt;\r\n}\r\n\r\n.button-reg[_ngcontent-%COMP%]{\r\n    margin-top: 5pt;\r\n}\r\n\r\n.error[_ngcontent-%COMP%]{\r\n    color:red\r\n}\r\n\r\n.hide[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n\r\n.par[_ngcontent-%COMP%]{\r\n    height: 35pt\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtBQUNKOztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFHQTtJQUNJO0FBQ0oiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgbWluLXdpZHRoOiAxMjBwdDtcclxuICAgIG1hcmdpbjphdXRvXHJcbn1cclxuXHJcbi5idXR0b25ze1xyXG4gICAgbWFyZ2luLXRvcDogMjVwdDtcclxufVxyXG4uYnV0dG9uLXJlZ3tcclxuICAgIG1hcmdpbi10b3A6IDVwdDtcclxufVxyXG5cclxuLmVycm9ye1xyXG4gICAgY29sb3I6cmVkXHJcbn1cclxuLmhpZGV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuLnBhcntcclxuICAgIGhlaWdodDogMzVwdFxyXG59Il19 */"] });


/***/ }),

/***/ "wpF5":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var src_app_store_transactions_transactions_seletors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/store/transactions/transactions.seletors */ "J6Na");
/* harmony import */ var src_app_store_transactions_transactions_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/transactions/transactions.actions */ "kbha");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./summary/summary.component */ "HEZe");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _group_selector_group_selector_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./group-selector/group-selector.component */ "Yq5Y");
/* harmony import */ var _group_title_group_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./group-title/group-title.component */ "Nk97");
/* harmony import */ var _customs_transaction_transaction_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../customs/transaction/transaction.component */ "mhOi");











function HomeComponent_div_10_app_transaction_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-transaction", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDragEnded", function HomeComponent_div_10_app_transaction_2_Template_app_transaction_cdkDragEnded_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r5.drop(_r4.transaction, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transaction_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("transaction", transaction_r3);
} }
function HomeComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-group-title", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HomeComponent_div_10_app_transaction_2_Template, 2, 1, "app-transaction", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", group_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", group_r1.transactions);
} }
class HomeComponent {
    constructor(_store) {
        this._store = _store;
        this.year = new Date().getFullYear();
        this.month = new Date().getMonth();
        this.transactionGroups$ = this._store.select(src_app_store_transactions_transactions_seletors__WEBPACK_IMPORTED_MODULE_0__["TransactionsSelectors"].getData);
        this.isTransactionSelected$ = this._store.select(src_app_store_transactions_transactions_seletors__WEBPACK_IMPORTED_MODULE_0__["TransactionsSelectors"].isTransactionSelected);
    }
    isSelectedGroup(group) {
        if (!this.currentGroup) {
            return false;
        }
        return this.currentGroup.id === group.id;
    }
    update() {
        this.date = new Date(this.year, this.month);
        this.reload();
    }
    previousMonth() {
        this.month -= 1;
        if (this.month < 0) {
            this.month = 11;
            this.year -= 1;
        }
        this.update();
    }
    nextMonth() {
        this.month += 1;
        if (this.month > 11) {
            this.month = 0;
            this.year += 1;
        }
        this.update();
    }
    drop(transaction, event) {
        //    document.elementFromPoint()
        if (!this.currentGroup) {
            return;
        }
        /*
        this._transactionsService.assign(transaction, this.currentGroup).subscribe(res=>{
          this.reload();
        })*/
    }
    enterGroup(groupComponent) {
        this.currentGroup = groupComponent.group;
    }
    leaveGroup() {
        this.currentGroup = undefined;
    }
    sort(input) {
        let groups = input;
        groups = [...groups].sort((a, b) => {
            if (a.group === null) {
                return -1;
            }
            if (b.group === null) {
                return 1;
            }
            return a.totalMinus - b.totalMinus;
        });
        return groups;
    }
    ngOnInit() {
        // this.groups$ = this._groupService.getGroups()
        //  this.transactionGroups$ = this._transactionsService.groups$;
        this.update();
    }
    reload() {
        this._store.dispatch(src_app_store_transactions_transactions_actions__WEBPACK_IMPORTED_MODULE_1__["TransactionActions"].loadMonth({ year: this.year, month: this.month }));
        //this._transactionsService.loadMonth(this.date).subscribe();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 15, vars: 11, consts: [["align", "center"], ["mat-button", "", 3, "click"], [1, "main-container"], ["cdkDropList", "", 1, "transactions-container"], [4, "ngFor", "ngForOf"], [1, "groups-container"], [3, "data"], ["class", "transaction", "cdkDrag", "", 3, "transaction", "cdkDragEnded", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "transaction", 3, "transaction", "cdkDragEnded"], ["transactionComponent", ""]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_1_listener() { return ctx.previousMonth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_5_listener() { return ctx.nextMonth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, HomeComponent_div_10_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "app-group-selector");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](4, 4, ctx.date, "MMMM yyyy"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.sort(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 7, ctx.transactionGroups$)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("hide", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 9, ctx.isTransactionSelected$));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _summary_summary_component__WEBPACK_IMPORTED_MODULE_5__["SummaryComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _group_selector_group_selector_component__WEBPACK_IMPORTED_MODULE_8__["GroupSelectorComponent"], _group_title_group_title_component__WEBPACK_IMPORTED_MODULE_9__["GroupTitleComponent"], _customs_transaction_transaction_component__WEBPACK_IMPORTED_MODULE_10__["TransactionComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDrag"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".main-container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    width: 100%;\r\n    max-height: 100%;\r\n    margin:auto\r\n}\r\n\r\n.transactions-container[_ngcontent-%COMP%]{\r\n    overflow-y: auto;\r\n    max-height: 450pt;\r\n}\r\n\r\n.groups-container[_ngcontent-%COMP%]{\r\n    min-width: 200pt;\r\n    max-height: 450pt;\r\n    overflow-y: auto;\r\n}\r\n\r\n.groups-container.hide[_ngcontent-%COMP%]{\r\n    min-width: 0pt;\r\n    display: none;\r\n}\r\n\r\n \r\n.highlight .mat-card{\r\n    background-color: limegreen\r\n}\r\n\r\n  \r\n.transaction .mat-card-subtitle{\r\n    margin-bottom: 0pt;\r\n}\r\n\r\n  \r\n.main-container .mat-card-subtitle{\r\n    font-size: x-small\r\n}\r\n\r\n  \r\n.main-container .mat-card-title{\r\n    font-size: medium\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUdBO0lBQ0ksY0FBYztJQUNkLGFBQWE7QUFDakI7O0FBR0E7O0lBRUk7QUFDSjs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUk7QUFDSjs7QUFDQTs7SUFFSTtBQUNKIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubWFpbi1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOmF1dG9cclxufVxyXG5cclxuLnRyYW5zYWN0aW9ucy1jb250YWluZXJ7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogNDUwcHQ7XHJcbn1cclxuXHJcbi5ncm91cHMtY29udGFpbmVye1xyXG4gICAgbWluLXdpZHRoOiAyMDBwdDtcclxuICAgIG1heC1oZWlnaHQ6IDQ1MHB0O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuXHJcbi5ncm91cHMtY29udGFpbmVyLmhpZGV7XHJcbiAgICBtaW4td2lkdGg6IDBwdDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXBcclxuLmhpZ2hsaWdodCAubWF0LWNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lZ3JlZW5cclxufVxyXG5cclxuOjpuZy1kZWVwIFxyXG4udHJhbnNhY3Rpb24gLm1hdC1jYXJkLXN1YnRpdGxle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB0O1xyXG59XHJcblxyXG46Om5nLWRlZXAgXHJcbi5tYWluLWNvbnRhaW5lciAubWF0LWNhcmQtc3VidGl0bGV7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGxcclxufVxyXG46Om5nLWRlZXAgXHJcbi5tYWluLWNvbnRhaW5lciAubWF0LWNhcmQtdGl0bGV7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bVxyXG59Il19 */"] });


/***/ }),

/***/ "xC8e":
/*!***************************************************!*\
  !*** ./src/app/services/groups/groups.service.ts ***!
  \***************************************************/
/*! exports provided: GroupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsService", function() { return GroupsService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _account_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../account/account.service */ "IRyT");





class GroupsService {
    constructor(_http, _accountService, baseUrl) {
        this._http = _http;
        this._accountService = _accountService;
        this.BASE_URL = "";
        this.groupsChanged$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.BASE_URL = baseUrl;
    }
    getGroups() {
        let url = `${this.BASE_URL}api/groups/${this._accountService.getId()}`;
        return this._http.get(url);
    }
    saveGroup(group) {
        const url = `${this.BASE_URL}api/groups/${this._accountService.getId()}/`;
        const method = group.id ? 'PUT' : 'POST';
        return this._http.request(method, url + (group.id || ''), {
            body: group
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(_ => this.groupsChanged$.next(group)));
    }
    removeGroup(group) {
        let url = `${this.BASE_URL}api/groups/${this._accountService.getId()}/${group.id}`;
        return this._http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(_ => this.groupsChanged$.next(group)));
    }
    addGroup(group) {
        const url = `${this.BASE_URL}api/groups/${this._accountService.getId()}`;
        return this._http.post(url, group);
    }
}
GroupsService.ɵfac = function GroupsService_Factory(t) { return new (t || GroupsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_account_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"]('baseUrl')); };
GroupsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GroupsService, factory: GroupsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "xo7X":
/*!*************************************************************!*\
  !*** ./src/app/components/pages/groups/groups.component.ts ***!
  \*************************************************************/
/*! exports provided: GroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsComponent", function() { return GroupsComponent; });
/* harmony import */ var src_app_store_groups_groups_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/store/groups/groups.actions */ "kciF");
/* harmony import */ var _customs_group_container_group_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../customs/group-container/group-container.component */ "OJY5");
/* harmony import */ var _dialogs_new_group_new_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dialogs/new-group/new-group.component */ "E9WU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");









class GroupsComponent {
    constructor(_dialog, _store) {
        this._dialog = _dialog;
        this._store = _store;
    }
    onClickAddGroup() {
        const dialogRef = this._dialog.open(_dialogs_new_group_new_group_component__WEBPACK_IMPORTED_MODULE_2__["NewGroupDialog"]);
        dialogRef.afterClosed().subscribe(name => {
            this._store.dispatch(src_app_store_groups_groups_actions__WEBPACK_IMPORTED_MODULE_0__["GroupActions"].add({ group: { name } }));
        });
    }
}
GroupsComponent.ɵfac = function GroupsComponent_Factory(t) { return new (t || GroupsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
GroupsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GroupsComponent, selectors: [["app-groups"]], viewQuery: function GroupsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_customs_group_container_group_container_component__WEBPACK_IMPORTED_MODULE_1__["GroupContainerComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.groups = _t.first);
    } }, decls: 6, vars: 0, consts: [[1, "flex"], ["mat-mini-fab", "", "color", "primary", 3, "click"], ["groups", ""]], template: function GroupsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GroupsComponent_Template_button_click_1_listener() { return ctx.onClickAddGroup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-group-container", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _customs_group_container_group_container_component__WEBPACK_IMPORTED_MODULE_1__["GroupContainerComponent"]], styles: [".flex[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3Vwcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkIiLCJmaWxlIjoiZ3JvdXBzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zWi4":
/*!************************************************************!*\
  !*** ./src/app/store/transactions/transactions.effects.ts ***!
  \************************************************************/
/*! exports provided: TransactionsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsEffects", function() { return TransactionsEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _transactions_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transactions.actions */ "kbha");
/* harmony import */ var _transactions_seletors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transactions.seletors */ "J6Na");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_services_transactions_transactions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/transactions/transactions.service */ "7caK");









class TransactionsEffects {
    constructor(_actions$, _store, _transactionService) {
        this._actions$ = _actions$;
        this._store = _store;
        this._transactionService = _transactionService;
        this.loadMonth = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_transactions_actions__WEBPACK_IMPORTED_MODULE_3__["TransactionActions"].loadMonth), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(({ year, month }) => this._transactionService.loadMonth(new Date(year, month))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((transactions) => _transactions_actions__WEBPACK_IMPORTED_MODULE_3__["TransactionActions"].loadMonthSuccess({ transactions })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_transactions_actions__WEBPACK_IMPORTED_MODULE_3__["TransactionActions"].loadMonthFailure({ error })))))));
        this.assignGroupSuccess = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_transactions_actions__WEBPACK_IMPORTED_MODULE_3__["TransactionActions"].assignGroupSuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this._store.select(_transactions_seletors__WEBPACK_IMPORTED_MODULE_4__["TransactionsSelectors"].getDataDate)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(([_, date]) => {
            let year = date.getFullYear();
            let month = date.getMonth();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_transactions_actions__WEBPACK_IMPORTED_MODULE_3__["TransactionActions"].loadMonth({ year, month }));
        })));
        this.assignGroup = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_transactions_actions__WEBPACK_IMPORTED_MODULE_3__["TransactionActions"].assignGroup), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this._store.select(_transactions_seletors__WEBPACK_IMPORTED_MODULE_4__["TransactionsSelectors"].getSelectedTransaction)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(([{ group }, transaction]) => this._transactionService.assign(transaction, group)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_ => _transactions_actions__WEBPACK_IMPORTED_MODULE_3__["TransactionActions"].assignGroupSuccess()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_transactions_actions__WEBPACK_IMPORTED_MODULE_3__["TransactionActions"].assignGroupFailure({ error })))))));
        this.upload = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_transactions_actions__WEBPACK_IMPORTED_MODULE_3__["TransactionActions"].upload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(({ file }) => this._transactionService.uploadCSVFile(file)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_ => _transactions_actions__WEBPACK_IMPORTED_MODULE_3__["TransactionActions"].uploadSuccess()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_transactions_actions__WEBPACK_IMPORTED_MODULE_3__["TransactionActions"].uploadFailure({ error })))))));
    }
}
TransactionsEffects.ɵfac = function TransactionsEffects_Factory(t) { return new (t || TransactionsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_services_transactions_transactions_service__WEBPACK_IMPORTED_MODULE_7__["TransactionsService"])); };
TransactionsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: TransactionsEffects, factory: TransactionsEffects.ɵfac });


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map