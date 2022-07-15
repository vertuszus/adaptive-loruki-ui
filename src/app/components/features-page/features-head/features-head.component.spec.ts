import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesHeadComponent } from './features-head.component';

describe('FeaturesHeadComponent', () => {
  let component: FeaturesHeadComponent;
  let fixture: ComponentFixture<FeaturesHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
