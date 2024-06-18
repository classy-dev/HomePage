import { IndexWrap } from "ComponentsFarm/pageComp/index/style";
import Link from "next/link";
import { ReactElement, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Script from "next/script";

function Index() {
  return (
    <>
      <IndexWrap>
        <div className="box_goto">
          <div className="inner">
            <h1>BRAND</h1>
            <p>
              고피자의 메뉴와
              <br />
              매장을 찾고 계신가요?
            </p>
            <Link href="/main">
              <span className="txt">홈페이지</span>
            </Link>
          </div>
          <div className="inner_mobile">
            <h1>
              <span className="hiddenZoneV">GOPIZZA</span>
            </h1>
            <div className="btn_box">
              <div className="inner_btn">
                <Link href="/main">
                  <span className="txt">홈페이지 바로가기</span>
                </Link>
                <a href="https://startup.gopizza.kr" rel="noopener noreferrer">
                  <span className="txt">가맹안내 바로가기</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="box_goto">
          <div className="inner">
            <h1>FRANCHISE</h1>
            <p>
              인건비 걱정 없는 고피자 창업에
              <br /> 관심이 있으신가요?
            </p>
            <Link href="https://startup.gopizza.kr">
              <span className="txt">창업안내</span>
            </Link>
          </div>
        </div>
      </IndexWrap>
    </>
  );
}

export default Index;

Index.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
