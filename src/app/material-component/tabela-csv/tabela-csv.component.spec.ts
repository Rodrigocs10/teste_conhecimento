import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaCsvComponent } from './tabela-csv.component';

describe('TabelaCsvComponent', () => {
  let component: TabelaCsvComponent;
  let fixture: ComponentFixture<TabelaCsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaCsvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
