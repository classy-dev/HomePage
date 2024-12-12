import styled from '@emotion/styled';
import React from 'react';
import { Table } from '../tableStyle';
import { css } from '@emotion/react';

interface SetInfo {
  name: string;
  nameEn: string;
  totalSize: string;
  calories: string;
}

const setData: SetInfo[] = [
  {
    name: '1인 피자 세트',
    nameEn: 'PIZZA & SIDE COMBO',
    totalSize: '691~1,252',
    calories: '1,063~2,433'
  },
  {
    name: '1.5인 피파 세트',
    nameEn: 'PIZZA & PASTA COMBO',
    totalSize: '1,001~1,167',
    calories: '1,425~2,082'
  },
  {
    name: '1.5인 피치 세트',
    nameEn: 'PIZZA & CHICKEN COMBO',
    totalSize: '777~1,062',
    calories: '1,254~2,302'
  },
  {
    name: '1.5인 피떡 세트',
    nameEn: 'PIZZA & TOPOKKI COMBO',
    totalSize: '956~1,195',
    calories: '1,504~2,348'
  },
  {
    name: '2인 피자 세트',
    nameEn: 'COUPLE COMBO',
    totalSize: '988~1,674',
    calories: '1,986~3,732'
  },
  {
    name: '2.5인 피자 세트',
    nameEn: 'FRIENDS COMBO',
    totalSize: '1,598~1,982',
    calories: '2,348~3,812'
  },
  {
    name: '피피 세트 (배달 전용)',
    nameEn: 'PIZZA & PIZZA COMBO',
    totalSize: '594~864',
    calories: '1,846~2,598'
  },
  {
    name: '라지 피파 세트',
    nameEn: 'LARGE PIZZA & PASTA COMBO',
    totalSize: '2,102~2,665',
    calories: '2,320~3,443'
  },
  {
    name: '라지 피치 세트',
    nameEn: 'LARGE PIZZA & CHICKEN COMBO',
    totalSize: '1,818~2,740',
    calories: '1,989~3,794'
  },
  {
    name: '라지 시그니처 세트',
    nameEn: 'LARGE & PERSONAL PIZZA COMBO',
    totalSize: '2,045~2,717',
    calories: '2,741~4,123'
  },
  {
    name: '브레드 콤보 세트',
    nameEn: 'BREAD COMBO SET',
    totalSize: '2,024~2,571',
    calories: '2,650~3,766'
  },
  {
    name: '최강야구 세트',
    nameEn: 'MONSTERS BASEBALL CLUB COMBO',
    totalSize: '888',
    calories: '1,411'
  }
];



const PageStyle =css`
  tr {
    &:nth-child(even) {
      background-color: #f4b4dc;
   }
  }

  th {
    background-color: #d70c8b;
  }

  th, td {
    border-left: 1px solid #d70c8b;
    &:nth-of-type(1) {
      border-left: none;
    }
  }
`;



const Set = () => {
  return (
    <Table css={PageStyle}>
      <thead>
        <tr>
          <th>메뉴명</th>
          <th>총 중량(g/ml)</th>
          <th>열량(kcal)</th>
        </tr>
      </thead>
      <tbody>
        {setData.map((set, index) => (
          <tr key={index}>
            <td className='menu-name'>
              <span className='ko'>{set.name}</span>
              <span className='en'>{set.nameEn}</span>
            </td>
            <td>{set.totalSize}</td>
            <td>{set.calories}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Set;
