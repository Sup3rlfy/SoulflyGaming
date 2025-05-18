import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SisyphusComponent } from './sisyphus.component';

describe('SisyphusComponent', () => {
  let component: SisyphusComponent;
  let fixture: ComponentFixture<SisyphusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SisyphusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisyphusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
