import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationMainComponent } from './documentation-main.component';

describe('DocumentationMainComponent', () => {
  let component: DocumentationMainComponent;
  let fixture: ComponentFixture<DocumentationMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
