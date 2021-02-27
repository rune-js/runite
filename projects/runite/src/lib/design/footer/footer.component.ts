import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'rune-footer',
    templateUrl: './footer.component.html'
})
export class RuniteFooterComponent implements OnInit {

    @HostBinding('class.rune-footer')
    public runeFooterClass = true;

    public constructor() {
    }

    public ngOnInit(): void {
    }

}
