import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'rune-stepper',
    templateUrl: './stepper.component.html'
})
export class RuniteStepperComponent implements OnInit {

    @HostBinding('class.rune-stepper')
    public readonly runeStepperClass = true;

    public constructor() {
    }

    public ngOnInit(): void {
    }

}
