/* tslint:disable */
import { AttendedOption } from './attended-option';
import { Exam } from './exam';
import { UserExtra } from './user-extra';
export interface AttendedExam {
  attendedOptions?: Array<AttendedOption>;
  dateTime?: string;
  exam?: Exam;
  id?: number;
  percentage?: number;
  result?: boolean;
  score?: number;
  total?: number;
  userExtra?: UserExtra;
}
