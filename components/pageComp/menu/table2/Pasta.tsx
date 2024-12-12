import { Table } from '../tableStyle';
import styled from '@emotion/styled';

interface PastaData {
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

const pastaData: PastaData[] = [
  {
    name: '토마토 치즈 파스타',
    engName: 'TOMATO CHEESE PASTA',
    totalSize: 354,
    calories: 502,
    sugars: 15,
    protein: 23,
    saturatedFat: 7,
    sodium: 1002,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 돼지고기, 닭고기'
  },
  {
    name: '미트 치즈 파스타',
    engName: 'MEAT CHEESE PASTA',
    totalSize: 358,
    calories: 556,
    sugars: 10,
    protein: 26,
    saturatedFat: 11,
    sodium: 925,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 돼지고기, 닭고기'
  },
  {
    name: '매콤 떡볶이',
    engName: 'TOPOKKI',
    totalSize: 304,
    calories: 580,
    sugars: 21,
    protein: 13,
    saturatedFat: 2,
    sodium: 1801,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 닭고기, 오징어, 조개류(굴)'
  },
  {
    name: '매콤 치즈 떡볶이',
    engName: 'CHEESE TOPOKKI',
    totalSize: 369,
    calories: 738,
    sugars: 19,
    protein: 24,
    saturatedFat: 9,
    sodium: 2001,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 닭고기, 오징어, 조개류(굴)'
  },
  {
    name: '크리스피 빠삭치킨',
    engName: 'CRISPY FRIED CHICKEN',
    totalSize: 276,
    calories: 772,
    sugars: 2,
    protein: 35,
    saturatedFat: 9,
    sodium: 1452,
    allergens: '밀, 대두, 우유, 토마토, 닭고기, 계란'
  },
  {
    name: '통살치킨 (1ea)',
    engName: 'BONELESS FRIED CHICKEN TENDER',
    totalSize: 83,
    calories: 265,
    sugars: 1,
    protein: 9,
    saturatedFat: 4,
    sodium: 428,
    allergens: '밀, 대두, 우유, 닭고기, 계란'
  },
  {
    name: '통다리치킨 (1ea)',
    engName: 'FRIED CHICKEN DRUMSTICK',
    totalSize: 112,
    calories: 300,
    sugars: 1,
    protein: 20,
    saturatedFat: 3,
    sodium: 773,
    allergens: '밀, 대두, 우유, 닭고기, 계란'
  },
  {
    name: '버팔로윙',
    engName: 'BUFFALO WINGS',
    totalSize: 241,
    calories: 569,
    sugars: 19,
    protein: 31,
    saturatedFat: 5,
    sodium: 1455,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 닭고기, 계란, 조개류(굴)'
  },
  {
    name: '웨지포테이토',
    engName: 'POTATO WEDGES',
    totalSize: 272,
    calories: 682,
    sugars: 5,
    protein: 10,
    saturatedFat: 8,
    sodium: 811,
    allergens: '대두, 우유, 토마토'
  },
  {
    name: '미트치즈랩',
    engName: 'MEAT & CHEESE WRAP',
    totalSize: 113,
    calories: 272,
    sugars: 4,
    protein: 13,
    saturatedFat: 4,
    sodium: 548,
    allergens: '밀, 대두, 우유, 토마토, 돼지고기, 쇠고기, 닭고기'
  },
  {
    name: '치킨랩',
    engName: 'CHICKEN WRAP',
    totalSize: 145,
    calories: 481,
    sugars: 4,
    protein: 10,
    saturatedFat: 7,
    sodium: 692,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 닭고기, 계란'
  },
  {
    name: '코코넛슈림프(랜치소스) 5조각',
    engName: 'COCONUT SHRIMP(RANCH SAUCE) 5PCS',
    totalSize: 201,
    calories: 625,
    sugars: 4,
    protein: 10,
    saturatedFat: 10,
    sodium: 462,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 계란, 새우'
  },
  {
    name: '코코넛슈림프(랜치소스) 10조각',
    engName: 'COCONUT SHRIMP(RANCH SAUCE) 10PCS',
    totalSize: 301,
    calories: 945,
    sugars: 5,
    protein: 18,
    saturatedFat: 17,
    sodium: 580,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 계란, 새우'
  },
  {
    name: '매콤 떡강정',
    engName: 'SPICY TTEOK GANGJUNG',
    totalSize: 175,
    calories: 253,
    sugars: 2,
    protein: 6,
    saturatedFat: 1,
    sodium: 255,
    allergens: '대두, 밀, 토마토, 돼지고기, 조개류(굴)'
  },
  {
    name: '갈릭 치즈 브레드',
    engName: 'CHEESE GARLIC BREAD',
    totalSize: 276,
    calories: 302,
    sugars: 4,
    protein: 10,
    saturatedFat: 3,
    sodium: 578,
    allergens: '밀, 대두, 우유, 계란, 돼지고기, 쇠고기, 닭고기, 토마토'
  },
  {
    name: '시나몬 연유 브레드',
    engName: 'CINNAMON BREAD',
    totalSize: 286,
    calories: 329,
    sugars: 11,
    protein: 11,
    saturatedFat: 4,
    sodium: 509,
    allergens: '밀, 대두, 우유, 계란, 쇠고기, 닭고기'
  }
];

const Pasta = () => {
  return (
      <Table className='ver2-store'>
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
          {pastaData.map((item, index) => (
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

export default Pasta;
