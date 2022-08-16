import styled from "styled-components"

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  padding: 5px;
  .Personal_data{
    display: flex;
    align-items: center;
  }
  figure{
    width: 10%;
    img{
      border-radius: 50%;
      width: 100%;
      border:#FFF solid 0.2em

    }
  }
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
    display: none;
    width: 100%;
    justify-content: space-around;
    color: #FFF;
  }
  .nav--inpage{
    display: none;
    width: 100%;
    justify-content: space-around;
    color: #FFF;
    a{
      text-decoration: none;
      color:#FFF;
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