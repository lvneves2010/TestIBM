import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadosDetailComponent } from './chamados-detail.component';

describe('ChamadoDetailComponent', () => {
  let component: ChamadosDetailComponent;
  let fixture: ComponentFixture<ChamadosDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamadosDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
