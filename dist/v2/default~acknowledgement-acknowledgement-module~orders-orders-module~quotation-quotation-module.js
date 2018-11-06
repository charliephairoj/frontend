(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~acknowledgement-acknowledgement-module~orders-orders-module~quotation-quotation-module"],{

/***/ "./src/app/orders/components/acknowledgement-dialog/acknowledgement-dialog.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/orders/components/acknowledgement-dialog/acknowledgement-dialog.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h3 mat-dialog-title>Acknowledgement {{form.get('id')?.value}}</h3>\n<form [formGroup]=form (ngSubmit)=\"create()\">    \n<mat-dialog-content>\n        <mat-card class=\"order-details\">\n            <mat-card-content>\n                <div formGroupName=\"customer\">\n                    <div class=\"customer-container container\">\n                            <search-list #customerSearch placeholder=\"Customer\" [resource]=\"customer\" [service]=\"customerService\" \n                                        (selected)=\"setCustomer($event)\" (blurred)=\"setCustomer($event)\" required></search-list>\n                        </div>\n                        <div class=\"contact-container container\">\n                            <mat-form-field>\n                                <input matInput placeholder=\"Telephone\" formControlName=\"telephone\" />\n                            </mat-form-field>\n                            <mat-form-field>\n                                <input matInput placeholder=\"Email\" formControlName=\"email\" />\n                                <mat-error *ngFor=\"let validation of validation_messages.email\">\n                                    <mat-error class=\"error-message\" *ngIf=\"displayError('email', validation.type)\">{{validation.message}}</mat-error>\n                                </mat-error>\n                            </mat-form-field>\n                            <mat-form-field>\n                                <input matInput placeholder=\"Tax ID\" formControlName=\"tax_id\" />\n                            </mat-form-field>\n                        </div>\n                        \n                        <div formArrayName=\"addresses\">\n        \n                            <div *ngFor=\"let address of addresses.controls; let i = index;\" >\n                                <div formGroupName=\"{{i}}\">\n                                    <div class=\"address1 container\">\n                                        <mat-form-field>\n                                            <input matInput placeholder=\"Address\" formControlName=\"address1\"/>\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"address2 container\">\n                                        <mat-form-field>\n                                            <input matInput placeholder=\"City\" formControlName=\"city\" />\n                                        </mat-form-field>\n                                        <mat-form-field>\n                                            <input matInput placeholder=\"Territory\" formControlName=\"territory\" />\n                                        </mat-form-field>\n                                        <mat-form-field>\n                                            <input matInput placeholder=\"Country\" formControlName=\"country\" />\n                                        </mat-form-field>\n                                        <mat-form-field>\n                                            <input matInput placeholder=\"Zipcode\" formControlName=\"zipcode\" />\n                                        </mat-form-field>\n                                    </div>\n                                </div>\n                                \n                            </div>\n                        </div>\n                </div>\n                \n                \n                <div class=\"date-container container\">\n                    <mat-form-field>\n                        <input matInput placeholder=\"Delivery Date\" [matDatepicker]=\"myDatepicker\" formControlName=\"delivery_date\">\n                        <mat-datepicker-toggle matSuffix [for]=\"myDatepicker\"></mat-datepicker-toggle>\n                        <mat-datepicker #myDatepicker></mat-datepicker>\n                        <mat-error *ngFor=\"let validation of validation_messages.delivery_date\">\n                            <mat-error class=\"error-message\" *ngIf=\"displayError('delivery_date', validation.type)\">{{validation.message}}</mat-error>\n                        </mat-error>\n                    </mat-form-field>\n                    \n                </div>\n            \n                <div class=\"order container\">\n                    <mat-form-field>\n                        <input matInput placeholder=\"Discount\" formControlName=\"discount\" />\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input matInput placeholder=\"Addition Discount\" formControlName=\"second_discount\"/>\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input matInput placeholder=\"VAT\" type=\"number\" formControlName=\"vat\"/>\n                        <mat-error *ngFor=\"let validation of validation_messages.vat\">\n                            <mat-error class=\"error-message\" *ngIf=\"displayError('vat', validation.type)\">{{validation.message}}</mat-error>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n                <div class=\"project container\">\n                    <search-list placeholder=\"Project\" [resource]=\"project\" [service]=\"projectService\" \n                    (selected)=\"setProject($event)\" (blurred)=\"setProject($event)\"></search-list>\n                </div>\n                <div class=\"order container\">\n                    <mat-form-field>\n                        <textarea matInput placeholder=\"Remarks\" formControlName=\"remarks\">\n                        </textarea>\n                    </mat-form-field>\n                </div>\n            </mat-card-content>\n        </mat-card>\n\n        <add-item [resource]=\"upholstery\" [service]=\"upholsteryService\" (add)=\"addItem($event)\"></add-item>\n\n        <mat-card class=\"item-container\" *ngIf=\"items.length > 0\">\n            <mat-card-content formArrayName=\"items\">\n                <div class=\"item\" *ngFor=\"let item of items.controls; let h = index;\" formGroupName=\"{{h}}\">\n                        <div class=\"item-image-container\" [style.background-image]=\"'url(' + item.get('image.url')?.value + ')'\">\n                                \n                        </div>\n                        <div class=\"item-details-container\">\n                            <div class=\"row row-1\">\n                                <mat-form-field>\n                                    <input matInput placeholder=\"Description\" required formControlName=\"description\"/>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"row row-2\" *ngIf=\"item.get('model')?.value\">\n                                <div formGroupName=\"model\">\n                                    <mat-form-field>\n                                        <input matInput placeholder=\"Model\" formControlName=\"model\"/>\n                                    </mat-form-field>\n                                    <mat-form-field>\n                                        <input matInput placeholder=\"Name\"  formControlName=\"name\"/>\n                                    </mat-form-field>\n                                </div>\n                                <div formGroupName=\"configuration\">\n                                    <mat-form-field>\n                                        <input matInput placeholder=\"Configuration\" formControlName=\"configuration\" />\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row row-3\">\n                                <mat-form-field class=\"quantity\">\n                                    <input matInput placeholder=\"Quantity\"required formControlName=\"quantity\" />\n                                    <mat-error *ngFor=\"let validation of validation_messages.quantity\">\n                                        <mat-error class=\"error-message\" *ngIf=\"displayError(item.get('quantity'), validation.type)\">{{validation.message}}</mat-error>\n                                    </mat-error>\n                                </mat-form-field>\n                                <mat-form-field>\n                                    <input matInput placeholder=\"Price\" required formControlName=\"unit_price\"/>\n                                    <mat-error *ngFor=\"let validation of validation_messages.price\">\n                                        <mat-error class=\"error-message\" *ngIf=\"displayError(item.get('unit_price'), validation.type)\">{{validation.message}}</mat-error>\n                                    </mat-error>\n                                </mat-form-field>\n                            </div>\n        \n                                \n                            <div class=\"row row-4\">\n                                    <mat-form-field>\n                                        <input matInput placeholder=\"Width\" formControlName=\"width\"/>\n                                    </mat-form-field>\n                                    <mat-form-field>\n                                        <input matInput placeholder=\"Depth\" formControlName=\"depth\"/>\n                                    </mat-form-field>\n                                    <mat-form-field>\n                                        <input matInput placeholder=\"Height\" formControlName=\"height\"/>\n                                    </mat-form-field>\n                            </div>\n                            <div class=\"row row-5\">\n                                <mat-form-field>\n                                    <textarea matInput placeholder=\"Comments\" formControlName=\"comments\"></textarea>\n                                </mat-form-field>\n                            </div>\n                            <!--\n                            <table>\n                                <tr>\n                                    <td>Description</td>\n                                    <td>\n                                        \n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>Quantity</td>\n                                    <td>\n                                        \n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>Price</td>\n                                    <td>\n                                        \n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>Width</td>\n                                    <td>\n                                        \n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>Depth</td>\n                                    <td>\n                                        \n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>Height</td>\n                                    <td>\n                                        \n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>Remarks</td>\n                                    <td>\n                                        <mat-form-field>\n                                            <textarea matInput [(ngModel)]=\"item.remarks\" formControlName=\"{{index}}-remarks\"></textarea>\n                                        </mat-form-field>\n                                    </td>\n                                </tr>\n                            </table>\n        \n                        -->\n                        </div>\n                        <button mat-fab color=\"warn\" (click)=\"removeItem(h)\">\n                            <i class=\"material-icons\">remove</i>\n                        </button>\n\n                </div>\n                    \n                \n            </mat-card-content>\n        </mat-card>\n        <!--\n        <div class=\"submit-container\">\n            <button type=\"submit\" class=\"submit\"  [disabled]=\"!form.valid\"><span>Create Quotation</span></button>\n        </div>\n    -->\n</mat-dialog-content>\n<mat-dialog-actions>\n    <div class=\"submit-container\">\n        <button type=\"submit\" class=\"submit\"  [disabled]=\"!form.valid\"><span>Create Acknowledgement</span></button>\n    </div>\n</mat-dialog-actions>\n</form>\n"

/***/ }),

/***/ "./src/app/orders/components/acknowledgement-dialog/acknowledgement-dialog.component.less":
/*!************************************************************************************************!*\
  !*** ./src/app/orders/components/acknowledgement-dialog/acknowledgement-dialog.component.less ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*general mixins*/\n.no-scrollbars {\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n}\n.no-scrollbars::-webkit-scrollbar {\n  display: none;\n}\n.flex {\n  display: flex;\n  display: -webkit-flex;\n}\n.translateZ {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  /* Other transform properties here */\n}\n/*\n@font-face {\n\tfont-family: 'raleway';\n\tsrc: url('assets/fonts/raleway_thin-webfont.eot');\n\tsrc: url('assets/fonts/raleway_thin-webfont.eot?#iefix') format('embedded-opentype'),\n\turl('assets/fonts/raleway_thin-webfont.woff') format('woff'), \n\turl('assets/fonts/raleway_thin-webfont.ttf') format('truetype'), \n\turl('assets/fonts/raleway_thin-webfont.svg') format('svg');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n*/\n.mat-dialog-title {\n  background: pink;\n}\nmat-dialog-content {\n  height: 95vh;\n}\nmat-dialog-content mat-card {\n  margin-bottom: 1em;\n}\nmat-dialog-content mat-card.order-details {\n  margin-bottom: 5em;\n}\nmat-dialog-content mat-card.order-details .container {\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: row;\n}\nmat-dialog-content mat-card.order-details .container.customer-container search-list {\n  width: 100%;\n}\nmat-dialog-content mat-card.order-details .container.address1 {\n  margin-top: 2em;\n}\nmat-dialog-content mat-card.order-details .container.address1 mat-form-field {\n  width: 100%;\n}\nmat-dialog-content mat-card.order-details .container.order {\n  margin-top: 2em;\n}\nmat-dialog-content mat-card.order-details .container.project search-list {\n  min-width: 20em;\n}\nmat-dialog-content mat-card.order-details .container mat-form-field {\n  margin-right: 1em;\n}\nmat-dialog-content mat-card.add-item mat-card-content {\n  display: flex;\n  display: -webkit-flex;\n}\nmat-dialog-content mat-card.add-item mat-card-content search-list {\n  margin-left: 2em;\n  min-width: 20em;\n  width: 60%;\n}\nmat-dialog-content mat-card.item-container mat-card-content {\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: column;\n  align-items: flex-start;\n  -webkit-align-items: flex-start;\n  justify-content: flex-start;\n  -webkit-justify-content: flex-start;\n}\nmat-dialog-content mat-card.item-container mat-card-content .item {\n  width: 100%;\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: row;\n  border-top: 1px solid #e6e6e6;\n}\nmat-dialog-content mat-card.item-container mat-card-content .item:first-child {\n  border-top: none;\n}\nmat-dialog-content mat-card.item-container mat-card-content .item .item-image-container {\n  min-width: 15em;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  display: flex;\n  display: -webkit-flex;\n  justify-content: space-around;\n  -webkit-justify-content: space-around;\n  align-items: middle;\n  -webkit-align-items: middle;\n}\nmat-dialog-content mat-card.item-container mat-card-content .item .item-image-container img {\n  max-height: 35em;\n  max-width: 100%;\n}\nmat-dialog-content mat-card.item-container mat-card-content .item .item-details-container {\n  width: 100%;\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: column;\n  border-left: 1px solid #e6e6e6;\n  padding: 2em 0 2em 1em;\n  margin-left: 1em;\n}\nmat-dialog-content mat-card.item-container mat-card-content .item .item-details-container .row {\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: row;\n}\nmat-dialog-content mat-card.item-container mat-card-content .item .item-details-container .row.row-1 mat-form-field {\n  min-width: 30em;\n}\nmat-dialog-content mat-card.item-container mat-card-content .item .item-details-container .row.row-3 mat-form-field.quantity {\n  width: 5em;\n}\nmat-dialog-content mat-card.item-container mat-card-content .item .item-details-container .row.row-4 mat-form-field {\n  width: 10em;\n}\nmat-dialog-content mat-card.item-container mat-card-content .item .item-details-container .row.row-5 mat-form-field {\n  max-width: 20em;\n  width: 20em;\n}\nmat-dialog-content mat-card.item-container mat-card-content .item .item-details-container .row mat-form-field {\n  margin-right: 1em;\n}\nmat-dialog-content mat-card.item-container mat-card-content .item .item-details-container table tr td:first-child {\n  text-align: right;\n}\nmat-dialog-content mat-card.item-container mat-card-content .item .item-details-container table tr td:last-child {\n  padding-left: 0.5em;\n}\nmat-dialog-content .submit-container {\n  width: 100%;\n  padding: 1em 0;\n  margin: 1em 0;\n  display: flex;\n  display: -webkit-flex;\n  justify-content: space-around;\n  -webkit-justify-content: space-around;\n}\nmat-dialog-content .submit-container button {\n  padding: 3em;\n  width: 70%;\n  background: green;\n  border-radius: 5px;\n  font-family: Roboto, 'Prompt', Raleway, raleway, Athiti, Tahoma, Arial;\n  color: #ffffff;\n  outline: none;\n  cursor: pointer;\n}\nmat-dialog-content .submit-container button[disabled] {\n  background: grey;\n  cursor: default;\n}\nmat-dialog-content .submit-container button span {\n  font-size: 2em;\n}\nmat-dialog-actions .submit-container {\n  width: 100%;\n  padding: 0.5em 0;\n  margin: 0.5em 0;\n  display: flex;\n  display: -webkit-flex;\n  justify-content: space-around;\n  -webkit-justify-content: space-around;\n}\nmat-dialog-actions .submit-container button {\n  padding: 1em;\n  width: 60%;\n  background: green;\n  border-radius: 5px;\n  font-family: Roboto, 'Prompt', Raleway, raleway, Athiti, Tahoma, Arial;\n  color: #ffffff;\n  outline: none;\n  cursor: pointer;\n}\nmat-dialog-actions .submit-container button[disabled] {\n  background: grey;\n  cursor: default;\n}\nmat-dialog-actions .submit-container button span {\n  font-size: 2em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzL2NvbXBvbmVudHMvYWNrbm93bGVkZ2VtZW50LWRpYWxvZy9hY2tub3dsZWRnZW1lbnQtZGlhbG9nLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL0NoYXJsaWUvU2l0ZXMvZW1wbG95ZWUvYXRoZW5hL3NyYy9taXhpbnMubGVzcyIsIi9Vc2Vycy9DaGFybGllL1NpdGVzL2VtcGxveWVlL2F0aGVuYS9zcmMvYXBwL29yZGVycy9jb21wb25lbnRzL2Fja25vd2xlZGdlbWVudC1kaWFsb2cvYWNrbm93bGVkZ2VtZW50LWRpYWxvZy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0I7QUNTbEI7RUFJQyw2Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7Q0RWQTtBQ0tBO0VBQ0MsY0FBQTtDREhEO0FDY0Q7RUFDQyxjQUFBO0VBQ0Esc0JBQUE7Q0RaQTtBQ3VDRDtFQUNDLHdDQUFBO0VBR0csZ0NBQUE7RURyQ0YscUNBQXFDO0NBQ3RDO0FBQ0Q7Ozs7Ozs7Ozs7O0VBV0U7QUUzQkY7RUFDSSxpQkFBQTtDRjZCSDtBRTFCRDtFQUNJLGFBQUE7Q0Y0Qkg7QUU3QkQ7RUFJUSxtQkFBQTtDRjRCUDtBRTFCTztFQUNJLG1CQUFBO0NGNEJYO0FFN0JPO0VEU1AsY0FBQTtFQUNBLHNCQUFBO0VBT0Esb0JBQUE7Q0RrQkE7QUU1QmU7RUFFUSxZQUFBO0NGNkJ2QjtBRXpCZTtFQUNJLGdCQUFBO0NGMkJuQjtBRTVCZTtFQUlRLFlBQUE7Q0YyQnZCO0FFaEJlO0VBQ0ksZ0JBQUE7Q0ZrQm5CO0FFZmU7RUFFUSxnQkFBQTtDRmdCdkI7QUVsRE87RUF1Q1ksa0JBQUE7Q0ZjbkI7QUVUTztFRG5DUCxjQUFBO0VBQ0Esc0JBQUE7Q0QrQ0E7QUViTztFQUtZLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0NGV25CO0FFTk87RUQvQ1AsY0FBQTtFQUNBLHNCQUFBO0VBT0EsdUJBQUE7RUFLQSx3QkFBQTtFQUNBLGdDQUFBO0VBSUEsNEJBQUE7RUFDQSxvQ0FBQTtDRDRDQTtBRWhCTztFQVFZLFlBQUE7RUR2RG5CLGNBQUE7RUFDQSxzQkFBQTtFQU9BLG9CQUFBO0VDa0RtQiw4QkFBQTtDRmFuQjtBRVhtQjtFQUNJLGlCQUFBO0NGYXZCO0FFM0JPO0VBa0JnQixnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFRHBFdkIsY0FBQTtFQUNBLHNCQUFBO0VBaUJBLDhCQUFBO0VBQ0Esc0NBQUE7RUFOQSxvQkFBQTtFQUNBLDRCQUFBO0NEd0VBO0FFdkNPO0VBNEJvQixpQkFBQTtFQUNBLGdCQUFBO0NGYzNCO0FFM0NPO0VBa0NnQixZQUFBO0VEakZ2QixjQUFBO0VBQ0Esc0JBQUE7RUFPQSx1QkFBQTtFQzRFdUIsK0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0NGY3ZCO0FFckRPO0VEL0NQLGNBQUE7RUFDQSxzQkFBQTtFQU9BLG9CQUFBO0NEa0dBO0FFZDJCO0VBRVEsZ0JBQUE7Q0ZlbkM7QUVUbUM7RUFDSSxXQUFBO0NGV3ZDO0FFTjJCO0VBRVEsWUFBQTtDRk9uQztBRUgyQjtFQUVRLGdCQUFBO0VBQ0EsWUFBQTtDRkluQztBRXhFTztFQXlFd0Isa0JBQUE7Q0ZFL0I7QUVNbUM7RUFDSSxrQkFBQTtDRkp2QztBRU9tQztFQUNJLG9CQUFBO0NGTHZDO0FFL0lEO0VBb0tRLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFRHZKUCxjQUFBO0VBQ0Esc0JBQUE7RUFpQkEsOEJBQUE7RUFDQSxzQ0FBQTtDRHNIQTtBRXhKRDtFQTJLWSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1RUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7Q0ZoQlg7QUVrQlc7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0NGaEJmO0FFdEtEO0VBMExnQixlQUFBO0NGakJmO0FFdUJEO0VBRVEsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RURyTFAsY0FBQTtFQUNBLHNCQUFBO0VBaUJBLDhCQUFBO0VBQ0Esc0NBQUE7Q0RnSkE7QUVjRDtFQVNZLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVFQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtDRnBCWDtBRXNCVztFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7Q0ZwQmY7QUVBRDtFQXdCZ0IsZUFBQTtDRnJCZiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9jb21wb25lbnRzL2Fja25vd2xlZGdlbWVudC1kaWFsb2cvYWNrbm93bGVkZ2VtZW50LWRpYWxvZy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qZ2VuZXJhbCBtaXhpbnMqL1xuLm5vLXNjcm9sbGJhcnMge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7XG59XG4ubm8tc2Nyb2xsYmFyczo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG59XG4udHJhbnNsYXRlWiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgLyogT3RoZXIgdHJhbnNmb3JtIHByb3BlcnRpZXMgaGVyZSAqL1xufVxuLypcbkBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogJ3JhbGV3YXknO1xuXHRzcmM6IHVybCgnYXNzZXRzL2ZvbnRzL3JhbGV3YXlfdGhpbi13ZWJmb250LmVvdCcpO1xuXHRzcmM6IHVybCgnYXNzZXRzL2ZvbnRzL3JhbGV3YXlfdGhpbi13ZWJmb250LmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXG5cdHVybCgnYXNzZXRzL2ZvbnRzL3JhbGV3YXlfdGhpbi13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSwgXG5cdHVybCgnYXNzZXRzL2ZvbnRzL3JhbGV3YXlfdGhpbi13ZWJmb250LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgXG5cdHVybCgnYXNzZXRzL2ZvbnRzL3JhbGV3YXlfdGhpbi13ZWJmb250LnN2ZycpIGZvcm1hdCgnc3ZnJyk7XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbiovXG4ubWF0LWRpYWxvZy10aXRsZSB7XG4gIGJhY2tncm91bmQ6IHBpbms7XG59XG5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICBoZWlnaHQ6IDk1dmg7XG59XG5tYXQtZGlhbG9nLWNvbnRlbnQgbWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5tYXQtZGlhbG9nLWNvbnRlbnQgbWF0LWNhcmQub3JkZXItZGV0YWlscyB7XG4gIG1hcmdpbi1ib3R0b206IDVlbTtcbn1cbm1hdC1kaWFsb2ctY29udGVudCBtYXQtY2FyZC5vcmRlci1kZXRhaWxzIC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbm1hdC1kaWFsb2ctY29udGVudCBtYXQtY2FyZC5vcmRlci1kZXRhaWxzIC5jb250YWluZXIuY3VzdG9tZXItY29udGFpbmVyIHNlYXJjaC1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5tYXQtZGlhbG9nLWNvbnRlbnQgbWF0LWNhcmQub3JkZXItZGV0YWlscyAuY29udGFpbmVyLmFkZHJlc3MxIHtcbiAgbWFyZ2luLXRvcDogMmVtO1xufVxubWF0LWRpYWxvZy1jb250ZW50IG1hdC1jYXJkLm9yZGVyLWRldGFpbHMgLmNvbnRhaW5lci5hZGRyZXNzMSBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxubWF0LWRpYWxvZy1jb250ZW50IG1hdC1jYXJkLm9yZGVyLWRldGFpbHMgLmNvbnRhaW5lci5vcmRlciB7XG4gIG1hcmdpbi10b3A6IDJlbTtcbn1cbm1hdC1kaWFsb2ctY29udGVudCBtYXQtY2FyZC5vcmRlci1kZXRhaWxzIC5jb250YWluZXIucHJvamVjdCBzZWFyY2gtbGlzdCB7XG4gIG1pbi13aWR0aDogMjBlbTtcbn1cbm1hdC1kaWFsb2ctY29udGVudCBtYXQtY2FyZC5vcmRlci1kZXRhaWxzIC5jb250YWluZXIgbWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cbm1hdC1kaWFsb2ctY29udGVudCBtYXQtY2FyZC5hZGQtaXRlbSBtYXQtY2FyZC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xufVxubWF0LWRpYWxvZy1jb250ZW50IG1hdC1jYXJkLmFkZC1pdGVtIG1hdC1jYXJkLWNvbnRlbnQgc2VhcmNoLWxpc3Qge1xuICBtYXJnaW4tbGVmdDogMmVtO1xuICBtaW4td2lkdGg6IDIwZW07XG4gIHdpZHRoOiA2MCU7XG59XG5tYXQtZGlhbG9nLWNvbnRlbnQgbWF0LWNhcmQuaXRlbS1jb250YWluZXIgbWF0LWNhcmQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbm1hdC1kaWFsb2ctY29udGVudCBtYXQtY2FyZC5pdGVtLWNvbnRhaW5lciBtYXQtY2FyZC1jb250ZW50IC5pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U2ZTZlNjtcbn1cbm1hdC1kaWFsb2ctY29udGVudCBtYXQtY2FyZC5pdGVtLWNvbnRhaW5lciBtYXQtY2FyZC1jb250ZW50IC5pdGVtOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cbm1hdC1kaWFsb2ctY29udGVudCBtYXQtY2FyZC5pdGVtLWNvbnRhaW5lciBtYXQtY2FyZC1jb250ZW50IC5pdGVtIC5pdGVtLWltYWdlLWNvbnRhaW5lciB7XG4gIG1pbi13aWR0aDogMTVlbTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBtaWRkbGU7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IG1pZGRsZTtcbn1cbm1hdC1kaWFsb2ctY29udGVudCBtYXQtY2FyZC5pdGVtLWNvbnRhaW5lciBtYXQtY2FyZC1jb250ZW50IC5pdGVtIC5pdGVtLWltYWdlLWNvbnRhaW5lciBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNWVtO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5tYXQtZGlhbG9nLWNvbnRlbnQgbWF0LWNhcmQuaXRlbS1jb250YWluZXIgbWF0LWNhcmQtY29udGVudCAuaXRlbSAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTZlNmU2O1xuICBwYWRkaW5nOiAyZW0gMCAyZW0gMWVtO1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxubWF0LWRpYWxvZy1jb250ZW50IG1hdC1jYXJkLml0ZW0tY29udGFpbmVyIG1hdC1jYXJkLWNvbnRlbnQgLml0ZW0gLml0ZW0tZGV0YWlscy1jb250YWluZXIgLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xufVxubWF0LWRpYWxvZy1jb250ZW50IG1hdC1jYXJkLml0ZW0tY29udGFpbmVyIG1hdC1jYXJkLWNvbnRlbnQgLml0ZW0gLml0ZW0tZGV0YWlscy1jb250YWluZXIgLnJvdy5yb3ctMSBtYXQtZm9ybS1maWVsZCB7XG4gIG1pbi13aWR0aDogMzBlbTtcbn1cbm1hdC1kaWFsb2ctY29udGVudCBtYXQtY2FyZC5pdGVtLWNvbnRhaW5lciBtYXQtY2FyZC1jb250ZW50IC5pdGVtIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIC5yb3cucm93LTMgbWF0LWZvcm0tZmllbGQucXVhbnRpdHkge1xuICB3aWR0aDogNWVtO1xufVxubWF0LWRpYWxvZy1jb250ZW50IG1hdC1jYXJkLml0ZW0tY29udGFpbmVyIG1hdC1jYXJkLWNvbnRlbnQgLml0ZW0gLml0ZW0tZGV0YWlscy1jb250YWluZXIgLnJvdy5yb3ctNCBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMGVtO1xufVxubWF0LWRpYWxvZy1jb250ZW50IG1hdC1jYXJkLml0ZW0tY29udGFpbmVyIG1hdC1jYXJkLWNvbnRlbnQgLml0ZW0gLml0ZW0tZGV0YWlscy1jb250YWluZXIgLnJvdy5yb3ctNSBtYXQtZm9ybS1maWVsZCB7XG4gIG1heC13aWR0aDogMjBlbTtcbiAgd2lkdGg6IDIwZW07XG59XG5tYXQtZGlhbG9nLWNvbnRlbnQgbWF0LWNhcmQuaXRlbS1jb250YWluZXIgbWF0LWNhcmQtY29udGVudCAuaXRlbSAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciAucm93IG1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG5tYXQtZGlhbG9nLWNvbnRlbnQgbWF0LWNhcmQuaXRlbS1jb250YWluZXIgbWF0LWNhcmQtY29udGVudCAuaXRlbSAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB0YWJsZSB0ciB0ZDpmaXJzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxubWF0LWRpYWxvZy1jb250ZW50IG1hdC1jYXJkLml0ZW0tY29udGFpbmVyIG1hdC1jYXJkLWNvbnRlbnQgLml0ZW0gLml0ZW0tZGV0YWlscy1jb250YWluZXIgdGFibGUgdHIgdGQ6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogMC41ZW07XG59XG5tYXQtZGlhbG9nLWNvbnRlbnQgLnN1Ym1pdC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMWVtIDA7XG4gIG1hcmdpbjogMWVtIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5tYXQtZGlhbG9nLWNvbnRlbnQgLnN1Ym1pdC1jb250YWluZXIgYnV0dG9uIHtcbiAgcGFkZGluZzogM2VtO1xuICB3aWR0aDogNzAlO1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCAnUHJvbXB0JywgUmFsZXdheSwgcmFsZXdheSwgQXRoaXRpLCBUYWhvbWEsIEFyaWFsO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxubWF0LWRpYWxvZy1jb250ZW50IC5zdWJtaXQtY29udGFpbmVyIGJ1dHRvbltkaXNhYmxlZF0ge1xuICBiYWNrZ3JvdW5kOiBncmV5O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5tYXQtZGlhbG9nLWNvbnRlbnQgLnN1Ym1pdC1jb250YWluZXIgYnV0dG9uIHNwYW4ge1xuICBmb250LXNpemU6IDJlbTtcbn1cbm1hdC1kaWFsb2ctYWN0aW9ucyAuc3VibWl0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjVlbSAwO1xuICBtYXJnaW46IDAuNWVtIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5tYXQtZGlhbG9nLWFjdGlvbnMgLnN1Ym1pdC1jb250YWluZXIgYnV0dG9uIHtcbiAgcGFkZGluZzogMWVtO1xuICB3aWR0aDogNjAlO1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCAnUHJvbXB0JywgUmFsZXdheSwgcmFsZXdheSwgQXRoaXRpLCBUYWhvbWEsIEFyaWFsO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxubWF0LWRpYWxvZy1hY3Rpb25zIC5zdWJtaXQtY29udGFpbmVyIGJ1dHRvbltkaXNhYmxlZF0ge1xuICBiYWNrZ3JvdW5kOiBncmV5O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5tYXQtZGlhbG9nLWFjdGlvbnMgLnN1Ym1pdC1jb250YWluZXIgYnV0dG9uIHNwYW4ge1xuICBmb250LXNpemU6IDJlbTtcbn1cbiIsIi8qZ2VuZXJhbCBtaXhpbnMqL1xuLnRyYW5zaXRpb24gKEBwcm9wOiBhbGw7IEB0aW1lOiAxczsgQGVhc2U6IGxpbmVhcjspe1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogQHByb3AgQHRpbWUgQGVhc2U7XG4gICAgLW1vei10cmFuc2l0aW9uOiBAcHJvcCBAdGltZSBAZWFzZTtcbiAgICAtby10cmFuc2l0aW9uOiBAcHJvcCBAdGltZSBAZWFzZTtcbiAgICAtbXMtdHJhbnNpdGlvbjogQHByb3AgQHRpbWUgQGVhc2U7XG4gICAgdHJhbnNpdGlvbjogQHByb3AgQHRpbWUgQGVhc2U7XG59XG5cbi5uby1zY3JvbGxiYXJze1xuXHQmOjotd2Via2l0LXNjcm9sbGJhciB7IFxuXHRcdGRpc3BsYXk6IG5vbmU7IFxuXHR9XG5cdC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xuXHQtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG5cdG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcbn1cbiAgXG4ub3BhY2l0eShAb3BhY2l0eTogMCl7XG4gICAgb3BhY2l0eTogQG9wYWNpdHk7XG59XG5cbi5mbGV4e1xuXHRkaXNwbGF5OmZsZXg7XG5cdGRpc3BsYXk6LXdlYmtpdC1mbGV4O1xuXHRcblx0Ly9taW4taGVpZ2h0OjA7XG5cdC8vbWluLXdpZHRoOjA7XG59XG5cbi5mbGV4LWRpcmVjdGlvbiAoQGRpcmVjdGlvbjpyb3cpIHtcblx0ZmxleC1kaXJlY3Rpb246IEBkaXJlY3Rpb247XG5cdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IEBkaXJlY3Rpb247XG59XG5cbi5hbGlnbi1pdGVtcyAoQGRpcmVjdGlvbjpjZW50ZXIpIHtcblx0YWxpZ24taXRlbXM6IEBkaXJlY3Rpb247XG5cdC13ZWJraXQtYWxpZ24taXRlbXM6IEBkaXJlY3Rpb247XG59XG5cbi5qdXN0aWZ5LWNvbnRlbnQgKEBkaXJlY3Rpb246Y2VudGVyKSB7XG5cdGp1c3RpZnktY29udGVudDogQGRpcmVjdGlvbjtcblx0LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IEBkaXJlY3Rpb247XG59XG5cbi5mbGV4LXdyYXAoQGZsZXgtd3JhcDpub3dyYXApIHtcblx0ZmxleC13cmFwOiBAZmxleC13cmFwO1xuXHQtd2Via2l0LWZsZXgtd3JhcDogQGZsZXgtd3JhcDtcbn1cblxuXG4udHJhbnNsYXRlWntcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgXHQtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICBcdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICBcdC8qIE90aGVyIHRyYW5zZm9ybSBwcm9wZXJ0aWVzIGhlcmUgKi9cbn1cbi8qXG5AZm9udC1mYWNlIHtcblx0Zm9udC1mYW1pbHk6ICdyYWxld2F5Jztcblx0c3JjOiB1cmwoJ2Fzc2V0cy9mb250cy9yYWxld2F5X3RoaW4td2ViZm9udC5lb3QnKTtcblx0c3JjOiB1cmwoJ2Fzc2V0cy9mb250cy9yYWxld2F5X3RoaW4td2ViZm9udC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuXHR1cmwoJ2Fzc2V0cy9mb250cy9yYWxld2F5X3RoaW4td2ViZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksIFxuXHR1cmwoJ2Fzc2V0cy9mb250cy9yYWxld2F5X3RoaW4td2ViZm9udC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIFxuXHR1cmwoJ2Fzc2V0cy9mb250cy9yYWxld2F5X3RoaW4td2ViZm9udC5zdmcnKSBmb3JtYXQoJ3N2ZycpO1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG59XG4qL1xuXG5Ac3RhbmRhcmRGb250RmFtaWx5OiBSb2JvdG8sICdQcm9tcHQnLCBSYWxld2F5LCByYWxld2F5LCBBdGhpdGksIFRhaG9tYSwgQXJpYWw7XG5cbiIsIlxuQGltcG9ydCAnLi4vLi4vLi4vLi4vbWl4aW5zLmxlc3MnO1xuXG5cbi5tYXQtZGlhbG9nLXRpdGxle1xuICAgIGJhY2tncm91bmQ6cGluaztcbn1cblxubWF0LWRpYWxvZy1jb250ZW50e1xuICAgIGhlaWdodDogOTV2aDtcblxuICAgIG1hdC1jYXJke1xuICAgICAgICBtYXJnaW4tYm90dG9tOjFlbTtcblxuICAgICAgICAmLm9yZGVyLWRldGFpbHN7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjVlbTtcblxuICAgICAgICAgICAgLmNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICAuZmxleDtcbiAgICAgICAgICAgICAgICAuZmxleC1kaXJlY3Rpb24ocm93KTtcblxuICAgICAgICAgICAgICAgICYuY3VzdG9tZXItY29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgICBzZWFyY2gtbGlzdHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmLmFkZHJlc3Mxe1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjJlbTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIG1hdC1mb3JtLWZpZWxke1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYuYWRkcmVzczJ7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYub3JkZXJ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MmVtO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYucHJvamVjdHtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoLWxpc3R7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6MjBlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1hdC1mb3JtLWZpZWxke1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmFkZC1pdGVte1xuICAgICAgICAgICAgbWF0LWNhcmQtY29udGVudHtcbiAgICAgICAgICAgICAgICAuZmxleDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzZWFyY2gtbGlzdHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MmVtO1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDIwZW07XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjYwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLml0ZW0tY29udGFpbmVye1xuICAgICAgICAgICAgbWF0LWNhcmQtY29udGVudHtcbiAgICAgICAgICAgICAgICAuZmxleDtcbiAgICAgICAgICAgICAgICAuZmxleC1kaXJlY3Rpb24oY29sdW1uKTtcbiAgICAgICAgICAgICAgICAuYWxpZ24taXRlbXMoZmxleC1zdGFydCk7XG4gICAgICAgICAgICAgICAgLmp1c3RpZnktY29udGVudChmbGV4LXN0YXJ0KTtcblxuICAgICAgICAgICAgICAgIC5pdGVte1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgLmZsZXg7XG4gICAgICAgICAgICAgICAgICAgIC5mbGV4LWRpcmVjdGlvbihyb3cpO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOjFweCBzb2xpZCByZ2IoMjMwLCAyMzAsIDIzMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuaXRlbS1pbWFnZS1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6MTVlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLmZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAuanVzdGlmeS1jb250ZW50KHNwYWNlLWFyb3VuZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAuYWxpZ24taXRlbXMobWlkZGxlKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OjM1ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC5pdGVtLWRldGFpbHMtY29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgLmZsZXgtZGlyZWN0aW9uKGNvbHVtbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDoxcHggc29saWQgcmdiKDIzMCwgMjMwLCAyMzApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoyZW0gMCAyZW0gMWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MWVtO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAucm93e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mbGV4LWRpcmVjdGlvbihyb3cpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYucm93LTF7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdC1mb3JtLWZpZWxke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5yb3ctM3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0LWZvcm0tZmllbGR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLnF1YW50aXR5e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjVlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLnJvdy00e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXQtZm9ybS1maWVsZHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLnJvdy01e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXQtZm9ybS1maWVsZHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDoyMGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0LWZvcm0tZmllbGR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDoxZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDowLjVlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc3VibWl0LWNvbnRhaW5lcntcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgcGFkZGluZzoxZW0gMDtcbiAgICAgICAgbWFyZ2luOjFlbSAwO1xuICAgICAgICAuZmxleDtcbiAgICAgICAgLmp1c3RpZnktY29udGVudChzcGFjZS1hcm91bmQpO1xuXG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgIHBhZGRpbmc6M2VtO1xuICAgICAgICAgICAgd2lkdGg6NzAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogZ3JlZW47XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogQHN0YW5kYXJkRm9udEZhbWlseTtcbiAgICAgICAgICAgIGNvbG9yOnJnYigyNTUsMjU1LDI1NSk7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICAmW2Rpc2FibGVkXXtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmV5O1xuICAgICAgICAgICAgICAgIGN1cnNvcjpkZWZhdWx0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5tYXQtZGlhbG9nLWFjdGlvbnN7XG4gICAgLnN1Ym1pdC1jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIHBhZGRpbmc6MC41ZW0gMDtcbiAgICAgICAgbWFyZ2luOjAuNWVtIDA7XG4gICAgICAgIC5mbGV4O1xuICAgICAgICAuanVzdGlmeS1jb250ZW50KHNwYWNlLWFyb3VuZCk7XG5cbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgcGFkZGluZzoxZW07XG4gICAgICAgICAgICB3aWR0aDo2MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBAc3RhbmRhcmRGb250RmFtaWx5O1xuICAgICAgICAgICAgY29sb3I6cmdiKDI1NSwyNTUsMjU1KTtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAgICZbZGlzYWJsZWRde1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGdyZXk7XG4gICAgICAgICAgICAgICAgY3Vyc29yOmRlZmF1bHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/orders/components/acknowledgement-dialog/acknowledgement-dialog.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/orders/components/acknowledgement-dialog/acknowledgement-dialog.component.ts ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var core_2 = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
var models_1 = __webpack_require__(/*! @app/core/models */ "./src/app/core/models/index.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var search_list_component_1 = __webpack_require__(/*! @app/shared/components/search-list/search-list.component */ "./src/app/shared/components/search-list/search-list.component.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var array_validators_1 = __webpack_require__(/*! @app/shared/validators/array-validators */ "./src/app/shared/validators/array-validators.ts");
var AcknowledgementDialogComponent = /** @class */ (function () {
    function AcknowledgementDialogComponent(acknowledgement, customer, customerService, upholstery, upholsteryService, project, projectService, fb, snackBar, dialogRef, dialogData) {
        var _this = this;
        this.acknowledgement = acknowledgement;
        this.customer = customer;
        this.customerService = customerService;
        this.upholstery = upholstery;
        this.upholsteryService = upholsteryService;
        this.project = project;
        this.projectService = projectService;
        this.fb = fb;
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
        this.form = this.fb.group({
            customer: this.fb.group({
                id: [null],
                name: ['', forms_1.Validators.required],
                telephone: [''],
                email: [null],
                tax_id: [''],
                addresses: this.fb.array([
                    this.fb.group({
                        address1: [null],
                        city: [null],
                        territory: [null],
                        country: [null],
                        zipcode: [null]
                    })
                ]),
            }),
            project: this.fb.group({
                id: [null],
                codename: [null],
            }),
            delivery_date: [null, forms_1.Validators.required],
            discount: [''],
            second_discount: [''],
            vat: [7, [forms_1.Validators.required, forms_1.Validators.min(1)]],
            remarks: [''],
            items: this.fb.array([], array_validators_1.ArrayValidators.minLength(1))
        });
        this.validation_messages = {
            name: [
                { type: 'required', message: 'Customer name is required' }
            ],
            delivery_date: [
                { type: 'required', message: 'Delivery date is required' }
            ],
            vat: [
                { type: 'required', message: 'VAT is required' },
                { type: 'min', message: 'A value greater than 0 is required' }
            ],
            items: [
                { type: 'minLength', message: 'At least one item is required' }
            ],
            quantity: [
                { type: 'required', message: 'A quantity is required' },
                { type: 'min', message: 'A value greater than 0 is required' }
            ],
            price: [
                { type: 'required', message: 'A price is required' },
                { type: 'min', message: 'A value greater than 0 is required' }
            ]
        };
        this._progress_check = {
            customer: false,
            project: false,
        };
        /*
        customer.addresses = [{
          address1: null,
          territory: null,
          city: null,
          country: null,
          zipcode: null
        }];
        */
        this.acknowledgement.items = [];
        this.acknowledgement.customer = customer;
        this.acknowledgement.customer.addresses = [new models_1.Address()];
        if (this.dialogData) {
            console.log(this.dialogData);
            if (this.dialogData.acknowledgement) {
                this.acknowledgement.get(this.dialogData.acknowledgement.id)
                    .subscribe(function (a) {
                    _this._hydrateAcknowledgement(a);
                });
            }
        }
    }
    AcknowledgementDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dialogData) {
            console.log(this.dialogData);
            if (this.dialogData.acknowledgement) {
                this.acknowledgement.get(this.dialogData.acknowledgement.id)
                    .subscribe(function (a) {
                    _this._hydrateAcknowledgement(a);
                });
            }
        }
    };
    AcknowledgementDialogComponent.prototype._hydrateAcknowledgement = function (acknowledgement) {
        var _this = this;
        // Patch general
        this.getFormControl('delivery_date').patchValue(acknowledgement.delivery_date);
        this.getFormControl('vat').patchValue(acknowledgement.vat);
        this.getFormControl('discount').patchValue(acknowledgement.discount);
        this.getFormControl('second_discount').patchValue(acknowledgement.second_discount);
        this.getFormControl('remarks').patchValue(acknowledgement.remarks);
        // Patch Customer
        this.getFormGroup('customer').patchValue(acknowledgement.customer);
        Object.assign(this.customer, acknowledgement.customer);
        this.customerSearch.autoControl.setValue(this.customer);
        // Patch Project
        if (acknowledgement.project) {
            this.getFormGroup('project').patchValue(acknowledgement.project);
            Object.assign(this.project, acknowledgement.project);
        }
        // Add Items
        if (acknowledgement.items) {
            var items = acknowledgement.items;
            items.forEach(function (item) {
                _this.items.push(_this.addQuotationItem(item));
            });
        }
    };
    Object.defineProperty(AcknowledgementDialogComponent.prototype, "addresses", {
        get: function () {
            return this.getFormGroup('customer').get('addresses');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AcknowledgementDialogComponent.prototype, "items", {
        get: function () {
            return this.form.get('items');
        },
        enumerable: true,
        configurable: true
    });
    AcknowledgementDialogComponent.prototype.displayError = function (n, t) {
        var ctrl = typeof (n) === 'string' ? this.getFormControl(n) : n;
        return ctrl.invalid && ctrl.hasError(t);
    };
    AcknowledgementDialogComponent.prototype.getErrorMessage = function (k, errorType) {
        var validationMessages = this.validation_messages[k];
        var msg = validationMessages.find(function (val) { return val.type === errorType; })
            || { type: '', message: '' };
        return msg.message;
    };
    AcknowledgementDialogComponent.prototype.setCustomer = function (customer) {
        if (customer) {
            var c = typeof (customer) === 'string' ? {
                id: null,
                name: customer,
                email: '',
                telephone: '',
                tax_id: '',
                addresses: [{}]
            } : customer;
            var custControl = this.getFormGroup('customer');
            custControl.patchValue(c);
            this.addresses.controls[0].patchValue(c.addresses[0]);
        }
    };
    AcknowledgementDialogComponent.prototype.setProject = function (project) {
        var p = typeof (project) === 'string' ? {
            id: null,
            codename: project
        } : project;
        var projectConstrol = this.getFormControl('project');
        projectConstrol.patchValue(p);
    };
    AcknowledgementDialogComponent.prototype.addItem = function (val) {
        var obj;
        obj = typeof (val) === 'string' ? this.addCustomItem(val) : this.addStandardItem(val);
        var fa = this.items;
        fa.push(obj);
        this.addSearch.reset();
    };
    AcknowledgementDialogComponent.prototype.removeItem = function (index) {
        var fa = this.items;
        fa.removeAt(index);
    };
    AcknowledgementDialogComponent.prototype.create = function () {
        var _this = this;
        if (this.form.valid) {
            this.form.disable();
            this.form.enable();
            var formVal = this.form.value;
            Object.assign(this.acknowledgement, formVal);
            // Recreate Customer
            var c = new models_1.Customer(this.customerService);
            Object.assign(c, formVal.customer);
            this.acknowledgement.customer = c;
            this.acknowledgement.customer.save(function () {
                _this._progress_check.customer = true;
                _this._create();
            });
            // Recreate Project
            if (formVal.project.codename && formVal.project.codename !== '') {
                var p = new models_1.Project(this.projectService);
                Object.assign(p, formVal.project);
                this.acknowledgement.project = p;
                if (!this.acknowledgement.project.id) {
                    this.acknowledgement.project.save(function () {
                        _this._progress_check.project = true;
                        _this._create();
                    });
                }
                else {
                    this._progress_check.project = true;
                    this._create();
                }
            }
            else {
                delete formVal.project;
                delete this.acknowledgement.project;
                this._progress_check.project = true;
            }
        }
    };
    AcknowledgementDialogComponent.prototype._create = function () {
        var _this = this;
        if (this._progress_check.project && this._progress_check.customer) {
            this.form.disable();
            this.snackBar.open('Creating Acknowledgement...', 'Dismiss');
            this.acknowledgement.save(function (res) {
                _this.snackBar.open('Acknowledgement Created', 'Dismiss', { duration: 3000 });
                _this.form.reset();
                _this.dialogRef.close(res);
            });
        }
    };
    AcknowledgementDialogComponent.prototype.addStandardItem = function (r) {
        var fg = this.fb.group({
            id: [r.id, forms_1.Validators.required],
            description: [{ value: r.description, disabled: r.id }, forms_1.Validators.required],
            model: this.fb.group({
                id: [{ value: r.model.id, disabled: true }],
                model: [{ value: r.model.model, disabled: true }],
                name: [{ value: r.model.name, disabled: true }]
            }),
            configuration: this.fb.group({
                id: [{ value: r.configuration.id, disabled: true }],
                configuration: [{ value: r.configuration.configuration, disabled: true }]
            }),
            price: [r.price, [forms_1.Validators.required, forms_1.Validators.min(1)]],
            quantity: [null, [forms_1.Validators.required, forms_1.Validators.min(1)]],
            width: [r.width],
            depth: [r.depth],
            height: [r.height],
            comments: [null],
            image: this.fb.group({
                id: [(r.image || { id: '' }).id],
                url: [(r.image || { url: '' }).url]
            })
        });
        return fg;
    };
    AcknowledgementDialogComponent.prototype.addCustomItem = function (description) {
        var fg = this.fb.group({
            description: [description, forms_1.Validators.required],
            price: ['', [forms_1.Validators.required, , forms_1.Validators.min(1)]],
            quantity: ['', [forms_1.Validators.required, , forms_1.Validators.min(1)]],
            width: [0],
            depth: [0],
            height: [0],
            comments: ['']
        });
        return fg;
    };
    AcknowledgementDialogComponent.prototype.addQuotationItem = function (item) {
        var fg = this.fb.group({
            id: [item.product],
            description: [item.description, forms_1.Validators.required],
            unit_price: [item.unit_price, [forms_1.Validators.required, , forms_1.Validators.min(1)]],
            quantity: [item.quantity, [forms_1.Validators.required, , forms_1.Validators.min(1)]],
            width: [item.width],
            depth: [item.depth],
            height: [item.height],
            comments: [item.comments],
            product: [item.product],
            image: this.fb.group({
                id: [(item.image || { id: '' }).id],
                url: [(item.image || { url: '' }).url]
            })
        });
        return fg;
    };
    AcknowledgementDialogComponent.prototype.getFormControl = function (controlName) {
        return this.form.get(controlName) || this.addFormGroup(controlName);
    };
    AcknowledgementDialogComponent.prototype.addFormControl = function (controlName) {
        var control = this.fb.control(null);
        return this.form.registerControl(controlName, control);
    };
    AcknowledgementDialogComponent.prototype.getFormGroup = function (groupName) {
        return this.form.get(groupName) || this.addFormGroup(groupName);
    };
    AcknowledgementDialogComponent.prototype.addFormGroup = function (groupName) {
        var group = this.fb.group({});
        return this.form.registerControl(groupName, group);
    };
    __decorate([
        core_1.ViewChild('addSearch'),
        __metadata("design:type", search_list_component_1.SearchListComponent)
    ], AcknowledgementDialogComponent.prototype, "addSearch", void 0);
    __decorate([
        core_1.ViewChild('customerSearch'),
        __metadata("design:type", search_list_component_1.SearchListComponent)
    ], AcknowledgementDialogComponent.prototype, "customerSearch", void 0);
    AcknowledgementDialogComponent = __decorate([
        core_1.Component({
            template: __webpack_require__(/*! ./acknowledgement-dialog.component.html */ "./src/app/orders/components/acknowledgement-dialog/acknowledgement-dialog.component.html"),
            styles: [__webpack_require__(/*! ./acknowledgement-dialog.component.less */ "./src/app/orders/components/acknowledgement-dialog/acknowledgement-dialog.component.less")],
            providers: [models_1.Customer, models_1.Acknowledgement]
        }),
        __param(10, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [models_1.Acknowledgement,
            models_1.Customer,
            core_2.CustomerService,
            models_1.Upholstery,
            core_2.UpholsteryService,
            models_1.Project,
            core_2.ProjectService,
            forms_1.FormBuilder,
            material_1.MatSnackBar,
            material_1.MatDialogRef, Object])
    ], AcknowledgementDialogComponent);
    return AcknowledgementDialogComponent;
}());
exports.AcknowledgementDialogComponent = AcknowledgementDialogComponent;


/***/ }),

/***/ "./src/app/orders/components/add-acknowledgement/add-acknowledgement.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/orders/components/add-acknowledgement/add-acknowledgement.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h3 mat-dialog-title>Create a New Acknowledgement</h3>\n<form [formGroup]=form (ngSubmit)=\"create()\">    \n<mat-dialog-content>\n        <mat-card class=\"order-details\">\n            <mat-card-content>\n                <div formGroupName=\"customer\">\n                    <div class=\"customer-container container\">\n                            <search-list placeholder=\"Customer\" [resource]=\"customer\" [service]=\"customerService\" \n                                        (selected)=\"setCustomer($event)\" (blurred)=\"setCustomer($event)\" required></search-list>\n                        </div>\n                        <div class=\"contact-container container\">\n                            <mat-form-field>\n                                <input matInput placeholder=\"Telephone\" formControlName=\"telephone\" required />\n                            </mat-form-field>\n                            <mat-form-field>\n                                <input matInput placeholder=\"Email\" formControlName=\"email\" />\n                                <mat-error *ngFor=\"let validation of validation_messages.email\">\n                                    <mat-error class=\"error-message\" *ngIf=\"displayError('email', validation.type)\">{{validation.message}}</mat-error>\n                                </mat-error>\n                            </mat-form-field>\n                            <mat-form-field>\n                                <input matInput placeholder=\"Tax ID\" formControlName=\"tax_id\" />\n                            </mat-form-field>\n                        </div>\n                        \n                        <div formArrayName=\"addresses\">\n        \n                            <div *ngFor=\"let address of addresses.controls; let i = index;\" >\n                                <div formGroupName=\"{{i}}\">\n                                    <div class=\"address1 container\">\n                                        <mat-form-field>\n                                            <input matInput placeholder=\"Address\" formControlName=\"address1\"/>\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"address2 container\">\n                                        <mat-form-field>\n                                            <input matInput placeholder=\"City\" formControlName=\"city\" />\n                                        </mat-form-field>\n                                        <mat-form-field>\n                                            <input matInput placeholder=\"Territory\" formControlName=\"territory\" />\n                                        </mat-form-field>\n                                        <mat-form-field>\n                                            <input matInput placeholder=\"Country\" formControlName=\"country\" />\n                                        </mat-form-field>\n                                        <mat-form-field>\n                                            <input matInput placeholder=\"Zipcode\" formControlName=\"zipcode\" />\n                                        </mat-form-field>\n                                    </div>\n                                </div>\n                                \n                            </div>\n                        </div>\n                </div>\n                \n                \n                <div class=\"date-container container\">\n                    <mat-form-field>\n                        <input matInput placeholder=\"Delivery Date\" [matDatepicker]=\"myDatepicker\" formControlName=\"delivery_date\" required>\n                        <mat-datepicker-toggle matSuffix [for]=\"myDatepicker\"></mat-datepicker-toggle>\n                        <mat-datepicker #myDatepicker></mat-datepicker>\n                        <mat-error *ngFor=\"let validation of validation_messages.delivery_date\">\n                            <mat-error class=\"error-message\" *ngIf=\"displayError('delivery_date', validation.type)\">{{validation.message}}</mat-error>\n                        </mat-error>\n                    </mat-form-field>\n                    \n                </div>\n            \n                <div class=\"order container\">\n                    <mat-form-field>\n                        <input matInput placeholder=\"Discount\" formControlName=\"discount\" />\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input matInput placeholder=\"Addition Discount\" formControlName=\"second_discount\"/>\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input matInput placeholder=\"VAT\" type=\"number\" formControlName=\"vat\" required/>\n                        <mat-error *ngFor=\"let validation of validation_messages.vat\">\n                            <mat-error class=\"error-message\" *ngIf=\"displayError('vat', validation.type)\">{{validation.message}}</mat-error>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n                <div class=\"project container\">\n                    <search-list placeholder=\"Project\" [resource]=\"project\" [service]=\"projectService\" \n                    (selected)=\"setProject($event)\" (blurred)=\"setProject($event)\"></search-list>\n                </div>\n                <div class=\"order container\">\n                    <mat-form-field>\n                        <textarea matInput placeholder=\"Remarks\" formControlName=\"remarks\">\n                        </textarea>\n                    </mat-form-field>\n                </div>\n            </mat-card-content>\n        </mat-card>\n\n        <add-item [resource]=\"upholstery\" [service]=\"upholsteryService\" (add)=\"addItem($event)\"></add-item>\n\n        <mat-card class=\"item-container\" *ngIf=\"items.length > 0\">\n            <mat-card-content formArrayName=\"items\">\n                <div class=\"item\" *ngFor=\"let item of items.controls; let h = index;\" formGroupName=\"{{h}}\">\n                        <div class=\"item-image-container\" [style.background-image]=\"'url(' + item.get('image.url')?.value + ')'\">\n                                \n                        </div>\n                        <div class=\"item-details-container\">\n                            <div class=\"row row-1\">\n                                <mat-form-field>\n                                    <input matInput placeholder=\"Description\" required formControlName=\"description\"/>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"row row-2\" *ngIf=\"item.get('model')?.value\">\n                                <div formGroupName=\"model\">\n                                    <mat-form-field>\n                                        <input matInput placeholder=\"Model\" formControlName=\"model\"/>\n                                    </mat-form-field>\n                                    <mat-form-field>\n                                        <input matInput placeholder=\"Name\"  formControlName=\"name\"/>\n                                    </mat-form-field>\n                                </div>\n                                <div formGroupName=\"configuration\">\n                                    <mat-form-field>\n                                        <input matInput placeholder=\"Configuration\" formControlName=\"configuration\" />\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row row-3\">\n                                <mat-form-field class=\"quantity\">\n                                    <input matInput placeholder=\"Quantity\" required formControlName=\"quantity\" />\n                                    <mat-error *ngFor=\"let validation of validation_messages.quantity\">\n                                        <mat-error class=\"error-message\" *ngIf=\"displayError(item.get('quantity'), validation.type)\">{{validation.message}}</mat-error>\n                                    </mat-error>\n                                </mat-form-field>\n                                <mat-form-field>\n                                    <input matInput placeholder=\"Price\" required formControlName=\"unit_price\"/>\n                                    <mat-error *ngFor=\"let validation of validation_messages.price\">\n                                        <mat-error class=\"error-message\" *ngIf=\"displayError(item.get('unit_price'), validation.type)\">{{validation.message}}</mat-error>\n                                    </mat-error>\n                                </mat-form-field>\n                            </div>\n        \n                                \n                            <div class=\"row row-4\">\n                                    <mat-form-field>\n                                        <input matInput placeholder=\"Width\" formControlName=\"width\"/>\n                                    </mat-form-field>\n                                    <mat-form-field>\n                                        <input matInput placeholder=\"Depth\" formControlName=\"depth\"/>\n                                    </mat-form-field>\n                                    <mat-form-field>\n                                        <input matInput placeholder=\"Height\" formControlName=\"height\"/>\n                                    </mat-form-field>\n                            </div>\n                            <div class=\"row row-5\">\n                                <mat-form-field>\n                                    <textarea matInput placeholder=\"Comments\" formControlName=\"comments\"></textarea>\n                                </mat-form-field>\n                            </div>\n                            <!--\n                            <table>\n                                <tr>\n                                    <td>Description</td>\n                                    <td>\n                                        \n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>Quantity</td>\n                                    <td>\n                                        \n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>Price</td>\n                                    <td>\n                                        \n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>Width</td>\n                                    <td>\n                                        \n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>Depth</td>\n                                    <td>\n                                        \n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>Height</td>\n                                    <td>\n                                        \n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>Remarks</td>\n                                    <td>\n                                        <mat-form-field>\n                                            <textarea matInput [(ngModel)]=\"item.remarks\" formControlName=\"{{index}}-remarks\"></textarea>\n                                        </mat-form-field>\n                                    </td>\n                                </tr>\n                            </table>\n        \n                        -->\n                        </div>\n                        <button mat-fab color=\"warn\" (click)=\"removeItem(h)\">\n                            <i class=\"material-icons\">remove</i>\n                        </button>\n\n                </div>\n                    \n                \n            </mat-card-content>\n        </mat-card>\n        <!--\n        <div class=\"submit-container\">\n            <button type=\"submit\" class=\"submit\"  [disabled]=\"!form.valid\"><span>Create Quotation</span></button>\n        </div>\n    -->\n</mat-dialog-content>\n<mat-dialog-actions>\n    <div class=\"submit-container\">\n        <button type=\"submit\" class=\"submit\"  [disabled]=\"!form.valid\"><span>Create Acknowledgement</span></button>\n    </div>\n</mat-dialog-actions>\n</form>\n"

/***/ }),

/***/ "./src/app/orders/components/add-acknowledgement/add-acknowledgement.component.less":
/*!******************************************************************************************!*\
  !*** ./src/app/orders/components/add-acknowledgement/add-acknowledgement.component.less ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*general mixins*/\n.no-scrollbars {\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n}\n.no-scrollbars::-webkit-scrollbar {\n  display: none;\n}\n.flex {\n  display: flex;\n  display: -webkit-flex;\n}\n.translateZ {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  /* Other transform properties here */\n}\n/*\n@font-face {\n\tfont-family: 'raleway';\n\tsrc: url('assets/fonts/raleway_thin-webfont.eot');\n\tsrc: url('assets/fonts/raleway_thin-webfont.eot?#iefix') format('embedded-opentype'),\n\turl('assets/fonts/raleway_thin-webfont.woff') format('woff'), \n\turl('assets/fonts/raleway_thin-webfont.ttf') format('truetype'), \n\turl('assets/fonts/raleway_thin-webfont.svg') format('svg');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n*/\n.mat-dialog-title {\n  background: pink;\n}\nmat-dialog-content {\n  height: 95vh;\n}\nmat-dialog-content mat-card {\n  margin-bottom: 1em;\n}\nmat-dialog-content mat-card.order-details {\n  margin-bottom: 5em;\n}\nmat-dialog-content mat-card.order-details .container {\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: row;\n}\nmat-dialog-content mat-card.order-details .container.customer-container search-list {\n  width: 100%;\n}\nmat-dialog-content mat-card.order-details .container.address1 {\n  margin-top: 2em;\n}\nmat-dialog-content mat-card.order-details .container.address1 mat-form-field {\n  width: 100%;\n}\nmat-dialog-content mat-card.order-details .container.order {\n  margin-top: 2em;\n}\nmat-dialog-content mat-card.order-details .container.project search-list {\n  min-width: 20em;\n}\nmat-dialog-content mat-card.order-details .container mat-form-field {\n  margin-right: 1em;\n}\nmat-dialog-content mat-card.add-item mat-card-content {\n  display: flex;\n  display: -webkit-flex;\n}\nmat-dialog-content mat-card.add-item mat-card-content search-list {\n  margin-left: 2em;\n  min-width: 20em;\n  width: 60%;\n}\nmat-dialog-content mat-card.item-container mat-card-content {\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: column;\n  align-items: flex-start;\n  -webkit-align-items: flex-start;\n  justify-content: flex-start;\n  -webkit-justify-content: flex-start;\n}\nmat-dialog-content mat-card.item-container mat-card-content .item {\n  width: 100%;\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: row;\n  border-top: 1px solid #e6e6e6;\n}\nmat-dialog-content mat-card.item-container mat-card-content .item:first-child {\n  border-top: none;\n}\nmat-dialog-content mat-card.item-container mat-card-content .item .item-image-container {\n  min-width: 15em;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 15em;\n  display: flex;\n  display: -webkit-flex;\n  justify-content: space-around;\n  -webkit-justify-content: space-around;\n  align-items: middle;\n  -webkit-align-items: middle;\n}\nmat-dialog-content mat-card.item-container mat-card-content .item .item-image-container img {\n  max-height: 35em;\n  max-width: 100%;\n}\nmat-dialog-content mat-card.item-container mat-card-content .item .item-details-container {\n  width: 100%;\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: column;\n  border-left: 1px solid #e6e6e6;\n  padding: 2em 0 2em 1em;\n  margin-left: 1em;\n}\nmat-dialog-content mat-card.item-container mat-card-content .item .item-details-container .row {\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: row;\n}\nmat-dialog-content mat-card.item-container mat-card-content .item .item-details-container .row.row-1 mat-form-field {\n  min-width: 30em;\n}\nmat-dialog-content mat-card.item-container mat-card-content .item .item-details-container .row.row-3 mat-form-field.quantity {\n  width: 5em;\n}\nmat-dialog-content mat-card.item-container mat-card-content .item .item-details-container .row.row-4 mat-form-field {\n  width: 10em;\n}\nmat-dialog-content mat-card.item-container mat-card-content .item .item-details-container .row.row-5 mat-form-field {\n  max-width: 20em;\n  width: 20em;\n}\nmat-dialog-content mat-card.item-container mat-card-content .item .item-details-container .row mat-form-field {\n  margin-right: 1em;\n}\nmat-dialog-content mat-card.item-container mat-card-content .item .item-details-container table tr td:first-child {\n  text-align: right;\n}\nmat-dialog-content mat-card.item-container mat-card-content .item .item-details-container table tr td:last-child {\n  padding-left: 0.5em;\n}\nmat-dialog-content .submit-container {\n  width: 100%;\n  padding: 1em 0;\n  margin: 1em 0;\n  display: flex;\n  display: -webkit-flex;\n  justify-content: space-around;\n  -webkit-justify-content: space-around;\n}\nmat-dialog-content .submit-container button {\n  padding: 3em;\n  width: 70%;\n  background: green;\n  border-radius: 5px;\n  font-family: Roboto, 'Prompt', Raleway, raleway, Athiti, Tahoma, Arial;\n  color: #ffffff;\n  outline: none;\n  cursor: pointer;\n}\nmat-dialog-content .submit-container button[disabled] {\n  background: grey;\n  cursor: default;\n}\nmat-dialog-content .submit-container button span {\n  font-size: 2em;\n}\nmat-dialog-actions .submit-container {\n  width: 100%;\n  padding: 0.5em 0;\n  margin: 0.5em 0;\n  display: flex;\n  display: -webkit-flex;\n  justify-content: space-around;\n  -webkit-justify-content: space-around;\n}\nmat-dialog-actions .submit-container button {\n  padding: 1em;\n  width: 60%;\n  background: green;\n  border-radius: 5px;\n  font-family: Roboto, 'Prompt', Raleway, raleway, Athiti, Tahoma, Arial;\n  color: #ffffff;\n  outline: none;\n  cursor: pointer;\n}\nmat-dialog-actions .submit-container button[disabled] {\n  background: grey;\n  cursor: default;\n}\nmat-dialog-actions .submit-container button span {\n  font-size: 2em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzL2NvbXBvbmVudHMvYWRkLWFja25vd2xlZGdlbWVudC9hZGQtYWNrbm93bGVkZ2VtZW50LmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL0NoYXJsaWUvU2l0ZXMvZW1wbG95ZWUvYXRoZW5hL3NyYy9taXhpbnMubGVzcyIsIi9Vc2Vycy9DaGFybGllL1NpdGVzL2VtcGxveWVlL2F0aGVuYS9zcmMvYXBwL29yZGVycy9jb21wb25lbnRzL2FkZC1hY2tub3dsZWRnZW1lbnQvYWRkLWFja25vd2xlZGdlbWVudC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0I7QUNTbEI7RUFJQyw2Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7Q0RWQTtBQ0tBO0VBQ0MsY0FBQTtDREhEO0FDY0Q7RUFDQyxjQUFBO0VBQ0Esc0JBQUE7Q0RaQTtBQ3VDRDtFQUNDLHdDQUFBO0VBR0csZ0NBQUE7RURyQ0YscUNBQXFDO0NBQ3RDO0FBQ0Q7Ozs7Ozs7Ozs7O0VBV0U7QUUzQkY7RUFDSSxpQkFBQTtDRjZCSDtBRTFCRDtFQUNJLGFBQUE7Q0Y0Qkg7QUU3QkQ7RUFJUSxtQkFBQTtDRjRCUDtBRTFCTztFQUNJLG1CQUFBO0NGNEJYO0FFN0JPO0VEU1AsY0FBQTtFQUNBLHNCQUFBO0VBT0Esb0JBQUE7Q0RrQkE7QUU1QmU7RUFFUSxZQUFBO0NGNkJ2QjtBRXpCZTtFQUNJLGdCQUFBO0NGMkJuQjtBRTVCZTtFQUlRLFlBQUE7Q0YyQnZCO0FFcEJlO0VBQ0ksZ0JBQUE7Q0ZzQm5CO0FFbkJlO0VBRVEsZ0JBQUE7Q0ZvQnZCO0FFbERPO0VBbUNZLGtCQUFBO0NGa0JuQjtBRWJPO0VEL0JQLGNBQUE7RUFDQSxzQkFBQTtDRCtDQTtBRWpCTztFQUtZLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0NGZW5CO0FFVk87RUQzQ1AsY0FBQTtFQUNBLHNCQUFBO0VBT0EsdUJBQUE7RUFLQSx3QkFBQTtFQUNBLGdDQUFBO0VBSUEsNEJBQUE7RUFDQSxvQ0FBQTtDRDRDQTtBRXBCTztFQVFZLFlBQUE7RURuRG5CLGNBQUE7RUFDQSxzQkFBQTtFQU9BLG9CQUFBO0VDOENtQiw4QkFBQTtDRmlCbkI7QUVmbUI7RUFDSSxpQkFBQTtDRmlCdkI7QUUvQk87RUFrQmdCLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFRGpFdkIsY0FBQTtFQUNBLHNCQUFBO0VBaUJBLDhCQUFBO0VBQ0Esc0NBQUE7RUFOQSxvQkFBQTtFQUNBLDRCQUFBO0NEeUVBO0FFNUNPO0VBNEJvQixpQkFBQTtFQUNBLGdCQUFBO0NGbUIzQjtBRWhETztFQWtDZ0IsWUFBQTtFRDdFdkIsY0FBQTtFQUNBLHNCQUFBO0VBT0EsdUJBQUE7RUN3RXVCLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtDRm1CdkI7QUUxRE87RUQzQ1AsY0FBQTtFQUNBLHNCQUFBO0VBT0Esb0JBQUE7Q0RtR0E7QUVuQjJCO0VBRVEsZ0JBQUE7Q0ZvQm5DO0FFZG1DO0VBQ0ksV0FBQTtDRmdCdkM7QUVYMkI7RUFFUSxZQUFBO0NGWW5DO0FFUjJCO0VBRVEsZ0JBQUE7RUFDQSxZQUFBO0NGU25DO0FFN0VPO0VBeUV3QixrQkFBQTtDRk8vQjtBRUNtQztFQUNJLGtCQUFBO0NGQ3ZDO0FFRW1DO0VBQ0ksb0JBQUE7Q0ZBdkM7QUVoSkQ7RUFnS1EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VEbkpQLGNBQUE7RUFDQSxzQkFBQTtFQWlCQSw4QkFBQTtFQUNBLHNDQUFBO0NEdUhBO0FFekpEO0VBdUtZLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVFQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtDRlhYO0FFYVc7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0NGWGY7QUV2S0Q7RUFzTGdCLGVBQUE7Q0ZaZjtBRWtCRDtFQUVRLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VEakxQLGNBQUE7RUFDQSxzQkFBQTtFQWlCQSw4QkFBQTtFQUNBLHNDQUFBO0NEaUpBO0FFU0Q7RUFTWSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1RUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7Q0ZmWDtBRWlCVztFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7Q0ZmZjtBRUxEO0VBd0JnQixlQUFBO0NGaEJmIiwiZmlsZSI6InNyYy9hcHAvb3JkZXJzL2NvbXBvbmVudHMvYWRkLWFja25vd2xlZGdlbWVudC9hZGQtYWNrbm93bGVkZ2VtZW50LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLypnZW5lcmFsIG1peGlucyovXG4ubm8tc2Nyb2xsYmFycyB7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcbn1cbi5uby1zY3JvbGxiYXJzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbn1cbi50cmFuc2xhdGVaIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAvKiBPdGhlciB0cmFuc2Zvcm0gcHJvcGVydGllcyBoZXJlICovXG59XG4vKlxuQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiAncmFsZXdheSc7XG5cdHNyYzogdXJsKCdhc3NldHMvZm9udHMvcmFsZXdheV90aGluLXdlYmZvbnQuZW90Jyk7XG5cdHNyYzogdXJsKCdhc3NldHMvZm9udHMvcmFsZXdheV90aGluLXdlYmZvbnQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcblx0dXJsKCdhc3NldHMvZm9udHMvcmFsZXdheV90aGluLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpLCBcblx0dXJsKCdhc3NldHMvZm9udHMvcmFsZXdheV90aGluLXdlYmZvbnQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCBcblx0dXJsKCdhc3NldHMvZm9udHMvcmFsZXdheV90aGluLXdlYmZvbnQuc3ZnJykgZm9ybWF0KCdzdmcnKTtcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xufVxuKi9cbi5tYXQtZGlhbG9nLXRpdGxlIHtcbiAgYmFja2dyb3VuZDogcGluaztcbn1cbm1hdC1kaWFsb2ctY29udGVudCB7XG4gIGhlaWdodDogOTV2aDtcbn1cbm1hdC1kaWFsb2ctY29udGVudCBtYXQtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbm1hdC1kaWFsb2ctY29udGVudCBtYXQtY2FyZC5vcmRlci1kZXRhaWxzIHtcbiAgbWFyZ2luLWJvdHRvbTogNWVtO1xufVxubWF0LWRpYWxvZy1jb250ZW50IG1hdC1jYXJkLm9yZGVyLWRldGFpbHMgLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xufVxubWF0LWRpYWxvZy1jb250ZW50IG1hdC1jYXJkLm9yZGVyLWRldGFpbHMgLmNvbnRhaW5lci5jdXN0b21lci1jb250YWluZXIgc2VhcmNoLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cbm1hdC1kaWFsb2ctY29udGVudCBtYXQtY2FyZC5vcmRlci1kZXRhaWxzIC5jb250YWluZXIuYWRkcmVzczEge1xuICBtYXJnaW4tdG9wOiAyZW07XG59XG5tYXQtZGlhbG9nLWNvbnRlbnQgbWF0LWNhcmQub3JkZXItZGV0YWlscyAuY29udGFpbmVyLmFkZHJlc3MxIG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5tYXQtZGlhbG9nLWNvbnRlbnQgbWF0LWNhcmQub3JkZXItZGV0YWlscyAuY29udGFpbmVyLm9yZGVyIHtcbiAgbWFyZ2luLXRvcDogMmVtO1xufVxubWF0LWRpYWxvZy1jb250ZW50IG1hdC1jYXJkLm9yZGVyLWRldGFpbHMgLmNvbnRhaW5lci5wcm9qZWN0IHNlYXJjaC1saXN0IHtcbiAgbWluLXdpZHRoOiAyMGVtO1xufVxubWF0LWRpYWxvZy1jb250ZW50IG1hdC1jYXJkLm9yZGVyLWRldGFpbHMgLmNvbnRhaW5lciBtYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxubWF0LWRpYWxvZy1jb250ZW50IG1hdC1jYXJkLmFkZC1pdGVtIG1hdC1jYXJkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG59XG5tYXQtZGlhbG9nLWNvbnRlbnQgbWF0LWNhcmQuYWRkLWl0ZW0gbWF0LWNhcmQtY29udGVudCBzZWFyY2gtbGlzdCB7XG4gIG1hcmdpbi1sZWZ0OiAyZW07XG4gIG1pbi13aWR0aDogMjBlbTtcbiAgd2lkdGg6IDYwJTtcbn1cbm1hdC1kaWFsb2ctY29udGVudCBtYXQtY2FyZC5pdGVtLWNvbnRhaW5lciBtYXQtY2FyZC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxubWF0LWRpYWxvZy1jb250ZW50IG1hdC1jYXJkLml0ZW0tY29udGFpbmVyIG1hdC1jYXJkLWNvbnRlbnQgLml0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTZlNmU2O1xufVxubWF0LWRpYWxvZy1jb250ZW50IG1hdC1jYXJkLml0ZW0tY29udGFpbmVyIG1hdC1jYXJkLWNvbnRlbnQgLml0ZW06Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wOiBub25lO1xufVxubWF0LWRpYWxvZy1jb250ZW50IG1hdC1jYXJkLml0ZW0tY29udGFpbmVyIG1hdC1jYXJkLWNvbnRlbnQgLml0ZW0gLml0ZW0taW1hZ2UtY29udGFpbmVyIHtcbiAgbWluLXdpZHRoOiAxNWVtO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgd2lkdGg6IDE1ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBtaWRkbGU7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IG1pZGRsZTtcbn1cbm1hdC1kaWFsb2ctY29udGVudCBtYXQtY2FyZC5pdGVtLWNvbnRhaW5lciBtYXQtY2FyZC1jb250ZW50IC5pdGVtIC5pdGVtLWltYWdlLWNvbnRhaW5lciBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNWVtO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5tYXQtZGlhbG9nLWNvbnRlbnQgbWF0LWNhcmQuaXRlbS1jb250YWluZXIgbWF0LWNhcmQtY29udGVudCAuaXRlbSAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTZlNmU2O1xuICBwYWRkaW5nOiAyZW0gMCAyZW0gMWVtO1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxubWF0LWRpYWxvZy1jb250ZW50IG1hdC1jYXJkLml0ZW0tY29udGFpbmVyIG1hdC1jYXJkLWNvbnRlbnQgLml0ZW0gLml0ZW0tZGV0YWlscy1jb250YWluZXIgLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xufVxubWF0LWRpYWxvZy1jb250ZW50IG1hdC1jYXJkLml0ZW0tY29udGFpbmVyIG1hdC1jYXJkLWNvbnRlbnQgLml0ZW0gLml0ZW0tZGV0YWlscy1jb250YWluZXIgLnJvdy5yb3ctMSBtYXQtZm9ybS1maWVsZCB7XG4gIG1pbi13aWR0aDogMzBlbTtcbn1cbm1hdC1kaWFsb2ctY29udGVudCBtYXQtY2FyZC5pdGVtLWNvbnRhaW5lciBtYXQtY2FyZC1jb250ZW50IC5pdGVtIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIC5yb3cucm93LTMgbWF0LWZvcm0tZmllbGQucXVhbnRpdHkge1xuICB3aWR0aDogNWVtO1xufVxubWF0LWRpYWxvZy1jb250ZW50IG1hdC1jYXJkLml0ZW0tY29udGFpbmVyIG1hdC1jYXJkLWNvbnRlbnQgLml0ZW0gLml0ZW0tZGV0YWlscy1jb250YWluZXIgLnJvdy5yb3ctNCBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMGVtO1xufVxubWF0LWRpYWxvZy1jb250ZW50IG1hdC1jYXJkLml0ZW0tY29udGFpbmVyIG1hdC1jYXJkLWNvbnRlbnQgLml0ZW0gLml0ZW0tZGV0YWlscy1jb250YWluZXIgLnJvdy5yb3ctNSBtYXQtZm9ybS1maWVsZCB7XG4gIG1heC13aWR0aDogMjBlbTtcbiAgd2lkdGg6IDIwZW07XG59XG5tYXQtZGlhbG9nLWNvbnRlbnQgbWF0LWNhcmQuaXRlbS1jb250YWluZXIgbWF0LWNhcmQtY29udGVudCAuaXRlbSAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciAucm93IG1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG5tYXQtZGlhbG9nLWNvbnRlbnQgbWF0LWNhcmQuaXRlbS1jb250YWluZXIgbWF0LWNhcmQtY29udGVudCAuaXRlbSAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB0YWJsZSB0ciB0ZDpmaXJzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxubWF0LWRpYWxvZy1jb250ZW50IG1hdC1jYXJkLml0ZW0tY29udGFpbmVyIG1hdC1jYXJkLWNvbnRlbnQgLml0ZW0gLml0ZW0tZGV0YWlscy1jb250YWluZXIgdGFibGUgdHIgdGQ6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogMC41ZW07XG59XG5tYXQtZGlhbG9nLWNvbnRlbnQgLnN1Ym1pdC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMWVtIDA7XG4gIG1hcmdpbjogMWVtIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5tYXQtZGlhbG9nLWNvbnRlbnQgLnN1Ym1pdC1jb250YWluZXIgYnV0dG9uIHtcbiAgcGFkZGluZzogM2VtO1xuICB3aWR0aDogNzAlO1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCAnUHJvbXB0JywgUmFsZXdheSwgcmFsZXdheSwgQXRoaXRpLCBUYWhvbWEsIEFyaWFsO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxubWF0LWRpYWxvZy1jb250ZW50IC5zdWJtaXQtY29udGFpbmVyIGJ1dHRvbltkaXNhYmxlZF0ge1xuICBiYWNrZ3JvdW5kOiBncmV5O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5tYXQtZGlhbG9nLWNvbnRlbnQgLnN1Ym1pdC1jb250YWluZXIgYnV0dG9uIHNwYW4ge1xuICBmb250LXNpemU6IDJlbTtcbn1cbm1hdC1kaWFsb2ctYWN0aW9ucyAuc3VibWl0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjVlbSAwO1xuICBtYXJnaW46IDAuNWVtIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5tYXQtZGlhbG9nLWFjdGlvbnMgLnN1Ym1pdC1jb250YWluZXIgYnV0dG9uIHtcbiAgcGFkZGluZzogMWVtO1xuICB3aWR0aDogNjAlO1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCAnUHJvbXB0JywgUmFsZXdheSwgcmFsZXdheSwgQXRoaXRpLCBUYWhvbWEsIEFyaWFsO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxubWF0LWRpYWxvZy1hY3Rpb25zIC5zdWJtaXQtY29udGFpbmVyIGJ1dHRvbltkaXNhYmxlZF0ge1xuICBiYWNrZ3JvdW5kOiBncmV5O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5tYXQtZGlhbG9nLWFjdGlvbnMgLnN1Ym1pdC1jb250YWluZXIgYnV0dG9uIHNwYW4ge1xuICBmb250LXNpemU6IDJlbTtcbn1cbiIsIi8qZ2VuZXJhbCBtaXhpbnMqL1xuLnRyYW5zaXRpb24gKEBwcm9wOiBhbGw7IEB0aW1lOiAxczsgQGVhc2U6IGxpbmVhcjspe1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogQHByb3AgQHRpbWUgQGVhc2U7XG4gICAgLW1vei10cmFuc2l0aW9uOiBAcHJvcCBAdGltZSBAZWFzZTtcbiAgICAtby10cmFuc2l0aW9uOiBAcHJvcCBAdGltZSBAZWFzZTtcbiAgICAtbXMtdHJhbnNpdGlvbjogQHByb3AgQHRpbWUgQGVhc2U7XG4gICAgdHJhbnNpdGlvbjogQHByb3AgQHRpbWUgQGVhc2U7XG59XG5cbi5uby1zY3JvbGxiYXJze1xuXHQmOjotd2Via2l0LXNjcm9sbGJhciB7IFxuXHRcdGRpc3BsYXk6IG5vbmU7IFxuXHR9XG5cdC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xuXHQtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG5cdG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcbn1cbiAgXG4ub3BhY2l0eShAb3BhY2l0eTogMCl7XG4gICAgb3BhY2l0eTogQG9wYWNpdHk7XG59XG5cbi5mbGV4e1xuXHRkaXNwbGF5OmZsZXg7XG5cdGRpc3BsYXk6LXdlYmtpdC1mbGV4O1xuXHRcblx0Ly9taW4taGVpZ2h0OjA7XG5cdC8vbWluLXdpZHRoOjA7XG59XG5cbi5mbGV4LWRpcmVjdGlvbiAoQGRpcmVjdGlvbjpyb3cpIHtcblx0ZmxleC1kaXJlY3Rpb246IEBkaXJlY3Rpb247XG5cdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IEBkaXJlY3Rpb247XG59XG5cbi5hbGlnbi1pdGVtcyAoQGRpcmVjdGlvbjpjZW50ZXIpIHtcblx0YWxpZ24taXRlbXM6IEBkaXJlY3Rpb247XG5cdC13ZWJraXQtYWxpZ24taXRlbXM6IEBkaXJlY3Rpb247XG59XG5cbi5qdXN0aWZ5LWNvbnRlbnQgKEBkaXJlY3Rpb246Y2VudGVyKSB7XG5cdGp1c3RpZnktY29udGVudDogQGRpcmVjdGlvbjtcblx0LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IEBkaXJlY3Rpb247XG59XG5cbi5mbGV4LXdyYXAoQGZsZXgtd3JhcDpub3dyYXApIHtcblx0ZmxleC13cmFwOiBAZmxleC13cmFwO1xuXHQtd2Via2l0LWZsZXgtd3JhcDogQGZsZXgtd3JhcDtcbn1cblxuXG4udHJhbnNsYXRlWntcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgXHQtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICBcdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICBcdC8qIE90aGVyIHRyYW5zZm9ybSBwcm9wZXJ0aWVzIGhlcmUgKi9cbn1cbi8qXG5AZm9udC1mYWNlIHtcblx0Zm9udC1mYW1pbHk6ICdyYWxld2F5Jztcblx0c3JjOiB1cmwoJ2Fzc2V0cy9mb250cy9yYWxld2F5X3RoaW4td2ViZm9udC5lb3QnKTtcblx0c3JjOiB1cmwoJ2Fzc2V0cy9mb250cy9yYWxld2F5X3RoaW4td2ViZm9udC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuXHR1cmwoJ2Fzc2V0cy9mb250cy9yYWxld2F5X3RoaW4td2ViZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksIFxuXHR1cmwoJ2Fzc2V0cy9mb250cy9yYWxld2F5X3RoaW4td2ViZm9udC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIFxuXHR1cmwoJ2Fzc2V0cy9mb250cy9yYWxld2F5X3RoaW4td2ViZm9udC5zdmcnKSBmb3JtYXQoJ3N2ZycpO1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG59XG4qL1xuXG5Ac3RhbmRhcmRGb250RmFtaWx5OiBSb2JvdG8sICdQcm9tcHQnLCBSYWxld2F5LCByYWxld2F5LCBBdGhpdGksIFRhaG9tYSwgQXJpYWw7XG5cbiIsIlxuQGltcG9ydCAnLi4vLi4vLi4vLi4vbWl4aW5zLmxlc3MnO1xuXG5cbi5tYXQtZGlhbG9nLXRpdGxle1xuICAgIGJhY2tncm91bmQ6cGluaztcbn1cblxubWF0LWRpYWxvZy1jb250ZW50e1xuICAgIGhlaWdodDogOTV2aDtcblxuICAgIG1hdC1jYXJke1xuICAgICAgICBtYXJnaW4tYm90dG9tOjFlbTtcblxuICAgICAgICAmLm9yZGVyLWRldGFpbHN7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjVlbTtcblxuICAgICAgICAgICAgLmNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICAuZmxleDtcbiAgICAgICAgICAgICAgICAuZmxleC1kaXJlY3Rpb24ocm93KTtcblxuICAgICAgICAgICAgICAgICYuY3VzdG9tZXItY29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgICBzZWFyY2gtbGlzdHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmLmFkZHJlc3Mxe1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjJlbTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIG1hdC1mb3JtLWZpZWxke1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYub3JkZXJ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MmVtO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYucHJvamVjdHtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoLWxpc3R7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6MjBlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1hdC1mb3JtLWZpZWxke1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmFkZC1pdGVte1xuICAgICAgICAgICAgbWF0LWNhcmQtY29udGVudHtcbiAgICAgICAgICAgICAgICAuZmxleDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzZWFyY2gtbGlzdHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MmVtO1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDIwZW07XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjYwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLml0ZW0tY29udGFpbmVye1xuICAgICAgICAgICAgbWF0LWNhcmQtY29udGVudHtcbiAgICAgICAgICAgICAgICAuZmxleDtcbiAgICAgICAgICAgICAgICAuZmxleC1kaXJlY3Rpb24oY29sdW1uKTtcbiAgICAgICAgICAgICAgICAuYWxpZ24taXRlbXMoZmxleC1zdGFydCk7XG4gICAgICAgICAgICAgICAgLmp1c3RpZnktY29udGVudChmbGV4LXN0YXJ0KTtcblxuICAgICAgICAgICAgICAgIC5pdGVte1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgLmZsZXg7XG4gICAgICAgICAgICAgICAgICAgIC5mbGV4LWRpcmVjdGlvbihyb3cpO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOjFweCBzb2xpZCByZ2IoMjMwLCAyMzAsIDIzMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuaXRlbS1pbWFnZS1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6MTVlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjE1ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5qdXN0aWZ5LWNvbnRlbnQoc3BhY2UtYXJvdW5kKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hbGlnbi1pdGVtcyhtaWRkbGUpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6MzVlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLml0ZW0tZGV0YWlscy1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLmZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmxleC1kaXJlY3Rpb24oY29sdW1uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OjFweCBzb2xpZCByZ2IoMjMwLCAyMzAsIDIzMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjJlbSAwIDJlbSAxZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoxZW07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5yb3d7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZsZXgtZGlyZWN0aW9uKHJvdyk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5yb3ctMXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0LWZvcm0tZmllbGR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLnJvdy0ze1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXQtZm9ybS1maWVsZHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYucXVhbnRpdHl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6NWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYucm93LTR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdC1mb3JtLWZpZWxke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTBlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYucm93LTV7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdC1mb3JtLWZpZWxke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOjIwZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXQtZm9ybS1maWVsZHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjFlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRye1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjAuNWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zdWJtaXQtY29udGFpbmVye1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBwYWRkaW5nOjFlbSAwO1xuICAgICAgICBtYXJnaW46MWVtIDA7XG4gICAgICAgIC5mbGV4O1xuICAgICAgICAuanVzdGlmeS1jb250ZW50KHNwYWNlLWFyb3VuZCk7XG5cbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgcGFkZGluZzozZW07XG4gICAgICAgICAgICB3aWR0aDo3MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBAc3RhbmRhcmRGb250RmFtaWx5O1xuICAgICAgICAgICAgY29sb3I6cmdiKDI1NSwyNTUsMjU1KTtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAgICZbZGlzYWJsZWRde1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGdyZXk7XG4gICAgICAgICAgICAgICAgY3Vyc29yOmRlZmF1bHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1hdC1kaWFsb2ctYWN0aW9uc3tcbiAgICAuc3VibWl0LWNvbnRhaW5lcntcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgcGFkZGluZzowLjVlbSAwO1xuICAgICAgICBtYXJnaW46MC41ZW0gMDtcbiAgICAgICAgLmZsZXg7XG4gICAgICAgIC5qdXN0aWZ5LWNvbnRlbnQoc3BhY2UtYXJvdW5kKTtcblxuICAgICAgICBidXR0b257XG4gICAgICAgICAgICBwYWRkaW5nOjFlbTtcbiAgICAgICAgICAgIHdpZHRoOjYwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGdyZWVuO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEBzdGFuZGFyZEZvbnRGYW1pbHk7XG4gICAgICAgICAgICBjb2xvcjpyZ2IoMjU1LDI1NSwyNTUpO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgJltkaXNhYmxlZF17XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZ3JleTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6ZGVmYXVsdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/orders/components/add-acknowledgement/add-acknowledgement.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/orders/components/add-acknowledgement/add-acknowledgement.component.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var core_2 = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
var models_1 = __webpack_require__(/*! @app/core/models */ "./src/app/core/models/index.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var array_validators_1 = __webpack_require__(/*! @app/shared/validators/array-validators */ "./src/app/shared/validators/array-validators.ts");
var add_order_component_1 = __webpack_require__(/*! @app/shared/components/add-order/add-order.component */ "./src/app/shared/components/add-order/add-order.component.ts");
var AddAcknowledgementComponent = /** @class */ (function (_super) {
    __extends(AddAcknowledgementComponent, _super);
    function AddAcknowledgementComponent(acknowledgement, customer, customerService, upholstery, upholsteryService, project, projectService, fb, snackBar, dialogRef, dialogData) {
        var _this = _super.call(this, acknowledgement, customer, customerService, upholstery, upholsteryService, project, projectService, fb, snackBar, dialogRef) || this;
        _this.acknowledgement = acknowledgement;
        _this.customer = customer;
        _this.customerService = customerService;
        _this.upholstery = upholstery;
        _this.upholsteryService = upholsteryService;
        _this.project = project;
        _this.projectService = projectService;
        _this.fb = fb;
        _this.snackBar = snackBar;
        _this.dialogRef = dialogRef;
        _this.dialogData = dialogData;
        _this.form = _this.fb.group({
            customer: _this.fb.group({
                id: [null],
                name: ['', forms_1.Validators.required],
                telephone: ['', forms_1.Validators.required],
                email: [null],
                tax_id: [''],
                addresses: _this.fb.array([
                    _this.fb.group({
                        address1: [null],
                        city: [null],
                        territory: [null],
                        country: [null],
                        zipcode: [null]
                    })
                ]),
            }),
            project: _this.fb.group({
                id: [null],
                codename: [null],
            }),
            delivery_date: [null, forms_1.Validators.required],
            discount: [''],
            second_discount: [''],
            vat: [7, [forms_1.Validators.required, forms_1.Validators.min(0)]],
            remarks: [''],
            items: _this.fb.array([], array_validators_1.ArrayValidators.minLength(1))
        });
        _this._progress_check = {
            customer: false,
            project: false
        };
        /*
        customer.addresses = [{
          address1: null,
          territory: null,
          city: null,
          country: null,
          zipcode: null
        }];
        */
        _this.acknowledgement.items = [];
        _this.acknowledgement.customer = customer;
        _this.acknowledgement.customer.addresses = [new models_1.Address()];
        return _this;
    }
    AddAcknowledgementComponent.prototype.ngOnInit = function () {
        if (this.dialogData) {
            if (this.dialogData.quotation) {
                this._hydrateAcknowledgement(this.dialogData.quotation);
            }
        }
    };
    AddAcknowledgementComponent.prototype._hydrateAcknowledgement = function (quotation) {
        var _this = this;
        // Patch general
        this.getFormControl('vat').patchValue(quotation.vat);
        this.getFormControl('discount').patchValue(quotation.discount);
        this.getFormControl('second_discount').patchValue(quotation.second_discount);
        this.getFormControl('remarks').patchValue(quotation.remarks);
        // Patch Customer
        this.getFormGroup('customer').patchValue(quotation.customer);
        Object.assign(this.customer, quotation.customer);
        // Patch Project
        if (quotation.project) {
            this.getFormGroup('project').patchValue(quotation.project);
            Object.assign(this.project, quotation.project);
        }
        // Add Items
        if (quotation.items) {
            var items = quotation.items;
            items.forEach(function (item) {
                _this.items.push(_this.addQuotationItem(item));
            });
        }
    };
    AddAcknowledgementComponent.prototype.create = function () {
        var _this = this;
        if (this.form.valid) {
            this.form.disable();
            this.form.enable();
            var formVal = this.form.value;
            Object.assign(this.acknowledgement, formVal);
            // Recreate Customer
            var c = new models_1.Customer(this.customerService);
            Object.assign(c, formVal.customer);
            this.acknowledgement.customer = c;
            if (this.acknowledgement.customer instanceof models_1.Customer) {
                this.acknowledgement.customer.save(function () {
                    _this._progress_check.customer = true;
                    _this._create();
                });
            }
            // Recreate Project
            if (formVal.project.codename && formVal.project.codename !== '') {
                var p = new models_1.Project(this.projectService);
                Object.assign(p, formVal.project);
                this.acknowledgement.project = p;
                if (!this.acknowledgement.project.id) {
                    this.acknowledgement.project.save(function () {
                        _this._progress_check.project = true;
                        _this._create();
                    });
                }
                else {
                    this._progress_check.project = true;
                    this._create();
                }
            }
            else {
                delete formVal.project;
                delete this.acknowledgement.project;
                this._progress_check.project = true;
            }
        }
    };
    AddAcknowledgementComponent.prototype._create = function () {
        var _this = this;
        if (this._progress_check.project && this._progress_check.customer) {
            this.form.disable();
            this.snackBar.open('Creating Acknowledgement...', 'Dismiss');
            this.acknowledgement.save(function (res) {
                _this.snackBar.open('Acknowledgement Created', 'Dismiss', { duration: 3000 });
                _this.form.reset();
                _this.dialogRef.close(res);
            });
        }
    };
    AddAcknowledgementComponent.prototype.addQuotationItem = function (item) {
        var fg = this.fb.group({
            id: [item.product],
            description: [item.description, forms_1.Validators.required],
            unit_price: [item.unit_price, [forms_1.Validators.required, , forms_1.Validators.min(1)]],
            quantity: [item.quantity, [forms_1.Validators.required, , forms_1.Validators.min(1)]],
            width: [item.width],
            depth: [item.depth],
            height: [item.height],
            comments: [item.comments],
            product: [item.product],
            image: this.fb.group({
                id: [(item.image || { id: '' }).id],
                url: [(item.image || { url: '' }).url]
            })
        });
        return fg;
    };
    AddAcknowledgementComponent = __decorate([
        core_1.Component({
            template: __webpack_require__(/*! ./add-acknowledgement.component.html */ "./src/app/orders/components/add-acknowledgement/add-acknowledgement.component.html"),
            styles: [__webpack_require__(/*! ./add-acknowledgement.component.less */ "./src/app/orders/components/add-acknowledgement/add-acknowledgement.component.less")],
            providers: [models_1.Customer, models_1.Acknowledgement]
        }),
        __param(10, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [models_1.Acknowledgement,
            models_1.Customer,
            core_2.CustomerService,
            models_1.Upholstery,
            core_2.UpholsteryService,
            models_1.Project,
            core_2.ProjectService,
            forms_1.FormBuilder,
            material_1.MatSnackBar,
            material_1.MatDialogRef, Object])
    ], AddAcknowledgementComponent);
    return AddAcknowledgementComponent;
}(add_order_component_1.AddOrderComponent));
exports.AddAcknowledgementComponent = AddAcknowledgementComponent;


/***/ }),

/***/ "./src/app/orders/components/index.ts":
/*!********************************************!*\
  !*** ./src/app/orders/components/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./add-acknowledgement/add-acknowledgement.component */ "./src/app/orders/components/add-acknowledgement/add-acknowledgement.component.ts"));
__export(__webpack_require__(/*! ./acknowledgement-dialog/acknowledgement-dialog.component */ "./src/app/orders/components/acknowledgement-dialog/acknowledgement-dialog.component.ts"));


/***/ })

}]);
//# sourceMappingURL=default~acknowledgement-acknowledgement-module~orders-orders-module~quotation-quotation-module.js.map