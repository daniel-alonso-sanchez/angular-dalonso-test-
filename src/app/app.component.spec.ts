import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UsersService } from './services/users.service';
import { UsersComponent } from './components/users/users.component';
import { OrderBy } from './pipes/orderby.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MockUsersService } from "./services/mock.users.service";
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
		    UsersComponent, 
		    OrderBy
      ],
	  providers: [
      { provide: UsersService, useClass: MockUsersService }
      
    ],
	  imports:      [ BrowserModule, FormsModule ,HttpModule ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Hello Angular!');
  }));

  it('should render a li element with at least one element', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('li')).toBeTruthy();
  }));
});