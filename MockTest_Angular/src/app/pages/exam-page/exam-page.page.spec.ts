import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExamPagePage } from './exam-page.page';

describe('ExamPagePage', () => {
  let component: ExamPagePage;
  let fixture: ComponentFixture<ExamPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExamPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
