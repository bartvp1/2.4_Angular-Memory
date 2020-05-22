import { TestBed, async } from '@angular/core/testing';
import { MemoryComponent } from './memory.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MemoryComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MemoryComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'memory-angular'`, () => {
    const fixture = TestBed.createComponent(MemoryComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('memory-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MemoryComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('memory-angular app is running!');
  });
});
