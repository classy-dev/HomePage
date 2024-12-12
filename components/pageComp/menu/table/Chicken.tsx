import styled from '@emotion/styled';
import React from 'react';
import { Table } from '../tableStyle';
import { css } from '@emotion/react';

interface ChickenInfo {
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

const chickenData: ChickenInfo[] = [
  {
    name: '순살치킨 앤 프라이',
    nameEn: 'BONELESS CHICKEN & FRIES',
    totalSize: 130,
    servingSize: 130,
    calories: 331,
    sugars: 1,
    protein: 15,
    saturatedFat: 3,
    sodium: 661,
    allergens: '밀, 대두, 닭고기'
  },
  {
    name: '크리스피 빠삭치킨',
    nameEn: 'CRISPY FRIED CHICKEN',
    totalSize: 275,
    servingSize: 275,
    calories: 839,
    sugars: 3,
    protein: 30,
    saturatedFat: 10,
    sodium: 1356,
    allergens: '밀, 대두, 우유, 닭고기, 계란'
  },
  {
    name: 'ALL 순살치킨',
    nameEn: 'ALL BONELESS CHICKEN',
    totalSize: 150,
    servingSize: 150,
    calories: 365,
    sugars: 1,
    protein: 24,
    saturatedFat: 4,
    sodium: 945,
    allergens: '밀, 대두, 닭고기'
  },
  {
    name: '버팔로 윙/봉 2개',
    nameEn: 'BUFFALO WINGS 2PCS',
    totalSize: 70,
    servingSize: 70,
    calories: 171,
    sugars: 2,
    protein: 14,
    saturatedFat: 2,
    sodium: 494,
    allergens: '대두, 우유, 닭고기, 계란'
  },
  {
    name: '버팔로 윙/봉 4개',
    nameEn: 'BUFFALO WINGS 4PCS',
    totalSize: 140,
    servingSize: 140,
    calories: 342,
    sugars: 4,
    protein: 28,
    saturatedFat: 4,
    sodium: 988,
    allergens: '대두, 우유, 닭고기, 계란'
  },
  {
    name: '버팔로 윙/봉 10개',
    nameEn: 'BUFFALO WINGS 10PCS',
    totalSize: 455,
    servingSize: 455,
    calories: 970,
    sugars: 35,
    protein: 70,
    saturatedFat: 10,
    sodium: 2823,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 닭고기, 계란'
  }
];

const PageStyle =css`
  tr {
    &:nth-of-type(even) {
      background-color: #fde1ba;
   }
  }

  th {
    background-color: #f89c1d;
  }

  th, td {
    border-left: 1px solid #f89c1d;
    &:nth-of-type(1) {
      border-left: none;
    }
  }
`;


const Chicken = () => {
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
        {chickenData.map((chicken, index) => (
          <tr key={index}>
            <td className='menu-name'>
              <span className='ko'>{chicken.name}</span>
              <span className='en'>{chicken.nameEn}</span>
            </td>
            <td>{chicken.totalSize}</td>
            <td>{chicken.servingSize}</td>
            <td>{chicken.calories}</td>
            <td>{chicken.sugars}</td>
            <td>{chicken.protein}</td>
            <td>{chicken.saturatedFat}</td>
            <td>{chicken.sodium}</td>
            <td>{chicken.allergens}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Chicken;
