import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationHeadComponent } from './documentation-head.component';

describe('DocumentationHeadComponent', () => {
  let component: DocumentationHeadComponent;
  let fixture: ComponentFixture<DocumentationHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentationHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
