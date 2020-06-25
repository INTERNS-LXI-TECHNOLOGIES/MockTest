/* tslint:disable */
import { User } from './user';
export interface AttendedExamModel {
  dateTime?: string;
  examId?: number;
  examName?: string;
  percentage?: number;
  result?: boolean;
  score?: number;
  total?: number;
  user?: User;
}
