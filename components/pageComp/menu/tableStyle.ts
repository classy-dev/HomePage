import styled from "@emotion/styled";

export const Table = styled.table`
  width: 100%;
  margin: 2rem 0;
  font-size: 1.4rem;
  text-align: center;
  border-collapse: collapse;

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
                font-size: 1.4rem;
            }
            .en {
                color: #58595b;
                font-size: 1rem;
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