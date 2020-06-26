/* tslint:disable */
import { Exam } from './exam';
import { Question } from './question';
export interface ExamModel {
  exam?: Exam;
  questions?: Array<Question>;
}
