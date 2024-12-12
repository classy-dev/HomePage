import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  background-color: #212121;
  color: white;
  padding: 20px;
  margin-bottom: 30px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const MainTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
`;

const UpdateDate = styled.div`
  font-size: 1.2rem;
`;

const NoticeList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
  color: #e0e0e0;
`;

const NoticeItem = styled.li`
  margin-bottom: 8px;
  line-height: 1.4;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const Title = () => {
  return (
    <Container>
      <TitleWrapper>
        <MainTitle>2.0 매장<br />제품영양분석표</MainTitle>
        <UpdateDate>2024.11.27</UpdateDate>
      </TitleWrapper>
      <NoticeList>
        <NoticeItem>각 제품은 원재료의 수급 상황에 따라 구성 성분이 다소 변경될 수 있습니다.</NoticeItem>
        <NoticeItem>표시된 영양 구성 성분은 실험 방법 등에 따라 차이가 있을 수도 있습니다.</NoticeItem>
        <NoticeItem>알앤비세프 육의 모든 제품 홀딩은 표준 홀딩타며, 실제 제조 시 다소 차이가 있을 수 있습니다.</NoticeItem>
        <NoticeItem>새로매장의 수치는 총 중량을 기준으로 하였으며, 구성에 따라 영양성분이 다르기 때문에 각각의 성분을 확인해 주시기 바랍니다.</NoticeItem>
      </NoticeList>
    </Container>
  );
};

export default Title;
