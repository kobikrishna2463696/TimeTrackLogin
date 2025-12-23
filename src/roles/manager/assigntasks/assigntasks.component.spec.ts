import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigntasksComponent } from './assigntasks.component';

describe('AssigntasksComponent', () => {
  let component: AssigntasksComponent;
  let fixture: ComponentFixture<AssigntasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssigntasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssigntasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
