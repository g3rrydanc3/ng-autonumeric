/**
 * @author Abdelghani AINOUSS
 */
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { NgAutonumericOptionsSelect } from './autonumeric-options-select';
import { ControlValueAccessor } from '@angular/forms';
import { BasicInput } from './basic-input';
export declare class NgAutonumericComponent extends BasicInput implements OnInit, OnChanges, ControlValueAccessor, AfterViewInit, OnDestroy {
    private cd;
    private renderer;
    ngModel: number | string;
    options: NgAutonumericOptionsSelect;
    type: string;
    input: ElementRef;
    instance: any;
    unlistenFormatted: () => void;
    internal: string;
    format: EventEmitter<{}>;
    _onChange: (_: any) => void;
    _onTouched: () => void;
    constructor(cd: ChangeDetectorRef, renderer: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    set(value: any): void;
    handleChange(value: any): void;
    onFormatted($event: any): void;
    handleTouched(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(obj: any): void;
    ngOnDestroy(): void;
}
