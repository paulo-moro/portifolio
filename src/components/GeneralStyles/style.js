import styled from "styled-components"

export const StyledSection = styled.section`
  background-color: var(--black0);
  color: var(--blue1);
  display: flex;
  flex-direction:column;
  align-items: center;
  flex-wrap: wrap;
  width: 95%;
  height: fit-content;
  font-family: Arial, Helvetica, sans-serif, 'Roboto';
  box-shadow: 0rem 0rem 2rem var(--blue3) inset;
  padding: 1.5rem;
  border-radius: 2rem;
  gap: 0.5rem;
  
  h2{    
    width: 100%;
    margin: 0px;
    font-family: Arial, Helvetica, sans-serif, 'Roboto';
    height: fit-content; 
    color: var(--blue1);   
    font-weight: bold;
    text-align: center;
  }
  h3{
    margin: 0px;
    color: var(--blue1);
    font-family: Arial, Helvetica, sans-serif, 'Roboto';
    padding   : 2em 0em ;
    text-align: center;
  }
  p{
    margin: 0px;
    text-align: justify;
    width: 270px;
    font-family: Arial, Helvetica, sans-serif, 'Roboto';
  }
  
  .techs--container{
    display: flex;
    flex-direction: column;
    width: 360px;
    
    ul{
      display: flex;
      padding: 0px;
      justify-content: space-around;
      gap: 10px;
      flex-wrap: wrap;
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
      flex-wrap: wrap;
     p{
      color: var(--blue1);
      font-size: 1.5em;
     }
     nav{
      display: flex;
      justify-content: center;
      width: 100%;
      gap: 2rem;
     }
     button{
      display: flex;
      align-items: center;
      background-color: var(--blue3);
      border: none;
      padding: 0.5em;
      border-radius: 1em;
      color: var(--blue1);
      font-size: 1.5em;
     }
    }
    
    h3{
      color: var(--blue2);
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
    display: flex;
    flex-direction: column;
    align-items: center;
   
    .list--container{
      align-items: center;
    }
    p{
      width: 80%;
    }
   
    .project--list{
      width: 80%;
      li{
        display: flex;
        justify-content:center;
      }
      li h3{
        text-align: center;
      }
      li p{
        text-align: center;
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

