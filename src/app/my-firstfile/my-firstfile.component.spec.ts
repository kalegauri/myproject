import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstfileComponent } from './my-firstfile.component';

describe('MyFirstfileComponent', () => {
  let component: MyFirstfileComponent;
  let fixture: ComponentFixture<MyFirstfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFirstfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFirstfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
