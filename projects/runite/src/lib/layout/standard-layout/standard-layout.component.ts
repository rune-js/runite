import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'rune-standard-layout',
    templateUrl: './standard-layout.component.html'
})
export class RuneStandardLayoutComponent implements OnInit {

    @HostBinding('class.rune-standard-layout')
    public standardLayoutClass = true;

    public constructor() {
    }

    public ngOnInit(): void {
    }

}
