/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AttendedOption } from '../models/attended-option';

/**
 * Attended Option Resource
 */
@Injectable({
  providedIn: 'root',
})
class AttendedOptionResourceService extends __BaseService {
  static readonly getAllAttendedOptionsUsingGETPath = '/api/attended-options';
  static readonly createAttendedOptionUsingPOSTPath = '/api/attended-options';
  static readonly updateAttendedOptionUsingPUTPath = '/api/attended-options';
  static readonly getAttendedOptionUsingGETPath = '/api/attended-options/{id}';
  static readonly deleteAttendedOptionUsingDELETEPath = '/api/attended-options/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getAllAttendedOptions
   * @return OK
   */
  getAllAttendedOptionsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<AttendedOption>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/attended-options`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AttendedOption>>;
      })
    );
  }
  /**
   * getAllAttendedOptions
   * @return OK
   */
  getAllAttendedOptionsUsingGET(): __Observable<Array<AttendedOption>> {
    return this.getAllAttendedOptionsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<AttendedOption>)
    );
  }

  /**
   * createAttendedOption
   * @param attendedOption attendedOption
   * @return OK
   */
  createAttendedOptionUsingPOSTResponse(attendedOption: AttendedOption): __Observable<__StrictHttpResponse<AttendedOption>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = attendedOption;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/attended-options`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AttendedOption>;
      })
    );
  }
  /**
   * createAttendedOption
   * @param attendedOption attendedOption
   * @return OK
   */
  createAttendedOptionUsingPOST(attendedOption: AttendedOption): __Observable<AttendedOption> {
    return this.createAttendedOptionUsingPOSTResponse(attendedOption).pipe(
      __map(_r => _r.body as AttendedOption)
    );
  }

  /**
   * updateAttendedOption
   * @param attendedOption attendedOption
   * @return OK
   */
  updateAttendedOptionUsingPUTResponse(attendedOption: AttendedOption): __Observable<__StrictHttpResponse<AttendedOption>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = attendedOption;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/attended-options`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AttendedOption>;
      })
    );
  }
  /**
   * updateAttendedOption
   * @param attendedOption attendedOption
   * @return OK
   */
  updateAttendedOptionUsingPUT(attendedOption: AttendedOption): __Observable<AttendedOption> {
    return this.updateAttendedOptionUsingPUTResponse(attendedOption).pipe(
      __map(_r => _r.body as AttendedOption)
    );
  }

  /**
   * getAttendedOption
   * @param id id
   * @return OK
   */
  getAttendedOptionUsingGETResponse(id: number): __Observable<__StrictHttpResponse<AttendedOption>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/attended-options/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AttendedOption>;
      })
    );
  }
  /**
   * getAttendedOption
   * @param id id
   * @return OK
   */
  getAttendedOptionUsingGET(id: number): __Observable<AttendedOption> {
    return this.getAttendedOptionUsingGETResponse(id).pipe(
      __map(_r => _r.body as AttendedOption)
    );
  }

  /**
   * deleteAttendedOption
   * @param id id
   */
  deleteAttendedOptionUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/attended-options/${encodeURIComponent(id)}`,
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
   * deleteAttendedOption
   * @param id id
   */
  deleteAttendedOptionUsingDELETE(id: number): __Observable<null> {
    return this.deleteAttendedOptionUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module AttendedOptionResourceService {
}

export { AttendedOptionResourceService }
