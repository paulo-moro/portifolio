import styled from "styled-components";

export const StyledModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0,.5);
  position: fixed;
  top: 0px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  
  div{
    width: 30%;
    background-color: #C5C6C5;
    padding: 2rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    section{
      width: 100%;
      justify-content: space-between;
      display: flex;
      align-items: center;
      font-size: 20px;
      button{
        padding: 2px;
        color:#FFFFFF;
        background-color: #C5C6C5;
        border: none;
        :hover{
          cursor: pointer;
          color: blue;
        }
      }
    }
  nav{
    width: 100%;
    display: flex;
    justify-content: space-between;
    button{
        color:#FFFFFF;
        background-color: #C5C6C5;
        border: none;
        :hover{
          cursor: pointer;
          color: blue;
        }
      }
    }
  }
`