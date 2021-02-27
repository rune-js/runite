import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuniteHeaderComponent } from './header.component';


@NgModule({
    declarations: [ RuniteHeaderComponent ],
    exports: [ RuniteHeaderComponent ],
    imports: [
        CommonModule
    ]
})
export class RuniteHeaderModule {
}
