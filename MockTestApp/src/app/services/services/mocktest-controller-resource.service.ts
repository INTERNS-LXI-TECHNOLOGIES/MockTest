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
  static readonly saveOptionUsingPOSTPath = '/api/mocktest-controller/save_answers/{eId}/{answers}';
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

 private  pdfId;
  setPdfId(id)
  {
    this.pdfId=id;
    console.log("id from service"+id);
  }
  getPdfId()
  {
    return this.pdfId;
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
        responseType  : 'arraybuffer' as 'json'
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
   * @param id id
   * @return OK
   */
  getAllAttendedExamDetailsUsingGETResponse(id: string): __Observable<__StrictHttpResponse<AttendedExamListModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/mocktest-controller/getAllAttendedExamDetails/${encodeURIComponent(id)}`,
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
   * @param id id
   * @return OK
   */
  getAllAttendedExamDetailsUsingGET(id: string): __Observable<AttendedExamListModel> {
    return this.getAllAttendedExamDetailsUsingGETResponse(id).pipe(
      __map(_r => _r.body as AttendedExamListModel)
    );
  }

  /**
   * selectExam
   * @param eId eId
   * @return OK
   */
  selectExamUsingGETResponse(eId: string): __Observable<__StrictHttpResponse<ExamModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/mocktest-controller/getSelectedExamDetails/${encodeURIComponent(eId)}`,
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
   * @param eId eId
   * @return OK
   */
  selectExamUsingGET(eId: string): __Observable<ExamModel> {
    return this.selectExamUsingGETResponse(eId).pipe(
      __map(_r => _r.body as ExamModel)
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
   * @param login login
   * @return OK
   */
  userDashboardUsingGETResponse(login: string): __Observable<__StrictHttpResponse<UserDashBoard>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/mocktest-controller/user_dashboard/${encodeURIComponent(login)}`,
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
   * @param login login
   * @return OK
   */
  userDashboardUsingGET(login: string): __Observable<UserDashBoard> {
    return this.userDashboardUsingGETResponse(login).pipe(
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
}

export { MocktestControllerResourceService }
