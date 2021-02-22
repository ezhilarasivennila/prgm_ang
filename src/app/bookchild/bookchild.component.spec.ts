import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookchildComponent } from './bookchild.component';

describe('BookchildComponent', () => {
  let component: BookchildComponent;
  let fixture: ComponentFixture<BookchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
