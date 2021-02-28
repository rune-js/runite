import { NgModule } from '@angular/core';
import { RuniteScrollModule } from './scroll/scroll.module';
import { RuniteHeaderModule } from './header/header.module';
import { RuniteFooterModule } from './footer/footer.module';
import { RuniteTableModule } from './table/table.module';
import { RunitePanelModule } from './panel/panel.module';
import { RuniteIconModule } from './icon/icon.module';


const designSubModules = [
    RuniteScrollModule,
    RuniteHeaderModule,
    RuniteFooterModule,
    RuniteTableModule,
    RunitePanelModule,
    RuniteIconModule
];

@NgModule({
    imports: [
        ...designSubModules
    ],
    exports: [
        ...designSubModules
    ]
})
export class RuniteDesignModule {
}
