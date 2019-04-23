import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadosCreateComponent } from './chamados-create.component';

describe('ChamadosCreateComponent', () => {
  let component: ChamadosCreateComponent;
  let fixture: ComponentFixture<ChamadosCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamadosCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
