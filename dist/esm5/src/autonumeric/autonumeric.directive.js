/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @author Abdelghani AINOUSS
 */
import { ChangeDetectorRef, ElementRef, EventEmitter, forwardRef, HostListener, Input, Output, Renderer2, Directive, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import AutoNumeric from 'autonumeric';
import { BasicInput } from './basic-input';
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
    tslib_1.__extends(NgAutonumericDirective, _super);
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
export { NgAutonumericDirective };
if (false) {
    /** @type {?} */
    NgAutonumericDirective.prototype.ngModel;
    /** @type {?} */
    NgAutonumericDirective.prototype.ngAutonumeric;
    /** @type {?} */
    NgAutonumericDirective.prototype.instance;
    /** @type {?} */
    NgAutonumericDirective.prototype.unlistenFormatted;
    /** @type {?} */
    NgAutonumericDirective.prototype.format;
    /** @type {?} */
    NgAutonumericDirective.prototype._onChange;
    /** @type {?} */
    NgAutonumericDirective.prototype._onTouched;
    /**
     * @type {?}
     * @private
     */
    NgAutonumericDirective.prototype.cd;
    /**
     * @type {?}
     * @private
     */
    NgAutonumericDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NgAutonumericDirective.prototype.input;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b251bWVyaWMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXJmeS9uZy1hdXRvbnVtZXJpYy9zcmMvIiwic291cmNlcyI6WyJhdXRvbnVtZXJpYy9hdXRvbnVtZXJpYy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQSxPQUFPLEVBQ0gsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUNOLFNBQVMsRUFJVCxTQUFTLEdBRVosTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sV0FBVyxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQzNDO0lBUzRDLGtEQUFVO0lBZWxELGdDQUFvQixFQUFxQixFQUFVLFFBQW1CLEVBQVUsS0FBaUI7UUFBakcsWUFDSSxpQkFBTyxTQUNWO1FBRm1CLFFBQUUsR0FBRixFQUFFLENBQW1CO1FBQVUsY0FBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLFdBQUssR0FBTCxLQUFLLENBQVk7UUFOakcsWUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsZUFBUzs7OztRQUFHLFVBQUMsQ0FBQztRQUNkLENBQUMsRUFBQztRQUNGLGdCQUFVOzs7UUFBRztRQUNiLENBQUMsRUFBQzs7SUFJRixDQUFDOzs7O0lBRUQseUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7OztJQUVELGdEQUFlOzs7SUFBZjtRQUFBLGlCQVdDO1FBVkcsSUFBSSxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQzNCLE1BQU0sMklBQTJJLENBQUM7U0FDcko7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksV0FBVyxD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RUFBRSxDQUFDOzRCQUNSLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLHNCQUFzQixFQUF0QixDQUFzQixFQUFDOzRCQUNyRCxLQUFLLEVBQUUsSUFBSTt5QkFDZCxDQUFDO2lCQUNMOzs7O2dCQXRFRyxpQkFBaUI7Z0JBVWpCLFNBQVM7Z0JBVFQsVUFBVTs7OzBCQXdFVCxLQUFLO2dDQUVMLEtBQUs7eUJBSUwsTUFBTTsrQkE2Q04sWUFBWSxTQUFDLFFBQVEsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dDQWtCOUMsWUFBWSxTQUFDLE1BQU07O0lBeUJ4Qiw2QkFBQztDQUFBLEFBekdELENBUzRDLFVBQVUsR0FnR3JEO1NBaEdZLHNCQUFzQjs7O0lBRS9CLHlDQUN5Qjs7SUFDekIsK0NBQzBDOztJQUMxQywwQ0FBYzs7SUFDZCxtREFBOEI7O0lBQzlCLHdDQUM0Qjs7SUFDNUIsMkNBQ0U7O0lBQ0YsNENBQ0U7Ozs7O0lBRVUsb0NBQTZCOzs7OztJQUFFLDBDQUEyQjs7Ozs7SUFBRSx1Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGF1dGhvciBBYmRlbGdoYW5pIEFJTk9VU1NcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgZm9yd2FyZFJlZixcclxuICAgIEhvc3RMaXN0ZW5lcixcclxuICAgIElucHV0LFxyXG4gICAgT25DaGFuZ2VzLFxyXG4gICAgT25EZXN0cm95LFxyXG4gICAgT25Jbml0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgUmVuZGVyZXIyLFxyXG4gICAgU2ltcGxlQ2hhbmdlcyxcclxuICAgIFZpZXdDaGlsZCxcclxuICAgIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gICAgRGlyZWN0aXZlLFxyXG4gICAgQWZ0ZXJWaWV3SW5pdCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdBdXRvbnVtZXJpY09wdGlvbnNTZWxlY3QgfSBmcm9tICcuL2F1dG9udW1lcmljLW9wdGlvbnMtc2VsZWN0JztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgQXV0b051bWVyaWMgZnJvbSAnYXV0b251bWVyaWMnO1xyXG5pbXBvcnQgeyBCYXNpY0lucHV0IH0gZnJvbSAnLi9iYXNpYy1pbnB1dCc7XHJcblxyXG5cclxuLyoqXHJcbiAqIEFsbG93ZWQgVGFnXHJcbiAqXHJcbiAqXHJcbmBgYFxyXG4naW5wdXQnLCAnYicsICdjYXB0aW9uJywgJ2NpdGUnLCAnY29kZScsICdjb25zdCcsICdkZCcsICdkZWwnLCAnZGl2JywgJ2RmbicsICdkdCcsICdlbScsICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdpbnMnLCAna2RiJywgJ2xhYmVsJywgJ2xpJywgJ29wdGlvbicsICdvdXRwdXQnLCAncCcsICdxJywgJ3MnLCAnc2FtcGxlJywgJ3NwYW4nLCAnc3Ryb25nJywgJ3RkJywgJ3RoJywgJ3UnXHJcbmBgYFxyXG4gKlxyXG4gKiAqKipcclxuICogQGV4YW1wbGVcclxuICpcclxuYGBgXHJcbjxpbnB1dCBbbmdBdXRvbnVtZXJpY109XCJ7XHJcbiAgZGlnaXRHcm91cFNlcGFyYXRvcjogJyAnLFxyXG4gIGRlY2ltYWxDaGFyYWN0ZXI6ICcsJyxcclxuICBkZWNpbWFsQ2hhcmFjdGVyQWx0ZXJuYXRpdmU6ICcuJyxcclxuICBjdXJyZW5jeVN5bWJvbDogJ1xcdTAwYTDigqwnLFxyXG4gIGN1cnJlbmN5U3ltYm9sUGxhY2VtZW50OiAncycsXHJcbiAgcm91bmRpbmdNZXRob2Q6ICdVJyxcclxuICBtaW5pbXVtVmFsdWU6ICcwJ1xyXG59XCIgWyhuZ01vZGVsKV09XCJteU1vZGVsXCIgKGZvcm1hdCk9XCJvbkZvcm1hdCgkZXZlbnQpXCIoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIiBwbGFjZWhvbGRlcj0nJy8+XHJcblxyXG5gYGBcclxuICogQ29tcGxldGUgRXhhbXBsZTogaHR0cHM6Ly9zdGFja2JsaXR6LmNvbS9lZGl0L25nLWF1dG9udW1lcmljXHJcbiAqXHJcbiAqICoqKlxyXG4gKlxyXG4gKiBUbyBnZW5lcmF0ZSBzZWxlY3RvclxyXG4gKlxyXG4gKlxyXG5gYGBcclxuY29uc3QgYWxsb3dlZFRhZ0xpc3QgPSBbXHJcbiAgJ2lucHV0JywgJ2InLCAnY2FwdGlvbicsICdjaXRlJywgJ2NvZGUnLCAnY29uc3QnLCAnZGQnLCAnZGVsJywgJ2RpdicsICdkZm4nLCAnZHQnLCAnZW0nLCAnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAnaW5zJywgJ2tkYicsICdsYWJlbCcsICdsaScsICdvcHRpb24nLCAnb3V0cHV0JywgJ3AnLCAncScsICdzJywgJ3NhbXBsZScsICdzcGFuJywgJ3N0cm9uZycsICd0ZCcsICd0aCcsICd1J1xyXG5dXHJcbmxldCBzZWxlY3RvciA9IGFsbG93ZWRUYWdMaXN0LmpvaW4oJ1tuZ0F1dG9udW1lcmljXSwgJykgKyAnW25nQXV0b251bWVyaWNdJztcclxuY29uc29sZS5sb2coc2VsZWN0b3IpO1xyXG5gYGBcclxuICpcclxuKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ2lucHV0W25nQXV0b251bWVyaWNdLCBiW25nQXV0b251bWVyaWNdLCBjYXB0aW9uW25nQXV0b251bWVyaWNdLCBjaXRlW25nQXV0b251bWVyaWNdLCBjb2RlW25nQXV0b251bWVyaWNdLCBjb25zdFtuZ0F1dG9udW1lcmljXSwgZGRbbmdBdXRvbnVtZXJpY10sIGRlbFtuZ0F1dG9udW1lcmljXSwgZGl2W25nQXV0b251bWVyaWNdLCBkZm5bbmdBdXRvbnVtZXJpY10sIGR0W25nQXV0b251bWVyaWNdLCBlbVtuZ0F1dG9udW1lcmljXSwgaDFbbmdBdXRvbnVtZXJpY10sIGgyW25nQXV0b251bWVyaWNdLCBoM1tuZ0F1dG9udW1lcmljXSwgaDRbbmdBdXRvbnVtZXJpY10sIGg1W25nQXV0b251bWVyaWNdLCBoNltuZ0F1dG9udW1lcmljXSwgaW5zW25nQXV0b251bWVyaWNdLCBrZGJbbmdBdXRvbnVtZXJpY10sIGxhYmVsW25nQXV0b251bWVyaWNdLCBsaVtuZ0F1dG9udW1lcmljXSwgb3B0aW9uW25nQXV0b251bWVyaWNdLCBvdXRwdXRbbmdBdXRvbnVtZXJpY10sIHBbbmdBdXRvbnVtZXJpY10sIHFbbmdBdXRvbnVtZXJpY10sIHNbbmdBdXRvbnVtZXJpY10sIHNhbXBsZVtuZ0F1dG9udW1lcmljXSwgc3BhbltuZ0F1dG9udW1lcmljXSwgc3Ryb25nW25nQXV0b251bWVyaWNdLCB0ZFtuZ0F1dG9udW1lcmljXSwgdGhbbmdBdXRvbnVtZXJpY10sIHVbbmdBdXRvbnVtZXJpY10nLFxyXG4gICAgZXhwb3J0QXM6ICduZ0F1dG9udW1lcmljJyxcclxuICAgIHByb3ZpZGVyczogW3tcclxuICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOZ0F1dG9udW1lcmljRGlyZWN0aXZlKSxcclxuICAgICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ0F1dG9udW1lcmljRGlyZWN0aXZlIGV4dGVuZHMgQmFzaWNJbnB1dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgbmdNb2RlbDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gICAgQElucHV0KClcclxuICAgIG5nQXV0b251bWVyaWM6IE5nQXV0b251bWVyaWNPcHRpb25zU2VsZWN0O1xyXG4gICAgaW5zdGFuY2U6IGFueTtcclxuICAgIHVubGlzdGVuRm9ybWF0dGVkOiAoKSA9PiB2b2lkO1xyXG4gICAgQE91dHB1dCgpXHJcbiAgICBmb3JtYXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBfb25DaGFuZ2UgPSAoXykgPT4ge1xyXG4gICAgfTtcclxuICAgIF9vblRvdWNoZWQgPSAoKSA9PiB7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgaW5wdXQ6IEVsZW1lbnRSZWYpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoQXV0b051bWVyaWMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBcIkF1dG9OdW1lcmljIGlzIGEgcGVlciBkZXBlbmRlbmN5LCBwbGVhc2UgbWFrZSBzdXJlIHlvdSBpbnN0YWxsIGl0IGJlZm9yZSB1c2luZyB0aGlzIGxpYnJhcnkuIEhpbnQgOiBucG0gaW5zdGFsbCAtLXNhdmUgYXV0b251bWVyaWNAbGF0ZXN0XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgQXV0b051bWVyaWModGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LCB0aGlzLm5nQXV0b251bWVyaWMpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXQodGhpcy5uZ01vZGVsKTtcclxuICAgICAgICB9LDApO1xyXG4gICAgICAgIHRoaXMudW5saXN0ZW5Gb3JtYXR0ZWQgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQsICdhdXRvTnVtZXJpYzpmb3JtYXR0ZWQnLCAoJGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25Gb3JtYXR0ZWQoJGV2ZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoYW5nZXMubmdNb2RlbCkge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNldCh0aGlzLm5nTW9kZWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hhbmdlcy5uZ0F1dG9udW1lcmljKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UudXBkYXRlKHRoaXMubmdBdXRvbnVtZXJpYyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldCh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0KHZhbHVlKTtcclxuICAgICAgICB9IGVsc2UgdGhyb3cgJ05nQXV0b251bWVyaWMgaW5zdGFuY2Ugbm90IGF2YWlsYWJsZS4gdHJ5IHVzaW5nIHR3byBiaW5kaW5nIGJ5IHByb3ZpZGluZyBbKG5nTW9kZWwpXSc7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignY2hhbmdlJywgWyckZXZlbnQudGFyZ2V0LnZhbHVlJ10pXHJcbiAgICBoYW5kbGVDaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICB0aGlzLndyaXRlVmFsdWUodmFsdWUpO1xyXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXROdW1iZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb25DaGFuZ2UodmFsdWUpO1xyXG4gICAgICAgIHRoaXMuX29uVG91Y2hlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRm9ybWF0dGVkKCRldmVudCkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9ICRldmVudDtcclxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0Rm9ybWF0dGVkKClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5mb3JtYXQuZW1pdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignYmx1cicpXHJcbiAgICBoYW5kbGVUb3VjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuX29uVG91Y2hlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5nTW9kZWwgPSBvYmo7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMudW5saXN0ZW5Gb3JtYXR0ZWQpXHJcbiAgICAgICAgICAgIHRoaXMudW5saXN0ZW5Gb3JtYXR0ZWQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=