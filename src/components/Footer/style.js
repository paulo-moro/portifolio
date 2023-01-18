import styled from "styled-components"

export const StyledFooter = styled.footer`
display: flex;
width: 100%;
justify-content: space-around;
flex-direction: column;
align-items: center;
background-color: var(--black);
padding: 3em 0em 3em 0em;
border-radius: 10% 10% 0% 0%  ;
border-top: 0.1em var(--blue1) solid;
box-shadow: 0rem 0rem 2rem var(--blue3) inset;
svg:hover{
    cursor: pointer;
  }

h2{
  color: var(--blue1);
}
.nav--page{
  display: none;
  flex-wrap: wrap;
  width: 60%;
  justify-content: space-between;
  color: var(--blue1);
}

.nav--outpage{
  display: flex;
  width: 100%;
  justify-content: space-around;
  color: var(--blue1);
}
  @media(min-width:500px){

  .nav--page{
    display: flex;
  }

}

`