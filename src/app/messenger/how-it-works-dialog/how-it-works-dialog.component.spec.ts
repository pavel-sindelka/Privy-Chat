import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToUseDialogComponent } from './how-it-works-dialog.component';

describe('HowToUseDialogComponent', () => {
  let component: HowToUseDialogComponent;
  let fixture: ComponentFixture<HowToUseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToUseDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToUseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
