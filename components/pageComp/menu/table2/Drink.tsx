import styled from '@emotion/styled';
import React from 'react';
import { Table } from '../tableStyle';

interface DrinkData {
  name: string;
  engName: string;
  totalSize: number;
  servingSize: number;
  calories: string | number;
  sugars: string | number;
  protein: string;
  saturatedFat: string;
  sodium: number;
}

const Tr = styled.tr`
  &:nth-of-type(even) {
    background-color: #E3F2FD;
  }
  &:hover {
    background-color: #BBDEFB;
  }
`;

const drinkData: DrinkData[] = [
  {
    name: '코카콜라 355ml',
    engName: 'COCA-COLA',
    totalSize: 355,
    servingSize: 355,
    calories: 157,
    sugars: 39,
    protein: '-',
    saturatedFat: '-',
    sodium: 11
  },
  {
    name: '코카콜라 500ml',
    engName: 'COCA-COLA',
    totalSize: 500,
    servingSize: 500,
    calories: 216,
    sugars: 54,
    protein: '-',
    saturatedFat: '-',
    sodium: 15
  },
  {
    name: '코카콜라 1.25L',
    engName: 'COCA-COLA',
    totalSize: 1250,
    servingSize: 200,
    calories: 92,
    sugars: 22,
    protein: '-',
    saturatedFat: '-',
    sodium: 12
  },
  {
    name: '코카콜라 제로 355ml',
    engName: 'ZERO COLA',
    totalSize: 355,
    servingSize: 355,
    calories: '-',
    sugars: '-',
    protein: '-',
    saturatedFat: '-',
    sodium: 22
  },
  {
    name: '코카콜라 제로 500ml',
    engName: 'ZERO COLA',
    totalSize: 500,
    servingSize: 500,
    calories: '-',
    sugars: '-',
    protein: '-',
    saturatedFat: '-',
    sodium: 30
  },
  {
    name: '코카콜라 제로 1.25L',
    engName: 'ZERO COLA',
    totalSize: 1250,
    servingSize: 200,
    calories: 92,
    sugars: 22,
    protein: '-',
    saturatedFat: '-',
    sodium: 12
  },
  {
    name: '스프라이트 355ml',
    engName: 'SPRITE',
    totalSize: 355,
    servingSize: 355,
    calories: 164,
    sugars: 41,
    protein: '-',
    saturatedFat: '-',
    sodium: 33
  },
  {
    name: '스프라이트 500ml',
    engName: 'SPRITE',
    totalSize: 500,
    servingSize: 500,
    calories: 228,
    sugars: 57,
    protein: '-',
    saturatedFat: '-',
    sodium: 47
  },
  {
    name: '스프라이트 1.5L',
    engName: 'SPRITE',
    totalSize: 1500,
    servingSize: 200,
    calories: 96,
    sugars: 24,
    protein: '-',
    saturatedFat: '-',
    sodium: 19
  },
  {
    name: '스프라이트 제로 355ml',
    engName: 'ZERO SPRITE',
    totalSize: 355,
    servingSize: 355,
    calories: '-',
    sugars: '-',
    protein: '-',
    saturatedFat: '-',
    sodium: 11
  },
  {
    name: '스프라이트 제로 500ml',
    engName: 'ZERO SPRITE',
    totalSize: 500,
    servingSize: 500,
    calories: '-',
    sugars: '-',
    protein: '-',
    saturatedFat: '-',
    sodium: 16
  },
  {
    name: '스프라이트 제로 1.5L',
    engName: 'ZERO SPRITE',
    totalSize: 1500,
    servingSize: 200,
    calories: '-',
    sugars: '-',
    protein: '-',
    saturatedFat: '-',
    sodium: 6
  },
  {
    name: '환타 오렌지 355ml',
    engName: 'FANTA ORANGE',
    totalSize: 355,
    servingSize: 355,
    calories: 73,
    sugars: 18,
    protein: '-',
    saturatedFat: '-',
    sodium: 18
  },
  {
    name: '환타 파인애플 355ml',
    engName: 'FANTA PINEAPPLE',
    totalSize: 355,
    servingSize: 355,
    calories: 73,
    sugars: 18,
    protein: '-',
    saturatedFat: '-',
    sodium: 33
  },
  {
    name: '환타 포도 355ml',
    engName: 'FANTA GRAPE',
    totalSize: 355,
    servingSize: 355,
    calories: 117,
    sugars: 29,
    protein: '-',
    saturatedFat: '-',
    sodium: 33
  },
  {
    name: '미닛메이드 350ml',
    engName: 'MINUTE MAID',
    totalSize: 350,
    servingSize: 350,
    calories: 132,
    sugars: 26,
    protein: '-',
    saturatedFat: '-',
    sodium: 95
  }
];

const Drink = () => {
  return (
    <Table className='ver2-store'>
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
        </tr>
      </thead>
      <tbody>
        {drinkData.map((drink, index) => (
          <tr key={index}>
             <td className='menu-name'>
              <span className='ko'>{drink.name}</span>
              <span className='en'>{drink.engName}</span>
            </td>
            <td>{drink.totalSize}</td>
            <td>{drink.servingSize}</td>
            <td>{drink.calories}</td>
            <td>{drink.sugars}</td>
            <td>{drink.protein}</td>
            <td>{drink.saturatedFat}</td>
            <td>{drink.sodium}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Drink;
