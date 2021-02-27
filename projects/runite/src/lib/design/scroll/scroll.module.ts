import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuniteScrollComponent } from './scroll.component';


@NgModule({
    declarations: [ RuniteScrollComponent ],
    exports: [ RuniteScrollComponent ],
    imports: [
        CommonModule
    ]
})
export class RuniteScrollModule {
}
