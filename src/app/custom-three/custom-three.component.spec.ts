import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomThreeComponent } from './custom-three.component';

describe('CustomThreeComponent', () => {
  let component: CustomThreeComponent;
  let fixture: ComponentFixture<CustomThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
