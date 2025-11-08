// 폼에 쓸 기본 데이터
export const FORM_DATA = [
  { name: '이름', placeholder: '홍길동', type: 'text', dataType: 'name', options: null },
  { name: '생일', placeholder: '1999-01-01', type: 'date', dataType: 'birthday', options: null },
  {
    name: '혈액형',
    placeholder: null,
    type: 'select',
    options: ['A', 'B', 'O', 'AB'],
    dataType: 'bloodType'
  }
] as const
