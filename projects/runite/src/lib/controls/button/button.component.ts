import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { RuniteColor } from '../../colors';


export type RuniteButtonVariant = 'standard' | 'raised';


@Component({
    selector: 'a[rune-button], button[rune-button], input[rune-button]',
    templateUrl: './button.component.html'
})
export class RuneButtonComponent implements OnInit {

    @HostBinding('class.rune-button')
    public runeButtonClass = true;

    @Input()
    public color: RuniteColor = 'default';

    @Input()
    public variant: RuniteButtonVariant = 'standard';

    public constructor() {
    }

    public ngOnInit(): void {
    }

    @HostBinding('class.rune-primary')
    public get primaryClass(): boolean { return this.color === 'primary'; }

    @HostBinding('class.rune-accent')
    public get accentClass(): boolean { return this.color === 'accent'; }

    @HostBinding('class.rune-default')
    public get defaultClass(): boolean { return this.color === 'default'; }

    @HostBinding('class.rune-button-standard')
    public get standardClass(): boolean { return this.variant === 'standard'; }

    @HostBinding('class.rune-button-raised')
    public get raisedClass(): boolean { return this.variant === 'raised'; }

}
