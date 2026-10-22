import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HijosCochesComponent } from './hijos-coches-component';

describe('HijosCochesComponent', () => {
  let component: HijosCochesComponent;
  let fixture: ComponentFixture<HijosCochesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HijosCochesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HijosCochesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
