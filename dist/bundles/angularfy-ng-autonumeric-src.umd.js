(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('autonumeric'), require('@angular/common'), require('@angular/forms'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('nga', ['exports', 'autonumeric', '@angular/common', '@angular/forms', '@angular/core'], factory) :
    (factory((global.nga = {}),global.AutoNumeric,global.ng.common,global.ng.forms,global.ng.core));
}(this, (function (exports,AutoNumeric,common,forms,core) { 'use strict';

    AutoNumeric = AutoNumeric && AutoNumeric.hasOwnProperty('default') ? AutoNumeric['default'] : AutoNumeric;

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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BasicInput = /** @class */ (function () {
        function BasicInput() {
        }
        BasicInput.propDecorators = {
            required: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            readonly: [{ type: core.Input }],
            title: [{ type: core.Input }],
            placeholder: [{ type: core.Input }]
        };
        return BasicInput;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgAutonumericComponent = /** @class */ (function (_super) {
        __extends(NgAutonumericComponent, _super);
        function NgAutonumericComponent(cd, renderer) {
            var _this = _super.call(this) || this;
            _this.cd = cd;
            _this.renderer = renderer;
            _this.format = new core.EventEmitter();
            _this._onChange = ( /**
             * @param {?} _
             * @return {?}
             */function (_) {
            });
            _this._onTouched = ( /**
             * @return {?}
             */function () {
            });
            return _this;
        }
        /**
         * @return {?}
         */
        NgAutonumericComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        NgAutonumericComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (AutoNumeric === undefined) {
                    throw "AutoNumeric is a peer dependency, please make sure you install it before using this library. Hint : npm install --save autonumeric@latest";
                }
                this.instance = new AutoNumeric(this.input.nativeElement, this.options);
                this.instance.set(this.ngModel);
                this.unlistenFormatted = this.renderer.listen(this.input.nativeElement, 'autoNumeric:formatted', ( /**
                 * @param {?} $event
                 * @return {?}
                 */function ($event) {
                    _this.onFormatted($event);
                }));
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgAutonumericComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (!this.instance) {
                    return;
                }
                if (changes.ngModel) {
                    this.instance.set(this.ngModel);
                }
                if (changes.options) {
                    this.instance.update(this.options);
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        NgAutonumericComponent.prototype.set = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (this.instance) {
                    this.instance.set(value);
                }
                else
                    throw 'NgAutonumeric instance not available. try using two binding by providing [(ngModel)]';
            };
        /**
         * @param {?} value
         * @return {?}
         */
        NgAutonumericComponent.prototype.handleChange = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.writeValue(value);
                if (this.instance) {
                    value = this.instance.getNumber();
                }
                this._onChange(value);
                this._onTouched();
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgAutonumericComponent.prototype.onFormatted = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                this.format.emit($event);
            };
        /**
         * @return {?}
         */
        NgAutonumericComponent.prototype.handleTouched = /**
         * @return {?}
         */
            function () {
                this._onTouched();
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        NgAutonumericComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this._onChange = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        NgAutonumericComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this._onTouched = fn;
            };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        NgAutonumericComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) {
                this.disabled = isDisabled;
            };
        /**
         * @param {?} obj
         * @return {?}
         */
        NgAutonumericComponent.prototype.writeValue = /**
         * @param {?} obj
         * @return {?}
         */
            function (obj) {
                if (this.instance) {
                    this.internal = this.instance.getFormatted();
                }
            };
        /**
         * @return {?}
         */
        NgAutonumericComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.unlistenFormatted)
                    this.unlistenFormatted();
            };
        NgAutonumericComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ng-autonumeric',
                        template: "<input #input [type]=\"!disabled && !readonly ? 'text' :'hidden'\" [placeholder]=\"placeholder || ''\" [title]=\"title || ''\" [required]=\"required\" />\r\n<ng-container *ngIf=\"disabled || readonly\">\r\n  <span> {{internal}}</span>\r\n</ng-container>",
                        providers: [{
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(( /**
                                 * @return {?}
                                 */function () { return NgAutonumericComponent; })),
                                multi: true
                            }],
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        NgAutonumericComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef },
                { type: core.Renderer2 }
            ];
        };
        NgAutonumericComponent.propDecorators = {
            ngModel: [{ type: core.Input }],
            options: [{ type: core.Input }],
            type: [{ type: core.Input }],
            input: [{ type: core.ViewChild, args: ['input',] }],
            format: [{ type: core.Output }],
            handleChange: [{ type: core.HostListener, args: ['change', ['$event.target.value'],] }],
            handleTouched: [{ type: core.HostListener, args: ['blur',] }]
        };
        return NgAutonumericComponent;
    }(BasicInput));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Allowed Tag
     *
     *
     * ```
     * 'input', 'b', 'caption', 'cite', 'code', 'const', 'dd', 'del', 'div', 'dfn', 'dt', 'em', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ins', 'kdb', 'label', 'li', 'option', 'output', 'p', 'q', 's', 'sample', 'span', 'strong', 'td', 'th', 'u'
     * ```
     *
     * ***
     * \@example
     *
     * ```
     * <input [ngAutonumeric]="{
     * digitGroupSeparator: ' ',
     * decimalCharacter: ',',
     * decimalCharacterAlternative: '.',
     * currencySymbol: '\u00a0€',
     * currencySymbolPlacement: 's',
     * roundingMethod: 'U',
     * minimumValue: '0'
     * }" [(ngModel)]="myModel" (format)="onFormat($event)"(change)="onChange($event)" placeholder=''/>
     * ```
     * Complete Example: https://stackblitz.com/edit/ng-autonumeric
     *
     * ***
     *
     * To generate selector
     *
     *
     * ```
     * const allowedTagList = [
     * 'input', 'b', 'caption', 'cite', 'code', 'const', 'dd', 'del', 'div', 'dfn', 'dt', 'em', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ins', 'kdb', 'label', 'li', 'option', 'output', 'p', 'q', 's', 'sample', 'span', 'strong', 'td', 'th', 'u'
     * ]
     * let selector = allowedTagList.join('[ngAutonumeric], ') + '[ngAutonumeric]';
     * console.log(selector);
     * ```
     *
     */
    var NgAutonumericDirective = /** @class */ (function (_super) {
        __extends(NgAutonumericDirective, _super);
        function NgAutonumericDirective(cd, renderer, input) {
            var _this = _super.call(this) || this;
            _this.cd = cd;
            _this.renderer = renderer;
            _this.input = input;
            _this.format = new core.EventEmitter();
            _this._onChange = ( /**
             * @param {?} _
             * @return {?}
             */function (_) {
            });
            _this._onTouched = ( /**
             * @return {?}
             */function () {
            });
            return _this;
        }
        /**
         * @return {?}
         */
        NgAutonumericDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        NgAutonumericDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (AutoNumeric === undefined) {
                    throw "AutoNumeric is a peer dependency, please make sure you install it before using this library. Hint : npm install --save autonumeric@latest";
                }
                this.instance = new AutoNumeric(this.input.nativeElement, this.ngAutonumeric);
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.instance.set(_this.ngModel);
                }), 0);
                this.unlistenFormatted = this.renderer.listen(this.input.nativeElement, 'autoNumeric:formatted', ( /**
                 * @param {?} $event
                 * @return {?}
                 */function ($event) {
                    _this.onFormatted($event);
                }));
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgAutonumericDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (!this.instance) {
                    return;
                }
                if (changes.ngModel) {
                    this.instance.set(this.ngModel);
                }
                if (changes.ngAutonumeric) {
                    this.instance.update(this.ngAutonumeric);
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        NgAutonumericDirective.prototype.set = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (this.instance) {
                    this.instance.set(value);
                }
                else
                    throw 'NgAutonumeric instance not available. try using two binding by providing [(ngModel)]';
            };
        /**
         * @param {?} value
         * @return {?}
         */
        NgAutonumericDirective.prototype.handleChange = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.writeValue(value);
                if (this.instance) {
                    value = this.instance.getNumber();
                }
                this._onChange(value);
                this._onTouched();
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgAutonumericDirective.prototype.onFormatted = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                /** @type {?} */
                var value = $event;
                if (this.instance) {
                    value = this.instance.getFormatted();
                }
                this.format.emit(value);
            };
        /**
         * @return {?}
         */
        NgAutonumericDirective.prototype.handleTouched = /**
         * @return {?}
         */
            function () {
                this._onTouched();
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        NgAutonumericDirective.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this._onChange = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        NgAutonumericDirective.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this._onTouched = fn;
            };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        NgAutonumericDirective.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) {
                this.disabled = isDisabled;
            };
        /**
         * @param {?} obj
         * @return {?}
         */
        NgAutonumericDirective.prototype.writeValue = /**
         * @param {?} obj
         * @return {?}
         */
            function (obj) {
                this.ngModel = obj;
            };
        /**
         * @return {?}
         */
        NgAutonumericDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.unlistenFormatted)
                    this.unlistenFormatted();
            };
        NgAutonumericDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'input[ngAutonumeric], b[ngAutonumeric], caption[ngAutonumeric], cite[ngAutonumeric], code[ngAutonumeric], const[ngAutonumeric], dd[ngAutonumeric], del[ngAutonumeric], div[ngAutonumeric], dfn[ngAutonumeric], dt[ngAutonumeric], em[ngAutonumeric], h1[ngAutonumeric], h2[ngAutonumeric], h3[ngAutonumeric], h4[ngAutonumeric], h5[ngAutonumeric], h6[ngAutonumeric], ins[ngAutonumeric], kdb[ngAutonumeric], label[ngAutonumeric], li[ngAutonumeric], option[ngAutonumeric], output[ngAutonumeric], p[ngAutonumeric], q[ngAutonumeric], s[ngAutonumeric], sample[ngAutonumeric], span[ngAutonumeric], strong[ngAutonumeric], td[ngAutonumeric], th[ngAutonumeric], u[ngAutonumeric]',
                        exportAs: 'ngAutonumeric',
                        providers: [{
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(( /**
                                 * @return {?}
                                 */function () { return NgAutonumericDirective; })),
                                multi: true
                            }],
                    },] }
        ];
        /** @nocollapse */
        NgAutonumericDirective.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef },
                { type: core.Renderer2 },
                { type: core.ElementRef }
            ];
        };
        NgAutonumericDirective.propDecorators = {
            ngModel: [{ type: core.Input }],
            ngAutonumeric: [{ type: core.Input }],
            format: [{ type: core.Output }],
            handleChange: [{ type: core.HostListener, args: ['change', ['$event.target.value'],] }],
            handleTouched: [{ type: core.HostListener, args: ['blur',] }]
        };
        return NgAutonumericDirective;
    }(BasicInput));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgAutonumericModule = /** @class */ (function () {
        function NgAutonumericModule() {
        }
        NgAutonumericModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NgAutonumericComponent, NgAutonumericDirective],
                        imports: [common.CommonModule, forms.FormsModule],
                        exports: [NgAutonumericComponent, NgAutonumericDirective]
                    },] }
        ];
        return NgAutonumericModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgAutonumericService = /** @class */ (function () {
        function NgAutonumericService() {
        }
        NgAutonumericService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        NgAutonumericService.ctorParameters = function () { return []; };
        return NgAutonumericService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NgAutonumericComponent = NgAutonumericComponent;
    exports.NgAutonumericDirective = NgAutonumericDirective;
    exports.NgAutonumericModule = NgAutonumericModule;
    exports.NgAutonumericService = NgAutonumericService;
    exports.BasicInput = BasicInput;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=angularfy-ng-autonumeric-src.umd.js.map