import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuniteScrollLayoutComponent } from './scroll-layout.component';
import { RuniteScrollModule } from '../../design/scroll/scroll.module';


@NgModule({
    declarations: [ RuniteScrollLayoutComponent ],
    exports: [ RuniteScrollLayoutComponent ],
    imports: [
        CommonModule,
        RuniteScrollModule
    ]
})
export class RuniteScrollLayoutModule {
}
