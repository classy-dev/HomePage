import { Table } from '../tableStyle';
import styled from '@emotion/styled';

interface OptionData {
  name: string;
  engName: string;
  totalSize: string | number;
  calories: number;
  sugars: string | number;
  protein: number;
  saturatedFat: number;
  sodium: number;
  allergens: string;
}


const optionData: OptionData[] = [
  {
    name: '치즈 추가',
    engName: 'ADD CHEESE',
    totalSize: 30,
    calories: 82,
    sugars: 0,
    protein: 6,
    saturatedFat: 4,
    sodium: 174,
    allergens: '우유'
  },
  {
    name: '치즈 추가 X2',
    engName: 'ADD DOUBLE CHEESE',
    totalSize: 60,
    calories: 163,
    sugars: 0,
    protein: 11,
    saturatedFat: 8,
    sodium: 348,
    allergens: '우유'
  },
  {
    name: '시즈닝 새우(3마리)',
    engName: 'SEASONED SHRIMP(3 PIECES)',
    totalSize: '-',
    calories: 46,
    sugars: 0,
    protein: 9,
    saturatedFat: 0,
    sodium: 145,
    allergens: '새우, 밀, 대두, 쇠고기, 우유'
  },
  {
    name: '마리네이드 새우(3마리)',
    engName: 'MARINATED SHRIMP(3 PIECES)',
    totalSize: '-',
    calories: 43,
    sugars: '-',
    protein: 9,
    saturatedFat: 0,
    sodium: 58,
    allergens: '새우, 밀, 대두, 우유, 계란, 쇠고기'
  },
  {
    name: '마리네이드 새우(5마리)',
    engName: 'MARINATED SHRIMP(5 PIECES)',
    totalSize: '-',
    calories: 85,
    sugars: '-',
    protein: 18,
    saturatedFat: 0,
    sodium: 116,
    allergens: '새우, 밀, 대두, 우유, 계란, 쇠고기'
  },
  {
    name: '고구마 무스',
    engName: 'SWEET POTATO MOUSSE',
    totalSize: 100,
    calories: 147,
    sugars: 19,
    protein: 1,
    saturatedFat: 1,
    sodium: 161,
    allergens: '대두, 계란, 쇠고기, 아황산류'
  }
];

const Option = () => {
  return (
      <Table className='ver2-store'>
         <colgroup>
          <col width='20%' />
          <col width='10%' />
          <col width='10%' />
          <col width='10%' />
          <col width='10%' />
          <col width='10%' />
          <col width='10%' />
          <col width='20%' />
        </colgroup>
        <thead>
          <tr>
            <th>메뉴명</th>
            <th>총량(g/ml)</th>
            <th>열량(kcal)</th>
            <th>당류(g)</th>
            <th>단백질(g)</th>
            <th>포화지방(g)</th>
            <th>나트륨(mg)</th>
            <th>알레르기 표기</th>
          </tr>
        </thead>
        <tbody>
          {optionData.map((item, index) => (
            <tr key={index}>
              <td className='menu-name'>
              <span className='ko'>{item.name}</span>
              <span className='en'>{item.engName}</span>
            </td>
              <td>{item.totalSize}</td>
              <td>{item.calories}</td>
              <td>{item.sugars}</td>
              <td>{item.protein}</td>
              <td>{item.saturatedFat}</td>
              <td>{item.sodium}</td>
              <td>{item.allergens}</td>
            </tr>
          ))}
        </tbody>
      </Table>
  );
};

export default Option;
