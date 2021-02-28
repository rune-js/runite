import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
    selector: 'rune-input',
    templateUrl: './input.component.html'
})
export class RuniteInputComponent implements OnInit {

    @HostBinding('class.rune-input')
    public runeInputClass = true;

    @Input()
    public placeholder: string | undefined = undefined;

    @Input()
    public type: 'text' | 'password' | 'tel' | 'email' | 'number' = 'text';

    public constructor() {
    }

    public ngOnInit(): void {
    }

}
