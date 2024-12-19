import React from 'react'
import styled from '@emotion/styled';
import { mq } from 'ComponentsFarm/common';

const TitleWrapper = styled.div`
  display: flex;
  background-color: #231916;
  color: #fff;
  padding:  0 2rem;

  ${mq[0]} {
    padding: 1rem;
    flex-direction: column;
  }
`;

const TitleSection = styled.div`
  flex: 1;
  color: #fff;
  font-size: 4.8rem;
  line-height: 1.2;
  margin: 0;

  ${mq[0]} {
    font-size: 1.6rem;
  }

  &:first-of-type {
    display: flex;
    align-items: center;
    border-right: 1px solid #fff;
    font-weight: bold;

    ${mq[0]} {
      border-right: none;
      border-bottom: 1px solid #fff;
      padding-right: 0;
      padding-bottom: 1rem;
      margin-bottom: 1rem;
    }
  }

  &:last-of-type {
    .info {
    padding: 2rem 4rem;
  }

    ${mq[0]} {
      padding: 0;
      .info {
        padding: 0;
      }
    }
  }
`;



const InfoDate = styled.div`
color:#fff;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;

  ${mq[0]} {
    font-size: 1.4rem;
  }
`;

const InfoText = styled.p`
    color:#fff;
  font-size: 1.6rem;
  margin: 0;
  white-space: pre-line;

  ${mq[0]} {
    font-size: 1rem;
  }
`;

const TitleInfo = () => {
  return (
    <TitleWrapper>
      <TitleSection>
       2.0 매장<br />
        제품영양분석표
      </TitleSection>
      <TitleSection>
        <div className='info'>
        <InfoDate>2024. 11. 27</InfoDate>
        <InfoText>
          각 제품은 원재료의 수급 상황에 따라 구성 성분이 다소 변경될 수 있습니다.
          표시된 영양 구성 성분은 실험 방법 등에 따라 차이가 있을 수도 있습니다.
          영양성분표 속의 모든 제품 용량은 표준 용량이며, 실제 제공 시 다소 차이가 있을 수 있습니다.
          세트메뉴의 수치는 총 중량을 기준으로 하였으며, 구성에 따라 영양성분이 다르기 때문에 각각의 성분을 확인해 주시기 바랍니다.</InfoText>
          </div>
      </TitleSection>

    </TitleWrapper>
  );
};

export default TitleInfo;