import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayOfObjectCrudComponent } from './array-of-object-crud.component';

describe('ArrayOfObjectCrudComponent', () => {
  let component: ArrayOfObjectCrudComponent;
  let fixture: ComponentFixture<ArrayOfObjectCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayOfObjectCrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrayOfObjectCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
