import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskForm } from './task-form';

describe('TaskForm', () => {

  let component: TaskForm;
  let fixture: ComponentFixture<TaskForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskForm] // standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(TaskForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crearse correctamente', () => {

    // Arrange ya está en beforeEach

    // Act
    const creado = component;

    // Assert
    expect(creado).toBeTruthy();

  });

  it('El formulario debe ser inválido cuando está vacío', () => {

    // Arrange
    component.taskForm.setValue({
      titulo: '',
      descripcion: '',
      fechaLimite: '',
      prioridad: '',
      estado: ''
    });

    // Act
    const resultado = component.taskForm.valid;

    // Assert
    expect(resultado).toBe(false);

  });

  it('Debe emitir el evento cuando el formulario es válido', () => {

    // Arrange
    component.taskForm.setValue({
      titulo: 'Proyecto Final',
      descripcion: 'Realizar documentación',
      fechaLimite: '2026-02-20',
      prioridad: 'Alta',
      estado: 'Pendiente'
    });

    const emitSpy = vi.spyOn(component.taskCreated, 'emit');

    // Act
    component.submit();

    // Assert
    expect(emitSpy).toHaveBeenCalled();
  });

});
