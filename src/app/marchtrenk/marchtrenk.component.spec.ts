//marchtrenk.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarchtrenkComponent } from './marchtrenk.component';

describe('MarchtrenkComponent', () => {
  let component: MarchtrenkComponent;
  let fixture: ComponentFixture<MarchtrenkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarchtrenkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarchtrenkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
