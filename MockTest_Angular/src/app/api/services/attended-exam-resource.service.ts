/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AttendedExam } from '../models/attended-exam';

/**
 * Attended Exam Resource
 */
@Injectable({
  providedIn: 'root',
})
class AttendedExamResourceService extends __BaseService {
  static readonly getAllAttendedExamsUsingGETPath = '/api/attended-exams';
  static readonly createAttendedExamUsingPOSTPath = '/api/attended-exams';
  static readonly updateAttendedExamUsingPUTPath = '/api/attended-exams';
  static readonly getAttendedExamUsingGETPath = '/api/attended-exams/{id}';
  static readonly deleteAttendedExamUsingDELETEPath = '/api/attended-exams/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getAllAttendedExams
   * @return OK
   */
  getAllAttendedExamsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<AttendedExam>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/attended-exams`,
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
   * getAllAttendedExams
   * @return OK
   */
  getAllAttendedExamsUsingGET(): __Observable<Array<AttendedExam>> {
    return this.getAllAttendedExamsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<AttendedExam>)
    );
  }

  /**
   * createAttendedExam
   * @param attendedExam attendedExam
   * @return OK
   */
  createAttendedExamUsingPOSTResponse(attendedExam: AttendedExam): __Observable<__StrictHttpResponse<AttendedExam>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = attendedExam;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/attended-exams`,
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
   * createAttendedExam
   * @param attendedExam attendedExam
   * @return OK
   */
  createAttendedExamUsingPOST(attendedExam: AttendedExam): __Observable<AttendedExam> {
    return this.createAttendedExamUsingPOSTResponse(attendedExam).pipe(
      __map(_r => _r.body as AttendedExam)
    );
  }

  /**
   * updateAttendedExam
   * @param attendedExam attendedExam
   * @return OK
   */
  updateAttendedExamUsingPUTResponse(attendedExam: AttendedExam): __Observable<__StrictHttpResponse<AttendedExam>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = attendedExam;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/attended-exams`,
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
   * updateAttendedExam
   * @param attendedExam attendedExam
   * @return OK
   */
  updateAttendedExamUsingPUT(attendedExam: AttendedExam): __Observable<AttendedExam> {
    return this.updateAttendedExamUsingPUTResponse(attendedExam).pipe(
      __map(_r => _r.body as AttendedExam)
    );
  }

  /**
   * getAttendedExam
   * @param id id
   * @return OK
   */
  getAttendedExamUsingGETResponse(id: number): __Observable<__StrictHttpResponse<AttendedExam>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/attended-exams/${encodeURIComponent(id)}`,
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
   * getAttendedExam
   * @param id id
   * @return OK
   */
  getAttendedExamUsingGET(id: number): __Observable<AttendedExam> {
    return this.getAttendedExamUsingGETResponse(id).pipe(
      __map(_r => _r.body as AttendedExam)
    );
  }

  /**
   * deleteAttendedExam
   * @param id id
   */
  deleteAttendedExamUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/attended-exams/${encodeURIComponent(id)}`,
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
   * deleteAttendedExam
   * @param id id
   */
  deleteAttendedExamUsingDELETE(id: number): __Observable<null> {
    return this.deleteAttendedExamUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module AttendedExamResourceService {
}

export { AttendedExamResourceService }
