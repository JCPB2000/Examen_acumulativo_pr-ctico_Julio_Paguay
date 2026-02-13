import { TestBed } from '@angular/core/testing';
import { TaskList } from './task-list';

describe('TaskList', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskList] // standalone
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TaskList);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

});
