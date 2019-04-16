import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTemplateComponent } from './grid-template.component';

describe('GridTemplateComponent', () => {
  let component: GridTemplateComponent;
  let fixture: ComponentFixture<GridTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
