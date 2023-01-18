import styled from "styled-components"

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  background-color: var(--black);
  border-radius: 0% 0% 10% 10%;
  padding: 3em;
  border-bottom: 0.1em solid var(--blue1);
  box-shadow: 0rem 0rem 2rem var(--blue3) inset;
  
  padding: 2em 0em 2em 0em;
  .Personal_data{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 1em 0em;
    color:var(--blue1);
  }
  figure{
    width: 20%;
    img{
      border-radius: 50%;
      width: 100%;
      border:var(--blue1) solid 0.2em;
      box-shadow: 0rem 0rem 2rem var(--blue3)
      
    }
  }
  svg:hover{
    cursor: pointer;
  }
  h2{
    color: var(--blue1);
    font-family: Arial, Helvetica, sans-serif, 'Roboto';
    
  }
  .nav--page{
    display: none;
    flex-wrap: wrap;
    width: 60%;
    justify-content: space-between;
    color:var(--blue1);
  }
  
  .nav--outpage{
    display: none;
    width: 100%;
    justify-content: space-around;
    color: var(--blue1);
  }
  .nav--inpage{
    display: none;
    width: 100%;
    justify-content: space-around;
    color: var(--blue1);
    border-radius: 0% 0% 20% 20%;
    
    a{
      text-decoration: none;
      color:var(--blue1);
      font-weight: bold;
    }
  }
  @media(min-width:500px){

    .nav--page{
      display: flex;
    }
    .nav--outpage{
      display: flex;
    }
    .nav--inpage{
      display: flex;
    }
  }

`