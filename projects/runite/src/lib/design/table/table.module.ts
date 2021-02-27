import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuniteTableComponent } from './table.component';


@NgModule({
    declarations: [ RuniteTableComponent ],
    exports: [ RuniteTableComponent ],
    imports: [
        CommonModule
    ]
})
export class RuniteTableModule {
}
