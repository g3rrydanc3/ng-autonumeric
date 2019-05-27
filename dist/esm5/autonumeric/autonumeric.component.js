/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @author Abdelghani AINOUSS
 */
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, HostListener, Input, Output, Renderer2, ViewChild, ViewEncapsulation, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import AutoNumeric from 'autonumeric';
import { BasicInput } from './basic-input';
var NgAutonumericComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NgAutonumericComponent, _super);
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
export { NgAutonumericComponent };
if (false) {
    /** @type {?} */
    NgAutonumericComponent.prototype.ngModel;
    /** @type {?} */
    NgAutonumericComponent.prototype.options;
    /** @type {?} */
    NgAutonumericComponent.prototype.type;
    /** @type {?} */
    NgAutonumericComponent.prototype.input;
    /** @type {?} */
    NgAutonumericComponent.prototype.instance;
    /** @type {?} */
    NgAutonumericComponent.prototype.unlistenFormatted;
    /** @type {?} */
    NgAutonumericComponent.prototype.internal;
    /** @type {?} */
    NgAutonumericComponent.prototype.format;
    /** @type {?} */
    NgAutonumericComponent.prototype._onChange;
    /** @type {?} */
    NgAutonumericComponent.prototype._onTouched;
    /**
     * @type {?}
     * @private
     */
    NgAutonumericComponent.prototype.cd;
    /**
     * @type {?}
     * @private
     */
    NgAutonumericComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b251bWVyaWMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXJmeS9uZy1hdXRvbnVtZXJpYy8iLCJzb3VyY2VzIjpbImF1dG9udW1lcmljL2F1dG9udW1lcmljLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLE9BQU8sRUFFTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUNOLFNBQVMsRUFFVCxTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBdUIsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RSxPQUFPLFdBQVcsTUFBTSxhQUFhLENBQUM7QUFDdEMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QztJQVU0QyxrREFBVTtJQW9CcEQsZ0NBQW9CLEVBQXFCLEVBQVUsUUFBbUI7UUFBdEUsWUFDRSxpQkFBTyxTQUNSO1FBRm1CLFFBQUUsR0FBRixFQUFFLENBQW1CO1FBQVUsY0FBUSxHQUFSLFFBQVEsQ0FBVztRQU50RSxZQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixlQUFTOzs7O1FBQUcsVUFBQyxDQUFDO1FBQ2QsQ0FBQyxFQUFDO1FBQ0YsZ0JBQVU7OztRQUFHO1FBQ2IsQ0FBQyxFQUFDOztJQUlGLENBQUM7Ozs7SUFFRCx5Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsZ0RBQWU7OztJQUFmO1FBQUEsaUJBU0M7UUFSQyxJQUFJLFdBQVcsS0FBSyxTQUFTLEVBQUU7WUFDN0IsTUFBTSwySUFBMkksQ0FBQztTQUNuSjtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxD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QUMsSUFBSTtpQkFDdEM7Ozs7Z0JBOUJDLGlCQUFpQjtnQkFXakIsU0FBUzs7OzBCQXNCUixLQUFLOzBCQUVMLEtBQUs7dUJBRUwsS0FBSzt3QkFFTCxTQUFTLFNBQUMsT0FBTzt5QkFLakIsTUFBTTsrQkEyQ04sWUFBWSxTQUFDLFFBQVEsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dDQWM5QyxZQUFZLFNBQUMsTUFBTTs7SUEyQnRCLDZCQUFDO0NBQUEsQUEzR0QsQ0FVNEMsVUFBVSxHQWlHckQ7U0FqR1ksc0JBQXNCOzs7SUFFakMseUNBQ3lCOztJQUN6Qix5Q0FDb0M7O0lBQ3BDLHNDQUNhOztJQUNiLHVDQUNrQjs7SUFDbEIsMENBQWM7O0lBQ2QsbURBQThCOztJQUM5QiwwQ0FBaUI7O0lBQ2pCLHdDQUM0Qjs7SUFDNUIsMkNBQ0U7O0lBQ0YsNENBQ0U7Ozs7O0lBRVUsb0NBQTZCOzs7OztJQUFFLDBDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAYXV0aG9yIEFiZGVsZ2hhbmkgQUlOT1VTU1xyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtOZ0F1dG9udW1lcmljT3B0aW9uc1NlbGVjdH0gZnJvbSAnLi9hdXRvbnVtZXJpYy1vcHRpb25zLXNlbGVjdCc7XHJcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCBBdXRvTnVtZXJpYyBmcm9tICdhdXRvbnVtZXJpYyc7XHJcbmltcG9ydCB7QmFzaWNJbnB1dH0gZnJvbSAnLi9iYXNpYy1pbnB1dCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25nLWF1dG9udW1lcmljJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXV0b251bWVyaWMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW3tcclxuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmdBdXRvbnVtZXJpY0NvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG4gIH1dLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nQXV0b251bWVyaWNDb21wb25lbnQgZXh0ZW5kcyBCYXNpY0lucHV0IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG5nTW9kZWw6IG51bWJlciB8IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIG9wdGlvbnM6IE5nQXV0b251bWVyaWNPcHRpb25zU2VsZWN0O1xyXG4gIEBJbnB1dCgpXHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JylcclxuICBpbnB1dDogRWxlbWVudFJlZjtcclxuICBpbnN0YW5jZTogYW55O1xyXG4gIHVubGlzdGVuRm9ybWF0dGVkOiAoKSA9PiB2b2lkO1xyXG4gIGludGVybmFsOiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpXHJcbiAgZm9ybWF0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIF9vbkNoYW5nZSA9IChfKSA9PiB7XHJcbiAgfTtcclxuICBfb25Ub3VjaGVkID0gKCkgPT4ge1xyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmIChBdXRvTnVtZXJpYyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IFwiQXV0b051bWVyaWMgaXMgYSBwZWVyIGRlcGVuZGVuY3ksIHBsZWFzZSBtYWtlIHN1cmUgeW91IGluc3RhbGwgaXQgYmVmb3JlIHVzaW5nIHRoaXMgbGlicmFyeS4gSGludCA6IG5wbSBpbnN0YWxsIC0tc2F2ZSBhdXRvbnVtZXJpY0BsYXRlc3RcIjtcclxuICAgIH1cclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgQXV0b051bWVyaWModGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5zZXQodGhpcy5uZ01vZGVsKTtcclxuICAgIHRoaXMudW5saXN0ZW5Gb3JtYXR0ZWQgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQsICdhdXRvTnVtZXJpYzpmb3JtYXR0ZWQnLCAoJGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMub25Gb3JtYXR0ZWQoJGV2ZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm5nTW9kZWwpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXQodGhpcy5uZ01vZGVsKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm9wdGlvbnMpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS51cGRhdGUodGhpcy5vcHRpb25zKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldCh2YWx1ZSkge1xyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXQodmFsdWUpO1xyXG4gICAgfSBlbHNlIHRocm93ICdOZ0F1dG9udW1lcmljIGluc3RhbmNlIG5vdCBhdmFpbGFibGUuIHRyeSB1c2luZyB0d28gYmluZGluZyBieSBwcm92aWRpbmcgWyhuZ01vZGVsKV0nO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2hhbmdlJywgWyckZXZlbnQudGFyZ2V0LnZhbHVlJ10pXHJcbiAgaGFuZGxlQ2hhbmdlKHZhbHVlKSB7XHJcbiAgICB0aGlzLndyaXRlVmFsdWUodmFsdWUpO1xyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgdmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldE51bWJlcigpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fb25DaGFuZ2UodmFsdWUpO1xyXG4gICAgdGhpcy5fb25Ub3VjaGVkKCk7XHJcbiAgfVxyXG5cclxuICBvbkZvcm1hdHRlZCgkZXZlbnQpIHtcclxuICAgIHRoaXMuZm9ybWF0LmVtaXQoJGV2ZW50KTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKVxyXG4gIGhhbmRsZVRvdWNoZWQoKSB7XHJcbiAgICB0aGlzLl9vblRvdWNoZWQoKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMuaW50ZXJuYWwgPSB0aGlzLmluc3RhbmNlLmdldEZvcm1hdHRlZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZih0aGlzLnVubGlzdGVuRm9ybWF0dGVkKVxyXG4gICAgICB0aGlzLnVubGlzdGVuRm9ybWF0dGVkKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==