/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { AccountResourceService } from './services/account-resource.service';
import { AttendedExamResourceService } from './services/attended-exam-resource.service';
import { AttendedOptionResourceService } from './services/attended-option-resource.service';
import { UserJwtControllerService } from './services/user-jwt-controller.service';
import { ExamResourceService } from './services/exam-resource.service';
import { MocktestControllerResourceService } from './services/mocktest-controller-resource.service';
import { QstnOptionResourceService } from './services/qstn-option-resource.service';
import { QuestionResourceService } from './services/question-resource.service';
import { UserExtraResourceService } from './services/user-extra-resource.service';
import { UserResourceService } from './services/user-resource.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    AccountResourceService,
    AttendedExamResourceService,
    AttendedOptionResourceService,
    UserJwtControllerService,
    ExamResourceService,
    MocktestControllerResourceService,
    QstnOptionResourceService,
    QuestionResourceService,
    UserExtraResourceService,
    UserResourceService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
