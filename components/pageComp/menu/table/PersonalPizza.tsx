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
    name: '아메리칸 치즈 피자',
    nameEn: 'AMERICAN CHEESE PIZZA',
    totalSize: 343,
    servingSize: 69,
    calories: 193,
    sugars: 2,
    protein: 9,
    saturatedFat: 3,
    sodium: 342,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 돼지고기, 닭고기'
  },
  {
    name: '크레이지 미트치즈 피자',
    nameEn: 'CRAZY BOLOGNESE PIZZA',
    totalSize: 343,
    servingSize: 69,
    calories: 188,
    sugars: 2,
    protein: 8,
    saturatedFat: 3,
    sodium: 354,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 돼지고기, 닭고기'
  },
  {
    name: '허니 고르곤졸라 피자',
    nameEn: 'HONEY GORGONZOLA PIZZA',
    totalSize: 297,
    servingSize: 59,
    calories: 204,
    sugars: 2,
    protein: 8,
    saturatedFat: 4,
    sodium: 324,
    allergens: '밀, 대두, 우유, 쇠고기, 계란'
  },
  {
    name: '스트릿 콘치즈 피자',
    nameEn: 'STREET CORN CHEESE PIZZA',
    totalSize: 393,
    servingSize: 79,
    calories: 243,
    sugars: 6,
    protein: 9,
    saturatedFat: 4,
    sodium: 389,
    allergens: '밀, 대두, 우유, 쇠고기, 닭고기, 계란'
  },
  {
    name: '오리지널 페퍼로니 피자',
    nameEn: 'OG PEPPERONI PIZZA',
    totalSize: 332,
    servingSize: 66,
    calories: 187,
    sugars: 2,
    protein: 9,
    saturatedFat: 3,
    sodium: 387,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 돼지고기, 닭고기'
  },
  {
    name: '달콤 고구마 피자',
    nameEn: 'SWEET POTATO PIZZA',
    totalSize: 432,
    servingSize: 86,
    calories: 208,
    sugars: 7,
    protein: 8,
    saturatedFat: 2,
    sodium: 386,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 돼지고기, 닭고기, 계란, 아황산류'
  },
  {
    name: '매니악 페퍼로니 피자',
    nameEn: 'MANIAC PEPPERONI PIZZA',
    totalSize: 349,
    servingSize: 70,
    calories: 198,
    sugars: 3,
    protein: 9,
    saturatedFat: 3,
    sodium: 414,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 돼지고기, 닭고기'
  },
  {
    name: '베이컨 포테이토 피자',
    nameEn: 'BACON POTATO PIZZA',
    totalSize: 408,
    servingSize: 82,
    calories: 219,
    sugars: 3,
    protein: 9,
    saturatedFat: 3,
    sodium: 447,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 돼지고기, 닭고기, 계란'
  },
  {
    name: '수퍼 콤비네이션 피자',
    nameEn: 'SUPER COMBINATION PIZZA',
    totalSize: 366,
    servingSize: 73,
    calories: 195,
    sugars: 3,
    protein: 9,
    saturatedFat: 3,
    sodium: 395,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 돼지고기, 닭고기'
  },
  {
    name: 'K-불고기 피자',
    nameEn: 'K-BULGOGI PIZZA',
    totalSize: 354,
    servingSize: 71,
    calories: 201,
    sugars: 5,
    protein: 8,
    saturatedFat: 3,
    sodium: 352,
    allergens: '밀, 대두, 우유, 쇠고기, 계란, 조개류(굴)'
  },
  {
    name: '스윗 치킨앤콘 피자',
    nameEn: 'SWEET CHICKEN & CORN PIZZA',
    totalSize: 431,
    servingSize: 86,
    calories: 260,
    sugars: 7,
    protein: 10,
    saturatedFat: 4,
    sodium: 444,
    allergens: '밀, 대두, 우유, 돼지고기, 쇠고기, 닭고기, 계란, 땅콩'
  },
  {
    name: '스파이시 치킨앤콘 피자',
    nameEn: 'SPICY CHICKEN & CORN PIZZA',
    totalSize: 424,
    servingSize: 85,
    calories: 256,
    sugars: 7,
    protein: 10,
    saturatedFat: 3,
    sodium: 436,
    allergens: '밀, 대두, 우유, 돼지고기, 쇠고기, 닭고기, 계란, 땅콩, 토마토, 조개류(굴)'
  },
  {
    name: '치킨앤콘 반반 피자',
    nameEn: 'CHICKEN & CORN HALF/HALF PIZZA',
    totalSize: 428,
    servingSize: 86,
    calories: 259,
    sugars: 7,
    protein: 10,
    saturatedFat: 3,
    sodium: 445,
    allergens: '밀, 대두, 우유, 돼지고기, 쇠고기, 닭고기, 계란, 땅콩, 토마토, 조개류(굴)'
  },
  {
    name: '페퍼로니 앤 포테이토 반반 피자',
    nameEn: 'PEPPERONI & POTATO HALF/HALF PIZZA',
    totalSize: 372,
    servingSize: 74,
    calories: 199,
    sugars: 3,
    protein: 10,
    saturatedFat: 3,
    sodium: 417,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 돼지고기, 닭고기, 계란'
  },
  {
    name: '불새 피자',
    nameEn: 'BULGOGI & SHRIMP PIZZA',
    totalSize: 403,
    servingSize: 81,
    calories: 185,
    sugars: 5,
    protein: 10,
    saturatedFat: 2,
    sodium: 393,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 닭고기, 새우, 조개류(굴)'
  },
  {
    name: '아임파인 피자',
    nameEn: 'HAWAIIAN OVERLOAD PIZZA',
    totalSize: 409,
    servingSize: 82,
    calories: 187,
    sugars: 4,
    protein: 8,
    saturatedFat: 2,
    sodium: 410,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 닭고기, 계란'
  },
  {
    name: '갈릭 크림 새우 피자',
    nameEn: 'GARLIC CREAM SHRIMP PIZZA',
    totalSize: 412,
    servingSize: 82,
    calories: 215,
    sugars: 3,
    protein: 10,
    saturatedFat: 2,
    sodium: 433,
    allergens: '밀, 대두, 우유, 쇠고기, 계란, 새우'
  },
  {
    name: '속쓰리라차 피자',
    nameEn: '3X SPICY PIZZA',
    totalSize: 363,
    servingSize: 73,
    calories: 213,
    sugars: 3,
    protein: 7,
    saturatedFat: 3,
    sodium: 487,
    allergens: '밀, 대두, 우유, 토마토, 계란, 돼지고기, 쇠고기, 조개류(굴)'
  }
];

const PageStyle =css`
  tr {
    &:nth-of-type(even) {
      background-color: #facdbe;
   }
  }

  th {
    background-color: #f05a28;
  }

  th, td {
    border-left: 1px solid #f05a28;
    &:nth-of-type(1) {
      border-left: none;
    }
  }
`;


const PersonalPizza = () => {
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
      </tbody>
    </Table>
  );
};

export default PersonalPizza;
