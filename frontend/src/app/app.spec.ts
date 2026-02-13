import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { App } from './app';
import { TaskService } from './services/task.service';

describe('App Component', () => {

  const mockTaskService = {
    obtenerTareas: () => of([]),
    crearTarea: () => of({})
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        { provide: TaskService, useValue: mockTaskService }
      ]
    }).compileComponents();
  });

  it('Debe crearse correctamente', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
