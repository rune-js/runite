import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'rune-panel',
    templateUrl: './panel.component.html'
})
export class RunitePanelComponent implements OnInit {

    @HostBinding('class.rune-panel')
    public runePanelClass = true;

    public constructor() {
    }

    public ngOnInit(): void {
    }

}
