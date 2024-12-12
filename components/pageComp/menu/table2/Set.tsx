import { Table } from '../tableStyle';
import styled from '@emotion/styled';

interface SetData {
  name: string;
  engName: string;
  totalSizeRange: string;
  caloriesRange: string;
}



const setData: SetData[] = [
  {
    name: '빠삭치킨 세트',
    engName: 'CRISPY FRIED CHICKEN COMBO',
    totalSizeRange: '1,034~1,278',
    caloriesRange: '1,902~2,736'
  },
  {
    name: '버팔로 윙 세트',
    engName: 'BUFFALO WINGS COMBO',
    totalSizeRange: '999~1,213',
    caloriesRange: '1,698~2,326'
  },
  {
    name: '파스타 세트',
    engName: 'PASTA COMBO',
    totalSizeRange: '1,112~1,330',
    caloriesRange: '1,631~2,313'
  },
  {
    name: '떡볶이 세트',
    engName: 'TOPOKKI COMBO',
    totalSizeRange: '1,062~1,341',
    caloriesRange: '1,710~2,495'
  },
  {
    name: '라지 피파 세트',
    engName: 'LARGE PIZZA & PASTA COMBO',
    totalSizeRange: '2,102~2,643',
    caloriesRange: '2,398~3,562'
  },
  {
    name: '라지 피치 세트',
    engName: 'LARGE PIZZA & CHICKEN COMBO',
    totalSizeRange: '1,818~2,740',
    caloriesRange: '2,083~3,596'
  },
  {
    name: '라지 시그니처 세트',
    engName: 'LARGE & PERSONAL PIZZA COMBO',
    totalSizeRange: '2,151~2,902',
    caloriesRange: '2,948~4,417'
  },
  {
    name: '브레드 콤보 세트',
    engName: 'BREAD COMBO SET',
    totalSizeRange: '2,024~2,571',
    caloriesRange: '2,650~3,766'
  },
  {
    name: '최강야구 세트',
    engName: 'MONSTERS BASEBALL CLUB COMBO',
    totalSizeRange: '979',
    caloriesRange: '1,629'
  }
];

const Set = () => {
  return (
      <Table className='ver2-store'>
        <thead>
          <tr>
            <th>메뉴명</th>
            <th>총량(g/ml)</th>
            <th>열량(kcal)</th>
          </tr>
        </thead>
        <tbody>
          {setData.map((item, index) => (
            <tr key={index}>
              <td className='menu-name'>
              <span className='ko'>{item.name}</span>
              <span className='en'>{item.engName}</span>
            </td>
              <td>{item.totalSizeRange}</td>
              <td>{item.caloriesRange}</td>
            </tr>
          ))}
        </tbody>
      </Table>
  );
};

export default Set;
