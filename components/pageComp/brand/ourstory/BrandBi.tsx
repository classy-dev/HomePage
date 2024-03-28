import Image from "next/image";
import { BrandBiWrap } from "./style";

function BrandBi() {
  return (
    <BrandBiWrap>
      <h4>BRAND IDENTITY</h4>
      <p className="pc">
        고피자의 타원형 심볼은 기존 피자의 한계를 넘어 완전히 새로운 피자의 시작을 상징합니다.
        <br />
        ‘도우’라는 캔버스 위 토핑에 따라 무한히 변화하는 피자의 특성처럼 끝없이 혁신하고 발전하는
        <br />
        고피자의 기업 문화와 다양한 고객의 취향을 반영합니다.
      </p>
      <p className="mobile">
        고피자의 타원형 심볼은 기존 피자의 한계를 넘어
        <br /> 완전히 새로운 피자의 시작을 상징합니다.
        <br />
        ‘도우’라는 캔버스 위 토핑에 따라 무한히 변화하는
        <br /> 피자의 특성처럼 끝없이 혁신하고 발전하는 고피자의 <br /> 기업 문화와 다양한 고객의 취향을 반영합니다.
      </p>
      <div className="type_img_sample">
        <div className="banner_2area">
          <picture>
            <source media="(max-width: 767px)" srcSet="/images/brand/ourstory/mobile/img_brandbi1_2x.webp" />
            <source media="(min-width: 768px)" srcSet="/images/brand/ourstory/img_brandbi1_2x.webp" />
            <img src="/images/brand/ourstory/img_brandbi1_2x.webp" alt="BRAND LOGO_SYMBOL VER. GOPIZZA" />
          </picture>
          <picture>
            <source media="(max-width: 767px)" srcSet="/images/brand/ourstory/mobile/img_brandbi2_2x.webp" />
            <source media="(min-width: 768px)" srcSet="/images/brand/ourstory/img_brandbi2_2x.webp" />
            <img src="/images/brand/ourstory/img_brandbi2_2x.webp" alt="BRAND LOGO_TYPE VER. GOPIZZA" />
          </picture>
        </div>
        <div className="brand_slogan">
          <picture>
            <source media="(max-width: 767px)" srcSet="/images/brand/ourstory/mobile/img_brandbi3_2x.webp" />
            <source media="(min-width: 768px)" srcSet="/images/brand/ourstory/img_brandbi3_2x.webp" />
            <img src="/images/brand/ourstory/img_brandbi3_2x.webp" alt="BRAND LOGO_SLOGAN. FAST but Delicious" />
          </picture>
        </div>
        <div className="brand_color">
          <picture>
            <source media="(max-width: 767px)" srcSet="/images/brand/ourstory/mobile/img_brandbi4_2x.webp" />
            <source media="(min-width: 768px)" srcSet="/images/brand/ourstory/img_brandbi4_2x.webp" />
            <img
              src="/images/brand/ourstory/img_brandbi4_2x.webp"
              alt="[BRAND COLOR] GOPIZZA ORANGE - 고피자의 열정과 도전 (RGB : 255 70 22, CMYK : 0 82 100 0, PANTONE : 172C), FLOUR IVORY - 본질에 집중하는 마음가짐 (RGB : 253 243 203, CMYK : 1 2 24 0, PANTONE : 7499CP)"
            />
          </picture>
        </div>
      </div>
    </BrandBiWrap>
  );
}

export default BrandBi;
