import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      // {
      //   path: ' ',
      //   redirectTo: 'home',
      //   pathMatch: 'full'
      // },
        {
          path: '',
          loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
        },
        {
          path: 'user-dashboard',
          loadChildren: () => import('../user-dashboard/user-dashboard.module').then( m => m.UserDashboardPageModule)
        },
        {
          path: 'question',
          loadChildren: () => import('../question/question.module').then( m => m.QuestionPageModule)
        },
        {
          path: 'all-questions',
          loadChildren: () => import('../all-questions/all-questions.module').then( m => m.AllQuestionsPageModule)
        },
        {
          path: 'create-question',
          loadChildren: () => import('../create-question/create-question.module').then( m => m.CreateQuestionPageModule)
        },
        {
          path: 'user-dashboard',
          loadChildren: () => import('../user-dashboard/user-dashboard.module').then( m => m.UserDashboardPageModule)
        },
      {
        path: 'exam-history',
        loadChildren: () => import('../exam-history/exam-history.module').then( m => m.ExamHistoryPageModule)
      },
      {
        path: 'exam-analysis',
        loadChildren: () => import('../exam-analysis/exam-analysis.module').then( m => m.ExamAnalysisPageModule)
      },
      {
        path: 'attended-exam-details',
        loadChildren: () => import('../attended-exam-details/attended-exam-details.module').then( m => m.AttendedExamDetailsPageModule)
      },
      {
        path: 'exam',
        loadChildren: () => import('../exam/exam.module').then( m => m.ExamPageModule)
      },
      {
        path: 'popovercomponent',
        loadChildren: () => import('../popovercomponent/popovercomponent.module').then( m => m.PopovercomponentPageModule)
      },
      {
        path: 'exam-details',
        loadChildren: () => import('../exam-details/exam-details.module').then( m => m.ExamDetailsPageModule)
      },
      {
        path: 'create-exam',
        loadChildren: () => import('../create-exam/create-exam.module').then( m => m.CreateExamPageModule)
      },
      {
        path: 'user-exam',
        loadChildren: () => import('../user-exam/user-exam.module').then( m => m.UserExamPageModule)
      },
      {
        path: 'exam-start',
        loadChildren: () => import('../exam-start/exam-start.module').then( m => m.ExamStartPageModule)
      },
      {
        path: 'certificates',
        loadChildren: () => import('../certificates/certificates.module').then( m => m.CertificatesPageModule)
      },
      {
        path: 'submit',
        loadChildren: () => import('../submit/submit.module').then( m => m.SubmitPageModule)
      }

     ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
