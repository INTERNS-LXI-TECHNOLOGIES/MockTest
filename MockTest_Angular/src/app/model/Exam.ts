import {Questions} from '../model/Questions';
export interface Exam
{
    id:string;
    name: string;
    level: string;
    questions:Questions[];
    time:string;
    count;
    is_Active:boolean;
}