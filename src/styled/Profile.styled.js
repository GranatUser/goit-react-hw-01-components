import styled from 'styled-components';

export const StyledProfile = styled.div`
width: 330px;
border-radius: 4px;
height: auto;
border: 2px solid  #EAEEF3;
display: flex;
align-items: center;
flex-direction: column;
 background-color: white;
-webkit-box-shadow: 0.5px 0.5px 0.5px 0.5px rgba(23,21,23,0.23);
-moz-box-shadow: 0.5px 0.5px 0.5px 0.5px rgba(23,21,23,0.23);
box-shadow: 0.5px 0.5px 0.5px 0.5px rgba(23,21,23,0.23);
`
export const StyledProfileInfo = styled.div`
width: 200px;
height: auto;
display: flex;
flex-direction: column;
padding-top: 40px;
padding-bottom: 40px;
text-align: center;
row-gap: 8px;
& .user-name{
font-size: 26px;
font-weight: 600;
}

& .user-tag, & .user-location{
    font-size:22px;
    color: grey;
}

& img{
    border: 3px solid #EAEEF3;
    border-radius: 50%;
    width: 200px;
    height: 200px;
}`
export const StyledStatistics = styled.ul`
display: flex;
width: 100%;
& li{
    display: flex;
    flex-direction: column;
    align-Items: center;
    border-top: 2px solid #EAEEF3;
    width:33.33%;
    padding: 20px 0 20px 0;
    background-color: #F3F6F9;
    & .statistics{
        font-weight: 700;
        font-size: 20px;
    }
}
& li:nth-child(2){
    border-left:2px solid #EAEEF3;
    border-right: 2px solid #EAEEF3;
}
`

