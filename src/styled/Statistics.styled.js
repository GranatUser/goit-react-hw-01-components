import styled, { css } from 'styled-components';

export const StyledStatistics = styled.section`

& h2{
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background-color: white;
    padding: 40px;
    font-size: 26px;
    text-transform: uppercase;
    color: #525A61;
    text-align: center;
  
}

& ul {
display:flex;
    }
`
export const StyledStat = styled.li`
width: 100px;
height: 100px;
${props => props.color && css`
background-color: ${props.color} `};
text-align: center;
display:flex;
flex-direction: column;
box-sizing:border-box;
justify-content:center;
padding:15px;
color: white;
&:first-child{
     border-bottom-left-radius: 6px;
}
&:last-child{
     border-bottom-right-radius: 6px;
}
& span:last-child{
    font-size:20px;
    margin-top:10px;
    font-weight:500;
}
`
