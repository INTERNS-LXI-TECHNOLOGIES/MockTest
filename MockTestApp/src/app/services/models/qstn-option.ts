/* tslint:disable */
import { Question } from './question';
export interface QstnOption {
  id?: number;
  isAnswer?: boolean;
  option?: string;
  question?: Question;
}
