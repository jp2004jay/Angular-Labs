import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutTwoWayComponent } from './without-two-way.component';

describe('WithoutTwoWayComponent', () => {
  let component: WithoutTwoWayComponent;
  let fixture: ComponentFixture<WithoutTwoWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithoutTwoWayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithoutTwoWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
