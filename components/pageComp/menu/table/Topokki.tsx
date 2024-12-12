import styled from '@emotion/styled';
import React from 'react';
import { Table } from '../tableStyle';
import { css } from '@emotion/react';

interface TopokkiInfo {
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

const topokkiData: TopokkiInfo[] = [
  {
    name: '매콤 떡볶이',
    nameEn: 'TOPOKKI',
    totalSize: 304,
    servingSize: 304,
    calories: 580,
    sugars: 21,
    protein: 13,
    saturatedFat: 2,
    sodium: 1801,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 닭고기, 오징어, 조개류(굴)'
  },
  {
    name: '매콤 치즈 떡볶이',
    nameEn: 'CHEESE TOPOKKI',
    totalSize: 369,
    servingSize: 369,
    calories: 738,
    sugars: 19,
    protein: 24,
    saturatedFat: 9,
    sodium: 2001,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 닭고기, 오징어, 조개류(굴)'
  },
  {
    name: '마라 로제 떡볶이',
    nameEn: 'MALA ROSÉ TOPOKKI',
    totalSize: 343,
    servingSize: 343,
    calories: 722,
    sugars: 10,
    protein: 16,
    saturatedFat: 8,
    sodium: 2213,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 닭고기, 오징어, 조개류(굴)'
  },
  {
    name: '마라 로제 치즈떡볶이',
    nameEn: 'MALA ROSÉ CHEESE TOPOKKI',
    totalSize: 408,
    servingSize: 408,
    calories: 886,
    sugars: 10,
    protein: 28,
    saturatedFat: 15,
    sodium: 2561,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 닭고기, 오징어, 조개류(굴)'
  }
];


const PageStyle =css`
  tr {
    &:nth-of-type(even) {
      background-color: #f4c0be;
   }
  }

  th {
    background-color: #da2127;
  }

  th, td {
    border-left: 1px solid #da2127;
    &:nth-of-type(1) {
      border-left: none;
    }
  }
`;


const Topokki = () => {
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
        {topokkiData.map((topokki, index) => (
          <tr key={index}>
            <td className='menu-name'>
              <span className='ko'>{topokki.name}</span>
              <span className='en'>{topokki.nameEn}</span>
            </td>
            <td>{topokki.totalSize}</td>
            <td>{topokki.servingSize}</td>
            <td>{topokki.calories}</td>
            <td>{topokki.sugars}</td>
            <td>{topokki.protein}</td>
            <td>{topokki.saturatedFat}</td>
            <td>{topokki.sodium}</td>
            <td>{topokki.allergens}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Topokki;
