import { mq } from 'ComponentsFarm/common';
import { Table } from '../tableStyle';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

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
    name: '아메리칸 치즈 피자(L)',
    engName: 'AMERICAN CHEESE PIZZA(L)',
    totalSize: 498,
    servingSize: 62,
    calories: 155,
    sugars: 3,
    protein: 6,
    saturatedFat: 1,
    sodium: 374,
    allergens: '밀, 대두, 우유, 닭고기, 돼지고기, 쇠고기, 토마토'
  },
  {
    name: '매니악 페퍼로니 피자(L)',
    engName: 'MANIAC PEPPERONI PIZZA(L)',
    totalSize: 678,
    servingSize: 85,
    calories: 227,
    sugars: 2,
    protein: 10,
    saturatedFat: 4,
    sodium: 536,
    allergens: '밀, 대두, 우유, 닭고기, 돼지고기, 쇠고기, 토마토'
  },
  {
    name: '베이컨 포테이토 피자(L)',
    engName: 'BACON POTATO PIZZA(L)',
    totalSize: 753,
    servingSize: 94,
    calories: 234,
    sugars: 3,
    protein: 9,
    saturatedFat: 3,
    sodium: 496,
    allergens: '밀, 대두, 우유, 닭고기, 돼지고기, 쇠고기, 토마토, 계란'
  },
  {
    name: '슈퍼 콤비네이션 피자(L)',
    engName: 'SUPER COMBINATION PIZZA(L)',
    totalSize: 703,
    servingSize: 88,
    calories: 215,
    sugars: 3,
    protein: 10,
    saturatedFat: 3,
    sodium: 488,
    allergens: '밀, 대두, 우유, 닭고기, 돼지고기, 쇠고기, 토마토'
  },
  {
    name: '불새피자(L)',
    engName: 'BULGOGI&SHRIMP PIZZA(L)',
    totalSize: 723,
    servingSize: 90,
    calories: 202,
    sugars: 5,
    protein: 9,
    saturatedFat: 2,
    sodium: 429,
    allergens: '밀, 대두, 토마토, 우유, 돼지고기, 쇠고기, 닭고기, 조개류(굴), 새우'
  },
  {
    name: '페이보릿포 (F4) 피자(L)',
    engName: '4-IN-1 PIZZA(L)',
    totalSize: 760,
    servingSize: 95,
    calories: 223,
    sugars: 5,
    protein: 9,
    saturatedFat: 3,
    sodium: 481,
    allergens: '밀, 대두, 계란, 토마토, 우유, 돼지고기, 쇠고기, 닭고기, 이산화황'
  },
  {
    name: '달달달콤하구마 피자(L)',
    engName: 'SWEET POTATO PIZZA(L)',
    totalSize: 673,
    servingSize: 84,
    calories: 220,
    sugars: 5,
    protein: 8,
    saturatedFat: 3,
    sodium: 383,
    allergens: '밀, 대두, 우유, 계란, 쇠고기, 돼지고기, 이산화황'
  },
  {
    name: '핫크러쉬 새우 피자(L)',
    engName: 'CRUNCHY HOT SHRIMP PIZZA(L)',
    totalSize: 785,
    servingSize: 98,
    calories: 263,
    sugars: 3,
    protein: 9,
    saturatedFat: 3,
    sodium: 529,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 계란, 새우'
  },
  {
    name: '미트몬스터 피자(L)',
    engName: 'MEAT MONSTER PIZZA(L)',
    totalSize: 728,
    servingSize: 91,
    calories: 248,
    sugars: 3,
    protein: 10,
    saturatedFat: 4,
    sodium: 545,
    allergens: '밀, 대두, 우유, 돼지고기, 쇠고기, 닭고기, 토마토, 계란'
  }
];

const TableLabel = styled.div`

  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 1.2rem;
  text-align: center;  


  ${mq[0]} {font-size:1.4rem }
`;



const LargePizza = () => {
  return (
    <div>
      <Table className='ver2-store' css={css`height:calc(100% - 8rem);`}>
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
      LARGE PIZZA
    </TableLabel>
    </div>
  );
};

export default LargePizza;
