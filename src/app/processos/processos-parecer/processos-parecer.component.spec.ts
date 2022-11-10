import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessosParecerComponent } from './processos-parecer.component';

describe('ProcessosParecerComponent', () => {
  let component: ProcessosParecerComponent;
  let fixture: ComponentFixture<ProcessosParecerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessosParecerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessosParecerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
