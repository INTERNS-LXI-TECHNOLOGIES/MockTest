import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExamStartPage } from './exam-start.page';

describe('ExamStartPage', () => {
  let component: ExamStartPage;
  let fixture: ComponentFixture<ExamStartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamStartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExamStartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
