//@ts-nocheck
import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import reset from "ComponentsFarm/common";
import Layout from "ComponentsFarm/layouts";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import type { NextPage } from "next/types";
import { QueryClient, QueryClientProvider, QueryCache } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CookiesProvider } from "react-cookie";
import { findStore } from "MobxFarm/store";
import { GoogleAnalytics } from "nextjs-google-analytics";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-creative";
import "react-ig-feed/dist/index.css";
import { CommonSeo, menu, Seo } from "ComponentsFarm/Seo";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import * as fbq from "../src/util/fpixel";
import Script from "next/script";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);
  const router = useRouter();

  //페이스북 픽셀
  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview();

    const handleRouteChange = () => {
      fbq.pageview();
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  //페이스북 픽셀

  const [currentPath, setCurrentPath] = useState(router.pathname);

  // 원하는 스크립트를 실행하는 함수
  const runScript = () => {
    if (!window.wcs_add) window.wcs_add = {};
    window.wcs_add["wa"] = "s_dc8a2375cf2";
    if (!window._nasa) window._nasa = {};

    // 특정 경로인 '/start/inquiry'에서만 실행되어야 하는 코드
    if (currentPath === "/start/inquiry") {
      if (window.wcs) {
        var _nasa = window._nasa || {};
        _nasa["cnv"] = wcs.cnv("5", "0");
      }
    }

    if (window.wcs) {
      wcs.inflow("gopizza.kr");
      wcs_do(window._nasa);
    }
  };

  // 컴포넌트가 렌더링될 때 스크립트 실행
  useEffect(() => {
    runScript();
  }, [currentPath]); // currentPath가 바뀔 때마다 스크립트를 다시 실행합니다.

  // 컴포넌트가 업데이트될 때 pathname 갱신
  useEffect(() => {
    setCurrentPath(router.pathname);
  }, [router.pathname]);

  useEffect(() => {
    if (findStore.latitude === null && !router.asPath.includes("campaign")) {
      findStore.getPosition();
    }
  }, [router.asPath]);

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  }, []);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },

      mutations: {
        onError: (error) => console.error(error),
      },
    },
    queryCache: new QueryCache({
      onError: ({ message, code, status, response }: any) => {
        console.error(`Something went wrong: ${message}`);
      },
    }),
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={reset} />
      <CommonSeo />
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
        }}
      />
      <NextSeo {...Seo[menu.indexOf(router.asPath)]} />
      <GoogleAnalytics trackPageViews />
      <CookiesProvider>{getLayout(<Component {...pageProps} />)}</CookiesProvider>
      <ReactQueryDevtools />
      <Analytics />
    </QueryClientProvider>
  );
}
