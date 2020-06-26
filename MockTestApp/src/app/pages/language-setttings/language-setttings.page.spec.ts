import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LanguageSetttingsPage } from './language-setttings.page';

describe('LanguageSetttingsPage', () => {
  let component: LanguageSetttingsPage;
  let fixture: ComponentFixture<LanguageSetttingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageSetttingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageSetttingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
