import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'table[rune-table]',
    templateUrl: './table.component.html'
})
export class RuniteTableComponent implements OnInit {

    @HostBinding('class.rune-table')
    public runeTableClass = true;

    public constructor() {
    }

    public ngOnInit(): void {
    }

}
