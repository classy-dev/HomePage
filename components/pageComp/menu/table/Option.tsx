import styled from '@emotion/styled';
import React from 'react';
import { Table } from '../tableStyle';
import { css } from '@emotion/react';

interface OptionInfo {
  name: string;
  nameEn: string;
  totalSize: string | number;
  servingSize: string | number;
  calories: number;
  sugars: number | string;
  protein: number;
  saturatedFat: number;
  sodium: number;
  allergens: string;
}

const optionData: OptionInfo[] = [
  {
    name: '치즈 추가',
    nameEn: 'ADD CHEESE',
    totalSize: 30,
    servingSize: 30,
    calories: 82,
    sugars: 0,
    protein: 6,
    saturatedFat: 4,
    sodium: 174,
    allergens: '우유'
  },
  {
    name: '치즈 추가 X2',
    nameEn: 'ADD DOUBLE CHEESE',
    totalSize: 60,
    servingSize: 60,
    calories: 163,
    sugars: 0,
    protein: 11,
    saturatedFat: 8,
    sodium: 348,
    allergens: '우유'
  },
  {
    name: '시즈닝 새우(3마리)',
    nameEn: 'SEASONED SHRIMP(3 PIECES)',
    totalSize: '-',
    servingSize: '-',
    calories: 46,
    sugars: 0,
    protein: 9,
    saturatedFat: 0,
    sodium: 145,
    allergens: '새우, 밀, 대두, 쇠고기, 우유'
  },
  {
    name: '마리네이드 새우(3마리)',
    nameEn: 'MARINATED SHRIMP(3 PIECES)',
    totalSize: '-',
    servingSize: '-',
    calories: 43,
    sugars: '-',
    protein: 9,
    saturatedFat: 0,
    sodium: 58,
    allergens: '새우, 밀, 대두, 우유, 계란, 쇠고기'
  },
  {
    name: '마리네이드새우(6마리)',
    nameEn: 'MARINATED SHRIMP(6 PIECES)',
    totalSize: '-',
    servingSize: '-',
    calories: 85,
    sugars: '-',
    protein: 18,
    saturatedFat: 0,
    sodium: 116,
    allergens: '새우, 밀, 대두, 우유, 계란, 쇠고기'
  },
  {
    name: '고구마 무스',
    nameEn: 'SWEET POTATO MOUSSE',
    totalSize: 100,
    servingSize: 100,
    calories: 147,
    sugars: 19,
    protein: 1,
    saturatedFat: 1,
    sodium: 161,
    allergens: '대두, 계란, 쇠고기, 이산화황'
  }
];


const PageStyle =css`
  tr {
    &:nth-of-type(even) {
      background-color: #e0cde2;
   }
  }

  th {
    background-color: #985aa3;
  }

  th, td {
    border-left: 1px solid #985aa3;
    &:nth-of-type(1) {
      border-left: none;
    }
  }
`;




const Option = () => {
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
        {optionData.map((option, index) => (
          <tr key={index}>
            <td className='menu-name'>
              <span className='ko'>{option.name}</span>
              <span className='en'>{option.nameEn}</span>
            </td>
            <td>{option.totalSize}</td>
            <td>{option.servingSize}</td>
            <td>{option.calories}</td>
            <td>{option.sugars}</td>
            <td>{option.protein}</td>
            <td>{option.saturatedFat}</td>
            <td>{option.sodium}</td>
            <td>{option.allergens}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Option;
