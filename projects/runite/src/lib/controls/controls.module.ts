import { NgModule } from '@angular/core';
import { RuniteButtonModule } from './button/button.module';


const controlSubModules = [
    RuniteButtonModule
];

@NgModule({
    imports: [
        ...controlSubModules
    ],
    exports: [
        ...controlSubModules
    ]
})
export class RuniteControlsModule {
}
