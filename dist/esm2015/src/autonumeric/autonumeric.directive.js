/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class NgAutonumericDirective extends BasicInput {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b251bWVyaWMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXJmeS9uZy1hdXRvbnVtZXJpYy9zcmMvIiwic291cmNlcyI6WyJhdXRvbnVtZXJpYy9hdXRvbnVtZXJpYy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFDSCxpQkFBaUIsRUFDakIsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBQ04sU0FBUyxFQUlULFNBQVMsR0FFWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxXQUFXLE1BQU0sYUFBYSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EM0MsTUFBTSxPQUFPLHNCQUF1QixTQUFRLFVBQVU7Ozs7OztJQWVsRCxZQUFvQixFQUFxQixFQUFVLFFBQW1CLEVBQVUsS0FBaUI7UUFDN0YsS0FBSyxFQUFFLENBQUM7UUFEUSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBTmpHLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLGNBQVM7Ozs7UUFBRyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ2xCLENBQUMsRUFBQztRQUNGLGVBQVU7OztRQUFHLEdBQUcsRUFBRTtRQUNsQixDQUFDLEVBQUM7SUFJRixDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ1gsSUFBSSxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQzNCLE1BQU0sMklBQTJJLENBQUM7U0FDcko7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLElB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LEdBQUcsRUFBRSxDQUFDLHNCQUFzQixFQUFDO3dCQUNyRCxLQUFLLEVBQUUsSUFBSTtxQkFDZCxDQUFDO2FBQ0w7Ozs7WUF0RUcsaUJBQWlCO1lBVWpCLFNBQVM7WUFUVCxVQUFVOzs7c0JBd0VULEtBQUs7NEJBRUwsS0FBSztxQkFJTCxNQUFNOzJCQTZDTixZQUFZLFNBQUMsUUFBUSxFQUFFLENBQUMscUJBQXFCLENBQUM7NEJBa0I5QyxZQUFZLFNBQUMsTUFBTTs7OztJQXJFcEIseUNBQ3lCOztJQUN6QiwrQ0FDMEM7O0lBQzFDLDBDQUFjOztJQUNkLG1EQUE4Qjs7SUFDOUIsd0NBQzRCOztJQUM1QiwyQ0FDRTs7SUFDRiw0Q0FDRTs7Ozs7SUFFVSxvQ0FBNkI7Ozs7O0lBQUUsMENBQTJCOzs7OztJQUFFLHVDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAYXV0aG9yIEFiZGVsZ2hhbmkgQUlOT1VTU1xyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBmb3J3YXJkUmVmLFxyXG4gICAgSG9zdExpc3RlbmVyLFxyXG4gICAgSW5wdXQsXHJcbiAgICBPbkNoYW5nZXMsXHJcbiAgICBPbkRlc3Ryb3ksXHJcbiAgICBPbkluaXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBSZW5kZXJlcjIsXHJcbiAgICBTaW1wbGVDaGFuZ2VzLFxyXG4gICAgVmlld0NoaWxkLFxyXG4gICAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgICBEaXJlY3RpdmUsXHJcbiAgICBBZnRlclZpZXdJbml0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0F1dG9udW1lcmljT3B0aW9uc1NlbGVjdCB9IGZyb20gJy4vYXV0b251bWVyaWMtb3B0aW9ucy1zZWxlY3QnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCBBdXRvTnVtZXJpYyBmcm9tICdhdXRvbnVtZXJpYyc7XHJcbmltcG9ydCB7IEJhc2ljSW5wdXQgfSBmcm9tICcuL2Jhc2ljLWlucHV0JztcclxuXHJcblxyXG4vKipcclxuICogQWxsb3dlZCBUYWdcclxuICpcclxuICpcclxuYGBgXHJcbidpbnB1dCcsICdiJywgJ2NhcHRpb24nLCAnY2l0ZScsICdjb2RlJywgJ2NvbnN0JywgJ2RkJywgJ2RlbCcsICdkaXYnLCAnZGZuJywgJ2R0JywgJ2VtJywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ2lucycsICdrZGInLCAnbGFiZWwnLCAnbGknLCAnb3B0aW9uJywgJ291dHB1dCcsICdwJywgJ3EnLCAncycsICdzYW1wbGUnLCAnc3BhbicsICdzdHJvbmcnLCAndGQnLCAndGgnLCAndSdcclxuYGBgXHJcbiAqXHJcbiAqICoqKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG5gYGBcclxuPGlucHV0IFtuZ0F1dG9udW1lcmljXT1cIntcclxuICBkaWdpdEdyb3VwU2VwYXJhdG9yOiAnICcsXHJcbiAgZGVjaW1hbENoYXJhY3RlcjogJywnLFxyXG4gIGRlY2ltYWxDaGFyYWN0ZXJBbHRlcm5hdGl2ZTogJy4nLFxyXG4gIGN1cnJlbmN5U3ltYm9sOiAnXFx1MDBhMOKCrCcsXHJcbiAgY3VycmVuY3lTeW1ib2xQbGFjZW1lbnQ6ICdzJyxcclxuICByb3VuZGluZ01ldGhvZDogJ1UnLFxyXG4gIG1pbmltdW1WYWx1ZTogJzAnXHJcbn1cIiBbKG5nTW9kZWwpXT1cIm15TW9kZWxcIiAoZm9ybWF0KT1cIm9uRm9ybWF0KCRldmVudClcIihjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiIHBsYWNlaG9sZGVyPScnLz5cclxuXHJcbmBgYFxyXG4gKiBDb21wbGV0ZSBFeGFtcGxlOiBodHRwczovL3N0YWNrYmxpdHouY29tL2VkaXQvbmctYXV0b251bWVyaWNcclxuICpcclxuICogKioqXHJcbiAqXHJcbiAqIFRvIGdlbmVyYXRlIHNlbGVjdG9yXHJcbiAqXHJcbiAqXHJcbmBgYFxyXG5jb25zdCBhbGxvd2VkVGFnTGlzdCA9IFtcclxuICAnaW5wdXQnLCAnYicsICdjYXB0aW9uJywgJ2NpdGUnLCAnY29kZScsICdjb25zdCcsICdkZCcsICdkZWwnLCAnZGl2JywgJ2RmbicsICdkdCcsICdlbScsICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdpbnMnLCAna2RiJywgJ2xhYmVsJywgJ2xpJywgJ29wdGlvbicsICdvdXRwdXQnLCAncCcsICdxJywgJ3MnLCAnc2FtcGxlJywgJ3NwYW4nLCAnc3Ryb25nJywgJ3RkJywgJ3RoJywgJ3UnXHJcbl1cclxubGV0IHNlbGVjdG9yID0gYWxsb3dlZFRhZ0xpc3Quam9pbignW25nQXV0b251bWVyaWNdLCAnKSArICdbbmdBdXRvbnVtZXJpY10nO1xyXG5jb25zb2xlLmxvZyhzZWxlY3Rvcik7XHJcbmBgYFxyXG4gKlxyXG4qL1xyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnaW5wdXRbbmdBdXRvbnVtZXJpY10sIGJbbmdBdXRvbnVtZXJpY10sIGNhcHRpb25bbmdBdXRvbnVtZXJpY10sIGNpdGVbbmdBdXRvbnVtZXJpY10sIGNvZGVbbmdBdXRvbnVtZXJpY10sIGNvbnN0W25nQXV0b251bWVyaWNdLCBkZFtuZ0F1dG9udW1lcmljXSwgZGVsW25nQXV0b251bWVyaWNdLCBkaXZbbmdBdXRvbnVtZXJpY10sIGRmbltuZ0F1dG9udW1lcmljXSwgZHRbbmdBdXRvbnVtZXJpY10sIGVtW25nQXV0b251bWVyaWNdLCBoMVtuZ0F1dG9udW1lcmljXSwgaDJbbmdBdXRvbnVtZXJpY10sIGgzW25nQXV0b251bWVyaWNdLCBoNFtuZ0F1dG9udW1lcmljXSwgaDVbbmdBdXRvbnVtZXJpY10sIGg2W25nQXV0b251bWVyaWNdLCBpbnNbbmdBdXRvbnVtZXJpY10sIGtkYltuZ0F1dG9udW1lcmljXSwgbGFiZWxbbmdBdXRvbnVtZXJpY10sIGxpW25nQXV0b251bWVyaWNdLCBvcHRpb25bbmdBdXRvbnVtZXJpY10sIG91dHB1dFtuZ0F1dG9udW1lcmljXSwgcFtuZ0F1dG9udW1lcmljXSwgcVtuZ0F1dG9udW1lcmljXSwgc1tuZ0F1dG9udW1lcmljXSwgc2FtcGxlW25nQXV0b251bWVyaWNdLCBzcGFuW25nQXV0b251bWVyaWNdLCBzdHJvbmdbbmdBdXRvbnVtZXJpY10sIHRkW25nQXV0b251bWVyaWNdLCB0aFtuZ0F1dG9udW1lcmljXSwgdVtuZ0F1dG9udW1lcmljXScsXHJcbiAgICBleHBvcnRBczogJ25nQXV0b251bWVyaWMnLFxyXG4gICAgcHJvdmlkZXJzOiBbe1xyXG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5nQXV0b251bWVyaWNEaXJlY3RpdmUpLFxyXG4gICAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nQXV0b251bWVyaWNEaXJlY3RpdmUgZXh0ZW5kcyBCYXNpY0lucHV0IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBuZ01vZGVsOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgbmdBdXRvbnVtZXJpYzogTmdBdXRvbnVtZXJpY09wdGlvbnNTZWxlY3Q7XHJcbiAgICBpbnN0YW5jZTogYW55O1xyXG4gICAgdW5saXN0ZW5Gb3JtYXR0ZWQ6ICgpID0+IHZvaWQ7XHJcbiAgICBAT3V0cHV0KClcclxuICAgIGZvcm1hdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIF9vbkNoYW5nZSA9IChfKSA9PiB7XHJcbiAgICB9O1xyXG4gICAgX29uVG91Y2hlZCA9ICgpID0+IHtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBpbnB1dDogRWxlbWVudFJlZikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChBdXRvTnVtZXJpYyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IFwiQXV0b051bWVyaWMgaXMgYSBwZWVyIGRlcGVuZGVuY3ksIHBsZWFzZSBtYWtlIHN1cmUgeW91IGluc3RhbGwgaXQgYmVmb3JlIHVzaW5nIHRoaXMgbGlicmFyeS4gSGludCA6IG5wbSBpbnN0YWxsIC0tc2F2ZSBhdXRvbnVtZXJpY0BsYXRlc3RcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBBdXRvTnVtZXJpYyh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQsIHRoaXMubmdBdXRvbnVtZXJpYyk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNldCh0aGlzLm5nTW9kZWwpO1xyXG4gICAgICAgIH0sMCk7XHJcbiAgICAgICAgdGhpcy51bmxpc3RlbkZvcm1hdHRlZCA9IHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCwgJ2F1dG9OdW1lcmljOmZvcm1hdHRlZCcsICgkZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbkZvcm1hdHRlZCgkZXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hhbmdlcy5uZ01vZGVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0KHRoaXMubmdNb2RlbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGFuZ2VzLm5nQXV0b251bWVyaWMpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS51cGRhdGUodGhpcy5uZ0F1dG9udW1lcmljKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXQodmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB0aHJvdyAnTmdBdXRvbnVtZXJpYyBpbnN0YW5jZSBub3QgYXZhaWxhYmxlLiB0cnkgdXNpbmcgdHdvIGJpbmRpbmcgYnkgcHJvdmlkaW5nIFsobmdNb2RlbCldJztcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdjaGFuZ2UnLCBbJyRldmVudC50YXJnZXQudmFsdWUnXSlcclxuICAgIGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMud3JpdGVWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldE51bWJlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9vbkNoYW5nZSh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5fb25Ub3VjaGVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Gb3JtYXR0ZWQoJGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gJGV2ZW50O1xyXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRGb3JtYXR0ZWQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZvcm1hdC5lbWl0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdibHVyJylcclxuICAgIGhhbmRsZVRvdWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5fb25Ub3VjaGVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubmdNb2RlbCA9IG9iajtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy51bmxpc3RlbkZvcm1hdHRlZClcclxuICAgICAgICAgICAgdGhpcy51bmxpc3RlbkZvcm1hdHRlZCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==