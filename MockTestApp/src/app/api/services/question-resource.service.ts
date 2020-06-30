/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Question } from '../models/question';

/**
 * Question Resource
 */
@Injectable({
  providedIn: 'root',
})
class QuestionResourceService extends __BaseService {
  static readonly getAllQuestionsUsingGET1Path = '/api/questions';
  static readonly createQuestionUsingPOST1Path = '/api/questions';
  static readonly updateQuestionUsingPUTPath = '/api/questions';
  static readonly getQuestionUsingGET1Path = '/api/questions/{id}';
  static readonly deleteQuestionUsingDELETE1Path = '/api/questions/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getAllQuestions
   * @return OK
   */
  getAllQuestionsUsingGET1Response(): __Observable<__StrictHttpResponse<Array<Question>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/questions`,
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
  getAllQuestionsUsingGET1(): __Observable<Array<Question>> {
    return this.getAllQuestionsUsingGET1Response().pipe(
      __map(_r => _r.body as Array<Question>)
    );
  }

  /**
   * createQuestion
   * @param question question
   * @return OK
   */
  createQuestionUsingPOST1Response(question: Question): __Observable<__StrictHttpResponse<Question>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = question;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/questions`,
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
   * createQuestion
   * @param question question
   * @return OK
   */
  createQuestionUsingPOST1(question: Question): __Observable<Question> {
    return this.createQuestionUsingPOST1Response(question).pipe(
      __map(_r => _r.body as Question)
    );
  }

  /**
   * updateQuestion
   * @param question question
   * @return OK
   */
  updateQuestionUsingPUTResponse(question: Question): __Observable<__StrictHttpResponse<Question>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = question;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/questions`,
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
   * updateQuestion
   * @param question question
   * @return OK
   */
  updateQuestionUsingPUT(question: Question): __Observable<Question> {
    return this.updateQuestionUsingPUTResponse(question).pipe(
      __map(_r => _r.body as Question)
    );
  }

  /**
   * getQuestion
   * @param id id
   * @return OK
   */
  getQuestionUsingGET1Response(id: number): __Observable<__StrictHttpResponse<Question>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/questions/${encodeURIComponent(id)}`,
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
  getQuestionUsingGET1(id: number): __Observable<Question> {
    return this.getQuestionUsingGET1Response(id).pipe(
      __map(_r => _r.body as Question)
    );
  }

  /**
   * deleteQuestion
   * @param id id
   */
  deleteQuestionUsingDELETE1Response(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/questions/${encodeURIComponent(id)}`,
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
  deleteQuestionUsingDELETE1(id: number): __Observable<null> {
    return this.deleteQuestionUsingDELETE1Response(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module QuestionResourceService {
}

export { QuestionResourceService }
