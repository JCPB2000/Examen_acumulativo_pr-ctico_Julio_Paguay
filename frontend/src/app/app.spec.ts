import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App Component', () => {

  let component: App;
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App]
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crearse correctamente', () => {

    // Arrange
    // El componente ya está creado

    // Act
    const creado = component;

    // Assert
    expect(creado).toBeTruthy();

  });

});
