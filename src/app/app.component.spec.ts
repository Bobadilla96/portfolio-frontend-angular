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

  it('should contain at least ten published projects', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.projects.length).toBeGreaterThanOrEqual(10);
  });

  it('should include the Next.js LMS project', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const nextProject = app.projects.find((project) => project.id === 'cursos-online-lms');
    expect(nextProject).toBeTruthy();
    expect(nextProject?.demoUrl).toContain('cursos-online-lms');
  });

  it('should include the Next.js Marketplace project', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const nextProject = app.projects.find((project) => project.id === 'marketplace-nextjs');
    expect(nextProject).toBeTruthy();
    expect(nextProject?.demoUrl).toContain('07-marketplace');
  });

  it('should include the Professional Language Coach project', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const nextProject = app.projects.find((project) => project.id === 'professional-language-coach');
    expect(nextProject).toBeTruthy();
    expect(nextProject?.repoUrl).toContain('professional-language-coach');
    expect(nextProject?.demoUrl).toContain('professional-language-coach.vercel.app');
  });

  it('should expose featured projects for the hero showcase', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.featuredProjects.length).toBeGreaterThanOrEqual(4);
  });

  it('should build screenshot urls for all projects', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.projects.every((project) => project.screenshotUrl.startsWith('assets/screenshots/'))).toBeTrue();
  });

  it('should include AWS training in the career timeline', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const awsEntry = app.career.find((item) => item.role.includes('AWS Certified Cloud Practitioner'));
    expect(awsEntry).toBeTruthy();
  });
});
