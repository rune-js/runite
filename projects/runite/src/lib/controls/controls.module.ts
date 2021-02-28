import { NgModule } from '@angular/core';
import { RuniteButtonModule } from './button/button.module';
import { RuniteInputModule } from './input/input.module';


const controlSubModules = [
    RuniteButtonModule,
    RuniteInputModule
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
