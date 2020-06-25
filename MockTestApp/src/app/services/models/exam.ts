/* tslint:disable */
import { AttendedExam } from './attended-exam';
import { Question } from './question';
export interface Exam {
  attendedExams?: Array<AttendedExam>;
  count?: number;
  id?: number;
  isActive?: boolean;
  level?: string;
  name?: string;
  questions?: Array<Question>;
  time?: string;
}
