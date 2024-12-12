import styled from '@emotion/styled';
import React from 'react';
import { Table } from '../tableStyle';
import { css } from '@emotion/react';


interface PizzaInfo {
  name: string;
  nameEn: string;
  totalSize: number;
  servingSize: number;
  calories: number;
  sugars: number;
  protein: number;
  saturatedFat: number;
  sodium: number;
  allergens: string;
}

const pizzaData: PizzaInfo[] = [
  {
    name: '아메리칸 치즈 피자(L)',
    nameEn: 'AMERICAN CHEESE PIZZA(L)',
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
    nameEn: 'MANIAC PEPPERONI PIZZA(L)',
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
    nameEn: 'BACON POTATO PIZZA(L)',
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
    name: '수퍼 콤비네이션 피자(L)',
    nameEn: 'SUPER COMBINATION PIZZA(L)',
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
    name: '불새 피자(L)',
    nameEn: 'BULGOGI&SHRIMP PIZZA(L)',
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
    name: '페이보릿 (F4) 피자(L)',
    nameEn: '4-IN-1 PIZZA(L)',
    totalSize: 760,
    servingSize: 95,
    calories: 223,
    sugars: 5,
    protein: 9,
    saturatedFat: 3,
    sodium: 481,
    allergens: '밀, 대두, 계란, 토마토, 우유, 돼지고기, 쇠고기, 닭고기, 토마토, 아황산류'
  },
  {
    name: '달달달콤하구마 피자(L)',
    nameEn: 'SWEET POTATO PIZZA(L)',
    totalSize: 673,
    servingSize: 84,
    calories: 220,
    sugars: 5,
    protein: 8,
    saturatedFat: 3,
    sodium: 383,
    allergens: '밀, 대두, 우유, 계란, 돼지고기, 쇠고기, 아황산류'
  },
  {
    name: '핫크러시 새우 피자(L)',
    nameEn: 'CRUNCHY HOT SHRIMP PIZZA(L)',
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
    nameEn: 'MEAT MONSTER PIZZA(L)',
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



const PageStyle =css`
  tr {
    &:nth-of-type(even) {
      background-color: #c4e8c7;
   }
  }

  th {
    background-color: #3ab449;
  }

  th, td {
    border-left: 1px solid #3ab449;
    &:nth-of-type(1) {
      border-left: none;
    }
  }
`;



const LargePizza = () => {
  return (
    <Table css={PageStyle}>
      <thead>
        <tr>
          <th>메뉴명</th>
          <th>총 중량(g/ml)</th>
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
              <span className='en'>{pizza.nameEn}</span>
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
         <tr>
          {Array.from({ length: 9 }).map((_, index) => (
            <td key={index} style={{height:"6rem"}}></td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
};

export default LargePizza;
