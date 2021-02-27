import { NgModule } from '@angular/core';
import { RuniteDesignModule } from './design/design.module';
import { RuniteLayoutModule } from './layout/layout.module';
import { RuniteControlsModule } from './controls/controls.module';


const runiteSubModules = [
    RuniteDesignModule,
    RuniteLayoutModule,
    RuniteControlsModule
];

@NgModule({
    imports: [ ...runiteSubModules ],
    exports: [ ...runiteSubModules ]
})
export class RuniteModule {
}
