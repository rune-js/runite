import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'rune-field',
    templateUrl: './field.component.html'
})
export class RuniteFieldComponent implements OnInit {

    @HostBinding('class.rune-field')
    public runeFieldClass = true;

    public constructor() {
    }

    public ngOnInit(): void {
    }

}
