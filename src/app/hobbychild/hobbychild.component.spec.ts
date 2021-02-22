import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbychildComponent } from './hobbychild.component';

describe('HobbychildComponent', () => {
  let component: HobbychildComponent;
  let fixture: ComponentFixture<HobbychildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbychildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbychildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
