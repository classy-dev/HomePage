import styled from '@emotion/styled';
import React from 'react';
import { Table } from '../tableStyle';
import { css } from '@emotion/react';

interface SourceInfo {
  name: string;
  nameEn: string;
  totalSize: number;
  servingSize: number;
  calories: number | string;
  sugars: number;
  protein: number | string;
  saturatedFat: number | string;
  sodium: number | string;
  allergens: string;
}

const sourceData: SourceInfo[] = [
  {
    name: '오뚜기 케찹(1회용)',
    nameEn: 'OTTOGI TOMATO KETCHUP',
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
    nameEn: 'GOPIZZA HOT SAUCE',
    totalSize: 4,
    servingSize: 4,
    calories: '-',
    sugars: 0,
    protein: '-',
    saturatedFat: '-',
    sodium: 62,
    allergens: '토마토'
  },
  {
    name: '고피자 갈릭디핑소스(1회용)',
    nameEn: 'GOPIZZA GARLIC DIPPING SAUCE',
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
    nameEn: 'GOPIZZA HONEY SAUCE',
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
    nameEn: 'RANCH SAUCE',
    totalSize: 30,
    servingSize: 30,
    calories: 110,
    sugars: 2,
    protein: 0,
    saturatedFat: 2,
    sodium: 160,
    allergens: '대두, 우유, 쇠고기, 계란'
  },
  {
    name: '파이어 소스',
    nameEn: 'FIRE SAUCE',
    totalSize: 30,
    servingSize: 30,
    calories: 45,
    sugars: 11,
    protein: 0,
    saturatedFat: 0,
    sodium: 293,
    allergens: '대두, 밀, 토마토, 돼지고기, 조개류(굴)'
  },
  {
    name: '생오이피클',
    nameEn: 'PICKLE',
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
    name: '레드 시즈닝',
    nameEn: 'RED SEASONING',
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
    nameEn: 'CONDENSED MILK',
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


const Source = () => {
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
        {sourceData.map((source, index) => (
          <tr key={index}>
            <td className='menu-name'>
              <span className='ko'>{source.name}</span>
              <span className='en'>{source.nameEn}</span>
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
        <tr>
          {Array(9).fill(0).map((_, index) => (
            <td key={index} style={{ height:"6rem" }}></td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
};

export default Source;
