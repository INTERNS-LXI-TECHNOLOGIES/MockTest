/* tslint:disable */
import { AttendedExam } from './attended-exam';
import { Question } from './question';
export interface AttendedOption {
  attendedAnswer?: boolean;
  attendedExam?: AttendedExam;
  attendedOpt?: string;
  id?: number;
  question?: Question;
}
