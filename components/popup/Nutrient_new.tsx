import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Dialog from "ComponentsFarm/common/Dialog";
import { useRef } from "react";

export const NutrientWrap = styled.div`
  position: relative;
  width: 124rem;
  padding: 6.4rem 0 6.6rem;
  border-radius: 4.8rem;
  background: #fff;

  .box_info {
    overflow-y: scroll;
    width: 112.5rem;
    height: 57.8rem;
    margin: 5.6rem auto 0;
    padding-right: 4.5rem;
  }
`;

function Nutrient({ popref }: any) {
  return (
    <Dialog ref={popref}>
      <NutrientWrap>
        <div className="box_info">
          <img src="/images/popup/info_nutrient_new.webp" alt="고피자 영양분석표" />
        </div>
        <button
          className="btn_close"
          onClick={() => {
            document.body.classList.remove("overflowhidden");
            popref.current?.close();
          }}
        >
          <span className="hiddenZoneV">닫기</span>
        </button>
      </NutrientWrap>
    </Dialog>
  );
}

export default Nutrient;
