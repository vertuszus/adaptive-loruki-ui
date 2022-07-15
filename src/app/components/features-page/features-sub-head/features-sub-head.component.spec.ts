import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesSubHeadComponent } from './features-sub-head.component';

describe('FeaturesSubHeadComponent', () => {
  let component: FeaturesSubHeadComponent;
  let fixture: ComponentFixture<FeaturesSubHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesSubHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesSubHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
