import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayCrudComponent } from './array-crud.component';

describe('ArrayCrudComponent', () => {
  let component: ArrayCrudComponent;
  let fixture: ComponentFixture<ArrayCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayCrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrayCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
