import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorteamlogComponent } from './monitorteamlog.component';

describe('MonitorteamlogComponent', () => {
  let component: MonitorteamlogComponent;
  let fixture: ComponentFixture<MonitorteamlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitorteamlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitorteamlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
