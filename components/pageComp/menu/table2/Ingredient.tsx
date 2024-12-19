import styled from '@emotion/styled';
import React from 'react';
import { Table } from '../tableStyle';
import { css } from '@emotion/react';
import { mq } from 'ComponentsFarm/common';

interface IngredientData {
  category: string;
  origin: string;
  content: string;
}

const Tr = styled.tr`
  &:nth-of-type(even) {
    background-color: #E3F2FD;
  }

`;

const ingredientData: IngredientData[] = [
  {
    category: '불고기',
    origin: '쇠고기:호주산',
    content: 'K-불고기 피자, 불새피자, 불새피자(L), 미트몬스터 피자',
  },
  {
    category: '페퍼로니',
    origin: '돼지고기(지방일부 사용): 국산, 외국산(미국, 아일랜드, 스페인 등) 쇠고기: 호주산',
    content: "오리지널 페퍼로니 피자, 매니악 페퍼로니 피자, 슈퍼 콤비네이션 피자, 스윗 치킨앤콘 피자, 스파이시 치킨앤콘 피자, 페퍼로니 앤 포테이토 반반 피자, 치킨앤콘 반반 피자, 매니악 페퍼로니 피자(L),\n슈퍼콤비네이션 피자(L), 페이보릿포 (F4) (L), 미트몬스터 피자",
  },
  {
    category: '베이컨',
    origin: '돼지고기:외국산',
    content: '베이컨 포테이토 피자, 슈퍼콤비네이션 피자, 페퍼로니 앤 포테이토 반반 피자, 아임파인 피자, 콤비네이션 피자, 베이컨 로제 파스타, 속쓰리라차 피자, 베이컨 포테이토 피자(L), 슈퍼 콤비네이션 피자(L),\n페이보릿포 (F4)(L), 달달달콤하구마 피자(L), 미트몬스터(L)',
  },
  {
    category: '비프스트립',
    origin: '쇠고기:호주산',
    content: '스테이크 피자',
  },
  {
    category: '세블락 소시지 탑핑',
    origin: '돼지고기:외국산, 국산 섞음',
    content: '미트몬스터(L)',
  },
  {
    category: '포크불고기 분쇄',
    origin: '돼지고기: 국산, 외국산 섞음',
    content: '베이컨 포테이토 피자, 페퍼로니 앤 포테이토 반반 피자, 미트치즈랩, 베이컨 포테이토 피자(L), 페이보릿포 (F4)(L)',
  },
  {
    category: '포크 토핑',
    origin: '돼지고기:외국산',
    content: '크레이지 미트치즈 피자, 슈퍼 콤비네이션 피자, 콤비네이션 피자, 슈퍼 콤비네이션 피자(L), 페이보릿포 (F4)(L)',
  },
  {
    category: '버팔로 윙/버팔로 스틱',
    origin: '닭고기:태국산',
    content: '버팔로 윙/봉, 버팔로 윙',
  },
  {
    category: '순살 치킨',
    origin: '닭고기:브라질산',
    content: '순살치킨 앤 프라이, ALL 순살치킨',
  },
  {
    category: '통다리 치킨',
    origin: '닭고기:태국산',
    content: '크리스피 빠삭치킨, 통다리치킨',
  },
  {
    category: '통살 치킨',
    origin: '닭고기:태국산',
    content: '크리스피 빠삭치킨, 통살치킨, 치킨랩',
  },
  {
    category: '팝콘 치킨',
    origin: '닭고기:태국산',
    content: '스윗 치킨앤콘 피자, 스파이시 치킨앤콘 피자, 치킨앤콘 반반 피자',
  },
  {
    category: '오징어 피쉬볼',
    origin: '연육: 중국산 오징어: 중국산',
    content: '매콤 떡볶이, 매콤 치즈 떡볶이, 마라로제 떡볶이, 마라치즈 떡볶이',
  },
];

const pageStyle = css`
  white-space: pre-wrap;
  border-bottom:1px solid #000;

  .menu-name .ko {
    text-align:center;
  }
  .info {
    text-align: left;
    .origin {
      font-weight:bold;
    }
    
  }
  `;

const Ingredient = () => {
  return (
    <Table className='ver2-store' css={pageStyle}>
      <colgroup>
        <col width='20%' />
        <col width='80%' />
      </colgroup>
      <thead>
        <tr>
          <th>제품 원산지 표시</th>
          <th>기준일: 11월 18일</th>
        </tr>
      </thead>
      <tbody>
        {ingredientData.map((item, index) => (
          <Tr key={index}>
            <td className='menu-name'>
              <span className='ko'>{item.category}</span>
            </td>
            <td className='info'>
              <div className='origin'>{item.origin}</div>
              <div className='content'>{item.content}</div>
            </td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Ingredient;
