import type { FormType } from '../src/assets/type'
import _data from '../data/celebrities.json'

export const celebritieScore = ({name, birthday, bloodType, MBTI}: FormType) => {
    const [year, month, day] = birthday.split('-');

    let best = {name: '', score: 0};
    let sameDataArr = new Array();

    for(const item of _data) {
        let score = 0;
        
        const [itemYear, itemMonth, itemDay] = item.birthday.split('-');
        const arr = new Array();

        if(item.name === name) {
            arr.push('이름')
            score += 60;
        }
        if(itemYear === year) {
            arr.push('태어난 해')
            score += 30;
        }
        if(itemMonth === month && itemDay === day) {
            arr.push('생일')
            score += 25;
        }
        if(item.bloodType === bloodType) {
            arr.push('혈액형')
            score += 10;
        }
        if(item.MBTI === MBTI) {
            arr.push('MBTI')
            score += 15;
        }

        if(best.score < score) {
            const bestName = item.name !== item.nickname ? `${item.nickname}(${item.name})` : item.name;
            best = {name: bestName, score};
            sameDataArr = arr;
        }
    }

    return {best, sameDataArr};
}