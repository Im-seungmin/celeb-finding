import type { FormType } from '../assets/type'
import _data from '../../data/celebrities.json'

type Celeb = {
  name: string;
  nickname: string;
  birthday: string;
  bloodType: string | null;
  MBTI: string | null;
};

export const celebritieScore = ({ name, birthday, bloodType, MBTI }: FormType) => {
  const [year, month, day] = birthday.split('-');

  let best = { name: '', score: -1 };
  let sameDataArr: string[] = [];

  for (const item of _data as Celeb[]) {
    const [itemYear, itemMonth, itemDay] = item.birthday.split('-');

    let score = 0;
    const matched: string[] = [];

    // 이름 / 활동명
    if (item.name === name || item.nickname === name) {
      matched.push('이름');
      score += 60;
    }

    // 연도
    if (itemYear === year) {
      matched.push('태어난 연도');
      score += 30;
    }

    // 생일(월/일)
    if (itemMonth === month && itemDay === day) {
      matched.push('생일');
      score += 25;
    }

    // 혈액형
    if (item.bloodType && item.bloodType === bloodType) {
      matched.push('혈액형');
      score += 10;
    }

    // MBTI
    if (item.MBTI && MBTI && item.MBTI.toUpperCase() === MBTI.toUpperCase()) {
      matched.push('MBTI');
      score += 15;
    }

    if (score > best.score) {
      const bestName =
        item.name !== item.nickname ? `${item.nickname}(${item.name})` : item.name;
      best = { name: bestName, score };
      sameDataArr = matched;
    }
  }

  return { best, sameDataArr };
};
