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
class BasicInput {
}
BasicInput.propDecorators = {
    required: [{ type: Input }],
    disabled: [{ type: Input }],
    readonly: [{ type: Input }],
    title: [{ type: Input }],
    placeholder: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgAutonumericComponent extends BasicInput {
    /**
     * @param {?} cd
     * @param {?} renderer
     */
    constructor(cd, renderer) {
        super();
        this.cd = cd;
        this.renderer = renderer;
        this.format = new EventEmitter();
        this._onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => {
        });
        this._onTouched = (/**
         * @return {?}
         */
        () => {
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (AutoNumeric === undefined) {
            throw "AutoNumeric is a peer dependency, please make sure you install it before using this library. Hint : npm install --save autonumeric@latest";
        }
        this.instance = new AutoNumeric(this.input.nativeElement, this.options);
        this.instance.set(this.ngModel);
        this.unlistenFormatted = this.renderer.listen(this.input.nativeElement, 'autoNumeric:formatted', (/**
         * @param {?} $event
         * @return {?}
         */
        ($event) => {
            this.onFormatted($event);
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this.instance) {
            return;
        }
        if (changes.ngModel) {
            this.instance.set(this.ngModel);
        }
        if (changes.options) {
            this.instance.update(this.options);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set(value) {
        if (this.instance) {
            this.instance.set(value);
        }
        else
            throw 'NgAutonumeric instance not available. try using two binding by providing [(ngModel)]';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    handleChange(value) {
        this.writeValue(value);
        if (this.instance) {
            value = this.instance.getNumber();
        }
        this._onChange(value);
        this._onTouched();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onFormatted($event) {
        this.format.emit($event);
    }
    /**
     * @return {?}
     */
    handleTouched() {
        this._onTouched();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        if (this.instance) {
            this.internal = this.instance.getFormatted();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.unlistenFormatted)
            this.unlistenFormatted();
    }
}
NgAutonumericComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-autonumeric',
                template: "<input #input [type]=\"!disabled && !readonly ? 'text' :'hidden'\" [placeholder]=\"placeholder || ''\" [title]=\"title || ''\" [required]=\"required\" />\r\n<ng-container *ngIf=\"disabled || readonly\">\r\n  <span> {{internal}}</span>\r\n</ng-container>",
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => NgAutonumericComponent)),
                        multi: true
                    }],
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
NgAutonumericComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
NgAutonumericComponent.propDecorators = {
    ngModel: [{ type: Input }],
    options: [{ type: Input }],
    type: [{ type: Input }],
    input: [{ type: ViewChild, args: ['input',] }],
    format: [{ type: Output }],
    handleChange: [{ type: HostListener, args: ['change', ['$event.target.value'],] }],
    handleTouched: [{ type: HostListener, args: ['blur',] }]
};

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
class NgAutonumericDirective extends BasicInput {
    /**
     * @param {?} cd
     * @param {?} renderer
     * @param {?} input
     */
    constructor(cd, renderer, input) {
        super();
        this.cd = cd;
        this.renderer = renderer;
        this.input = input;
        this.format = new EventEmitter();
        this._onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => {
        });
        this._onTouched = (/**
         * @return {?}
         */
        () => {
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (AutoNumeric === undefined) {
            throw "AutoNumeric is a peer dependency, please make sure you install it before using this library. Hint : npm install --save autonumeric@latest";
        }
        this.instance = new AutoNumeric(this.input.nativeElement, this.ngAutonumeric);
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.instance.set(this.ngModel);
        }), 0);
        this.unlistenFormatted = this.renderer.listen(this.input.nativeElement, 'autoNumeric:formatted', (/**
         * @param {?} $event
         * @return {?}
         */
        ($event) => {
            this.onFormatted($event);
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this.instance) {
            return;
        }
        if (changes.ngModel) {
            this.instance.set(this.ngModel);
        }
        if (changes.ngAutonumeric) {
            this.instance.update(this.ngAutonumeric);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set(value) {
        if (this.instance) {
            this.instance.set(value);
        }
        else
            throw 'NgAutonumeric instance not available. try using two binding by providing [(ngModel)]';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    handleChange(value) {
        this.writeValue(value);
        if (this.instance) {
            value = this.instance.getNumber();
        }
        this._onChange(value);
        this._onTouched();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onFormatted($event) {
        /** @type {?} */
        let value = $event;
        if (this.instance) {
            value = this.instance.getFormatted();
        }
        this.format.emit(value);
    }
    /**
     * @return {?}
     */
    handleTouched() {
        this._onTouched();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        this.ngModel = obj;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.unlistenFormatted)
            this.unlistenFormatted();
    }
}
NgAutonumericDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[ngAutonumeric], b[ngAutonumeric], caption[ngAutonumeric], cite[ngAutonumeric], code[ngAutonumeric], const[ngAutonumeric], dd[ngAutonumeric], del[ngAutonumeric], div[ngAutonumeric], dfn[ngAutonumeric], dt[ngAutonumeric], em[ngAutonumeric], h1[ngAutonumeric], h2[ngAutonumeric], h3[ngAutonumeric], h4[ngAutonumeric], h5[ngAutonumeric], h6[ngAutonumeric], ins[ngAutonumeric], kdb[ngAutonumeric], label[ngAutonumeric], li[ngAutonumeric], option[ngAutonumeric], output[ngAutonumeric], p[ngAutonumeric], q[ngAutonumeric], s[ngAutonumeric], sample[ngAutonumeric], span[ngAutonumeric], strong[ngAutonumeric], td[ngAutonumeric], th[ngAutonumeric], u[ngAutonumeric]',
                exportAs: 'ngAutonumeric',
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => NgAutonumericDirective)),
                        multi: true
                    }],
            },] }
];
/** @nocollapse */
NgAutonumericDirective.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: ElementRef }
];
NgAutonumericDirective.propDecorators = {
    ngModel: [{ type: Input }],
    ngAutonumeric: [{ type: Input }],
    format: [{ type: Output }],
    handleChange: [{ type: HostListener, args: ['change', ['$event.target.value'],] }],
    handleTouched: [{ type: HostListener, args: ['blur',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgAutonumericModule {
}
NgAutonumericModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgAutonumericComponent, NgAutonumericDirective],
                imports: [CommonModule, FormsModule],
                exports: [NgAutonumericComponent, NgAutonumericDirective]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgAutonumericService {
    constructor() {
    }
}
NgAutonumericService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NgAutonumericService.ctorParameters = () => [];

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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgAutonumericComponent, NgAutonumericDirective, NgAutonumericModule, NgAutonumericService, BasicInput };

//# sourceMappingURL=angularfy-ng-autonumeric.js.map