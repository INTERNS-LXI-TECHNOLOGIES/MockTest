/* tslint:disable */
import { AttendedExam } from './attended-exam';
import { User } from './user';
export interface UserExtra {
  attendedExams?: Array<AttendedExam>;
  id?: number;
  user?: User;
}
