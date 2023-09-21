import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaEditComponent } from './tarefa-edit.component';

describe('TarefaEditComponent', () => {
  let component: TarefaEditComponent;
  let fixture: ComponentFixture<TarefaEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarefaEditComponent]
    });
    fixture = TestBed.createComponent(TarefaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
