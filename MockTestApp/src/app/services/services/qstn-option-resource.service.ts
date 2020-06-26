/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { QstnOption } from '../models/qstn-option';

/**
 * Qstn Option Resource
 */
@Injectable({
  providedIn: 'root',
})
class QstnOptionResourceService extends __BaseService {
  static readonly getAllQstnOptionsUsingGETPath = '/api/qstn-options';
  static readonly createQstnOptionUsingPOSTPath = '/api/qstn-options';
  static readonly updateQstnOptionUsingPUTPath = '/api/qstn-options';
  static readonly getQstnOptionUsingGETPath = '/api/qstn-options/{id}';
  static readonly deleteQstnOptionUsingDELETEPath = '/api/qstn-options/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getAllQstnOptions
   * @return OK
   */
  getAllQstnOptionsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<QstnOption>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/qstn-options`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<QstnOption>>;
      })
    );
  }
  /**
   * getAllQstnOptions
   * @return OK
   */
  getAllQstnOptionsUsingGET(): __Observable<Array<QstnOption>> {
    return this.getAllQstnOptionsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<QstnOption>)
    );
  }

  /**
   * createQstnOption
   * @param qstnOption qstnOption
   * @return OK
   */
  createQstnOptionUsingPOSTResponse(qstnOption: QstnOption): __Observable<__StrictHttpResponse<QstnOption>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = qstnOption;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/qstn-options`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<QstnOption>;
      })
    );
  }
  /**
   * createQstnOption
   * @param qstnOption qstnOption
   * @return OK
   */
  createQstnOptionUsingPOST(qstnOption: QstnOption): __Observable<QstnOption> {
    return this.createQstnOptionUsingPOSTResponse(qstnOption).pipe(
      __map(_r => _r.body as QstnOption)
    );
  }

  /**
   * updateQstnOption
   * @param qstnOption qstnOption
   * @return OK
   */
  updateQstnOptionUsingPUTResponse(qstnOption: QstnOption): __Observable<__StrictHttpResponse<QstnOption>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = qstnOption;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/qstn-options`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<QstnOption>;
      })
    );
  }
  /**
   * updateQstnOption
   * @param qstnOption qstnOption
   * @return OK
   */
  updateQstnOptionUsingPUT(qstnOption: QstnOption): __Observable<QstnOption> {
    return this.updateQstnOptionUsingPUTResponse(qstnOption).pipe(
      __map(_r => _r.body as QstnOption)
    );
  }

  /**
   * getQstnOption
   * @param id id
   * @return OK
   */
  getQstnOptionUsingGETResponse(id: number): __Observable<__StrictHttpResponse<QstnOption>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/qstn-options/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<QstnOption>;
      })
    );
  }
  /**
   * getQstnOption
   * @param id id
   * @return OK
   */
  getQstnOptionUsingGET(id: number): __Observable<QstnOption> {
    return this.getQstnOptionUsingGETResponse(id).pipe(
      __map(_r => _r.body as QstnOption)
    );
  }

  /**
   * deleteQstnOption
   * @param id id
   */
  deleteQstnOptionUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/qstn-options/${encodeURIComponent(id)}`,
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
   * deleteQstnOption
   * @param id id
   */
  deleteQstnOptionUsingDELETE(id: number): __Observable<null> {
    return this.deleteQstnOptionUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module QstnOptionResourceService {
}

export { QstnOptionResourceService }
