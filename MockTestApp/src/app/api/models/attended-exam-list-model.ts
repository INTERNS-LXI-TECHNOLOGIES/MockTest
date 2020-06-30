/* tslint:disable */
import { AttendedExamModel } from './attended-exam-model';
import { Exam } from './exam';
export interface AttendedExamListModel {
  attendList?: Array<AttendedExamModel>;
  exam?: Exam;
}
