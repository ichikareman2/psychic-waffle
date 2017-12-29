import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTextComponent } from './sample-text.component';

describe('SampleTextComponent', () => {
  let component: SampleTextComponent;
  let fixture: ComponentFixture<SampleTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
