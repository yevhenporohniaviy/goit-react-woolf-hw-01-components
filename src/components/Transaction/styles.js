import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  border: 1px solid #d9e1ec;
  width: 600px;
  margin: 60px auto;
  padding: 10px;
  border-collapse: collapse;

  & th,
  & td {
    padding: 10px;
    text-align: center;
  }

  & th {
    background-color: #05bcd5;
    color: white;
    font-weight: bold;
    border: 1px solid #d9e1ec;
  }

  & tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  & td {
    border: 1px solid #d9e1ec;
  }
`;
