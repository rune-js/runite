import { NgModule } from '@angular/core';
import { RuniteButtonModule } from './button/button.module';
import { RuniteFieldModule } from './field/field.module';


const controlSubModules = [
    RuniteButtonModule,
    RuniteFieldModule
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
