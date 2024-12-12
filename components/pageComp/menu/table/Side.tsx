import styled from '@emotion/styled';
import React from 'react';
import { Table } from '../tableStyle';
import { css } from '@emotion/react';

interface SideInfo {
  name: string;
  nameEn: string;
  totalSize: number;
  servingSize: number;
  calories: number;
  sugars: number | string;
  protein: number;
  saturatedFat: number;
  sodium: number;
  allergens: string;
}

const sideData: SideInfo[] = [
  {
    name: '치즈 스틱 2개',
    nameEn: 'CHEESE STICKS 2PCS',
    totalSize: 44,
    servingSize: 44,
    calories: 140,
    sugars: 1,
    protein: 6,
    saturatedFat: 3,
    sodium: 254,
    allergens: '밀, 대두, 우유'
  },
  {
    name: '치즈 스틱 4개',
    nameEn: 'CHEESE STICKS 4PCS',
    totalSize: 88,
    servingSize: 88,
    calories: 281,
    sugars: 3,
    protein: 11,
    saturatedFat: 5,
    sodium: 509,
    allergens: '밀, 대두, 우유'
  },
  {
    name: '프렌치 프라이',
    nameEn: 'FRENCH FRIES',
    totalSize: 80,
    servingSize: 80,
    calories: 220,
    sugars: '-',
    protein: 3,
    saturatedFat: 1,
    sodium: 222,
    allergens: '밀, 대두, 토마토'
  },
  {
    name: '매콤 떡강정',
    nameEn: 'SPICY TTEOK GANGJUNG',
    totalSize: 175,
    servingSize: 175,
    calories: 253,
    sugars: 2,
    protein: 6,
    saturatedFat: 1,
    sodium: 255,
    allergens: '대두, 밀, 토마토, 돼지고기, 조개류(굴)'
  },
  {
    name: '갈릭 치즈 브레드',
    nameEn: 'CHEESE GARLIC BREAD',
    totalSize: 276,
    servingSize: 100,
    calories: 302,
    sugars: 4,
    protein: 10,
    saturatedFat: 3,
    sodium: 578,
    allergens: '밀, 대두, 우유, 계란, 돼지고기, 쇠고기, 닭고기, 토마토'
  },
  {
    name: '시나몬 연유 브레드',
    nameEn: 'CINNAMON BREAD',
    totalSize: 286,
    servingSize: 100,
    calories: 329,
    sugars: 11,
    protein: 11,
    saturatedFat: 4,
    sodium: 509,
    allergens: '밀, 대두, 우유, 계란, 쇠고기, 닭고기'
  }
];

const PageStyle =css`
  tr {
    &:nth-child(even) {
      background-color: #eed6be;
   }
  }

  th {
    background-color: #c77729;
  }

  th, td {
    border-left: 1px solid #c77729;
    &:nth-of-type(1) {
      border-left: none;
    }
  }
`;



const Side = () => {
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
        {sideData.map((side, index) => (
          <tr key={index}>
            <td className='menu-name'>
              <span className='ko'>{side.name}</span>
              <span className='en'>{side.nameEn}</span>
            </td>
            <td>{side.totalSize}</td>
            <td>{side.servingSize}</td>
            <td>{side.calories}</td>
            <td>{side.sugars}</td>
            <td>{side.protein}</td>
            <td>{side.saturatedFat}</td>
            <td>{side.sodium}</td>
            <td>{side.allergens}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Side;
