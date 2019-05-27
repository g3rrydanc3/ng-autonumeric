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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b251bWVyaWMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXJmeS9uZy1hdXRvbnVtZXJpYy9zcmMvIiwic291cmNlcyI6WyJhdXRvbnVtZXJpYy9hdXRvbnVtZXJpYy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFFTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUNOLFNBQVMsRUFFVCxTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBdUIsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RSxPQUFPLFdBQVcsTUFBTSxhQUFhLENBQUM7QUFDdEMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQVl6QyxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsVUFBVTs7Ozs7SUFvQnBELFlBQW9CLEVBQXFCLEVBQVUsUUFBbUI7UUFDcEUsS0FBSyxFQUFFLENBQUM7UUFEVSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFOdEUsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsY0FBUzs7OztRQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDbEIsQ0FBQyxFQUFDO1FBQ0YsZUFBVTs7O1FBQUcsR0FBRyxFQUFFO1FBQ2xCLENBQUMsRUFBQztJQUlGLENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLFdBQVcsS0FBSyxTQUFTLEVBQUU7WUFDN0IsTUFBTSwySUFBMkksQ0FBQztTQUNuSjtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFD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O29CQUVMLFNBQVMsU0FBQyxPQUFPO3FCQUtqQixNQUFNOzJCQTJDTixZQUFZLFNBQUMsUUFBUSxFQUFFLENBQUMscUJBQXFCLENBQUM7NEJBYzlDLFlBQVksU0FBQyxNQUFNOzs7O0lBcEVwQix5Q0FDeUI7O0lBQ3pCLHlDQUNvQzs7SUFDcEMsc0NBQ2E7O0lBQ2IsdUNBQ2tCOztJQUNsQiwwQ0FBYzs7SUFDZCxtREFBOEI7O0lBQzlCLDBDQUFpQjs7SUFDakIsd0NBQzRCOztJQUM1QiwyQ0FDRTs7SUFDRiw0Q0FDRTs7Ozs7SUFFVSxvQ0FBNkI7Ozs7O0lBQUUsMENBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBhdXRob3IgQWJkZWxnaGFuaSBBSU5PVVNTXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge05nQXV0b251bWVyaWNPcHRpb25zU2VsZWN0fSBmcm9tICcuL2F1dG9udW1lcmljLW9wdGlvbnMtc2VsZWN0JztcclxuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IEF1dG9OdW1lcmljIGZyb20gJ2F1dG9udW1lcmljJztcclxuaW1wb3J0IHtCYXNpY0lucHV0fSBmcm9tICcuL2Jhc2ljLWlucHV0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmctYXV0b251bWVyaWMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRvbnVtZXJpYy5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbe1xyXG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOZ0F1dG9udW1lcmljQ29tcG9uZW50KSxcclxuICAgIG11bHRpOiB0cnVlXHJcbiAgfV0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdBdXRvbnVtZXJpY0NvbXBvbmVudCBleHRlbmRzIEJhc2ljSW5wdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgbmdNb2RlbDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgb3B0aW9uczogTmdBdXRvbnVtZXJpY09wdGlvbnNTZWxlY3Q7XHJcbiAgQElucHV0KClcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgQFZpZXdDaGlsZCgnaW5wdXQnKVxyXG4gIGlucHV0OiBFbGVtZW50UmVmO1xyXG4gIGluc3RhbmNlOiBhbnk7XHJcbiAgdW5saXN0ZW5Gb3JtYXR0ZWQ6ICgpID0+IHZvaWQ7XHJcbiAgaW50ZXJuYWw6IHN0cmluZztcclxuICBAT3V0cHV0KClcclxuICBmb3JtYXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgX29uQ2hhbmdlID0gKF8pID0+IHtcclxuICB9O1xyXG4gIF9vblRvdWNoZWQgPSAoKSA9PiB7XHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKEF1dG9OdW1lcmljID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgXCJBdXRvTnVtZXJpYyBpcyBhIHBlZXIgZGVwZW5kZW5jeSwgcGxlYXNlIG1ha2Ugc3VyZSB5b3UgaW5zdGFsbCBpdCBiZWZvcmUgdXNpbmcgdGhpcyBsaWJyYXJ5LiBIaW50IDogbnBtIGluc3RhbGwgLS1zYXZlIGF1dG9udW1lcmljQGxhdGVzdFwiO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBBdXRvTnVtZXJpYyh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQsIHRoaXMub3B0aW9ucyk7XHJcbiAgICB0aGlzLmluc3RhbmNlLnNldCh0aGlzLm5nTW9kZWwpO1xyXG4gICAgdGhpcy51bmxpc3RlbkZvcm1hdHRlZCA9IHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCwgJ2F1dG9OdW1lcmljOmZvcm1hdHRlZCcsICgkZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5vbkZvcm1hdHRlZCgkZXZlbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubmdNb2RlbCkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldCh0aGlzLm5nTW9kZWwpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMub3B0aW9ucykge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnVwZGF0ZSh0aGlzLm9wdGlvbnMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0KHZhbHVlKSB7XHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldCh2YWx1ZSk7XHJcbiAgICB9IGVsc2UgdGhyb3cgJ05nQXV0b251bWVyaWMgaW5zdGFuY2Ugbm90IGF2YWlsYWJsZS4gdHJ5IHVzaW5nIHR3byBiaW5kaW5nIGJ5IHByb3ZpZGluZyBbKG5nTW9kZWwpXSc7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjaGFuZ2UnLCBbJyRldmVudC50YXJnZXQudmFsdWUnXSlcclxuICBoYW5kbGVDaGFuZ2UodmFsdWUpIHtcclxuICAgIHRoaXMud3JpdGVWYWx1ZSh2YWx1ZSk7XHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICB2YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0TnVtYmVyKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9vbkNoYW5nZSh2YWx1ZSk7XHJcbiAgICB0aGlzLl9vblRvdWNoZWQoKTtcclxuICB9XHJcblxyXG4gIG9uRm9ybWF0dGVkKCRldmVudCkge1xyXG4gICAgdGhpcy5mb3JtYXQuZW1pdCgkZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXHJcbiAgaGFuZGxlVG91Y2hlZCgpIHtcclxuICAgIHRoaXMuX29uVG91Y2hlZCgpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgdGhpcy5pbnRlcm5hbCA9IHRoaXMuaW5zdGFuY2UuZ2V0Rm9ybWF0dGVkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmKHRoaXMudW5saXN0ZW5Gb3JtYXR0ZWQpXHJcbiAgICAgIHRoaXMudW5saXN0ZW5Gb3JtYXR0ZWQoKTtcclxuICB9XHJcbn1cclxuIl19