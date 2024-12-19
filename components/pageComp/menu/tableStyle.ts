import styled from "@emotion/styled";
import { mq } from "ComponentsFarm/common";

export const Container = styled.div`  
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);

  ${mq[0]} {
    display:block;
  }
`;


export const Table = styled.table`
  width: 100%;
  margin: 2rem 0;
  font-size: 1.2rem;
  text-align: center;
  border-collapse: collapse;

  ${mq[0]} { 
    th {
      padding:1rem 0 !important;
    }
    td {
      padding:1rem 0.2rem !important;
    }
    font-size: 0.8rem; 
  }

  th, td {
    &:nth-of-type(1) {
      width:24%;
    }
    &:nth-of-type(2) {
      width:8%;
    }
    &:nth-of-type(3) {
      width:8%;
    }
    &:nth-of-type(4) {
      width:7%;
    }
    &:nth-of-type(5) {
      width:7%;
    }
    &:nth-of-type(6) {
      width:8%;
    }
    &:nth-of-type(7) {
      width:8%;
    }
    &:nth-of-type(8) {
      width:8%;  
    }
    &:nth-of-type(9) {
      width:22%;
    }
  }
  

  th {
        color: white;
        padding: 1.2rem;
    }

    td {
        padding: 1rem;
        &.menu-name {
            span {
                display: block;
                text-align: left;
                font-weight: bold;
            }
            .ko {    
                color: #231f20;
                font-size: 1.2rem;
            }
            .en {
                color: #58595b;
                font-size:0.9rem;
            }
        }

        ${mq[0]} {
          &.menu-name {          
            .ko {    
                font-size: 0.8rem;
            }
            .en {
                font-size:0.6rem;
            }
        }
  }
    }

  &.ver2-store {
    tr {
        &:nth-of-type(even) {
            background-color: #A7A3A2;
        }
    }
    th {
        background-color: #231917;
    }
    th,td {
          border-left: 1px solid #231917;
          &:nth-of-type(1) {
            border-left: none;
            }
    }
  }

`;





const Tr = styled.tr`
  &:nth-of-type(odd) {
    background-color: #efebe9;
  }
  &:nth-of-type(even) {
    background-color: white;
  }
  &:hover {
    background-color: #d7ccc8;
  }
`;