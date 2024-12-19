import styled from '@emotion/styled';
import { Table } from '../tableStyle';

interface SourceData {
  name: string;
  engName: string;
  totalSize: number;
  servingSize: number;
  calories: number;
  sugars: string | number;
  protein: string | number;
  saturatedFat: string | number;
  sodium: string | number;
  allergens: string;
}


const Tr = styled.tr`
  &:nth-of-type(odd) {
    background-color: #efebe9;
  }
  &:nth-of-type(even) {
    background-color: white;
  }
  &:hover {
    background-color: #d7ccc8;
  }
`;

const sourceData: SourceData[] = [
  {
    name: '오뚜기 케첩(1회용)',
    engName: 'OTTOGI TOMATO KETCHUP',
    totalSize: 9,
    servingSize: 9,
    calories: 12,
    sugars: 2,
    protein: '-',
    saturatedFat: '-',
    sodium: 95,
    allergens: '토마토'
  },
  {
    name: '고피자 핫소스(1회용)',
    engName: 'GOPIZZA HOT SAUCE',
    totalSize: 4,
    servingSize: 4,
    calories: 0,
    sugars: '-',
    protein: '-',
    saturatedFat: '-',
    sodium: 62,
    allergens: '토마토'
  },
  {
    name: '고피자 갈릭디핑소스(1회용)',
    engName: 'GOPIZZA GARLIC DIPPING SAUCE',
    totalSize: 15,
    servingSize: 15,
    calories: 40,
    sugars: 1,
    protein: '-',
    saturatedFat: 1,
    sodium: 114,
    allergens: '대두, 우유, 쇠고기, 계란'
  },
  {
    name: '고피자 꿀소스(1회용)',
    engName: 'GOPIZZA HONEY SAUCE',
    totalSize: 25,
    servingSize: 25,
    calories: 75,
    sugars: 15,
    protein: '-',
    saturatedFat: '-',
    sodium: '-',
    allergens: '이산화황'
  },
  {
    name: '랜치 소스',
    engName: 'RANCH SAUCE',
    totalSize: 30,
    servingSize: 30,
    calories: 110,
    sugars: 2,
    protein: '-',
    saturatedFat: 2,
    sodium: 160,
    allergens: '대두, 우유, 쇠고기, 계란'
  },
  {
    name: '양념 치킨 소스',
    engName: 'YANGNYUM CHICKEN SAUCE',
    totalSize: 30,
    servingSize: 30,
    calories: 207,
    sugars: 28,
    protein: 1,
    saturatedFat: '-',
    sodium: 702,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 조개류(굴)'
  },
  {
    name: '오지 치즈 소스',
    engName: 'CHEESE DIPPING SAUCE',
    totalSize: 30,
    servingSize: 30,
    calories: 86,
    sugars: 2,
    protein: 1,
    saturatedFat: 1,
    sodium: 234,
    allergens: '우유, 대두'
  },
  {
    name: '생오이피클',
    engName: 'PICKLE',
    totalSize: 75,
    servingSize: 75,
    calories: 47,
    sugars: 8,
    protein: 0,
    saturatedFat: '-',
    sodium: 215,
    allergens: ''
  },
  {
    name: '레드시즈닝',
    engName: 'RED SEASONING',
    totalSize: 5,
    servingSize: 5,
    calories: 16,
    sugars: 1,
    protein: '-',
    saturatedFat: '-',
    sodium: 384,
    allergens: '밀, 대두, 쇠고기, 우유'
  },
  {
    name: '연유',
    engName: 'CONDENSED MILK',
    totalSize: 20,
    servingSize: 20,
    calories: 62,
    sugars: 10,
    protein: 2,
    saturatedFat: 1,
    sodium: 22,
    allergens: '우유'
  }
];

const Source = () => {
  return (
      <Table className='ver2-store'>
        <thead>
          <tr>
            <th>메뉴명</th>
            <th>총량(g/ml)</th>
            <th>중량(g/ml)</th>
            <th>열량(kcal)</th>
            <th>당류(g)</th>
            <th>단백질(g)</th>
            <th>포화지방(g)</th>
            <th>나트륨(mg)</th>
            <th>알레르기 표기</th>
          </tr>
        </thead>
        <tbody>
          {sourceData.map((source, index) => (
            <tr key={index}>
              <td className='menu-name'>
              <span className='ko'>{source.name}</span>
              <span className='en'>{source.engName}</span>
            </td>
              <td>{source.totalSize}</td>
              <td>{source.servingSize}</td>
              <td>{source.calories}</td>
              <td>{source.sugars}</td>
              <td>{source.protein}</td>
              <td>{source.saturatedFat}</td>
              <td>{source.sodium}</td>
              <td>{source.allergens}</td>
            </tr>
          ))}
        </tbody>
      </Table>
  );
};

export default Source;
