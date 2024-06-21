import { fetchNews } from "ApiFarm/home";
import { INews } from "ApiFarm/interface/homeInterface";
import StartLayout from "ComponentsFarm/layouts/pageLayouts/StartLayout";
import BtnInquiry from "ComponentsFarm/pageComp/start/BtnInquiry";
import CeoMessage from "ComponentsFarm/pageComp/start/ceo/CeoMessage";
import Interview from "ComponentsFarm/pageComp/start/ceo/Interview";
import Media from "ComponentsFarm/pageComp/start/ceo/Media";
import { Content } from "ComponentsFarm/pageComp/start/style";
import TodayPopup from "ComponentsFarm/popup/TodayPopup";

function News(news: INews) {
  return (
    <StartLayout>
      <Content>
        <CeoMessage />
        <Interview />
        <Media news={news} />
        <BtnInquiry />
        {/* <TodayPopup size="sm" href="" src="/images/insure_240522_1.png" alt="" width="520" height="" /> */}
      </Content>
    </StartLayout>
  );
}

export default News;

export const getStaticProps = async () => {
  const news = await fetchNews();

  return {
    props: news,
    revalidate: 10,
  };
};
