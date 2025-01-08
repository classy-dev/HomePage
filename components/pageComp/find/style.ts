import styled from "@emotion/styled";
import { folder, mq } from "ComponentsFarm/common";

export const FindWrap = styled.main`
  width: 128rem;
  margin: 9rem auto 17.4rem;

  h2 {
    margin-bottom: 13.2rem;
  }

  .sub_tit {
    display: flex;
    align-items: baseline;
    margin-bottom: 2.4rem;

    h3 {
      font-size: 2.4rem;
      font-weight: 700;
    }

    .txt {
      margin-left: 2.2rem;
      color: #aaa;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 1.6rem;
    }
  }

  .wrp_filter {
    display: flex;
    margin-bottom: 4.8rem;

    select {
      width: 29rem;
      padding: 0 2.4rem;
      border-radius: 5.6rem;
      background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/find/sel_find.webp") no-repeat #fff 94% 51% / 1.8rem 1.1rem;

      &:last-of-type {
        margin: 0 2.4rem;
      }
    }
  }

  .box_search_keyword {
    display: flex;
    border: 1px solid var(--color-inputBorder);
    border-right: none;
    border-radius: 5.6rem;
    input {
      width: 29rem;
      border: none;
      border-radius: 5.6rem;
    }
    button {
      width: 10.5rem;
      height: 5.6rem;
      font-size: 1.8rem;
      color: #fff;
      border-radius: 0 2.8rem 2.8rem 0;
      background: var(--color-orange);
    }
  }

  .list_filter_store {
    display: flex;
    
    li {
      width: 14.5rem;
      height: 15.6rem;
      margin-right: 1.6rem;
      border-radius: 0.4rem;
      border: 1px solid #e0e0e0;
      text-align: center;
      cursor: pointer;



      &.fst {
        .box_img {
         filter: grayscale(100%) brightness(327%);
        }
      }

      &:nth-of-type(4) {
        .box_img {
         filter: grayscale(100%) brightness(166%);
        }
      }


      &:nth-of-type(5) {
        .box_img {
         filter: grayscale(100%) brightness(116%);
        }
      }



      &.on {
        position:relative;
        &:before {
          content:"";
          position:absolute;
          top:-1px;
          left:-1px;
          width:100%;
          height:100%;
          border:1px solid #ff4600;
          border-radius: 0.4rem;
        }
        .box_img {
          filter: unset;
        }
      }

      .box_img {
        margin-top: 3.3rem;
        filter: grayscale(100%);

       
      }

      .txt {
        margin-top: 1.6rem;
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 1rem;
      }

      img {
        width: 6.4rem;
        height: 6.4rem;
      }
    }
  }

  .list_store {
    border-top: 0.3rem solid #ec5528;
    margin-top: 6.25rem;

    .box_basicInfo {
      button {
        display: block;
        width: 15rem;
        height: 3.8rem;
        margin: 1.5rem auto 0;
        font-size: 1.5rem;
        color: #fff;
        border-radius: 2rem;
        background: var(--color-bluedark);
        cursor: pointer;
      }
    }

    &.off {
      li {
        background: none;
        display: flex;
        align-items: center;
        padding: 5rem 4rem;
        justify-content: center;
        flex-direction: column;

        p {
          font-size: 2rem;
        }
      }
    }

    li {
      .wrap_info {
        display: flex;
        align-items: center;
        .logo {
          width: 6.4rem;
          height: 6.4rem;
          margin: 0 2.4rem; 0 5.6rem;
        }
      }

      padding: 3.05rem 0 3.05rem;
      border-bottom: 1px solid #ddd;
      background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/find/go_find.svg") no-repeat 117.6rem 6.35rem / 8rem;

      &:not(.on) {
        height: 20.7rem;
      }

      &.on {
        border-bottom: none;
        background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/find/go_find_on.svg") no-repeat 117.6rem 6.35rem / 8rem;
        dl {
          dt {
            color: var(--color-orange);
            .distance {
              color: var(--color-bluedark);
            }
          }
        }

        #react-kakao-maps-sdk-map-container {
          width: 100%;
          height: 40rem;
          margin-top: 3.2rem;
        }
      }

      @media (min-width:1000px) {
        dl {
        width: calc(100% - 8.8rem);
        }
      }



      dt {
        font-size: 3.2rem;
        font-weight: bold;
        line-height: 1.38;

        .distance {
          margin-left: 0.8rem;
          font-family: "rucksack";
          font-size: 2.4rem;
          color: var(--color-gray);
        }
      }

      .address {
        margin: 1.6rem 0 2.4rem;
        font-size: 2rem;
      }

      .info {
        display: flex;
        align-items: center;

        .wrap_time {
            display:flex;
          }
          

        span {
          display: block;
          height: 3.2rem;
          line-height: 3.2rem;
          margin-right: 4.9rem;
          padding-left: 4.8rem;
          font-size: 2rem;
          font-family: "rucksack";
          
          &.tel {
            margin-right: 4.9rem;
          }


          &.time {
            margin-right:0;
          }

          &.regular_holiday {
            padding-left: 0.5rem;
          }

          &.pc {
            padding-left: 0;
          }

       
        }

        .tel {
          .mobile {
            display: none;
          }
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/find/ico_tel.svg") no-repeat left center / 3.2rem;
        }

        .time {
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/find/ico_time.svg") no-repeat left center / 3.2rem;
        }
      }
    }
  }
  .list_filter_store {
    dispaly: flex;
  }
  ${mq[0]} {
    width: 100%;
    margin: 0 auto;
    padding-bottom: 90px;

    h2 {
      display: block;
      margin: 0;
      padding: 36px 0 30px;
      font-size: 24px;
    }

    .wrp_filter {
      display: block;
      padding: 0 20px;

      select {
        display: inline-block;
        width: calc(50% - 5px);
        height: 40px;
        padding: 0 13px;
        font-size: 14px;
        background-size: 12px auto;
        background-position: 94% 51.5%;

        &:last-of-type {
          margin: 0 0 0 10px;
        }
      }

      .box_search_keyword {
        width: 100%;
        margin-top: 15px;
        height: 40px;

        input,
        button {
          height: 38px;
        }

        input {
          padding: 0 16px;
          font-size: 14px;
        }
        button {
          margin-left: auto;
        }
      }
    }

    .list_store {
   
      margin: 47.5px 20px 0;

      &.off li {
        padding: 50px 0;
        p {
          font-size: 14px;
        }
      }

      li {
        padding: 19.5px 0;
        height: auto !important;
        background-position: 100% 18.5px !important;
        background-size: 32px !important;

        &.on {
          #react-kakao-maps-sdk-map-container {
            height: 194px;
          }
        }

        dl {
          padding: 0;
        }
        dt {
          font-size: 20px;
          line-height: 28px;

          .distance {
            margin-left: 5px;
            font-size: 14px;
          }
        }
        .address {
          margin: 4px 0 8px;
          font-size: 12px;
        }
        .info {
          span {
            height: 20px;
            line-height: 20px;
            margin-right: 37px;
            padding-left: 28px;
            font-size: 12px;
            background-size: 20px !important;

           
          }
          .pc {
            display: none;
          }
          .mobile {
            display: block !important;
          }
        }
      }
    }
  }


  ${mq[0]} {
    .wrp_filter {
      margin-bottom: 2.4rem;
    }

    .sub_tit {
      flex-direction: column;
      gap: 0.4rem;
      margin-left: 2.2rem;

      h3 {
        font-size: 1.8rem;
      }

      .txt {
        margin-left: 0;
        font-size: 1.4rem;
      }

    }

    .list_filter_store {
      display: grid;
        grid-template-columns: repeat(3, 1fr);
      padding: 0 2rem;

      li {
        flex: 1;
        width: 100%;
        height:10.2rem;
        margin: 0;    
        border-radius:0;

        &.on::before {
          border-radius:0;
        }

        img {
          width:5rem;
          height:5rem;
        }

        .box_img {
          margin-top:1.6rem;
        } 
        .txt  {
          margin-top:0.8rem;
          font-size:1.2rem;
        }

        &:nth-of-type(4), &:nth-of-type(5) {
            border-top:0;
        }
        &:nth-of-type(1),  &:nth-of-type(4) {
          border-right:0;
        }
        &:nth-of-type(3) {
          border-left:0;
        }
        
        
      }
    }
   

    .list_store li {
      background-position: 100% 2rem !important;

      &.gs25 {
        .time {
          display:none;
        }
      }

      .wrap_info .logo {
      width: 5rem;
      height: 5rem;
      margin: 0 1.2rem 0 0;
      }

      dl {
        flex:1;

        dt {font-size:1.6rem}
      }

      .info {
          display:block;
          .wrap_time {
            display:flex;
            }

          .tel {
            margin-bottom:0.5rem;  

            a {width:fit-content;}
          }
      }
    }

    

  }

  ${folder} {
    .wrp_filter select {
      font-size: 12px;
    }
    .list_store li {
      background: none;
    }
  }
`;
