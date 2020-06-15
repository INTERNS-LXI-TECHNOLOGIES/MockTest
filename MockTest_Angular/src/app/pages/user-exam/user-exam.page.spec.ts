import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserExamPage } from './user-exam.page';

describe('UserExamPage', () => {
  let component: UserExamPage;
  let fixture: ComponentFixture<UserExamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserExamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserExamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
