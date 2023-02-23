import styled from 'styled-components';

export const StyledTransactionHistory = styled.table`
& th{
    color:white;
    background-color: #00BCD5;
    font-weight: 500;
}
& th, & td{
    width: 200px;
    height: 50px;
}
& td:first-child{
 text-transform:capitalize;
 text-align: left;
 text-indent: calc(5rem);
}
&>tbody>tr{
     background-color:white;
     text-align: center;
    
}
&>tbody>tr.tr--grey{
   background-color:#ECF1F4;
}
`