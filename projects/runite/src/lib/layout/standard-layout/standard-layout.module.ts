import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuneStandardLayoutComponent } from './standard-layout.component';
import { RuniteScrollModule } from '../../design/scroll/scroll.module';


@NgModule({
    declarations: [ RuneStandardLayoutComponent ],
    exports: [ RuneStandardLayoutComponent ],
    imports: [
        CommonModule,
        RuniteScrollModule
    ]
})
export class RuneStandardLayoutModule {
}
