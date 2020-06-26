/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Exam } from '../models/exam';
import { UserDTO } from '../models/user-dto';
import { Question } from '../models/question';
import { AttendedExam } from '../models/attended-exam';
import { AttendedExamListModel } from '../models/attended-exam-list-model';
import { ExamModel } from '../models/exam-model';
import { User } from '../models/user';
import { UserExtra } from '../models/user-extra';
import { UserDashBoard } from '../models/user-dash-board';

/**
 * Mocktest Controller Resource
 */
@Injectable({
  providedIn: 'root',
})
class MocktestControllerResourceService extends __BaseService {
  static readonly activeExamsUsingGETPath = '/api/mocktest-controller/activeExams';
  static readonly getAllUsingGETPath = '/api/mocktest-controller/all';
  static readonly getAllExamDetailsUsingGETPath = '/api/mocktest-controller/allExamDetails';
  static readonly getAllQuestionsUsingGETPath = '/api/mocktest-controller/app/allQuestions';
  static readonly createQuestionUsingPOSTPath = '/api/mocktest-controller/app/question';
  static readonly getQuestionUsingGETPath = '/api/mocktest-controller/app/question/{id}';
  static readonly deleteQuestionUsingDELETEPath = '/api/mocktest-controller/app/question/{id}';
  static readonly attendedExamByIdUsingGETPath = '/api/mocktest-controller/attendedExam/{id}';
  static readonly saveExamUsingPOSTPath = '/api/mocktest-controller/create_exam';
  static readonly getExamByIdUsingGETPath = '/api/mocktest-controller/exam/{id}';
  static readonly getPdfUsingGETPath = '/api/mocktest-controller/examCertificate/{id}';
  static readonly getReportAsPdfUsingDataBaseUsingGETPath = '/api/mocktest-controller/examDetailsPDF/{Exam_id}';
  static readonly getAllAttendedExamDetailsUsingGETPath = '/api/mocktest-controller/getAllAttendedExamDetails/{id}';
  static readonly selectExamUsingGETPath = '/api/mocktest-controller/getSelectedExamDetails/{eId}';
  static readonly indexUsingPOSTPath = '/api/mocktest-controller/login/{login}';
  static readonly registerUsingGETPath = '/api/mocktest-controller/register';
  static readonly registerUsingHEADPath = '/api/mocktest-controller/register';
  static readonly registerUsingPOSTPath = '/api/mocktest-controller/register';
  static readonly registerUsingPUTPath = '/api/mocktest-controller/register';
  static readonly registerUsingDELETEPath = '/api/mocktest-controller/register';
  static readonly registerUsingOPTIONSPath = '/api/mocktest-controller/register';
  static readonly registerUsingPATCHPath = '/api/mocktest-controller/register';
  static readonly saveOptionUsingPOSTPath = '/api/mocktest-controller/save_answers/{eId}/{answers}';
  static readonly submitUsingGETPath = '/api/mocktest-controller/submit';
  static readonly submitUsingHEADPath = '/api/mocktest-controller/submit';
  static readonly submitUsingPOSTPath = '/api/mocktest-controller/submit';
  static readonly submitUsingPUTPath = '/api/mocktest-controller/submit';
  static readonly submitUsingDELETEPath = '/api/mocktest-controller/submit';
  static readonly submitUsingOPTIONSPath = '/api/mocktest-controller/submit';
  static readonly submitUsingPATCHPath = '/api/mocktest-controller/submit';
  static readonly updateExamUsingPUT1Path = '/api/mocktest-controller/update_exam';
  static readonly userDashboardUsingGETPath = '/api/mocktest-controller/user_dashboard/{login}';
  static readonly userPassedDetailsUsingGETPath = '/api/mocktest-controller/user_passed_exams/{login}';
  static readonly getUserUsingGETPath = '/api/mocktest-controller/users/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * activeExams
   * @return OK
   */
  activeExamsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Exam>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/mocktest-controller/activeExams`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Exam>>;
      })
    );
  }
  /**
   * activeExams
   * @return OK
   */
  activeExamsUsingGET(): __Observable<Array<Exam>> {
    return this.activeExamsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Exam>)
    );
  }

  /**
   * getAll
   * @return OK
   */
  getAllUsingGETResponse(): __Observable<__StrictHttpResponse<Array<UserDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/mocktest-controller/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UserDTO>>;
      })
    );
  }
  /**
   * getAll
   * @return OK
   */
  getAllUsingGET(): __Observable<Array<UserDTO>> {
    return this.getAllUsingGETResponse().pipe(
      __map(_r => _r.body as Array<UserDTO>)
    );
  }

  /**
   * getAllExamDetails
   * @return OK
   */
  getAllExamDetailsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Exam>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/mocktest-controller/allExamDetails`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Exam>>;
      })
    );
  }
  /**
   * getAllExamDetails
   * @return OK
   */
  getAllExamDetailsUsingGET(): __Observable<Array<Exam>> {
    return this.getAllExamDetailsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Exam>)
    );
  }

  /**
   * getAllQuestions
   * @return OK
   */
  getAllQuestionsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Question>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/mocktest-controller/app/allQuestions`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Question>>;
      })
    );
  }
  /**
   * getAllQuestions
   * @return OK
   */
  getAllQuestionsUsingGET(): __Observable<Array<Question>> {
    return this.getAllQuestionsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Question>)
    );
  }

  /**
   * createQuestion
   * @param question question
   */
  createQuestionUsingPOSTResponse(question: Question): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = question;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/mocktest-controller/app/question`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * createQuestion
   * @param question question
   */
  createQuestionUsingPOST(question: Question): __Observable<null> {
    return this.createQuestionUsingPOSTResponse(question).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * getQuestion
   * @param id id
   * @return OK
   */
  getQuestionUsingGETResponse(id: number): __Observable<__StrictHttpResponse<Question>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/mocktest-controller/app/question/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Question>;
      })
    );
  }
  /**
   * getQuestion
   * @param id id
   * @return OK
   */
  getQuestionUsingGET(id: number): __Observable<Question> {
    return this.getQuestionUsingGETResponse(id).pipe(
      __map(_r => _r.body as Question)
    );
  }

  /**
   * deleteQuestion
   * @param id id
   */
  deleteQuestionUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/mocktest-controller/app/question/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * deleteQuestion
   * @param id id
   */
  deleteQuestionUsingDELETE(id: number): __Observable<null> {
    return this.deleteQuestionUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * attendedExamById
   * @param id id
   * @return OK
   */
  attendedExamByIdUsingGETResponse(id: string): __Observable<__StrictHttpResponse<AttendedExam>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/mocktest-controller/attendedExam/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AttendedExam>;
      })
    );
  }
  /**
   * attendedExamById
   * @param id id
   * @return OK
   */
  attendedExamByIdUsingGET(id: string): __Observable<AttendedExam> {
    return this.attendedExamByIdUsingGETResponse(id).pipe(
      __map(_r => _r.body as AttendedExam)
    );
  }

  /**
   * save_exam
   * @param exam exam
   * @return OK
   */
  saveExamUsingPOSTResponse(exam: Exam): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = exam;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/mocktest-controller/create_exam`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: (_r as HttpResponse<any>).body === 'true' }) as __StrictHttpResponse<boolean>
      })
    );
  }
  /**
   * save_exam
   * @param exam exam
   * @return OK
   */
  saveExamUsingPOST(exam: Exam): __Observable<boolean> {
    return this.saveExamUsingPOSTResponse(exam).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * getExamById
   * @param id id
   * @return OK
   */
  getExamByIdUsingGETResponse(id: string): __Observable<__StrictHttpResponse<Exam>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/mocktest-controller/exam/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Exam>;
      })
    );
  }
  /**
   * getExamById
   * @param id id
   * @return OK
   */
  getExamByIdUsingGET(id: string): __Observable<Exam> {
    return this.getExamByIdUsingGETResponse(id).pipe(
      __map(_r => _r.body as Exam)
    );
  }

  /**
   * getPdf
   * @param id id
   * @return OK
   */
  getPdfUsingGETResponse(id: string): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/mocktest-controller/examCertificate/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * getPdf
   * @param id id
   * @return OK
   */
  getPdfUsingGET(id: string): __Observable<string> {
    return this.getPdfUsingGETResponse(id).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * getReportAsPdfUsingDataBase
   * @param Exam_id Exam_id
   * @return OK
   */
  getReportAsPdfUsingDataBaseUsingGETResponse(ExamId: string): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/mocktest-controller/examDetailsPDF/${encodeURIComponent(ExamId)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * getReportAsPdfUsingDataBase
   * @param Exam_id Exam_id
   * @return OK
   */
  getReportAsPdfUsingDataBaseUsingGET(ExamId: string): __Observable<string> {
    return this.getReportAsPdfUsingDataBaseUsingGETResponse(ExamId).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * getAllAttendedExamDetails
   * @param params The `MocktestControllerResourceService.GetAllAttendedExamDetailsUsingGETParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].tokenValue`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.password`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.login`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.authorities[0].name`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.activated`:
   *
   * - `exam.attendedExams[0].userExtra.user.persistentTokens[0].tokenValue`:
   *
   * - `exam.attendedExams[0].userExtra.user.password`:
   *
   * - `exam.attendedExams[0].userExtra.user.login`:
   *
   * - `exam.attendedExams[0].userExtra.user.authorities[0].name`:
   *
   * - `exam.attendedExams[0].userExtra.user.activated`:
   *
   * - `attendList[0].user.persistentTokens[0].tokenValue`:
   *
   * - `attendList[0].user.password`:
   *
   * - `attendList[0].user.login`:
   *
   * - `attendList[0].user.authorities[0].name`:
   *
   * - `attendList[0].user.activated`:
   *
   * - `exam.time`:
   *
   * - `exam.questions[0].qstnOptions[0].option`:
   *
   * - `exam.questions[0].qstnOptions[0].id`:
   *
   * - `exam.questions[0].qstn`:
   *
   * - `exam.questions[0].level`:
   *
   * - `exam.questions[0].id`:
   *
   * - `exam.questions[0].attendedOptions[0].id`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedOpt`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.resetKey`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.resetDate`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].userAgent`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].tokenDate`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].series`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].ipAddress`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.lastName`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.lastModifiedDate`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.lastModifiedBy`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.langKey`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.imageUrl`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.id`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.firstName`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.email`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.createdDate`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.createdBy`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.activationKey`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.id`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.total`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.score`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.percentage`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.id`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.dateTime`:
   *
   * - `exam.name`:
   *
   * - `exam.level`:
   *
   * - `exam.id`:
   *
   * - `exam.count`:
   *
   * - `exam.attendedExams[0].userExtra.user.resetKey`:
   *
   * - `exam.attendedExams[0].userExtra.user.resetDate`:
   *
   * - `exam.attendedExams[0].userExtra.user.persistentTokens[0].userAgent`:
   *
   * - `exam.attendedExams[0].userExtra.user.persistentTokens[0].tokenDate`:
   *
   * - `exam.attendedExams[0].userExtra.user.persistentTokens[0].series`:
   *
   * - `exam.attendedExams[0].userExtra.user.persistentTokens[0].ipAddress`:
   *
   * - `exam.attendedExams[0].userExtra.user.lastName`:
   *
   * - `exam.attendedExams[0].userExtra.user.lastModifiedDate`:
   *
   * - `exam.attendedExams[0].userExtra.user.lastModifiedBy`:
   *
   * - `exam.attendedExams[0].userExtra.user.langKey`:
   *
   * - `exam.attendedExams[0].userExtra.user.imageUrl`:
   *
   * - `exam.attendedExams[0].userExtra.user.id`:
   *
   * - `exam.attendedExams[0].userExtra.user.firstName`:
   *
   * - `exam.attendedExams[0].userExtra.user.email`:
   *
   * - `exam.attendedExams[0].userExtra.user.createdDate`:
   *
   * - `exam.attendedExams[0].userExtra.user.createdBy`:
   *
   * - `exam.attendedExams[0].userExtra.user.activationKey`:
   *
   * - `exam.attendedExams[0].userExtra.id`:
   *
   * - `exam.attendedExams[0].total`:
   *
   * - `exam.attendedExams[0].score`:
   *
   * - `exam.attendedExams[0].percentage`:
   *
   * - `exam.attendedExams[0].id`:
   *
   * - `exam.attendedExams[0].dateTime`:
   *
   * - `exam.attendedExams[0].attendedOptions[0].question.qstnOptions[0].option`:
   *
   * - `exam.attendedExams[0].attendedOptions[0].question.qstnOptions[0].id`:
   *
   * - `exam.attendedExams[0].attendedOptions[0].question.qstn`:
   *
   * - `exam.attendedExams[0].attendedOptions[0].question.level`:
   *
   * - `exam.attendedExams[0].attendedOptions[0].question.id`:
   *
   * - `exam.attendedExams[0].attendedOptions[0].id`:
   *
   * - `exam.attendedExams[0].attendedOptions[0].attendedOpt`:
   *
   * - `attendList[0].user.resetKey`:
   *
   * - `attendList[0].user.resetDate`:
   *
   * - `attendList[0].user.persistentTokens[0].userAgent`:
   *
   * - `attendList[0].user.persistentTokens[0].tokenDate`:
   *
   * - `attendList[0].user.persistentTokens[0].series`:
   *
   * - `attendList[0].user.persistentTokens[0].ipAddress`:
   *
   * - `attendList[0].user.lastName`:
   *
   * - `attendList[0].user.lastModifiedDate`:
   *
   * - `attendList[0].user.lastModifiedBy`:
   *
   * - `attendList[0].user.langKey`:
   *
   * - `attendList[0].user.imageUrl`:
   *
   * - `attendList[0].user.id`:
   *
   * - `attendList[0].user.firstName`:
   *
   * - `attendList[0].user.email`:
   *
   * - `attendList[0].user.createdDate`:
   *
   * - `attendList[0].user.createdBy`:
   *
   * - `attendList[0].user.activationKey`:
   *
   * - `attendList[0].total`:
   *
   * - `attendList[0].score`:
   *
   * - `attendList[0].result`:
   *
   * - `attendList[0].percentage`:
   *
   * - `attendList[0].examName`:
   *
   * - `attendList[0].examId`:
   *
   * - `attendList[0].dateTime`:
   *
   * @return OK
   */
  getAllAttendedExamDetailsUsingGETResponse(params: MocktestControllerResourceService.GetAllAttendedExamDetailsUsingGETParams): __Observable<__StrictHttpResponse<AttendedExamListModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0TokenValue != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].tokenValue', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0TokenValue.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserPassword != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.password', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserPassword.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserLogin != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.login', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserLogin.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserAuthorities0Name != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.authorities[0].name', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserAuthorities0Name.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserActivated != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.activated', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserActivated.toString());
    if (params.examAttendedExams0UserExtraUserPersistentTokens0TokenValue != null) __params = __params.set('exam.attendedExams[0].userExtra.user.persistentTokens[0].tokenValue', params.examAttendedExams0UserExtraUserPersistentTokens0TokenValue.toString());
    if (params.examAttendedExams0UserExtraUserPassword != null) __params = __params.set('exam.attendedExams[0].userExtra.user.password', params.examAttendedExams0UserExtraUserPassword.toString());
    if (params.examAttendedExams0UserExtraUserLogin != null) __params = __params.set('exam.attendedExams[0].userExtra.user.login', params.examAttendedExams0UserExtraUserLogin.toString());
    if (params.examAttendedExams0UserExtraUserAuthorities0Name != null) __params = __params.set('exam.attendedExams[0].userExtra.user.authorities[0].name', params.examAttendedExams0UserExtraUserAuthorities0Name.toString());
    if (params.examAttendedExams0UserExtraUserActivated != null) __params = __params.set('exam.attendedExams[0].userExtra.user.activated', params.examAttendedExams0UserExtraUserActivated.toString());
    if (params.attendList0UserPersistentTokens0TokenValue != null) __params = __params.set('attendList[0].user.persistentTokens[0].tokenValue', params.attendList0UserPersistentTokens0TokenValue.toString());
    if (params.attendList0UserPassword != null) __params = __params.set('attendList[0].user.password', params.attendList0UserPassword.toString());
    if (params.attendList0UserLogin != null) __params = __params.set('attendList[0].user.login', params.attendList0UserLogin.toString());
    if (params.attendList0UserAuthorities0Name != null) __params = __params.set('attendList[0].user.authorities[0].name', params.attendList0UserAuthorities0Name.toString());
    if (params.attendList0UserActivated != null) __params = __params.set('attendList[0].user.activated', params.attendList0UserActivated.toString());
    if (params.examTime != null) __params = __params.set('exam.time', params.examTime.toString());
    if (params.examQuestions0QstnOptions0Option != null) __params = __params.set('exam.questions[0].qstnOptions[0].option', params.examQuestions0QstnOptions0Option.toString());
    if (params.examQuestions0QstnOptions0Id != null) __params = __params.set('exam.questions[0].qstnOptions[0].id', params.examQuestions0QstnOptions0Id.toString());
    if (params.examQuestions0Qstn != null) __params = __params.set('exam.questions[0].qstn', params.examQuestions0Qstn.toString());
    if (params.examQuestions0Level != null) __params = __params.set('exam.questions[0].level', params.examQuestions0Level.toString());
    if (params.examQuestions0Id != null) __params = __params.set('exam.questions[0].id', params.examQuestions0Id.toString());
    if (params.examQuestions0AttendedOptions0Id != null) __params = __params.set('exam.questions[0].attendedOptions[0].id', params.examQuestions0AttendedOptions0Id.toString());
    if (params.examQuestions0AttendedOptions0AttendedOpt != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedOpt', params.examQuestions0AttendedOptions0AttendedOpt.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserResetKey != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.resetKey', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserResetKey.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserResetDate != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.resetDate', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserResetDate.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0UserAgent != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].userAgent', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0UserAgent.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0TokenDate != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].tokenDate', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0TokenDate.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0Series != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].series', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0Series.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0IpAddress != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].ipAddress', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0IpAddress.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserLastName != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.lastName', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserLastName.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserLastModifiedDate != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.lastModifiedDate', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserLastModifiedDate.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserLastModifiedBy != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.lastModifiedBy', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserLastModifiedBy.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserLangKey != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.langKey', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserLangKey.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserImageUrl != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.imageUrl', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserImageUrl.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserId != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.id', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserId.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserFirstName != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.firstName', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserFirstName.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserEmail != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.email', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserEmail.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserCreatedDate != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.createdDate', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserCreatedDate.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserCreatedBy != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.createdBy', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserCreatedBy.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserActivationKey != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.activationKey', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserActivationKey.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraId != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.id', params.examQuestions0AttendedOptions0AttendedExamUserExtraId.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamTotal != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.total', params.examQuestions0AttendedOptions0AttendedExamTotal.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamScore != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.score', params.examQuestions0AttendedOptions0AttendedExamScore.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamPercentage != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.percentage', params.examQuestions0AttendedOptions0AttendedExamPercentage.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamId != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.id', params.examQuestions0AttendedOptions0AttendedExamId.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamDateTime != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.dateTime', params.examQuestions0AttendedOptions0AttendedExamDateTime.toString());
    if (params.examName != null) __params = __params.set('exam.name', params.examName.toString());
    if (params.examLevel != null) __params = __params.set('exam.level', params.examLevel.toString());
    if (params.examId != null) __params = __params.set('exam.id', params.examId.toString());
    if (params.examCount != null) __params = __params.set('exam.count', params.examCount.toString());
    if (params.examAttendedExams0UserExtraUserResetKey != null) __params = __params.set('exam.attendedExams[0].userExtra.user.resetKey', params.examAttendedExams0UserExtraUserResetKey.toString());
    if (params.examAttendedExams0UserExtraUserResetDate != null) __params = __params.set('exam.attendedExams[0].userExtra.user.resetDate', params.examAttendedExams0UserExtraUserResetDate.toString());
    if (params.examAttendedExams0UserExtraUserPersistentTokens0UserAgent != null) __params = __params.set('exam.attendedExams[0].userExtra.user.persistentTokens[0].userAgent', params.examAttendedExams0UserExtraUserPersistentTokens0UserAgent.toString());
    if (params.examAttendedExams0UserExtraUserPersistentTokens0TokenDate != null) __params = __params.set('exam.attendedExams[0].userExtra.user.persistentTokens[0].tokenDate', params.examAttendedExams0UserExtraUserPersistentTokens0TokenDate.toString());
    if (params.examAttendedExams0UserExtraUserPersistentTokens0Series != null) __params = __params.set('exam.attendedExams[0].userExtra.user.persistentTokens[0].series', params.examAttendedExams0UserExtraUserPersistentTokens0Series.toString());
    if (params.examAttendedExams0UserExtraUserPersistentTokens0IpAddress != null) __params = __params.set('exam.attendedExams[0].userExtra.user.persistentTokens[0].ipAddress', params.examAttendedExams0UserExtraUserPersistentTokens0IpAddress.toString());
    if (params.examAttendedExams0UserExtraUserLastName != null) __params = __params.set('exam.attendedExams[0].userExtra.user.lastName', params.examAttendedExams0UserExtraUserLastName.toString());
    if (params.examAttendedExams0UserExtraUserLastModifiedDate != null) __params = __params.set('exam.attendedExams[0].userExtra.user.lastModifiedDate', params.examAttendedExams0UserExtraUserLastModifiedDate.toString());
    if (params.examAttendedExams0UserExtraUserLastModifiedBy != null) __params = __params.set('exam.attendedExams[0].userExtra.user.lastModifiedBy', params.examAttendedExams0UserExtraUserLastModifiedBy.toString());
    if (params.examAttendedExams0UserExtraUserLangKey != null) __params = __params.set('exam.attendedExams[0].userExtra.user.langKey', params.examAttendedExams0UserExtraUserLangKey.toString());
    if (params.examAttendedExams0UserExtraUserImageUrl != null) __params = __params.set('exam.attendedExams[0].userExtra.user.imageUrl', params.examAttendedExams0UserExtraUserImageUrl.toString());
    if (params.examAttendedExams0UserExtraUserId != null) __params = __params.set('exam.attendedExams[0].userExtra.user.id', params.examAttendedExams0UserExtraUserId.toString());
    if (params.examAttendedExams0UserExtraUserFirstName != null) __params = __params.set('exam.attendedExams[0].userExtra.user.firstName', params.examAttendedExams0UserExtraUserFirstName.toString());
    if (params.examAttendedExams0UserExtraUserEmail != null) __params = __params.set('exam.attendedExams[0].userExtra.user.email', params.examAttendedExams0UserExtraUserEmail.toString());
    if (params.examAttendedExams0UserExtraUserCreatedDate != null) __params = __params.set('exam.attendedExams[0].userExtra.user.createdDate', params.examAttendedExams0UserExtraUserCreatedDate.toString());
    if (params.examAttendedExams0UserExtraUserCreatedBy != null) __params = __params.set('exam.attendedExams[0].userExtra.user.createdBy', params.examAttendedExams0UserExtraUserCreatedBy.toString());
    if (params.examAttendedExams0UserExtraUserActivationKey != null) __params = __params.set('exam.attendedExams[0].userExtra.user.activationKey', params.examAttendedExams0UserExtraUserActivationKey.toString());
    if (params.examAttendedExams0UserExtraId != null) __params = __params.set('exam.attendedExams[0].userExtra.id', params.examAttendedExams0UserExtraId.toString());
    if (params.examAttendedExams0Total != null) __params = __params.set('exam.attendedExams[0].total', params.examAttendedExams0Total.toString());
    if (params.examAttendedExams0Score != null) __params = __params.set('exam.attendedExams[0].score', params.examAttendedExams0Score.toString());
    if (params.examAttendedExams0Percentage != null) __params = __params.set('exam.attendedExams[0].percentage', params.examAttendedExams0Percentage.toString());
    if (params.examAttendedExams0Id != null) __params = __params.set('exam.attendedExams[0].id', params.examAttendedExams0Id.toString());
    if (params.examAttendedExams0DateTime != null) __params = __params.set('exam.attendedExams[0].dateTime', params.examAttendedExams0DateTime.toString());
    if (params.examAttendedExams0AttendedOptions0QuestionQstnOptions0Option != null) __params = __params.set('exam.attendedExams[0].attendedOptions[0].question.qstnOptions[0].option', params.examAttendedExams0AttendedOptions0QuestionQstnOptions0Option.toString());
    if (params.examAttendedExams0AttendedOptions0QuestionQstnOptions0Id != null) __params = __params.set('exam.attendedExams[0].attendedOptions[0].question.qstnOptions[0].id', params.examAttendedExams0AttendedOptions0QuestionQstnOptions0Id.toString());
    if (params.examAttendedExams0AttendedOptions0QuestionQstn != null) __params = __params.set('exam.attendedExams[0].attendedOptions[0].question.qstn', params.examAttendedExams0AttendedOptions0QuestionQstn.toString());
    if (params.examAttendedExams0AttendedOptions0QuestionLevel != null) __params = __params.set('exam.attendedExams[0].attendedOptions[0].question.level', params.examAttendedExams0AttendedOptions0QuestionLevel.toString());
    if (params.examAttendedExams0AttendedOptions0QuestionId != null) __params = __params.set('exam.attendedExams[0].attendedOptions[0].question.id', params.examAttendedExams0AttendedOptions0QuestionId.toString());
    if (params.examAttendedExams0AttendedOptions0Id != null) __params = __params.set('exam.attendedExams[0].attendedOptions[0].id', params.examAttendedExams0AttendedOptions0Id.toString());
    if (params.examAttendedExams0AttendedOptions0AttendedOpt != null) __params = __params.set('exam.attendedExams[0].attendedOptions[0].attendedOpt', params.examAttendedExams0AttendedOptions0AttendedOpt.toString());
    if (params.attendList0UserResetKey != null) __params = __params.set('attendList[0].user.resetKey', params.attendList0UserResetKey.toString());
    if (params.attendList0UserResetDate != null) __params = __params.set('attendList[0].user.resetDate', params.attendList0UserResetDate.toString());
    if (params.attendList0UserPersistentTokens0UserAgent != null) __params = __params.set('attendList[0].user.persistentTokens[0].userAgent', params.attendList0UserPersistentTokens0UserAgent.toString());
    if (params.attendList0UserPersistentTokens0TokenDate != null) __params = __params.set('attendList[0].user.persistentTokens[0].tokenDate', params.attendList0UserPersistentTokens0TokenDate.toString());
    if (params.attendList0UserPersistentTokens0Series != null) __params = __params.set('attendList[0].user.persistentTokens[0].series', params.attendList0UserPersistentTokens0Series.toString());
    if (params.attendList0UserPersistentTokens0IpAddress != null) __params = __params.set('attendList[0].user.persistentTokens[0].ipAddress', params.attendList0UserPersistentTokens0IpAddress.toString());
    if (params.attendList0UserLastName != null) __params = __params.set('attendList[0].user.lastName', params.attendList0UserLastName.toString());
    if (params.attendList0UserLastModifiedDate != null) __params = __params.set('attendList[0].user.lastModifiedDate', params.attendList0UserLastModifiedDate.toString());
    if (params.attendList0UserLastModifiedBy != null) __params = __params.set('attendList[0].user.lastModifiedBy', params.attendList0UserLastModifiedBy.toString());
    if (params.attendList0UserLangKey != null) __params = __params.set('attendList[0].user.langKey', params.attendList0UserLangKey.toString());
    if (params.attendList0UserImageUrl != null) __params = __params.set('attendList[0].user.imageUrl', params.attendList0UserImageUrl.toString());
    if (params.attendList0UserId != null) __params = __params.set('attendList[0].user.id', params.attendList0UserId.toString());
    if (params.attendList0UserFirstName != null) __params = __params.set('attendList[0].user.firstName', params.attendList0UserFirstName.toString());
    if (params.attendList0UserEmail != null) __params = __params.set('attendList[0].user.email', params.attendList0UserEmail.toString());
    if (params.attendList0UserCreatedDate != null) __params = __params.set('attendList[0].user.createdDate', params.attendList0UserCreatedDate.toString());
    if (params.attendList0UserCreatedBy != null) __params = __params.set('attendList[0].user.createdBy', params.attendList0UserCreatedBy.toString());
    if (params.attendList0UserActivationKey != null) __params = __params.set('attendList[0].user.activationKey', params.attendList0UserActivationKey.toString());
    if (params.attendList0Total != null) __params = __params.set('attendList[0].total', params.attendList0Total.toString());
    if (params.attendList0Score != null) __params = __params.set('attendList[0].score', params.attendList0Score.toString());
    if (params.attendList0Result != null) __params = __params.set('attendList[0].result', params.attendList0Result.toString());
    if (params.attendList0Percentage != null) __params = __params.set('attendList[0].percentage', params.attendList0Percentage.toString());
    if (params.attendList0ExamName != null) __params = __params.set('attendList[0].examName', params.attendList0ExamName.toString());
    if (params.attendList0ExamId != null) __params = __params.set('attendList[0].examId', params.attendList0ExamId.toString());
    if (params.attendList0DateTime != null) __params = __params.set('attendList[0].dateTime', params.attendList0DateTime.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/mocktest-controller/getAllAttendedExamDetails/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AttendedExamListModel>;
      })
    );
  }
  /**
   * getAllAttendedExamDetails
   * @param params The `MocktestControllerResourceService.GetAllAttendedExamDetailsUsingGETParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].tokenValue`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.password`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.login`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.authorities[0].name`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.activated`:
   *
   * - `exam.attendedExams[0].userExtra.user.persistentTokens[0].tokenValue`:
   *
   * - `exam.attendedExams[0].userExtra.user.password`:
   *
   * - `exam.attendedExams[0].userExtra.user.login`:
   *
   * - `exam.attendedExams[0].userExtra.user.authorities[0].name`:
   *
   * - `exam.attendedExams[0].userExtra.user.activated`:
   *
   * - `attendList[0].user.persistentTokens[0].tokenValue`:
   *
   * - `attendList[0].user.password`:
   *
   * - `attendList[0].user.login`:
   *
   * - `attendList[0].user.authorities[0].name`:
   *
   * - `attendList[0].user.activated`:
   *
   * - `exam.time`:
   *
   * - `exam.questions[0].qstnOptions[0].option`:
   *
   * - `exam.questions[0].qstnOptions[0].id`:
   *
   * - `exam.questions[0].qstn`:
   *
   * - `exam.questions[0].level`:
   *
   * - `exam.questions[0].id`:
   *
   * - `exam.questions[0].attendedOptions[0].id`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedOpt`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.resetKey`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.resetDate`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].userAgent`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].tokenDate`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].series`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].ipAddress`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.lastName`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.lastModifiedDate`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.lastModifiedBy`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.langKey`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.imageUrl`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.id`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.firstName`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.email`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.createdDate`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.createdBy`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.activationKey`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.id`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.total`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.score`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.percentage`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.id`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.dateTime`:
   *
   * - `exam.name`:
   *
   * - `exam.level`:
   *
   * - `exam.id`:
   *
   * - `exam.count`:
   *
   * - `exam.attendedExams[0].userExtra.user.resetKey`:
   *
   * - `exam.attendedExams[0].userExtra.user.resetDate`:
   *
   * - `exam.attendedExams[0].userExtra.user.persistentTokens[0].userAgent`:
   *
   * - `exam.attendedExams[0].userExtra.user.persistentTokens[0].tokenDate`:
   *
   * - `exam.attendedExams[0].userExtra.user.persistentTokens[0].series`:
   *
   * - `exam.attendedExams[0].userExtra.user.persistentTokens[0].ipAddress`:
   *
   * - `exam.attendedExams[0].userExtra.user.lastName`:
   *
   * - `exam.attendedExams[0].userExtra.user.lastModifiedDate`:
   *
   * - `exam.attendedExams[0].userExtra.user.lastModifiedBy`:
   *
   * - `exam.attendedExams[0].userExtra.user.langKey`:
   *
   * - `exam.attendedExams[0].userExtra.user.imageUrl`:
   *
   * - `exam.attendedExams[0].userExtra.user.id`:
   *
   * - `exam.attendedExams[0].userExtra.user.firstName`:
   *
   * - `exam.attendedExams[0].userExtra.user.email`:
   *
   * - `exam.attendedExams[0].userExtra.user.createdDate`:
   *
   * - `exam.attendedExams[0].userExtra.user.createdBy`:
   *
   * - `exam.attendedExams[0].userExtra.user.activationKey`:
   *
   * - `exam.attendedExams[0].userExtra.id`:
   *
   * - `exam.attendedExams[0].total`:
   *
   * - `exam.attendedExams[0].score`:
   *
   * - `exam.attendedExams[0].percentage`:
   *
   * - `exam.attendedExams[0].id`:
   *
   * - `exam.attendedExams[0].dateTime`:
   *
   * - `exam.attendedExams[0].attendedOptions[0].question.qstnOptions[0].option`:
   *
   * - `exam.attendedExams[0].attendedOptions[0].question.qstnOptions[0].id`:
   *
   * - `exam.attendedExams[0].attendedOptions[0].question.qstn`:
   *
   * - `exam.attendedExams[0].attendedOptions[0].question.level`:
   *
   * - `exam.attendedExams[0].attendedOptions[0].question.id`:
   *
   * - `exam.attendedExams[0].attendedOptions[0].id`:
   *
   * - `exam.attendedExams[0].attendedOptions[0].attendedOpt`:
   *
   * - `attendList[0].user.resetKey`:
   *
   * - `attendList[0].user.resetDate`:
   *
   * - `attendList[0].user.persistentTokens[0].userAgent`:
   *
   * - `attendList[0].user.persistentTokens[0].tokenDate`:
   *
   * - `attendList[0].user.persistentTokens[0].series`:
   *
   * - `attendList[0].user.persistentTokens[0].ipAddress`:
   *
   * - `attendList[0].user.lastName`:
   *
   * - `attendList[0].user.lastModifiedDate`:
   *
   * - `attendList[0].user.lastModifiedBy`:
   *
   * - `attendList[0].user.langKey`:
   *
   * - `attendList[0].user.imageUrl`:
   *
   * - `attendList[0].user.id`:
   *
   * - `attendList[0].user.firstName`:
   *
   * - `attendList[0].user.email`:
   *
   * - `attendList[0].user.createdDate`:
   *
   * - `attendList[0].user.createdBy`:
   *
   * - `attendList[0].user.activationKey`:
   *
   * - `attendList[0].total`:
   *
   * - `attendList[0].score`:
   *
   * - `attendList[0].result`:
   *
   * - `attendList[0].percentage`:
   *
   * - `attendList[0].examName`:
   *
   * - `attendList[0].examId`:
   *
   * - `attendList[0].dateTime`:
   *
   * @return OK
   */
  getAllAttendedExamDetailsUsingGET(params: MocktestControllerResourceService.GetAllAttendedExamDetailsUsingGETParams): __Observable<AttendedExamListModel> {
    return this.getAllAttendedExamDetailsUsingGETResponse(params).pipe(
      __map(_r => _r.body as AttendedExamListModel)
    );
  }

  /**
   * selectExam
   * @param params The `MocktestControllerResourceService.SelectExamUsingGETParams` containing the following parameters:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.persistentTokens[0].tokenValue`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.password`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.login`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.authorities[0].name`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.activated`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].tokenValue`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.password`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.login`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.authorities[0].name`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.activated`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].tokenValue`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.password`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.login`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.authorities[0].name`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.activated`:
   *
   * - `exam.attendedExams[0].userExtra.user.persistentTokens[0].tokenValue`:
   *
   * - `exam.attendedExams[0].userExtra.user.password`:
   *
   * - `exam.attendedExams[0].userExtra.user.login`:
   *
   * - `exam.attendedExams[0].userExtra.user.authorities[0].name`:
   *
   * - `exam.attendedExams[0].userExtra.user.activated`:
   *
   * - `eId`: eId
   *
   * - `questions[0].qstnOptions[0].option`:
   *
   * - `questions[0].qstnOptions[0].id`:
   *
   * - `questions[0].qstn`:
   *
   * - `questions[0].level`:
   *
   * - `questions[0].id`:
   *
   * - `questions[0].exams[0].time`:
   *
   * - `questions[0].exams[0].name`:
   *
   * - `questions[0].exams[0].level`:
   *
   * - `questions[0].exams[0].id`:
   *
   * - `questions[0].exams[0].count`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.resetKey`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.resetDate`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.persistentTokens[0].userAgent`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.persistentTokens[0].tokenDate`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.persistentTokens[0].series`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.persistentTokens[0].ipAddress`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.lastName`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.lastModifiedDate`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.lastModifiedBy`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.langKey`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.imageUrl`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.id`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.firstName`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.email`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.createdDate`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.createdBy`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.activationKey`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.id`:
   *
   * - `questions[0].exams[0].attendedExams[0].total`:
   *
   * - `questions[0].exams[0].attendedExams[0].score`:
   *
   * - `questions[0].exams[0].attendedExams[0].percentage`:
   *
   * - `questions[0].exams[0].attendedExams[0].id`:
   *
   * - `questions[0].exams[0].attendedExams[0].dateTime`:
   *
   * - `questions[0].exams[0].attendedExams[0].attendedOptions[0].id`:
   *
   * - `questions[0].exams[0].attendedExams[0].attendedOptions[0].attendedOpt`:
   *
   * - `questions[0].attendedOptions[0].id`:
   *
   * - `questions[0].attendedOptions[0].attendedOpt`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.resetKey`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.resetDate`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].userAgent`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].tokenDate`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].series`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].ipAddress`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.lastName`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.lastModifiedDate`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.lastModifiedBy`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.langKey`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.imageUrl`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.id`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.firstName`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.email`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.createdDate`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.createdBy`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.activationKey`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.id`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.total`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.score`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.percentage`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.id`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.exam.time`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.exam.name`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.exam.level`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.exam.id`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.exam.count`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.dateTime`:
   *
   * - `exam.time`:
   *
   * - `exam.questions[0].qstnOptions[0].option`:
   *
   * - `exam.questions[0].qstnOptions[0].id`:
   *
   * - `exam.questions[0].qstn`:
   *
   * - `exam.questions[0].level`:
   *
   * - `exam.questions[0].id`:
   *
   * - `exam.questions[0].attendedOptions[0].id`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedOpt`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.resetKey`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.resetDate`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].userAgent`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].tokenDate`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].series`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].ipAddress`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.lastName`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.lastModifiedDate`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.lastModifiedBy`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.langKey`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.imageUrl`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.id`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.firstName`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.email`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.createdDate`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.createdBy`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.activationKey`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.id`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.total`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.score`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.percentage`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.id`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.dateTime`:
   *
   * - `exam.name`:
   *
   * - `exam.level`:
   *
   * - `exam.id`:
   *
   * - `exam.count`:
   *
   * - `exam.attendedExams[0].userExtra.user.resetKey`:
   *
   * - `exam.attendedExams[0].userExtra.user.resetDate`:
   *
   * - `exam.attendedExams[0].userExtra.user.persistentTokens[0].userAgent`:
   *
   * - `exam.attendedExams[0].userExtra.user.persistentTokens[0].tokenDate`:
   *
   * - `exam.attendedExams[0].userExtra.user.persistentTokens[0].series`:
   *
   * - `exam.attendedExams[0].userExtra.user.persistentTokens[0].ipAddress`:
   *
   * - `exam.attendedExams[0].userExtra.user.lastName`:
   *
   * - `exam.attendedExams[0].userExtra.user.lastModifiedDate`:
   *
   * - `exam.attendedExams[0].userExtra.user.lastModifiedBy`:
   *
   * - `exam.attendedExams[0].userExtra.user.langKey`:
   *
   * - `exam.attendedExams[0].userExtra.user.imageUrl`:
   *
   * - `exam.attendedExams[0].userExtra.user.id`:
   *
   * - `exam.attendedExams[0].userExtra.user.firstName`:
   *
   * - `exam.attendedExams[0].userExtra.user.email`:
   *
   * - `exam.attendedExams[0].userExtra.user.createdDate`:
   *
   * - `exam.attendedExams[0].userExtra.user.createdBy`:
   *
   * - `exam.attendedExams[0].userExtra.user.activationKey`:
   *
   * - `exam.attendedExams[0].userExtra.id`:
   *
   * - `exam.attendedExams[0].total`:
   *
   * - `exam.attendedExams[0].score`:
   *
   * - `exam.attendedExams[0].percentage`:
   *
   * - `exam.attendedExams[0].id`:
   *
   * - `exam.attendedExams[0].dateTime`:
   *
   * - `exam.attendedExams[0].attendedOptions[0].question.qstnOptions[0].option`:
   *
   * - `exam.attendedExams[0].attendedOptions[0].question.qstnOptions[0].id`:
   *
   * - `exam.attendedExams[0].attendedOptions[0].question.qstn`:
   *
   * - `exam.attendedExams[0].attendedOptions[0].question.level`:
   *
   * - `exam.attendedExams[0].attendedOptions[0].question.id`:
   *
   * - `exam.attendedExams[0].attendedOptions[0].id`:
   *
   * - `exam.attendedExams[0].attendedOptions[0].attendedOpt`:
   *
   * @return OK
   */
  selectExamUsingGETResponse(params: MocktestControllerResourceService.SelectExamUsingGETParams): __Observable<__StrictHttpResponse<ExamModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.questions0Exams0AttendedExams0UserExtraUserPersistentTokens0TokenValue != null) __params = __params.set('questions[0].exams[0].attendedExams[0].userExtra.user.persistentTokens[0].tokenValue', params.questions0Exams0AttendedExams0UserExtraUserPersistentTokens0TokenValue.toString());
    if (params.questions0Exams0AttendedExams0UserExtraUserPassword != null) __params = __params.set('questions[0].exams[0].attendedExams[0].userExtra.user.password', params.questions0Exams0AttendedExams0UserExtraUserPassword.toString());
    if (params.questions0Exams0AttendedExams0UserExtraUserLogin != null) __params = __params.set('questions[0].exams[0].attendedExams[0].userExtra.user.login', params.questions0Exams0AttendedExams0UserExtraUserLogin.toString());
    if (params.questions0Exams0AttendedExams0UserExtraUserAuthorities0Name != null) __params = __params.set('questions[0].exams[0].attendedExams[0].userExtra.user.authorities[0].name', params.questions0Exams0AttendedExams0UserExtraUserAuthorities0Name.toString());
    if (params.questions0Exams0AttendedExams0UserExtraUserActivated != null) __params = __params.set('questions[0].exams[0].attendedExams[0].userExtra.user.activated', params.questions0Exams0AttendedExams0UserExtraUserActivated.toString());
    if (params.questions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0TokenValue != null) __params = __params.set('questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].tokenValue', params.questions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0TokenValue.toString());
    if (params.questions0AttendedOptions0AttendedExamUserExtraUserPassword != null) __params = __params.set('questions[0].attendedOptions[0].attendedExam.userExtra.user.password', params.questions0AttendedOptions0AttendedExamUserExtraUserPassword.toString());
    if (params.questions0AttendedOptions0AttendedExamUserExtraUserLogin != null) __params = __params.set('questions[0].attendedOptions[0].attendedExam.userExtra.user.login', params.questions0AttendedOptions0AttendedExamUserExtraUserLogin.toString());
    if (params.questions0AttendedOptions0AttendedExamUserExtraUserAuthorities0Name != null) __params = __params.set('questions[0].attendedOptions[0].attendedExam.userExtra.user.authorities[0].name', params.questions0AttendedOptions0AttendedExamUserExtraUserAuthorities0Name.toString());
    if (params.questions0AttendedOptions0AttendedExamUserExtraUserActivated != null) __params = __params.set('questions[0].attendedOptions[0].attendedExam.userExtra.user.activated', params.questions0AttendedOptions0AttendedExamUserExtraUserActivated.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0TokenValue != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].tokenValue', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0TokenValue.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserPassword != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.password', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserPassword.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserLogin != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.login', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserLogin.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserAuthorities0Name != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.authorities[0].name', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserAuthorities0Name.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserActivated != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.activated', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserActivated.toString());
    if (params.examAttendedExams0UserExtraUserPersistentTokens0TokenValue != null) __params = __params.set('exam.attendedExams[0].userExtra.user.persistentTokens[0].tokenValue', params.examAttendedExams0UserExtraUserPersistentTokens0TokenValue.toString());
    if (params.examAttendedExams0UserExtraUserPassword != null) __params = __params.set('exam.attendedExams[0].userExtra.user.password', params.examAttendedExams0UserExtraUserPassword.toString());
    if (params.examAttendedExams0UserExtraUserLogin != null) __params = __params.set('exam.attendedExams[0].userExtra.user.login', params.examAttendedExams0UserExtraUserLogin.toString());
    if (params.examAttendedExams0UserExtraUserAuthorities0Name != null) __params = __params.set('exam.attendedExams[0].userExtra.user.authorities[0].name', params.examAttendedExams0UserExtraUserAuthorities0Name.toString());
    if (params.examAttendedExams0UserExtraUserActivated != null) __params = __params.set('exam.attendedExams[0].userExtra.user.activated', params.examAttendedExams0UserExtraUserActivated.toString());

    if (params.questions0QstnOptions0Option != null) __params = __params.set('questions[0].qstnOptions[0].option', params.questions0QstnOptions0Option.toString());
    if (params.questions0QstnOptions0Id != null) __params = __params.set('questions[0].qstnOptions[0].id', params.questions0QstnOptions0Id.toString());
    if (params.questions0Qstn != null) __params = __params.set('questions[0].qstn', params.questions0Qstn.toString());
    if (params.questions0Level != null) __params = __params.set('questions[0].level', params.questions0Level.toString());
    if (params.questions0Id != null) __params = __params.set('questions[0].id', params.questions0Id.toString());
    if (params.questions0Exams0Time != null) __params = __params.set('questions[0].exams[0].time', params.questions0Exams0Time.toString());
    if (params.questions0Exams0Name != null) __params = __params.set('questions[0].exams[0].name', params.questions0Exams0Name.toString());
    if (params.questions0Exams0Level != null) __params = __params.set('questions[0].exams[0].level', params.questions0Exams0Level.toString());
    if (params.questions0Exams0Id != null) __params = __params.set('questions[0].exams[0].id', params.questions0Exams0Id.toString());
    if (params.questions0Exams0Count != null) __params = __params.set('questions[0].exams[0].count', params.questions0Exams0Count.toString());
    if (params.questions0Exams0AttendedExams0UserExtraUserResetKey != null) __params = __params.set('questions[0].exams[0].attendedExams[0].userExtra.user.resetKey', params.questions0Exams0AttendedExams0UserExtraUserResetKey.toString());
    if (params.questions0Exams0AttendedExams0UserExtraUserResetDate != null) __params = __params.set('questions[0].exams[0].attendedExams[0].userExtra.user.resetDate', params.questions0Exams0AttendedExams0UserExtraUserResetDate.toString());
    if (params.questions0Exams0AttendedExams0UserExtraUserPersistentTokens0UserAgent != null) __params = __params.set('questions[0].exams[0].attendedExams[0].userExtra.user.persistentTokens[0].userAgent', params.questions0Exams0AttendedExams0UserExtraUserPersistentTokens0UserAgent.toString());
    if (params.questions0Exams0AttendedExams0UserExtraUserPersistentTokens0TokenDate != null) __params = __params.set('questions[0].exams[0].attendedExams[0].userExtra.user.persistentTokens[0].tokenDate', params.questions0Exams0AttendedExams0UserExtraUserPersistentTokens0TokenDate.toString());
    if (params.questions0Exams0AttendedExams0UserExtraUserPersistentTokens0Series != null) __params = __params.set('questions[0].exams[0].attendedExams[0].userExtra.user.persistentTokens[0].series', params.questions0Exams0AttendedExams0UserExtraUserPersistentTokens0Series.toString());
    if (params.questions0Exams0AttendedExams0UserExtraUserPersistentTokens0IpAddress != null) __params = __params.set('questions[0].exams[0].attendedExams[0].userExtra.user.persistentTokens[0].ipAddress', params.questions0Exams0AttendedExams0UserExtraUserPersistentTokens0IpAddress.toString());
    if (params.questions0Exams0AttendedExams0UserExtraUserLastName != null) __params = __params.set('questions[0].exams[0].attendedExams[0].userExtra.user.lastName', params.questions0Exams0AttendedExams0UserExtraUserLastName.toString());
    if (params.questions0Exams0AttendedExams0UserExtraUserLastModifiedDate != null) __params = __params.set('questions[0].exams[0].attendedExams[0].userExtra.user.lastModifiedDate', params.questions0Exams0AttendedExams0UserExtraUserLastModifiedDate.toString());
    if (params.questions0Exams0AttendedExams0UserExtraUserLastModifiedBy != null) __params = __params.set('questions[0].exams[0].attendedExams[0].userExtra.user.lastModifiedBy', params.questions0Exams0AttendedExams0UserExtraUserLastModifiedBy.toString());
    if (params.questions0Exams0AttendedExams0UserExtraUserLangKey != null) __params = __params.set('questions[0].exams[0].attendedExams[0].userExtra.user.langKey', params.questions0Exams0AttendedExams0UserExtraUserLangKey.toString());
    if (params.questions0Exams0AttendedExams0UserExtraUserImageUrl != null) __params = __params.set('questions[0].exams[0].attendedExams[0].userExtra.user.imageUrl', params.questions0Exams0AttendedExams0UserExtraUserImageUrl.toString());
    if (params.questions0Exams0AttendedExams0UserExtraUserId != null) __params = __params.set('questions[0].exams[0].attendedExams[0].userExtra.user.id', params.questions0Exams0AttendedExams0UserExtraUserId.toString());
    if (params.questions0Exams0AttendedExams0UserExtraUserFirstName != null) __params = __params.set('questions[0].exams[0].attendedExams[0].userExtra.user.firstName', params.questions0Exams0AttendedExams0UserExtraUserFirstName.toString());
    if (params.questions0Exams0AttendedExams0UserExtraUserEmail != null) __params = __params.set('questions[0].exams[0].attendedExams[0].userExtra.user.email', params.questions0Exams0AttendedExams0UserExtraUserEmail.toString());
    if (params.questions0Exams0AttendedExams0UserExtraUserCreatedDate != null) __params = __params.set('questions[0].exams[0].attendedExams[0].userExtra.user.createdDate', params.questions0Exams0AttendedExams0UserExtraUserCreatedDate.toString());
    if (params.questions0Exams0AttendedExams0UserExtraUserCreatedBy != null) __params = __params.set('questions[0].exams[0].attendedExams[0].userExtra.user.createdBy', params.questions0Exams0AttendedExams0UserExtraUserCreatedBy.toString());
    if (params.questions0Exams0AttendedExams0UserExtraUserActivationKey != null) __params = __params.set('questions[0].exams[0].attendedExams[0].userExtra.user.activationKey', params.questions0Exams0AttendedExams0UserExtraUserActivationKey.toString());
    if (params.questions0Exams0AttendedExams0UserExtraId != null) __params = __params.set('questions[0].exams[0].attendedExams[0].userExtra.id', params.questions0Exams0AttendedExams0UserExtraId.toString());
    if (params.questions0Exams0AttendedExams0Total != null) __params = __params.set('questions[0].exams[0].attendedExams[0].total', params.questions0Exams0AttendedExams0Total.toString());
    if (params.questions0Exams0AttendedExams0Score != null) __params = __params.set('questions[0].exams[0].attendedExams[0].score', params.questions0Exams0AttendedExams0Score.toString());
    if (params.questions0Exams0AttendedExams0Percentage != null) __params = __params.set('questions[0].exams[0].attendedExams[0].percentage', params.questions0Exams0AttendedExams0Percentage.toString());
    if (params.questions0Exams0AttendedExams0Id != null) __params = __params.set('questions[0].exams[0].attendedExams[0].id', params.questions0Exams0AttendedExams0Id.toString());
    if (params.questions0Exams0AttendedExams0DateTime != null) __params = __params.set('questions[0].exams[0].attendedExams[0].dateTime', params.questions0Exams0AttendedExams0DateTime.toString());
    if (params.questions0Exams0AttendedExams0AttendedOptions0Id != null) __params = __params.set('questions[0].exams[0].attendedExams[0].attendedOptions[0].id', params.questions0Exams0AttendedExams0AttendedOptions0Id.toString());
    if (params.questions0Exams0AttendedExams0AttendedOptions0AttendedOpt != null) __params = __params.set('questions[0].exams[0].attendedExams[0].attendedOptions[0].attendedOpt', params.questions0Exams0AttendedExams0AttendedOptions0AttendedOpt.toString());
    if (params.questions0AttendedOptions0Id != null) __params = __params.set('questions[0].attendedOptions[0].id', params.questions0AttendedOptions0Id.toString());
    if (params.questions0AttendedOptions0AttendedOpt != null) __params = __params.set('questions[0].attendedOptions[0].attendedOpt', params.questions0AttendedOptions0AttendedOpt.toString());
    if (params.questions0AttendedOptions0AttendedExamUserExtraUserResetKey != null) __params = __params.set('questions[0].attendedOptions[0].attendedExam.userExtra.user.resetKey', params.questions0AttendedOptions0AttendedExamUserExtraUserResetKey.toString());
    if (params.questions0AttendedOptions0AttendedExamUserExtraUserResetDate != null) __params = __params.set('questions[0].attendedOptions[0].attendedExam.userExtra.user.resetDate', params.questions0AttendedOptions0AttendedExamUserExtraUserResetDate.toString());
    if (params.questions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0UserAgent != null) __params = __params.set('questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].userAgent', params.questions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0UserAgent.toString());
    if (params.questions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0TokenDate != null) __params = __params.set('questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].tokenDate', params.questions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0TokenDate.toString());
    if (params.questions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0Series != null) __params = __params.set('questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].series', params.questions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0Series.toString());
    if (params.questions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0IpAddress != null) __params = __params.set('questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].ipAddress', params.questions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0IpAddress.toString());
    if (params.questions0AttendedOptions0AttendedExamUserExtraUserLastName != null) __params = __params.set('questions[0].attendedOptions[0].attendedExam.userExtra.user.lastName', params.questions0AttendedOptions0AttendedExamUserExtraUserLastName.toString());
    if (params.questions0AttendedOptions0AttendedExamUserExtraUserLastModifiedDate != null) __params = __params.set('questions[0].attendedOptions[0].attendedExam.userExtra.user.lastModifiedDate', params.questions0AttendedOptions0AttendedExamUserExtraUserLastModifiedDate.toString());
    if (params.questions0AttendedOptions0AttendedExamUserExtraUserLastModifiedBy != null) __params = __params.set('questions[0].attendedOptions[0].attendedExam.userExtra.user.lastModifiedBy', params.questions0AttendedOptions0AttendedExamUserExtraUserLastModifiedBy.toString());
    if (params.questions0AttendedOptions0AttendedExamUserExtraUserLangKey != null) __params = __params.set('questions[0].attendedOptions[0].attendedExam.userExtra.user.langKey', params.questions0AttendedOptions0AttendedExamUserExtraUserLangKey.toString());
    if (params.questions0AttendedOptions0AttendedExamUserExtraUserImageUrl != null) __params = __params.set('questions[0].attendedOptions[0].attendedExam.userExtra.user.imageUrl', params.questions0AttendedOptions0AttendedExamUserExtraUserImageUrl.toString());
    if (params.questions0AttendedOptions0AttendedExamUserExtraUserId != null) __params = __params.set('questions[0].attendedOptions[0].attendedExam.userExtra.user.id', params.questions0AttendedOptions0AttendedExamUserExtraUserId.toString());
    if (params.questions0AttendedOptions0AttendedExamUserExtraUserFirstName != null) __params = __params.set('questions[0].attendedOptions[0].attendedExam.userExtra.user.firstName', params.questions0AttendedOptions0AttendedExamUserExtraUserFirstName.toString());
    if (params.questions0AttendedOptions0AttendedExamUserExtraUserEmail != null) __params = __params.set('questions[0].attendedOptions[0].attendedExam.userExtra.user.email', params.questions0AttendedOptions0AttendedExamUserExtraUserEmail.toString());
    if (params.questions0AttendedOptions0AttendedExamUserExtraUserCreatedDate != null) __params = __params.set('questions[0].attendedOptions[0].attendedExam.userExtra.user.createdDate', params.questions0AttendedOptions0AttendedExamUserExtraUserCreatedDate.toString());
    if (params.questions0AttendedOptions0AttendedExamUserExtraUserCreatedBy != null) __params = __params.set('questions[0].attendedOptions[0].attendedExam.userExtra.user.createdBy', params.questions0AttendedOptions0AttendedExamUserExtraUserCreatedBy.toString());
    if (params.questions0AttendedOptions0AttendedExamUserExtraUserActivationKey != null) __params = __params.set('questions[0].attendedOptions[0].attendedExam.userExtra.user.activationKey', params.questions0AttendedOptions0AttendedExamUserExtraUserActivationKey.toString());
    if (params.questions0AttendedOptions0AttendedExamUserExtraId != null) __params = __params.set('questions[0].attendedOptions[0].attendedExam.userExtra.id', params.questions0AttendedOptions0AttendedExamUserExtraId.toString());
    if (params.questions0AttendedOptions0AttendedExamTotal != null) __params = __params.set('questions[0].attendedOptions[0].attendedExam.total', params.questions0AttendedOptions0AttendedExamTotal.toString());
    if (params.questions0AttendedOptions0AttendedExamScore != null) __params = __params.set('questions[0].attendedOptions[0].attendedExam.score', params.questions0AttendedOptions0AttendedExamScore.toString());
    if (params.questions0AttendedOptions0AttendedExamPercentage != null) __params = __params.set('questions[0].attendedOptions[0].attendedExam.percentage', params.questions0AttendedOptions0AttendedExamPercentage.toString());
    if (params.questions0AttendedOptions0AttendedExamId != null) __params = __params.set('questions[0].attendedOptions[0].attendedExam.id', params.questions0AttendedOptions0AttendedExamId.toString());
    if (params.questions0AttendedOptions0AttendedExamExamTime != null) __params = __params.set('questions[0].attendedOptions[0].attendedExam.exam.time', params.questions0AttendedOptions0AttendedExamExamTime.toString());
    if (params.questions0AttendedOptions0AttendedExamExamName != null) __params = __params.set('questions[0].attendedOptions[0].attendedExam.exam.name', params.questions0AttendedOptions0AttendedExamExamName.toString());
    if (params.questions0AttendedOptions0AttendedExamExamLevel != null) __params = __params.set('questions[0].attendedOptions[0].attendedExam.exam.level', params.questions0AttendedOptions0AttendedExamExamLevel.toString());
    if (params.questions0AttendedOptions0AttendedExamExamId != null) __params = __params.set('questions[0].attendedOptions[0].attendedExam.exam.id', params.questions0AttendedOptions0AttendedExamExamId.toString());
    if (params.questions0AttendedOptions0AttendedExamExamCount != null) __params = __params.set('questions[0].attendedOptions[0].attendedExam.exam.count', params.questions0AttendedOptions0AttendedExamExamCount.toString());
    if (params.questions0AttendedOptions0AttendedExamDateTime != null) __params = __params.set('questions[0].attendedOptions[0].attendedExam.dateTime', params.questions0AttendedOptions0AttendedExamDateTime.toString());
    if (params.examTime != null) __params = __params.set('exam.time', params.examTime.toString());
    if (params.examQuestions0QstnOptions0Option != null) __params = __params.set('exam.questions[0].qstnOptions[0].option', params.examQuestions0QstnOptions0Option.toString());
    if (params.examQuestions0QstnOptions0Id != null) __params = __params.set('exam.questions[0].qstnOptions[0].id', params.examQuestions0QstnOptions0Id.toString());
    if (params.examQuestions0Qstn != null) __params = __params.set('exam.questions[0].qstn', params.examQuestions0Qstn.toString());
    if (params.examQuestions0Level != null) __params = __params.set('exam.questions[0].level', params.examQuestions0Level.toString());
    if (params.examQuestions0Id != null) __params = __params.set('exam.questions[0].id', params.examQuestions0Id.toString());
    if (params.examQuestions0AttendedOptions0Id != null) __params = __params.set('exam.questions[0].attendedOptions[0].id', params.examQuestions0AttendedOptions0Id.toString());
    if (params.examQuestions0AttendedOptions0AttendedOpt != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedOpt', params.examQuestions0AttendedOptions0AttendedOpt.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserResetKey != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.resetKey', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserResetKey.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserResetDate != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.resetDate', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserResetDate.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0UserAgent != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].userAgent', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0UserAgent.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0TokenDate != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].tokenDate', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0TokenDate.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0Series != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].series', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0Series.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0IpAddress != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].ipAddress', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0IpAddress.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserLastName != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.lastName', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserLastName.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserLastModifiedDate != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.lastModifiedDate', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserLastModifiedDate.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserLastModifiedBy != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.lastModifiedBy', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserLastModifiedBy.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserLangKey != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.langKey', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserLangKey.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserImageUrl != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.imageUrl', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserImageUrl.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserId != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.id', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserId.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserFirstName != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.firstName', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserFirstName.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserEmail != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.email', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserEmail.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserCreatedDate != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.createdDate', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserCreatedDate.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserCreatedBy != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.createdBy', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserCreatedBy.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraUserActivationKey != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.activationKey', params.examQuestions0AttendedOptions0AttendedExamUserExtraUserActivationKey.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamUserExtraId != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.userExtra.id', params.examQuestions0AttendedOptions0AttendedExamUserExtraId.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamTotal != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.total', params.examQuestions0AttendedOptions0AttendedExamTotal.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamScore != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.score', params.examQuestions0AttendedOptions0AttendedExamScore.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamPercentage != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.percentage', params.examQuestions0AttendedOptions0AttendedExamPercentage.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamId != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.id', params.examQuestions0AttendedOptions0AttendedExamId.toString());
    if (params.examQuestions0AttendedOptions0AttendedExamDateTime != null) __params = __params.set('exam.questions[0].attendedOptions[0].attendedExam.dateTime', params.examQuestions0AttendedOptions0AttendedExamDateTime.toString());
    if (params.examName != null) __params = __params.set('exam.name', params.examName.toString());
    if (params.examLevel != null) __params = __params.set('exam.level', params.examLevel.toString());
    if (params.examId != null) __params = __params.set('exam.id', params.examId.toString());
    if (params.examCount != null) __params = __params.set('exam.count', params.examCount.toString());
    if (params.examAttendedExams0UserExtraUserResetKey != null) __params = __params.set('exam.attendedExams[0].userExtra.user.resetKey', params.examAttendedExams0UserExtraUserResetKey.toString());
    if (params.examAttendedExams0UserExtraUserResetDate != null) __params = __params.set('exam.attendedExams[0].userExtra.user.resetDate', params.examAttendedExams0UserExtraUserResetDate.toString());
    if (params.examAttendedExams0UserExtraUserPersistentTokens0UserAgent != null) __params = __params.set('exam.attendedExams[0].userExtra.user.persistentTokens[0].userAgent', params.examAttendedExams0UserExtraUserPersistentTokens0UserAgent.toString());
    if (params.examAttendedExams0UserExtraUserPersistentTokens0TokenDate != null) __params = __params.set('exam.attendedExams[0].userExtra.user.persistentTokens[0].tokenDate', params.examAttendedExams0UserExtraUserPersistentTokens0TokenDate.toString());
    if (params.examAttendedExams0UserExtraUserPersistentTokens0Series != null) __params = __params.set('exam.attendedExams[0].userExtra.user.persistentTokens[0].series', params.examAttendedExams0UserExtraUserPersistentTokens0Series.toString());
    if (params.examAttendedExams0UserExtraUserPersistentTokens0IpAddress != null) __params = __params.set('exam.attendedExams[0].userExtra.user.persistentTokens[0].ipAddress', params.examAttendedExams0UserExtraUserPersistentTokens0IpAddress.toString());
    if (params.examAttendedExams0UserExtraUserLastName != null) __params = __params.set('exam.attendedExams[0].userExtra.user.lastName', params.examAttendedExams0UserExtraUserLastName.toString());
    if (params.examAttendedExams0UserExtraUserLastModifiedDate != null) __params = __params.set('exam.attendedExams[0].userExtra.user.lastModifiedDate', params.examAttendedExams0UserExtraUserLastModifiedDate.toString());
    if (params.examAttendedExams0UserExtraUserLastModifiedBy != null) __params = __params.set('exam.attendedExams[0].userExtra.user.lastModifiedBy', params.examAttendedExams0UserExtraUserLastModifiedBy.toString());
    if (params.examAttendedExams0UserExtraUserLangKey != null) __params = __params.set('exam.attendedExams[0].userExtra.user.langKey', params.examAttendedExams0UserExtraUserLangKey.toString());
    if (params.examAttendedExams0UserExtraUserImageUrl != null) __params = __params.set('exam.attendedExams[0].userExtra.user.imageUrl', params.examAttendedExams0UserExtraUserImageUrl.toString());
    if (params.examAttendedExams0UserExtraUserId != null) __params = __params.set('exam.attendedExams[0].userExtra.user.id', params.examAttendedExams0UserExtraUserId.toString());
    if (params.examAttendedExams0UserExtraUserFirstName != null) __params = __params.set('exam.attendedExams[0].userExtra.user.firstName', params.examAttendedExams0UserExtraUserFirstName.toString());
    if (params.examAttendedExams0UserExtraUserEmail != null) __params = __params.set('exam.attendedExams[0].userExtra.user.email', params.examAttendedExams0UserExtraUserEmail.toString());
    if (params.examAttendedExams0UserExtraUserCreatedDate != null) __params = __params.set('exam.attendedExams[0].userExtra.user.createdDate', params.examAttendedExams0UserExtraUserCreatedDate.toString());
    if (params.examAttendedExams0UserExtraUserCreatedBy != null) __params = __params.set('exam.attendedExams[0].userExtra.user.createdBy', params.examAttendedExams0UserExtraUserCreatedBy.toString());
    if (params.examAttendedExams0UserExtraUserActivationKey != null) __params = __params.set('exam.attendedExams[0].userExtra.user.activationKey', params.examAttendedExams0UserExtraUserActivationKey.toString());
    if (params.examAttendedExams0UserExtraId != null) __params = __params.set('exam.attendedExams[0].userExtra.id', params.examAttendedExams0UserExtraId.toString());
    if (params.examAttendedExams0Total != null) __params = __params.set('exam.attendedExams[0].total', params.examAttendedExams0Total.toString());
    if (params.examAttendedExams0Score != null) __params = __params.set('exam.attendedExams[0].score', params.examAttendedExams0Score.toString());
    if (params.examAttendedExams0Percentage != null) __params = __params.set('exam.attendedExams[0].percentage', params.examAttendedExams0Percentage.toString());
    if (params.examAttendedExams0Id != null) __params = __params.set('exam.attendedExams[0].id', params.examAttendedExams0Id.toString());
    if (params.examAttendedExams0DateTime != null) __params = __params.set('exam.attendedExams[0].dateTime', params.examAttendedExams0DateTime.toString());
    if (params.examAttendedExams0AttendedOptions0QuestionQstnOptions0Option != null) __params = __params.set('exam.attendedExams[0].attendedOptions[0].question.qstnOptions[0].option', params.examAttendedExams0AttendedOptions0QuestionQstnOptions0Option.toString());
    if (params.examAttendedExams0AttendedOptions0QuestionQstnOptions0Id != null) __params = __params.set('exam.attendedExams[0].attendedOptions[0].question.qstnOptions[0].id', params.examAttendedExams0AttendedOptions0QuestionQstnOptions0Id.toString());
    if (params.examAttendedExams0AttendedOptions0QuestionQstn != null) __params = __params.set('exam.attendedExams[0].attendedOptions[0].question.qstn', params.examAttendedExams0AttendedOptions0QuestionQstn.toString());
    if (params.examAttendedExams0AttendedOptions0QuestionLevel != null) __params = __params.set('exam.attendedExams[0].attendedOptions[0].question.level', params.examAttendedExams0AttendedOptions0QuestionLevel.toString());
    if (params.examAttendedExams0AttendedOptions0QuestionId != null) __params = __params.set('exam.attendedExams[0].attendedOptions[0].question.id', params.examAttendedExams0AttendedOptions0QuestionId.toString());
    if (params.examAttendedExams0AttendedOptions0Id != null) __params = __params.set('exam.attendedExams[0].attendedOptions[0].id', params.examAttendedExams0AttendedOptions0Id.toString());
    if (params.examAttendedExams0AttendedOptions0AttendedOpt != null) __params = __params.set('exam.attendedExams[0].attendedOptions[0].attendedOpt', params.examAttendedExams0AttendedOptions0AttendedOpt.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/mocktest-controller/getSelectedExamDetails/${encodeURIComponent(params.eId)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ExamModel>;
      })
    );
  }
  /**
   * selectExam
   * @param params The `MocktestControllerResourceService.SelectExamUsingGETParams` containing the following parameters:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.persistentTokens[0].tokenValue`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.password`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.login`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.authorities[0].name`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.activated`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].tokenValue`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.password`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.login`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.authorities[0].name`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.activated`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].tokenValue`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.password`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.login`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.authorities[0].name`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.activated`:
   *
   * - `exam.attendedExams[0].userExtra.user.persistentTokens[0].tokenValue`:
   *
   * - `exam.attendedExams[0].userExtra.user.password`:
   *
   * - `exam.attendedExams[0].userExtra.user.login`:
   *
   * - `exam.attendedExams[0].userExtra.user.authorities[0].name`:
   *
   * - `exam.attendedExams[0].userExtra.user.activated`:
   *
   * - `eId`: eId
   *
   * - `questions[0].qstnOptions[0].option`:
   *
   * - `questions[0].qstnOptions[0].id`:
   *
   * - `questions[0].qstn`:
   *
   * - `questions[0].level`:
   *
   * - `questions[0].id`:
   *
   * - `questions[0].exams[0].time`:
   *
   * - `questions[0].exams[0].name`:
   *
   * - `questions[0].exams[0].level`:
   *
   * - `questions[0].exams[0].id`:
   *
   * - `questions[0].exams[0].count`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.resetKey`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.resetDate`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.persistentTokens[0].userAgent`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.persistentTokens[0].tokenDate`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.persistentTokens[0].series`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.persistentTokens[0].ipAddress`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.lastName`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.lastModifiedDate`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.lastModifiedBy`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.langKey`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.imageUrl`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.id`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.firstName`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.email`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.createdDate`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.createdBy`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.user.activationKey`:
   *
   * - `questions[0].exams[0].attendedExams[0].userExtra.id`:
   *
   * - `questions[0].exams[0].attendedExams[0].total`:
   *
   * - `questions[0].exams[0].attendedExams[0].score`:
   *
   * - `questions[0].exams[0].attendedExams[0].percentage`:
   *
   * - `questions[0].exams[0].attendedExams[0].id`:
   *
   * - `questions[0].exams[0].attendedExams[0].dateTime`:
   *
   * - `questions[0].exams[0].attendedExams[0].attendedOptions[0].id`:
   *
   * - `questions[0].exams[0].attendedExams[0].attendedOptions[0].attendedOpt`:
   *
   * - `questions[0].attendedOptions[0].id`:
   *
   * - `questions[0].attendedOptions[0].attendedOpt`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.resetKey`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.resetDate`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].userAgent`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].tokenDate`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].series`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].ipAddress`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.lastName`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.lastModifiedDate`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.lastModifiedBy`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.langKey`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.imageUrl`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.id`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.firstName`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.email`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.createdDate`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.createdBy`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.user.activationKey`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.userExtra.id`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.total`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.score`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.percentage`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.id`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.exam.time`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.exam.name`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.exam.level`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.exam.id`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.exam.count`:
   *
   * - `questions[0].attendedOptions[0].attendedExam.dateTime`:
   *
   * - `exam.time`:
   *
   * - `exam.questions[0].qstnOptions[0].option`:
   *
   * - `exam.questions[0].qstnOptions[0].id`:
   *
   * - `exam.questions[0].qstn`:
   *
   * - `exam.questions[0].level`:
   *
   * - `exam.questions[0].id`:
   *
   * - `exam.questions[0].attendedOptions[0].id`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedOpt`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.resetKey`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.resetDate`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].userAgent`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].tokenDate`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].series`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.persistentTokens[0].ipAddress`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.lastName`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.lastModifiedDate`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.lastModifiedBy`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.langKey`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.imageUrl`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.id`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.firstName`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.email`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.createdDate`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.createdBy`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.user.activationKey`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.userExtra.id`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.total`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.score`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.percentage`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.id`:
   *
   * - `exam.questions[0].attendedOptions[0].attendedExam.dateTime`:
   *
   * - `exam.name`:
   *
   * - `exam.level`:
   *
   * - `exam.id`:
   *
   * - `exam.count`:
   *
   * - `exam.attendedExams[0].userExtra.user.resetKey`:
   *
   * - `exam.attendedExams[0].userExtra.user.resetDate`:
   *
   * - `exam.attendedExams[0].userExtra.user.persistentTokens[0].userAgent`:
   *
   * - `exam.attendedExams[0].userExtra.user.persistentTokens[0].tokenDate`:
   *
   * - `exam.attendedExams[0].userExtra.user.persistentTokens[0].series`:
   *
   * - `exam.attendedExams[0].userExtra.user.persistentTokens[0].ipAddress`:
   *
   * - `exam.attendedExams[0].userExtra.user.lastName`:
   *
   * - `exam.attendedExams[0].userExtra.user.lastModifiedDate`:
   *
   * - `exam.attendedExams[0].userExtra.user.lastModifiedBy`:
   *
   * - `exam.attendedExams[0].userExtra.user.langKey`:
   *
   * - `exam.attendedExams[0].userExtra.user.imageUrl`:
   *
   * - `exam.attendedExams[0].userExtra.user.id`:
   *
   * - `exam.attendedExams[0].userExtra.user.firstName`:
   *
   * - `exam.attendedExams[0].userExtra.user.email`:
   *
   * - `exam.attendedExams[0].userExtra.user.createdDate`:
   *
   * - `exam.attendedExams[0].userExtra.user.createdBy`:
   *
   * - `exam.attendedExams[0].userExtra.user.activationKey`:
   *
   * - `exam.attendedExams[0].userExtra.id`:
   *
   * - `exam.attendedExams[0].total`:
   *
   * - `exam.attendedExams[0].score`:
   *
   * - `exam.attendedExams[0].percentage`:
   *
   * - `exam.attendedExams[0].id`:
   *
   * - `exam.attendedExams[0].dateTime`:
   *
   * - `exam.attendedExams[0].attendedOptions[0].question.qstnOptions[0].option`:
   *
   * - `exam.attendedExams[0].attendedOptions[0].question.qstnOptions[0].id`:
   *
   * - `exam.attendedExams[0].attendedOptions[0].question.qstn`:
   *
   * - `exam.attendedExams[0].attendedOptions[0].question.level`:
   *
   * - `exam.attendedExams[0].attendedOptions[0].question.id`:
   *
   * - `exam.attendedExams[0].attendedOptions[0].id`:
   *
   * - `exam.attendedExams[0].attendedOptions[0].attendedOpt`:
   *
   * @return OK
   */
  selectExamUsingGET(params: MocktestControllerResourceService.SelectExamUsingGETParams): __Observable<ExamModel> {
    return this.selectExamUsingGETResponse(params).pipe(
      __map(_r => _r.body as ExamModel)
    );
  }

  /**
   * index
   * @param login login
   * @return OK
   */
  indexUsingPOSTResponse(login: string): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/mocktest-controller/login/${encodeURIComponent(login)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * index
   * @param login login
   * @return OK
   */
  indexUsingPOST(login: string): __Observable<string> {
    return this.indexUsingPOSTResponse(login).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * register
   * @return OK
   */
  registerUsingGETResponse(): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/mocktest-controller/register`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * register
   * @return OK
   */
  registerUsingGET(): __Observable<User> {
    return this.registerUsingGETResponse().pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * register
   * @return OK
   */
  registerUsingHEADResponse(): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'HEAD',
      this.rootUrl + `/api/mocktest-controller/register`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * register
   * @return OK
   */
  registerUsingHEAD(): __Observable<User> {
    return this.registerUsingHEADResponse().pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * register
   * @return OK
   */
  registerUsingPOSTResponse(): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/mocktest-controller/register`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * register
   * @return OK
   */
  registerUsingPOST(): __Observable<User> {
    return this.registerUsingPOSTResponse().pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * register
   * @return OK
   */
  registerUsingPUTResponse(): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/mocktest-controller/register`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * register
   * @return OK
   */
  registerUsingPUT(): __Observable<User> {
    return this.registerUsingPUTResponse().pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * register
   * @return OK
   */
  registerUsingDELETEResponse(): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/mocktest-controller/register`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * register
   * @return OK
   */
  registerUsingDELETE(): __Observable<User> {
    return this.registerUsingDELETEResponse().pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * register
   * @return OK
   */
  registerUsingOPTIONSResponse(): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'OPTIONS',
      this.rootUrl + `/api/mocktest-controller/register`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * register
   * @return OK
   */
  registerUsingOPTIONS(): __Observable<User> {
    return this.registerUsingOPTIONSResponse().pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * register
   * @return OK
   */
  registerUsingPATCHResponse(): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/mocktest-controller/register`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * register
   * @return OK
   */
  registerUsingPATCH(): __Observable<User> {
    return this.registerUsingPATCHResponse().pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * save_option
   * @param params The `MocktestControllerResourceService.SaveOptionUsingPOSTParams` containing the following parameters:
   *
   * - `user`: user
   *
   * - `eId`: eId
   *
   * - `answers`: answers
   *
   * @return OK
   */
  saveOptionUsingPOSTResponse(params: MocktestControllerResourceService.SaveOptionUsingPOSTParams): __Observable<__StrictHttpResponse<AttendedExam>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.user;


    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/mocktest-controller/save_answers/${encodeURIComponent(params.eId)}/${encodeURIComponent(params.answers)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AttendedExam>;
      })
    );
  }
  /**
   * save_option
   * @param params The `MocktestControllerResourceService.SaveOptionUsingPOSTParams` containing the following parameters:
   *
   * - `user`: user
   *
   * - `eId`: eId
   *
   * - `answers`: answers
   *
   * @return OK
   */
  saveOptionUsingPOST(params: MocktestControllerResourceService.SaveOptionUsingPOSTParams): __Observable<AttendedExam> {
    return this.saveOptionUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as AttendedExam)
    );
  }

  /**
   * submit
   * @param params The `MocktestControllerResourceService.SubmitUsingGETParams` containing the following parameters:
   *
   * - `eId`: eId
   *
   * - `aExamId`: aExamId
   *
   * @return OK
   */
  submitUsingGETResponse(params: MocktestControllerResourceService.SubmitUsingGETParams): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.eId != null) __params = __params.set('eId', params.eId.toString());
    if (params.aExamId != null) __params = __params.set('aExamId', params.aExamId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/mocktest-controller/submit`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * submit
   * @param params The `MocktestControllerResourceService.SubmitUsingGETParams` containing the following parameters:
   *
   * - `eId`: eId
   *
   * - `aExamId`: aExamId
   *
   * @return OK
   */
  submitUsingGET(params: MocktestControllerResourceService.SubmitUsingGETParams): __Observable<string> {
    return this.submitUsingGETResponse(params).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * submit
   * @param params The `MocktestControllerResourceService.SubmitUsingHEADParams` containing the following parameters:
   *
   * - `eId`: eId
   *
   * - `aExamId`: aExamId
   *
   * @return OK
   */
  submitUsingHEADResponse(params: MocktestControllerResourceService.SubmitUsingHEADParams): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.eId != null) __params = __params.set('eId', params.eId.toString());
    if (params.aExamId != null) __params = __params.set('aExamId', params.aExamId.toString());
    let req = new HttpRequest<any>(
      'HEAD',
      this.rootUrl + `/api/mocktest-controller/submit`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * submit
   * @param params The `MocktestControllerResourceService.SubmitUsingHEADParams` containing the following parameters:
   *
   * - `eId`: eId
   *
   * - `aExamId`: aExamId
   *
   * @return OK
   */
  submitUsingHEAD(params: MocktestControllerResourceService.SubmitUsingHEADParams): __Observable<string> {
    return this.submitUsingHEADResponse(params).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * submit
   * @param params The `MocktestControllerResourceService.SubmitUsingPOSTParams` containing the following parameters:
   *
   * - `eId`: eId
   *
   * - `aExamId`: aExamId
   *
   * @return OK
   */
  submitUsingPOSTResponse(params: MocktestControllerResourceService.SubmitUsingPOSTParams): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.eId != null) __params = __params.set('eId', params.eId.toString());
    if (params.aExamId != null) __params = __params.set('aExamId', params.aExamId.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/mocktest-controller/submit`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * submit
   * @param params The `MocktestControllerResourceService.SubmitUsingPOSTParams` containing the following parameters:
   *
   * - `eId`: eId
   *
   * - `aExamId`: aExamId
   *
   * @return OK
   */
  submitUsingPOST(params: MocktestControllerResourceService.SubmitUsingPOSTParams): __Observable<string> {
    return this.submitUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * submit
   * @param params The `MocktestControllerResourceService.SubmitUsingPUTParams` containing the following parameters:
   *
   * - `eId`: eId
   *
   * - `aExamId`: aExamId
   *
   * @return OK
   */
  submitUsingPUTResponse(params: MocktestControllerResourceService.SubmitUsingPUTParams): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.eId != null) __params = __params.set('eId', params.eId.toString());
    if (params.aExamId != null) __params = __params.set('aExamId', params.aExamId.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/mocktest-controller/submit`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * submit
   * @param params The `MocktestControllerResourceService.SubmitUsingPUTParams` containing the following parameters:
   *
   * - `eId`: eId
   *
   * - `aExamId`: aExamId
   *
   * @return OK
   */
  submitUsingPUT(params: MocktestControllerResourceService.SubmitUsingPUTParams): __Observable<string> {
    return this.submitUsingPUTResponse(params).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * submit
   * @param params The `MocktestControllerResourceService.SubmitUsingDELETEParams` containing the following parameters:
   *
   * - `eId`: eId
   *
   * - `aExamId`: aExamId
   *
   * @return OK
   */
  submitUsingDELETEResponse(params: MocktestControllerResourceService.SubmitUsingDELETEParams): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.eId != null) __params = __params.set('eId', params.eId.toString());
    if (params.aExamId != null) __params = __params.set('aExamId', params.aExamId.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/mocktest-controller/submit`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * submit
   * @param params The `MocktestControllerResourceService.SubmitUsingDELETEParams` containing the following parameters:
   *
   * - `eId`: eId
   *
   * - `aExamId`: aExamId
   *
   * @return OK
   */
  submitUsingDELETE(params: MocktestControllerResourceService.SubmitUsingDELETEParams): __Observable<string> {
    return this.submitUsingDELETEResponse(params).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * submit
   * @param params The `MocktestControllerResourceService.SubmitUsingOPTIONSParams` containing the following parameters:
   *
   * - `eId`: eId
   *
   * - `aExamId`: aExamId
   *
   * @return OK
   */
  submitUsingOPTIONSResponse(params: MocktestControllerResourceService.SubmitUsingOPTIONSParams): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.eId != null) __params = __params.set('eId', params.eId.toString());
    if (params.aExamId != null) __params = __params.set('aExamId', params.aExamId.toString());
    let req = new HttpRequest<any>(
      'OPTIONS',
      this.rootUrl + `/api/mocktest-controller/submit`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * submit
   * @param params The `MocktestControllerResourceService.SubmitUsingOPTIONSParams` containing the following parameters:
   *
   * - `eId`: eId
   *
   * - `aExamId`: aExamId
   *
   * @return OK
   */
  submitUsingOPTIONS(params: MocktestControllerResourceService.SubmitUsingOPTIONSParams): __Observable<string> {
    return this.submitUsingOPTIONSResponse(params).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * submit
   * @param params The `MocktestControllerResourceService.SubmitUsingPATCHParams` containing the following parameters:
   *
   * - `eId`: eId
   *
   * - `aExamId`: aExamId
   *
   * @return OK
   */
  submitUsingPATCHResponse(params: MocktestControllerResourceService.SubmitUsingPATCHParams): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.eId != null) __params = __params.set('eId', params.eId.toString());
    if (params.aExamId != null) __params = __params.set('aExamId', params.aExamId.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/mocktest-controller/submit`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * submit
   * @param params The `MocktestControllerResourceService.SubmitUsingPATCHParams` containing the following parameters:
   *
   * - `eId`: eId
   *
   * - `aExamId`: aExamId
   *
   * @return OK
   */
  submitUsingPATCH(params: MocktestControllerResourceService.SubmitUsingPATCHParams): __Observable<string> {
    return this.submitUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * updateExam
   * @param exam exam
   */
  updateExamUsingPUT1Response(exam: Exam): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = exam;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/mocktest-controller/update_exam`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * updateExam
   * @param exam exam
   */
  updateExamUsingPUT1(exam: Exam): __Observable<null> {
    return this.updateExamUsingPUT1Response(exam).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * userDashboard
   * @param params The `MocktestControllerResourceService.UserDashboardUsingGETParams` containing the following parameters:
   *
   * - `login`: login
   *
   * - `currentUser.user.persistentTokens[0].tokenValue`:
   *
   * - `currentUser.user.password`:
   *
   * - `currentUser.user.login`:
   *
   * - `currentUser.user.authorities[0].name`:
   *
   * - `currentUser.user.activated`:
   *
   * - `attendedExamList[0].user.persistentTokens[0].tokenValue`:
   *
   * - `attendedExamList[0].user.password`:
   *
   * - `attendedExamList[0].user.login`:
   *
   * - `attendedExamList[0].user.authorities[0].name`:
   *
   * - `attendedExamList[0].user.activated`:
   *
   * - `userId`:
   *
   * - `currentUser.user.resetKey`:
   *
   * - `currentUser.user.resetDate`:
   *
   * - `currentUser.user.persistentTokens[0].userAgent`:
   *
   * - `currentUser.user.persistentTokens[0].tokenDate`:
   *
   * - `currentUser.user.persistentTokens[0].series`:
   *
   * - `currentUser.user.persistentTokens[0].ipAddress`:
   *
   * - `currentUser.user.lastName`:
   *
   * - `currentUser.user.lastModifiedDate`:
   *
   * - `currentUser.user.lastModifiedBy`:
   *
   * - `currentUser.user.langKey`:
   *
   * - `currentUser.user.imageUrl`:
   *
   * - `currentUser.user.id`:
   *
   * - `currentUser.user.firstName`:
   *
   * - `currentUser.user.email`:
   *
   * - `currentUser.user.createdDate`:
   *
   * - `currentUser.user.createdBy`:
   *
   * - `currentUser.user.activationKey`:
   *
   * - `currentUser.id`:
   *
   * - `currentUser.attendedExams[0].total`:
   *
   * - `currentUser.attendedExams[0].score`:
   *
   * - `currentUser.attendedExams[0].percentage`:
   *
   * - `currentUser.attendedExams[0].id`:
   *
   * - `currentUser.attendedExams[0].exam.time`:
   *
   * - `currentUser.attendedExams[0].exam.questions[0].qstnOptions[0].option`:
   *
   * - `currentUser.attendedExams[0].exam.questions[0].qstnOptions[0].id`:
   *
   * - `currentUser.attendedExams[0].exam.questions[0].qstn`:
   *
   * - `currentUser.attendedExams[0].exam.questions[0].level`:
   *
   * - `currentUser.attendedExams[0].exam.questions[0].id`:
   *
   * - `currentUser.attendedExams[0].exam.questions[0].attendedOptions[0].id`:
   *
   * - `currentUser.attendedExams[0].exam.questions[0].attendedOptions[0].attendedOpt`:
   *
   * - `currentUser.attendedExams[0].exam.name`:
   *
   * - `currentUser.attendedExams[0].exam.level`:
   *
   * - `currentUser.attendedExams[0].exam.id`:
   *
   * - `currentUser.attendedExams[0].exam.count`:
   *
   * - `currentUser.attendedExams[0].dateTime`:
   *
   * - `currentUser.attendedExams[0].attendedOptions[0].question.qstnOptions[0].option`:
   *
   * - `currentUser.attendedExams[0].attendedOptions[0].question.qstnOptions[0].id`:
   *
   * - `currentUser.attendedExams[0].attendedOptions[0].question.qstn`:
   *
   * - `currentUser.attendedExams[0].attendedOptions[0].question.level`:
   *
   * - `currentUser.attendedExams[0].attendedOptions[0].question.id`:
   *
   * - `currentUser.attendedExams[0].attendedOptions[0].question.exams[0].time`:
   *
   * - `currentUser.attendedExams[0].attendedOptions[0].question.exams[0].name`:
   *
   * - `currentUser.attendedExams[0].attendedOptions[0].question.exams[0].level`:
   *
   * - `currentUser.attendedExams[0].attendedOptions[0].question.exams[0].id`:
   *
   * - `currentUser.attendedExams[0].attendedOptions[0].question.exams[0].count`:
   *
   * - `currentUser.attendedExams[0].attendedOptions[0].id`:
   *
   * - `currentUser.attendedExams[0].attendedOptions[0].attendedOpt`:
   *
   * - `attendedExamList[0].user.resetKey`:
   *
   * - `attendedExamList[0].user.resetDate`:
   *
   * - `attendedExamList[0].user.persistentTokens[0].userAgent`:
   *
   * - `attendedExamList[0].user.persistentTokens[0].tokenDate`:
   *
   * - `attendedExamList[0].user.persistentTokens[0].series`:
   *
   * - `attendedExamList[0].user.persistentTokens[0].ipAddress`:
   *
   * - `attendedExamList[0].user.lastName`:
   *
   * - `attendedExamList[0].user.lastModifiedDate`:
   *
   * - `attendedExamList[0].user.lastModifiedBy`:
   *
   * - `attendedExamList[0].user.langKey`:
   *
   * - `attendedExamList[0].user.imageUrl`:
   *
   * - `attendedExamList[0].user.id`:
   *
   * - `attendedExamList[0].user.firstName`:
   *
   * - `attendedExamList[0].user.email`:
   *
   * - `attendedExamList[0].user.createdDate`:
   *
   * - `attendedExamList[0].user.createdBy`:
   *
   * - `attendedExamList[0].user.activationKey`:
   *
   * - `attendedExamList[0].total`:
   *
   * - `attendedExamList[0].score`:
   *
   * - `attendedExamList[0].result`:
   *
   * - `attendedExamList[0].percentage`:
   *
   * - `attendedExamList[0].examName`:
   *
   * - `attendedExamList[0].examId`:
   *
   * - `attendedExamList[0].dateTime`:
   *
   * @return OK
   */
  userDashboardUsingGETResponse(params: MocktestControllerResourceService.UserDashboardUsingGETParams): __Observable<__StrictHttpResponse<UserDashBoard>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.currentUserUserPersistentTokens0TokenValue != null) __params = __params.set('currentUser.user.persistentTokens[0].tokenValue', params.currentUserUserPersistentTokens0TokenValue.toString());
    if (params.currentUserUserPassword != null) __params = __params.set('currentUser.user.password', params.currentUserUserPassword.toString());
    if (params.currentUserUserLogin != null) __params = __params.set('currentUser.user.login', params.currentUserUserLogin.toString());
    if (params.currentUserUserAuthorities0Name != null) __params = __params.set('currentUser.user.authorities[0].name', params.currentUserUserAuthorities0Name.toString());
    if (params.currentUserUserActivated != null) __params = __params.set('currentUser.user.activated', params.currentUserUserActivated.toString());
    if (params.attendedExamList0UserPersistentTokens0TokenValue != null) __params = __params.set('attendedExamList[0].user.persistentTokens[0].tokenValue', params.attendedExamList0UserPersistentTokens0TokenValue.toString());
    if (params.attendedExamList0UserPassword != null) __params = __params.set('attendedExamList[0].user.password', params.attendedExamList0UserPassword.toString());
    if (params.attendedExamList0UserLogin != null) __params = __params.set('attendedExamList[0].user.login', params.attendedExamList0UserLogin.toString());
    if (params.attendedExamList0UserAuthorities0Name != null) __params = __params.set('attendedExamList[0].user.authorities[0].name', params.attendedExamList0UserAuthorities0Name.toString());
    if (params.attendedExamList0UserActivated != null) __params = __params.set('attendedExamList[0].user.activated', params.attendedExamList0UserActivated.toString());
    if (params.userId != null) __params = __params.set('userId', params.userId.toString());
    if (params.currentUserUserResetKey != null) __params = __params.set('currentUser.user.resetKey', params.currentUserUserResetKey.toString());
    if (params.currentUserUserResetDate != null) __params = __params.set('currentUser.user.resetDate', params.currentUserUserResetDate.toString());
    if (params.currentUserUserPersistentTokens0UserAgent != null) __params = __params.set('currentUser.user.persistentTokens[0].userAgent', params.currentUserUserPersistentTokens0UserAgent.toString());
    if (params.currentUserUserPersistentTokens0TokenDate != null) __params = __params.set('currentUser.user.persistentTokens[0].tokenDate', params.currentUserUserPersistentTokens0TokenDate.toString());
    if (params.currentUserUserPersistentTokens0Series != null) __params = __params.set('currentUser.user.persistentTokens[0].series', params.currentUserUserPersistentTokens0Series.toString());
    if (params.currentUserUserPersistentTokens0IpAddress != null) __params = __params.set('currentUser.user.persistentTokens[0].ipAddress', params.currentUserUserPersistentTokens0IpAddress.toString());
    if (params.currentUserUserLastName != null) __params = __params.set('currentUser.user.lastName', params.currentUserUserLastName.toString());
    if (params.currentUserUserLastModifiedDate != null) __params = __params.set('currentUser.user.lastModifiedDate', params.currentUserUserLastModifiedDate.toString());
    if (params.currentUserUserLastModifiedBy != null) __params = __params.set('currentUser.user.lastModifiedBy', params.currentUserUserLastModifiedBy.toString());
    if (params.currentUserUserLangKey != null) __params = __params.set('currentUser.user.langKey', params.currentUserUserLangKey.toString());
    if (params.currentUserUserImageUrl != null) __params = __params.set('currentUser.user.imageUrl', params.currentUserUserImageUrl.toString());
    if (params.currentUserUserId != null) __params = __params.set('currentUser.user.id', params.currentUserUserId.toString());
    if (params.currentUserUserFirstName != null) __params = __params.set('currentUser.user.firstName', params.currentUserUserFirstName.toString());
    if (params.currentUserUserEmail != null) __params = __params.set('currentUser.user.email', params.currentUserUserEmail.toString());
    if (params.currentUserUserCreatedDate != null) __params = __params.set('currentUser.user.createdDate', params.currentUserUserCreatedDate.toString());
    if (params.currentUserUserCreatedBy != null) __params = __params.set('currentUser.user.createdBy', params.currentUserUserCreatedBy.toString());
    if (params.currentUserUserActivationKey != null) __params = __params.set('currentUser.user.activationKey', params.currentUserUserActivationKey.toString());
    if (params.currentUserId != null) __params = __params.set('currentUser.id', params.currentUserId.toString());
    if (params.currentUserAttendedExams0Total != null) __params = __params.set('currentUser.attendedExams[0].total', params.currentUserAttendedExams0Total.toString());
    if (params.currentUserAttendedExams0Score != null) __params = __params.set('currentUser.attendedExams[0].score', params.currentUserAttendedExams0Score.toString());
    if (params.currentUserAttendedExams0Percentage != null) __params = __params.set('currentUser.attendedExams[0].percentage', params.currentUserAttendedExams0Percentage.toString());
    if (params.currentUserAttendedExams0Id != null) __params = __params.set('currentUser.attendedExams[0].id', params.currentUserAttendedExams0Id.toString());
    if (params.currentUserAttendedExams0ExamTime != null) __params = __params.set('currentUser.attendedExams[0].exam.time', params.currentUserAttendedExams0ExamTime.toString());
    if (params.currentUserAttendedExams0ExamQuestions0QstnOptions0Option != null) __params = __params.set('currentUser.attendedExams[0].exam.questions[0].qstnOptions[0].option', params.currentUserAttendedExams0ExamQuestions0QstnOptions0Option.toString());
    if (params.currentUserAttendedExams0ExamQuestions0QstnOptions0Id != null) __params = __params.set('currentUser.attendedExams[0].exam.questions[0].qstnOptions[0].id', params.currentUserAttendedExams0ExamQuestions0QstnOptions0Id.toString());
    if (params.currentUserAttendedExams0ExamQuestions0Qstn != null) __params = __params.set('currentUser.attendedExams[0].exam.questions[0].qstn', params.currentUserAttendedExams0ExamQuestions0Qstn.toString());
    if (params.currentUserAttendedExams0ExamQuestions0Level != null) __params = __params.set('currentUser.attendedExams[0].exam.questions[0].level', params.currentUserAttendedExams0ExamQuestions0Level.toString());
    if (params.currentUserAttendedExams0ExamQuestions0Id != null) __params = __params.set('currentUser.attendedExams[0].exam.questions[0].id', params.currentUserAttendedExams0ExamQuestions0Id.toString());
    if (params.currentUserAttendedExams0ExamQuestions0AttendedOptions0Id != null) __params = __params.set('currentUser.attendedExams[0].exam.questions[0].attendedOptions[0].id', params.currentUserAttendedExams0ExamQuestions0AttendedOptions0Id.toString());
    if (params.currentUserAttendedExams0ExamQuestions0AttendedOptions0AttendedOpt != null) __params = __params.set('currentUser.attendedExams[0].exam.questions[0].attendedOptions[0].attendedOpt', params.currentUserAttendedExams0ExamQuestions0AttendedOptions0AttendedOpt.toString());
    if (params.currentUserAttendedExams0ExamName != null) __params = __params.set('currentUser.attendedExams[0].exam.name', params.currentUserAttendedExams0ExamName.toString());
    if (params.currentUserAttendedExams0ExamLevel != null) __params = __params.set('currentUser.attendedExams[0].exam.level', params.currentUserAttendedExams0ExamLevel.toString());
    if (params.currentUserAttendedExams0ExamId != null) __params = __params.set('currentUser.attendedExams[0].exam.id', params.currentUserAttendedExams0ExamId.toString());
    if (params.currentUserAttendedExams0ExamCount != null) __params = __params.set('currentUser.attendedExams[0].exam.count', params.currentUserAttendedExams0ExamCount.toString());
    if (params.currentUserAttendedExams0DateTime != null) __params = __params.set('currentUser.attendedExams[0].dateTime', params.currentUserAttendedExams0DateTime.toString());
    if (params.currentUserAttendedExams0AttendedOptions0QuestionQstnOptions0Option != null) __params = __params.set('currentUser.attendedExams[0].attendedOptions[0].question.qstnOptions[0].option', params.currentUserAttendedExams0AttendedOptions0QuestionQstnOptions0Option.toString());
    if (params.currentUserAttendedExams0AttendedOptions0QuestionQstnOptions0Id != null) __params = __params.set('currentUser.attendedExams[0].attendedOptions[0].question.qstnOptions[0].id', params.currentUserAttendedExams0AttendedOptions0QuestionQstnOptions0Id.toString());
    if (params.currentUserAttendedExams0AttendedOptions0QuestionQstn != null) __params = __params.set('currentUser.attendedExams[0].attendedOptions[0].question.qstn', params.currentUserAttendedExams0AttendedOptions0QuestionQstn.toString());
    if (params.currentUserAttendedExams0AttendedOptions0QuestionLevel != null) __params = __params.set('currentUser.attendedExams[0].attendedOptions[0].question.level', params.currentUserAttendedExams0AttendedOptions0QuestionLevel.toString());
    if (params.currentUserAttendedExams0AttendedOptions0QuestionId != null) __params = __params.set('currentUser.attendedExams[0].attendedOptions[0].question.id', params.currentUserAttendedExams0AttendedOptions0QuestionId.toString());
    if (params.currentUserAttendedExams0AttendedOptions0QuestionExams0Time != null) __params = __params.set('currentUser.attendedExams[0].attendedOptions[0].question.exams[0].time', params.currentUserAttendedExams0AttendedOptions0QuestionExams0Time.toString());
    if (params.currentUserAttendedExams0AttendedOptions0QuestionExams0Name != null) __params = __params.set('currentUser.attendedExams[0].attendedOptions[0].question.exams[0].name', params.currentUserAttendedExams0AttendedOptions0QuestionExams0Name.toString());
    if (params.currentUserAttendedExams0AttendedOptions0QuestionExams0Level != null) __params = __params.set('currentUser.attendedExams[0].attendedOptions[0].question.exams[0].level', params.currentUserAttendedExams0AttendedOptions0QuestionExams0Level.toString());
    if (params.currentUserAttendedExams0AttendedOptions0QuestionExams0Id != null) __params = __params.set('currentUser.attendedExams[0].attendedOptions[0].question.exams[0].id', params.currentUserAttendedExams0AttendedOptions0QuestionExams0Id.toString());
    if (params.currentUserAttendedExams0AttendedOptions0QuestionExams0Count != null) __params = __params.set('currentUser.attendedExams[0].attendedOptions[0].question.exams[0].count', params.currentUserAttendedExams0AttendedOptions0QuestionExams0Count.toString());
    if (params.currentUserAttendedExams0AttendedOptions0Id != null) __params = __params.set('currentUser.attendedExams[0].attendedOptions[0].id', params.currentUserAttendedExams0AttendedOptions0Id.toString());
    if (params.currentUserAttendedExams0AttendedOptions0AttendedOpt != null) __params = __params.set('currentUser.attendedExams[0].attendedOptions[0].attendedOpt', params.currentUserAttendedExams0AttendedOptions0AttendedOpt.toString());
    if (params.attendedExamList0UserResetKey != null) __params = __params.set('attendedExamList[0].user.resetKey', params.attendedExamList0UserResetKey.toString());
    if (params.attendedExamList0UserResetDate != null) __params = __params.set('attendedExamList[0].user.resetDate', params.attendedExamList0UserResetDate.toString());
    if (params.attendedExamList0UserPersistentTokens0UserAgent != null) __params = __params.set('attendedExamList[0].user.persistentTokens[0].userAgent', params.attendedExamList0UserPersistentTokens0UserAgent.toString());
    if (params.attendedExamList0UserPersistentTokens0TokenDate != null) __params = __params.set('attendedExamList[0].user.persistentTokens[0].tokenDate', params.attendedExamList0UserPersistentTokens0TokenDate.toString());
    if (params.attendedExamList0UserPersistentTokens0Series != null) __params = __params.set('attendedExamList[0].user.persistentTokens[0].series', params.attendedExamList0UserPersistentTokens0Series.toString());
    if (params.attendedExamList0UserPersistentTokens0IpAddress != null) __params = __params.set('attendedExamList[0].user.persistentTokens[0].ipAddress', params.attendedExamList0UserPersistentTokens0IpAddress.toString());
    if (params.attendedExamList0UserLastName != null) __params = __params.set('attendedExamList[0].user.lastName', params.attendedExamList0UserLastName.toString());
    if (params.attendedExamList0UserLastModifiedDate != null) __params = __params.set('attendedExamList[0].user.lastModifiedDate', params.attendedExamList0UserLastModifiedDate.toString());
    if (params.attendedExamList0UserLastModifiedBy != null) __params = __params.set('attendedExamList[0].user.lastModifiedBy', params.attendedExamList0UserLastModifiedBy.toString());
    if (params.attendedExamList0UserLangKey != null) __params = __params.set('attendedExamList[0].user.langKey', params.attendedExamList0UserLangKey.toString());
    if (params.attendedExamList0UserImageUrl != null) __params = __params.set('attendedExamList[0].user.imageUrl', params.attendedExamList0UserImageUrl.toString());
    if (params.attendedExamList0UserId != null) __params = __params.set('attendedExamList[0].user.id', params.attendedExamList0UserId.toString());
    if (params.attendedExamList0UserFirstName != null) __params = __params.set('attendedExamList[0].user.firstName', params.attendedExamList0UserFirstName.toString());
    if (params.attendedExamList0UserEmail != null) __params = __params.set('attendedExamList[0].user.email', params.attendedExamList0UserEmail.toString());
    if (params.attendedExamList0UserCreatedDate != null) __params = __params.set('attendedExamList[0].user.createdDate', params.attendedExamList0UserCreatedDate.toString());
    if (params.attendedExamList0UserCreatedBy != null) __params = __params.set('attendedExamList[0].user.createdBy', params.attendedExamList0UserCreatedBy.toString());
    if (params.attendedExamList0UserActivationKey != null) __params = __params.set('attendedExamList[0].user.activationKey', params.attendedExamList0UserActivationKey.toString());
    if (params.attendedExamList0Total != null) __params = __params.set('attendedExamList[0].total', params.attendedExamList0Total.toString());
    if (params.attendedExamList0Score != null) __params = __params.set('attendedExamList[0].score', params.attendedExamList0Score.toString());
    if (params.attendedExamList0Result != null) __params = __params.set('attendedExamList[0].result', params.attendedExamList0Result.toString());
    if (params.attendedExamList0Percentage != null) __params = __params.set('attendedExamList[0].percentage', params.attendedExamList0Percentage.toString());
    if (params.attendedExamList0ExamName != null) __params = __params.set('attendedExamList[0].examName', params.attendedExamList0ExamName.toString());
    if (params.attendedExamList0ExamId != null) __params = __params.set('attendedExamList[0].examId', params.attendedExamList0ExamId.toString());
    if (params.attendedExamList0DateTime != null) __params = __params.set('attendedExamList[0].dateTime', params.attendedExamList0DateTime.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/mocktest-controller/user_dashboard/${encodeURIComponent(params.login)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDashBoard>;
      })
    );
  }
  /**
   * userDashboard
   * @param params The `MocktestControllerResourceService.UserDashboardUsingGETParams` containing the following parameters:
   *
   * - `login`: login
   *
   * - `currentUser.user.persistentTokens[0].tokenValue`:
   *
   * - `currentUser.user.password`:
   *
   * - `currentUser.user.login`:
   *
   * - `currentUser.user.authorities[0].name`:
   *
   * - `currentUser.user.activated`:
   *
   * - `attendedExamList[0].user.persistentTokens[0].tokenValue`:
   *
   * - `attendedExamList[0].user.password`:
   *
   * - `attendedExamList[0].user.login`:
   *
   * - `attendedExamList[0].user.authorities[0].name`:
   *
   * - `attendedExamList[0].user.activated`:
   *
   * - `userId`:
   *
   * - `currentUser.user.resetKey`:
   *
   * - `currentUser.user.resetDate`:
   *
   * - `currentUser.user.persistentTokens[0].userAgent`:
   *
   * - `currentUser.user.persistentTokens[0].tokenDate`:
   *
   * - `currentUser.user.persistentTokens[0].series`:
   *
   * - `currentUser.user.persistentTokens[0].ipAddress`:
   *
   * - `currentUser.user.lastName`:
   *
   * - `currentUser.user.lastModifiedDate`:
   *
   * - `currentUser.user.lastModifiedBy`:
   *
   * - `currentUser.user.langKey`:
   *
   * - `currentUser.user.imageUrl`:
   *
   * - `currentUser.user.id`:
   *
   * - `currentUser.user.firstName`:
   *
   * - `currentUser.user.email`:
   *
   * - `currentUser.user.createdDate`:
   *
   * - `currentUser.user.createdBy`:
   *
   * - `currentUser.user.activationKey`:
   *
   * - `currentUser.id`:
   *
   * - `currentUser.attendedExams[0].total`:
   *
   * - `currentUser.attendedExams[0].score`:
   *
   * - `currentUser.attendedExams[0].percentage`:
   *
   * - `currentUser.attendedExams[0].id`:
   *
   * - `currentUser.attendedExams[0].exam.time`:
   *
   * - `currentUser.attendedExams[0].exam.questions[0].qstnOptions[0].option`:
   *
   * - `currentUser.attendedExams[0].exam.questions[0].qstnOptions[0].id`:
   *
   * - `currentUser.attendedExams[0].exam.questions[0].qstn`:
   *
   * - `currentUser.attendedExams[0].exam.questions[0].level`:
   *
   * - `currentUser.attendedExams[0].exam.questions[0].id`:
   *
   * - `currentUser.attendedExams[0].exam.questions[0].attendedOptions[0].id`:
   *
   * - `currentUser.attendedExams[0].exam.questions[0].attendedOptions[0].attendedOpt`:
   *
   * - `currentUser.attendedExams[0].exam.name`:
   *
   * - `currentUser.attendedExams[0].exam.level`:
   *
   * - `currentUser.attendedExams[0].exam.id`:
   *
   * - `currentUser.attendedExams[0].exam.count`:
   *
   * - `currentUser.attendedExams[0].dateTime`:
   *
   * - `currentUser.attendedExams[0].attendedOptions[0].question.qstnOptions[0].option`:
   *
   * - `currentUser.attendedExams[0].attendedOptions[0].question.qstnOptions[0].id`:
   *
   * - `currentUser.attendedExams[0].attendedOptions[0].question.qstn`:
   *
   * - `currentUser.attendedExams[0].attendedOptions[0].question.level`:
   *
   * - `currentUser.attendedExams[0].attendedOptions[0].question.id`:
   *
   * - `currentUser.attendedExams[0].attendedOptions[0].question.exams[0].time`:
   *
   * - `currentUser.attendedExams[0].attendedOptions[0].question.exams[0].name`:
   *
   * - `currentUser.attendedExams[0].attendedOptions[0].question.exams[0].level`:
   *
   * - `currentUser.attendedExams[0].attendedOptions[0].question.exams[0].id`:
   *
   * - `currentUser.attendedExams[0].attendedOptions[0].question.exams[0].count`:
   *
   * - `currentUser.attendedExams[0].attendedOptions[0].id`:
   *
   * - `currentUser.attendedExams[0].attendedOptions[0].attendedOpt`:
   *
   * - `attendedExamList[0].user.resetKey`:
   *
   * - `attendedExamList[0].user.resetDate`:
   *
   * - `attendedExamList[0].user.persistentTokens[0].userAgent`:
   *
   * - `attendedExamList[0].user.persistentTokens[0].tokenDate`:
   *
   * - `attendedExamList[0].user.persistentTokens[0].series`:
   *
   * - `attendedExamList[0].user.persistentTokens[0].ipAddress`:
   *
   * - `attendedExamList[0].user.lastName`:
   *
   * - `attendedExamList[0].user.lastModifiedDate`:
   *
   * - `attendedExamList[0].user.lastModifiedBy`:
   *
   * - `attendedExamList[0].user.langKey`:
   *
   * - `attendedExamList[0].user.imageUrl`:
   *
   * - `attendedExamList[0].user.id`:
   *
   * - `attendedExamList[0].user.firstName`:
   *
   * - `attendedExamList[0].user.email`:
   *
   * - `attendedExamList[0].user.createdDate`:
   *
   * - `attendedExamList[0].user.createdBy`:
   *
   * - `attendedExamList[0].user.activationKey`:
   *
   * - `attendedExamList[0].total`:
   *
   * - `attendedExamList[0].score`:
   *
   * - `attendedExamList[0].result`:
   *
   * - `attendedExamList[0].percentage`:
   *
   * - `attendedExamList[0].examName`:
   *
   * - `attendedExamList[0].examId`:
   *
   * - `attendedExamList[0].dateTime`:
   *
   * @return OK
   */
  userDashboardUsingGET(params: MocktestControllerResourceService.UserDashboardUsingGETParams): __Observable<UserDashBoard> {
    return this.userDashboardUsingGETResponse(params).pipe(
      __map(_r => _r.body as UserDashBoard)
    );
  }

  /**
   * userPassedDetails
   * @param login login
   * @return OK
   */
  userPassedDetailsUsingGETResponse(login: string): __Observable<__StrictHttpResponse<Array<AttendedExam>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/mocktest-controller/user_passed_exams/${encodeURIComponent(login)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AttendedExam>>;
      })
    );
  }
  /**
   * userPassedDetails
   * @param login login
   * @return OK
   */
  userPassedDetailsUsingGET(login: string): __Observable<Array<AttendedExam>> {
    return this.userPassedDetailsUsingGETResponse(login).pipe(
      __map(_r => _r.body as Array<AttendedExam>)
    );
  }

  /**
   * getUser
   * @param id id
   * @return OK
   */
  getUserUsingGETResponse(id: number): __Observable<__StrictHttpResponse<UserDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/mocktest-controller/users/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDTO>;
      })
    );
  }
  /**
   * getUser
   * @param id id
   * @return OK
   */
  getUserUsingGET(id: number): __Observable<UserDTO> {
    return this.getUserUsingGETResponse(id).pipe(
      __map(_r => _r.body as UserDTO)
    );
  }
}

module MocktestControllerResourceService {

  /**
   * Parameters for getAllAttendedExamDetailsUsingGET
   */
  export interface GetAllAttendedExamDetailsUsingGETParams {

    /**
     * id
     */
    id: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0TokenValue: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserPassword: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserLogin: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserAuthorities0Name: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserActivated: boolean;
    examAttendedExams0UserExtraUserPersistentTokens0TokenValue: string;
    examAttendedExams0UserExtraUserPassword: string;
    examAttendedExams0UserExtraUserLogin: string;
    examAttendedExams0UserExtraUserAuthorities0Name: string;
    examAttendedExams0UserExtraUserActivated: boolean;
    attendList0UserPersistentTokens0TokenValue: string;
    attendList0UserPassword: string;
    attendList0UserLogin: string;
    attendList0UserAuthorities0Name: string;
    attendList0UserActivated: boolean;
    examTime?: string;
    examQuestions0QstnOptions0Option?: string;
    examQuestions0QstnOptions0Id?: number;
    examQuestions0Qstn?: string;
    examQuestions0Level?: string;
    examQuestions0Id?: number;
    examQuestions0AttendedOptions0Id?: number;
    examQuestions0AttendedOptions0AttendedOpt?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserResetKey?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserResetDate?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0UserAgent?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0TokenDate?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0Series?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0IpAddress?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserLastName?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserLastModifiedDate?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserLastModifiedBy?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserLangKey?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserImageUrl?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserId?: number;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserFirstName?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserEmail?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserCreatedDate?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserCreatedBy?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserActivationKey?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraId?: number;
    examQuestions0AttendedOptions0AttendedExamTotal?: number;
    examQuestions0AttendedOptions0AttendedExamScore?: number;
    examQuestions0AttendedOptions0AttendedExamPercentage?: number;
    examQuestions0AttendedOptions0AttendedExamId?: number;
    examQuestions0AttendedOptions0AttendedExamDateTime?: string;
    examName?: string;
    examLevel?: string;
    examId?: number;
    examCount?: number;
    examAttendedExams0UserExtraUserResetKey?: string;
    examAttendedExams0UserExtraUserResetDate?: string;
    examAttendedExams0UserExtraUserPersistentTokens0UserAgent?: string;
    examAttendedExams0UserExtraUserPersistentTokens0TokenDate?: string;
    examAttendedExams0UserExtraUserPersistentTokens0Series?: string;
    examAttendedExams0UserExtraUserPersistentTokens0IpAddress?: string;
    examAttendedExams0UserExtraUserLastName?: string;
    examAttendedExams0UserExtraUserLastModifiedDate?: string;
    examAttendedExams0UserExtraUserLastModifiedBy?: string;
    examAttendedExams0UserExtraUserLangKey?: string;
    examAttendedExams0UserExtraUserImageUrl?: string;
    examAttendedExams0UserExtraUserId?: number;
    examAttendedExams0UserExtraUserFirstName?: string;
    examAttendedExams0UserExtraUserEmail?: string;
    examAttendedExams0UserExtraUserCreatedDate?: string;
    examAttendedExams0UserExtraUserCreatedBy?: string;
    examAttendedExams0UserExtraUserActivationKey?: string;
    examAttendedExams0UserExtraId?: number;
    examAttendedExams0Total?: number;
    examAttendedExams0Score?: number;
    examAttendedExams0Percentage?: number;
    examAttendedExams0Id?: number;
    examAttendedExams0DateTime?: string;
    examAttendedExams0AttendedOptions0QuestionQstnOptions0Option?: string;
    examAttendedExams0AttendedOptions0QuestionQstnOptions0Id?: number;
    examAttendedExams0AttendedOptions0QuestionQstn?: string;
    examAttendedExams0AttendedOptions0QuestionLevel?: string;
    examAttendedExams0AttendedOptions0QuestionId?: number;
    examAttendedExams0AttendedOptions0Id?: number;
    examAttendedExams0AttendedOptions0AttendedOpt?: string;
    attendList0UserResetKey?: string;
    attendList0UserResetDate?: string;
    attendList0UserPersistentTokens0UserAgent?: string;
    attendList0UserPersistentTokens0TokenDate?: string;
    attendList0UserPersistentTokens0Series?: string;
    attendList0UserPersistentTokens0IpAddress?: string;
    attendList0UserLastName?: string;
    attendList0UserLastModifiedDate?: string;
    attendList0UserLastModifiedBy?: string;
    attendList0UserLangKey?: string;
    attendList0UserImageUrl?: string;
    attendList0UserId?: number;
    attendList0UserFirstName?: string;
    attendList0UserEmail?: string;
    attendList0UserCreatedDate?: string;
    attendList0UserCreatedBy?: string;
    attendList0UserActivationKey?: string;
    attendList0Total?: number;
    attendList0Score?: number;
    attendList0Result?: boolean;
    attendList0Percentage?: number;
    attendList0ExamName?: string;
    attendList0ExamId?: number;
    attendList0DateTime?: string;
  }

  /**
   * Parameters for selectExamUsingGET
   */
  export interface SelectExamUsingGETParams {
    questions0Exams0AttendedExams0UserExtraUserPersistentTokens0TokenValue: string;
    questions0Exams0AttendedExams0UserExtraUserPassword: string;
    questions0Exams0AttendedExams0UserExtraUserLogin: string;
    questions0Exams0AttendedExams0UserExtraUserAuthorities0Name: string;
    questions0Exams0AttendedExams0UserExtraUserActivated: boolean;
    questions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0TokenValue: string;
    questions0AttendedOptions0AttendedExamUserExtraUserPassword: string;
    questions0AttendedOptions0AttendedExamUserExtraUserLogin: string;
    questions0AttendedOptions0AttendedExamUserExtraUserAuthorities0Name: string;
    questions0AttendedOptions0AttendedExamUserExtraUserActivated: boolean;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0TokenValue: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserPassword: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserLogin: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserAuthorities0Name: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserActivated: boolean;
    examAttendedExams0UserExtraUserPersistentTokens0TokenValue: string;
    examAttendedExams0UserExtraUserPassword: string;
    examAttendedExams0UserExtraUserLogin: string;
    examAttendedExams0UserExtraUserAuthorities0Name: string;
    examAttendedExams0UserExtraUserActivated: boolean;

    /**
     * eId
     */
    eId: string;
    questions0QstnOptions0Option?: string;
    questions0QstnOptions0Id?: number;
    questions0Qstn?: string;
    questions0Level?: string;
    questions0Id?: number;
    questions0Exams0Time?: string;
    questions0Exams0Name?: string;
    questions0Exams0Level?: string;
    questions0Exams0Id?: number;
    questions0Exams0Count?: number;
    questions0Exams0AttendedExams0UserExtraUserResetKey?: string;
    questions0Exams0AttendedExams0UserExtraUserResetDate?: string;
    questions0Exams0AttendedExams0UserExtraUserPersistentTokens0UserAgent?: string;
    questions0Exams0AttendedExams0UserExtraUserPersistentTokens0TokenDate?: string;
    questions0Exams0AttendedExams0UserExtraUserPersistentTokens0Series?: string;
    questions0Exams0AttendedExams0UserExtraUserPersistentTokens0IpAddress?: string;
    questions0Exams0AttendedExams0UserExtraUserLastName?: string;
    questions0Exams0AttendedExams0UserExtraUserLastModifiedDate?: string;
    questions0Exams0AttendedExams0UserExtraUserLastModifiedBy?: string;
    questions0Exams0AttendedExams0UserExtraUserLangKey?: string;
    questions0Exams0AttendedExams0UserExtraUserImageUrl?: string;
    questions0Exams0AttendedExams0UserExtraUserId?: number;
    questions0Exams0AttendedExams0UserExtraUserFirstName?: string;
    questions0Exams0AttendedExams0UserExtraUserEmail?: string;
    questions0Exams0AttendedExams0UserExtraUserCreatedDate?: string;
    questions0Exams0AttendedExams0UserExtraUserCreatedBy?: string;
    questions0Exams0AttendedExams0UserExtraUserActivationKey?: string;
    questions0Exams0AttendedExams0UserExtraId?: number;
    questions0Exams0AttendedExams0Total?: number;
    questions0Exams0AttendedExams0Score?: number;
    questions0Exams0AttendedExams0Percentage?: number;
    questions0Exams0AttendedExams0Id?: number;
    questions0Exams0AttendedExams0DateTime?: string;
    questions0Exams0AttendedExams0AttendedOptions0Id?: number;
    questions0Exams0AttendedExams0AttendedOptions0AttendedOpt?: string;
    questions0AttendedOptions0Id?: number;
    questions0AttendedOptions0AttendedOpt?: string;
    questions0AttendedOptions0AttendedExamUserExtraUserResetKey?: string;
    questions0AttendedOptions0AttendedExamUserExtraUserResetDate?: string;
    questions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0UserAgent?: string;
    questions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0TokenDate?: string;
    questions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0Series?: string;
    questions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0IpAddress?: string;
    questions0AttendedOptions0AttendedExamUserExtraUserLastName?: string;
    questions0AttendedOptions0AttendedExamUserExtraUserLastModifiedDate?: string;
    questions0AttendedOptions0AttendedExamUserExtraUserLastModifiedBy?: string;
    questions0AttendedOptions0AttendedExamUserExtraUserLangKey?: string;
    questions0AttendedOptions0AttendedExamUserExtraUserImageUrl?: string;
    questions0AttendedOptions0AttendedExamUserExtraUserId?: number;
    questions0AttendedOptions0AttendedExamUserExtraUserFirstName?: string;
    questions0AttendedOptions0AttendedExamUserExtraUserEmail?: string;
    questions0AttendedOptions0AttendedExamUserExtraUserCreatedDate?: string;
    questions0AttendedOptions0AttendedExamUserExtraUserCreatedBy?: string;
    questions0AttendedOptions0AttendedExamUserExtraUserActivationKey?: string;
    questions0AttendedOptions0AttendedExamUserExtraId?: number;
    questions0AttendedOptions0AttendedExamTotal?: number;
    questions0AttendedOptions0AttendedExamScore?: number;
    questions0AttendedOptions0AttendedExamPercentage?: number;
    questions0AttendedOptions0AttendedExamId?: number;
    questions0AttendedOptions0AttendedExamExamTime?: string;
    questions0AttendedOptions0AttendedExamExamName?: string;
    questions0AttendedOptions0AttendedExamExamLevel?: string;
    questions0AttendedOptions0AttendedExamExamId?: number;
    questions0AttendedOptions0AttendedExamExamCount?: number;
    questions0AttendedOptions0AttendedExamDateTime?: string;
    examTime?: string;
    examQuestions0QstnOptions0Option?: string;
    examQuestions0QstnOptions0Id?: number;
    examQuestions0Qstn?: string;
    examQuestions0Level?: string;
    examQuestions0Id?: number;
    examQuestions0AttendedOptions0Id?: number;
    examQuestions0AttendedOptions0AttendedOpt?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserResetKey?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserResetDate?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0UserAgent?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0TokenDate?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0Series?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserPersistentTokens0IpAddress?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserLastName?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserLastModifiedDate?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserLastModifiedBy?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserLangKey?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserImageUrl?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserId?: number;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserFirstName?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserEmail?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserCreatedDate?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserCreatedBy?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraUserActivationKey?: string;
    examQuestions0AttendedOptions0AttendedExamUserExtraId?: number;
    examQuestions0AttendedOptions0AttendedExamTotal?: number;
    examQuestions0AttendedOptions0AttendedExamScore?: number;
    examQuestions0AttendedOptions0AttendedExamPercentage?: number;
    examQuestions0AttendedOptions0AttendedExamId?: number;
    examQuestions0AttendedOptions0AttendedExamDateTime?: string;
    examName?: string;
    examLevel?: string;
    examId?: number;
    examCount?: number;
    examAttendedExams0UserExtraUserResetKey?: string;
    examAttendedExams0UserExtraUserResetDate?: string;
    examAttendedExams0UserExtraUserPersistentTokens0UserAgent?: string;
    examAttendedExams0UserExtraUserPersistentTokens0TokenDate?: string;
    examAttendedExams0UserExtraUserPersistentTokens0Series?: string;
    examAttendedExams0UserExtraUserPersistentTokens0IpAddress?: string;
    examAttendedExams0UserExtraUserLastName?: string;
    examAttendedExams0UserExtraUserLastModifiedDate?: string;
    examAttendedExams0UserExtraUserLastModifiedBy?: string;
    examAttendedExams0UserExtraUserLangKey?: string;
    examAttendedExams0UserExtraUserImageUrl?: string;
    examAttendedExams0UserExtraUserId?: number;
    examAttendedExams0UserExtraUserFirstName?: string;
    examAttendedExams0UserExtraUserEmail?: string;
    examAttendedExams0UserExtraUserCreatedDate?: string;
    examAttendedExams0UserExtraUserCreatedBy?: string;
    examAttendedExams0UserExtraUserActivationKey?: string;
    examAttendedExams0UserExtraId?: number;
    examAttendedExams0Total?: number;
    examAttendedExams0Score?: number;
    examAttendedExams0Percentage?: number;
    examAttendedExams0Id?: number;
    examAttendedExams0DateTime?: string;
    examAttendedExams0AttendedOptions0QuestionQstnOptions0Option?: string;
    examAttendedExams0AttendedOptions0QuestionQstnOptions0Id?: number;
    examAttendedExams0AttendedOptions0QuestionQstn?: string;
    examAttendedExams0AttendedOptions0QuestionLevel?: string;
    examAttendedExams0AttendedOptions0QuestionId?: number;
    examAttendedExams0AttendedOptions0Id?: number;
    examAttendedExams0AttendedOptions0AttendedOpt?: string;
  }

  /**
   * Parameters for saveOptionUsingPOST
   */
  export interface SaveOptionUsingPOSTParams {

    /**
     * user
     */
    user: UserExtra;

    /**
     * eId
     */
    eId: string;

    /**
     * answers
     */
    answers: string;
  }

  /**
   * Parameters for submitUsingGET
   */
  export interface SubmitUsingGETParams {

    /**
     * eId
     */
    eId: string;

    /**
     * aExamId
     */
    aExamId: string;
  }

  /**
   * Parameters for submitUsingHEAD
   */
  export interface SubmitUsingHEADParams {

    /**
     * eId
     */
    eId: string;

    /**
     * aExamId
     */
    aExamId: string;
  }

  /**
   * Parameters for submitUsingPOST
   */
  export interface SubmitUsingPOSTParams {

    /**
     * eId
     */
    eId: string;

    /**
     * aExamId
     */
    aExamId: string;
  }

  /**
   * Parameters for submitUsingPUT
   */
  export interface SubmitUsingPUTParams {

    /**
     * eId
     */
    eId: string;

    /**
     * aExamId
     */
    aExamId: string;
  }

  /**
   * Parameters for submitUsingDELETE
   */
  export interface SubmitUsingDELETEParams {

    /**
     * eId
     */
    eId: string;

    /**
     * aExamId
     */
    aExamId: string;
  }

  /**
   * Parameters for submitUsingOPTIONS
   */
  export interface SubmitUsingOPTIONSParams {

    /**
     * eId
     */
    eId: string;

    /**
     * aExamId
     */
    aExamId: string;
  }

  /**
   * Parameters for submitUsingPATCH
   */
  export interface SubmitUsingPATCHParams {

    /**
     * eId
     */
    eId: string;

    /**
     * aExamId
     */
    aExamId: string;
  }

  /**
   * Parameters for userDashboardUsingGET
   */
  export interface UserDashboardUsingGETParams {

    /**
     * login
     */
    login: string;
    currentUserUserPersistentTokens0TokenValue: string;
    currentUserUserPassword: string;
    currentUserUserLogin: string;
    currentUserUserAuthorities0Name: string;
    currentUserUserActivated: boolean;
    attendedExamList0UserPersistentTokens0TokenValue: string;
    attendedExamList0UserPassword: string;
    attendedExamList0UserLogin: string;
    attendedExamList0UserAuthorities0Name: string;
    attendedExamList0UserActivated: boolean;
    userId?: number;
    currentUserUserResetKey?: string;
    currentUserUserResetDate?: string;
    currentUserUserPersistentTokens0UserAgent?: string;
    currentUserUserPersistentTokens0TokenDate?: string;
    currentUserUserPersistentTokens0Series?: string;
    currentUserUserPersistentTokens0IpAddress?: string;
    currentUserUserLastName?: string;
    currentUserUserLastModifiedDate?: string;
    currentUserUserLastModifiedBy?: string;
    currentUserUserLangKey?: string;
    currentUserUserImageUrl?: string;
    currentUserUserId?: number;
    currentUserUserFirstName?: string;
    currentUserUserEmail?: string;
    currentUserUserCreatedDate?: string;
    currentUserUserCreatedBy?: string;
    currentUserUserActivationKey?: string;
    currentUserId?: number;
    currentUserAttendedExams0Total?: number;
    currentUserAttendedExams0Score?: number;
    currentUserAttendedExams0Percentage?: number;
    currentUserAttendedExams0Id?: number;
    currentUserAttendedExams0ExamTime?: string;
    currentUserAttendedExams0ExamQuestions0QstnOptions0Option?: string;
    currentUserAttendedExams0ExamQuestions0QstnOptions0Id?: number;
    currentUserAttendedExams0ExamQuestions0Qstn?: string;
    currentUserAttendedExams0ExamQuestions0Level?: string;
    currentUserAttendedExams0ExamQuestions0Id?: number;
    currentUserAttendedExams0ExamQuestions0AttendedOptions0Id?: number;
    currentUserAttendedExams0ExamQuestions0AttendedOptions0AttendedOpt?: string;
    currentUserAttendedExams0ExamName?: string;
    currentUserAttendedExams0ExamLevel?: string;
    currentUserAttendedExams0ExamId?: number;
    currentUserAttendedExams0ExamCount?: number;
    currentUserAttendedExams0DateTime?: string;
    currentUserAttendedExams0AttendedOptions0QuestionQstnOptions0Option?: string;
    currentUserAttendedExams0AttendedOptions0QuestionQstnOptions0Id?: number;
    currentUserAttendedExams0AttendedOptions0QuestionQstn?: string;
    currentUserAttendedExams0AttendedOptions0QuestionLevel?: string;
    currentUserAttendedExams0AttendedOptions0QuestionId?: number;
    currentUserAttendedExams0AttendedOptions0QuestionExams0Time?: string;
    currentUserAttendedExams0AttendedOptions0QuestionExams0Name?: string;
    currentUserAttendedExams0AttendedOptions0QuestionExams0Level?: string;
    currentUserAttendedExams0AttendedOptions0QuestionExams0Id?: number;
    currentUserAttendedExams0AttendedOptions0QuestionExams0Count?: number;
    currentUserAttendedExams0AttendedOptions0Id?: number;
    currentUserAttendedExams0AttendedOptions0AttendedOpt?: string;
    attendedExamList0UserResetKey?: string;
    attendedExamList0UserResetDate?: string;
    attendedExamList0UserPersistentTokens0UserAgent?: string;
    attendedExamList0UserPersistentTokens0TokenDate?: string;
    attendedExamList0UserPersistentTokens0Series?: string;
    attendedExamList0UserPersistentTokens0IpAddress?: string;
    attendedExamList0UserLastName?: string;
    attendedExamList0UserLastModifiedDate?: string;
    attendedExamList0UserLastModifiedBy?: string;
    attendedExamList0UserLangKey?: string;
    attendedExamList0UserImageUrl?: string;
    attendedExamList0UserId?: number;
    attendedExamList0UserFirstName?: string;
    attendedExamList0UserEmail?: string;
    attendedExamList0UserCreatedDate?: string;
    attendedExamList0UserCreatedBy?: string;
    attendedExamList0UserActivationKey?: string;
    attendedExamList0Total?: number;
    attendedExamList0Score?: number;
    attendedExamList0Result?: boolean;
    attendedExamList0Percentage?: number;
    attendedExamList0ExamName?: string;
    attendedExamList0ExamId?: number;
    attendedExamList0DateTime?: string;
  }
}

export { MocktestControllerResourceService }
