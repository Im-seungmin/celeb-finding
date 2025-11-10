import type { FORM_DATA } from "./data";

export type FormType = {
    name: string,
    birthday: string,
    bloodType: string,
    MBTI: string
}

export type ResultType = {
    best: {
        name: string;
        score: number;
    };
    sameDataArr: any[];
} | null;

export type FormItem = (typeof FORM_DATA)[number];