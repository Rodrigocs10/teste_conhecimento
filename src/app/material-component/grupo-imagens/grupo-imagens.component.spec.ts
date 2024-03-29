import { DragDropModule } from '@angular/cdk/drag-drop';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { GrupoImagensComponent } from './grupo-imagens.component';

describe('GrupoImagensComponent', () => {
  let component: GrupoImagensComponent;
  let fixture: ComponentFixture<GrupoImagensComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoImagensComponent ],
      imports: [
        NoopAnimationsModule,
        DragDropModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoImagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
