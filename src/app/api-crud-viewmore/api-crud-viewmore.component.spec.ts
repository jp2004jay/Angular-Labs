import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCrudViewmoreComponent } from './api-crud-viewmore.component';

describe('ApiCrudViewmoreComponent', () => {
  let component: ApiCrudViewmoreComponent;
  let fixture: ComponentFixture<ApiCrudViewmoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiCrudViewmoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiCrudViewmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
