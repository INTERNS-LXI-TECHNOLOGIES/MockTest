/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Exam } from '../models/exam';

/**
 * Exam Resource
 */
@Injectable({
  providedIn: 'root',
})
class ExamResourceService extends __BaseService {
  static readonly getAllExamsUsingGETPath = '/api/exams';
  static readonly createExamUsingPOSTPath = '/api/exams';
  static readonly updateExamUsingPUTPath = '/api/exams';
  static readonly getExamUsingGETPath = '/api/exams/{id}';
  static readonly deleteExamUsingDELETEPath = '/api/exams/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getAllExams
   * @param eagerload eagerload
   * @return OK
   */
  getAllExamsUsingGETResponse(eagerload?: boolean): __Observable<__StrictHttpResponse<Array<Exam>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (eagerload != null) __params = __params.set('eagerload', eagerload.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/exams`,
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
   * getAllExams
   * @param eagerload eagerload
   * @return OK
   */
  getAllExamsUsingGET(eagerload?: boolean): __Observable<Array<Exam>> {
    return this.getAllExamsUsingGETResponse(eagerload).pipe(
      __map(_r => _r.body as Array<Exam>)
    );
  }

  /**
   * createExam
   * @param exam exam
   * @return OK
   */
  createExamUsingPOSTResponse(exam: Exam): __Observable<__StrictHttpResponse<Exam>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = exam;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/exams`,
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
   * createExam
   * @param exam exam
   * @return OK
   */
  createExamUsingPOST(exam: Exam): __Observable<Exam> {
    return this.createExamUsingPOSTResponse(exam).pipe(
      __map(_r => _r.body as Exam)
    );
  }

  /**
   * updateExam
   * @param exam exam
   * @return OK
   */
  updateExamUsingPUTResponse(exam: Exam): __Observable<__StrictHttpResponse<Exam>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = exam;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/exams`,
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
   * updateExam
   * @param exam exam
   * @return OK
   */
  updateExamUsingPUT(exam: Exam): __Observable<Exam> {
    return this.updateExamUsingPUTResponse(exam).pipe(
      __map(_r => _r.body as Exam)
    );
  }

  /**
   * getExam
   * @param id id
   * @return OK
   */
  getExamUsingGETResponse(id: number): __Observable<__StrictHttpResponse<Exam>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/exams/${encodeURIComponent(id)}`,
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
   * getExam
   * @param id id
   * @return OK
   */
  getExamUsingGET(id: number): __Observable<Exam> {
    return this.getExamUsingGETResponse(id).pipe(
      __map(_r => _r.body as Exam)
    );
  }

  /**
   * deleteExam
   * @param id id
   */
  deleteExamUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/exams/${encodeURIComponent(id)}`,
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
   * deleteExam
   * @param id id
   */
  deleteExamUsingDELETE(id: number): __Observable<null> {
    return this.deleteExamUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module ExamResourceService {
}

export { ExamResourceService }
