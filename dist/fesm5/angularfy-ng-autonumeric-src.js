import { __extends } from 'tslib';
import AutoNumeric from 'autonumeric';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { Input, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, HostListener, Output, Renderer2, ViewChild, ViewEncapsulation, Directive, NgModule, Injectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BasicInput = /** @class */ (function () {
    function BasicInput() {
    }
    BasicInput.propDecorators = {
        required: [{ type: Input }],
        disabled: [{ type: Input }],
        readonly: [{ type: Input }],
        title: [{ type: Input }],
        placeholder: [{ type: Input }]
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
        _this.format = new EventEmitter();
        _this._onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
        });
        _this._onTouched = (/**
         * @return {?}
         */
        function () {
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
        this.unlistenFormatted = this.renderer.listen(this.input.nativeElement, 'autoNumeric:formatted', (/**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
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
        { type: Component, args: [{
                    selector: 'ng-autonumeric',
                    template: "<input #input [type]=\"!disabled && !readonly ? 'text' :'hidden'\" [placeholder]=\"placeholder || ''\" [title]=\"title || ''\" [required]=\"required\" />\r\n<ng-container *ngIf=\"disabled || readonly\">\r\n  <span> {{internal}}</span>\r\n</ng-container>",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NgAutonumericComponent; })),
                            multi: true
                        }],
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    NgAutonumericComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    NgAutonumericComponent.propDecorators = {
        ngModel: [{ type: Input }],
        options: [{ type: Input }],
        type: [{ type: Input }],
        input: [{ type: ViewChild, args: ['input',] }],
        format: [{ type: Output }],
        handleChange: [{ type: HostListener, args: ['change', ['$event.target.value'],] }],
        handleTouched: [{ type: HostListener, args: ['blur',] }]
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
        _this.format = new EventEmitter();
        _this._onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
        });
        _this._onTouched = (/**
         * @return {?}
         */
        function () {
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
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.instance.set(_this.ngModel);
        }), 0);
        this.unlistenFormatted = this.renderer.listen(this.input.nativeElement, 'autoNumeric:formatted', (/**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
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
        { type: Directive, args: [{
                    selector: 'input[ngAutonumeric], b[ngAutonumeric], caption[ngAutonumeric], cite[ngAutonumeric], code[ngAutonumeric], const[ngAutonumeric], dd[ngAutonumeric], del[ngAutonumeric], div[ngAutonumeric], dfn[ngAutonumeric], dt[ngAutonumeric], em[ngAutonumeric], h1[ngAutonumeric], h2[ngAutonumeric], h3[ngAutonumeric], h4[ngAutonumeric], h5[ngAutonumeric], h6[ngAutonumeric], ins[ngAutonumeric], kdb[ngAutonumeric], label[ngAutonumeric], li[ngAutonumeric], option[ngAutonumeric], output[ngAutonumeric], p[ngAutonumeric], q[ngAutonumeric], s[ngAutonumeric], sample[ngAutonumeric], span[ngAutonumeric], strong[ngAutonumeric], td[ngAutonumeric], th[ngAutonumeric], u[ngAutonumeric]',
                    exportAs: 'ngAutonumeric',
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NgAutonumericDirective; })),
                            multi: true
                        }],
                },] }
    ];
    /** @nocollapse */
    NgAutonumericDirective.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    NgAutonumericDirective.propDecorators = {
        ngModel: [{ type: Input }],
        ngAutonumeric: [{ type: Input }],
        format: [{ type: Output }],
        handleChange: [{ type: HostListener, args: ['change', ['$event.target.value'],] }],
        handleTouched: [{ type: HostListener, args: ['blur',] }]
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
        { type: NgModule, args: [{
                    declarations: [NgAutonumericComponent, NgAutonumericDirective],
                    imports: [CommonModule, FormsModule],
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
        { type: Injectable }
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgAutonumericComponent, NgAutonumericDirective, NgAutonumericModule, NgAutonumericService, BasicInput };

//# sourceMappingURL=angularfy-ng-autonumeric-src.js.map