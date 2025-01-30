import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithTwoWayComponent } from './with-two-way.component';

describe('WithTwoWayComponent', () => {
  let component: WithTwoWayComponent;
  let fixture: ComponentFixture<WithTwoWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithTwoWayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithTwoWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
