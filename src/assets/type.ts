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