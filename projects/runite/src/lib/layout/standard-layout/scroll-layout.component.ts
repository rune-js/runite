import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'rune-scroll-layout',
    templateUrl: './scroll-layout.component.html'
})
export class RuniteScrollLayoutComponent implements OnInit {

    @HostBinding('class.rune-scrull-layout')
    public standardLayoutClass = true;

    public constructor() {
    }

    public ngOnInit(): void {
    }

}
