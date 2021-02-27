import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'rune-header',
    templateUrl: './header.component.html'
})
export class RuniteHeaderComponent implements OnInit {

    @HostBinding('class.rune-header')
    public runeHeaderClass = true;

    public constructor() {
    }

    public ngOnInit(): void {
    }

}
