import type { FormType } from '../src/assets/type'
import _data from '../data/celebrities.json'

export const celebritieScore = ({name, birthday, bloodType, MBTI}: FormType) => {
    const [year, month, day] = birthday.split('-');

    let best = {name: '', score: 0};

    for(const item of _data) {
        let score = 0;
        
        const [itemYear, itemMonth, itemDay] = item.birthday.split('-');


        if(item.name === name) score += 60;
        if(itemYear === year) score += 30;
        if(itemMonth === month && itemDay === day) score += 25;
        if(item.bloodType === bloodType) score += 10;
        if(item.MBTI === MBTI) score += 15;

        if(best.score < score) {
            const bestName = item.name !== item.nickname ? `${item.nickname}(${item.name})` : item.name;
            best = {name: bestName, score};
        }
    }

    return best;
}