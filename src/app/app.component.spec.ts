import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should contain six published projects', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.projects.length).toBe(6);
  });

  it('should include the Next.js LMS project', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const nextProject = app.projects.find((project) => project.id === 'cursos-online-lms');
    expect(nextProject).toBeTruthy();
    expect(nextProject?.demoUrl).toContain('cursos-online-lms');
  });
});
