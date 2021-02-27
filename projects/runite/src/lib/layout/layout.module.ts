import { NgModule } from '@angular/core';
import { RuniteScrollLayoutModule } from './standard-layout/scroll-layout.module';


const runiteLayoutSubModules = [
    RuniteScrollLayoutModule
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
