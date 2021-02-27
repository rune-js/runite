import { NgModule } from '@angular/core';
import { RuneStandardLayoutModule } from './standard-layout/standard-layout.module';


const runiteLayoutSubModules = [
    RuneStandardLayoutModule
];

@NgModule({
    imports: [
        ...runiteLayoutSubModules
    ],
    exports: [
        ...runiteLayoutSubModules
    ]
})
export class RuniteLayoutModule {
}
