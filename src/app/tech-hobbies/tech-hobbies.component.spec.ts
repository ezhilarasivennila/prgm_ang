import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechHobbiesComponent } from './tech-hobbies.component';

describe('TechHobbiesComponent', () => {
  let component: TechHobbiesComponent;
  let fixture: ComponentFixture<TechHobbiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechHobbiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
