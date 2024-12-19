import { mq } from 'ComponentsFarm/common';
import { Table } from '../tableStyle';
import styled from '@emotion/styled';

interface PizzaData {
  name: string;
  engName: string;
  totalSize: string | number;
  servingSize: number;
  calories: number;
  sugars: string | number;
  protein: number;
  saturatedFat: number;
  sodium: number;
  allergens: string;
}



const pizzaData: PizzaData[] = [
  {
    name: '치즈 폭탄 피자',
    engName: 'CHEESE OVERLOAD PIZZA',
    totalSize: 444,
    servingSize: 89,
    calories: 236,
    sugars: 2,
    protein: 9,
    saturatedFat: 4,
    sodium: 422,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 돼지고기, 닭고기'
  },
  {
    name: '베이컨 포테이토 피자',
    engName: 'BACON POTATO PIZZA',
    totalSize: 474,
    servingSize: 95,
    calories: 279,
    sugars: 6,
    protein: 9,
    saturatedFat: 4,
    sodium: 454,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 돼지고기, 계란'
  },
  {
    name: '페퍼로니 피자',
    engName: 'PEPPERONI PIZZA',
    totalSize: 430,
    servingSize: 86,
    calories: 238,
    sugars: 3,
    protein: 10,
    saturatedFat: 4,
    sodium: 472,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 돼지고기, 닭고기'
  },
  {
    name: '콤비네이션 피자',
    engName: 'COMBINATION PIZZA',
    totalSize: 467,
    servingSize: 93,
    calories: 243,
    sugars: 3,
    protein: 10,
    saturatedFat: 3,
    sodium: 490,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 돼지고기, 닭고기, 계란'
  },
  {
    name: '고르곤졸라 피자',
    engName: 'GORGONZOLA PIZZA',
    totalSize: 403,
    servingSize: 81,
    calories: 262,
    sugars: 4,
    protein: 9,
    saturatedFat: 5,
    sodium: 399,
    allergens: '밀, 대두, 우유, 쇠고기, 계란'
  },
  {
    name: '크림치즈 고구마 피자',
    engName: 'SWEET POTATO & CREAM CHEESE PIZZA',
    totalSize: 567,
    servingSize: 113,
    calories: 274,
    sugars: 10,
    protein: 8,
    saturatedFat: 4,
    sodium: 444,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 돼지고기, 닭고기, 계란, 이산화황'
  },
  {
    name: '스테이크 피자',
    engName: 'STEAK PIZZA',
    totalSize: 560,
    servingSize: 112,
    calories: 297,
    sugars: 6,
    protein: 11,
    saturatedFat: 4,
    sodium: 559,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 계란, 조개류(굴)'
  },
  {
    name: '핫슈림프 피자',
    engName: 'HOT SHRIMP PIZZA',
    totalSize: 617,
    servingSize: 123,
    calories: 319,
    sugars: 6,
    protein: 11,
    saturatedFat: 4,
    sodium: 659,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 계란, 새우'
  },
  {
    name: '불새 피자',
    engName: 'BULGOGI & SHRIMP PIZZA',
    totalSize: 484,
    servingSize: 97,
    calories: 226,
    sugars: 5,
    protein: 10,
    saturatedFat: 2,
    sodium: 450,
    allergens: '밀, 대두, 우유, 토마토, 돼지고기, 쇠고기, 닭고기, 새우, 조개류(굴)'
  },
  {
    name: '아임파인 피자',
    engName: 'HAWAIIAN OVERLOAD PIZZA',
    totalSize: 490,
    servingSize: 98,
    calories: 229,
    sugars: 5,
    protein: 8,
    saturatedFat: 2,
    sodium: 467,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 돼지고기, 닭고기, 계란'
  },
  {
    name: '갈릭 크림 새우 피자',
    engName: 'GARLIC CREAM SHRIMP PIZZA',
    totalSize: 493,
    servingSize: 99,
    calories: 256,
    sugars: 3,
    protein: 11,
    saturatedFat: 3,
    sodium: 490,
    allergens: '밀, 대두, 우유, 계란, 쇠고기, 새우'
  },
  {
    name: '속쓰리라차 피자',
    engName: '3X SPICY PIZZA',
    totalSize: 444,
    servingSize: 89,
    calories: 254,
    sugars: 3,
    protein: 8,
    saturatedFat: 3,
    sodium: 544,
    allergens: '밀, 대두, 우유, 토마토, 계란, 돼지고기, 쇠고기, 조개류(굴)'
  }
];

const TableLabel = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 1.2rem;
  text-align: center;  

  ${mq[0]} {font-size:1.4rem; }
`;


const PersonalPizza = () => {
  return (
    <div>
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
          {pizzaData.map((pizza, index) => (
            <tr key={index}>
              <td className='menu-name'>
              <span className='ko'>{pizza.name}</span>
              <span className='en'>{pizza.engName}</span>
            </td>
              <td>{pizza.totalSize}</td>
              <td>{pizza.servingSize}</td>
              <td>{pizza.calories}</td>
              <td>{pizza.sugars}</td>
              <td>{pizza.protein}</td>
              <td>{pizza.saturatedFat}</td>
              <td>{pizza.sodium}</td>
              <td>{pizza.allergens}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <TableLabel>
     PERSONAL PIZZA
    </TableLabel>
    </div>
  );
};

export default PersonalPizza;
