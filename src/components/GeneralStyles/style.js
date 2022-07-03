import styled from "styled-components"

export const StyledSection = styled.section`
  background-color: #000;
  color: #FFF;
  display: flex;
  flex-direction:column;
  align-items: center;
  flex-wrap: wrap;
  width: 360px;
  height: fit-content;
  
  h2{    
    width: 100%;
    margin: 0px;
    height: fit-content;    
  }
  h3{
    margin: 0px;
    
  }
  p{
    margin: 0px;
    text-align: justify;
    width: 270px;
  }
  
  
  figure{
    margin: 0px;
  }

  img{
    width: 250px;
  }    
  
  ul{
    padding: 0px;
  }  
  ul li{
    list-style: none;
    
  }
  .list--container{
    display: flex;
    gap: 40px;
  }
  .project--list{
    display: flex;
    width: 310px;
    flex-wrap: wrap;
    font-size: 8px;
    gap: 5px;
    li{
      border-radius: 20px;
      width: 40%;
      gap: 10px;
      padding: 10px;
      color: #000;
      background-color: #FFF;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
     
    }
    
    h3{
      color: #A9A;
      width: 100%;
      text-align: center;
    }
    :hover{
      cursor: pointer;
    }
  }
  @media(min-width:500px){

    flex-direction: column;
    overflow-x: hidden;
    align-items: center;
    width: 50%;
    p{
      width: 80%;
    }
    .project--list{
      width: 80%;
      li{
      width: 25%;
      }
      figure{
        width: 95%;
      }
      img{
        width: 80%;
      }
    }
  }
  

`

