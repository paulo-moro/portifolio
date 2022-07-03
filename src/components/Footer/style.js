import styled from "styled-components"

export const StyledFooter = styled.footer`
display: flex;
width: 100%;
justify-content: space-around;
flex-direction: column;
align-items: center;
background-color: #000;
padding: 5px;
svg:hover{
    cursor: pointer;
  }

h2{
  color: #FFF;
}
.nav--page{
  display: none;
  flex-wrap: wrap;
  width: 60%;
  justify-content: space-between;
  color: #FFF;
}

.nav--outpage{
  display: flex;
  width: 100%;
  justify-content: space-around;
  color: #FFF;
}
  @media(min-width:500px){

  .nav--page{
    display: flex;
  }

}

`