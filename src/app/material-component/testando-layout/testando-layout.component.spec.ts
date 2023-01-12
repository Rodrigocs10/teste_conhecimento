import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestandoLayoutComponent } from './testando-layout.component';

describe('TestandoLayoutComponent', () => {
  let component: TestandoLayoutComponent;
  let fixture: ComponentFixture<TestandoLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestandoLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestandoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
