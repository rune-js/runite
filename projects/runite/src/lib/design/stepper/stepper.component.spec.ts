import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuniteStepperComponent } from './stepper.component';

describe('StepperComponent', () => {
    let component: RuniteStepperComponent;
    let fixture: ComponentFixture<RuniteStepperComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ RuniteStepperComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RuniteStepperComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
