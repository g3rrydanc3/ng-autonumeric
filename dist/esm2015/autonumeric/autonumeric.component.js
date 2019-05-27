/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @author Abdelghani AINOUSS
 */
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, HostListener, Input, Output, Renderer2, ViewChild, ViewEncapsulation, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import AutoNumeric from 'autonumeric';
import { BasicInput } from './basic-input';
export class NgAutonumericComponent extends BasicInput {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b251bWVyaWMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXJmeS9uZy1hdXRvbnVtZXJpYy8iLCJzb3VyY2VzIjpbImF1dG9udW1lcmljL2F1dG9udW1lcmljLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBQ04sU0FBUyxFQUVULFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUF1QixpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZFLE9BQU8sV0FBVyxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBWXpDLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxVQUFVOzs7OztJQW9CcEQsWUFBb0IsRUFBcUIsRUFBVSxRQUFtQjtRQUNwRSxLQUFLLEVBQUUsQ0FBQztRQURVLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQU50RSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixjQUFTOzs7O1FBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUNsQixDQUFDLEVBQUM7UUFDRixlQUFVOzs7UUFBRyxHQUFHLEVBQUU7UUFDbEIsQ0FBQyxFQUFDO0lBSUYsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksV0FBVyxLQUFLLFNBQVMsRUFBRTtZQUM3QixNQUFNLDJJQUEySSxDQUFDO1NBQ25KO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FB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RUwsU0FBUyxTQUFDLE9BQU87cUJBS2pCLE1BQU07MkJBMkNOLFlBQVksU0FBQyxRQUFRLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzs0QkFjOUMsWUFBWSxTQUFDLE1BQU07Ozs7SUFwRXBCLHlDQUN5Qjs7SUFDekIseUNBQ29DOztJQUNwQyxzQ0FDYTs7SUFDYix1Q0FDa0I7O0lBQ2xCLDBDQUFjOztJQUNkLG1EQUE4Qjs7SUFDOUIsMENBQWlCOztJQUNqQix3Q0FDNEI7O0lBQzVCLDJDQUNFOztJQUNGLDRDQUNFOzs7OztJQUVVLG9DQUE2Qjs7Ozs7SUFBRSwwQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGF1dGhvciBBYmRlbGdoYW5pIEFJTk9VU1NcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TmdBdXRvbnVtZXJpY09wdGlvbnNTZWxlY3R9IGZyb20gJy4vYXV0b251bWVyaWMtb3B0aW9ucy1zZWxlY3QnO1xyXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgQXV0b051bWVyaWMgZnJvbSAnYXV0b251bWVyaWMnO1xyXG5pbXBvcnQge0Jhc2ljSW5wdXR9IGZyb20gJy4vYmFzaWMtaW5wdXQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZy1hdXRvbnVtZXJpYycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dG9udW1lcmljLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFt7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5nQXV0b251bWVyaWNDb21wb25lbnQpLFxyXG4gICAgbXVsdGk6IHRydWVcclxuICB9XSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ0F1dG9udW1lcmljQ29tcG9uZW50IGV4dGVuZHMgQmFzaWNJbnB1dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgQElucHV0KClcclxuICBuZ01vZGVsOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBvcHRpb25zOiBOZ0F1dG9udW1lcmljT3B0aW9uc1NlbGVjdDtcclxuICBASW5wdXQoKVxyXG4gIHR5cGU6IHN0cmluZztcclxuICBAVmlld0NoaWxkKCdpbnB1dCcpXHJcbiAgaW5wdXQ6IEVsZW1lbnRSZWY7XHJcbiAgaW5zdGFuY2U6IGFueTtcclxuICB1bmxpc3RlbkZvcm1hdHRlZDogKCkgPT4gdm9pZDtcclxuICBpbnRlcm5hbDogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKVxyXG4gIGZvcm1hdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBfb25DaGFuZ2UgPSAoXykgPT4ge1xyXG4gIH07XHJcbiAgX29uVG91Y2hlZCA9ICgpID0+IHtcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoQXV0b051bWVyaWMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBcIkF1dG9OdW1lcmljIGlzIGEgcGVlciBkZXBlbmRlbmN5LCBwbGVhc2UgbWFrZSBzdXJlIHlvdSBpbnN0YWxsIGl0IGJlZm9yZSB1c2luZyB0aGlzIGxpYnJhcnkuIEhpbnQgOiBucG0gaW5zdGFsbCAtLXNhdmUgYXV0b251bWVyaWNAbGF0ZXN0XCI7XHJcbiAgICB9XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEF1dG9OdW1lcmljKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCwgdGhpcy5vcHRpb25zKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uuc2V0KHRoaXMubmdNb2RlbCk7XHJcbiAgICB0aGlzLnVubGlzdGVuRm9ybWF0dGVkID0gdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LCAnYXV0b051bWVyaWM6Zm9ybWF0dGVkJywgKCRldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLm9uRm9ybWF0dGVkKCRldmVudCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uZ01vZGVsKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0KHRoaXMubmdNb2RlbCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5vcHRpb25zKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UudXBkYXRlKHRoaXMub3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXQodmFsdWUpIHtcclxuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0KHZhbHVlKTtcclxuICAgIH0gZWxzZSB0aHJvdyAnTmdBdXRvbnVtZXJpYyBpbnN0YW5jZSBub3QgYXZhaWxhYmxlLiB0cnkgdXNpbmcgdHdvIGJpbmRpbmcgYnkgcHJvdmlkaW5nIFsobmdNb2RlbCldJztcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NoYW5nZScsIFsnJGV2ZW50LnRhcmdldC52YWx1ZSddKVxyXG4gIGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xyXG4gICAgdGhpcy53cml0ZVZhbHVlKHZhbHVlKTtcclxuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXROdW1iZXIoKTtcclxuICAgIH1cclxuICAgIHRoaXMuX29uQ2hhbmdlKHZhbHVlKTtcclxuICAgIHRoaXMuX29uVG91Y2hlZCgpO1xyXG4gIH1cclxuXHJcbiAgb25Gb3JtYXR0ZWQoJGV2ZW50KSB7XHJcbiAgICB0aGlzLmZvcm1hdC5lbWl0KCRldmVudCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdibHVyJylcclxuICBoYW5kbGVUb3VjaGVkKCkge1xyXG4gICAgdGhpcy5fb25Ub3VjaGVkKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICB0aGlzLmludGVybmFsID0gdGhpcy5pbnN0YW5jZS5nZXRGb3JtYXR0ZWQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYodGhpcy51bmxpc3RlbkZvcm1hdHRlZClcclxuICAgICAgdGhpcy51bmxpc3RlbkZvcm1hdHRlZCgpO1xyXG4gIH1cclxufVxyXG4iXX0=