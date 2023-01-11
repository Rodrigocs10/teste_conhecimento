import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoImagensComponent } from './grupo-imagens.component';

describe('GrupoImagensComponent', () => {
  let component: GrupoImagensComponent;
  let fixture: ComponentFixture<GrupoImagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoImagensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrupoImagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
