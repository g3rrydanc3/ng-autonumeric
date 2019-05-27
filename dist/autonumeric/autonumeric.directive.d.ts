/**
 * @author Abdelghani AINOUSS
 */
import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, AfterViewInit } from '@angular/core';
import { NgAutonumericOptionsSelect } from './autonumeric-options-select';
import { ControlValueAccessor } from '@angular/forms';
import { BasicInput } from './basic-input';
/**
 * Allowed Tag
 *
 *
```
'input', 'b', 'caption', 'cite', 'code', 'const', 'dd', 'del', 'div', 'dfn', 'dt', 'em', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ins', 'kdb', 'label', 'li', 'option', 'output', 'p', 'q', 's', 'sample', 'span', 'strong', 'td', 'th', 'u'
```
 *
 * ***
 * @example
 *
```
<input [ngAutonumeric]="{
  digitGroupSeparator: ' ',
  decimalCharacter: ',',
  decimalCharacterAlternative: '.',
  currencySymbol: '\u00a0€',
  currencySymbolPlacement: 's',
  roundingMethod: 'U',
  minimumValue: '0'
}" [(ngModel)]="myModel" (format)="onFormat($event)"(change)="onChange($event)" placeholder=''/>

```
 * Complete Example: https://stackblitz.com/edit/ng-autonumeric
 *
 * ***
 *
 * To generate selector
 *
 *
```
const allowedTagList = [
  'input', 'b', 'caption', 'cite', 'code', 'const', 'dd', 'del', 'div', 'dfn', 'dt', 'em', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ins', 'kdb', 'label', 'li', 'option', 'output', 'p', 'q', 's', 'sample', 'span', 'strong', 'td', 'th', 'u'
]
let selector = allowedTagList.join('[ngAutonumeric], ') + '[ngAutonumeric]';
console.log(selector);
```
 *
*/
export declare class NgAutonumericDirective extends BasicInput implements OnInit, OnChanges, ControlValueAccessor, AfterViewInit, OnDestroy {
    private cd;
    private renderer;
    private input;
    ngModel: number | string;
    ngAutonumeric: NgAutonumericOptionsSelect;
    instance: any;
    unlistenFormatted: () => void;
    format: EventEmitter<{}>;
    _onChange: (_: any) => void;
    _onTouched: () => void;
    constructor(cd: ChangeDetectorRef, renderer: Renderer2, input: ElementRef);
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
