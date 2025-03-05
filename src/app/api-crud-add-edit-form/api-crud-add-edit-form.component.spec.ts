import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCrudAddEditFormComponent } from './api-crud-add-edit-form.component';

describe('ApiCrudAddEditFormComponent', () => {
  let component: ApiCrudAddEditFormComponent;
  let fixture: ComponentFixture<ApiCrudAddEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiCrudAddEditFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiCrudAddEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
