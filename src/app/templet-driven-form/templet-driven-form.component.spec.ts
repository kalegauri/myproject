import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempletDrivenFormComponent } from "./TempletDrivenFormComponent";

describe('TempletDrivenFormComponent', () => {
  let component: TempletDrivenFormComponent;
  let fixture: ComponentFixture<TempletDrivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempletDrivenFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempletDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
