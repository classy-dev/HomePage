import Tab from "ComponentsFarm/layouts/Tab";
import { menuItem, menuTab } from "ComponentsFarm/pageComp/menu/constant";
import { MenuList, MenuVisual, MenuWrap } from "ComponentsFarm/pageComp/menu/style";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Dialog from "ComponentsFarm/common/Dialog";
import styled from "@emotion/styled";
import Tip from "ComponentsFarm/popup/Tip";
import Head from "next/head";
import { MenuSeo, Seo } from "ComponentsFarm/Seo";
import { NextSeo } from "next-seo";

import Modal from "ComponentsFarm/common/Modal";
import DOMPurify from "isomorphic-dompurify";
import { PrivacyArr } from "ComponentsFarm/popup/PrivacyContent";
import { folder, mq } from "ComponentsFarm/common";

export const TipWrap = styled.div`
  position: relative;
  width: 132rem;
  padding: 6.4rem 13.6rem 6.6rem;
  border-radius: 3rem;

  background: #fff;

  h2 {
    display: flex;
    width: 18.9rem;
    height: 4.8rem;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    border-radius: 0.8rem;
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--color-orange);
    background-color: #ffece5;
  }
  ul {
    display: grid;
    gap: 1.4rem;
    grid-template-columns: repeat(3, 1fr);

    img {
      display: block;
    }
    .box_txt {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 2.5rem;
      .txt1 {
        margin-right: 1.1rem;
        font-size: 4.5rem;
        font-weight: bold;

        .number {
          font-family: "rucksack";
        }
      }
      .txt2 {
        font-size: 1.4rem;
        font-weight: bold;
      }
      .txt3 {
        font-size: 1.2rem;
      }
    }
    .txt_box span {
      display: block;
      white-space: pre-wrap;
    }
  }
  ${mq[0]} {
    width: calc(100vw - 40px);
    height: 438px;
    padding: 20px;
    border-radius: 10px;

    p.tit {
      margin-bottom: 10px;
    }

    ul {
      overflow-y: auto;
      display: block;
      max-height: calc(100% - 110px);

      li {
        margin-bottom: 30px;
        img {
          max-width: 170px;
          margin: 0 auto;
        }

        .box_txt {
          margin-top: 10px;
        }
      }
    }
  }
  ${folder} {
    ul {
      .box_txt {
        .txt1 {
          font-size: 28px;

          .number {
            font-size: 28px;
          }
        }
        .txt2 {
          font-size: 12px;
        }
        .txt3 {
          font-size: 11px;
        }
      }
    }
  }
`;

const TipArr = [
  {
    txt1: `피자를 즐길 줄 아는 진정한\n피자러버인 당신을 위해`,
    txt2: "피자 1종 + 사이드 1종 + 음료 1종",
  },
  {
    txt1: `각자 원하는 맛 골라서 나눠먹자!\n양과 가성비 둘 다 챙기기`,
    txt2: "피자 2종 + 사이드 1종 + 음료 2종",
  },
  {
    txt1: `여럿이도 문제없GO! 취향존중`,
    txt2: `피자 2종 + 떡볶이 or 파스타 1종\n+ 사이드 1종 + 음료 2종`,
  },
];

function Menu({ seo }: { seo: object }) {
  const router = useRouter();
  const popref = useRef<any>(null);
  // const category = ["/pizza", "/pasta", "/topokki", "/sides", "/set", "/powertime", "/special"];
  const category = ["/large", "/personal", "/pasta", "/topokki", "/sides", "/set", "/special"];
  const categoryNav = useMemo(() => category.indexOf(router.asPath.split("/menu")[1]), [router.asPath]);

  const [open, setOpen] = useState(false);
  const openStoreModal = useCallback(() => {
    setOpen(true);
  }, []);
  const close = useCallback(() => {
    setOpen(false);
  }, []);

  const [openNutrient, setOpenNutrient] = useState(false);
  const openNutrientModal = useCallback(() => {
    setOpenNutrient(true);
  }, []);

  useEffect(() => {
    if (!!router.asPath && router.asPath.includes("#nutrient")) {
      setOpenNutrient(true);
    }
  }, [router.asPath]);

  const closesetOpenNutrient = useCallback(() => {
    setOpenNutrient(false);

    if (!!router.asPath && router.asPath.includes("#nutrient")) {
      router.push("/menu");
    }
  }, [router]);

  return (
    <>
      <NextSeo {...seo} />
      <MenuWrap>
        <h2 className="tit">메뉴</h2>
        <Tab data={menuTab} />
        <MenuVisual bgimg={categoryNav === -1 ? 1 : categoryNav + 1} />
        <div className="wrp_tip">
          <button
            className="tip"
            onClick={() => {
              openNutrientModal();
            }}
          >
            영양성분 & 알레르기
          </button>
          <button
            className="tip"
            onClick={() => {
              openStoreModal();
            }}
          >
            더 맛있게 먹는 TIP
          </button>

          <Modal open={open} onClose={close}>
            <TipWrap>
              <div className="box_txt">
                <h2>더 맛있게 먹는 TIP</h2>
                <p className="tit">
                  혼자서도, 다 같이도
                  <br /> 항상 즐겁고 맛있는 고피자!
                </p>
              </div>
              <ul className="list_tip">
                {TipArr.map((el, i) => (
                  <li key={i}>
                    <img key={i} src={`https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/popup/tip${i + 1}x2.webp?v=`} alt="예시 이미지" />
                    <div className="box_txt">
                      <span className="txt1">
                        {i === 2 ? (
                          <>
                            <span className="number">{i + 1}</span>인~{" "}
                          </>
                        ) : (
                          <>
                            <span className="number">{i + 1}</span>인
                          </>
                        )}
                      </span>
                      <span className="txt_box">
                        <span className="txt2">{el.txt1}</span>
                        <span className="txt3">{el.txt2}</span>
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <button className="btn_close" onClick={close}>
                <span className="hiddenZoneV">닫기</span>
              </button>
            </TipWrap>
          </Modal>
          <Modal open={openNutrient} onClose={closesetOpenNutrient}>
            <NutrientWrap>
              <div className="box_info">
                <div className="pc">
                  <img src="/images/popup/info_nutrient_new.gif" alt="고피자 영양분석표" />
                  <img src="/images/popup/info_nutrient_new2.gif" alt="고피자 영양분석표" />
                  <img src="/images/popup/info_nutrient_new3.gif" alt="고피자 영양분석표" />
                </div>
                <div className="mobile">
                  <img src="/images/popup/info_nutrient_new_mobile.gif" alt="고피자 영양분석표" />
                  <img src="/images/popup/info_nutrient_new_mobile2.gif" alt="고피자 영양분석표" />
                  <img src="/images/popup/info_nutrient_new_mobile3.gif" alt="고피자 영양분석표" />
                </div>
              </div>
              <button className="btn_close" onClick={closesetOpenNutrient}>
                <span className="hiddenZoneV">닫기</span>
              </button>
            </NutrientWrap>
          </Modal>
        </div>
        <MenuList>
          {menuItem[categoryNav === -1 ? 0 : categoryNav].map((el: any, i: number) => {
            return (
              <li key={el.idx}>
                <Link href={`/menu/detail/${el.idx}`}>
                  <div className={`thumb ${el.badge === "best" ? "badge best" : el.badge === "new" ? "badge new" : ""}`}>
                    <img
                      src={
                        categoryNav === -1
                          ? `/images/menu/large/img_item${i + 1}x2.webp?v=2`
                          : `/images/menu${router.asPath.split("/menu")[1]}/img_item${i + 1}x2.webp?v=2`
                      }
                      alt="메뉴배경이미지"
                    />
                  </div>
                  <div className="ko_name">
                    {el.name === "페퍼로니 앤 포테이토 반반 피자" ? (
                      <>
                        페페로니 앤 포테이토 <br />
                        반반 피자
                      </>
                    ) : (
                      el.name
                    )}
                  </div>
                  <div className={el.enName.length >= 25 ? "en_name long" : "en_name"}>{el.enName}</div>
                </Link>
              </li>
            );
          })}
        </MenuList>
      </MenuWrap>
    </>
  );
}

export default Menu;

export const getStaticProps = async (context: any) => {
  const { index } = context.params;
  // const menu = ["pasta", "topokki", "sides", "set", "powertime", "special"];
  const menu = ["personal", "pasta", "topokki", "sides", "set", "special"];

  return {
    props: { seo: index === undefined ? MenuSeo[0] : MenuSeo[menu.indexOf(index[0]) + 1] },
  };
};

export const getStaticPaths = async () => {
  const paths = [
    { params: { index: undefined } },
    { params: { index: ["personal"] } },
    { params: { index: ["pasta"] } },
    { params: { index: ["topokki"] } },
    { params: { index: ["sides"] } },
    { params: { index: ["set"] } },
    // { params: { index: ["powertime"] } },
    { params: { index: ["special"] } },
  ];

  return {
    paths,
    fallback: false, // 이 페이지에 대해 존재하지 않는 경로는 404 페이지를 표시합니다.
  };
};

export const NutrientWrap = styled.div`
  position: relative;
  width: 124rem;
  padding: 6.4rem 0 6.6rem;
  border-radius: 4.8rem;
  background: #fff;

  .box_info {
    overflow-y: scroll;
    width: 120.5rem;
    height: 80vh;
    margin: 5.6rem auto 0;
    padding-right: 4.5rem;
    .pc {
      display: block;
    }
    .mobile {
      display: none;
    }

    img:nth-of-type(2) {
      display: block;
      margin-top: 3.2rem;
    }
  }

  ${mq[0]} {
    width: calc(100vw - 40px);
    padding: 1rem;
    border-radius: 10px;

    .box_info {
      width: 100%;
      height: 75vh;
      margin: 0 auto;
      padding-right: 0;

      .pc {
        display: none;
      }
      .mobile {
        display: block;
      }
      img {
        width: 100%;
        &:nth-of-type(2) {
          margin-top: 1rem;
        }
      }
    }
  }
`;
