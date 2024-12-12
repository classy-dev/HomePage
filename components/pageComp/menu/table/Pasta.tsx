import styled from '@emotion/styled';
import React from 'react';
import { Table } from '../tableStyle';
import { css } from '@emotion/react';

interface PastaInfo {
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

const pastaData: PastaInfo[] = [
  {
    name: '토마토 치즈 파스타',
    nameEn: 'TOMATO CHEESE PASTA',
    totalSize: 354,
    servingSize: 354,
    calories: 502,
    sugars: 15,
    protein: 23,
    saturatedFat: 7,
    sodium: 1022,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 돼지고기, 닭고기'
  },
  {
    name: '미트 치즈 파스타',
    nameEn: 'MEAT CHEESE PASTA',
    totalSize: 358,
    servingSize: 358,
    calories: 556,
    sugars: 10,
    protein: 26,
    saturatedFat: 11,
    sodium: 925,
    allergens: '밀, 대두, 우유, 토마토, 쇠고기, 돼지고기, 닭고기'
  },
  {
    name: '베이컨 로제 파스타',
    nameEn: 'BACON ROSÉ PASTA',
    totalSize: 380,
    servingSize: 380,
    calories: 619,
    sugars: 6,
    protein: 24,
    saturatedFat: 16,
    sodium: 1784,
    allergens: '밀, 대두, 우유, 토마토, 돼지고기, 닭고기, 조개류(굴)'
  }
];

const PageStyle =css`
  tr {
    &:nth-of-type(even) {
      background-color: #d2beb6;
   }
  }

  th {
    background-color: #6b270e;
  }

  th, td {
    border-left: 1px solid #6b270e;
    &:nth-of-type(1) {
      border-left: none;
    }
  }
`;


const Pasta = () => {
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
        {pastaData.map((pasta, index) => (
          <tr key={index}>
            <td className='menu-name'>
              <span className='ko'>{pasta.name}</span>
              <span className='en'>{pasta.nameEn}</span>
            </td>
            <td>{pasta.totalSize}</td>
            <td>{pasta.servingSize}</td>
            <td>{pasta.calories}</td>
            <td>{pasta.sugars}</td>
            <td>{pasta.protein}</td>
            <td>{pasta.saturatedFat}</td>
            <td>{pasta.sodium}</td>
            <td>{pasta.allergens}</td>
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

export default Pasta;
