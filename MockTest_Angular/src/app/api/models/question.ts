/* tslint:disable */
import { AttendedOption } from './attended-option';
import { QstnOption } from './qstn-option';
export interface Question {
  attendedOptions?: Array<AttendedOption>;
  id?: number;
  level?: string;
  qstn?: string;
  qstnOptions?: Array<QstnOption>;
}
