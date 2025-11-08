import type { FormType } from '../src/assets/type'
import _data from '../data/celebrities.json'

export const celebritieScore = ({name, birthday, bloodType}: FormType) => {
    console.log({name, birthday, bloodType})

    let best = {name: '', score: 0};

    for(const item of _data) {
        let score = 0;
        let name = '';

        if(item.name === name) score += 20;
        if(item.birthday === birthday) score += 15;
        if(item.bloodType === bloodType) score += 10;

        if(best.score < score) {
            best = {name, score};
        }
    }

    return best;
}