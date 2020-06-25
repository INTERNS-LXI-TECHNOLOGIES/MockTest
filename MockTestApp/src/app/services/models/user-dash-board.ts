/* tslint:disable */
import { AttendedExamModel } from './attended-exam-model';
import { UserExtra } from './user-extra';
export interface UserDashBoard {
  attendedExamList?: Array<AttendedExamModel>;
  currentUser?: UserExtra;
  userId?: number;
}
