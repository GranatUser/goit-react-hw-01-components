import styled from 'styled-components';


export const StyledFriendList = styled.ul`
width:200px;
display: flex;
flex-direction:column;
row-gap: 5px;
&>li{
    padding: 5px;
background-color: white;
display:flex;
align-items:  center;
column-gap: 10px;
border-radius: 4px;
&>img{
    border-radius: 25%;
    background-color: gray;
}
    &>span {
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        &.online{
            background-color: green;
        }
          &.non-online{
            background-color: red;
        }
  }
}
`