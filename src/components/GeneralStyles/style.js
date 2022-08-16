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
    color: #a9a;   
  }
  h3{
    margin: 0px;
    color: #a9a;   
  }
  p{
    margin: 0px;
    text-align: justify;
    width: 270px;
  }
  
  .techs--container{
    display: flex;
    flex-direction: column;
    width: 100%;
    
    ul{
      display: flex;
      padding: 0px;
      justify-content: space-around;
      gap: 10px;
    }
    ul li{
      list-style: none;
      color:rgba(255,255,255,0.5)     
      
    }
  }
  
  figure{
    margin: 0px;
  }

  img{
    width: 290px;
  }    
  

  .list--container{
    display: flex;
    gap: 40px;
    flex-direction: column;
    width: 100%;
  }
  
  .qualification--container{
    padding: 0px;
    li{
      list-style: none;

    }
  }
  .project--list{
    display: flex;
    flex-direction: column; 
    width: 310px;
    flex-wrap: wrap;
    font-size: 8px;
    gap: 5px;
    padding: 0px;
    li{
      border-radius: 20px;
      gap: 10px;
      padding: 10px;
      color: #000;
      display: flex;
      justify-content:flex-start ;
      flex-wrap: wrap;
     p{
      color: #FFF;
      font-size: 1.5em;
     }
     nav{
      display: flex;
      width: 40%;
      justify-content: space-around;
     }
     button{
      display: flex;
      align-items: center;
      background-color: #000;
      border: none;
      color: #FFF;
      font-size: 1.5em;
     }
    }
    
    h3{
      color: #A9A;
      text-align:left;
      width: 100%;
      font-size: 2em;
      font-weight: bold;
    }
    button:hover{
      cursor: pointer;
    }
    
  }



  @media(min-width:500px){

    flex-direction: column;
    overflow-x: hidden;
    align-items: flex-start;
    width: 50%;
    p{
      width: 80%;
    }
   
    .project--list{
      width: 80%;
      
      figure{
        width: 95%;
      }
      img{
        width: 80%;
      }
    }
  }
  

`

