import { Component, HostBinding, OnInit } from '@angular/core';


@Component({
    selector: 'rune-scroll',
    templateUrl: './scroll.component.html'
})
export class RuniteScrollComponent implements OnInit {

    @HostBinding('class.rune-scroll')
    public readonly runeScrollClass = true;

    public constructor() {
    }

    public ngOnInit(): void {
    }

}
