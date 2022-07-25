import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTwoAppComponent } from './custom-two-app.component';

describe('CustomTwoAppComponent', () => {
  let component: CustomTwoAppComponent;
  let fixture: ComponentFixture<CustomTwoAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTwoAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomTwoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
