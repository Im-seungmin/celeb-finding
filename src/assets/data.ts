// 폼에 쓸 기본 데이터
export const FORM_DATA = [
  { name: '이름', placeholder: '홍길동', type: 'text' },
  { name: '나이', placeholder: '24', type: 'number' },
  { name: '혈액형', type: 'select', options: ['A', 'B', 'O', 'AB'] },
  {
    name: 'MBTI',
    type: 'select',
    options: [
      'ISTJ',
      'ISTP',
      'ISFJ',
      'ISFP',
      'INTJ',
      'INTP',
      'INFJ',
      'INFP',
      'ESTJ',
      'ESTP',
      'ESFJ',
      'ESFP',
      'ENTJ',
      'ENTP',
      'ENFJ',
      'ENFP'
    ]
  },
  { name: '사는 곳', placeholder: '서울', type: 'text' }
] as const
