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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b251bWVyaWMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXJmeS9uZy1hdXRvbnVtZXJpYy8iLCJzb3VyY2VzIjpbImF1dG9udW1lcmljL2F1dG9udW1lcmljLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUNILGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEVBSVQsU0FBUyxHQUVaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLFdBQVcsTUFBTSxhQUFhLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUQzQyxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsVUFBVTs7Ozs7O0lBZWxELFlBQW9CLEVBQXFCLEVBQVUsUUFBbUIsRUFBVSxLQUFpQjtRQUM3RixLQUFLLEVBQUUsQ0FBQztRQURRLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLFVBQUssR0FBTCxLQUFLLENBQVk7UUFOakcsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsY0FBUzs7OztRQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDbEIsQ0FBQyxFQUFDO1FBQ0YsZUFBVTs7O1FBQUcsR0FBRyxFQUFFO1FBQ2xCLENBQUMsRUFBQztJQUlGLENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELGVBQWU7UUFDWCxJQUFJLFdBQVcsS0FBSyxTQUFTLEVBQUU7WUFDM0IsTUFBTSwySUFBMkksQ0FBQztTQUNySjtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxX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RyxFQUFFLENBQUMsc0JBQXNCLEVBQUM7d0JBQ3JELEtBQUssRUFBRSxJQUFJO3FCQUNkLENBQUM7YUFDTDs7OztZQXRFRyxpQkFBaUI7WUFVakIsU0FBUztZQVRULFVBQVU7OztzQkF3RVQsS0FBSzs0QkFFTCxLQUFLO3FCQUlMLE1BQU07MkJBNkNOLFlBQVksU0FBQyxRQUFRLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzs0QkFrQjlDLFlBQVksU0FBQyxNQUFNOzs7O0lBckVwQix5Q0FDeUI7O0lBQ3pCLCtDQUMwQzs7SUFDMUMsMENBQWM7O0lBQ2QsbURBQThCOztJQUM5Qix3Q0FDNEI7O0lBQzVCLDJDQUNFOztJQUNGLDRDQUNFOzs7OztJQUVVLG9DQUE2Qjs7Ozs7SUFBRSwwQ0FBMkI7Ozs7O0lBQUUsdUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBhdXRob3IgQWJkZWxnaGFuaSBBSU5PVVNTXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIGZvcndhcmRSZWYsXHJcbiAgICBIb3N0TGlzdGVuZXIsXHJcbiAgICBJbnB1dCxcclxuICAgIE9uQ2hhbmdlcyxcclxuICAgIE9uRGVzdHJveSxcclxuICAgIE9uSW5pdCxcclxuICAgIE91dHB1dCxcclxuICAgIFJlbmRlcmVyMixcclxuICAgIFNpbXBsZUNoYW5nZXMsXHJcbiAgICBWaWV3Q2hpbGQsXHJcbiAgICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICAgIERpcmVjdGl2ZSxcclxuICAgIEFmdGVyVmlld0luaXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQXV0b251bWVyaWNPcHRpb25zU2VsZWN0IH0gZnJvbSAnLi9hdXRvbnVtZXJpYy1vcHRpb25zLXNlbGVjdCc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IEF1dG9OdW1lcmljIGZyb20gJ2F1dG9udW1lcmljJztcclxuaW1wb3J0IHsgQmFzaWNJbnB1dCB9IGZyb20gJy4vYmFzaWMtaW5wdXQnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBBbGxvd2VkIFRhZ1xyXG4gKlxyXG4gKlxyXG5gYGBcclxuJ2lucHV0JywgJ2InLCAnY2FwdGlvbicsICdjaXRlJywgJ2NvZGUnLCAnY29uc3QnLCAnZGQnLCAnZGVsJywgJ2RpdicsICdkZm4nLCAnZHQnLCAnZW0nLCAnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAnaW5zJywgJ2tkYicsICdsYWJlbCcsICdsaScsICdvcHRpb24nLCAnb3V0cHV0JywgJ3AnLCAncScsICdzJywgJ3NhbXBsZScsICdzcGFuJywgJ3N0cm9uZycsICd0ZCcsICd0aCcsICd1J1xyXG5gYGBcclxuICpcclxuICogKioqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbmBgYFxyXG48aW5wdXQgW25nQXV0b251bWVyaWNdPVwie1xyXG4gIGRpZ2l0R3JvdXBTZXBhcmF0b3I6ICcgJyxcclxuICBkZWNpbWFsQ2hhcmFjdGVyOiAnLCcsXHJcbiAgZGVjaW1hbENoYXJhY3RlckFsdGVybmF0aXZlOiAnLicsXHJcbiAgY3VycmVuY3lTeW1ib2w6ICdcXHUwMGEw4oKsJyxcclxuICBjdXJyZW5jeVN5bWJvbFBsYWNlbWVudDogJ3MnLFxyXG4gIHJvdW5kaW5nTWV0aG9kOiAnVScsXHJcbiAgbWluaW11bVZhbHVlOiAnMCdcclxufVwiIFsobmdNb2RlbCldPVwibXlNb2RlbFwiIChmb3JtYXQpPVwib25Gb3JtYXQoJGV2ZW50KVwiKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCIgcGxhY2Vob2xkZXI9JycvPlxyXG5cclxuYGBgXHJcbiAqIENvbXBsZXRlIEV4YW1wbGU6IGh0dHBzOi8vc3RhY2tibGl0ei5jb20vZWRpdC9uZy1hdXRvbnVtZXJpY1xyXG4gKlxyXG4gKiAqKipcclxuICpcclxuICogVG8gZ2VuZXJhdGUgc2VsZWN0b3JcclxuICpcclxuICpcclxuYGBgXHJcbmNvbnN0IGFsbG93ZWRUYWdMaXN0ID0gW1xyXG4gICdpbnB1dCcsICdiJywgJ2NhcHRpb24nLCAnY2l0ZScsICdjb2RlJywgJ2NvbnN0JywgJ2RkJywgJ2RlbCcsICdkaXYnLCAnZGZuJywgJ2R0JywgJ2VtJywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ2lucycsICdrZGInLCAnbGFiZWwnLCAnbGknLCAnb3B0aW9uJywgJ291dHB1dCcsICdwJywgJ3EnLCAncycsICdzYW1wbGUnLCAnc3BhbicsICdzdHJvbmcnLCAndGQnLCAndGgnLCAndSdcclxuXVxyXG5sZXQgc2VsZWN0b3IgPSBhbGxvd2VkVGFnTGlzdC5qb2luKCdbbmdBdXRvbnVtZXJpY10sICcpICsgJ1tuZ0F1dG9udW1lcmljXSc7XHJcbmNvbnNvbGUubG9nKHNlbGVjdG9yKTtcclxuYGBgXHJcbiAqXHJcbiovXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdpbnB1dFtuZ0F1dG9udW1lcmljXSwgYltuZ0F1dG9udW1lcmljXSwgY2FwdGlvbltuZ0F1dG9udW1lcmljXSwgY2l0ZVtuZ0F1dG9udW1lcmljXSwgY29kZVtuZ0F1dG9udW1lcmljXSwgY29uc3RbbmdBdXRvbnVtZXJpY10sIGRkW25nQXV0b251bWVyaWNdLCBkZWxbbmdBdXRvbnVtZXJpY10sIGRpdltuZ0F1dG9udW1lcmljXSwgZGZuW25nQXV0b251bWVyaWNdLCBkdFtuZ0F1dG9udW1lcmljXSwgZW1bbmdBdXRvbnVtZXJpY10sIGgxW25nQXV0b251bWVyaWNdLCBoMltuZ0F1dG9udW1lcmljXSwgaDNbbmdBdXRvbnVtZXJpY10sIGg0W25nQXV0b251bWVyaWNdLCBoNVtuZ0F1dG9udW1lcmljXSwgaDZbbmdBdXRvbnVtZXJpY10sIGluc1tuZ0F1dG9udW1lcmljXSwga2RiW25nQXV0b251bWVyaWNdLCBsYWJlbFtuZ0F1dG9udW1lcmljXSwgbGlbbmdBdXRvbnVtZXJpY10sIG9wdGlvbltuZ0F1dG9udW1lcmljXSwgb3V0cHV0W25nQXV0b251bWVyaWNdLCBwW25nQXV0b251bWVyaWNdLCBxW25nQXV0b251bWVyaWNdLCBzW25nQXV0b251bWVyaWNdLCBzYW1wbGVbbmdBdXRvbnVtZXJpY10sIHNwYW5bbmdBdXRvbnVtZXJpY10sIHN0cm9uZ1tuZ0F1dG9udW1lcmljXSwgdGRbbmdBdXRvbnVtZXJpY10sIHRoW25nQXV0b251bWVyaWNdLCB1W25nQXV0b251bWVyaWNdJyxcclxuICAgIGV4cG9ydEFzOiAnbmdBdXRvbnVtZXJpYycsXHJcbiAgICBwcm92aWRlcnM6IFt7XHJcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmdBdXRvbnVtZXJpY0RpcmVjdGl2ZSksXHJcbiAgICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdBdXRvbnVtZXJpY0RpcmVjdGl2ZSBleHRlbmRzIEJhc2ljSW5wdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIG5nTW9kZWw6IG51bWJlciB8IHN0cmluZztcclxuICAgIEBJbnB1dCgpXHJcbiAgICBuZ0F1dG9udW1lcmljOiBOZ0F1dG9udW1lcmljT3B0aW9uc1NlbGVjdDtcclxuICAgIGluc3RhbmNlOiBhbnk7XHJcbiAgICB1bmxpc3RlbkZvcm1hdHRlZDogKCkgPT4gdm9pZDtcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgZm9ybWF0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgX29uQ2hhbmdlID0gKF8pID0+IHtcclxuICAgIH07XHJcbiAgICBfb25Ub3VjaGVkID0gKCkgPT4ge1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGlucHV0OiBFbGVtZW50UmVmKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKEF1dG9OdW1lcmljID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgXCJBdXRvTnVtZXJpYyBpcyBhIHBlZXIgZGVwZW5kZW5jeSwgcGxlYXNlIG1ha2Ugc3VyZSB5b3UgaW5zdGFsbCBpdCBiZWZvcmUgdXNpbmcgdGhpcyBsaWJyYXJ5LiBIaW50IDogbnBtIGluc3RhbGwgLS1zYXZlIGF1dG9udW1lcmljQGxhdGVzdFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IEF1dG9OdW1lcmljKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCwgdGhpcy5uZ0F1dG9udW1lcmljKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0KHRoaXMubmdNb2RlbCk7XHJcbiAgICAgICAgfSwwKTtcclxuICAgICAgICB0aGlzLnVubGlzdGVuRm9ybWF0dGVkID0gdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LCAnYXV0b051bWVyaWM6Zm9ybWF0dGVkJywgKCRldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uRm9ybWF0dGVkKCRldmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGFuZ2VzLm5nTW9kZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXQodGhpcy5uZ01vZGVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoYW5nZXMubmdBdXRvbnVtZXJpYykge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnVwZGF0ZSh0aGlzLm5nQXV0b251bWVyaWMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXQodmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNldCh2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHRocm93ICdOZ0F1dG9udW1lcmljIGluc3RhbmNlIG5vdCBhdmFpbGFibGUuIHRyeSB1c2luZyB0d28gYmluZGluZyBieSBwcm92aWRpbmcgWyhuZ01vZGVsKV0nO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2NoYW5nZScsIFsnJGV2ZW50LnRhcmdldC52YWx1ZSddKVxyXG4gICAgaGFuZGxlQ2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy53cml0ZVZhbHVlKHZhbHVlKTtcclxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0TnVtYmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX29uQ2hhbmdlKHZhbHVlKTtcclxuICAgICAgICB0aGlzLl9vblRvdWNoZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkZvcm1hdHRlZCgkZXZlbnQpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSAkZXZlbnQ7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldEZvcm1hdHRlZCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZm9ybWF0LmVtaXQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2JsdXInKVxyXG4gICAgaGFuZGxlVG91Y2hlZCgpIHtcclxuICAgICAgICB0aGlzLl9vblRvdWNoZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcclxuICAgIH1cclxuXHJcbiAgICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5uZ01vZGVsID0gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnVubGlzdGVuRm9ybWF0dGVkKVxyXG4gICAgICAgICAgICB0aGlzLnVubGlzdGVuRm9ybWF0dGVkKCk7XHJcbiAgICB9XHJcbn1cclxuIl19