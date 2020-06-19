
import {Options} from '../model/Options';
export interface Questions
{
    id:string;
    qstn: string;
    level: string;
    qstnOptions: Options[];
    answered:string;
}